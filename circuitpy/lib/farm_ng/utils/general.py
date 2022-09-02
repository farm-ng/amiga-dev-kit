# Python imports
from os import stat, listdir, mkdir, remove, rmdir
from os import sep as os_sep
from errno import ENOENT, EISDIR

# CircuitPython modules
from supervisor import reload, ticks_ms
from microcontroller import reset


def path_dirname(p: str):
    """Returns the directory component of a pathname"""
    i = p.rfind(os_sep) + 1
    head = p[:i]
    if head and head != os_sep * len(head):
        head = head.rstrip(os_sep)
    return head


def path_split(p):
    """Split a pathname.  Returns tuple "(head, tail)" where "tail" is
    everything after the final slash.  Either part may be empty."""
    sep = os_sep
    i = p.rfind(sep) + 1
    head, tail = p[:i], p[i:]
    if head and head != sep * len(head):
        head = head.rstrip(sep)
    return head, tail


def path_exists(p):
    """Return True if path exists"""
    try:
        stat(p)
    except OSError as e:
        return False
    return True


def path_join(parent: str, child: str):
    """Joins parent and child path"""
    parent = parent.rstrip("/")
    child = child.strip("./")
    return os_sep.join((parent, child))


def path_basename(p: str):
    """Returns the final component of a pathname"""
    i = p.rfind(os_sep) + 1
    return p[i:]


def makedirs(name, exist_ok=False):
    """makedirs(name [, mode=0o777][, exist_ok=False])

    Super-mkdir; create a leaf directory and all intermediate ones.  Works like
    mkdir, except that any intermediate path segment (not just the rightmost)
    will be created if it does not exist. If the target directory already
    exists, raise an OSError if exist_ok is False. Otherwise no exception is
    raised.  This is recursive.

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
    """Recursively remove paths"""
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


def trigger_soft_reset():
    """Equivalent of CTRL+D"""
    reload()


def trigger_hard_reset():
    """Equivalent of power cycle / reset button"""
    reset()


_TICKS_PERIOD = 1 << 29
_TICKS_MAX = _TICKS_PERIOD - 1
_TICKS_HALFPERIOD = _TICKS_PERIOD // 2


def ticks_add(ticks, delta):
    "Add a delta to a base number of ticks, performing wraparound at 2**29ms."
    return (ticks + delta) % _TICKS_PERIOD


def ticks_diff(ticks1, ticks2):
    "Compute the signed difference between two ticks values, assuming that they are within 2**28 ticks"
    diff = (ticks1 - ticks2) & _TICKS_MAX
    diff = ((diff + _TICKS_HALFPERIOD) & _TICKS_MAX) - _TICKS_HALFPERIOD
    return diff


def ticks_less(ticks1, ticks2):
    "Return true iff ticks1 is less than ticks2, assuming that they are within 2**28 ticks"
    return ticks_diff(ticks1, ticks2) < 0


def ticks_fresh(ticks, thresh_ms=1000):
    "Returns true if age of ticks is less than thresh_ms, assuming within 2**28 ticks of current ticks_ms()"
    return ticks_diff(ticks_ms(), ticks) < thresh_ms


class DtTracker:
    """
    Used for tracking multiple timeseries, differentiated by `name`
    parameter passed to constructor
    """

    _g_trackers = dict()

    def __init__(self, name):
        self.last_tick_ms = ticks_ms()
        self.last_dt_ms = 0
        self.dt_history = [0]
        self.name = name
        DtTracker._g_trackers[name] = self

    def age(self, _ticks_ms):
        """
        Returns time in ms from last ``update()`` to _ticks_ms
        """
        return ticks_diff(_ticks_ms, self.last_tick_ms)

    def ticks_age(self) -> int:
        """
        Returns time in ms since last ``update()``
        Updates the time tracker
        """
        t = self.age(ticks_ms())
        self.update()
        return t

    def ticks_age_cumul(self) -> int:
        """
        Returns time in ms since last ``update()``
        Does NOT update the time tracker
        """
        t = self.age(ticks_ms())
        return t

    def start(self, _ticks_ms=None):
        """
        Start the time tracker
        """
        if _ticks_ms is None:
            _ticks_ms = ticks_ms()
        self.last_tick_ms = _ticks_ms

    def stop(self, _ticks_ms=None):
        """
        Stop the time tracker
        """
        if _ticks_ms is None:
            _ticks_ms = ticks_ms()
        dt_ms = ticks_diff(_ticks_ms, self.last_tick_ms)
        self.last_dt_ms = dt_ms
        self.update_history(dt_ms)
        return dt_ms

    def update_history(self, dt_ms):
        """
        Addend dt history with dt_ms
        """
        self.dt_history.append(dt_ms)
        self.dt_history = self.dt_history[-10:]

    def update(self):
        """
        Reset the time tracker
        """
        self.stop(_ticks_ms=ticks_ms())
        self.start(_ticks_ms=ticks_ms())

    def mean_dt(self):
        """
        Returns mean of the dt_history
        """
        return sum(self.dt_history) / len(self.dt_history)

    def minmeanmax(self):
        """
        Returns string with min, mean, & max of the dt_history
        """
        h = self.dt_history
        return "%4.1f %4.1f %4.1f" % (min(h), self.mean_dt(), max(h))


# TODO_STABLE2 not sure how much overhead this ticks repeater is
class TickRepeater:
    """
    Used as a timer, with the check() method returning true every `ticks_period_ms`
    Uses `ticks_ms`, which wraps every 2^29 ms (~6.2 days).
    The logic handles a single wrap, but does not detect two wraps.

    See [supervisor.ticks_ms()` docs](https://docs.circuitpython.org/en/latest/shared-bindings/supervisor/#supervisor.ticks_ms)
    for more details about `ticks_ms`.
    """

    def __init__(self, ticks_period_ms):
        self.ticks_period_ms = ticks_period_ms
        self.last_tick = ticks_ms()
        self.updated = False

    def check(self):
        """
        This is the recommended method to use for checking the TickRepeater timer.
        Wraps the `update()` method.
        """
        ticks = ticks_ms()
        self.updated = False
        while self.update(ticks):
            pass
        return self.updated

    def reset(self):
        """
        Reset the timer to start from the current time
        """
        self.last_tick = ticks_ms()

    def update(self, ticks):
        """
        Returns `False` unless `ticks_period_ms` has past, as compared to previous checkpoint.
        Updates to next checkpoint when `True` is returned
        """
        next_tick = ticks_add(self.last_tick, self.ticks_period_ms)
        if ticks_less(next_tick, ticks):
            self.last_tick = next_tick
            self.updated = True
            return True
        return False


class Repeater:
    """
    Only for backwards compatibility
    Replaces for old time.monotonic() Repeater
    by wrapping current TickRepeater
    """

    def __init__(self, cycle):
        self.tick_repeater = TickRepeater(int(cycle * 1000))

    def check(self):
        return self.tick_repeater.check()


class CatchupRepeater:
    """
    Only for backwards compatibility
    Replaces for old time.monotonic() CatchupRepeater
    by wrapping current TickRepeater
    """

    def __init__(self, cycle):
        self.tick_repeater = TickRepeater(int(cycle * 1000))

    def check(self):
        return self.tick_repeater.check()