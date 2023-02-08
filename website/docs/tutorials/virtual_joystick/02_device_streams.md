---
id: device-streams
title: 02 - Device Streams
---
# Device Streams

:::info
In the [`src/res/main.kv`](https://github.com/farm-ng/virtual-joystick/blob/main/src/res/main.kv) and [`src/main.py`](https://github.com/farm-ng/virtual-joystick/blob/main/src/main.py) files of the [**virtual-joystick**](https://github.com/farm-ng/virtual-joystick) app we define the kivy app and Python implementation of the `VirtualJoystickApp`.

You should open these files for reference as you follow along.
:::


## Camera stream

:::info
You should have already gone through the [**Camera Streamer Tutorial**](/docs/tutorials/camera_streamer/camera-streamer-overview) based on the [**camera-streamer**](https://github.com/farm-ng/camera-streamer) example app.
Understanding these instructions will rely on understanding those!
:::

You can see we define the camera stream in the same as in the [**Camera Streamer Tutorial**](/docs/tutorials/camera_streamer/camera-streamer-overview).
This time however, we nest the `TabbedPanel` of `Image` widgets in a [**`BoxLayout`**](https://kivy.org/doc/stable/api-kivy.uix.boxlayout.html) (with  `orientation: horizontal`) so we can arrange some other widgets next to our `TabbedPanel`.

## Canbus stream

### Kivy definition

The first `Widget` we will arrange next to the `TabbedPanel` is another `BoxLayout` (with  `orientation: vertical`), used for displaying real time data streamed by the canbus client.

This `BoxLayout` will contain multiple widgets displaying information streamed from the canbus service, through the [**`CanbusClient`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/canbus_client.py).
One of the easiest widgets to add for conveying information is the [**`Label`**](https://kivy.org/doc/stable/api-kivy.uix.label.html) widget, so we arrange a few of these (and potentially some empty placeholder widgets) in the box layout.
Unlike with a `RelativeLayout`, where you can position each widget precisely, a `BoxLayout` requires empty widgets if you want to leave some blank space.

You can see the use of [**`size_hint_x`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_x) & [**`size_hint_y`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_y) to adjust the ***relative*** size of the widgets to their parent.
For us, this means shrinking the relative size of the `BoxLayout` of `Label` widgets displaying the streamed canbus values (in the x direction).

- Reference: [**Box Layout**](https://kivy.org/doc/stable/api-kivy.uix.boxlayout.html)
- Reference: [**Label**](https://kivy.org/doc/stable/api-kivy.uix.label.html)

### Python canbus stream

You will notice in [`src/main.py`](https://github.com/farm-ng/virtual-joystick/blob/main/src/main.py) that there is a lot of similarity between the `stream_camera` and `stream_canbus` methods of the `VirtualJoystickApp`.

Both methods handle connecting to a "server streaming" RPC, as described in [**gRPC core concepts**](https://grpc.io/docs/what-is-grpc/core-concepts/).
They only differ in the client used to connect ([**`OakCameraClient`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py) vs [**`CanbusClient`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/canbus_client.py) ) and what is done with the received message.

#### Setup

This is just like [**Camera Streamer - Camera Stream - Setup**](/docs/tutorials/camera_streamer/camera-stream#setup) section, except we use the `CanbusClient`  to connect to the canbus service rather than the `OakCameraClient` connecting to the oak camera service.

#### Connection logic

This is just like [**Camera Streamer - Camera Stream - Connection Logic**](/docs/tutorials/camera_streamer/camera-stream#connection-logic) section, except we use the [**`stream`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/canbus_client.py) method of the `CanbusClient` to read the response stream.
This wraps the GRPC service stub `streamCanbusMessages`.


#### Read the stream

This is just like [**Camera Streamer - Camera Stream - Read the Stream**](/docs/tutorials/camera_streamer/camera-stream#read-the-stream) section, except we receive a `StreamCanbusReply` proto message, defined in [**canbus.proto**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto), from our canbus service.

This ultimately contains (in a nested proto definition) an iterable container where each message is a proto defined `RawCanbusMessage`, also defined in [**canbus.proto**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto)


#### Decode and display

We parse every proto defined `RawCanbusMessage` to extract the [**`AmigaTpdo1`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py) (Amiga state) message, if the `RawCanbusMessage` contains an `AmigaTpdo1` message.

:::tip
The [**`AmigaTpdo1`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py) message comes from the dashboard and contains the:

- state of the Amiga (AmigaControlState)
- measured speed (forward positive)
- measured angular rate (left positive)

This is the information you'll use for closed loop control!
:::

The canbus service reformats and forwards all CAN messages to the canbus client, so there are a lot of messages to filter out.
The [**`parse_amiga_tpdo1_proto`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py) returns `None` if the `RawCanbusMessage` does not contain an `AmigaTpdo1` message.

:::info
If you're curious to learn more about CAN bus in general, see [**CSS Electronics - CAN Bus Explained**](https://www.csselectronics.com/pages/can-bus-simple-intro-tutorial).
In this virtual joystick tutorial, we are only teaching you to interact with the canbus client through Amiga state messages.
:::

To display the values in the `Label` widgets we use a kivy [**`StringProperty`**](https://kivy.org/doc/stable/api-kivy.properties.html#kivy.properties.StringProperty) for each value.
These are bound to the corresponding `Label` widget text fields, so we only need to update the value of the `StringProperty` and we do not need to update the text field of the `Label` explicitly.

### Other notes

#### `farm_ng` Imports

We import the necessary `farm_ng` libraries for creating the camera and canbus clients and interacting with both services.

#### Command line Arguments

We now have two device services to connect to, an oak camera and the canbus, running on different ports.
We name them accordingly and set them both as required.

Similar to the [**Camera Streamer - Camera Stream - Command line Arguments**](/docs/tutorials/camera_streamer/camera-stream#command-line-arguments),
we add a few command line arguments used by the `OakCameraClient` and the `CanbusClient` at the bottom of the app and pass these to the `VirtualJoystickApp` class through the constructor.

These include the `address` of the brain (common to all devices) and the `port` of both devices we will stream, as well as the `stream_every_n` argument for the oak device.



#### entry.sh

As in the [**Camera Streamer - Camera Stream - entry.sh**](/docs/tutorials/camera_streamer/camera-stream#entrysh),
the required arguments are added to the `entry.sh` file.
Since `camera_port` and `canbus_port` are required, we add `--camera-port 50051` and `--canbus-port 50060` to the `python` call in [`entry.sh`](https://github.com/farm-ng/virtual-joystick/blob/main/entry.sh) to set the script to use the `Oak0` device and the canbus.


:::info
If you want to use a different oak device than `Oak0`, hard code the corresponding `camera-port` value.
`Oak1` would be on `50052`, `Oak2` on `50053`, and so on...
:::

When launching your app on the Brain with the button, any required args being passed to `main.py` must already be specified in `entry.sh`.

When launching your app on your computer, or on the brain but from an SSH terminal, you can add additional arguments to change the default value of the optional arguments.
The `$@` in `python` call in `entry.sh` is what allows for this.

For example, to run the app from your computer, while the camera runs on the brain nearby:

```Python
cd joystick_tutorial/
./entry.sh --address <amiga ip address>
```

To run the app on the amiga, with changing a default command line arg:
```Python
ssh amiga
# Now in an ssh terminal
cd ~/apps/
./joystick_tutorial/entry.sh --stream-every-n 2
```


#### App icon

We replace the `app_logo.png` with an icon from https://fonts.google.com/icons.
When developing your own app, you can:

1. Choose a suitable symbol or icon for your app
2. Tweak the appearance parameters, including moving to the largest 'Optical Size' available
3. Export it as a `.png` file

For following along with this tutorial, feel free to download the image from [src/assets/app_logo.png](https://github.com/farm-ng/virtual-joystick/blob/main/src/assets/app_logo.png).

:::info note
The brain may not display the app icon immediately when it is cloned onto your machine.
You can trigger a `Refresh App Buttons` on the settings screen to apply the newly downloaded app icon.
This also is applicable if you change the app icon and want to display the new icon.
:::

#### `app_func()`

Here we create the `OakCameraClient` and `CanbusClient` and add the `stream_camera` `stream_canbus` asyncio tasks to our tasks list.

### Run it

Run the app on the brain by launching with the app button or run it through a terminal as described in [Command line arguments](#command-line-arguments).

:::caution
Make sure all of your cables are disconnected from the Amiga before driving around!
:::

You should see the `AmigaTpdo1` values update in realtime as you drive the amiga and change between various command states. See [**Amiga Control States**](../../dashboard/control_states.mdx) and [**`AmigaControlState`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py) for more information on the `state` parameter.

You should also see camera stream to the right of the `AmigaTpdo1` values from the canbus.
Check all four tabs to investigate the different camera streams provided by the oak camera.

![camera_stream](https://user-images.githubusercontent.com/53625197/200481937-5fc317bc-614d-4446-89f5-9df70471c3f6.png)

<!-- - Reference: [**farm_ng.canbus.canbus_client**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/canbus_client.py)
- Reference: [**farm_ng.canbus.packet**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py)
- Reference: [**canbus.proto**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto) -->
