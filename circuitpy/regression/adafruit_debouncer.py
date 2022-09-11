class Debouncer:
    def __init__(self, pin, interval):
        self.pin = pin

    def update(self):
        pass

    @property
    def value(self):
        return self.pin.value
