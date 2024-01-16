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
from errno import EISDIR
from errno import ENOENT
from os import listdir
from os import mkdir
from os import remove
from os import rmdir
from os import sep as os_sep
from os import stat

from microcontroller import reset
from supervisor import reload


def path_dirname(p: str):
    """Returns the directory component of a pathname."""
    i = p.rfind(os_sep) + 1
    head = p[:i]
    if head and head != os_sep * len(head):
        head = head.rstrip(os_sep)
    return head


def path_split(p):
    """Split a pathname.

    Returns tuple "(head, tail)" where "tail" is everything after the final slash.  Either part may be empty.
    """
    sep = os_sep
    i = p.rfind(sep) + 1
    head, tail = p[:i], p[i:]
    if head and head != sep * len(head):
        head = head.rstrip(sep)
    return head, tail


def path_exists(p):
    """Return True if path exists."""
    try:
        stat(p)
    except OSError:
        return False
    return True


def path_join(parent: str, child: str):
    """Joins parent and child path."""
    parent = parent.rstrip("/")
    child = child.strip("./")
    return os_sep.join((parent, child))


def path_basename(p: str):
    """Returns the final component of a pathname."""
    i = p.rfind(os_sep) + 1
    return p[i:]


def makedirs(name, exist_ok=False):
    """Wraps makedirs(name [, mode=0o777][, exist_ok=False]).

    Super-mkdir; create a leaf directory and all intermediate ones.  Works like mkdir, except that any intermediate path
    segment (not just the rightmost) will be created if it does not exist. If the target directory already exists, raise
    an OSError if exist_ok is False. Otherwise no exception is raised.  This is recursive.
    """
    head, tail = path_split(name)
    if not tail:
        head, tail = path_split(head)
    if head and tail and not path_exists(head):
        makedirs(head, exist_ok=exist_ok)
    try:
        mkdir(name)
    except OSError:
        if not exist_ok:
            raise


def remove_all(name):
    """Recursively remove paths."""
    try:
        dir_list = listdir(name)
    except OSError as e:
        if e.errno == ENOENT:
            pass
        else:
            raise

    for path in dir_list:
        path = path_join(name, path)
        try:
            print(f"removing {path}")
            remove(path)
        except OSError as e:
            if e.errno == EISDIR:
                remove_all(path)

    try:
        rmdir(name)
    except OSError as e:
        print(f"rmdir {name} e: {e}")


def clip(x, min_value, max_value):
    """Return value, within bounds [min,max]"""
    return max(min(x, max_value), min_value)


def rescale(x, x0, x1, y0, y1):
    """Rescale x from (x0, x1) to (y0, y1), with clipping."""
    t = clip((x - x0) / (x1 - x0), 0, 1)
    return y0 + (y1 - y0) * t


def trigger_soft_reset():
    """Equivalent of CTRL+D."""
    reload()


def trigger_hard_reset():
    """Equivalent of power cycle / reset button."""
    reset()


class Axis:
    """Used for mapping joysticks."""

    def __init__(self, min, dz_neg, dz_pos, max):
        """min, -deadzone, +deadzone, max."""
        self.v0 = min
        self.v1 = dz_neg
        self.v2 = dz_pos
        self.v3 = max

    def map(self, v):
        """returns value mapped to range [-1, +1]"""
        if v < self.v1:
            return -1 + (v - self.v0) / (self.v1 - self.v0)
        elif v > self.v2:
            return (v - self.v2) / (self.v3 - self.v2)
        return 0
