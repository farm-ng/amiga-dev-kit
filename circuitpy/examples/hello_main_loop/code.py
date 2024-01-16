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
from canio import Message
from farm_ng.utils.cobid import CanOpenObject
from farm_ng.utils.main_loop import MainLoop
from farm_ng.utils.packet import AmigaControlState
from farm_ng.utils.packet import AmigaRpdo1
from farm_ng.utils.packet import AmigaTpdo1
from farm_ng.utils.packet import DASHBOARD_NODE_ID
from farm_ng.utils.ticks import TickRepeater
from usb_cdc import console


class HelloMainLoopApp:
    def __init__(self, main_loop: MainLoop, can, node_id) -> None:
        self.can = can
        self.node_id = node_id
        self.main_loop = main_loop
        self.main_loop.show_debug = True
        self.cmd_repeater = TickRepeater(ticks_period_ms=50)

        self.cmd_speed = 0.0
        self.cmd_ang_rate = 0.0
        self.request_state = AmigaControlState.STATE_AUTO_READY
        self.inc = 0.1

        self._register_message_handlers()

    def _register_message_handlers(self):
        self.main_loop.command_handlers[CanOpenObject.TPDO1 | DASHBOARD_NODE_ID] = self._handle_amiga_tpdo1

    def _handle_amiga_tpdo1(self, message):
        self.amiga_tpdo1 = AmigaTpdo1.from_can_data(message.data)
        if self.amiga_tpdo1.state != AmigaControlState.STATE_AUTO_ACTIVE:
            self.cmd_speed = 0.0
            self.cmd_ang_rate = 0.0
            self.request_state = AmigaControlState.STATE_AUTO_READY
        print(self.amiga_tpdo1, end="\r")

    def parse_wasd_cmd(self, char):
        if char == " ":
            if self.request_state == AmigaControlState.STATE_AUTO_READY:
                self.request_state = AmigaControlState.STATE_AUTO_ACTIVE
            else:
                self.request_state = AmigaControlState.STATE_AUTO_READY
        elif char == "w":
            self.cmd_speed += self.inc
        elif char == "s":
            self.cmd_speed -= self.inc
        elif char == "a":
            self.cmd_ang_rate += self.inc
        elif char == "d":
            self.cmd_ang_rate -= self.inc

    def serial_read(self):
        while console.in_waiting > 0:
            self.parse_wasd_cmd((console.read().decode("ascii")))

    def iter(self):
        self.serial_read()

        if self.cmd_repeater.check():
            self.can.send(
                Message(
                    id=CanOpenObject.RPDO1 | DASHBOARD_NODE_ID,
                    data=AmigaRpdo1(
                        state_req=self.request_state, cmd_speed=self.cmd_speed, cmd_ang_rate=self.cmd_ang_rate
                    ).encode(),
                )
            )


def main():
    MainLoop(AppClass=HelloMainLoopApp, has_display=False).loop()


main()
