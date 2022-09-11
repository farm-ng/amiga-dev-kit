class Ap:
    def deinit():
        pass


"""
TODO: Do we want to define these pins (A0-A5)
here as well as in board.py?
"""


class A0(Ap):
    value = 0


class A1(Ap):
    value = 0


class A2(Ap):
    value = 0


class A3(Ap):
    value = 0


class A4(Ap):
    value = 0


class A5(Ap):
    value = 0


class AnalogIn:
    def __init__(self, pin):
        self.pin = pin

    @property
    def value(self):
        return self.pin.value
