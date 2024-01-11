---
id: camera-stream
title: 03 - Python Implementation
---
The code blocks in this example are intended to be added to the
[**`amiga-app-template-kivy`**](https://github.com/farm-ng/amiga-app-template-kivy).

# Python Implementation

:::info
The Python implementation of the
[**camera-streamer**](https://github.com/farm-ng/camera-streamer)
app can be found at
[**`src/main.py`**](https://github.com/farm-ng/camera-streamer/blob/main/src/main.py).
You should open that file for reference as you follow along.
:::

## Imports

This app is app will be the first real taste of the Amiga SDK.
We will now need to import farm-ng libraries to access the oak
camera streams.

These imports will make more sense as we continue the tutorial,
so don't worry if they don't make sense at first glance.

```python
from __future__ import annotations

import argparse
import asyncio
import logging
import os
from pathlib import Path
from typing import Literal

from farm_ng.core.event_client import EventClient
from farm_ng.core.event_service_pb2 import EventServiceConfig
from farm_ng.core.event_service_pb2 import EventServiceConfigList
from farm_ng.core.event_service_pb2 import SubscribeRequest
from farm_ng.core.events_file_reader import payload_to_protobuf
from farm_ng.core.events_file_reader import proto_from_json_file
from farm_ng.core.uri_pb2 import Uri
from turbojpeg import TurboJPEG

os.environ["KIVY_NO_ARGS"] = "1"

from kivy.config import Config  # noreorder # noqa: E402

Config.set("graphics", "resizable", False)
Config.set("graphics", "width", "1280")
Config.set("graphics", "height", "800")
Config.set("graphics", "fullscreen", "false")
Config.set("input", "mouse", "mouse,disable_on_activity")
Config.set("kivy", "keyboard_mode", "systemanddock")

from kivy.app import App  # noqa: E402
from kivy.lang.builder import Builder  # noqa: E402
from kivy.graphics.texture import Texture  # noqa: E402


logger = logging.getLogger("amiga.apps.camera")
```

## Camera App Class

The camera app will generally follow the same format as the template tic-toc app.

```python
class CameraApp(App):
    STREAM_NAMES = ["rgb", "disparity", "left", "right"]=
    def __init__(self, service_config: EventServiceConfig) -> None:
        super().__init__()
        self.service_config = service_config
        self.image_decoder = TurboJPEG()
        self.view_name = "rgb"
```

The EventServiceConfig is the custom configuration used to
specify which specific services your custom application
will need to access.

**`image_decoder`** is responsible for taking the raw bit
stream from the oak service and packing them to
make python interpretable image frames.

**`view_name`** will store the current tab.

```python
    def on_exit_btn(self) -> None:
        """Kills the running kivy application."""
        for task in self.tasks:
            task.cancel()
        App.get_running_app().stop()
```

This method is similar to the [**`amiga-app-template-kivy`**](https://github.com/farm-ng/amiga-app-template-kivy)
however, this time we also need to cancel the async tasks that a running.

```python
    def update_view(self, view_name: str):
        self.view_name = view_name
```

This function will be called by the kivy string when the tabbed panel is switched.

## App Functions

```python
    async def app_func(self):

        config_list = proto_from_json_file(
            self.service_config, EventServiceConfigList()
        )

        oak0_client: EventClient | None = None

        for config in config_list.configs:
            if config.name == "oak0":
                oak0_client = EventClient(config)

        if None in [oak0_client]:
            raise RuntimeError(f"No {config} service config in {self.service_config}")

        # stream camera frames
        self.tasks: list[asyncio.Task] = [
            asyncio.create_task(self.stream_camera(oak0_client, view_name))
            for view_name in self.STREAM_NAMES
        ]

        return await asyncio.gather(run_wrapper(), *self.tasks)
```

More information can be found here:
[**`farm-ng-core`**](https://github.com/farm-ng/farm-ng-core/tree/e872fbe1aebd26fabfabefd77054ef9774301d67/py/farm_ng/core)

Within this repository you can see how **`config_list`** and **`oak0_client`** are made.

Finally, once the oak0_client is made, it can be used to subscribe to the camera streams.

## Subscribing to Streams

Now, add the function stream_camera. The loop for view_name in STREAM_NAMES
makes four instances of the stream_camera method.
We make all four instances as opposed to only one because rather
than changing the async tasks, we can conditionally display
the image streams.

```python
    async def stream_camera(
        self,
        oak_client: EventClient,
        view_name: Literal["rgb", "disparity", "left", "right"] = "rgb",
    ) -> None:
        """Subscribes to the camera service and populates the tabbed panel with all 4 image streams."""
        while self.root is None:
            await asyncio.sleep(0.01)

        rate = oak_client.config.subscriptions[0].every_n

        async for event, payload in oak_client.subscribe(
            SubscribeRequest(uri=Uri(path=f"/{view_name}"), every_n=rate),
            decode=False,
        ):
            if view_name == self.view_name:
                print(self.view_name)
                message = payload_to_protobuf(event, payload)
                try:
                    img = self.image_decoder.decode(message.image_data)
                except Exception as e:
                    logger.exception(f"Error decoding image: {e}")
                    continue

                # create the opengl texture and set it to the image
                texture = Texture.create(
                    size=(img.shape[1], img.shape[0]), icolorfmt="bgr"
                )
                texture.flip_vertical()
                texture.blit_buffer(
                    bytes(img.data),
                    colorfmt="bgr",
                    bufferfmt="ubyte",
                    mipmap_generation=False,
                )
                self.root.ids[view_name].texture = texture
```

Lets break down this code a little bit more...

### Event Client

The client-service framework used here is vital to communicate with the Amiga.

```python
async for _, message in EventClient(self.service_config).subscribe(
    SubscribeRequest(
        uri=Uri(path=f"/{[view_name]}"), every_n=self.stream_every_n
    ),
    decode=True,
):
```

The EventClient is listening to all of the messages being sent
by each of the services on the Amiga.

This class is the "on-ramp" used to access the Amigas communication
highway. All the other vehicles on the highway are messages from the
other services. The, oaks, canbus, trackfollower, etc... can all be
accessed from this EventClient.

More details on the .subscribe() method can be found here:
[**event_client.py**](https://github.com/farm-ng/farm-ng-core/blob/main/py/farm_ng/core/event_client.py)

SubscribeRequest accepts an uri (message name) and a relative frequency (every_n). This
is considered a relative frequency because the oak service operates at
10hz while the canbus operates at 50hz.

### Decode and display

Finally, we can decode and display the images received from the
stream.

```python
  # create the opengl texture and set it to the image
  texture = Texture.create(size=(img.shape[1], img.shape[0]), icolorfmt="bgr")
  texture.flip_vertical()
  texture.blit_buffer(
      bytes(img.data),
      colorfmt="bgr",
      bufferfmt="ubyte",
      mipmap_generation=False,
  )
  self.root.ids[view_name].texture = texture
```

For each of the image streams, we update the `Image` widget
`Texture` in the `TabbedPanel` with the corresponding decoded
image.
The `Image` widgets in the `TabbedPanel` accessed by their kivy
id.

## Finding Services from configuration file

We've made stock configurations for each of the services.

```python
def find_config_by_name(
    service_configs: EventServiceConfigList, name: str
) -> EventServiceConfig | None:
    """Utility function to find a service config by name.

    Args:
        service_configs: List of service configs
        name: Name of the service to find
    """
    for config in service_configs.configs:
        if config.name == name:
            return config
    return None
```

Should you only provide the name of the service in the configuration
file, this will return a complete configuration for your custom application.

## Setting Parameters and main

This example is used to demonstrate how you could specify
specific services to subscribe to from the command line.

```python
if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="template-app")

    # Add additional command line arguments here
    parser.add_argument("--service-config", type=Path, default="service_config.json")
    args = parser.parse_args()
    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(CameraApp(args.service_config).app_func())
    except asyncio.CancelledError:
        pass
    loop.close()
```

service_config.json is a list of each of the services you've requested
for your application. For this example, its only a single oak service
but it could modified to add more cameras or canbus for example.

## Other notes

### service_config.json

```json
{
    "configs": [
        {
        "name": "oak0",
        "port": 50010,
        "host": "localhost",
        "log_level": "INFO",
        "subscriptions": [
            {
                "uri": {
                    "path": "/rgb",
                    "query": "service_name=oak0"
                },
                "every_n": 1
            }
        ]
    }
    ]
}
```

### Image decoding

We will use `TurboJPEG` as the image decoder (it is much faster
than kivy's default image decoder), so we add that as an import
in our `main.py` file.

In order to import this, we must add the library `TurboJPEG` to
the
[**`setup.cfg`**](https://github.com/farm-ng/camera-streamer/blob/main/setup.cfg)
file so the dependency installs.

## Running from command line

```Python
cd /CameraStreamer
DISPLAY=:0 ./entry.sh
```

![camera-streamer](https://user-images.githubusercontent.com/53625197/216075393-6e578a01-677e-4279-b224-70fd3f73ce5f.png)
