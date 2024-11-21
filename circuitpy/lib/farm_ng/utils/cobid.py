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


class CanOpenObject:
    """CANopen function codes.

    This class provides constants representing the function codes in the CANopen protocol. The function codes are used
    to construct the CAN identifier (CAN ID) by adding them to the node ID for most functions.

    For more information about the CANopen protocol, see:
    https://www.csselectronics.com/pages/canopen-tutorial-simple-intro
    """

    NMT = 0x00  # Network management
    SYNC = 0x80  # Synchronization message, send with node id == 0
    EMCY = 0x80  # Emergency message, non-zero node id
    TPDO1 = 0x180  # Transmit PDO 1
    RPDO1 = 0x200  # Receive PDO 1
    TPDO2 = 0x280  # Transmit PDO 2
    RPDO2 = 0x300  # Receive PDO 2
    TPDO3 = 0x380  # Transmit PDO 3
    RPDO3 = 0x400  # Receive PDO 3
    TPDO4 = 0x480  # Transmit PDO 4
    RPDO4 = 0x500  # Receive PDO 4
    SDO_REPLY = 0x580  # SDO reply (server to client)
    SDO_CMD = 0x600  # SDO command (client to server)
    HEARTBEAT = 0x700  # Node heartbeat message


def create_nmt_cobid():
    """Creates a COB-ID for NMT message."""
    return CanOpenObject.NMT


def create_sync_cobid():
    """Creates a COB-ID for SYNC message."""
    return CanOpenObject.SYNC


def create_emcy_cobid(nodeId):
    """Creates a COB-ID for EMCY message."""
    return CanOpenObject.EMCY | nodeId


def create_rpdo1_cobid(nodeId):
    """Creates a COB-ID for RPDO1 message."""
    return CanOpenObject.RPDO1 | nodeId


def create_tpdo1_cobid(nodeId):
    """Creates a COB-ID for TPDO1 message."""
    return CanOpenObject.TPDO1 | nodeId


def create_sdo_expedited_rw_xmit_cobid(nodeId):
    """Creates a COB-ID for SDO command message."""
    return CanOpenObject.SDO_CMD | nodeId


def create_sdo_expedited_rw_resp_cobid(nodeId):
    """Creates a COB-ID for SDO reply message."""
    return CanOpenObject.SDO_REPLY | nodeId


def create_heartbeat_cobid(nodeId):
    """Creates a COB-ID for heartbeat message."""
    return CanOpenObject.HEARTBEAT | nodeId
