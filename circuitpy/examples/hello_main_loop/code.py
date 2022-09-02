from farm_ng.utils.main_loop import MainLoop
from farm_ng.utils.general import TickRepeater
from farm_ng.utils.packet import AmigaRpdo1, AmigaTpdo1, AmigaControlState, CanOpenObject, DASHBOARD_NODE_ID


import usb_cdc
import canio


class HelloMainLoopApp:
    def __init__(self, main_loop: MainLoop, can, node_id) -> None:
        self.can = can
        self.node_id = node_id
        self.main_loop = main_loop
        self.main_loop.show_debug = True
        self.cmd_repeater = TickRepeater(ticks_period_ms=50)

        self.cmd_speed = 0.0
        self.cmd_ang_rate = 0.0
        self.request_state = AmigaControlState.STATE_AUTO_READY
        self.inc = 0.1

    def parse_wasd_cmd(self, char):
        if char == " ":
            if self.request_state == AmigaControlState.STATE_AUTO_READY:
                self.request_state = AmigaControlState.STATE_AUTO_ACTIVE
            else:
                self.request_state = AmigaControlState.STATE_AUTO_READY
        elif char == "w":
            self.cmd_speed += self.inc
        elif char == "s":
            self.cmd_speed -= self.inc
        elif char == "a":
            self.cmd_ang_rate += self.inc
        elif char == "d":
            self.cmd_ang_rate -= self.inc

    def serial_read(self):
        while usb_cdc.console.in_waiting > 0:
            self.parse_wasd_cmd((usb_cdc.console.read().decode("ascii")))

    def iter(self, messages):
        self.serial_read()

        for message in messages:
            if AmigaTpdo1.check_id(message, DASHBOARD_NODE_ID):
                self.amiga_tpdo1 = AmigaTpdo1.from_can_data(message.data)
                if self.amiga_tpdo1.state != AmigaControlState.STATE_AUTO_ACTIVE:
                    self.cmd_speed = 0.0
                    self.cmd_ang_rate = 0.0
                    self.request_state = AmigaControlState.STATE_AUTO_READY
                print(self.amiga_tpdo1, end="\r")

        if self.cmd_repeater.check():
            self.can.send(
                canio.Message(
                    id=CanOpenObject.RPDO1 | DASHBOARD_NODE_ID,
                    data=AmigaRpdo1(
                        state_req=self.request_state, cmd_speed=self.cmd_speed, cmd_ang_rate=self.cmd_ang_rate
                    ).encode(),
                )
            )


def main():
    MainLoop(AppClass=HelloMainLoopApp, has_display=False, has_wifi=False).loop()


main()
