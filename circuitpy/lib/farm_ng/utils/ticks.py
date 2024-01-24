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
from time import monotonic_ns


def ticks_ms():
    """Returns monotonic time in ms."""
    return monotonic_ns() // 1_000_000


def ticks_fresh(ticks, thresh_ms=1000):
    "Returns true if age of ticks is less than thresh_ms, assuming within 2**29 ticks of current ticks_ms()"
    return (ticks_ms() - ticks) < thresh_ms


def ticks_diff(ticks1, ticks2):
    """
    TODO: Remove me!

    Returns difference between ticks1 and ticks2, assuming within 2**29 ticks of current ticks_ms()"""
    return ticks1 - ticks2


class TickRepeater:
    """Used as a timer, with the check() method returning true every `ticks_period_ms`"""

    def __init__(self, ticks_period_ms):
        self.ticks_period_ms = ticks_period_ms
        self.reset()
        self.updated = False

    def reset(self):
        """Reset the timer to start from the current time."""
        self.next = ticks_ms() + self.ticks_period_ms

    def check(self):
        """Return True if the period has passed since the last tick."""
        now = ticks_ms()
        if now < self.next:
            return False
        self.reset()
        return True


class DtTracker:
    """
    TODO: Remove me!

    Used for tracking multiple timeseries, differentiated by `name` parameter passed to constructor."""

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
