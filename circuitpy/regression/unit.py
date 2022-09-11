import math
import os
import struct
import sys
import time
import unittest

sys.path.append("src")
sys.path.append("src/dashboard")
sys.path.append("src/dashboard/lib")

import dashboard.code as dashboard
import dashboard.parameters as parm
import legacy.vesc as vesc
import farm_ng.asi.motor_controller as motor_controller
import analogio
from farm_ng.utils.can import setup_can_default
from mocks import MockDisplay, MockMotor, MockWifi

import adafruit_logging

import board


def near(a, b):
    return abs(a - b) < 0.01


class Message:
    def __init__(self, id, data):
        self.id = id
        self.data = data


dashboard.Display = MockDisplay
dashboard.WIFI = MockWifi


class MockWifi:
    def __init__(self, id, can):
        pass


class TestDashboard(unittest.TestCase):
    def setUp(self):
        self.can = dashboard.canio_wrapper(RX, TX, BAUDRATE, AUTO_RESTART)
        self.db = dashboard.Dashboard(MockDisplay(), self.can, MockMotor, MockWifi)

    def test_init(self):
        can = dashboard.canio_wrapper(RX, TX, BAUDRATE, AUTO_RESTART)
        db = dashboard.Dashboard(MockDisplay(), can, MockMotor, MockWifi)
        db.control_loop_iter()

    def test_joystick_forward(self):
        db = self.db

        db._state = dashboard.STATE_CC_ACTIVE

        analogio.A0.value = 32768
        analogio.A1.value = 0
        analogio.A3.value = 65535
        t = 3
        for i in range(int(t * db.rate)):
            db._joystick_kinematics(time.monotonic())
            # print((db.v, parameters.g_speed_max))
        self.assertTrue(near(db.v, 0))
        self.assertEqual(db.w, 0)

    def test_joystick_backward(self):
        db = self.db

        db._state = dashboard.STATE_CC_ACTIVE

        analogio.A0.value = 32768
        analogio.A1.value = 65535
        analogio.A3.value = 65535
        t = 3
        for i in range(int(t * db.rate)):
            db._joystick_kinematics(time.monotonic())
        self.assertTrue(near(db.v, 0))
        self.assertEqual(db.w, 0)


class TestVesc(unittest.TestCase):
    def test_set_speed(self):
        can = setup_can_default()
        for id in (1, 254):
            arpm = []
            for speed in (0, 1, 1.1, 2, 2.1, 3):
                can.empty()
                v = vesc.Vesc(id, can)
                v.set_speed(speed)
                (msg,) = can.sent
                self.assertEqual(msg.id, (vesc.VESC_SET_RPM << 8) | id)
                (actual_rpm,) = struct.unpack(">i", msg.data)
                arpm.append(actual_rpm)
            assert arpm[0] == 0
            assert len(set(arpm)) == len(arpm)
            assert arpm == sorted(arpm)

    def test_current_brake(self):
        can = setup_can_default()
        v = vesc.Vesc(0xA, can)
        for amps in (0, 1, 2, 9999):
            can.empty()
            v.motor.send_current_brake_command(amps)
            (msg,) = can.sent
            self.assertEqual(msg.id, (vesc.VESC_SET_CURRENT_BRAKE << 8) | 0xA)
            (actual_current,) = struct.unpack(">i", msg.data)
            expected = 1000 * min(amps, v.motor.max_current)
            self.assertEqual(actual_current, expected)

    def test_current_command(self):
        can = setup_can_default()
        v = vesc.Vesc(0xA, can)
        for amps in (0, 1, 2, 9999):
            can.empty()
            v.motor.send_current_command(amps)
            (msg,) = can.sent
            self.assertEqual(msg.id, (vesc.VESC_SET_CURRENT << 8) | 0xA)
            (actual_current,) = struct.unpack(">i", msg.data)
            expected = 1000 * min(amps, v.motor.max_current)
            self.assertEqual(actual_current, expected)

    def test_parsers(self):

        state = vesc.MotorControllerState()
        vesc.vesc_parse_status_msg_1(state, struct.pack(">ihh", 22, 33, 44))
        self.assertEqual(state.rpm, 22)
        self.assertEqual(state.current, 3.3)
        self.assertEqual(state.duty_cycle, 0.044)

        state = vesc.MotorControllerState()
        vesc.vesc_parse_status_msg_2(state, struct.pack(">ii", 22, 33))
        self.assertEqual(state.amp_hours, 22e-4)
        self.assertEqual(state.amp_hours_charged, 33e-4)

        state = vesc.MotorControllerState()
        vesc.vesc_parse_status_msg_3(state, struct.pack(">ii", 22, 33))
        self.assertEqual(state.watt_hours, 22e-4)
        self.assertEqual(state.watt_hours_charged, 33e-4)

        state = vesc.MotorControllerState()
        vesc.vesc_parse_status_msg_4(state, struct.pack(">hhhh", 22, 33, 44, 55))
        self.assertEqual(state.temp_fet, 22e-1)
        self.assertEqual(state.temp_motor, 33e-1)
        self.assertEqual(state.current_in, 44e-1)
        self.assertEqual(state.pid_pos, 55 / 50)

        state = vesc.MotorControllerState()
        vesc.vesc_parse_status_msg_5(state, struct.pack(">ihh", 22, 33, 44))
        self.assertEqual(state.tachometer, 22 / 6.0)
        self.assertEqual(state.input_voltage, 33e-1)

    def test_none_message(self):
        can = setup_can_default()
        v = vesc.Vesc(0x17, can)
        v.control_loop_iter(None)

    def test_tach(self):
        can = setup_can_default()
        v = vesc.Vesc(0x17, can)
        self.assertEqual(v.motor.tachometer_rads(), 0)
        v.control_loop_iter(Message(0x1B17, struct.pack(">ihh", 22, 33, 44)))
        m = v.motor
        er = 22 / 6.0
        rotations = er / (m.poll_pairs * m.gear_ratio)
        expected = rotations * 2 * math.pi
        self.assertTrue(near(v.motor.tachometer_rads(), expected))

    def test_state(self):
        state = vesc.MotorControllerState()
        d = eval(str(state))
        [self.assertEqual(v, 0.0) for v in d.values()]

    def test_rpm(self):
        can = setup_can_default()
        v = vesc.Vesc(0x17, can)
        self.assertEqual(v.motorRpm(), 0)
        v.set_speed(3)
        self.assertNotEqual(v.motorRpm(), 0)
        v.idle()
        self.assertEqual(v.motorRpm(), 0)

    def test_handle_can_message(self):
        can = setup_can_default()
        v = vesc.Vesc(0x17, can)
        self.expect_warnings(
            0, lambda: v.motor.handle_can_message(Message(0x0518, b"foobar"))
        )

        self.expect_warnings(
            1, lambda: v.motor.handle_can_message(Message(0x5517, b"foobar"))
        )

        self.expect_warnings(
            0,
            lambda: v.motor.handle_can_message(
                Message(0x1B17, struct.pack(">ihh", 22, 33, 44))
            ),
        )
        self.assertNotEqual(v.motor.average_update_rate(), 0)

    def expect_warnings(self, n, f):
        m = adafruit_logging.num_warnings
        f()
        self.assertEqual(adafruit_logging.num_warnings, m + n)


class TestFullstack(unittest.TestCase):
    def test_vesc(self):
        can = setup_can_default()
        v = vesc.Vesc
<<<<<<< HEAD
        db = dashboard.App(can)
=======
        db = dashboard.Dashboard(MockDisplay(), can, v, MockWifi)
>>>>>>> origin/main

    def test_asi(self):
        can = setup_can_default()
        v = motor_controller.Motor
<<<<<<< HEAD
        db = dashboard.App(can)
=======
        db = dashboard.Dashboard(MockDisplay(), can, v, MockWifi)
>>>>>>> origin/main


if __name__ == "__main__":
    unittest.main()
