---
id: camera-stream
title: 03 - Python Implementation
---
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
In addition to the imports required to building kivy applications,
we will now need to import farm-ng libraries to access the oak
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
from farm_ng.core.events_file_reader import proto_from_json_file
from farm_ng.core.uri_pb2 import Uri
from kornia_rs import ImageDecoder

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

    STREAM_NAMES = ["rgb", "disparity", "left", "right"]


    def __init__(self, service_config: EventServiceConfig, stream_every_n: int) -> None:
        super().__init__()
        self.service_config = service_config
        self.stream_every_n = stream_every_n

        self.image_decoder = ImageDecoder()
        self.image_subscription_tasks: list[asyncio.Task] = []

    def build(self):
        return Builder.load_file("res/main.kv")

    def on_exit_btn(self) -> None:
        """Kills the running kivy application."""
        App.get_running_app().stop()
```

The EventServiceConfig is the custom configuration used to
specify which specific services your custom application
 will need to access.

Variable, STREAM_NAMES is a class level variable or a variable
that is constant throughout all instances of a class. Depending
on your use case, this might become important later, otherwise,
 no worries.

def **init**() is responsible for setting the instance variables.
 Useful in situations where multiple insatnces of a class have
 different characteristics.

def build() is responsible for building the kivy app while def
 on_exit_btn() is responsible closing our app and taking us
  back to the home screen.

These functions should feel a little familear after
 the tic-toc tutorial.

## App Functions

```python
    async def app_func(self):
        async def run_wrapper():
            # we don't actually need to set asyncio as the lib because it is
            # the default, but it doesn't hurt to be explicit
            await self.async_run(async_lib="asyncio")
            for task in self.image_subscription_tasks:
                task.cancel()

        # stream camera frames
        self.image_subscription_tasks: list[asyncio.Task] = [
            asyncio.create_task(self.stream_camera("view_name"))
            for "view_name" in self.STREAM_NAMES
        ]

        return await asyncio.gather(run_wrapper(), *self.image_subscription_tasks)
```

The block of code, self.image_subscription_tasks:
creates 4 asyncio tasks, one for each of the available
camera streams.

Essentially, each of these tasks will be listening to the
 oak0 service for messages that are labeled by that
 stream name.

## Subscribing to Streams

This code is responsible for connecting to the back-end services.

```python

    async def stream_camera(
        self, view_name: Literal["rgb", "disparity", "left", "right"] = "rgb"
    ) -> None:

        while self.root is None:
            await asyncio.sleep(0.01)

        async for _, message in EventClient(self.service_config).subscribe(
            SubscribeRequest(
                uri=Uri(path=f"/{view_name}"), every_n=self.stream_every_n
            ),
            decode=True,
        ):
            try:
                img = self.image_decoder.decode(message.image_data)
            except Exception as e:
                logger.exception(f"Error decoding image: {e}")
                continue

            # create the opengl texture and set it to the image
            texture = Texture.create(size=(img.shape[1], img.shape[0]), icolorfmt="rgb")
            texture.flip_vertical()
            texture.blit_buffer(
                bytes(img.data),
                colorfmt="rgb",
                bufferfmt="ubyte",
                mipmap_generation=False,
            )
            self.root.ids[view_name].texture = texture
```

Lets break down this code a little bit more...

## Event Client

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

The service_config will be discuessed in greater detail in the
[**Virtual-Joystick**](/docs/tutorials/virtual_joystick/05_further_exercises.md)
tutorial. For this tutorial, it will only be the oak camera service.

More details on the .subscribe() method can be found here:
[**event_client.py**](https://github.com/farm-ng/farm-ng-core/blob/main/py/farm_ng/core/event_client.py)

SubscribeRequest accepts an uri and a relative frequency (every_n). This
is considered a relative frequency because the oak service operates at
10hz while the canbus operates at 50.

### Decode and display

Finally, we can decode and display the images received from the
stream.

```python
  # create the opengl texture and set it to the image
  texture = Texture.create(size=(img.shape[1], img.shape[0]), icolorfmt="rgb")
  texture.flip_vertical()
  texture.blit_buffer(
      bytes(img.data),
      colorfmt="rgb",
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
    parser = argparse.ArgumentParser(prog="amiga-camera-app")
    parser.add_argument(
        "--service-config", type=Path, default="/opt/farmng/config.json"
    )
    parser.add_argument("--camera-name", type=str, default="oak1")
    parser.add_argument(
        "--stream-every-n", type=int, default=1, help="Streaming frequency"
    )
    args = parser.parse_args()

    # config with all the configs
    service_config_list: EventServiceConfigList = proto_from_json_file(
        args.service_config, EventServiceConfigList()
    )

    # filter out services to pass to the events client manager
    oak_service_config = find_config_by_name(service_config_list, args.camera_name)
    if oak_service_config is None:
        raise RuntimeError(f"Could not find service config for {args.camera_name}")

    loop = asyncio.get_event_loop()

    try:
        loop.run_until_complete(
            CameraApp(oak_service_config, args.stream_every_n).app_func()
        )
    except asyncio.CancelledError:
        pass
    loop.close()
```

service_config_list is a list of each of the services you've requested
for you application, in this case, coming from the command line.

## Other notes

### Image decoding

We will use `kornia-rs` as the image decoder (it is much faster
than kivy's default image decoder), so we add that as an import
in our `main.py` file.

In order to import this, we must add the library `kornia-rs` to
the
[**`setup.cfg`**](https://github.com/farm-ng/camera-streamer/blob/main/setup.cfg)
file so the dependency installs.

We also construct an instance of this image decoder and assign it
as a class variable of our `CameraApp` so it is not created every
time we decode an image.

### Command line Arguments

We add a few command line arguments used by the `OakCameraClient`
at the bottom of the app and pass these to the `CameraApp` class
through the constructor.

These include the `address` and `port` of the oak device we will
stream and the `stream_every_n` argument that allows you to
throttle the stream rate of your camera, if you wish to save
computational resources.

### entry.sh

There are **required arguments** that must be set in the
[**`entry.sh`**](https://github.com/farm-ng/camera-streamer/blob/main/entry.sh)
file and **optional arguments** that take on a default value,
unless overridden in the command line.

Since `port` is required, we add `--port 50051` to the `python`
call in [**`entry.sh`**](https://github.com/farm-ng/camera-streamer/blob/main/entry.sh)
to set the script to use the `Oak0` device (`Oak1` would be on `50052`, `Oak2` on `50053`,
and so on).

When launching your app on the Brain with the button, any
required args being passed to `main.py` must already be specified
in `entry.sh`.

When launching your app on your computer, or on the brain but
from an SSH terminal, you can add additional arguments to change
the default value of the optional arguments.
The `$@` in `python` call in `entry.sh` is what allows for this.

To run the app on the amiga, with changing a default command line
arg:

```Python
cd /CameraStreamer
DISPLAY=:0 ./entry.sh --stream-every-n 2
```

:::caution
If you launch the `Camera Streamer` app with the command line,
it is currently possible to have touch interactions with the launcher behind.
This will cause other installed apps to unexpectedly launch over
the app you are trying to use.

Please see instructions for a workaround under:
[**FAQ - Brain App Development**](/docs/reference/faq#brain-app-development)
:::

### App icon

We replace the `app_logo.png` with an icon from
`[text](<https://fonts.google.com/icons>)`.
When developing your own app, you can:

1. Choose a suitable symbol or icon for your app
2. Tweak the appearance parameters, including moving to the
largest 'Optical Size' available
3. Export it as a `.png` file

For following along with this tutorial, feel free to download the
image from
[**src/assets/app_logo.png**](https://github.com/farm-ng/camera-streamer/blob/main/src/assets/app_logo.png).

:::info note
The brain may not display the app icon immediately when it is
cloned onto your machine.
You can trigger a `Refresh App Buttons` on the settings screen to
apply the newly downloaded app icon.
This also is applicable if you change the app icon and want to
display the new icon.
:::

### `app_func()`

Here we create the `OakCameraClient` and add the `stream_camera`
asyncio task to our tasks list.

## Run it

Run the app on the brain by launching with the app button or run
it through a terminal as described in
[**Command line arguments**](#command-line-arguments).

![camera-streamer](https://user-images.githubusercontent.com/53625197/216075393-6e578a01-677e-4279-b224-70fd3f73ce5f.png)

Wohooooooo:)
