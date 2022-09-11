from enum import Enum


class DigitalInOut:
    def __init__(self, pin):
        self.pin = pin

    def deinit(self):
        pass

    @property
    def value(self):
        return self.pin.value

    @value.setter
    def value(self, val):
        self.pin.value = val


class DriveMode(Enum):
    PUSH_PULL = 1
    OPEN_DRAIN = 2


class Direction(Enum):
    INPUT = 1
    OUTPUT = 2


class Pull(Enum):
    UP = 1
    DOWN = 2
