import board
import busio
import canio

from farm_ng.utils.main_loop import MainLoop
from farm_ng.utils.general import TickRepeater
from farm_ng.utils.packet import AmigaRpdo1, AmigaTpdo1, AmigaControlState, CanOpenObject, DASHBOARD_NODE_ID
from farm_ng.utils.general import Axis


def parse_packet(packet):
    # https://github.com/robotmaker/Real-time-graphical-representation-of-16-channel-S-BUS-protocol/blob/master/ProcessingSketch_SBUS_16_Channel_Simulation/ProcessingSketch_SBUS_16_Channel_Simulation.pde
    channel_0 = (packet[1] | packet[2] << 8) & 0x07FF
    channel_1 = (packet[2] >> 3 | packet[3] << 5) & 0x07FF
    channel_2 = (packet[3] >> 6 | packet[4] << 2 | packet[5] << 10) & 0x07FF
    channel_3 = (packet[5] >> 1 | packet[6] << 7) & 0x07FF
    if False:
        print('FVP - CH1:{:>4} , CH2:{:>4} , CH3:{:>4} , CH4:{:>4}'.format(channel_0, channel_1, channel_2, channel_3))
    return channel_0, channel_1, channel_2, channel_3


class FpvApp:
    def __init__(self, main_loop: MainLoop, can, node_id):
        self.can = can
        self.main_loop = main_loop
        self.node_id = node_id
        self.uart = busio.UART(
            None, board.RX, baudrate=100000, bits=8, parity=0, stop=2, timeout=0.002, receiver_buffer_size=256
        )

        self.amiga_tpdo1 = None
        self.debug_repeater = TickRepeater(ticks_period_ms=100)
        # send commands to amiga at 20hz
        self.cmd_repeater = TickRepeater(ticks_period_ms=20)

        # TODO calibrate these values
        self.axis2 = Axis(min_value=172, deadzone_m1=950, deadzone_p1=1050, max_value=1811)

        self.axis3 = Axis(min_value=172, deadzone_m1=950, deadzone_p1=1050, max_value=1811)

        self.max_speed = 2.5  # meters per second
        self.max_angular_rate = 3.14  # radians per second

    def send_command(self, channels):
        # don't send commands too frequently to Amiga
        if not self.cmd_repeater.check():
            return
        if channels[1] > 1500:
            # here, we're actively sending commmands from the RC joystick
            request_state = AmigaControlState.STATE_AUTO_ACTIVE
        else:
            # In READY state the amiga won't move and will brake smoothly
            # if in motion
            request_state = AmigaControlState.STATE_AUTO_READY

        cmd_speed = self.max_speed * self.axis2.map(channels[2])
        cmd_ang_rate = self.max_angular_rate * -self.axis3.map(channels[3])
        rpdo1 = AmigaRpdo1(state_req=request_state, cmd_speed=cmd_speed, cmd_ang_rate=cmd_ang_rate)

        # print('state', self.amiga_tpdo1, 'cmd', rpdo1, end='\r')
        self.can.send(canio.Message(id=CanOpenObject.RPDO1 | DASHBOARD_NODE_ID, data=rpdo1.encode()))

    def iter(self, messages):
        for message in messages:
            if AmigaTpdo1.check_id(message, DASHBOARD_NODE_ID):
                self.amiga_tpdo1 = AmigaTpdo1.from_can_data(message.data)

        if self.uart.in_waiting >= 25:
            packet = bytearray(self.uart.read(25))
            if packet[0] == 0x0F and packet[24] == 0x00:
                channels = parse_packet(packet)
                self.send_command(channels)
            else:
                print('FVP invalid packet: {}'.format(packet))
                self.uart.reset_input_buffer()


def main():
    MainLoop(AppClass=FpvApp, has_display=False, has_wifi=False).loop()


main()
