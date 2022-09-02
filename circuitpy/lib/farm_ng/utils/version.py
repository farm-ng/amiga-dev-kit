"""Update values following semantic versioning convention.

- MAJOR: Major version
- MINOR: Minor version
- PATCH: Patch version
- DEV: Boolean indicating it is a development release
"""
from os import uname as os_uname

# 0.0.3 == Aug 24, 2022
MAJOR = 0
MINOR = 0
PATCH = 4
DEV = False


def asserts():
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
    """Types of boards Amiga application layer firmware is run on."""

    AMIGA_DISPV0 = 1
    FEATHER_M4_CAN = 2
    LINUX = 3
    UNKNOWN = 0


def get_board_type():
    """Returns detected board type."""
    uname = os_uname()
    print(uname)
    if "Amiga_DispV0" in uname.machine:
        return BoardType.AMIGA_DISPV0
    if "Adafruit Feather M4 CAN" in uname.machine:
        return BoardType.FEATHER_M4_CAN
    if "x86_64" in uname.machine:
        return BoardType.LINUX
    return BoardType.UNKNOWN


if __name__ == "__main__":
    print(version_string())
