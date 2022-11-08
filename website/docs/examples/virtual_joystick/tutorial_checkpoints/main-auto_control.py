# Copyright (c) farm-ng, inc. Amiga Development Kit License, Version 0.1
import argparse
import asyncio
import io
import logging
import os
from math import sqrt
from typing import Generator
from typing import List
from typing import Optional
from typing import Tuple

import grpc
from farm_ng.canbus import canbus_pb2
from farm_ng.canbus.canbus_client import CanbusClient
from farm_ng.canbus.canbus_client import CanbusClientConfig
from farm_ng.canbus.packet import AmigaControlState
from farm_ng.canbus.packet import AmigaTpdo1
from farm_ng.canbus.packet import make_amiga_rpdo1_proto
from farm_ng.canbus.packet import parse_amiga_tpdo1_proto
from farm_ng.oak import oak_pb2
from farm_ng.oak.camera_client import OakCameraClient
from farm_ng.oak.camera_client import OakCameraClientConfig

# Must come before kivy imports
os.environ["KIVY_NO_ARGS"] = "1"

from kivy.config import Config  # noreorder # noqa: E402

Config.set("graphics", "resizable", False)
Config.set("graphics", "width", "1280")
Config.set("graphics", "height", "800")
Config.set("graphics", "fullscreen", "false")
Config.set("input", "mouse", "mouse,disable_on_activity")
Config.set("kivy", "keyboard_mode", "systemanddock")

from kivy.graphics import Color, Ellipse  # noqa: E402
from kivy.input.providers.mouse import MouseMotionEvent  # noqa: E402
from kivy.properties import StringProperty  # noqa: E402
from kivy.app import App  # noqa: E402
from kivy.lang.builder import Builder  # noqa: E402
from kivy.uix.widget import Widget  # noqa: E402
from kivy.core.image import Image as CoreImage  # noqa: E402
from kivy.core.window import Window  # noqa: E402

kv = """
<VirtualJoystickWidget@Widget>:
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
        BoxLayout:
            size_hint_x: 0.3
            orientation: 'vertical'
            Label:
                text: "state:\\n" + str(app.amiga_state)
            Label:
                text: "speed:\\n" + str(app.amiga_speed) + "  [m/s]"
            Label:
                text: "angular rate:\\n" + str(app.amiga_rate) + "  [rad/s]"
        VirtualJoystickWidget:
            id: joystick
        TabbedPanel:
            do_default_tab: False
            TabbedPanelItem:
                text: "Rgb"
                Image:
                    id: rgb
            TabbedPanelItem:
                text: "Disparity"
                Image:
                    id: disparity
            TabbedPanelItem:
                text: "Left"
                Image:
                    id: left
            TabbedPanelItem:
                text: "Right"
                Image:
                    id: right
"""


def relative_cord_in_widget(
    widget: Widget, touch: MouseMotionEvent, scale: Tuple[float, float] = (-1.0, 1.0)
) -> Optional[Tuple[float, float]]:
    """Returns the coordinates of the touch on the scale IFF it occurs within the bounds of the widget."""
    x_s: Tuple[int, int] = (widget.pos[0], widget.pos[0] + widget.width)
    y_s: Tuple[int, int] = (widget.pos[1], widget.pos[1] + widget.height)

    if not (x_s[0] < touch.x < x_s[1]) or not (y_s[0] < touch.y < y_s[1]):
        return None

    return (
        scale[0] + (touch.x - x_s[0]) * (scale[1] - scale[0]) / (widget.width),
        scale[0] + (touch.y - y_s[0]) * (scale[1] - scale[0]) / (widget.height),
    )


class Vec2:
    """Simple container for keeping joystick coords in x & y terms.

    Defaults to a centered joystick (0,0). Clips values to range [-1.0, 1.0], as with the Amiga joystick.
    """

    def __init__(self, x: float = 0.0, y: float = 0.0) -> None:
        self.x: float = min(max(-1.0, x), 1.0)
        self.y: float = min(max(-1.0, y), 1.0)


class VirtualJoystickWidget(Widget):
    def __init__(self, **kwargs) -> None:
        super(VirtualJoystickWidget, self).__init__(**kwargs)

        self.joystick_pose: Vec2 = Vec2()
        self.joystick_rad: int = 100

    def draw(self) -> None:
        self.canvas.clear()

        # Draw background circle
        self.canvas.add(Color(0.2, 0.2, 0.2, 1.0, mode="rgba"))
        self.canvas.add(
            Ellipse(
                pos=(self.center_x - self.width // 2, self.center_y - self.height // 2), size=(self.width, self.height)
            )
        )

        # Draw joystick at position
        x_abs, y_abs = (
            self.center_x + 0.5 * self.joystick_pose.x * (self.width - 2 * self.joystick_rad),
            self.center_y + 0.5 * self.joystick_pose.y * (self.height - 2 * self.joystick_rad),
        )
        self.canvas.add(Color(1.0, 1.0, 0.0, 1.0, mode="rgba"))
        self.canvas.add(
            Ellipse(
                pos=(x_abs - self.joystick_rad, y_abs - self.joystick_rad),
                size=(self.joystick_rad * 2, self.joystick_rad * 2),
            )
        )


class VirtualJoystickApp(App):
    # For kivy labels
    amiga_speed = StringProperty()
    amiga_rate = StringProperty()
    amiga_state = StringProperty()

    def __init__(self, address: str, camera_port: int, canbus_port: int, stream_every_n: int) -> None:
        super().__init__()
        self.address: int = address
        self.camera_port: int = camera_port
        self.canbus_port: int = canbus_port
        self.stream_every_n: int = stream_every_n

        # Received values
        self.amiga_tpdo1: AmigaTpdo1 = AmigaTpdo1()
        self.amiga_state: str = "NO CANBUS\nSERVICE DETECTED"
        self.amiga_speed: str = "???"
        self.amiga_rate: str = "???"

        # Parameters
        self.max_speed: float = 1.0
        self.max_angular_rate: float = 1.0

        self.async_tasks: List[asyncio.Task] = []

    def build(self):
        def on_touch_down(window: Window, touch: MouseMotionEvent) -> bool:
            """Handles initial press with mouse click or touchscreen."""
            if isinstance(touch, MouseMotionEvent) and int(os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)):
                return True
            for w in window.children[:]:
                if w.dispatch("on_touch_down", touch):
                    return True

            joystick: VirtualJoystickWidget = self.root.ids["joystick"]

            res: Optional[Tuple[float, float]] = relative_cord_in_widget(widget=joystick, touch=touch)
            if res:
                # Clip to unit circle
                div: float = max(1.0, sqrt(res[0] ** 2 + res[1] ** 2))
                joystick.joystick_pose = Vec2(x=res[0] / div, y=res[1] / div)
            return False

        def on_touch_move(window: Window, touch: MouseMotionEvent) -> bool:
            """Handles when press is held and dragged with mouse click or touchscreen."""
            if isinstance(touch, MouseMotionEvent) and int(os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)):
                return True
            for w in window.children[:]:
                if w.dispatch("on_touch_move", touch):
                    return True

            joystick: VirtualJoystickWidget = self.root.ids["joystick"]

            res: Optional[Tuple[float, float]] = relative_cord_in_widget(widget=joystick, touch=touch)
            if res:
                # Clip to unit circle
                div: float = max(1.0, sqrt(res[0] ** 2 + res[1] ** 2))
                joystick.joystick_pose = Vec2(x=res[0] / div, y=res[1] / div)
            return False

        def on_touch_up(window: Window, touch: MouseMotionEvent) -> bool:
            """Handles release of press with mouse click or touchscreen."""
            if isinstance(touch, MouseMotionEvent) and int(os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)):
                return True
            for w in window.children[:]:
                if w.dispatch("on_touch_up", touch):
                    return True
            joystick: VirtualJoystickWidget = self.root.ids["joystick"]

            joystick.joystick_pose = Vec2()
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

        # configure the camera client
        camera_config: OakCameraClientConfig = OakCameraClientConfig(address=self.address, port=self.camera_port)
        camera_client: OakCameraClient = OakCameraClient(camera_config)

        # configure the canbus client
        canbus_config: CanbusClientConfig = CanbusClientConfig(address=self.address, port=self.canbus_port)
        canbus_client: CanbusClient = CanbusClient(canbus_config)

        # Camera task(s)
        self.async_tasks.append(asyncio.ensure_future(self.stream_camera(camera_client)))
        self.async_tasks.append(asyncio.ensure_future(camera_client.poll_service_state()))

        # Canbus task(s)
        self.async_tasks.append(asyncio.ensure_future(self.stream_canbus(canbus_client)))
        self.async_tasks.append(asyncio.ensure_future(self.send_can_msgs(canbus_client)))
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

    async def stream_camera(self, client: OakCameraClient) -> None:
        """This task listens to the camera client's stream and populates the tabbed panel with all 4 image streams
        from the oak camera."""
        while self.root is None:
            await asyncio.sleep(0.01)

        response_stream: Optional[Generator[oak_pb2.StreamFramesReply]] = None

        while True:
            while client.state.value != oak_pb2.OakServiceState.RUNNING:
                # start the streaming service
                await client.connect_to_service()

            if response_stream is None:
                # get the streaming object
                response_stream = client.stream_frames(every_n=self.stream_every_n)

            response: oak_pb2.StreamFramesReply = await response_stream.read()
            if response and response.status == oak_pb2.ReplyStatus.OK:
                # get the sync frame
                frame: oak_pb2.OakSyncFrame = response.frame

                # get image and show
                for view_name in ["rgb", "disparity", "left", "right"]:
                    self.root.ids[view_name].texture = CoreImage(
                        io.BytesIO(getattr(frame, view_name).image_data), ext="jpg"
                    ).texture
            await asyncio.sleep(0.01)

    async def send_can_msgs(self, client: CanbusClient) -> None:
        """This task ensures the canbus client sendCanbusMessage method has the pose_generator it will use to send
        messages on the can bus."""
        while self.root is None:
            await asyncio.sleep(0.01)

        while True:
            if client.state.value != canbus_pb2.CanbusServiceState.RUNNING:
                logging.debug("Controller requires running canbus service")
                client.stub.sendCanbusMessage(self.pose_generator())
            await asyncio.sleep(0.25)

    async def pose_generator(self, period: float = 0.02):
        """The pose generator yields an AmigaRpdo1 (auto control command) for the canbus client to send on the bus
        at the specified period (recommended 50hz) based on the onscreen joystick position."""
        while self.root is None:
            await asyncio.sleep(0.01)

        joystick: VirtualJoystickWidget = self.root.ids["joystick"]
        while True:
            msg: canbus_pb2.RawCanbusMessage = make_amiga_rpdo1_proto(
                state_req=AmigaControlState.STATE_AUTO_ACTIVE,
                cmd_speed=self.max_speed * joystick.joystick_pose.y,
                cmd_ang_rate=self.max_angular_rate * -joystick.joystick_pose.x,
            )
            yield canbus_pb2.SendCanbusMessageRequest(message=msg)
            await asyncio.sleep(period)

    async def draw(self) -> None:
        """Loop over drawing the VirtualJoystickWidget."""
        while self.root is None:
            await asyncio.sleep(0.01)

        joystick: VirtualJoystickWidget = self.root.ids["joystick"]
        while True:
            joystick.draw()
            self.update_kivy_strings()
            await asyncio.sleep(0.01)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="virtual-joystick")

    parser.add_argument("--address", type=str, default="localhost", help="The server address")
    parser.add_argument(
        "--camera-port", type=int, required=True, help="The grpc port where the camera service is running."
    )
    parser.add_argument(
        "--canbus-port", type=int, required=True, help="The grpc port where the canbus service is running."
    )
    parser.add_argument("--stream-every-n", type=int, default=1, help="Streaming frequency (used to skip frames)")

    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(
            VirtualJoystickApp(args.address, args.camera_port, args.canbus_port, args.stream_every_n).app_func()
        )
    except asyncio.CancelledError:
        pass
    loop.close()
