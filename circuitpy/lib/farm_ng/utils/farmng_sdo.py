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
from struct import pack
from struct import unpack

from farm_ng.utils.packet import Packet


class ReqRepOpIds:
    """Operation IDs for request and reply operations.

    Must be in the range [0, 127] (7 bits).
    """

    NOP = 0
    READ = 1

    # TODO: Add API for setting / storing settings
    # https://github.com/farm-ng/amiga-fw/issues/327
    # WRITE = 2
    # STORE = 3

    # TODO: Add API for querying valid range of settings
    # https://github.com/farm-ng/amiga-fw/issues/329
    # CHECK_MIN = 4
    # CHECK_MAX = 5


class ReqRepValIds:
    """Value IDs for request and reply operations.

    Must be in the range [0, 2047] (11 bits) because we use 5 bits for encoding units.

    Some codes:
       - NP: Not a persistent value (currently)
             This means it cannot be stored
       - UN: Not actually used in firmware (currently)
             This means it cannot be read, written, or stored
    """

    NOP = 0

    V_MAX = 10  # NP
    FLIP_JOYSTICK = 11

    MAX_TURN_RATE = 20
    MIN_TURN_RATE = 21
    # MAX_LIN_ACC = 22 # UN
    MAX_ANG_ACC = 23  # max_accel in settings.csv

    M10_ON = 30
    M11_ON = 31
    M12_ON = 32
    M13_ON = 33
    # M14_ON = 34 # UN
    # M15_ON = 35 # UN

    BATT_LO = 40
    BATT_HI = 41
    TURTLE_V = 45
    TURTLE_W = 46

    WHEEL_TRACK = 50
    # WHEEL_BASELINE = 51 # UN
    WHEEL_GEAR_RATIO = 52  # NP
    WHEEL_RADIUS = 53  # NP

    PTO_CUR_DEV = 80  # NP | Current PTO device to change settings of
    PTO_CUR_RPM = 81  # NP
    PTO_MIN_RPM = 82
    PTO_MAX_RPM = 83
    PTO_DEF_RPM = 84
    PTO_GEAR_RATIO = 85

    STEERING_GAMMA = 90


class ReqRepValUnits:
    """Units for request and reply values.

    Must be in the range [0, 31] (5 bits). Uses the last 5 bits of the 2 bytes used for ReqRepValIds.
    """

    NOP = 0
    NA = 1  # Unitless
    M = 4  # meters
    # FT = 5 # feet
    # IN = 6 # inches
    MPS = 10  # m/s
    # FPM = 11 # ft / min
    RADPS = 15  # rad / s
    RPM = 16  # rpm
    MS2 = 20  # m / s^2
    RADS2 = 21  # rad / s^2
    V = 25  # volts


class ReqRepValFmts:
    """Data formats for request and reply values."""

    SHORT = "<h2x"
    USHORT = "<H2x"
    FLOAT = "<f"
    BOOL = "<B3x"


# Alphabetically sorted val properties.
# Each is (fmt, unit)

req_rep_val_props = {
    ReqRepValIds.BATT_HI: (ReqRepValFmts.FLOAT, ReqRepValUnits.V),
    ReqRepValIds.BATT_LO: (ReqRepValFmts.FLOAT, ReqRepValUnits.V),
    ReqRepValIds.FLIP_JOYSTICK: (ReqRepValFmts.BOOL, ReqRepValUnits.NA),
    ReqRepValIds.M10_ON: (ReqRepValFmts.BOOL, ReqRepValUnits.NA),
    ReqRepValIds.M11_ON: (ReqRepValFmts.BOOL, ReqRepValUnits.NA),
    ReqRepValIds.M12_ON: (ReqRepValFmts.BOOL, ReqRepValUnits.NA),
    ReqRepValIds.M13_ON: (ReqRepValFmts.BOOL, ReqRepValUnits.NA),
    # ReqRepValIds.M14_ON: (ReqRepValFmts.BOOL,   ReqRepValUnits.NA),
    # ReqRepValIds.M15_ON: (ReqRepValFmts.BOOL,   ReqRepValUnits.NA),
    ReqRepValIds.MAX_ANG_ACC: (ReqRepValFmts.FLOAT, ReqRepValUnits.RADS2),
    # ReqRepValIds.MAX_LIN_ACC: (ReqRepValFmts.FLOAT,  ReqRepValUnits.MS2),
    ReqRepValIds.MAX_TURN_RATE: (ReqRepValFmts.FLOAT, ReqRepValUnits.RADPS),
    ReqRepValIds.MIN_TURN_RATE: (ReqRepValFmts.FLOAT, ReqRepValUnits.RADPS),
    ReqRepValIds.PTO_CUR_DEV: (ReqRepValFmts.USHORT, ReqRepValUnits.NA),
    ReqRepValIds.PTO_CUR_RPM: (ReqRepValFmts.FLOAT, ReqRepValUnits.RPM),
    ReqRepValIds.PTO_DEF_RPM: (ReqRepValFmts.FLOAT, ReqRepValUnits.RPM),
    ReqRepValIds.PTO_GEAR_RATIO: (ReqRepValFmts.FLOAT, ReqRepValUnits.NA),
    ReqRepValIds.PTO_MAX_RPM: (ReqRepValFmts.FLOAT, ReqRepValUnits.RPM),
    ReqRepValIds.PTO_MIN_RPM: (ReqRepValFmts.FLOAT, ReqRepValUnits.RPM),
    ReqRepValIds.STEERING_GAMMA: (ReqRepValFmts.FLOAT, ReqRepValUnits.NA),
    ReqRepValIds.TURTLE_V: (ReqRepValFmts.FLOAT, ReqRepValUnits.MPS),
    ReqRepValIds.TURTLE_W: (ReqRepValFmts.FLOAT, ReqRepValUnits.RADPS),
    ReqRepValIds.V_MAX: (ReqRepValFmts.FLOAT, ReqRepValUnits.MPS),
    # ReqRepValIds.WHEEL_BASELINE: (ReqRepValFmts.FLOAT,  ReqRepValUnits.NA),
    ReqRepValIds.WHEEL_GEAR_RATIO: (ReqRepValFmts.FLOAT, ReqRepValUnits.NA),
    ReqRepValIds.WHEEL_RADIUS: (ReqRepValFmts.FLOAT, ReqRepValUnits.M),
    ReqRepValIds.WHEEL_TRACK: (ReqRepValFmts.FLOAT, ReqRepValUnits.M),
}


def unpack_req_rep_value(val_id: ReqRepValIds, payload: bytes):
    """Unpacks the request/reply value from the given payload based on the value ID.

    Args:
        val_id (ReqRepValIds): The value ID.
        payload (bytes): The payload to unpack.

    Returns:
        The unpacked value.
    """
    assert len(payload) == 4, "FarmngRepReq payload should be 4 bytes"
    (fmt, unit) = req_rep_val_props[val_id]
    (value,) = unpack(fmt, payload)
    return value


class FarmngRepReq(Packet):
    """Supervisor request class, farm-ng parallel to SDO protocol.

    Attributes:
        cob_id_req (int): SDO command ID.
        cob_id_rep (int): SDO reply ID.
        format (str): The data format.
    """

    cob_id_req = 0x600  # SDO command id
    cob_id_rep = 0x580  # SDO reply id
    format = "<BHx4s"

    def __init__(
        self, op_id=ReqRepOpIds.NOP, val_id=ReqRepValIds.NOP, units=ReqRepValUnits.NA, success=False, payload=bytes(4)
    ) -> None:
        self.op_id = op_id
        self.val_id = val_id
        self.units = units
        self.success = success
        self.payload = payload
        self.stamp()

    def encode(self):
        """Encodes the data contained by the class as CAN message data.

        Returns:
            bytes: The encoded CAN message data.
        """
        return pack(self.format, self.op_id | (self.success << 7), self.val_id | (self.units << 11), self.payload)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class.

        Args:
            data (bytes): The CAN message data to decode.
        """
        (op_and_s, v_and_u, self.payload) = unpack(self.format, data)
        self.success = op_and_s >> 7
        self.op_id = op_and_s & ~0x80
        self.units = v_and_u >> 11
        self.val_id = v_and_u & ~0xF800

    """
    def __str__(self):
        return "supervisor req OP {} VAL {} units {} success {} payload {}".format(
            self.op_id,
            self.val_id,
            self.units,
            self.success,
            self.payload,
        )
    """
