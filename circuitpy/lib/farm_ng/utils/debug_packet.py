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
from struct import pack
from struct import unpack

from farm_ng.utils.general import clip
from farm_ng.utils.packet import Packet


class FarmngDebugMemory(Packet):
    """To be used for tracking the memory of up to 4 spots in the iter loop."""

    format = "<4H"
    cob_id = 0x500  # RPDO4

    def __init__(self, mem_list: list = []):
        self.mem_list = mem_list

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        self.mem_list = [clip(int(x), 0, 65536) for x in self.mem_list[:4]]

        while len(self.mem_list) < 4:
            self.mem_list.append(0)
        return pack(self.format, *self.mem_list)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        self.mem_list = list(unpack(self.format, data))

    def __str__(self):
        s = "("
        for x in self.mem_list:
            s += "{:5d},".format(x)
        s += ")"
        return s


class FarmngDebugTimer(Packet):
    """To be used for tracking the time of up to 8 dt time steps."""

    format = "<8b"
    cob_id = 0x480  # TPDO4

    def __init__(self, dt_list: list = []):
        self.dt_list = dt_list

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        # self.dt_list = [clip(int(x), 0, 255) for x in self.dt_list[:8]]
        self.dt_list = [clip(int(x), -127, 127) for x in self.dt_list[:8]]

        while len(self.dt_list) < 8:
            self.dt_list.append(0)
        return pack(self.format, *self.dt_list)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        self.dt_list = list(unpack(self.format, data))

    def __str__(self):
        s = "("
        for x in self.dt_list:
            s += "{:3d},".format(x)

        s += ")"
        return s
