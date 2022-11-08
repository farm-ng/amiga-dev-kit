---
id: canbus-stream
title: Canbus Stream
---
# Canbus Stream


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

:::caution
Make sure all your cables are disconnected from the Amiga before driving around!
:::

![canbus_stream](https://user-images.githubusercontent.com/53625197/200458674-f596c306-f10d-48f0-b336-c69dcb774811.png)


:::caution Coming soon
Link to this checkpoint
:::