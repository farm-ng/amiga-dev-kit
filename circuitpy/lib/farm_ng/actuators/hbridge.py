from farm_ng.utils.main_loop import MainLoop
from farm_ng.utils.general import TickRepeater
from canio import Message
from struct import pack, unpack

class HBridgeController:
    def __init__(self, main_loop: MainLoop):
        self.main_loop = main_loop
        self.main_loop.command_handlers[0x18ef0070] = self._handle_hbridge_msg
        self.dir = 0
        self.repeater = TickRepeater(
            ticks_period_ms=100
        )

        self.status_repeater = TickRepeater(
            ticks_period_ms=500
        )
        frequency=5000
        duty_cycle=950
        continuous_limit = 190 # 10 amps, x 0.1 amp
        continuous_delay = 10 # 100, x 10 ms
        inrush_limit = 190 # 20 amps, x 0.1 amp
        inrush_delay = 10 # 100 milliseconds # x 10 ms
        self.commanded_dir = 0

        # a2 00 02 32 00 84 03 00
        self.stop_message = Message(id=0x18EF7000, data=pack('>3BHHB',0xa2,0x00,0x00,frequency, duty_cycle,0xFF), extended=True)
        self.reverse_message = Message(id=0x18EF7000, data=pack('>3BHHB',0xa2,0x00,0x02,frequency,duty_cycle,0xFF), extended=True)
        self.forward_message = Message(id=0x18EF7000, data=pack('>3BHHB',0xa2,0x00,0x01,frequency,duty_cycle,0xFF), extended=True)
        self.reset_fault_message = Message(0x18EF7000, data=pack(">8B", 0xa6, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF), extended=True)

        self.request_output_status_message = Message(0x18EF7000, data=pack(">8B", 0xd0, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF), extended=True)

        self.request_fault_message = Message(0x18EF7000, data=pack(">8B", 0xb6, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF), extended=True)
        self.configure_current_message = Message(0x18EF7000, data=pack(">4BBHB", 0xa1, 0x00, continuous_limit,0xff, continuous_delay, inrush_limit, inrush_delay), extended=True)
        self._dir_map = {-1: self.reverse_message, 0: self.stop_message, 1: self.forward_message}
        self.last_fault = None

        self._fault_map = {
                0xFF : "No Fault",
                0x01 : "Short circuit in forward direction",
                0x02 : "Short circuit in reverse direction",
                0x03 : "Overcurrent in forward direction",
                0x04 : "Overcurrent in reverse direction",
                0x05 : "Inrush overcurrent in forward direction",
                0x06 : "Inrush overcurrent in reverse direction",
                0x07 : "Battery overvoltage",
                0x08 : "Battery undervoltage",
                0x09 : "Over temperature",
                0x10 : "Output is not correct state",
                0x11 : "Communication Loss",
            }

        self.msg_queue = [
                self.request_output_status_message,
                self.stop_message,
                self.reset_fault_message,
                self.configure_current_message,
                ]

                
    def _handle_hbridge_msg(self, message):
        if message.data[0] == 0x40:
            # output status message
            command,_, dir, frequency, duty_cycle, _ =  unpack('>BBBHHB', message.data)
            self.commanded_dir = dir
            print('output status: ', command, dir, frequency, duty_cycle/10)
        elif message.data[0] == 0x26:
            if message.data[2] in self._fault_map.keys():
                print('Fault:', self._fault_map[message.data[2]])
                if message.data[2] != 0xFF:
                    self.msg_queue.append(self.reset_fault_message)
        else:
            print('%02x'%(message.data[0],))
                    

    def iter(self):
        if len(self.msg_queue) > 0:
            self.main_loop.can.send(self.msg_queue.pop(0))
        
        if self.status_repeater.check():
            self.main_loop.can.send(self.request_fault_message)
            self.msg_queue.append(self.request_output_status_message)
            

        if self.repeater.check():
            self.main_loop.can.send(self._dir_map[self.dir])