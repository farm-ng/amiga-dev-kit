---
id: virtual-joystick
title: Virtual Joystick Example
---
# Virtual Joystick Example

This example application and tutorial is designed to enable you to develop your own custom applications and deploy them to the Amiga brain.

On the Brain, there are multiple gRPC services running in the background, including the oak camera service and the canbus service.
We will teach you how to interact with these two services through the camera client and canbus client, respectively.
We will also show you how to create a basic kivy application, and use gRPC and asyncio in that application.

The topics covered in this tutorial include:
- Creating kivy applications
- GRPC / asyncio application development
- Streaming an Oak camera with the camera client
- Streaming Amiga state information with the canbus client
- Auto control mode of Amiga robot with the canbus client

:::tip
We hope that this tutorial is sufficient to get you started on developing your own custom Amiga brain applications.
If you feel we missed any key details, please let us know so we can help you through it and add it to the tutorial for everyone else to benefit from!
:::


## Infrastructure instructions

:::caution Coming soon
Link to instructions for setting up amiga-brain-template
:::

:::caution Coming soon
Link to instructions for deploying apps to brain
:::

The following assumes you:
- Have created a repository based on the template repository
- Are able to deploy apps from that repository to the Amiga Brain


## Block diagram

:::caution Coming soon
System level block diagram
:::

## Necessary background knowledge

The Amiga brain app development meets at the intersection of three key libraries, as well as some farm-ng libraries:

1. [gRPC](https://grpc.io/)
2. [asyncio](https://docs.python.org/3/library/asyncio.html)
3. [kivy](https://kivy.org/)
4. [farm-ng libraries](#farm-ng-libraries)

:::info
Currently we are only supporting Python app development, but our infrastructure allows for C++ app development support in the near future.
:::

### gRPC

The best place to start to gain an understanding of gRPC is the [gRPC introduction](https://grpc.io/docs/what-is-grpc/introduction/), followed by the [gRPC core concepts](https://grpc.io/docs/what-is-grpc/core-concepts/).

gRPC is used as our communication protocol between services (running in the background) and clients (what you link in your app).
The communication is through Protocol Buffers, defined in `*.proto` files in our [farm-ng libraries](#farm-ng-libraries).

### asyncio

The best place to start to gain an understanding of asyncio is the [asyncio docs](https://docs.python.org/3/library/asyncio.html).

We use asyncio in order to run multiple concurrent tasks in our applications.
This is crucial to the system design to prevent high rate robotic control from being blocked by time consuming processes, such as image processing.

In the virtual joystick example, we have multiple, concurrent `while` loops running that:
- Receive the camera stream (from the camera service)
- Receive the canbus stream (from the canbus service)
- Draw the joystick (in [kivy](#kivy))
- Send canbus commands (to the canbus service)

### kivy

The best place to start to gain an understanding of kivy is the [kivy Getting Started >> Introduction](https://kivy.org/doc/stable/gettingstarted/intro.html).

We use kivy to draw our apps and handle touch screen interactions for our interactive apps.
kivy can be coded in its own language ([the Kv language](https://kivy.org/doc/stable/guide/lang.html)), in Python, or in some combination of both!

We tend to define our apps in the kv language at the top of the app files using `"""` strings, and may add some interaction in Python code.
In this example, however, we also demonstrate creating a custom kivy `Widget` in Python!

### farm-ng libraries

We have some libraries that are imported by the brain infrastructure and are used in our apps.
They are:
- defined as python packages (installed with `pip` by pointing to the repo)
- contain the `.proto` definitions used in our gRPC communications
- contain the gRPC clients you can use to interact with the Amiga brain services

See: [farm_ng_core](https://github.com/farm-ng/farm-ng-core)

See: [farm_ng_amiga](https://github.com/farm-ng/amiga-brain-api)


## Virtual Joystick tutorial

The goal of this tutorial is to take you step-by-step from the template repository to the full [`virtual_joystick/main.py`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/examples/virtual_joystick/main.py) example.
Then you can mirror what you've done here in your own custom app development!


### Template overview

This section explains all of the Python code in the template, so you can understand the base before adding anything.

#### Imports

```Python
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
```

The template starts with generic Python imports that are used in the app, followed by the basic kivy imports and configuration.
Before any kivy imports, we must explicitly state that the command line args for the app are to be used, rather than the default kivy command line args, with `os.environ["KIVY_NO_ARGS"] = "1"`.


Next we import kivy `Config` and define the config parameters we recommend for running kivy applications on the brain.
This should come before importing any other Kivy modules, as stated in [kivy - Configuration object](https://kivy.org/doc/stable/api-kivy.config.html).

Finally we import the remaining kivy modules we use in our app, with the `# noqa: E402` flag, so any `pre-commit` formatters don't move these imports above the kivy configuration setting.


#### kivy app definition

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
"""
```

Next we define our application in the Kv language.
This definition can be a string at the top of a `.py` file or can be defined
in a separate `.kv` file, and we tend to go for strings at the top of the Python file.

:::tip
Throughout this tutorial we'll explain the kivy app created in this example, but this is not intended as a thorough introduction to using kivy. Try the [kivy tutorials](https://kivy.org/doc/stable/tutorials-index.html) and use the [kivy API](https://kivy.org/doc/stable/api-index.html) for more information on creating custom applications with kivy.
:::


#### RelativeLayout

Two key components of kivy are [`Layouts`](https://kivy.org/doc/stable/gettingstarted/layouts.html#) and [`Widgets`](https://kivy.org/doc/stable/api-kivy.uix.html).
The root of our template app is a `RelativeLayout`, which contains a `Button` widget.
The `RelativeLayout` allows us to position the [Back button](#back-button) (and any widgets or nested layouts we may add in the future) in relative coordinates.

- Reference: [Relative Layout](https://kivy.org/doc/stable/api-kivy.uix.relativelayout.html)

#### Back button

This `Button` is used to exit the app when it is pressed, by calling the [`TemplateApp.on_exit_btn()`](#on_exit_button) method.

:::info
To be precise it's actually when the button is released due to using the `on_release:` keyword.
:::

Since the `TemplateApp` inherits from the kivy `App` class, methods and variables of the `TemplateApp` can be linked with the `app.foo_variable` or `app.bar_method()`
We define the `Button` with two images, one that shows most of the time, and another that shows while the button is pressed down.
You can also define a button with a string, if you want to quickly add buttons without finding an icon.

:::tip
[Material Icons](https://github.com/google/material-design-icons) is a nice place to find symbols to use for app buttons / UI features.
:::

- Reference: [Button](https://kivy.org/doc/stable/api-kivy.uix.button.html)



#### TemplateApp

```Python
class TemplateApp(App):
    def __init__(self) -> None:
        super().__init__()

        self.async_tasks: List[asyncio.Task] = []
```

We define the `TemplateApp` to inherit from the kivy `App` class, so it has all the features of a generic `App`, plus anything we add to it.

All we add here is a placeholder for the `TemplateApp` class methods that will each be added as an `asyncio.Task`.


#### build

```Python
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
```


`build` is a default kivy `App` method that we must overwrite with our app's details.

To load the Kv formatted string into our app, we use the built-in method:

```Python
Builder.load_string(KV_STRING)
```

But first, we need to override the default touch handling since we are interacting on a touchscreen.

##### touch handling

`on_touch_down`, `on_touch_move`, and `on_touch_up` define the behavior at various stages of a screen press or mouse click.
Because kivy can mis-register touches on the touchscreen, you will notice the clear pattern that all of these follow to correct for this.
There is a placeholder after the initial pattern in all of these that allows you to add logic to be performed at these various stages of the press.

We also must bind these touch handling functions to the kivy app `Window`.

:::info Note
In the future we plan to hide this so it is not needed in your apps.
:::


#### on_exit_button

```Python
def on_exit_btn(self) -> None:
    """Kills the running kivy application."""
    App.get_running_app().stop()
```

This simple method stops the running kivy app.
When an app was launched on the Amiga Brain through the Launcher app, this will return the Brain state to the Launcher app.



#### app_func

```Python
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
```

We use the `app_func` pattern, with the nested `run_wrapper`, to build, run, and manage the list of long duration, asynchronous tasks required by the app.

Here we build the list of `async` methods that will run simultaneously for the life of our app.
Currently this list only consists of a placeholder method called [`template_function()`](#template_function) that we will later replace with tasks that actually do something.

Each method is added as an `asyncio.Task` following the pattern used to add `self.template_function()`.

#### template_function

```Python
async def template_function(self) -> None:
    """Placeholder forever loop."""
    while self.root is None:
        await asyncio.sleep(0.01)

    while True:
        await asyncio.sleep(0.01)
```

In each of our `async` functions, we should wait for the root of the kivy App to be initialized before doing anything in the function.
Often these functions will rely on the kivy app, so this prevents unexpected crashes.

In this placeholder, the `while` loop doesn't do anything besides sleep for 10 ms before the next iteration of the `while` loop.
We tend to add this 10 ms at the end of each of our loops.

:::tip
The custom defined async functions must be defined with the `async` decorator and any blocking tasks with the `await` keyword.
:::

#### Command line args and execution

```Python
if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="template-app")

    # Add additional command line arguments here

    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(TemplateApp().app_func())
    except asyncio.CancelledError:
        pass
    loop.close()
```

Finally we run the app!
There is infrastructure in place for defining command line args, which you'll likely want in your apps so you don't have to hard code configurations.
The last six lines are a useful pattern for cleanly running your app with `asyncio`.



### Rename the `TemplateApp`

Now that you understand the template, it's time to rename it for your app.
In this tutorial, we'll go with `VirtualJoystickApp`.

There's 3 places to change the templated name:
```Python
# 1. Rename the class
class VirtualJoystickApp(App):
    def __init__(self) -> None:
        super().__init__()

...

# 2. Rename the program
if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="virtual-joystick")

...

# 3. Run with the new class name
try:
    loop.run_until_complete(VirtualJoystickApp().app_func())
except asyncio.CancelledError:
    pass
```

### Run the app - template

Now sync the app to the brain and launch it!

:::caution Coming soon
Link to instructions for deploying apps to brain
:::

You should see a blank kivy app pop up, once loaded, with only a `Back` button.
Try out the button to exit the app.

![template](https://user-images.githubusercontent.com/53625197/200450581-7c93eb1f-3aa2-49f5-9c52-51e8b051c76e.png)


### Add a canbus stream

The first thing we'll add to our app is a canbus stream.
This will:
- Use the [`CanbusClient`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/canbus_client.py)
- Parse [`AmigaTpdo1`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/packet.py) (Amiga state) messages
- Draw values in realtime as kivy [`Label`](https://kivy.org/doc/stable/api-kivy.uix.label.html) widgets


#### imports

The imports we need to add for this step are:

```Python
from typing import Generator
from typing import Optional
import grpc

from farm_ng.canbus import canbus_pb2
from farm_ng.canbus.canbus_client import CanbusClient
from farm_ng.canbus.canbus_client import CanbusClientConfig
from farm_ng.canbus.packet import AmigaControlState
from farm_ng.canbus.packet import AmigaTpdo1
from farm_ng.canbus.packet import parse_amiga_tpdo1_proto

...

from kivy.properties import StringProperty  # noqa: E402
```
:::tip Reminder
Remember to place all kivy imports below the `Config.set(...)` lines!
:::

Here we see the first imports from our [farm-ng libraries](#farm-ng-libraries).
`farm_ng.canbus` is defined in the [farm_ng_amiga](https://github.com/farm-ng/amiga-brain-api) package.

The imports ending in `*_pb2` are the compiled `*.proto` definitions we use in the app.
For example, `from farm_ng.canbus import canbus_pb2` imports the proto messages defined in [canbus.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto).


#### kivy Labels

Kivy has the concept of nesting, so not only can you add `Widgets` within `Layouts`, but also you can recursively add `Layouts` within `Layouts`.
Since we have 3 parameters we want to view, we will add 3 `Label` widgets in a `BoxLayout` (which itself is in the base `RelativeLayout`) to our kivy string, so that the kivy string is defined as:

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
        orientation: 'vertical'
        Label:
            text: "state:\\n" + str(app.amiga_state)
        Label:
            text: "speed:\\n" + str(app.amiga_speed) + "  [m/s]"
        Label:
            text: "angular rate:\\n" + str(app.amiga_rate) + "  [rad/s]"
"""
```

Since the `BoxLayout` stacks widgets horizontally by default, we define the orientation as `vertical`, so the `Label` widgets appear in a vertical column.

- Reference: [Box Layout](https://kivy.org/doc/stable/api-kivy.uix.boxlayout.html)

#### Labels

We define 3 labels that are live updated with class variables from the `VirtualJoystickApp`.
In order to update the value, e.g.
```Python
Label:
    text: "state:\\n" + str(app.amiga_state)
```
the values must be declared as a `StringProperty` of the class
before the class is initialized and should be defined as type `str`.

So our initializer (eventually) becomes:

```Python
class VirtualJoystickApp(App):
    # For kivy labels
    amiga_speed = StringProperty()
    amiga_rate = StringProperty()
    amiga_state = StringProperty()

    def __init__(self, address: str, canbus_port: int) -> None:
        super().__init__()
        self.address: int = address
        self.canbus_port: int = canbus_port

        # Received
        self.amiga_tpdo1: AmigaTpdo1 = AmigaTpdo1()
        self.amiga_state: str = "NO CANBUS\nSERVICE DETECTED"
        self.amiga_speed: str = "???"
        self.amiga_rate: str = "???"

        self.async_tasks: List[asyncio.Task] = []
```
:::info
This initializer already includes the command line args and `AmigaTpdo1` container we will add later.
:::

- Reference: [Label](https://kivy.org/doc/stable/api-kivy.uix.label.html)
- Reference: [StringProperty](https://kivy.org/doc/stable/api-kivy.properties.html#kivy.properties.StringProperty)


#### CanbusClient

Next, we'll configure and create the gRPC client that will connect to the gRPC canbus service running in the background of the brain.
The `CanbusClient` is part of the farm-ng API, specifically [farm_ng_amiga](https://github.com/farm-ng/amiga-brain-api).

The clients define an API that allows you to interact with the services. See [`CanbusClient`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/canbus_client.py) for an example.
The `CanbusClient` is constructed with a `CanbusClientConfig`, which itself is constructed with an `address` and a `port`.
We'll momentarily assume we have two parameters `self.address` & `self.canbus_port` to be used in this constructor, and add those next.

We'll also replace the `template_function()` placeholder `asyncio.Task` with the tasks required for streaming the canbus.

So we add to our `app_func()`:

```Python
# configure the canbus client
canbus_config: CanbusClientConfig = CanbusClientConfig(address=self.address, port=self.canbus_port)
canbus_client: CanbusClient = CanbusClient(canbus_config)

# Canbus task(s)
self.async_tasks.append(asyncio.ensure_future(self.stream_canbus(canbus_client)))
self.async_tasks.append(asyncio.ensure_future(canbus_client.poll_service_state()))
```

These tasks include the app specific function `stream_canbus` we will define in app momentarily, as well as two generic the `poll_service_state()` method required for all clients.
`poll_service_state()` regularly checks the state of the gRPC service the client is connected to, and updates the `state` parameter of the client.
The service's `state` can then be checked wherever relevant in the app to ensure the services are running.
It's recommended to check this state every iteration in each asynchronous loop that relies on that service.


#### stream_canbus

Here we create a task that:
- listens to the canbus client's stream
- filters for `AmigaTpdo1` messages
- extracts useful values from `AmigaTpdo1` messages

```Python
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
```

With
```Python
response_stream: Optional[Generator[canbus_pb2.StreamCanbusReply]] = None
```
we are being explicit the type of stream we will be connecting to / declaring the type `response_stream` will contain (with the `Optional` decorator because it starts as `None` until we are ready to initialize it), but you may need a little more gRPC understanding to create this line.

:::tip gRPC life cycle deep dive

As explained in the [gRPC core concepts - RPC life cycle](https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-life-cycle) section, there are 4 types server methods.

- [Unary](https://grpc.io/docs/what-is-grpc/core-concepts/#unary-rpc): single request -> single response
- [Server streaming](https://grpc.io/docs/what-is-grpc/core-concepts/#server-streaming-rpc): single request -> stream of responses
- [Client streaming](https://grpc.io/docs/what-is-grpc/core-concepts/#client-streaming-rpc): stream of requests -> single response
- [Bidirectional streaming](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc): stream of requests -> stream of responses
:::


*Most* of our services have a server streaming RPC set up, so the canbus client can send a single request to the canbus service and proceed to receive the stream of canbus messages until the stream is explicitly stopped, or either of the client or service is killed.

And in this case we will be receiving a server stream from the `canbus` service of proto defined message `StreamCanbusReply`.
This is defined as the RPC [streamCanbusMessages](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto).

```Python
while True:
    while client.state.value != canbus_pb2.CanbusServiceState.RUNNING:
        await client.connect_to_service()

    if response_stream is None:
        response_stream = client.stub.streamCanbusMessages(
            canbus_pb2.StreamCanbusRequest()
        )
```

This pattern is relevant as the task starts.
Basically, we get stuck in a loop until we see that the service is in state `RUNNING`, which is accomplished by using the client defined method [`connect_to_service()`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/canbus_client.py) (a method we implement in all of our clients).

Once we are connected to the client, we initialize the stream of responses in our server streaming RPC with the [client *stub*](https://grpc.io/docs/what-is-grpc/core-concepts/#using-the-api).

:::tip
Note that the names of the methods and protos match those defined in [canbus.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto). This is a requirement of gRPC.
:::

Now that our `CanbusClient` is connected to the canbus service and the stream of `StreamCanbusReply` messages has been requested, the fun starts.

```Python
response: canbus_pb2.StreamCanbusReply = await response_stream.read()
```
Each iteration we stop at this line and wait for the next `StreamCanbusReply` response on the queue, using the async `await` expression.

```Python
if response == grpc.aio.EOF:
    # Checks for end of stream
    break
```

With our fresh `StreamCanbusReply` in hand, we check if the message contains the end of the stream (not likely in our application since we stream until killed, but is still good practice) before proceeding.

```Python
if response and response.status == canbus_pb2.ReplyStatus.OK:
    for proto in response.messages.messages:
        amiga_tpdo1: Optional[AmigaTpdo1] = parse_amiga_tpdo1_proto(proto)
        if amiga_tpdo1:
            self.amiga_tpdo1 = amiga_tpdo1

await asyncio.sleep(0.001)
```

The `StreamCanbusReply`, defined in [canbus.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto), can contain repeated messages of format `RawCanbusMessage`.
So we iterate through these, and for each message use the `parse_amiga_tpdo1_proto()` utility to return an `AmigaTpdo1` packet, both defined in [farm_ng.canbus.packet](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/packet.py), if the message matches the id and format we expect.
Since the can bus operates as an all-to-all communication network, we have to filter out messages we aren't interested in and can't assume all messages are what we want.

:::info
This is the `AmigaTpdo1` container we added in our initializer earlier.
:::


The `AmigaTpdo1` message comes from the dashboard and contains the:
- state of the Amiga (AmigaControlState)
- measured speed (forward positive)
- measured angular rate (left positive)

:::tip
This is the information you'll use for closed loop control!
:::

Finally we sleep for 1 ms before the next iteration of the `while` loop.
Typically we sleep for 10 ms, as you'll see in `stream_camera`

- Reference: [farm_ng.canbus.canbus_client](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/canbus_client.py)
- Reference: [farm_ng.canbus.packet](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/packet.py)
- Reference: [canbus.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto)


#### drawing

We'll rename the placeholder `template_function()` and use it for drawing with kivy.
For now the only thing we need to "draw" is updating the values in the `StringProperty` strings.
So let's define two functions.

We'll add a simple utility for updating the displayed strings in the kivy `Label` widgets by parsing the values from the most recent `AmigaTpdo1` message.

```Python
def update_kivy_strings(self) -> None:
    """Updates the `StringProperty` strings displayed as `Label` widgets."""
    self.amiga_state = AmigaControlState(self.amiga_tpdo1.state).name[6:]
    self.amiga_speed = str(self.amiga_tpdo1.meas_speed)
    self.amiga_rate = str(self.amiga_tpdo1.meas_ang_rate)
```

And we'll add an `async` function called `draw()` (replacing `template_function()`) for calling this in perpetuity.

```Python
async def draw(self) -> None:
    while self.root is None:
        await asyncio.sleep(0.01)

    while True:
        self.update_kivy_strings()
        await asyncio.sleep(0.01)

```

Here we loop forever, constantly updating the `StringProperty` strings displayed as `Label` widgets, containing values from the most recent `AmigaTpdo1` message with our simple `update_kivy_strings()` method.
Each loop we also sleep for our default duration of 10ms before the next iteration.


Remember to update the function name of the `asyncio.Task` in our list in `app_func()` to:
```Python
# Drawing task(s)
self.async_tasks.append(asyncio.ensure_future(self.draw()))
```


#### command line args

Finally, we add the two arguments required by the `CanbusClientConfig`:

```Python
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
```
These are values used by gRPC to link client to server and are handled by `entry.sh`.

#### entry.sh

:::caution coming soon
Instructions for editing entry.sh to correctly use these args
:::

### Run the app - canbus stream

Now sync the app to the brain and launch it!

You should see the `AmigaTpdo1` values update in realtime as you drive the amiga and change between various command states. See [Amiga Control States](../../dashboard/control_states.mdx) and [`AmigaControlState`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/packet.py) for more information on the `state` parameter.

:::tip
Make sure all your cables are disconnected from the Amiga before driving around!
:::

![canbus_stream](https://user-images.githubusercontent.com/53625197/200458674-f596c306-f10d-48f0-b336-c69dcb774811.png)



### Add a camera stream

The next thing we'll add to our app is a camera stream.
This will:
- Use the [`OakCameraClient`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/oak/camera_client.py)
- Display images as kivy [`Image`](https://kivy.org/doc/stable/api-kivy.uix.label.html) widgets in a `TabbedPanel`.


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

Here we add another import from our [farm-ng libraries](#farm-ng-libraries).
`farm_ng.oak` is also defined in the [farm_ng_amiga](https://github.com/farm-ng/amiga-brain-api) package.


#### TabbedPanel of Image widgets
BoxLayout
To conveniently package the 4 image streams from the oak camera in the kivy `Window`, we will add the `Image` widgets as a `TabbedPanel`.
A `BoxLayout` will be convenient to stack the `TabbedPanel` of image streams next to the `Labels` displaying the `AmigaTpdo1` values steramed from the canbus.
So we push the `BoxLayout` of `Label` widgets one level deeper and add an additional `BoxLayout` level.

So we will have a `BoxLayout` that stacks 2 sub-widgets horizontally (by default) of:
1. Another `BoxLayout` with 3 vertically stacked labels
2. A [`TabbedPanel`](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html).

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

- Reference: [TabbedPanel](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html)
- Reference: [Image](https://kivy.org/doc/stable/api-kivy.uix.image.html)

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
You'll see a lot of similarity to [`stream_canbus`](#stream_canbus), as this task is also connecting to a "server streaming" RPC.

The first obvious difference you'll notice is the use of [oak.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/oak/oak.proto) definitions rather than canbus protos.

Next, when creating the `response_stream` we wrap the stub call with [`stream_frames()`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/oak/camera_client.py), but in practice the same thing is happening.
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
We've matched the tab `id:` name to the frame names coming from the [`OakService`](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/oak/oak.proto), as defined in `OakSyncFrame`, so we can easily match tab to image type by stepping through a list.

:::tip Reminder
We can access a `Widget` directly using the widget `id:` as in
```Python
FOO_WIDGET = self.root.ids['FOO_WIDGET_ID']
```
:::

We assign the kivy [`Image.texture`](https://kivy.org/doc/stable/api-kivy.uix.image.html#kivy.uix.image.Image.texture) the kivy `CoreImage.texture` from the unpacked jpg images streamed by the `OakService`.

```Python
await asyncio.sleep(0.01)
```
Lastly, we sleep for our default duration of 10ms before the next iteration.

- Reference: [farm_ng.oak.camera_client](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/oak/camera_client.py)
- Reference: [oak.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/oak/oak.proto)


#### entry.sh

:::caution coming soon
Instructions for editing entry.sh to correctly use these args
:::

### Run the app - camera stream

Now sync the app to the brain and launch it!

You should now see camera stream to the right of the `AmigaTpdo1` values from the canbus.
Check all four tabs to investigate the different camera streams provided by the oak camera.

![camera_stream](https://user-images.githubusercontent.com/53625197/200481937-5fc317bc-614d-4446-89f5-9df70471c3f6.png)


### Add the VirtualJoystickWidget

We will now define a custom widget in Python that gives an introduction to kivy drawing.
This widget will be used to drive the robot by moving the virtual joystick on the Brain screen.
The driving behavior is modelled after the behavior of driving with the joystick on the pendant.

#### imports

The imports we need to add for this step are:

```Python
from math import sqrt
from typing import Tuple

...

from kivy.graphics import Color, Ellipse  # noqa: E402
from kivy.uix.widget import Widget  # noqa: E402
```

:::tip Reminder
Remember to place all kivy imports below the `Config.set(...)` lines!
:::


#### relative_cord_in_widget

Kivy is drawn in pixel coordinates of the `Window`, starting in the bottom left, with `+x` to the right and `+y` up.
In line with this, the coordinates of a `MouseMotionEvent` (what we call a `touch`) come by default in these same `Window` coordinates.

For our virtual joystick, we want relative coordinates of the touch from the `(0, 0)` center of the widget, on the range `[-1.0, 1.0]`.
We also only want to consider touches within the `VirtualJoystickWidget`, and want to ignore touches on the `Image` or `Label` widgets.

For this purpose, we define a free function that returns the coordinates of the `touch` on the `scale` IFF it occurs within the bounds of the `widget`.
If the touch occurs outside of the widget, `None` is returned.

```Python
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
```

#### Vec2

We also define a simple container for x & y values of these relative coordinates.
The motivation is:
1. It is less likely to mix up `pose.x` and `pose.y` than it is to mix up `pose[0]` and `pose[1]`, if we left the relative coordinates as a `Tuple`.
2. This falls in line with kivy notation that tends to use the `*.x` & `*.y` notation as you will soon see
3. This allows us to clip values and force them on the range `[-1.0, 1.0]` we want from the virtual joystick.

```Python
class Vec2:
    """Simple container for keeping joystick coords in x & y terms.

    Defaults to a centered joystick (0,0). Clips values to range [-1.0, 1.0], as with the Amiga joystick.
    """

    def __init__(self, x: float = 0.0, y: float = 0.0) -> None:
        self.x: float = min(max(-1.0, x), 1.0)
        self.y: float = min(max(-1.0, y), 1.0)
```

#### VirtualJoystickWidget


The `VirtualJoystickWidget` inherits from the kivy `Widget` class, so it has all the features of a generic `Widget` and anything we add to it.
For this to actually work, it is important to initialize as:
```Python
class VirtualJoystickWidget(Widget):
    def __init__(self, **kwargs) -> None:
        super(VirtualJoystickWidget, self).__init__(**kwargs)

        self.joystick_pose: Vec2 = Vec2()
        self.joystick_rad: int = 100
```

We also add two parameters: one for the relative pose of joystick and one for the size (in pixels) to draw the joystick.



#### draw (Widget)

We define how the virtual joystick will draw here, and this function has no requirement from kivy to be named `draw`.
In this function, we draw in the widget's [`Canvas`](https://kivy.org/doc/stable/api-kivy.graphics.instructions.html).

:::info
This is the `draw()` method of the `VirtualJoystickWidget`.
It is not to be confused with the `async draw()` method of the `VirtualJoystickApp`
:::

```Python
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
```

For each call of `draw`, we erase what was previously drawn on the widget canvas with the `clear()` method.

:::caution Careful
If you are drawing on top of an `Image` widget, `clear()` will erase the image too!
:::

We draw two shapes on the canvas with the kivy [Graphics](https://kivy.org/doc/stable/api-kivy.graphics.html) package.
:::info Reminder
Kivy is drawn in pixel coordinates of the `Window`, starting in the bottom left, with `+x` to the right and `+y` up.
:::
We use [`Widget`](https://kivy.org/doc/stable/api-kivy.uix.widget.html) parameters, such as [`center`](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.center), [`pos`](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos), and [`size`](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos), to determine where to draw the stable circle representing the range of the joystick.

We do the same for the moving joystick, but map the `joystick_pose` value into pixel coordinates, and offset it from the center of the `VirtualJoystickWidget`.

- Reference: [`Canvas`](https://kivy.org/doc/stable/api-kivy.graphics.instructions.html)
- Reference: [Graphics](https://kivy.org/doc/stable/api-kivy.graphics.html)

#### draw (App)

The `draw()` method in the `VirtualJoystickApp` needs to be updated to call the `draw()` method in the `VirtualJoystickWidget` every loop.

```Python
async def draw(self) -> None:
    """Loop over drawing the VirtualJoystickWidget."""
    while self.root is None:
        await asyncio.sleep(0.01)

    joystick: VirtualJoystickWidget = self.root.ids["joystick"]
    while True:
        joystick.draw()
        self.update_kivy_strings()
        await asyncio.sleep(0.01)
```
Once the root of the kivy app is created, the `VirtualJoystickWidget` can accessed by its `id:`.

We then loop forever, continuously drawing the `VirtualJoystickWidget` and updating the `StringProperty` strings displayed as `Label` widgets, containing values from the most recent `AmigaTpdo1` message with our simple `update_kivy_strings()` method from before.

Lastly, we sleep for our default duration of 10ms before the next iteration.

#### Add to kv string

Now that we have defined our custom `Widget`, we can add it to the kv string.

At the top of the kv string, before we must declare this custom widget and that it inherits from the kivy `Widget` class.

```Python
kv = """
<VirtualJoystickWidget@Widget>:
RelativeLayout:
    Button:
        ...
```

We can then add the `VirtualJoystickWidget` in the parent `BoxLayout`, between the `BoxLayout` of `Label` widgets and the `TabbedPanel`.

```Python
VirtualJoystickWidget:
    id: joystick
```
:::tip
Ensure the `VirtualJoystickWidget` is indexed to the same level as the `BoxLayout` of `Label` widgets and the `TabbedPanel`.
:::

We then have a `BoxLayout` that stacks 3 sub-widgets horizontally (by default):
1. Another `BoxLayout` with 3 vertically stacked labels
2. A custom `Widget` called `VirtualJoystickWidget`, defined in Python
3. A [`TabbedPanel`](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html).


Since the `VirtualJoystickWidget` is fully defined in Python below, the only details we need to add is the `id:`, so the Widget can be easily referenced by the `App`.

You could add more details here to customize various `Widget` parameters, for instance a `size_hint`, but we just leave the default size to be used.


#### touch handling

If you were to sync the app to the Brain and run it now, you could see the `VirtualJoystickWidget` but it would not interact with your touches.
We need to replace the placeholder comments in the 3 touch handling functions of the `VirtualJoystickApp`, nested in the `build()` method.


In both `on_touch_down` and `on_touch_move`, we want to assign a `Vec2` of the relative coordinates of the "touch" to the `joystick_pose` member of the `VirtualJoystickWidget`.
This way the virtual joystick will move to wherever we press our finger and move it around to, within the widget.

Replace:
```Python
# Add additional on_touch_XXXXX behavior here
```
with:
```Python
joystick: VirtualJoystickWidget = self.root.ids["joystick"]

res: Optional[Tuple[float, float]] = relative_cord_in_widget(widget=joystick, touch=touch)
if res:
    # Clip to unit circle
    div: float = max(1.0, sqrt(res[0] ** 2 + res[1] ** 2))
    joystick.joystick_pose = Vec2(x=res[0] / div, y=res[1] / div)
```

Here we access the `VirtualJoystickWidget` with the `id:` value from the kv string.
We then get the relative coordinates of the "touch" in the widget.

If those coordinates are not within the widget, the `joystick_pose` is not updated.
This happens, for example, when you click on the `Image` widget or when you slide your finger from within the `VirtualJoystickWidget` widget to the `Label` widgets.

If the coordinates are within the `VirtualJoystickWidget`, we update the `joystick_pose` with the coordinates clipped to the unit circle (like a real joystick where the range of motion is circular).

For `on_touch_up`, however, we want the joystick to return to it's centered position when it is released.

Replace:
```Python
# Add additional on_touch_XXXXX behavior here
```
with:
```Python
joystick: VirtualJoystickWidget = self.root.ids["joystick"]
joystick.joystick_pose = Vec2()
```

Here we set the `joystick_pose` back to a default `Vec2` pose of `(0,0)` whenever we release our touch.

### Run the app - virtual joystick

Now sync the app to the brain and launch it!

You should now see the virtual joystick between the camera stream (far right) and the `AmigaTpdo1` values from the canbus (left).
Try moving the joystick around with your finger and releasing it, but note: It won't drive yet!

:::caution coming soon
Screen shot of virtual joystick
:::


## Old code details to pull from

:::info TODO

Final step -- format tutorial for sending can messages...

:::

#### send_can_msgs

This task ensures the canbus client `sendCanbusMessage` method has the [`pose_generator`](#pose_generator) it will use to send messages on the can bus.

This task uses the [sendCanbusMessage](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto) RPC, which defines a client stream.
The client stream can be thought of as the inverse of the server streams we've seen so far.
In this client stream, the canbus client can sends a stream of requests, of type `SendCanbusMessageRequest`, to the canbus service and receives a single message, of type `SendCanbusMessageReply`,  until the stream is explicitly stopped, or either of the client or service is killed.
In this app, we never actually stop the stream, so don't expect to receive a `SendCanbusMessageReply`.

```Python
client.stub.sendCanbusMessage(self.pose_generator())
```

The client streaming RPC is started by passing an iterator containing the messages to stream.
We use the [`Generator`](https://book.pythontips.com/en/latest/generators.html) defined in [pose_generator](#pose_generator) for our iterator.

Once the root of the kivy app is created, this task ensures the `sendCanbusMessage` RPC starts and then loops forever.
While it seems unnecessary to loop forever here, it gives you a placeholder for additional logic you may want to implement!


#### pose_generator

```Python
while self.root is None:
    await asyncio.sleep(0.01)

joystick: VirtualJoystickWidget = self.root.ids["joystick"]
```
Once the root of the kivy app is created, the `VirtualJoystickWidget` is accessed by its `id:`.

```Python
while True:
    msg: canbus_pb2.RawCanbusMessage = make_amiga_rpdo1_proto(
        state_req=AmigaControlState.STATE_AUTO_ACTIVE,
        cmd_speed=self.max_speed * joystick.joystick_pose.y,
        cmd_ang_rate=self.max_angular_rate * -joystick.joystick_pose.x,
    )
    yield canbus_pb2.SendCanbusMessageRequest(message=msg)
```
The pose generator yields an `AmigaRpdo1` (auto control command) for the canbus client to send on the bus at the specified period (recommended 50hz) based on the onscreen joystick position.
It makes use of the `make_amiga_rpdo1_proto()` method that takes a:
- requested state (AmigaControlState)
- request speed (forward positive)
- requested angular rate (left positive)

to construct a [`RawCanbusMessage`](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto).
These messages, packed into a `SendCanbusMessageRequest`, are `yield`-ed to the canbus service to send on the CAN bus.

> NOTE: The `AmigaRpdo1` message is only a request. The vehicle control unit (VCU) in the Amiga dashboard has safety critical logic that prevents unsafe auto control.

```Python
await asyncio.sleep(period)
```

We sleep to enforce the ideal rate of streaming `AmigaRpdo1` CAN messages, which is 50 hz. You can modify the period parameter, but go to slow and you lose responsiveness, and go too fast and you risk saturating the CAN bus, which can cause loss of communication between all components on the bus.

:::info Take it further
Try to add a kivy `Button` widget that toggles the requested `AmigaControlState` so the brain is not constantly trying to take control of the dashboard while running.

Or more advanced, add a button that starts/stops the sending of canbus messages.
This could require stopping the stream of messages from the generator, signalling to the `sendCanbusMessage` to stop, and re-initializing the `sendCanbusMessage` RPC later.

possible hint: sending `grpc.aio.EOF` might do it...
:::


:::info Take it further
Define two kivy [`Slider`](https://kivy.org/doc/stable/api-kivy.uix.slider.html) widgets that allow changing `max_speed` & `max_angular_rate`!
Play around with where you can put these and how you can link them directly to the value in the `VirtualJoystickApp`.

Just remember, the actual rates the amiga drives at are limited by the vehicle control unit (VCU), so don't be surprised if the true max speed doesn't reflect the slider.
:::

