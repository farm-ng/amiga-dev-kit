---
id: cansniffer
title: Cansniffer Example
---

# Cansniffer

### [Link to `cansniffer/code.py`](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/cansniffer/code.py)

This example covers a simple tool for listening to all CAN Id's streaming on the bus
and measure simple statistics about the streamed messages.
The example is inspired by the
[cansniffer command line tool from can-utils](https://manpages.debian.org/testing/can-utils/cansniffer.1.en.html).

You should read through the [hello MainLoop](/examples/hello_main_loop/README.md) example first, as some required concepts are explained there.

## Parts required:

- [farm-ng microcontroller kit](https://farm-ng.com/products/microcontroller-kit) (w/ USB-C cable)

## CansnifferApp Breakdown

Here we create `CansnifferApp` as a very simple example of the types of `AppClass` you can create.

In our app, we create a `TickRepeater` that will cause our print statements to execute every 1000 ms (every second).
In those print statements (in `CansnifferApp.iter()`), we first clear the console with:
```Python
print("\033[2J", end="")
```
then print metrics about the CAN bus that are already measured by default in `MainLoop`, returned by the `debug_str()` method.
```Python
print(self.main_loop.debug_str())
```
These statistics include transmission and receive CAN errors,
as well as all CAN Id's received by the microcontroller's CAN interface, with statistics on the time between received messages for each CAN Id.

:::info Take it further:
You could also add memory statistics to the printed lines
by adding the following line to the `CansnifferApp` constructor:
```Python
self.main_loop.show_mem = True
```
:::

## CAN Introduction

In general, we *mostly* follow the CANopen standards.
A recommended reading is the [CSS Electronics CANopen tutorial](https://www.csselectronics.com/pages/canopen-tutorial-simple-intro).

:::note
Some of the third-party, auxiliary components we have integrated into the system do not allow for strict adherence to the CANopen standards.
For our core system, we adhere closely to the standards.
:::

In this standard, messages are passed using function codes based on their use.
Each component has a node ID identifier used to identify either the intended recipient or the source component of each message sent on the CAN bus.
In this way, the CAN Id (cobid) encodes both the type of message and either the intended recipient or the source of each message.

:::tip
If you are unfamiliar with CAN bus,
but are familiar with publisher/subscriber frameworks,
one way to think about this is that every component is publishing to the CAN bus.
Every other component on the CAN bus can subscribe to those messages, or ignore them.
:::

The first CANopen standard to familiarize yourself with before interacting with the Amiga dev kit is the [PDO Service](https://www.csselectronics.com/pages/canopen-tutorial-simple-intro#pdo-process-data-object) used for sharing realtime information.
Our dashboard is in constant communication with the pendant and all motor controllers.

We stream requests on the `RPDO1` channel, and respond on the `TPDO1` channel.

For example, key examples of our PDO sets include:

| Source          | Destination           | node id             | RPDO Request               | TPDO response                 |
| --------------- | --------------------- | ------------------- | -------------------------- | ----------------------------- |
| Pendant         | Dashboard             | Pendant             | Joystick, buttons          | LEDs, backlight               |
| Dashboard       | Motor Controller (x4) | Motor Controller ID | Status, rpm                | Status, voltage, rpm, current |
| Auto controller | Dashboard             | Dashboard           | State, speed, angular rate | State, speed, angular rate    |


When possible, the RPDO requests are followed and the values measured when following these requests are sent as a TPDO response.
When the requests cannot be followed, the reason should be inferable from the TPDO response.
The [Hello World Auto-mode (hello_main_loop)](/examples/hello_main_loop/README.md) provides the ability to interact directly with the Auto controller / dashboard PDO set of RPDO request & TPDO response.
To test this, try requesting control of the robot when it is *NOT* in an `AUTO READY` state.

## Instructions

:::note
Steps 1 - 3 are explained in greater detail in the [Hello Auto Mode](/examples/hello_main_loop/README.md) introductory example.
:::

1. Connect your [farm-ng microcontroller kit](https://farm-ng.com/products/microcontroller-kit) to your PC.
2. Drop the `code.py` file and the `lib/` folder directly into the root of the mounted `CIRCUITPY` drive.
3. Open the serial console.
4. You should now see the can statistics printed and updated every 1000 ms.
:::note
If the serial console is blank, click into the serial console, cancel the current execution with `crtl+C`, and soft reboot the microcontroller with `ctrl+D` .
:::

<!-- <p align="center">
<img src="./assets/cansniffer_demo.png" alt="drawing" width="300"/>
</p> -->
![cansniffer_demo](https://user-images.githubusercontent.com/53625197/187537132-e89ea79b-2ae1-4ccb-9d9a-8f3ffd899565.png)
