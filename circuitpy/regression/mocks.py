import os
from unittest.mock import Mock


class MockWifi:
    def scan_aps(self):
        pass

    def connect(self, ssid, password):
        pass


class MockDisplay:
    def __init__(self):
        self.gd = Mock()
        self.gd.inputs = Mock()
        self.dir = "/tmp"
        with open(f"{self.dir}/settings.csv", "wt") as f:
            pass
        os.system("cp src/factory_settings.csv ./")

    def update(self, o):
        pass

    def click(self):
        pass

    def touching(self):
        return True

    @property
    def bumplevel(self):
        # NOTE: This is used by the motor controller to determine
        # the maximum speed the amiga can move. Using (current)
        # default value from display.py
        return 7


class MockMotor:
    def __init__(self, id, can):
        self.id = id
        self.can = can
        self.mc = Mock()

    def set_speed(self, s):
        pass

    def control_loop_iter(self, message):
        pass

    def motorRpm(self):
        return 0

    def batteryVoltage(self):
        return 48

    def motorCurrent(self):
        return 0

    def motorTemp(self):
        return 0

    def readMotorTemp(self):
        pass

    def idle(self):
        pass
