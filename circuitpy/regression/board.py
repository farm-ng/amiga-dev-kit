class pin:
    def __init__(self, name, val):
        self.name = name
        self._value = val

    @property
    def value(self):
        return self._value

    @value.setter
    def value(self, val):
        self._value = val


A0 = None
A1 = None
A2 = None
A3 = None
A4 = None
A5 = None

D0 = None
D1 = None
D2 = None
D3 = None
D4 = None
D5 = None
D6 = None
D7 = None
D8 = None
D9 = None
D10 = None
D11 = None
D12 = None
D13 = None

CAN_RX = None
CAN_TX = None

SCL = None
SCK = None
SDA = None

MISO = None
MOSI = None
