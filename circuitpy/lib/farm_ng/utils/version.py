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
"""Update values following semantic versioning convention.

- MAJOR: Major version
- MINOR: Minor version
- PATCH: Patch version
- DEV: Boolean indicating it is a development release
"""
from os import uname as os_uname

# 0.4.0 == Jan 12, 2024

MAJOR = 0
MINOR = 4
PATCH = 0
DEV = False


def asserts():
    """Enforces version."""
    assert isinstance(MAJOR, int) and MAJOR >= 0 and MAJOR <= 255
    assert isinstance(MINOR, int) and MINOR >= 0 and MINOR <= 255
    assert isinstance(PATCH, int) and PATCH >= 0 and PATCH <= 255
    assert isinstance(DEV, bool)


def version_tuple():
    """Returns tuple containing firmware version."""
    asserts()
    return (MAJOR, MINOR, PATCH, DEV)


def version_string():
    """Returns string containing firmware version."""
    asserts()
    s = f"v{MAJOR}.{MINOR}.{PATCH}"
    if DEV:
        s += "-dev"
    return s


class BoardType:
    """Enum representing the Amiga Board type (where Amiga application layer is running)."""

    AMIGA_DISPV0 = 1
    FEATHER_M4_CAN = 2
    LINUX = 3
    UNKNOWN = 0


def get_board_type():
    """Return the Board type based on the operating system."""
    uname = os_uname()
    print('get_board_type()', uname.machine)
    if "Amiga_DispV0" in uname.machine:
        return BoardType.AMIGA_DISPV0
    if "Adafruit Feather M4 CAN" in uname.machine:
        return BoardType.FEATHER_M4_CAN
    if "x86_64" in uname.machine:
        return BoardType.LINUX
    return BoardType.UNKNOWN


if __name__ == "__main__":
    print(version_string())
