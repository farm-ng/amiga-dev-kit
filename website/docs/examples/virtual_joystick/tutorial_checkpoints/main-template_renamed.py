# Copyright (c) farm-ng, inc. Amiga Development Kit License, Version 0.1
import argparse
import asyncio
import os
from typing import List

# Must come before kivy imports
os.environ["KIVY_NO_ARGS"] = "1"

from kivy.config import Config  # noreorder # noqa: E402

Config.set("graphics", "resizable", False)
Config.set("graphics", "width", "1280")
Config.set("graphics", "height", "800")
Config.set("graphics", "fullscreen", "false")
Config.set("input", "mouse", "mouse,disable_on_activity")
Config.set("kivy", "keyboard_mode", "systemanddock")

from kivy.input.providers.mouse import MouseMotionEvent  # noqa: E402
from kivy.app import App  # noqa: E402
from kivy.lang.builder import Builder  # noqa: E402
from kivy.core.window import Window  # noqa: E402

kv = """
RelativeLayout:
    Button:
        id: back_btn_layout
        pos_hint: {"x": 0.0, "top": 1.0}
        background_color: 0, 0, 0, 0
        size_hint: 0.1, 0.1
        background_normal: "assets/back_button.png"
        on_release: app.on_exit_btn()
        Image:
            source: "assets/back_button_normal.png" \
            if self.parent.state == "normal" \
            else "assets/back_button_down.png"
            pos: self.parent.pos
            size: self.parent.size
"""


class VirtualJoystickApp(App):
    def __init__(self) -> None:
        super().__init__()

        self.async_tasks: List[asyncio.Task] = []

    def build(self):
        def on_touch_down(window: Window, touch: MouseMotionEvent) -> bool:
            """Handles initial press with mouse click or touchscreen."""
            if isinstance(touch, MouseMotionEvent) and int(
                os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)
            ):
                return True
            for w in window.children[:]:
                if w.dispatch("on_touch_down", touch):
                    return True

            # Add additional on_touch_down behavior here

            return False

        def on_touch_move(window: Window, touch: MouseMotionEvent) -> bool:
            """Handles when press is held and dragged with mouse click or touchscreen."""
            if isinstance(touch, MouseMotionEvent) and int(
                os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)
            ):
                return True
            for w in window.children[:]:
                if w.dispatch("on_touch_move", touch):
                    return True

            # Add additional on_touch_move behavior here

            return False

        def on_touch_up(window: Window, touch: MouseMotionEvent) -> bool:
            """Handles release of press with mouse click or touchscreen."""
            if isinstance(touch, MouseMotionEvent) and int(
                os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)
            ):
                return True
            for w in window.children[:]:
                if w.dispatch("on_touch_up", touch):
                    return True

            # Add additional on_touch_up behavior here

            return False

        Window.bind(on_touch_down=on_touch_down)
        Window.bind(on_touch_move=on_touch_move)
        Window.bind(on_touch_up=on_touch_up)

        return Builder.load_string(kv)

    def on_exit_btn(self) -> None:
        """Kills the running kivy application."""
        App.get_running_app().stop()

    async def app_func(self):
        async def run_wrapper() -> None:
            # we don't actually need to set asyncio as the lib because it is
            # the default, but it doesn't hurt to be explicit
            await self.async_run(async_lib="asyncio")
            for task in self.async_tasks:
                task.cancel()

        # Placeholder task
        self.async_tasks.append(asyncio.ensure_future(self.template_function()))

        return await asyncio.gather(run_wrapper(), *self.async_tasks)

    async def template_function(self) -> None:
        """Placeholder forever loop."""
        while self.root is None:
            await asyncio.sleep(0.01)

        while True:
            await asyncio.sleep(0.01)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="virtual-joystick")

    # Add additional command line arguments here

    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(VirtualJoystickApp().app_func())
    except asyncio.CancelledError:
        pass
    loop.close()
