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
from random import choice
from random import seed
from struct import calcsize
from struct import pack
from struct import unpack

from microcontroller import nvm as mc_nvm

from .ticks import ticks_ms


class ValueStore:
    _next_address = 0

    @classmethod
    def get_next_address(cls, size):
        addr = cls._next_address
        cls._next_address += size
        return addr


class Value:
    def __init__(self, name, format: str, *default) -> None:
        self.name = name
        self.name_format = f"<{len(name)}sH"
        self.name_size = calcsize(self.name_format)
        self.name_address = ValueStore.get_next_address(self.name_size)
        self.default = default
        self.value_format = format
        self.value_size = calcsize(self.value_format)
        self.value_address = ValueStore.get_next_address(self.value_size)
        self.write_default()

    def read_name(self):
        name, val_addr = unpack(self.name_format, mc_nvm[self.name_address : self.name_address + self.name_size])
        return name.decode("ascii"), val_addr

    def write_default(self):
        try:
            name, val_addr = self.read_name()
            if name == self.name:
                assert val_addr == self.value_address, (val_addr, self.value_address)
                return
        except Exception as e:
            print(e)

        mc_nvm[self.name_address : self.name_address + self.name_size] = pack(
            self.name_format, self.name, self.value_address
        )
        self.write(*self.default)

    def write(self, argv):
        if type(argv) not in (list, tuple):
            argv = (argv,)
        mc_nvm[self.value_address : self.value_address + self.value_size] = pack(self.value_format, *argv)

    def read(self):
        return unpack(self.value_format, mc_nvm[self.value_address : self.value_address + self.value_size])


def random_string(length):
    chars = [
        # "0", # Remove 0 vs O ambiguity
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        # "O", # Remove 0 vs O ambiguity
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ]
    seed(ticks_ms())
    return "".join(choice(chars) for i in range(length))


# up to a 100 character string
nvm_serial_number = Value("sn", "<100s", random_string(100))
nvm_node_id = Value("canid", "<I", 0x42)  # Canbus id
# Total uptime in minutes, unsigned integer is enough for 7990 years...
nvm_minutes = Value("minutes", "<I", 0)
# Calibration of the joystick (x,y) on [-1, 1]
nvm_joystick_calib = Value("joystick_calib", "<2h", (0, 0))

# Unstable -- not actually in use
_n_battery_samples = 121
nvm_battery_history = Value("battery_history", "<" + "H" * _n_battery_samples, [0] * _n_battery_samples)
