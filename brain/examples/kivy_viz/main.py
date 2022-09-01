# Copyright (c) farm-ng, inc. All rights reserved.
from typing import List
import argparse
import asyncio
import os

import io

os.environ["KIVY_NO_ARGS"] = "1"

from kivy.config import Config

Config.set("graphics", "fullscreen", "false")

from kivy.app import App
from kivy.lang.builder import Builder
from kivy.core.image import Image as CoreImage

from farm_ng.oak.client import OakCameraClient, OakCameraClientConfig
from farm_ng.oak import oak_pb2


kv = """
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


class CameraApp(App):
    def __init__(self, address: str, port: int, stream_every_n: int) -> None:
        super().__init__()
        self.address = address
        self.port = port
        self.stream_every_n = stream_every_n

        self.tasks: List[asyncio.Task] = []

        self.client: OakCameraClient
        self.config: OakCameraClientConfig

    def build(self):
        return Builder.load_string(kv)

    async def app_func(self):
        async def run_wrapper():
            # we don't actually need to set asyncio as the lib because it is
            # the default, but it doesn't hurt to be explicit
            await self.async_run(async_lib="asyncio")
            for task in self.tasks:
                task.cancel()

        # configure the camera client
        self.config = OakCameraClientConfig(address=self.address, port=self.port)
        self.client = OakCameraClient(self.config)

        self.tasks += [asyncio.ensure_future(self.stream_camera(self.client))]

        return await asyncio.gather(run_wrapper(), *self.tasks)

    async def stream_camera(self, client: OakCameraClient) -> None:
        while self.root is None:
            await asyncio.sleep(0.01)

        # get the streaming object
        response_stream = client.stream_frames(every_n=self.stream_every_n)

        # start the streaming service
        await client.start_service()

        while True:
            # query the service state
            state: oak_pb2.OakServiceState = await client.get_state()

            if state.value != oak_pb2.OakServiceState.RUNNING:
                await asyncio.sleep(0.01)
                continue

            response: oak_pb2.StreamFramesReply = await response_stream.read()
            if response and response.status == oak_pb2.ReplyStatus.OK:
                # get the sync frame
                frame: oak_pb2.OakSyncFrame = response.frame

                # get image and show
                for view_name in ["rgb", "disparity", "left", "right"]:
                    self.root.ids[view_name].texture = CoreImage(
                        io.BytesIO(getattr(frame, view_name).image_data), ext="jpg"
                    ).texture


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-camera-app")
    parser.add_argument("--port", type=int, required=True, help="The camera port.")
    parser.add_argument("--address", type=str, default="localhost", help="The camera address")
    parser.add_argument("--stream-every-n", type=int, default=4, help="Streaming frequency")
    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(CameraApp(args.address, args.port, args.stream_every_n).app_func())
    except asyncio.CancelledError:
        pass
    loop.close()
