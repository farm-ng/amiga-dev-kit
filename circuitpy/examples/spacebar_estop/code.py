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
from farm_ng.utils.cobid import CanOpenObject
from farm_ng.utils.main_loop import MainLoop
from farm_ng.utils.packet import AmigaControlState
from farm_ng.utils.packet import AmigaTpdo1
from farm_ng.utils.packet import DASHBOARD_NODE_ID
from farm_ng.utils.packet import EstopReply
from farm_ng.utils.packet import EstopRequest
from farm_ng.utils.ticks import TickRepeater
from farm_ng.utils.ticks import ticks_fresh
from farm_ng.utils.ticks import ticks_ms
from usb_cdc import console

# This was just created as a convenience for developing the safety device concept
# As such, it is not documented as a true amiga-dev-kit/circuitpy example


class SpacebarEstopApp:
    def __init__(self, main_loop: MainLoop, can, node_id) -> None:
        self.can = can
        self.node_id = node_id
        self.main_loop = main_loop
        self.print_repeater = TickRepeater(ticks_period_ms=100)
        self.cmd_repeater = TickRepeater(ticks_period_ms=50)

        # NOTE: ``self.registered`` could be used for some visual indicator
        # on your safety device
        self.registered = False
        self.pressed = False
        self.ser_stamp = ticks_ms()
        self.amiga_tpdo1: AmigaTpdo1 = None

        self._register_message_handlers()

    def _register_message_handlers(self):
        self.main_loop.command_handlers[CanOpenObject.TPDO1 | DASHBOARD_NODE_ID] = self._handle_amiga_tpdo1
        self.main_loop.command_handlers[CanOpenObject.RPDO1 | self.node_id] = self._handle_estop_reply

    def _handle_amiga_tpdo1(self, message):
        """Listens to Amiga Tpdo1 to check e-stop state of dashboard."""
        self.amiga_tpdo1 = AmigaTpdo1.from_can_data(message.data)

    def _handle_estop_reply(self, message):
        """Listens to EstopReply to check e-stop safety devices registered with the dashboard."""
        self.reply = EstopReply.from_can_data(message.data)
        self.registered = bool(self.node_id & self.reply.registered_devices)

    def serial_read(self):
        while console.in_waiting > 0:
            char = console.read().decode("ascii")
            if char == " ":
                self.pressed = True
                self.ser_stamp = ticks_ms()

        # Add a timeout from last press of the space bar
        if not ticks_fresh(self.ser_stamp, thresh_ms=500):
            self.pressed = False

    def iter(self):
        # Check for spacebar input
        self.serial_read()

        if self.print_repeater.check():
            # Print status
            estop_str: str = (
                "???" if self.amiga_tpdo1 is None else str(self.amiga_tpdo1.state == AmigaControlState.STATE_ESTOPPED)
            )
            print(
                "Registered: {} ".format(self.registered)
                + " | "
                + "Amiga e-stopped: {} ".format(estop_str)
                + " | "
                + "Request e-stopped: {}  ".format(self.pressed),
                end="\r",
            )

        # Send e-stop request to Amiga dashboard
        if self.cmd_repeater.check():
            self.can.send(EstopRequest.make_message(self.node_id, self.pressed))


def main():
    MainLoop(AppClass=SpacebarEstopApp, has_display=False).loop()


main()
