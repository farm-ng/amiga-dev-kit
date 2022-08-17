# Write your code here :-)
import board
import busio

from farm_ng.utils.general import TickRepeater
from farm_ng.utils.main_loop import MainLoop
import sys


class FpvApp:
    def __init__(self, main_loop:MainLoop, can, node_id):
        self.can = can
        self.main_loop = main_loop
        self.node_id = node_id

        self.uart = busio.UART(None, board.RX, baudrate=100000, bits=8, parity=0, stop=2, timeout=0.002, receiver_buffer_size=256)
        self.packet = bytearray(25)

        self.debug_repeater = TickRepeater(ticks_period_ms=100)

        self.channel_0 = 1000
        self.channel_1 = 1000
        self.channel_2 = 1000
        self.channel_3 = 1000

    def parse_packet(self, packet):
        # https://github.com/robotmaker/Real-time-graphical-representation-of-16-channel-S-BUS-protocol/blob/master/ProcessingSketch_SBUS_16_Channel_Simulation/ProcessingSketch_SBUS_16_Channel_Simulation.pde

        self.channel_0 = ((packet[1] | packet[2] << 8) & 0x07FF)
        self.channel_1 = ((packet[2] >> 3 | packet[3] << 5) & 0x07FF)
        self.channel_2 = ((packet[3] >> 6 | packet[4] << 2 | packet[5] << 10)  & 0x07FF);
        self.channel_3 = ((packet[5] >> 1 | packet[6] << 7) & 0x07FF)
        print('FVP - CH1:{:>4} , CH2:{:>4} , CH3:{:>4} , CH4:{:>4}'.format(self.channel_0, self.channel_1, self.channel_2, self.channel_3))

    def iter(self, messages):
        if self.uart.in_waiting > 0:
            packet = bytearray(self.uart.read(25))
            if packet[0] == 0x0F and packet[24] == 0x00:
                self.packet = packet
            else:
                print('FVP invalid packet: {}'.format(packet))
                # Makre sure safe default
                self.packet = bytearray(25)
                self.channel_0 = 1000
                self.channel_1 = 1000
                self.channel_2 = 1000
                self.channel_3 = 1000
                self.uart.reset_input_buffer()

            self.parse_packet(self.packet)

def main():
    MainLoop(AppClass=FpvApp, has_display=False, has_wifi=False).loop()


