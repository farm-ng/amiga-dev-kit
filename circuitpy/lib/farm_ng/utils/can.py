from sys import stderr

import board
from canio import CAN
from digitalio import DigitalInOut
from microcontroller import pin

from .version import BoardType
from .version import get_board_type


def setup_can_default():
    """Sets up the default canio.CAN connection, for your board type Uses baud_rate of 250K (default bus speed for
    the Amiga)"""
    board_type = get_board_type()
    baud_rate = 1_000_000
    if board_type == BoardType.AMIGA_DISPV0:
        return setup_can(rx=pin.PB13, tx=pin.PB14, baudrate=baud_rate, auto_restart=True)
    elif board_type == BoardType.FEATHER_M4_CAN:
        return setup_can(rx=board.CAN_RX, tx=board.CAN_TX, baudrate=baud_rate, auto_restart=True)
    elif board_type == BoardType.LINUX:
        return setup_can(rx=board.CAN_RX, tx=board.CAN_TX, baudrate=baud_rate, auto_restart=True)
    else:
        assert False, "BoardType not supported"


def setup_can(rx, tx, baudrate, auto_restart):
    """Sets up the canio.CAN connection. Essentially just wraps:

    [canio.CAN()](https://docs.circuitpython.org/en/latest/shared-bindings/canio/index.html#canio.CAN)
    """

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
