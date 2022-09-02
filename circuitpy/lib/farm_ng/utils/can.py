# Python imports
from sys import stderr

# CircuitPython modules
import board
from canio import CAN
from digitalio import DigitalInOut
from microcontroller import pin

# Local imports
from .version import get_board_type, BoardType


def setup_can_default():
    """
    Sets up the default canio.CAN connection, for your board type
    Uses baud_rate of 250K (default bus speed for the Amiga)
    """
    board_type = get_board_type()
    baud_rate = 250_000
    if board_type == BoardType.AMIGA_DISPV0:
        return setup_can(
            rx=pin.PB13, tx=pin.PB14, baudrate=baud_rate, auto_restart=True
        )
    elif board_type == BoardType.FEATHER_M4_CAN:
        return setup_can(
            rx=board.CAN_RX, tx=board.CAN_TX, baudrate=baud_rate, auto_restart=True
        )
    elif board_type == BoardType.LINUX:
        return setup_can(
            rx=board.CAN_RX, tx=board.CAN_TX, baudrate=baud_rate, auto_restart=True
        )
    else:
        assert False, "BoardType not supported"


def setup_can(rx, tx, baudrate, auto_restart):
    """
    Sets up the canio.CAN connection
    Essentially justs wraps
    [canio.CAN()](https://docs.circuitpython.org/en/latest/shared-bindings/canio/index.html#canio.CAN)
    """
    # Use this line if your board has dedicated CAN pins. (Feather M4 CAN and Feather STM32F405)
    #    can = setup_can(rx=board.CAN_RX, tx=board.CAN_TX, baudrate=parm.can_baud, auto_restart=True)
    # Use this line for dashboard:
    #    can = setup_can(rx=pin.PB13, tx=pin.PB14, baudrate=parm.can_baud, auto_restart=True)

    # If the CAN transceiver has a standby pin, bring it out of standby mode
    if hasattr(board, "CAN_STANDBY"):
        standby = DigitalInOut(board.CAN_STANDBY)
        print(f"CAN_STANDBY {board.CAN_STANDBY}", file=stderr)
        standby.switch_to_output(False)

    # If the CAN transceiver is powered by a boost converter, turn on its supply
    if hasattr(board, "BOOST_ENABLE"):
        boost_enable = DigitalInOut(board.BOOST_ENABLE)
        print(f"BOOST_ENABLE {board.BOOST_ENABLE}", file=stderr)
        boost_enable.switch_to_output(True)

    can = CAN(rx=rx, tx=tx, baudrate=baudrate, auto_restart=auto_restart)

    return can


# class canio_wrapper(object):
#     # def __init__(self, rx=board.CAN_RX, tx=board.CAN_TX, baudrate=parm.can_baud, auto_restart=True):
#     def __init__(self, rx, tx, baudrate, auto_restart):
#         self.can = setup_can(rx=rx, tx=tx, baudrate=baudrate, auto_restart=auto_restart)
#         self.sendQueue = dict()
#         self.lastSendTime = 0.0
#         self.sendTimeout = 0.005

#     @property
#     def state(self):
#         return self.can.state

#     def send_some(self):
#         now = monotonic()
#         if now - self.lastSendTime < self.sendTimeout:
#             return
#         self.lastSendTime = now

#         for node_id, sendQueue in self.sendQueue.items():
#             if not len(sendQueue):
#                 continue
#             # print(f'There are {len(sendQueue)} messages on the queue for node id {node_id:02x}')
#             msg = sendQueue[0]
#             self.can.send(msg)
#             del sendQueue[0]

#     def listen(self, *args, **kwargs):
#         return self.can.listen(*args, **kwargs)

#     # TODO: Add methods to expose canio.CAN functionality
#     def send(self, *args, **kwargs):
#         self.can.send(*args, **kwargs)

#     def enqueue_send(self, msg):
#         if msg.id not in self.sendQueue:
#             self.sendQueue[msg.id] = []
#         self.sendQueue[msg.id].append(msg)
