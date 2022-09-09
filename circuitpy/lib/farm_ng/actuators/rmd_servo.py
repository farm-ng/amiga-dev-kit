from farm_ng.utils.main_loop import MainLoop
from farm_ng.utils.packet import Packet
from farm_ng.utils.general import CatchupRepeater, ticks_fresh
from canio import Message
from supervisor import ticks_ms
from struct import pack, unpack


RmdReadHomeCommandData = bytes([0x62,0,0,0,0,0,0,0])

class RmdSpeedCommand(Packet):
    """Speed command to RMD servo motor (controlled with PTO)"""

    format = "<4Bi"
    cmd_byte = 0xA2

    def __init__(self, rpm: int = 0):
        self.rpm = rpm
        

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        speed = self.rpm * 600 # 0.01 degrees per second - 360 deg/60 seconds * 100
        return pack(self.format, self.cmd_byte, 0x0, 0x0, 0x0, int(speed))

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        assert data[0] == self.cmd_byte
        (_, _, _, _, dphs) = unpack(self.format, data)
        self.rpm = dphs / 600

    def __str__(self):
        return f"RmdSpeedCommand rpm: {self.rpm}"


class RmdSpeedResponse(Packet):
    """Response from RMD servo motor to speed command (controlled with PTO)"""

    format = "<2b3h"
    cmd_byte = 0xA2

    def __init__(self, temp: int = 0, current: int = 0, rpm: int = 0, encoder_pos: int = 0):
        self.temp = temp
        self.current = current
        self.rpm = rpm
        self.encoder_pos = encoder_pos
        self.ticks_ms = ticks_ms()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(
            self.format, self.cmd_byte, self.temp, int(self.current * 100), int(self.rpm * 60), self.encoder_pos
        )

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        assert data[0] == self.cmd_byte
        (_, self.temp, amps, dps, self.encoder_pos) = unpack(self.format, data)
        self.current = amps * 0.01
        self.rpm = dps / 6

    def __str__(self):
        s = f"RmdSpeedResponse temp: {self.temp} current: {self.current}"
        s += f" rpm: {self.rpm} encoder_pos: {self.encoder_pos}"
        return s

class RmdServoController(object):
    # NOTE: actual shaft RPM on the on the compost spreader is 1.6x commanded/reported
    # NOTE: docs are unclear on uint vs int for reponse values (temp, current, etc.)
    # So values may not be accurate...
    # https://www.robotshop.com/media/files/content/m/mya/pdf/rmd_servo_motor_control_protocol.pdf

    """@class RMD servo motor controlelr abstraction"""

    # TODO:
    # Generic PTO on/off in code.py

    def __init__(self, main_loop: MainLoop, node_id):
        assert 1 <= node_id <= 32
        self.node_id = node_id
        self.msg_id = 0x140 + node_id
        self.response_msg_id = 0x240 + node_id

        self.main_loop = main_loop
        # self.can = main_loop.can
        self.healthy = False

        self.cmd_rpm = 0.0

        self.rpm_reponse = RmdSpeedResponse()
        # self.meas_rpm = 0.0
        # self.torque_current = 0.0
        # self.motor_temp = 0.0
        # self.encoder_position = 0.0

        self.active = False
        self.prev_active = False
        self.cmd_timer = CatchupRepeater(0.02)
        self.last_ticks = ticks_ms()
        self.stale = False
        self.draw = False

        self._register_message_handlers()

    def _register_message_handlers(self):
        self.main_loop.command_handlers[self.response_msg_id] = self._handle_all_responses
        self._msg_handlers = {}
        self._msg_handlers[0xA2] = self._handle_rpm_response
        self._msg_handlers[0x81] = self._handle_motor_off
        self._msg_handlers[0x62] = self._handle_read_home_position

    def _handle_all_responses(self, msg):
        self.draw = True
        self._msg_handlers.get(msg.data[0], self._handle_unexpected)(msg)

    def _handle_motor_off(self, msg):
        # print(
        #     f"RMD servo motor {self.node_id} returning OFF: {hex(msg.id)} command byte {hex(msg.data[0])}",
        # )
        pass

    def _handle_unexpected(self, msg):
        print(
            f"Unexpected RMD servo response: {hex(msg.id)} command byte {hex(msg.data[0])} all data: ",
            msg.data,
        )

    def _handle_rpm_response(self, msg):
        self.rpm_reponse = RmdSpeedResponse.from_can_data(msg.data)
        #print(self.rpm_reponse)

    def _handle_read_home_position(self, message):
        print("RMD read home position %x" % (message.id,), message.data)

    def read_home_position(self):
        self.main_loop.can.send(Message(id=self.msg_id, data=RmdReadHomeCommandData))

    @property
    def unpacked_rpm_response(self):
        """
        Returns tuple of measured (rpm, torque current, motor temperature, & encoder position)
        """
        return (
            self.rpm_reponse.rpm,
            self.rpm_reponse.current,
            self.rpm_reponse.temp,
            self.rpm_reponse.encoder_pos,
        )

    def send_cmd_rpm(self):
        rpm = 0
        if self.active:
            self.last_ticks = ticks_ms()
            rpm = self.cmd_rpm
        self.main_loop.can.send(
            Message(id=self.msg_id, data=RmdSpeedCommand(rpm).encode())
        )

    def iter(self):
        if self.prev_active != self.active:
            print(f"Set PTO motor {self.node_id}: ", self.active)
            if self.prev_active == False:
                # Clear staleness
                self.last_ticks = ticks_ms()
                self.stale = False
            self.prev_active = self.active

        if self.stale:
            return

        if not ticks_fresh(self.last_ticks, thresh_ms=5000):
            print(f"Stop streaming 0 rpm to PTO motor {self.node_id}")
            self.stale = True

        if self.cmd_timer.check():
            self.send_cmd_rpm()
