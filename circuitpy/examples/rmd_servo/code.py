from farm_ng.utils.general import TickRepeater
from farm_ng.utils.main_loop import MainLoop
from farm_ng.actuators.rmd_servo import RmdServoController

class RmdServoApp:
    def __init__(self, main_loop: MainLoop, can, node_id) -> None:
        self.can = can
        self.node_id = node_id
        self.main_loop = main_loop
        self.main_loop.show_debug = True
        self.main_loop.show_time = True
        self.main_loop.show_can_dts = True
        self.debug_repeater = TickRepeater(ticks_period_ms=1000)

        # can_dummy is called on any canbus message that doesn't have an explicit handler
        self.main_loop.can_dummy = self._handle_any_message
        self.servos = [RmdServoController(main_loop=main_loop, node_id=0x5),
                        RmdServoController(main_loop=main_loop, node_id=0x4),
                        #RmdServoController(main_loop=main_loop, node_id=0x1),

                        ]
        self._register_message_handlers()

    def _register_message_handlers(self):
        #self.main_loop.command_handlers[CanOpenObject.TPDO1 | DASHBOARD_NODE_ID] = self._handle_amiga_tpdo1
        pass

    def _handle_any_message(self, message):
        print("CAN - Ignored ID %x" % (message.id,), message.data)

    def iter(self):
        for servo in self.servos:
            servo.iter()
            servo.active = True
            servo.cmd_rpm = -60
        if self.debug_repeater.check():
            for servo in self.servos:
                servo.read_home_position()

            #print("\033[2J", end="")
            print(self.main_loop.io_debug_str())


def main():
    MainLoop(AppClass=RmdServoApp, has_display=False).loop()


main()
