from farm_ng.adk import MainLoop, TickRepeater


class HelloMainLoopApp:
    def __init__(self, main_loop: MainLoop, can, node_id) -> None:
        self.can = can
        self.node_id = node_id
        self.main_loop = main_loop
        self.main_loop.show_debug = True
        self.debug_repeater = TickRepeater(ticks_period_ms=1000)

    def iter(self, messages):
        if self.debug_repeater.check():
            print("\033[2J", end="")
            print(self.main_loop.debug_str())


def main():
    MainLoop(AppClass=HelloMainLoopApp, has_display=False, has_wifi=False).loop()


main()
