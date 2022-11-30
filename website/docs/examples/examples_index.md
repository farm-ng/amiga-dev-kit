---
id: examples-index
title: Examples Index
---

# Amiga SDK Examples

## Brain Examples

:::info
These are the examples for developing applications for the [farm-ng Brain](../brain/).

Before getting started with any brain examples, you should install the [farm-ng Brain ADK package](/docs/brain/brain-install).
:::

### File Reader

:::caution coming soon
More details on the `file_reader` example.
For now, please refer to the[`file_reader` README](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader#readme)
:::

[Link to `file_reader/main.py`](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader/main.py)

### File Reader CAN

:::caution coming soon
More details on the `file_reader_can` example.
For now, please refer to the[`file_reader_can` README](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_can#readme)
:::

[Link to `file_reader_can/main.py`](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_can/main.py)

### [Camera Client](./camera_client/README.md)

[Link to `camera_client/main.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_client/main.py)

This example acts as an `OakCameraClient` in a standalone Python script.

### [Camera Client GUI](./camera_client_gui/README.md)

[Link to `camera_client_gui/main.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_client_gui/main.py)

This example implements the `OakCameraClient` in a GUI application using [Kivy](https://kivy.org/).


### [Virtual Joystick Tutorial](./virtual_joystick/00_overview.md)

This example application and tutorial is designed to enable you to develop your own custom applications and deploy them to the Amiga brain.

The topics covered in this tutorial include:
- Creating kivy applications
- GRPC / asyncio application development
- Streaming an Oak camera with the camera client
- Streaming Amiga state information with the canbus client
- Auto control mode of Amiga robot with the canbus client

## CircuitPython Examples

:::info
These are the examples for developing programs for the [farm-ng Micro-controller Kit](../mcu_kit/).
:::

To begin any of these examples, start by cloning the `amiga-dev-kit` repository:
```bash
cd <to_your_base_directory>
git clone git@github.com:farm-ng/amiga-dev-kit.git
```

### [Hello World Auto-mode (hello_main_loop)](./hello_main_loop/)

[Link to `hello_main_loop/code.py`](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/hello_main_loop/code.py)

:::tip
It's recommended to start with this example before proceeding to any of the others.
:::

This introductory example covers getting set up, interacting with the Amiga, and
using auto-control mode to drive your Amiga from a computer
using the [farm-ng microcontroller Kit](https://farm-ng.com/products/microcontroller-kit).

This example enables driving the Amiga by entering simple fwd / rev / left / right keyboard commands the serial port, which the app sends over the CAN bus.

Topics:

- Serial port 101
- Auto-mode control


### [Cansniffer](./cansniffer/)

[Link to `cansniffer/code.py`](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/cansniffer/code.py)

This basic example covers a simple tool for listening to all CAN Id's streaming on the bus
and measuring simple statistics about the streamed messages.
The example is inspired by the
[cansniffer command line tool from can-utils](https://manpages.debian.org/testing/can-utils/cansniffer.1.en.html).

Topics:

- CAN introduction

### [FPV](./FPV/)

[Link to `FPV/code.py`](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/FPV/code.py)

This example shows how to connect off the shelf FPV equipment to your Amiga to enable realtime video streaming and teleoperation through remote control.  This makes the Amiga remotely operable from the comfort of your office (or cab of your truck) and we're pretty psyched by how low cost and practical FPV control of the Amiga is.

Topics:

- Hardware integration
- Auto-mode control
