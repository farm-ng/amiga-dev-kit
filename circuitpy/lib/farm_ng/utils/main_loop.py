# Copyright (c) farm-ng, inc.
#
# Licensed under the Amiga Development Kit License (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://github.com/farm-ng/amiga-dev-kit/blob/main/LICENSE
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# Python imports
from gc import collect as gc_collect
from gc import mem_alloc
from gc import mem_free
from io import StringIO
from time import monotonic

from canio import BusState
from canio import Message
from supervisor import ticks_ms

from .can import setup_can_default
from .general import DtTracker
from .general import TickRepeater
from .nvm import nvm_serial_number
from .packet import FarmngDebugMemory
from .packet import FarmngDebugTimer
from .packet import FarmngHeartbeat
from .packet import NodeState
from .packet import SupervisorReq

# CircuitPython modules
# Local imports

try:
    from farm_ng.display import Display, amiga_graphics, TAG_DEBUG, TAG_CUSTOM_START
    from bteve import RECTS, OPT_RIGHTX
except ImportError as e:
    print("No Display:", e)
    TAG_CUSTOM_START = 0


CanBusStateDict = {
    str(BusState.ERROR_PASSIVE): "PASSIVE",
    str(BusState.ERROR_WARNING): "WARNING",
    str(BusState.ERROR_ACTIVE): "ACTIVE",
    str(BusState.BUS_OFF): "OFF",
}


def get_node_id():
    """Returns the value from the node_id.txt file in root of CIRCUITPY drive, if exists Else returns an arbitrary
    default node id."""
    try:
        with open("/node_id.txt", "rt") as node_id_file:
            node_id = int(node_id_file.read(), 0)
    except OSError:
        node_id = 0x42

    print(f"node_id = 0x{node_id: 0x}")
    return node_id


class MainLoop:
    """Main driver for all farm-ng apps run on microcontrollers."""

    def __init__(self, AppClass, has_display=True) -> None:
        self.t0 = monotonic()

        self.node_id = get_node_id()
        if has_display:
            self.display = Display()
        else:
            self.display = None

        self.serial_number = nvm_serial_number.read()[0][:3]
        self.can = setup_can_default()
        self.listener = self.can.listen(timeout=0.001)
        self.heart_beat_repeater = TickRepeater(ticks_period_ms=1000)
        self.node_state = NodeState.BOOTUP

        self.mem_alloc = mem_alloc()
        self.mem_free = mem_free()

        self.can_bus_state = "NA"
        self.can_tec = 0
        self.can_rec = 0

        # On dash debug tools
        self.show_debug = False
        self.show_time = True
        self.show_mem = False
        self.show_can = True
        self.show_can_dts = False

        self.mem_repeater = TickRepeater(ticks_period_ms=100)

        self.can_id_dts = dict()
        self.debug_str = None

        # REPL debug utils
        # NOTE: These print as tuples for easy use with Mu serial console / plotter
        self.repl_debug_dt = False
        self.repl_debug_mem = False
        self.debug_rx_queue = False

        self.mem_list = []
        self.dt_list = []
        self.dt_repl_time = DtTracker("debug_mainloop")

        self.command_handlers = {int(SupervisorReq.cob_id | self.node_id): self.handle_supervisor_req}

        self.AppClass = AppClass
        self.app = None

        # Send first heartbeat
        self._send_heartbeat()

    def io_debug_str(self):
        """Returns debug string for serial console."""
        debug = StringIO()
        if self.show_can:
            debug.write(f"{self.can_debug_str()}\n")

        if self.show_time:
            ticks_now_ms = ticks_ms()
            debug.write(f"up: {monotonic() - self.t0: .1f}\n")
        if self.show_can_dts:
            for key, value in sorted(DtTracker._g_trackers.items()):
                debug.write(f"{key: <20}: {int(value.mean_dt()): <5d} age: {value.age(ticks_now_ms)} \n")
        if self.show_mem:
            debug.write(f"mf: {self.mem_free} ma: {self.mem_alloc}\n")

        return debug.getvalue()

    def can_debug_str(self):
        """Returns string with details on CAN bus status."""
        if self.show_can:
            return f"can {self.can_bus_state} tec: {self.can_tec} rec: {self.can_rec}\n"
        else:
            return ""

    def update_mem(self):
        """Check RAM stats on mcu."""
        if self.show_mem and self.mem_repeater.check():
            self.mem_free = mem_free()
            self.mem_alloc = mem_alloc()

    def init_app(self):
        """Initialize the app loaded on the mcu."""
        gc_collect()
        self.app = self.AppClass(main_loop=self, can=self.can, node_id=self.node_id)

    def handle_supervisor_req(self, message):
        """Handle supervisor request CAN message."""
        req = SupervisorReq.from_can_data(message.data)
        print(req)

    def handle_message(self, message):
        """Process each received CAN message."""
        if self.show_can_dts:
            dt = self.can_id_dts.get(message.id)
            if dt is None:
                dt = DtTracker(f"can/0x{message.id: 03x}")
                self.can_id_dts[message.id] = dt
            dt.update()

        # If message does not exist call dummy function, reduce overhead
        try:
            self.command_handlers.get(message.id, self.can_dummy)(message)
        except KeyError:
            print("Unable to parse: %x" % (message.id,), message.data)
            print("using function: ", self.command_handlers.get(message.id, self.can_dummy).__name__)

    def can_dummy(self, message):
        """Dummy function that is called when message does not meet filter."""
        pass
        # print("CAN - Ignored ID %x" % (message.id,), message.data)

    def poll_can(self):
        """Checks for can messages to parse."""
        if self.debug_rx_queue:
            print((self.listener.in_waiting(),))
            if self.listener.in_waiting() >= 64:
                print("Warning: Queue limit of 64 hit")

        while self.listener.in_waiting() > 0:
            self.handle_message(self.listener.receive())

    def update_can_stats(self):
        """Query CAN bus status."""
        self.can_bus_state = CanBusStateDict.get(str(self.can.state), "NA")
        self.can_tec = self.can.transmit_error_count
        self.can_rec = self.can.receive_error_count

    def update_display(self, display: Display):
        """Called by __init__ delta tracker object."""
        display.gd.SaveContext()

        if self.app is not None:
            self.app.update_display(display)
        display.gd.RestoreContext()

    def draw_debug(self, display: Display):
        """Show debug stats on the dashboard display."""
        gd = display.gd
        if self.show_debug:
            # draw a transparent white background for debug text, draw before button so it shows up on top.
            gd.SaveContext()
            gd.TagMask(0)
            gd.ColorA(200)
            gd.ColorRGB(255, 255, 255)
            gd.Begin(RECTS)
            gd.LineWidth(10)
            gd.Vertex2f(0, 0)
            gd.Vertex2f(gd.w, gd.h)
            gd.TagMask(1)
            gd.RestoreContext()

        debug_str = DtTracker._g_trackers["display/draw"].minmeanmax()
        gd.TagMask(0)
        display.draw_text(display.width - 2, 1, debug_str, color=(0, 0, 0), font=26, options=OPT_RIGHTX)
        gd.TagMask(1)
        clicked = display.icon_button(
            amiga_graphics.debug,
            TAG_DEBUG,
            display.width - amiga_graphics.size / 2,
            display.height - amiga_graphics.size / 2,
            0.5,
            0.5,
        )

        if clicked:
            self.show_debug = not self.show_debug

        if not self.show_debug:
            return

        if self.debug_str is not None and self.debug_str != "":
            gd.TagMask(0)
            display.draw_text(1, 1, self.debug_str, color=(0, 0, 0), font=18)
            gd.TagMask(1)
        debug = StringIO()
        if self.show_can:
            debug.write(f"{self.can_debug_str()}\n")

        if self.show_time:
            ticks_now_ms = ticks_ms()
            debug.write(f"up: {monotonic() - self.t0: .1f}\n")
            for key, value in DtTracker._g_trackers.items():
                if key.startswith("can/"):
                    continue
                debug.write(f"{key: <20}: {int(value.mean_dt()): <5d} age: {value.age(ticks_now_ms)} \n")
        if self.show_mem:
            debug.write(f"mf: {self.mem_free} ma: {self.mem_alloc}\n")

        self.debug_str = debug.getvalue()

    def _send_heartbeat(self):
        # HEARTBEAT at 0x700 no longer follows CANopen standard 1 byte payload
        heart_msg = Message(
            id=FarmngHeartbeat.cob_id | self.node_id,
            data=FarmngHeartbeat(self.node_state, ticks_ms(), self.serial_number).encode(),
        )
        self.can.send(heart_msg)

    def iter(self):
        """Method called every loop of the main while loop driving the app on the microcontroller."""
        if self.repl_debug_dt:
            self.dt_list = []
            self.dt_repl_time.update()
        if self.repl_debug_mem:
            self.mem_list = []

        if self.display is not None:
            # Only garbage collect for dashboard
            gc_collect()

        if self.repl_debug_dt:
            self.dt_list.append(self.dt_repl_time.ticks_age_cumul())  # 1
        if self.repl_debug_mem:
            self.mem_list.append(mem_free())  # 1

        self.update_can_stats()
        self.update_mem()

        self.poll_can()

        if self.heart_beat_repeater.check():
            if self.node_state == NodeState.BOOTUP:
                self.node_state = NodeState.PRE_OPERATIONAL
            elif self.node_state == NodeState.PRE_OPERATIONAL:
                self.init_app()
                self.node_state = NodeState.OPERATIONAL
            self._send_heartbeat()

        if self.repl_debug_dt:
            self.dt_list.append(self.dt_repl_time.ticks_age_cumul())  # 2
        if self.repl_debug_mem:
            self.mem_list.append(mem_free())  # 2

        if self.node_state == NodeState.OPERATIONAL:
            if self.app is not None:
                self.app.iter()

        if self.repl_debug_dt:
            self.dt_list.append(self.dt_repl_time.ticks_age_cumul())  # 3

        self.poll_can()

        if self.repl_debug_mem:
            self.mem_list.append(mem_free())  # 3
        if self.repl_debug_dt:
            self.dt_list.append(self.dt_repl_time.ticks_age_cumul())  # 4

        if self.node_state == NodeState.OPERATIONAL:
            if self.display is not None:
                self.display.update(self)

        if self.repl_debug_dt:
            self.dt_list.append(self.dt_repl_time.ticks_age_cumul())  # 5
            dt_debug_msg = FarmngDebugTimer(dt_list=self.dt_list)
            self.can.send(Message(id=FarmngDebugTimer.cob_id | 0x5A, data=dt_debug_msg.encode()))
            print((dt_debug_msg))
        if self.repl_debug_mem:
            self.mem_list.append(mem_free())  # 4
            mem_debug_msg = FarmngDebugMemory(mem_list=self.mem_list)
            self.can.send(Message(id=FarmngDebugMemory.cob_id | 0x5A, data=mem_debug_msg.encode()))
            print((mem_debug_msg))

    def _loop(self):
        while True:
            self.iter()

    def loop(self):
        """Initializes the main while loop, with an exception handler for dashboard that displays exceptions on the
        screen."""
        if self.display is not None:
            self.display.exception_handler(self._loop)
        else:
            self._loop()
