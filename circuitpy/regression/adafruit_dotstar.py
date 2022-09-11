class DotStar:
    def __init__(self, SCK, MOSI, led_count, brightness, auto_write):
        self.SCK = SCK
        self.MOSI = MOSI
        self.led_count = led_count
        self.brightness = brightness
        self.auto_write = auto_write
        # self.rgb_tuple = (0, 0, 0)

    def fill(self, rgb_tuple):
        # self.rgb_tuple = rgb_tuple
        pass

    def show(self):
        pass
