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
"""This class reads bumper contacts where the 3 volt pin on the feather chip is connected to a bumper contact
connecting the 3 volts to bumpers attached to pins D10-D13 driving them high if the bumper is pressed.

See README for more details
"""
import adafruit_debouncer
import board
import digitalio
from canio import Message
from farm_ng.utils.cobid import CanOpenObject
from farm_ng.utils.main_loop import MainLoop
from farm_ng.utils.packet import BumperState
from farm_ng.utils.packet import EstopReply
from farm_ng.utils.ticks import TickRepeater

# from farm_ng.utils.packet import EstopRequest

# NOTE: To use the adafruit_debouncer lib, you need adafruit_debouncer.mpy
# and adafruit_ticks.mpy on your microcontroller.
# These can be extracted from the adafruit-circuitpython-bundle (we use version 7.x),
# which you can download at https://circuitpython.org/libraries


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
        self.cmd_repeater = TickRepeater(ticks_period_ms=50)

        # NOTE: ``self.registered`` could be used for some visual indicator
        # on your safety device
        self.registered = False

        self._register_message_handlers()

        self.pin_D10 = read_adafruit_pin(board.D10)
        self.pin_D11 = read_adafruit_pin(board.D11)
        self.pin_D12 = read_adafruit_pin(board.D12)
        self.pin_D13 = read_adafruit_pin(board.D13)

    def _register_message_handlers(self):
        self.main_loop.command_handlers[CanOpenObject.RPDO1 | self.node_id] = self._handle_estop_reply

    def _handle_estop_reply(self, message):
        """Listens to Amiga Tpdo1 to check e-stop state of dashboard."""
        self.reply = EstopReply.from_can_data(message.data)
        self.registered = bool(self.node_id & self.reply.registered_devices)

    def iter(self):
        if self.cmd_repeater.check():
            # Pins must be updated before values can be read
            self.pin_D10.update()
            self.pin_D11.update()
            self.pin_D12.update()
            self.pin_D13.update()

            # Construct and send the BumperState
            bbytes = (
                (0x1 * self.pin_D10.value)
                + (0x2 * self.pin_D11.value)
                + (0x4 * self.pin_D12.value)
                + (0x8 * self.pin_D13.value)
            )
            bumper_state_obj = BumperState(bbytes)
            self.can.send(Message(id=CanOpenObject.TPDO1 | self.node_id, data=bumper_state_obj.encode()))

            # # Another option is just send a generic EstopRequest
            # self.can.send(EstopRequest.make_message(self.node_id, bool(bbytes != 0x0)))

            # # NOTE: IF DEVELOPING ON LAPTOP, PRINT BUMPER STATE MESSAGE:
            # # print("bumperstate {}".format(bumper_state_obj))


def main():
    MainLoop(AppClass=BumperMainLoopApp, has_display=False).loop()


main()
