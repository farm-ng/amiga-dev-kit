import os
import microcontroller
import board
import canio
import digitalio
import supervisor
import gc
from io import StringIO
import struct
import time
import canio
import supervisor
import random
from gc import mem_free, mem_alloc


class BoardType:
    AMIGA_DISPV0 = 1
    FEATHER_M4_CAN = 2
    LINUX = 3
    UNKNOWN = 0


def get_board_type():
    uname = os.uname()
    print(uname)
    if "Amiga_DispV0" in uname.machine:
        return BoardType.AMIGA_DISPV0
    if "Adafruit Feather M4 CAN" in uname.machine:
        return BoardType.FEATHER_M4_CAN
    if "x86_64" in uname.machine:
        return BoardType.LINUX
    return BoardType.UNKNOWN


def setup_can(rx, tx, baudrate, auto_restart):
    # Use this line if your board has dedicated CAN pins. (Feather M4 CAN and Feather STM32F405)
    #    can = setup_can(rx=board.CAN_RX, tx=board.CAN_TX, baudrate=parm.can_baud, auto_restart=True)
    # Use this line for dashboard:
    #    can = setup_can(rx=microcontroller.pin.PB13, tx=microcontroller.pin.PB14, baudrate=parm.can_baud, auto_restart=True)

    # If the CAN transceiver has a standby pin, bring it out of standby mode
    if hasattr(board, "CAN_STANDBY"):
        standby = digitalio.DigitalInOut(board.CAN_STANDBY)
        print(f"CAN_STANDBY {board.CAN_STANDBY}")
        standby.switch_to_output(False)

    # If the CAN transceiver is powered by a boost converter, turn on its supply
    if hasattr(board, "BOOST_ENABLE"):
        boost_enable = digitalio.DigitalInOut(board.BOOST_ENABLE)
        print(f"BOOST_ENABLE {board.BOOST_ENABLE}")
        boost_enable.switch_to_output(True)

    can = canio.CAN(rx=rx, tx=tx, baudrate=baudrate, auto_restart=auto_restart)

    return can


CanBusStateDict = {
    str(canio.BusState.ERROR_PASSIVE): "PASSIVE",
    str(canio.BusState.ERROR_WARNING): "WARNING",
    str(canio.BusState.ERROR_ACTIVE): "ACTIVE",
    str(canio.BusState.BUS_OFF): "OFF",
}


def setup_can_default():
    board_type = get_board_type()
    baud_rate = 250_000
    if board_type == BoardType.AMIGA_DISPV0:
        return setup_can(
            rx=microcontroller.pin.PB13,
            tx=microcontroller.pin.PB14,
            baudrate=baud_rate,
            auto_restart=True,
        )
    elif board_type == BoardType.FEATHER_M4_CAN:
        return setup_can(
            rx=board.CAN_RX,
            tx=board.CAN_TX,
            baudrate=baud_rate,
            auto_restart=True,
        )
    elif board_type == BoardType.LINUX:
        return setup_can(
            rx=board.CAN_RX,
            tx=board.CAN_TX,
            baudrate=baud_rate,
            auto_restart=True,
        )
    else:
        assert False, "BoardType not supported"


DASHBOARD_NODE_ID = 0xE
PENDANT_NODE_ID = 0xF


class ReqRepIds:
    NA = 0
    SUPERVISOR = 1


class SupervisorReqRepIds:
    NOP = 0


class PendantButtons:
    PAUSE = 0x01
    BRAKE = 0x02
    PTO = 0x04
    CRUISE = 0x08
    LEFT = 0x10
    UP = 0x20
    RIGHT = 0x40
    DOWN = 0x80


class Packet:
    @classmethod
    def from_can_data(cls, data):
        obj = cls()  # Does not call __init__
        obj.decode(data)
        obj.stamp()
        return obj

    @classmethod
    def make_mesage(cls, node_id, packet):
        return canio.Message(
            id=(cls.cob_id | node_id),
            data=packet.encode(),
        )

    def stamp(self):
        self.ticks_ms = supervisor.ticks_ms()

    def fresh(self, thresh_ms=500):
        # is this packet more than 500 ms old
        return self.age() < thresh_ms

    def age(self):
        return ticks_diff(supervisor.ticks_ms(), self.ticks_ms)


class PendantState(Packet):
    def __init__(self, x=0, y=0, buttons=0):
        self.format = "<hhI"
        self.x = x
        self.y = y
        self.buttons = buttons
        self.stamp()

    def encode(self):
        return struct.pack(
            self.format,
            int(self.x * 32767),
            int(self.y * 32767),
            self.buttons,
        )

    def decode(self, data):
        (xi, yi, self.buttons) = struct.unpack(self.format, data)
        self.x = xi / 32767
        self.y = yi / 32767

    def __str__(self):
        return "x {:0.3f} y {:0.3f} buttons {}".format(
            self.x,
            self.y,
            self.buttons,
        )


class PendantLEDs(Packet):
    def __init__(self, leds=0, backlight=0, rgb=(0, 0, 0)):
        self.format = "<5B"
        self.leds = leds
        self.backlight = backlight
        self.rgb = rgb
        self.stamp()

    def encode(self):
        return struct.pack(
            self.format,
            self.leds,
            self.backlight,
            self.rgb[0],
            self.rgb[1],
            self.rgb[2],
        )

    def decode(self, data):
        (self.leds, self.backlight, r, g, b) = struct.unpack(self.format, data)
        self.rgb = (r, g, b)

    def __str__(self):
        return "LEDs {} backlight {} rgb {}".format(
            self.leds,
            self.backlight,
            self.rgb,
        )


class SupervisorReq(Packet):
    cob_id = 0x600  # SDO command

    format = "<BB6s"

    def __init__(self, id=SupervisorReqRepIds.NOP, payload=bytes(6)) -> None:
        self.id = id
        self.payload = payload

    def encode(self):
        return struct.pack(self.format, ReqRepIds.SUPERVISOR, self.id, self.payload)

    def decode(self, data):
        (id, self.id, self.payload) = struct.unpack(self.format, data)
        assert id == ReqRepIds.SUPERVISOR

    def __str__(self):
        return "superviser req {} payload {}".format(
            self.id,
            self.payload,
        )


class SupervisorRep(Packet):
    cob_id = 0x580  # SDO reply
    format = "<BB6s"

    def __init__(self, id=SupervisorReqRepIds.NOP, payload=bytes(6)) -> None:
        self.id = id
        self.payload = payload

    def encode(self):
        return struct.pack(self.format, ReqRepIds.SUPERVISOR, self.id, self.payload)

    def decode(self, data):
        (id, self.id, self.payload) = struct.unpack(self.format, data)
        assert id == ReqRepIds.SUPERVISOR

    def __str__(self):
        return "supervisor rep  id {} payload {} ".format(
            self.id,
            self.payload,
        )


class NodeState:
    BOOTUP = 0x00  # Boot up / Initializing
    STOPPED = 0x04  # Stopped
    OPERATIONAL = 0x05  # Operational
    PRE_OPERATIONAL = 0x7F  # Pre-Operational


class FarmngHeartbeat(Packet):
    format = "<BI3s"
    cob_id = 0x700

    def __init__(self, node_state: int = 0, seconds: int = 0, serial_number=bytes()):
        self.node_state = node_state
        self.seconds = seconds  # machine time in seconds (over life of machine)
        # assert len(data) <= 5
        self.serial_number = serial_number

    def encode(self):
        return struct.pack(
            self.format, self.node_state, self.seconds, self.serial_number[:3]
        )

    def decode(self, data):
        (self.node_state, self.secods, self.serial_number) = struct.unpack(
            self.format, data
        )

    def __str__(self):
        return f"node_state: {self.node_state} seconds: {self.seconds} serial_number: {self.serial_number}"


class NvmValueStore:
    _next_address = 0

    @classmethod
    def get_next_address(cls, size):
        addr = cls._next_address
        cls._next_address += size
        return addr


def clear_nvm_storage():
    microcontroller.nvm[:] = [0x00] * len(microcontroller.nvm)


class NvmValue:
    def __init__(self, name, format: str, *default) -> None:
        self.name = name
        self.name_format = f"<{len(name)}sH"
        self.name_size = struct.calcsize(self.name_format)
        self.name_address = NvmValueStore.get_next_address(self.name_size)
        self.default = default
        self.value_format = format
        self.value_size = struct.calcsize(self.value_format)
        self.value_address = NvmValueStore.get_next_address(self.value_size)
        self.write_default()

    def read_name(self):
        name, val_addr = struct.unpack(
            self.name_format,
            microcontroller.nvm[self.name_address : self.name_address + self.name_size],
        )
        return name.decode("ascii"), val_addr

    def write_default(self):
        try:
            name, val_addr = self.read_name()
            if name == self.name:
                assert val_addr == self.value_address, (val_addr, self.value_address)
                return
        except Exception as e:
            print(e)

        microcontroller.nvm[
            self.name_address : self.name_address + self.name_size
        ] = struct.pack(self.name_format, self.name, self.value_address)
        self.write(*self.default)

    def write(self, argv):
        if type(argv) not in (list, tuple):
            argv = (argv,)
        microcontroller.nvm[
            self.value_address : self.value_address + self.value_size
        ] = struct.pack(self.value_format, *argv)

    def read(self):
        return struct.unpack(
            self.value_format,
            microcontroller.nvm[
                self.value_address : self.value_address + self.value_size
            ],
        )


def random_string(length):
    chars = [
        # "0", # Remove 0 vs O ambiguity
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        # "O", # Remove 0 vs O ambiguity
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ]
    random.seed(supervisor.ticks_ms())
    return "".join(random.choice(chars) for i in range(length))


def random_wifi_password():
    return random_string(32)


nvm_serial_number = NvmValue(
    "sn", "<100s", random_string(100)
)  # up to a 100 character string
nvm_seconds = NvmValue(
    "seconds", "<I", 0
)  # Total uptime in minutes, unsigned integer is enough for 133 years...

_TICKS_PERIOD = 1 << 29
_TICKS_MAX = _TICKS_PERIOD - 1
_TICKS_HALFPERIOD = _TICKS_PERIOD // 2


def ticks_add(ticks, delta):
    "Add a delta to a base number of ticks, performing wraparound at 2**29ms."
    return (ticks + delta) % _TICKS_PERIOD


def ticks_diff(ticks1, ticks2):
    "Compute the signed difference between two ticks values, assuming that they are within 2**28 ticks"
    diff = (ticks1 - ticks2) & _TICKS_MAX
    diff = ((diff + _TICKS_HALFPERIOD) & _TICKS_MAX) - _TICKS_HALFPERIOD
    return diff


def ticks_less(ticks1, ticks2):
    "Return true iff ticks1 is less than ticks2, assuming that they are within 2**28 ticks"
    return ticks_diff(ticks1, ticks2) < 0


class DtTracker:
    _g_trackers = dict()

    def __init__(self, name):
        self.last_tick_ms = supervisor.ticks_ms()
        self.last_dt_ms = 0
        self.dt_history = [0]
        self.name = name
        DtTracker._g_trackers[name] = self

    def age(self, ticks_ms):
        return ticks_diff(ticks_ms, self.last_tick_ms)

    def start(self, ticks_ms=None):
        if ticks_ms is None:
            ticks_ms = supervisor.ticks_ms()
        self.last_tick_ms = ticks_ms

    def stop(self, ticks_ms=None):
        if ticks_ms is None:
            ticks_ms = supervisor.ticks_ms()
        dt_ms = ticks_diff(ticks_ms, self.last_tick_ms)
        self.last_dt_ms = dt_ms
        self.update_history(dt_ms)
        return dt_ms

    def update_history(self, dt_ms):
        self.dt_history.append(dt_ms)
        self.dt_history = self.dt_history[-10:]

    def update(self):
        ticks_ms = supervisor.ticks_ms()
        self.stop(ticks_ms=ticks_ms)
        self.start(ticks_ms=ticks_ms)

    def mean_dt(self):
        return sum(self.dt_history) / len(self.dt_history)

    def minmeanmax(self):
        h = self.dt_history
        return "%4.1f %4.1f %4.1f" % (min(h), self.mean_dt(), max(h))


class TickRepeater:
    def __init__(self, ticks_period_ms):
        self.ticks_period_ms = ticks_period_ms
        self.last_tick = supervisor.ticks_ms()
        self.updated = False

    def reset(self):
        self.last_tick = supervisor.ticks_ms()

    def update(self, ticks):
        next_tick = ticks_add(self.last_tick, self.ticks_period_ms)
        if ticks_less(next_tick, ticks):
            self.last_tick = next_tick
            self.updated = True
            return True
        return False

    def check(self):
        ticks = supervisor.ticks_ms()
        self.updated = False
        while self.update(ticks):
            pass
        return self.updated


def get_node_id():
    try:
        with open("/node_id.txt", "rt") as node_id_file:
            node_id = int(node_id_file.read(), 0)
    except:
        node_id = 0x42

    print(f"node_id = 0x{node_id:0x}")
    return node_id


class MainLoop:
    def __init__(self, AppClass, has_display=True, has_wifi=True) -> None:
        self.t0 = time.monotonic()

        self.node_id = get_node_id()
        if has_display:
            assert False, "Future Support: Display"
            self.display = Display()
        else:
            self.display = None
        if has_wifi:
            assert False, "Future Support: WIFI"
            self.wifi = WIFI()
        else:
            self.wifi = None

        self.serial_number = nvm_serial_number.read()[0]
        self.can = setup_can_default()
        self.listener = self.can.listen(timeout=0.001)
        self.heart_beat_repeater = TickRepeater(ticks_period_ms=1000)
        self.node_state = NodeState.BOOTUP
        self.seconds = nvm_seconds.read()[0]

        self.mem_repeater = TickRepeater(ticks_period_ms=100)
        self.mem_alloc = mem_alloc()
        self.mem_free = mem_free()

        self.can_bus_state = True
        self.can_tec = 0
        self.can_rec = 0

        self.show_debug = False
        self.show_wifi = False
        self.show_time = True
        self.show_mem = False
        self.show_can = True

        self.can_id_dts = dict()

        self.command_handlers = {
            int(SupervisorReq.cob_id | self.node_id): self.handle_supervisor_req
        }

        self.AppClass = AppClass
        self.app = None

        # Send first heartbeat
        self._send_heartbeat()

    def can_debug_str(self):
        if self.show_can:
            return f"can {self.can_bus_state} tec: {self.can_tec} rec: {self.can_rec}\n"
        else:
            return ""

    def update_mem(self):
        if self.mem_repeater.check() and self.show_mem:
            self.mem_free = mem_free()
            self.mem_alloc = mem_alloc()

    def init_app(self):
        self.app = self.AppClass(main_loop=self, can=self.can, node_id=self.node_id)

    def handle_supervisor_req(self, message):
        req = SupervisorReq.from_can_data(message.data)
        rep = Packet.make_mesage(self.node_id, SupervisorRep(req.id, req.payload))
        # for now echo back the request
        print(req, "->", rep)
        self.can.send(rep)

    def handle_message(self, message):
        dt = self.can_id_dts.get(message.id)
        if dt is None:
            dt = DtTracker(f"can/0x{message.id:03x}")
            self.can_id_dts[message.id] = dt
        dt.update()

        handler = self.command_handlers.get(message.id)
        if handler:
            handler(message)

    def update_can_stats(self):
        can = self.can
        bus_state = CanBusStateDict.get(str(can.state), "NA")
        if bus_state != self.can_bus_state:
            print(f"Bus state changed to {bus_state}")
        self.can_bus_state = bus_state
        self.can_tec = can.transmit_error_count
        self.can_rec = can.receive_error_count

    def debug_str(self):
        if not self.show_debug:
            return

        debug = StringIO()
        if self.show_can:
            debug.write(f"{self.can_debug_str()}\n")

        if self.show_time:
            ticks_now_ms = supervisor.ticks_ms()
            debug.write(f"up:{time.monotonic()-self.t0:.1f}\n")
            for key, value in sorted(DtTracker._g_trackers.items()):
                debug.write(
                    f"{key: <20}: {int(value.mean_dt()): <5d} age: {value.age(ticks_now_ms)} \n"
                )
        if self.show_mem:
            debug.write(f"mf: {self.mem_free} ma: {self.mem_alloc}\n")

        return debug.getvalue()

    def _send_heartbeat(self):
        # HEARTBEAT at 0x700 no longer follows CANopen standard 1 byte payload
        heart_msg = canio.Message(
            id=FarmngHeartbeat.cob_id | self.node_id,
            data=FarmngHeartbeat(
                self.node_state, self.seconds, self.serial_number[:3]
            ).encode(),
        )
        self.can.send(heart_msg)

    def update_heartbeat(self):
        if not self.heart_beat_repeater.check():
            return

        self.seconds = nvm_seconds.read()[0] + 1
        nvm_seconds.write(self.seconds)

        if self.node_state == NodeState.BOOTUP:
            self.node_state = NodeState.PRE_OPERATIONAL
        elif self.node_state == NodeState.PRE_OPERATIONAL:
            self.init_app()
            self.node_state = NodeState.OPERATIONAL
        self._send_heartbeat()

    def iter(self):
        gc.collect()
        self.update_can_stats()
        self.update_mem()
        self.update_heartbeat()

        # Parse messages
        messages = []
        while self.listener.in_waiting() > 0:
            message = self.listener.receive()
            messages.append(message)
            self.handle_message(message)

        if self.node_state == NodeState.OPERATIONAL:
            if self.app is not None:
                self.app.iter(messages)
            if self.display is not None:
                self.display.update(self)

        if self.wifi is not None:
            self.wifi.update(self)

    def _loop(self):
        while True:
            self.iter()

    def loop(self):
        if self.display is not None:
            self.display.exception_handler(self._loop)
        else:
            self._loop()
