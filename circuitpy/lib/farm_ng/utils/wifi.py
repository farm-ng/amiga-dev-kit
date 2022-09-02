# Python imports
from time import sleep

# CircuitPython modules
from busio import UART
from microcontroller import nvm, pin
from digitalio import DigitalInOut, Direction

# Local imports
from .general import Repeater
from .nvm import random_wifi_password, nvm_wifi_password, nvm_serial_number


class WIFI:
    """Interact with ESP8266 wifi module on dashboard"""

    # Some other unused AT commands:
    # - AT                            # basic check
    # - AT+GMR                        # inspect version
    # - AT+PING="xxx.xxx.x.x"         # ping IP
    # - AT+CIFSR                      # Check access point IP
    # - AT+CIPMUX=1                   # Enable multiple connections
    # - AT+CIPSTATUS                  # Check connection status
    # - AT+CWLAP                      # List available APs
    # - AT+CWLIF                      # List all connected devices
    # - AT+CIPCLOSE=_                 # Close running socket _
    # - AT+CWJAP="SSID","password"    # Connect to a router

    class State:
        """Wifi state"""

        BOOT = 0
        OPERATIONAL = 1

    def __init__(self):
        self.uart = UART(
            pin.PA17,
            pin.PA16,
            baudrate=115200,
            receiver_buffer_size=2048,
            timeout=0.5,
        )

        # Access point details
        self.AP_creds = wifi_AP()

        # Enable
        self.enable_pin = DigitalInOut(pin.PA18)
        self.enable_pin.direction = Direction.OUTPUT
        self.enable_pin.value = True

        # Reset (for failure/recovery mode)
        self.reset_pin = DigitalInOut(pin.PA19)
        self.reset_pin.direction = Direction.OUTPUT
        self.reset_pin.value = True  # active low, default high

        self._socket = 4

        self.state = self.State.BOOT

        self.repeater = Repeater(1.0)
        self.messages = []

    def startup(self):
        """Creates a UDP socket in access point (AP) mode"""
        self.uart.reset_input_buffer()  # flush it

        # Set to access point (AP) mode
        self.send("AT+CWMODE_DEF=3")  # 1 = station, 2 = AP, 3 = both
        self.send(f"AT+CWSAP_DEF={self.AP_creds}")

        # Enable multiple connections
        self.send("AT+CIPMUX=1")

        # Create UDP socket
        # "0.0.0.0", 0 accepts from all connected IP addresses & ports
        self.send(f'AT+CIPSTART={self._socket},"UDP","0.0.0.0",0,1112,2')

    def new_password(self):
        """Sets a new password for ESP8266 access point"""
        self.AP_creds.new_random_password()
        self.send(f"AT+CWSAP_DEF={self.AP_creds}")

    def send(self, msg):
        """Send message over UDP"""
        _encoding = "ascii"
        # _encoding = "utf-8"
        self.uart.write(bytes("{}\r\n".format(msg), _encoding))

    def read_buffer(self):
        """Read received messages on UDP buffer"""
        while self.uart.in_waiting > 0:
            yield self.uart.readline()

    def loop_iter(self):
        """To run every loop of MainLoop"""
        if self.state == self.State.OPERATIONAL:
            for x in self.read_buffer():
                print(x)
            # self.messages = [x for x in self.read_buffer()]

        if not self.repeater.check():
            return

        if self.state == self.State.BOOT:
            self.startup()
            self.state = self.State.OPERATIONAL

    def stream_can_msg(self, msg, ip=None, port=None):
        """Send CAN message over UDP"""
        id = hex(msg.id)[2:]
        data = msg.data
        while len(data) < 8:
            data += b"\x00"

        assert len(id) == 3 or len(id) == 8  # standard or extended ID
        assert len(data) == 8

        if ip and port:
            # Will send to specified IP / port
            self.send(f'AT+CIPSEND={self._socket},{len(id)+10},"{ip}",{port}')
        else:
            # Will send to device that sent the last msg to ESP8266
            self.send(f"AT+CIPSEND={self._socket},{len(id)+10}")
            # Add 2 bytes at end for \r\n (10 = 8 byte payload)

        """
        TODO: Change ``data`` encoding once we're parsing on other side of UDP
        """
        payload = bytes("{}".format(id), "ascii") + data + bytes("\r\n", "ascii")
        self.uart.write(payload)

    def scan_aps(self, secs=5):
        """Query available networks"""
        self.send("AT+CWLAP")

        for _ in range(secs):
            self.read_buffer()
            sleep(1.0)
        """
        TODO: Parse detected APs
        (if we intend to use module as station)
        """
        # for ap in self.esp.scan_APs():
        #     (name, strength) = (ap[1], ap[2])
        #     print(name, strength)

    def connect(self, ssid, password):
        pass
        # secrets = {"ssid": ssid, "password": password}
        # self.esp.connect(secrets)

    def update(self, main_loop):
        """Call loop_iter"""
        self.loop_iter()


class wifi_AP:
    """
    ESP8266 access point login credentials
    """

    def __init__(self):
        self.chl = 1
        self.max_conn = 8  # 1 - 8
        self.pass_len: int = 8
        self._password: str = ""
        self._read_password()
        self._serial_number = nvm_serial_number.read()[0][:8].decode("ascii")
        print(self._serial_number)
        self._ssid = f"farm-ng-{self._serial_number}"

    def _read_password(self):
        """Get password from non-volatile memory"""
        self._password = nvm_wifi_password.read()[0][: self.pass_len].decode("ascii")
        print(f"Wifi password: {self._password}")

    def new_random_password(self):
        """Create a new random password"""
        nvm_wifi_password.write(random_wifi_password())
        self._read_password()
        # print(f"Generated new wifi password: {self._password}")

    def __str__(self):
        return f'"{self.ssid}","{self.password}",{self.chl},{self.ecn},{self.max_conn}'

    @property
    def ecn(self):
        """ESP8266 ECN"""
        # ecn = 0  # OPEN
        # ecn = 2  # WPA_PSK
        # ecn = 3  # WPA2_PSK
        ecn = 4  # WPA_WPA2_PSK
        return ecn

    @property
    def ssid(self):
        """
        TODO: Replace temp sn value, pending:
        https://github.com/farm-ng/amiga-fw/issues/99
        """
        return self._ssid

    @property
    def password(self):
        """Access point password"""
        return self._password
