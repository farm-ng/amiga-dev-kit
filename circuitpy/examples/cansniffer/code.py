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
from farm_ng.utils.general import TickRepeater
from farm_ng.utils.main_loop import MainLoop


class CansnifferApp:
    def __init__(self, main_loop: MainLoop, can, node_id) -> None:
        self.can = can
        self.node_id = node_id
        self.main_loop = main_loop
        self.main_loop.show_debug = True
        self.main_loop.show_time = True
        self.main_loop.show_can_dts = True
        self.debug_repeater = TickRepeater(ticks_period_ms=1000)

    def iter(self):
        if self.debug_repeater.check():
            print("\033[2J", end="")
            print(self.main_loop.io_debug_str())


def main():
    MainLoop(AppClass=CansnifferApp, has_display=False).loop()


main()
