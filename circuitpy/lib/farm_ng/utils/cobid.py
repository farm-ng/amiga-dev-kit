class CanOpenObject:
    """CANopen function codes.

    Add to node_id (for most functions) for CAN id
    """

    NMT = 0x00
    SYNC = 0x80  # Send with node id == 0
    EMCY = 0x80  # Non-zero node id
    TPDO1 = 0x180
    RPDO1 = 0x200
    TPDO2 = 0x280
    RPDO2 = 0x300
    TPDO3 = 0x380
    RPDO3 = 0x400
    TPDO4 = 0x480
    RPDO4 = 0x500
    SDO_REPLY = 0x580
    SDO_CMD = 0x600
    HEARTBEAT = 0x700


def create_nmt_cobid():
    return CanOpenObject.NMT


def create_sync_cobid():
    return CanOpenObject.SYNC


def create_emcy_cobid(nodeId):
    return CanOpenObject.EMCY | nodeId


def create_rpdo1_cobid(nodeId):
    return CanOpenObject.RPDO1 | nodeId


def create_tpdo1_cobid(nodeId):
    return CanOpenObject.TPDO1 | nodeId


def create_sdo_expedited_rw_xmit_cobid(nodeId):
    return CanOpenObject.SDO_CMD | nodeId


def create_sdo_expedited_rw_resp_cobid(nodeId):
    return CanOpenObject.SDO_REPLY | nodeId


def create_heartbeat_cobid(nodeId):
    return CanOpenObject.HEARTBEAT | nodeId
