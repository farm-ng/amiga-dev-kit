from farm_ng.utils.general import TickRepeater, clip
from farm_ng.utils.main_loop import MainLoop
from usb_cdc import console

import board
from digitalio import DigitalInOut, Direction, Pull
from analogio import AnalogOut


class HelloMainLoopApp:
    def __init__(self, main_loop: MainLoop, can, node_id) -> None:
        # self.can = can
        # self.node_id = node_id
        self.main_loop = main_loop
        self.cmd_repeater = TickRepeater(ticks_period_ms=10)

        # # TODO: Fix analog for speed control
        # self.analog_out = AnalogOut(board.A0)
        # # Seems like ~20k is the default value (when program is not running)
        # self.analog_out.value = 0
        # self.set_speed = 0
        # self.inc = 1
        # self.max_speed = 45 # deg / s

        self.run_stop = DigitalInOut(board.D13) # run_stop
        self.run_stop.direction = Direction.OUTPUT
        self.run_stop.value = False

        self.dir = DigitalInOut(board.D11) # direction
        self.dir.direction = Direction.OUTPUT
        self.dir.value = True



    def parse_wasd_cmd(self, char):
        # if char == "w":
        #     self.set_speed -= self.inc
        # elif char == "s":
        #     self.set_speed += self.inc
        # self.set_speed = clip(self.set_speed, 0, self.max_speed )

        if char == "d":
            self.dir.value = True
        elif char == "a":
            self.dir.value = False

        if char == " ":
            self.run_stop.value = not self.run_stop.value



    def serial_read(self):
        while console.in_waiting > 0:
            self.parse_wasd_cmd((console.read().decode("ascii")))

    def iter(self):
        self.serial_read()

        # if self.cmd_repeater.check():
        #     print(self.dir, self.set_speed)



def main():
    MainLoop(AppClass=HelloMainLoopApp, has_display=False).loop()


main()


"""
Hacking based on the adafruit examples
"""
# # SPDX-FileCopyrightText: 2018 Kattni Rembor for Adafruit Industries
# #
# # SPDX-License-Identifier: MIT

# """CircuitPython Essentials Digital In Out example"""
# import time
# import board
# from digitalio import DigitalInOut, Direction, Pull

# # LED setup.
# #led = DigitalInOut(board.LED)
# # For QT Py M0. QT Py M0 does not have a D13 LED, so you can connect an external LED instead.
# # led = DigitalInOut(board.SCK)
# #led.direction = Direction.OUTPUT

# # For Gemma M0, Trinket M0, Metro M0 Express, ItsyBitsy M0 Express, Itsy M4 Express, QT Py M0
# # switch = DigitalInOut(board.D2)
# # switch = DigitalInOut(board.D5)  # For Feather M0 Express, Feather M4 Express
# # switch = DigitalInOut(board.D7)  # For Circuit Playground Express
# # switch.direction = Direction.INPUT
# # switch.pull = Pull.UP

# run_stop = DigitalInOut(board.D13) # run_stop
# # run_stop = DigitalInOut(board.D11) # direction
# run_stop.direction = Direction.OUTPUT
# run_stop.value = True


# # while True:
# #    # We could also do "led.value = not switch.value"!
# #    if run_stop.value:
# #        run_stop.value = False
# #    else:
# #        run_stop.value = True
# #    print(run_stop.value)
# #    time.sleep(3)

# # SPDX-FileCopyrightText: 2018 Kattni Rembor for Adafruit Industries
# #
# # SPDX-License-Identifier: MIT

# """CircuitPython Analog Out example"""
# import board
# from analogio import AnalogOut

# analog_out = AnalogOut(board.A1)
# analog_out.value = 32768

# # Seems like ~20k is the default value (when program is not running)
# while True:
#    # Count up from 0 to 65535, with 64 increment
#    # which ends up corresponding to the DAC's 10-bit range
#    for i in range(0, 64000, 640):
#        analog_out.value = i
#        print(i)
#        time.sleep(0.1)
