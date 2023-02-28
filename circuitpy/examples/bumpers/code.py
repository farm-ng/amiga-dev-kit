"""This class reads bumper contacts where the 3 volt pin on the feather chip is connected to a bumper contact
connecting the 3 volts to bumpers attached to pins D10-D13 driving them high if the bumper is pressed.

For CAN Bus, message ID is BUMPER_NODE_ID = 0x2F (see corresponding packet.py)
4 shorts (8 bytes) are sent as the CAN bus message. The lower order bits are set
where "1" means "bumper pressed" So pins are bit coded in the first 4 bits
       bit 0 => pin D10, bit 1 => pin D11, bit 2 => pin D12, bit 3 => pin D13
"""
import adafruit_debouncer
import board
import digitalio
from canio import Message
from farm_ng.utils.cobid import CanOpenObject
from farm_ng.utils.general import TickRepeater
from farm_ng.utils.main_loop import MainLoop
from farm_ng.utils.packet import BUMPER_NODE_ID
from farm_ng.utils.packet import BumperState
from usb_cdc import console

# NOTE: To use debouncer, you may have to clone farm_ng firmware: amiga-fw and get 2 files from
# amiga-fw/thirdparty: adafruit_debouncer.mpy and adafruit_ticks.mpy. Copy these into the adafruit's
# lib directory (code.py goes to the root directory):


def read_adafruit_pin(p):
    '''
    This function creates objects for a give pin p on the adafruit feather
    Inputs
    p -- the pin number as defined https://learn.adafruit.com/adafruit-circuit-playground-express/pinouts
    '''
    r = digitalio.DigitalInOut(p)
    r.direction = digitalio.Direction.INPUT
    r.pull = digitalio.Pull.DOWN  # Bumper contact is a high state, so pull down first to detect "up"
    return adafruit_debouncer.Debouncer(r, interval=0.05)  # Set for contact 1/20th second to set


class BumperMainLoopApp:
    def __init__(self, main_loop: MainLoop, can, node_id) -> None:
        self.can = can
        self.node_id = node_id
        self.main_loop = main_loop
        self.main_loop.show_debug = True
        self.cmd_repeater = TickRepeater(ticks_period_ms=50)

        self._register_message_handlers()

        self.pin_D10 = read_adafruit_pin(board.D10)
        self.pin_D11 = read_adafruit_pin(board.D11)
        self.pin_D12 = read_adafruit_pin(board.D12)
        self.pin_D13 = read_adafruit_pin(board.D13)

    def serial_read(self):
        while console.in_waiting > 0:
            self.parse_wasd_cmd((console.read().decode("ascii")))

    def _register_message_handlers(self):
        # FILL IN IF YOU WANT BUMPERS TO HANDLE MESSAGES
        # self.main_loop.command_handlers[CanOpenObject.TPDO1 | DASHBOARD_NODE_ID] = self._handle_amiga_tpdo1
        pass

    def _handle_bumpers(self, message):
        """FILL IN THIS IF YOU WANT BUMPERS TO HANDLE MESSAGES."""
        pass

    def iter(self):
        self.serial_read()

        if self.cmd_repeater.check():
            self.pin_D10.update()
            self.pin_D11.update()
            self.pin_D12.update()
            self.pin_D13.update()

            D10 = self.pin_D10.value
            D11 = self.pin_D11.value
            D12 = self.pin_D12.value
            D13 = self.pin_D13.value
            bbytes = (0x1 * D10) + (0x2 * D11) + (0x4 * D12) + (0x8 * D13)
            bumper_state_obj = BumperState(bbytes)
            # NOTE: IF DEVELOPING ON LAPTOP, PRINT BUMPER STATE MESSAGE:
            # print("bumperstate {}".format(bumper_state_obj))
            self.can.send(Message(id=CanOpenObject.TPDO1 | BUMPER_NODE_ID, data=bumper_state_obj.encode()))


def main():
    MainLoop(AppClass=BumperMainLoopApp, has_display=False).loop()


main()
