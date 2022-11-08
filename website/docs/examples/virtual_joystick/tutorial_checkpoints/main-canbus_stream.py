# Copyright (c) farm-ng, inc. Amiga Development Kit License, Version 0.1
import argparse
import asyncio
import os
from typing import Generator
from typing import List
from typing import Optional

import grpc
from farm_ng.canbus import canbus_pb2
from farm_ng.canbus.canbus_client import CanbusClient
from farm_ng.canbus.canbus_client import CanbusClientConfig
from farm_ng.canbus.packet import AmigaControlState
from farm_ng.canbus.packet import AmigaTpdo1
from farm_ng.canbus.packet import parse_amiga_tpdo1_proto

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
from kivy.properties import StringProperty  # noqa: E402
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
    BoxLayout:
        orientation: 'vertical'
        Label:
            text: "state:\\n" + str(app.amiga_state)
        Label:
            text: "speed:\\n" + str(app.amiga_speed) + "  [m/s]"
        Label:
            text: "angular rate:\\n" + str(app.amiga_rate) + "  [rad/s]"
"""


class VirtualJoystickApp(App):
    # For kivy labels
    amiga_speed = StringProperty()
    amiga_rate = StringProperty()
    amiga_state = StringProperty()

    def __init__(self, address: str, canbus_port: int) -> None:
        super().__init__()
        self.address: int = address
        self.canbus_port: int = canbus_port

        # Received values
        self.amiga_tpdo1: AmigaTpdo1 = AmigaTpdo1()
        self.amiga_state: str = "NO CANBUS\nSERVICE DETECTED"
        self.amiga_speed: str = "???"
        self.amiga_rate: str = "???"

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

    def update_kivy_strings(self) -> None:
        """Updates the `StringProperty` strings displayed as `Label` widgets."""
        self.amiga_state = AmigaControlState(self.amiga_tpdo1.state).name[6:]
        self.amiga_speed = str(self.amiga_tpdo1.meas_speed)
        self.amiga_rate = str(self.amiga_tpdo1.meas_ang_rate)

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

        # configure the canbus client
        canbus_config: CanbusClientConfig = CanbusClientConfig(address=self.address, port=self.canbus_port)
        canbus_client: CanbusClient = CanbusClient(canbus_config)

        # Canbus task(s)
        self.async_tasks.append(asyncio.ensure_future(self.stream_canbus(canbus_client)))
        self.async_tasks.append(asyncio.ensure_future(canbus_client.poll_service_state()))


        # Drawing task(s)
        self.async_tasks.append(asyncio.ensure_future(self.draw()))

        return await asyncio.gather(run_wrapper(), *self.async_tasks)

    async def stream_canbus(self, client: CanbusClient) -> None:
        """This task:

        - listens to the canbus client's stream
        - filters for AmigaTpdo1 messages
        - extracts useful values from AmigaTpdo1 messages
        """
        while self.root is None:
            await asyncio.sleep(0.01)

        response_stream: Optional[Generator[canbus_pb2.StreamCanbusReply]] = None

        while True:
            while client.state.value != canbus_pb2.CanbusServiceState.RUNNING:
                await client.connect_to_service()

            if response_stream is None:
                response_stream = client.stub.streamCanbusMessages(canbus_pb2.StreamCanbusRequest())

            response: canbus_pb2.StreamCanbusReply = await response_stream.read()
            if response == grpc.aio.EOF:
                # Checks for end of stream
                break
            if response and response.status == canbus_pb2.ReplyStatus.OK:
                for proto in response.messages.messages:
                    amiga_tpdo1: Optional[AmigaTpdo1] = parse_amiga_tpdo1_proto(proto)
                    if amiga_tpdo1:
                        self.amiga_tpdo1 = amiga_tpdo1

            # Shorter sleep than typical 10ms since canbus is very high rate
            await asyncio.sleep(0.001)


    async def draw(self) -> None:
        """Loop over drawing the VirtualJoystickWidget."""
        while self.root is None:
            await asyncio.sleep(0.01)

        while True:
            self.update_kivy_strings()
            await asyncio.sleep(0.01)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="virtual-joystick")

    parser.add_argument("--address", type=str, default="localhost", help="The server address")
    parser.add_argument(
        "--canbus-port", type=int, required=True, help="The grpc port where the canbus service is running."
    )
    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(VirtualJoystickApp(args.address, args.canbus_port).app_func())
    except asyncio.CancelledError:
        pass
    loop.close()
