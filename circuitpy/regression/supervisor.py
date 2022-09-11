def reload():
    print("Should trigger soft reset (CTRL+D)")
    print("But currently does nothing in emulator")


def ticks_ms():
    import time

    return int(time.monotonic() * 1000.0)
