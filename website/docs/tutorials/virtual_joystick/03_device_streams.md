---
id: device-streams
title: 03 - Python Implementation
---
# Python Implementation

:::info
In the
[**`src/res/main.kv`**](https://github.com/farm-ng/virtual-joystick/blob/main/src/res/main.kv)
and [**`src/main.py`**](https://github.com/farm-ng/virtual-joystick/blob/main/src/main.py)
files of the
[**virtual-joystick**](https://github.com/farm-ng/virtual-joystick)
app we define the kivy app and Python implementation of the
`VirtualJoystickApp`.

You should open these files for reference as you follow along.
:::

## Imports

:::info
You should have already gone through the
[**Camera Streamer Tutorial**](/docs/tutorials/camera_streamer/camera-streamer-overview)
based on the
[**camera-streamer**](https://github.com/farm-ng/camera-streamer)
example app.
Understanding these instructions will rely on understanding those!
:::

We will need to add a few more imports to the
[**Camera Streamer Tutorial**](/docs/tutorials/camera_streamer/camera-streamer-overview)
to send and receive canbus messages.

```python
from farm_ng.canbus.canbus_pb2 import Twist2d
from farm_ng.canbus.packet import AmigaControlState
from farm_ng.canbus.packet import AmigaTpdo1
```

These imports are a part of the canbus API which will make more sense in application.

## Kivy String Variables

To update the kivy string for the amigas, state, linear and angual velocity, we need to add:

```python
amiga_state = StringProperty("???")
amiga_speed = StringProperty("???")
amiga_rate = StringProperty("???")
```

## Class Initialization

In this tutorial, we introduce the service_config.json file.

```python
def __init__(
    self,
    service_config: EventServiceConfig,
) -> None:
    super().__init__()

    self.counter: int = 0

    self.service_config = service_config

    self.async_tasks: list[asyncio.Task] = []

    self.image_decoder = ImageDecoder()

    self.view_name = "rgb"

    self.max_speed: float = 1.0
    self.max_angular_rate: float = 1.0
```

## Client Configurations

The app function looks a little different in this example vs the camera streamer.
Here, we are using the EventServiceConfigList() function to create a list of services our custom application
will subscribe to.

```python
async def app_func(self):

    async def run_wrapper() -> None:
        # we don't actually need to set asyncio as the lib because it is
        # the default, but it doesn't hurt to be explicit
        await self.async_run(async_lib="asyncio")
        for task in self.async_tasks:
            task.cancel()

    config_list = proto_from_json_file(
        self.service_config, EventServiceConfigList()
    )

    oak0_client: EventClient | None = None
    canbus_client: EventClient | None = None


    for config in config_list.configs:
        if config.name == "oak0":
            oak0_client = EventClient(config)
        elif config.name == "canbus":
            canbus_client = EventClient(config)


    # Confirm that EventClients were created for all required services
    if None in [oak0_client,canbus_client]:
        raise RuntimeError(
            f"No {config} service config in {self.service_config}"
        )

    # Camera task
    self.tasks: list[asyncio.Task] = [
        asyncio.create_task(self.stream_camera(oak0_client, view_name))
        for view_name in self.STREAM_NAMES
    ]

    self.tasks.append(asyncio.ensure_future(self.pose_generator(canbus_client)))

    return await asyncio.gather(run_wrapper(),*self.tasks)
```

We create two clients in this example, the oak0_client and the canbus_client from the EventClient().
Here is more information about the [event_service](https://github.com/farm-ng/farm-ng-core) framework.

## Sending CAN Messages

This function has two main purposes, sending can messages and reading messages from the dashboard.
The dashboards tpd01 messages contains information about the state of the robot (manual, auto) and
velocities. We use the twist2d() structure to send desired velocities to the dashboard which is responsible
for converting those to individual wheel velocities.

```python
async def pose_generator(self, canbus_client: EventClient, period: float = 0.02):
    """The pose generator generates twist messages"""
    while self.root is None:
        await asyncio.sleep(0.01)

    twist = Twist2d()

    joystick: VirtualJoystickWidget = self.root.ids["joystick"]

    rate = canbus_client.config.subscriptions[0].every_n

    async for event, payload in canbus_client.subscribe(
        SubscribeRequest(uri=Uri(path="/state"), every_n=rate),
        decode=False,
    ):
        message = payload_to_protobuf(event, payload)
        tpdo1 = AmigaTpdo1.from_proto(message.amiga_tpdo1)

        twist.linear_velocity_x = self.max_speed * joystick.joystick_pose.y
        twist.angular_velocity = self.max_angular_rate * -joystick.joystick_pose.x

        self.amiga_state = tpdo1.state.name
        self.amiga_speed = "{:.4f}".format(twist.linear_velocity_x)
        self.amiga_rate = "{:.4f}".format(twist.angular_velocity)

        await canbus_client.request_reply("/twist", twist)
        await asyncio.sleep(period)
```

:::tip
The [**`AmigaTpdo1`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py)
message comes from the dashboard and contains the:

- state of the Amiga (AmigaControlState)
- measured speed (forward positive)
- measured angular rate (left positive)

This is the information you'll use for closed loop control!
:::

:::info
If you're curious to learn more about CAN bus in general, see
[**CSS Electronics - CAN Bus Explained**](https://www.csselectronics.com/pages/can-bus-simple-intro-tutorial).
In this virtual joystick tutorial, we are only teaching you to
interact with the canbus client through Amiga state messages.
:::

To display the values in the `Label` widgets we use a kivy
[**`StringProperty`**](https://kivy.org/doc/stable/api-kivy.properties.html#kivy.properties.StringProperty)
for each value.
These are bound to the corresponding `Label` widget text fields,
so we only need to update the value of the `StringProperty` and
we do not need to update the text field of the `Label` explicitly.

### Other notes

#### `farm_ng` Imports

We import the necessary `farm_ng` libraries for creating the
camera and canbus clients and interacting with both services.

#### service_config.json

The [service_config](https://github.com/farm-ng/virtual-joystick-v2/blob/main/service_config.json)
is used to store all the services
that your custom application will use in one place. Here you can specify
which cameras you will be using and at what relative frequency (every_n) and port.
We suggest adjusting the every_n of the oak and canbus client and
evaluate the performance of the app.

#### entry.sh

The entry.sh was greatly simplified from AmigaOS 1.0 to 2.0
and now the file is build the virtual environment and run the app.
In order to see the app running on the brain, you must use "DISPLAY:=0 ./entry.sh".

:::caution
If you launch the `Virtual Joystick` app with the command line,
it is currently possible to have touch interactions with the launcher behind.
This will cause other installed apps to unexpectedly launch over the app you are trying to use.

Please see instructions for a workaround under:
[**FAQ - Brain App Development**](/docs/reference/faq#brain-app-development)
:::

#### App icon

We replace the `app_logo.png` with an icon from '[text](<https://fonts.google.com/icons>)'.
When developing your own app, you can:

1. Choose a suitable symbol or icon for your app
2. Tweak the appearance parameters, including moving to the
largest 'Optical Size' available
3. Export it as a `.png` file

For following along with this tutorial, feel free to download the
image from [src/assets/app_logo.png](https://github.com/farm-ng/virtual-joystick/blob/main/src/assets/app_logo.png).

:::info note
The brain may not display the app icon immediately when it is
cloned onto your machine.
You can trigger a `Refresh App Buttons` on the settings screen to
apply the newly downloaded app icon.
This also is applicable if you change the app icon and want to
display the new icon.
:::

### References

- [**farm_ng.canbus.canbus_client**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/canbus_client.py)
- [**farm_ng.canbus.packet**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py)
- [**canbus.proto**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto)
