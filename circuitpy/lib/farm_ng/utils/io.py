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


def sense(p):
    """Simple outlier rejection filter for all analog inputs."""
    N = 100
    s = [p.value for i in range(N)]
    c = sorted(s)[40:60]
    return sum(c) // len(c)


class Axis:
    """Used for mapping joysticks."""

    def __init__(self, min, dz_neg, dz_pos, max):
        """Min, -deadzone, +deadzone, max."""
        self.v0 = min
        self.v1 = dz_neg
        self.v2 = dz_pos
        self.v3 = max

    def map(self, v):
        """Returns value mapped to range [-1, +1]"""
        if v < self.v1:
            return -1 + (v - self.v0) / (self.v1 - self.v0)
        elif v > self.v2:
            return (v - self.v2) / (self.v3 - self.v2)
        return 0
