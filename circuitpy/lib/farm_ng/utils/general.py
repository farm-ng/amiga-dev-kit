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
from os import stat

import microcontroller

os_sep = '/'


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
        dir_list = []
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


def clip(x, min_value=0, max_value=1):
    """Return value, within bounds [min,max]"""
    return max(min(x, max_value), min_value)


def rescale01(x: float, x0: float, x1: float):
    """Rescale x from (x0, x1) to (0, 1), with clipping."""
    return clip((x - x0) / (x1 - x0))


def rescale(x: float, x0: float, x1: float, y0: float, y1: float):
    """Rescale x from (x0, x1) to (y0, y1), with clipping."""
    return y0 + (y1 - y0) * rescale01(x, x0, x1)


def avg(iterable):
    """Returns the average of a list or tuple.

    Returns 0 if empty.
    """
    assert isinstance(iterable, list) or isinstance(iterable, tuple)
    if len(iterable) == 0:
        return 0
    return sum(iterable) / len(iterable)


def avg_min_max(iterable):
    """Returns a tuple with the (average, min, max) of a list or tuple.

    Returns (0, 0, 0) if empty.
    """
    assert isinstance(iterable, list) or isinstance(iterable, tuple)
    if len(iterable) == 0:
        return (0, 0, 0)
    return (sum(iterable) / len(iterable), min(iterable), max(iterable))


def mount_circuitpy():
    import os
    import storage

    try:
        storage.remount("/", False)
    except OSError:
        print('Cannot remount /')
    if 'boot.py' in os.listdir():
        os.rename('boot.py', '_boot.py')
    microcontroller.reset()


def reset_to_bootloader():
    microcontroller.on_next_reset(microcontroller.RunMode.BOOTLOADER)
    microcontroller.reset()


def current_write_state() -> bool:
    """Returns True if the microcontroller is currently booted into a writeable state.

    Returns False otherwise.
    """
    try:
        with open("foobarbaz", "w"):
            pass
        from os import remove

        remove("foobarbaz")
        return True
    except OSError:
        return False
