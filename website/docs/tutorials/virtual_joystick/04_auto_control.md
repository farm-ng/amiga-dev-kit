---
id: auto-control
title: 04 - Auto Control
---
# Auto Control

Finally, we will use this virtual joystick and the canbus
client / service connection to control the Amiga to complete the
full Virtual Joystick example.

### Control the Amiga

This is done with a third forever-running `asyncio` task for
sending CAN messages.

This task waits for a `RUNNING` canbus client state,
to ensure there is feedback on the measured speeds before sending
any commands.
This is a must for closed loop control!

Once the canbus client is in a full `RUNNING` state,
the task initializes the
[**Bidirectional streaming RPC**](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc)
called
[**sendCanbusMessage**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto).

This passes a
[**`Python Generator`**](https://wiki.python.org/moin/Generators)
that constructs and yields a `SendCanbusMessageRequest`
containing a `RawCanbusMessage`,
both proto definitions from [**canbus.proto**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto).

The `RawCanbusMessage` encodes an
[**`AmigaRpdo1`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py)
auto control request that is forward by the canbus service to the
Amiga dashboard.
This includes requested state, speed, and angular rate of the
Amiga.
As you can see, the requested speed and angular rate are based on
the position of the `VirtualJoystickWidget`.

:::tip
The `AmigaRpdo1` message is only a request. The vehicle control
unit (VCU) in the Amiga dashboard has safety critical logic that
prevents unsafe auto control.
:::

Because this is a bi-directional stream, a response is returned
for each `RawCanbusMessage` the generator yields.
We can check the status of each of these responses, and exit the
generator loop if the service does not respond with a confirmed
`success`.
Once the canbus service is ready for streaming control again, it
should re-initiate automatically.

#### generator details

The pose generator yields an [**`AmigaRpdo1`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py)
(auto control command) for the canbus client to send on the bus
at the specified period (recommended 50hz) based on the on-screen
joystick position.

Each loop of the generator we sleep to enforce the ideal rate of
streaming `AmigaRpdo1` CAN messages, which is 50 hz.
You can modify the period parameter, but go too slow and you lose
responsiveness, and go too fast and you risk saturating the CAN
bus, which can cause loss of communication between all components
on the bus.

#### Add this as a task

Remember to add the `send_can_msgs()` method to the `asyncio.
Task` in our list in `app_func()`!

### Run it

Now sync the app to the Brain and launch it.

:::caution
Make sure all your cables are disconnected from the Amiga and no
one is in the way of the Amiga before driving around!
:::

Everything should look just like the last checkpoint, but now you
can drive the Amiga the the virtual joystick!

Navigate to the auto tab on the dashboard and enter the `Auto
Ready` state.
The Brain should take control and enter the `Auto Active` state
right away, allowing you to drive with the screen.
You should see the state on the dashboard match that displayed on
the Brain in your app.

![auto_control](https://user-images.githubusercontent.com/53625197/200641685-a712fb2d-66f7-4ec2-bf92-e6d96c93cadb.png)
