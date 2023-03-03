# from canio import Message
from farm_ng.utils.cobid import CanOpenObject
from farm_ng.utils.general import TickRepeater
from farm_ng.utils.main_loop import MainLoop
from farm_ng.utils.packet import AmigaControlState
from farm_ng.utils.packet import AmigaTpdo1
from farm_ng.utils.packet import DASHBOARD_NODE_ID
from usb_cdc import console


class SpacebarEstopApp:
    def __init__(self, main_loop: MainLoop, can, node_id) -> None:
        self.can = can
        self.node_id = node_id
        self.main_loop = main_loop
        self.main_loop.show_debug = True
        self.cmd_repeater = TickRepeater(ticks_period_ms=50)
        self.reg_repeater = TickRepeater(ticks_period_ms=500)

        self.registered_with_dashboard = False
        self.pressed = False

        self._register_message_handlers()

    def _register_message_handlers(self):
        self.main_loop.command_handlers[CanOpenObject.TPDO1 | DASHBOARD_NODE_ID] = self._handle_amiga_tpdo1
        # TODO: Register SupervisorReq for handshake reply

    def _handle_amiga_tpdo1(self, message):
        """Listens to Amiga Tpdo1 for fun."""
        self.amiga_tpdo1 = AmigaTpdo1.from_can_data(message.data)
        print("Amiga e-stopped {}".format(self.amiga_tpdo1.state == AmigaControlState.STATE_ESTOPPED), end="\r")

    def parse_wasd_cmd(self, char):
        self.pressed = char == " "

    def serial_read(self):
        while console.in_waiting > 0:
            self.parse_wasd_cmd((console.read().decode("ascii")))

    def iter(self):
        self.serial_read()

        if not self.registered_with_dashboard:
            if self.reg_repeater.check():
                pass
                # TODO: send register SupervisorReq
            return

        if self.cmd_repeater.check():
            # TODO: Send estop request message using self.pressed
            pass
            # self.can.send(
            #     Message(
            #         id=CanOpenObject.RPDO1 | DASHBOARD_NODE_ID,
            #         data=AmigaRpdo1(
            #             state_req=self.request_state, cmd_speed=self.cmd_speed, cmd_ang_rate=self.cmd_ang_rate
            #         ).encode(),
            #     )
            # )


def main():
    MainLoop(AppClass=SpacebarEstopApp, has_display=False).loop()


main()
