---
id: auto-control
title: Auto Control
---
# Auto Control


### Control the Amiga

Finally, we will use this virtual joystick and the canbus client / service connection to control the Amiga to get us to the full Virtual Joystick example.

#### imports

The imports we need to add for this step are:

```Python
import logging
from farm_ng.canbus.packet import make_amiga_rpdo1_proto
```


#### Additional args

We'll add two `float` parameters to the `VirtualJoystickApp` in the constructor.
```Python
# Parameters
self.max_speed: float = 1.0
self.max_angular_rate: float = 1.0
```


#### send_can_msgs

To control the robot from our app, we will use the canbus client to send can messages to the canbus service.
The service will then unpack, reformat, and forward the can message onto the CAN bus.

This task uses the [sendCanbusMessage](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto) RPC, which defines a client stream.
The client stream can be thought of as the inverse of the server streams we've seen so far.
In this client stream, the canbus client can sends a stream of requests, of type `SendCanbusMessageRequest`, to the canbus service and receives a single message, of type `SendCanbusMessageReply`,  until the stream is explicitly stopped, or either of the client or service is killed.
In this app, we never actually stop the stream, so don't expect to receive a `SendCanbusMessageReply`.

The client streaming RPC is started by passing an iterator containing the messages we want to stream.
We use the [`Generator`](https://book.pythontips.com/en/latest/generators.html) defined in [pose_generator](#pose_generator) for our iterator.

```Python
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
```

This task ensures the canbus client `sendCanbusMessage` method has the [`pose_generator`](#pose_generator) it will use to send messages on the can bus.




Once the root of the kivy app is created, this task ensures the `sendCanbusMessage` RPC starts and then loops forever.
While it seems unnecessary to loop forever here, it gives you a placeholder for additional logic you may want to implement!



#### pose_generator

We create a [`Generator`](https://book.pythontips.com/en/latest/generators.html) that will run forever as an iterator.
If you're not familiar with the concept, you can think of a `Genrator` as a function that returns an array one element at a time.

```Python
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
```
Once the root of the kivy app is created, the `VirtualJoystickWidget` is accessed by its `id:`.

The pose generator yields an `AmigaRpdo1` (auto control command) for the canbus client to send on the bus at the specified period (recommended 50hz) based on the onscreen joystick position.
It makes use of the `make_amiga_rpdo1_proto()` method that takes a:
- requested state (AmigaControlState)
- request speed (forward positive)
- requested angular rate (left positive)

to construct a [`RawCanbusMessage`](https://github.com/farm-ng/amiga-brain-api/blob/main/protos/farm_ng/canbus/canbus.proto).
These messages, packed into a `SendCanbusMessageRequest`, are `yield`-ed to the canbus service to send on the CAN bus.

:::tip
The `AmigaRpdo1` message is only a request. The vehicle control unit (VCU) in the Amiga dashboard has safety critical logic that prevents unsafe auto control.
:::

Each loop we sleep to enforce the ideal rate of streaming `AmigaRpdo1` CAN messages, which is 50 hz. You can modify the period parameter, but go to slow and you lose responsiveness, and go too fast and you risk saturating the CAN bus, which can cause loss of communication between all components on the bus.


#### add as an task

Remember to add the `send_can_msgs()` method to the `asyncio.Task` in our list in `app_func()`.

```Python
self.async_tasks.append(asyncio.ensure_future(self.send_can_msgs(canbus_client)))
```


### Run the app - Amiga control

Now sync the app to the Brain and launch it with the following instructions!

:::info Deploy Instructions
[Deploy Instructions](../../brain/custom-applications.md) for syncing the app onto the Amiga Brain.
:::


Everything should look just like the last checkpoint, but now you can drive the Amiga the the virtual joystick!

:::caution
Make sure all your cables are disconnected from the Amiga and no one is in the way of the Amiga before driving around!
:::

Navigate to the auto tab and enter the `Auto Ready` state.
The Brain should take control and enter the `Auto Active` state right away, allowing you to drive with the screen.
You should see the state on the dashboard match that displayed on the Brain in your app.

:::caution Coming soon
Link to dashboard instructions to enter auto mode
:::


![auto_control](https://user-images.githubusercontent.com/53625197/200641685-a712fb2d-66f7-4ec2-bf92-e6d96c93cadb.png)

:::caution Coming soon
Link to virtual joystick example
:::
