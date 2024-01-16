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
from supervisor import ticks_ms


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


_TICKS_PERIOD = 1 << 29
_TICKS_MAX = _TICKS_PERIOD - 1
_TICKS_HALFPERIOD = _TICKS_PERIOD // 2


def ticks_add(ticks, delta):
    "Add a delta to a base number of ticks, performing wraparound at 2**29ms."
    return (ticks + delta) % _TICKS_PERIOD


def ticks_diff(ticks1, ticks2):
    "Compute the signed difference between two ticks values, assuming that they are within 2**29 ticks"
    diff = (ticks1 - ticks2) & _TICKS_MAX
    diff = ((diff + _TICKS_HALFPERIOD) & _TICKS_MAX) - _TICKS_HALFPERIOD
    return diff


def ticks_less(ticks1, ticks2):
    "Return true iff ticks1 is less than ticks2, assuming that they are within 2**29 ticks"
    return ticks_diff(ticks1, ticks2) < 0


def ticks_fresh(ticks, thresh_ms=1000):
    "Returns true if age of ticks is less than thresh_ms, assuming within 2**29 ticks of current ticks_ms()"
    return ticks_diff(ticks_ms(), ticks) < thresh_ms


class DtTracker:
    """Used for tracking multiple timeseries, differentiated by `name` parameter passed to constructor."""

    _g_trackers = dict()

    def __init__(self, name):
        self.last_tick_ms = ticks_ms()
        self.last_dt_ms = 0
        self.dt_history = [0]
        self.name = name
        DtTracker._g_trackers[name] = self

    def age(self, _ticks_ms):
        """Returns time in ms from last ``update()`` to _ticks_ms."""
        return ticks_diff(_ticks_ms, self.last_tick_ms)

    def ticks_age(self) -> int:
        """Returns time in ms since last ``update()`` Updates the time tracker."""
        t = self.age(ticks_ms())
        self.update()
        return t

    def ticks_age_cumul(self) -> int:
        """Returns time in ms since last ``update()`` Does NOT update the time tracker."""
        t = self.age(ticks_ms())
        return t

    def start(self, _ticks_ms=None):
        """Start the time tracker."""
        if _ticks_ms is None:
            _ticks_ms = ticks_ms()
        self.last_tick_ms = _ticks_ms

    def stop(self, _ticks_ms=None):
        """Stop the time tracker."""
        if _ticks_ms is None:
            _ticks_ms = ticks_ms()
        dt_ms = ticks_diff(_ticks_ms, self.last_tick_ms)
        self.last_dt_ms = dt_ms
        self.update_history(dt_ms)
        return dt_ms

    def update_history(self, dt_ms):
        """Addend dt history with dt_ms."""
        self.dt_history.append(dt_ms)
        self.dt_history = self.dt_history[-10:]

    def update(self):
        """Reset the time tracker."""
        self.stop(_ticks_ms=ticks_ms())
        self.start(_ticks_ms=ticks_ms())

    def mean_dt(self):
        """Returns mean of the dt_history."""
        return sum(self.dt_history) / len(self.dt_history)

    def minmeanmax(self):
        """Returns string with min, mean, & max of the dt_history."""
        h = self.dt_history
        return "%4.1f %4.1f %4.1f" % (min(h), self.mean_dt(), max(h))


class TickRepeater:
    """Used as a timer, with the check() method returning true every `ticks_period_ms` Uses `ticks_ms`, which wraps
    every 2^29 ms (~6.2 days). The logic handles a single wrap between checks, but does not handle two wraps
    between checks.

    See CircuitPython `supervisor.ticks_ms()` docs for more details.
    """

    def __init__(self, ticks_period_ms):
        self.ticks_period_ms = ticks_period_ms
        self.last_tick = ticks_ms()
        self.updated = False

    def check(self):
        """This is the recommended method to use for checking the TickRepeater timer.

        Wraps the `update()` method.
        """
        ticks = ticks_ms()
        self.updated = False
        while self.update(ticks):
            pass
        return self.updated

    def reset(self):
        """Reset the timer to start from the current time."""
        self.last_tick = ticks_ms()

    def update(self, ticks):
        """Returns `False` unless `ticks_period_ms` has past, as compared to previous checkpoint.

        Updates to next checkpoint when `True` is returned
        """
        next_tick = ticks_add(self.last_tick, self.ticks_period_ms)
        if ticks_less(next_tick, ticks):
            self.last_tick = next_tick
            self.updated = True
            return True
        return False


class Repeater:
    """Only for backwards compatibility Replaces for old time.monotonic() Repeater by wrapping current
    TickRepeater."""

    def __init__(self, cycle):
        self.tick_repeater = TickRepeater(int(cycle * 1000))

    def check(self):
        return self.tick_repeater.check()


class CatchupRepeater:
    """Only for backwards compatibility Replaces for old time.monotonic() CatchupRepeater by wrapping current
    TickRepeater."""

    def __init__(self, cycle):
        self.tick_repeater = TickRepeater(int(cycle * 1000))

    def check(self):
        return self.tick_repeater.check()


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
