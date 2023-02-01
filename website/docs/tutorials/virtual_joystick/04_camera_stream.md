---
id: camera-stream
title: 04 - Camera Stream
---
# Camera Stream


### Add a camera stream

The next thing we'll add to our app is a camera stream.
This will:
- Use the [**`OakCameraClient`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py)
- Display images as kivy [**`Image`**](https://kivy.org/doc/stable/api-kivy.uix.label.html) widgets in a `TabbedPanel`.


#### imports

The imports we need to add for this step are:

```Python
import io

from farm_ng.oak import oak_pb2
from farm_ng.oak.camera_client import OakCameraClient
from farm_ng.oak.camera_client import OakCameraClientConfig

from kivy.core.image import Image as CoreImage  # noqa: E402
```
:::tip Reminder
Remember to place all kivy imports below the `Config.set(...)` lines!
:::

Here we add another import from our [**farm-ng libraries**](#farm-ng-libraries).
`farm_ng.oak` is also defined in the [**farm_ng_amiga**](https://github.com/farm-ng/farm-ng-amiga) package.


#### TabbedPanel of Image widgets
BoxLayout
To conveniently package the 4 image streams from the oak camera in the kivy `Window`, we will add the `Image` widgets as a `TabbedPanel`.
A `BoxLayout` will be convenient to stack the `TabbedPanel` of image streams next to the `Labels` displaying the `AmigaTpdo1` values streamed from the canbus.
So we push the `BoxLayout` of `Label` widgets one level deeper and add an additional `BoxLayout` level.

So we will have a `BoxLayout` that stacks 2 sub-widgets horizontally (by default) of:
1. Another `BoxLayout` with 3 vertically stacked labels
2. A [**`TabbedPanel`**](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html).

The `TabbedPanel` is used to select between different pages, which in our case is 4 `Image` Widgets.

Our kivy string becomes:

```Python
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
        BoxLayout:
            size_hint_x: 0.3
            orientation: 'vertical'
            Label:
                text: "state:\\n" + str(app.amiga_state)
            Label:
                text: "speed:\\n" + str(app.amiga_speed) + "  [m/s]"
            Label:
                text: "angular rate:\\n" + str(app.amiga_rate) + "  [rad/s]"
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
```

We add the `size_hint_x: 0.3` to the `BoxLayout` of `Label` widgets so that the `TabbedPanel` gets 70% of the width of the parent layer `BoxLayout`, and the `BoxLayout` of `Label` widgets get 30% of the width.

For the `TabbedPanel`, we do not need a `default_tab` and we assign the `text` each tab will display.

In the Python app, we can access a `Widget` directly using the widget `id:` as in:
```Python
FOO_WIDGET = self.root.ids['FOO_WIDGET_ID']
```
So we assign each `Image` widget an id so it can be easily referenced in the `App`.

- Reference: [**TabbedPanel**](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html)
- Reference: [**Image**](https://kivy.org/doc/stable/api-kivy.uix.image.html)

#### command line args

We will need two additional command line arguments for the camera stream.

```Python
parser.add_argument(
    "--camera-port", type=int, required=True, help="The grpc port where the camera service is running."
)
parser.add_argument("--stream-every-n", type=int, default=1, help="Streaming frequency (used to skip frames)")
```

These `--camera-port` arg is used by gRPC to link client to server and is handled by `entry.sh`.
The camera client uses the same `--address` arg as the canbus client.

The `--stream-every-n` flag can be used to skip frames, effectively lowering the frame rate, in case you implement image processing that cannot keep up with full frame rate.
Until then, it's recommended to leave it at 1 so every frame is streamed unless processing every frame.

Be sure to update the `VirtualJoystickApp` constructor as:
```Python
def __init__(self, address: str, camera_port: int, canbus_port: int, stream_every_n: int) -> None:
    super().__init__()
    self.address: int = address
    self.camera_port: int = camera_port
    self.canbus_port: int = canbus_port
    self.stream_every_n: int = stream_every_n
```

and correspondingly:
```Python
loop.run_until_complete(
    VirtualJoystickApp(args.address, args.camera_port, args.canbus_port, args.stream_every_n).app_func()
)
```

#### app_func

Add to the `app_func()` in the same way as for the `canbus_client`.

```Python
# configure the camera client
camera_config: OakCameraClientConfig = OakCameraClientConfig(address=self.address, port=self.camera_port)
camera_client: OakCameraClient = OakCameraClient(camera_config)

# Camera task(s)
self.async_tasks.append(asyncio.ensure_future(self.stream_camera(camera_client)))
self.async_tasks.append(asyncio.ensure_future(camera_client.poll_service_state()))
```

#### stream_camera

```Python
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
```

This task listens to the camera client's stream and populates the tabbed panel with all 4 image streams from the oak camera.
You'll see a lot of similarity to [**`stream_canbus`**](#stream_canbus), as this task is also connecting to a "server streaming" RPC.

The first obvious difference you'll notice is the use of [**oak.proto**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto) definitions rather than canbus protos.

Next, when creating the `response_stream` we wrap the stub call with [**`stream_frames()`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py), but in practice the same thing is happening.
The `StreamFramesRequest` does take an argument called `every_n` which is used to skip frames if you want to throttle the rate of images in the stream.
You can change this value with the `--stream-every-n` command line argument.

```Python
# get image and show
for view_name in ["rgb", "disparity", "left", "right"]:
    self.root.ids[view_name].texture = CoreImage(
        io.BytesIO(getattr(frame, view_name).image_data), ext="jpg"
    ).texture
```

Once the `StreamFramesReply` comes in, for each loop, we update the images displayed in the kivy `TabbedPanel` of our app.
We've matched the tab `id:` name to the frame names coming from the [**`OakService`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto), as defined in `OakSyncFrame`, so we can easily match tab to image type by stepping through a list.

:::tip Reminder
We can access a `Widget` directly using the widget `id:` as in
```Python
FOO_WIDGET = self.root.ids['FOO_WIDGET_ID']
```
:::

We assign the kivy [**`Image.texture`**](https://kivy.org/doc/stable/api-kivy.uix.image.html#kivy.uix.image.Image.texture) the kivy `CoreImage.texture` from the unpacked jpg images streamed by the `OakService`.

```Python
await asyncio.sleep(0.01)
```
Lastly, we sleep for our default duration of 10ms before the next iteration.

- Reference: [**farm_ng.oak.camera_client**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py)
- Reference: [**oak.proto**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto)


#### entry.sh

:::caution coming soon
Instructions for editing entry.sh to automatically use these args
:::

For now, just hard code the values in `entry.sh` to match the `launcher_configuration.json`.
`entry.sh` should become:

```
#!/bin/bash -ex
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

$DIR/bootstrap.sh $DIR $DIR/venv

$DIR/venv/bin/python $DIR/main.py --canbus-port 50060 --camera-port 50051

exit 0
```
:::info
If you changed the camera port of `Oak0` in the `launcher_configuration.json`, or want to use a different oak device, hard code the corresponding `port` value.

:::

### Run the app - camera stream

Now sync the app to the Brain and launch it with the following instructions!

:::info Deploy Instructions
[**Deploy Instructions**](/brain/custom-applications.mdx) for syncing the app onto the Amiga Brain.
:::


You should now see camera stream to the right of the `AmigaTpdo1` values from the canbus.
Check all four tabs to investigate the different camera streams provided by the oak camera.

![camera_stream](https://user-images.githubusercontent.com/53625197/200481937-5fc317bc-614d-4446-89f5-9df70471c3f6.png)
