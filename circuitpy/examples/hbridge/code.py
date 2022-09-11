from farm_ng.actuators.hbridge import HBridgeController
from farm_ng.utils.general import TickRepeater
from farm_ng.utils.main_loop import MainLoop
from usb_cdc import console


class HbridgeApp:
    def __init__(self, main_loop: MainLoop, can, node_id) -> None:
        self.can = can
        self.node_id = node_id
        self.main_loop = main_loop
        self.main_loop.show_debug = True
        self.main_loop.show_time = True
        self.main_loop.show_can_dts = True
        self.auto = False
        self.debug_repeater = TickRepeater(ticks_period_ms=1000)
        self.auto_repeater = TickRepeater(ticks_period_ms=5000)
        # can_dummy is called on any canbus message that doesn't have an explicit handler
        self.main_loop.can_dummy = self._handle_any_message
        self.hbridge = HBridgeController(main_loop=main_loop)
        self._register_message_handlers()

    def _register_message_handlers(self):
        # self.main_loop.command_handlers[CanOpenObject.TPDO1 | DASHBOARD_NODE_ID] = self._handle_amiga_tpdo1
        pass

    def _handle_any_message(self, message):
        print("CAN - Ignored ID %x" % (message.id,), message.data)

    def parse_wasd_cmd(self, char):
        if char == "x":
            self.auto = True
            self.hbridge.dir = 1
            self.auto_repeater.reset()
        if char in ('w', 's', ' '):
            self.auto = False

        if char == "w":
            self.hbridge.dir = 1
        elif char == "s":
            self.hbridge.dir = -1
        elif char == " ":
            self.hbridge.dir = 0

    def serial_read(self):
        while console.in_waiting > 0:
            self.parse_wasd_cmd((console.read().decode("ascii")))

    def iter(self):
        self.serial_read()
        self.hbridge.iter()
        if self.auto and self.auto_repeater.check():
            self.hbridge.dir = -self.hbridge.dir

        if self.debug_repeater.check():
            # print("\033[2J", end="")
            # print(self.main_loop.io_debug_str())
            pass


def main():
    MainLoop(AppClass=HbridgeApp, has_display=False).loop()


main()
