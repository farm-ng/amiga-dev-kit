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
from struct import pack
from struct import unpack

from canio import Message

from .ticks import ticks_ms


# Constants for node IDs
DASHBOARD_NODE_ID = 0xE
PENDANT_NODE_ID = 0xF
BRAIN_NODE_ID = 0x1F
SDK_NODE_ID = 0x2A


class PendantButtons:
    """Bit field for pendant buttons."""

    PAUSE = 0x01
    BRAKE = 0x02
    PTO = 0x04
    CRUISE = 0x08
    LEFT = 0x10
    UP = 0x20
    RIGHT = 0x40
    DOWN = 0x80


class AmigaControlState:
    """State of the Amiga vehicle control unit (VCU)."""

    STATE_BOOT = 0
    STATE_MANUAL_READY = 1
    STATE_MANUAL_ACTIVE = 2
    STATE_CC_ACTIVE = 3
    STATE_AUTO_READY = 4
    STATE_AUTO_ACTIVE = 5
    STATE_ESTOPPED = 6


class NodeState:
    """State of the MainLoop."""

    BOOTUP = 0x00  # Boot up / Initializing
    STOPPED = 0x04  # Stopped
    OPERATIONAL = 0x05  # Operational
    PRE_OPERATIONAL = 0x7F  # Pre-Operational


class ActuatorCommands:
    """Defines commands for actuators."""

    passive = 0x0
    forward = 0x1
    stopped = 0x2
    reverse = 0x3


def actuator_bits_cmd(
    a0=ActuatorCommands.passive, a1=ActuatorCommands.passive, a2=ActuatorCommands.passive, a3=ActuatorCommands.passive
):
    """Performs bit shifting to return a single byte representing command of 4 actuators."""
    return a0 + (a1 << 2) + (a2 << 4) + (a3 << 6)


def actuator_bits_read(bits):
    """Reads and returns individual actuator states from a bit pattern."""
    a0 = bits & 0x3
    a1 = (bits >> 2) & 0x3
    a2 = (bits >> 4) & 0x3
    a3 = (bits >> 6) & 0x3
    return (a0, a1, a2, a3)


class Packet:
    """Base class inherited by all CAN message data structures."""

    @classmethod
    def from_can_data(cls, data):
        """Unpack CAN data directly into CAN message data structure."""
        obj = cls()  # Does not call __init__
        obj.decode(data)
        obj.stamp()
        return obj

    def stamp(self):
        """Time most recent message was received."""
        self.ticks_ms = ticks_ms()

    def fresh(self, thresh_ms=500):
        """Returns False if the most recent message is older than ``thresh_ms``"""
        return self.age() < thresh_ms

    def age(self):
        """Age of the most recent message."""
        return ticks_ms() - self.ticks_ms

    def encode(self):
        """Encodes the packet data for transmission.

        Must be implemented by subclasses.
        """
        raise NotImplementedError

    def decode(self, data):
        """Decodes the packet data from transmission.

        Must be implemented by subclasses.
        """
        raise NotImplementedError


class PendantState(Packet):
    """State of the Pendant (joystick position & pressed buttons)"""

    def __init__(self, x=0, y=0, buttons=0):
        self.format = "<hhI"
        self.x = x
        self.y = y
        self.buttons = buttons
        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, int(self.x * 32767), int(self.y * 32767), self.buttons)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""

        (xi, yi, self.buttons) = unpack(self.format, data)
        self.x = xi / 32767
        self.y = yi / 32767

    def __str__(self):
        return "x {:0.3f} y {:0.3f} buttons {}".format(self.x, self.y, self.buttons)


class PendantLEDs(Packet):
    """Command to the pendant on LEDs / backlight to illuminate."""

    def __init__(self, leds=0, backlight=0, rgb=(0, 0, 0)):
        self.format = "<5B"
        self.leds = leds
        self.backlight = backlight
        self.rgb = rgb
        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.leds, self.backlight, self.rgb[0], self.rgb[1], self.rgb[2])

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (self.leds, self.backlight, r, g, b) = unpack(self.format, data)
        self.rgb = (r, g, b)

    def __str__(self):
        return "LEDs {} backlight {} rgb {}".format(self.leds, self.backlight, self.rgb)


class AmigaRpdo1(Packet):
    """State, speed, and angular rate command (request) sent to the Amiga vehicle control unit (VCU).

    New in fw v0.1.9 / farm-ng-amiga v0.0.7: Add pto & hbridge control. Message data is now 8 bytes (was 5).
    """

    def __init__(
        self,
        state_req: AmigaControlState = AmigaControlState.STATE_ESTOPPED,
        cmd_speed: float = 0.0,
        cmd_ang_rate: float = 0.0,
        pto_bits: int = 0x0,
        hbridge_bits: int = 0x0,
    ):
        self.format = "<BhhBBx"
        self.legacy_format = "<Bhh"

        self.state_req = state_req
        self.cmd_speed = cmd_speed
        self.cmd_ang_rate = cmd_ang_rate
        self.pto_bits = pto_bits
        self.hbridge_bits = hbridge_bits

        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(
            self.format,
            self.state_req,
            int(self.cmd_speed * 1000.0),
            int(self.cmd_ang_rate * 1000.0),
            self.pto_bits,
            self.hbridge_bits,
        )

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        if len(data) == 5:
            # TODO: Remove in a future version
            print("WARNING: Amiga is being controlled by out of date AmigaRpdo1 message (updated in fw v0.1.9).")
            print("Please update the source of the AmigaRpdo1 message.")
            (self.state_req, cmd_speed, cmd_ang_rate) = unpack(self.legacy_format, data)
            self.cmd_speed = cmd_speed / 1000.0
            self.cmd_ang_rate = cmd_ang_rate / 1000.0
        else:
            (self.state_req, cmd_speed, cmd_ang_rate, self.pto_bits, self.hbridge_bits) = unpack(self.format, data)
            self.cmd_speed = cmd_speed / 1000.0
            self.cmd_ang_rate = cmd_ang_rate / 1000.0

    def __str__(self):
        return "AMIGA RPDO1 Request state {} Command speed {:0.3f} Command angular rate {:0.3f}".format(
            self.state_req, self.cmd_speed, self.cmd_ang_rate
        ) + " Command PTO bits 0x{:x} Command h-bridge bits 0x{:x}".format(self.pto_bits, self.hbridge_bits)


class AmigaTpdo1(Packet):
    """State, speed, and angular rate of the Amiga vehicle control unit (VCU).

    New in fw v0.1.9 / farm-ng-amiga v0.0.7: Add pto & hbridge control. Message data is now 8 bytes (was 5).
    """

    def __init__(
        self,
        state: AmigaControlState = AmigaControlState.STATE_ESTOPPED,
        meas_speed: float = 0.0,
        meas_ang_rate: float = 0.0,
        pto_bits: int = 0x0,
        hbridge_bits: int = 0x0,
    ):
        self.format = "<BhhBBx"
        self.legacy_format = "<Bhh"

        self.state = state
        self.meas_speed = meas_speed
        self.meas_ang_rate = meas_ang_rate
        self.pto_bits = pto_bits
        self.hbridge_bits = hbridge_bits

        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(
            self.format,
            self.state,
            int(self.meas_speed * 1000.0),
            int(self.meas_ang_rate * 1000.0),
            self.pto_bits,
            self.hbridge_bits,
        )

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        if len(data) == 5:
            print("WARNING: Received an out of date AmigaTpdo1 message (updated in fw v0.1.9).")
            print("Please update the source of the AmigaTpdo1 message.")
            (self.state, meas_speed, meas_ang_rate) = unpack(self.legacy_format, data)
            self.meas_speed = meas_speed / 1000.0
            self.meas_ang_rate = meas_ang_rate / 1000.0
        else:
            (self.state, meas_speed, meas_ang_rate, self.pto_bits, self.hbridge_bits) = unpack(self.format, data)
            self.meas_speed = meas_speed / 1000.0
            self.meas_ang_rate = meas_ang_rate / 1000.0

    def __str__(self):
        return "AMIGA TPDO1 Amiga state {} Measured speed {:0.3f} Measured angular rate {:0.3f}".format(
            self.state, self.meas_speed, self.meas_ang_rate
        ) + " PTO bits 0x{:x} h-bridge bits 0x{:x}".format(self.pto_bits, self.hbridge_bits)


class AmigaPdo2(Packet):
    """### AmigaPdo2

    Contains a request or reply of RPM for each in individual motor (0xA - 0xD).

    Identical packet for RPDO (request) & TPDO (reply/measured).
    Should be used in conjunction with `AmigaRpdo1` / `AmigaTpdo1` for auto control.

    Introduced in fw version v0.2.0.

    #### Usage
    To send individual motor rpm commands:
    - Send an `AmigaRpdo1` with:
        - `state_req` = `STATE_AUTO_ACTIVE`
        - `cmd_speed` = 0.0
        - `cmd_ang_rate` = 0.0
    - Send an `AmigaPdo2` on `cob_id_req` with:
        - `a_rpm`, `b_rpm`, `c_rpm`, `d_rpm` = desired rpm for each motor

    **Warning**: If you send any `cmd_speed` or `cmd_ang_rate` in your `AmigaRpdo1`
    while sending individual motor rpm commands, the Amiga may go into an error state.

    To switch back to `AmigaRpdo1` only control, stop sending `AmigaPdo2` messages and wait ~1 second.

    #### Tip
    RPM is signed based on the direction of your motors.
    Check your dashboard to see which direction each of your motors spin for forward/reverse motion.
    """

    cob_id_req = 0x300  # RPDO2
    cob_id_rep = 0x280  # TPDO2

    def __init__(self, a_rpm: int = 0, b_rpm: int = 0, c_rpm: int = 0, d_rpm: int = 0):
        self.format = "<4h"
        self.a_rpm: int = a_rpm
        self.b_rpm: int = b_rpm
        self.c_rpm: int = c_rpm
        self.d_rpm: int = d_rpm
        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.a_rpm, self.b_rpm, self.c_rpm, self.d_rpm)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (self.a_rpm, self.b_rpm, self.c_rpm, self.d_rpm) = unpack(self.format, data)

    def __str__(self):
        return "AMIGA PDO2 Motor RPMs | A {} B {} C {} D {}".format(self.a_rpm, self.b_rpm, self.c_rpm, self.d_rpm)


class FarmngHeartbeat(Packet):
    """Custom Heartbeat message = status sent regularly by farm-ng components"""

    format = "<BI3s"
    cob_id = 0x700

    def __init__(self, node_state: int = 0, ticks_ms: int = 0, serial_number=bytes()):
        self.node_state = node_state
        self.ticks_ms = ticks_ms
        # assert len(data) <= 5
        self.serial_number = serial_number

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.node_state, self.ticks_ms, self.serial_number[:3])

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (self.node_state, self.ticks_ms, self.serial_number) = unpack(self.format, data)

    def __str__(self):
        return f"node_state: {self.node_state} ticks_ms: {self.ticks_ms} serial_number: {self.serial_number}"


class EstopRequest(Packet):
    """An 8 byte packet that requests an e-stop.

    We only care about the first byte and ignore the rest for now. The other bytes can be used as a message state unique
    to the device requesting the e-stop.
    """

    cob_id = 0x180  # TPDO1

    def __init__(self, request_estop: bool = False):
        self.format = "<b7x"
        self.request_estop: bool = request_estop
        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.request_estop)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (req,) = unpack(self.format, data)
        self.request_estop = bool(req)

    @classmethod
    def make_message(cls, node_id, request_estop):
        """Returns a CAN message with the e-stop request encoded."""
        return Message(id=(cls.cob_id | node_id), data=EstopRequest(request_estop=request_estop).encode())

    def __str__(self):
        return "Request e-stop {}".format(self.request_estop)


class EstopReply(Packet):
    """An 8 byte packet that responds with registered e-stop devices.

    We only care about the first 4 bytes and ignore the rest for now.
    """

    cob_id = 0x200  # RPDO1

    def __init__(self, registered_devices: int = 0x0, estop_devices: int = 0x0):
        self.format = "<HH4x"
        self.registered_devices: int = registered_devices
        self.estop_devices: int = estop_devices
        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.registered_devices, self.estop_devices)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        self.registered_devices, self.estop_devices = unpack(self.format, data)

    def __str__(self):
        # TODO: Parse the bit masking
        return (
            "EstopReply - registered e-stop devices (bit masked) 0x{:X} triggered devices (bit masked) 0x{:X}".format(
                self.registered_devices, self.estop_devices
            )
        )


class BumperState(Packet):
    """This is an expansion of the EstopRequest packet that also includes the state of the 4 Bumpers. This is so
    the dashboard can treat the BumperState as a generic EstopRequest, ignoring the contents of any byte besides
    the estop_request bool in the first signed char. While other components could look for more insight from the
    BumperState encoded data.

    Encoding:
        - b: signed char used as bool for true/false estop-request
        - h: signed short encoding pressed bumpers
        - 5x: pad bytes

    For the circuitpy/examples/bumpers/main.py:
    (True => corresponding pin is pressed) button states are packed as follows:
    (0x1 * board.D10) + (0x2 * board.D11) + (0x4 * board.12) + (0x8 * board.b13)
    In other words, pins are bit coded in the first 4 bits
    bit 0 => pin D10, bit 1 => pin D11, bit 2 => pin D12, bit 3 => pin D13
    """

    cob_id = 0x180  # TPDO1

    def __init__(self, buttons=0):
        self.format = "<bh5x"
        self.buttons = buttons
        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.buttons != 0x0, self.buttons)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (estop_req, self.buttons) = unpack(self.format, data)

    def __str__(self):
        return "pins on adafuit D10: {}, D11: {}, D12: {}, D13:{}".format(
            bool(self.buttons & 0x1), bool(self.buttons & 0x2), bool(self.buttons & 0x4), bool(self.buttons & 0x8)
        )
