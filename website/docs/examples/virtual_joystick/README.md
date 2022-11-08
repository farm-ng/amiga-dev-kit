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
        if isinstance(touch, MouseMotionEvent) and int(os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)):
            return True
        for w in window.children[:]:
            if w.dispatch("on_touch_down", touch):
                return True

        # Add additional on_touch_down behavior here

        return False

    def on_touch_move(window: Window, touch: MouseMotionEvent) -> bool:
        """Handles when press is held and dragged with mouse click or touchscreen."""
        if isinstance(touch, MouseMotionEvent) and int(os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)):
            return True
        for w in window.children[:]:
            if w.dispatch("on_touch_move", touch):
                return True

        # Add additional on_touch_move behavior here

        return False

    def on_touch_up(window: Window, touch: MouseMotionEvent) -> bool:
        """Handles release of press with mouse click or touchscreen."""
        if isinstance(touch, MouseMotionEvent) and int(os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)):
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

    # Placeholder task(s)
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


### Canbus Stream

...






## Old code details to pull from


### imports

~~We start with generic Python imports that are used in the app,~~
followed by imports from our [farm-ng libraries](#farm-ng-libraries) such as `farm_ng.canbus` and `farm_ng.oak`.
These are both defined in the [farm_ng_amiga](https://github.com/farm-ng/amiga-brain-api) package.

The imports ending in `*_pb2` are the compiled `*.proto` definitions we ause in the app.
For example,
```Python
from farm_ng.canbus import canbus_pb2
```
imports the proto messages defined in [canbus.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto).





#### BoxLayout
Kivy has the concept of nesting, so you may notice in our app we have
3 `Label` widgets in a `BoxLayout`, which is in another `BoxLayout`, which itself is in the base `RelativeLayout`.

We then have a box layout that stacks 3 sub-widgets horizontally (by default):
1. Another BoxLayout with 3 vertically stacked labels
2. A custom `Widget` called `VirtualJoystickWidget`, defined in Python below
3. A [`TabbedPanel`](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html).

- Reference: [Box Layout](https://kivy.org/doc/stable/api-kivy.uix.boxlayout.html)

#### Labels

We define 3 labels that are live updated with class variables from the `VirtualPendantApp`.
In order to update the value, e.g.
```Python
Label:
    text: "state:\\n" + str(app.amiga_state)
```
the values must be declared as a `StringProperty` of the class
before the class is initialized and should be defined as type `str`, as in:
```Python
class VirtualPendantApp(App):
    # For kivy labels
    amiga_speed = StringProperty()
    amiga_rate = StringProperty()
    amiga_state = StringProperty()

    def __init__(
        ...
        self.amiga_state: str = "foo"
        self.amiga_speed: str = "bar"
        self.amiga_rate: str = "baz"
        ...
```

- Reference: [Label](https://kivy.org/doc/stable/api-kivy.uix.label.html)
- Reference: [StringProperty](https://kivy.org/doc/stable/api-kivy.properties.html#kivy.properties.StringProperty)

#### VirtualJoystickWidget

Since the `VirtualJoystickWidget` is fully defined in Python below, the only details we need to add is the `id:`, so the Widget can be easily referenced by the `App`.
This is done with:

```Python
FOO_WIDGET = self.root.ids['FOO_WIDGET_ID']
```
We could add more details here to define various `Widget` parameters, for instance a `size_hint`, but we just leave the default size to be used.

#### TabbedPanel

The `TabbedPanel` is used to select between different pages, which in our case is 4 `Image` Widgets.

- Reference: [TabbedPanel](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html)
- Reference: [Image](https://kivy.org/doc/stable/api-kivy.uix.image.html)

#### Take it further

Define two kivy [`Slider`](https://kivy.org/doc/stable/api-kivy.uix.slider.html) widgets that allow changing `max_speed` & `max_angular_rate`!
Play around with where you can put these and how you can link them directly to the value in the `VirtualPendantApp`.

Just remember, the actual rates the amiga drives at are limited by the vehicle control unit (VCU), so don't be surprised if the true max speed doesn't reflect the slider.


### VirtualJoystickWidget

The `VirtualJoystickWidget` inherits from the kivy `Widget` class, so it has all the features of a generic `Widget` and anything we add to it.
For this to actually work, it is important to initialize as:
```Python
class VirtualJoystickWidget(Widget):
    def __init__(self, **kwargs) -> None:
        super(VirtualJoystickWidget, self).__init__(**kwargs)
```


#### draw

We define how the virtual joystick will draw here, and this function has no requirement from kivy to be named `draw`.
In this function, we draw in the widget's [`Canvas`](https://kivy.org/doc/stable/api-kivy.graphics.instructions.html).

For each call of `draw`, we erase what was previously drawn on the widget canvas.

```Python
self.canvas.clear()
```

> NOTE: Careful, if you are drawing on top of an `Image` widget this will erase the image too!

We draw two shapes on the canvas with the kivy [Graphics](https://kivy.org/doc/stable/api-kivy.graphics.html) package.
Kivy is drawn in pixel coordinates of the `Window`, starting in the bottom left, with `+x` to the right and `+y` up.

We use [`Widget`](https://kivy.org/doc/stable/api-kivy.uix.widget.html) parameters, such as [`center`](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.center), [`pos`](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos), and [`size`](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos), to determine where to draw the stable circle representing the range of the joystick.

We do the same for the moving joystick, but map the `joystick_pose` value into pixel coordinates, and offset it from the center of the `VirtualJoystickWidget`.

- Reference: [`Canvas`](https://kivy.org/doc/stable/api-kivy.graphics.instructions.html)

- Reference: [Graphics](https://kivy.org/doc/stable/api-kivy.graphics.html)

### VirtualPendantApp:

The `VirtualPendantApp` inherits from the kivy `App` class, so it has all the features of a generic `App` and anything we add to it.

This initialization / inheritance is less strict, requiring only:

```Python
class VirtualPendantApp(App):
    def __init__(self, FOO_ARG, BAR_ARG, BAZ_ARG)-> None:
        super().__init__()
        ...
```




#### gRPC service clients

First, we configure and create the gRPC clients that will connect to the gRPC services running in the background of the brain.
The clients are part of the farm-ng API, specifically [farm_ng_amiga](https://github.com/farm-ng/amiga-brain-api).

The clients define an API that allows you to interact with the services. See [`CanbusClient`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/canbus_client.py) for an example.

#### async_tasks

We then build the list of asyncio tasks, defined as:

```Python
# self.async_tasks: List[asyncio.Task]
self.async_tasks.append(
        asyncio.ensure_future(FOO_ASYNC_TASK())
    )
```

These tasks include the app specific functions, defined in app, as well as two generic the `poll_service_state()` method required for all clients.
`poll_service_state()` regularly checks the state of the gRPC service the client is connected to, and updates the `state` parameter of the client.
The `state` can then be checked wherever relevant in the app to ensure the services are running.
It's recommended to check this state every iteration in each asynchronous loop.


#### stream_canbus

This task:
- listens to the canbus client's stream
- filters for `AmigaTpdo1` messages
- extracts useful values from `AmigaTpdo1` messages




```Python
response_stream: Optional[Generator[canbus_pb2.StreamCanbusReply]] = None
```

Here we are being explicit the type of stream we will be connecting to / declaring the type `response_stream` will contain (with the `Optional` decorator because it starts as `None` until we are ready to initialize it), but you may need a little more gRPC understanding to create this line.

##### gRPC life cycle deep dive

As explained in the [gRPC core concepts - RPC life cycle](https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-life-cycle) section, there are 4 types server methods.

- [Unary](https://grpc.io/docs/what-is-grpc/core-concepts/#unary-rpc): single request -> single response
- [Server streaming](https://grpc.io/docs/what-is-grpc/core-concepts/#server-streaming-rpc): single request -> stream of responses
- [Client streaming](https://grpc.io/docs/what-is-grpc/core-concepts/#client-streaming-rpc): stream of requests -> single response
- [Bidirectional streaming](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc): stream of requests -> stream of responses

##### Back to stream_canbus

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

> NOTE: Note the names of the methods and protos match those defined in [canbus.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto). This is a requirement of gRPC.

Now that our `CanbusClient` is connected to the canbus service and the stream of `StreamCanbusReply` messages has been requested, the fun starts.

```Python
response: canbus_pb2.StreamCanbusReply = await response_stream.read()
```
Each iteration we stop at this line and wait for the next `StreamCanbusReply` response on the queue, using the async `await` expression.

```Python
if response == grpc.aio.EOF:
    # Checks for end of stream
    break
if response and response.status == canbus_pb2.ReplyStatus.OK:
    for proto in response.messages.messages:
        amiga_tpdo1: Optional[AmigaTpdo1] = parse_amiga_tpdo1_proto(proto)
        if amiga_tpdo1:
            self.amiga_tpdo1 = amiga_tpdo1

await asyncio.sleep(0.001)
```

With our fresh `StreamCanbusReply` in hand, we check if the message contains the end of the stream (not likely in our application since we stream until killed, but is still good practice) before proceeding.

The `StreamCanbusReply`, defined in [canbus.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto), can contain repeated messages of format `RawCanbusMessage`.
So we iterate through these, and for each message use the `parse_amiga_tpdo1_proto()` utility to return an `AmigaTpdo1` packet, both defined in [farm_ng.canbus.packet](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/packet.py), if the message matches the id and format we expect.
Since the can bus operates as an all-to-all communication network, we have to filter out messages we aren't interested in and can't assume all messages are what we want.

The `AmigaTpdo1` message comes from the dashboard and contains the:
- state of the Amiga (AmigaControlState)
- measured speed (forward positive)
- measured angular rate (left positive)

> NOTE: This is the information you'll use for closed loop control!

```Python
# Shorter sleep than typical 10ms since canbus is very high rate
await asyncio.sleep(0.001)
```
Finally we sleep for 1 ms before the next iteration of the `while` loop.
Typically we sleep for 10 ms, as you'll see in `stream_camera`

- Reference: [farm_ng.canbus.canbus_client](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/canbus_client.py)

- Reference: [farm_ng.canbus.packet](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/canbus/packet.py)

- Reference: [canbus.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto)


#### stream_camera

This task listens to the camera client's stream and populates the tabbed panel with all 4 image streams from the oak camera.
You'll see a lot of similarity to [`stream_canbus`](#stream_canbus), as this task is also connecting to a server streaming RPC.

The first obvious difference you'll notice is the use of [oak.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/oak/oak.proto) definitions rather than canbus protos.


Next, when creating the `response_stream` we wrap the stub call with [`stream_frames()`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/oak/camera_client.py), but in practice the same thing is happening. The `StreamFramesRequest` does take an argument called `every_n` which is used to skip frames if you want to throttle the rate of images in the stream.
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

> NOTE: Reminder we can access a `Widget` directly using the widget `id:` as in
```Python
FOO_WIDGET = self.root.ids['FOO_WIDGET_ID']
```
We assign the kivy [`Image.texture`](https://kivy.org/doc/stable/api-kivy.uix.image.html#kivy.uix.image.Image.texture) the kivy `CoreImage.texture` from the unpacked jpg images streamed by the `OakService`.

```Python
await asyncio.sleep(0.01)
```
Lastly, we sleep for our default duration of 10ms before the next iteration.

- Reference: [farm_ng.oak.camera_client](https://github.com/farm-ng/amiga-brain-api/blob/main/py/farm_ng/oak/camera_client.py)

- Reference: [oak.proto](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/oak/oak.proto)


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

##### Take it further

Try to add a kivy `Button` widget that toggles the requested `AmigaControlState` so the brain is not constantly trying to take control of the dashboard while running.

Or more advanced, add a button that starts/stops the sending of canbus messages.
This could require stopping the stream of messages from the generator, signalling to the `sendCanbusMessage` to stop, and re-initializing the `sendCanbusMessage` RPC later.

possible hint: sending `grpc.aio.EOF` might do it...


#### draw

```Python
while self.root is None:
    await asyncio.sleep(0.01)

joystick: VirtualJoystickWidget = self.root.ids["joystick"]
```
Once the root of the kivy app is created, the `VirtualJoystickWidget` is accessed by its `id:`.

We then loop forever, explicitly drawing the `VirtualJoystickWidget` and updating the `StringProperty` strings displayed as `Label` widgets, containing values from the most recent `AmigaTpdo1` message with our simple `update_kivy_strings()` method.

```Python
await asyncio.sleep(0.01)
```
Lastly, we sleep for our default duration of 10ms before the next iteration.
