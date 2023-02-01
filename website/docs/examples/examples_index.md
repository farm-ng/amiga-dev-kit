---
id: examples-index
title: Examples Index
---

# Amiga SDK Examples

## CircuitPython Examples

:::info
These are the examples for developing programs for the [**farm-ng microcontroller kit**](../mcu_kit/).
:::

Before attempting any of these examples make sure you have already cloned the `amiga-dev-kit` repository, If you have not follow the instructions listed [**here**](/docs/contribute/website.mdx)

### [Hello World Auto-mode (hello_main_loop)](./hello_main_loop/)

[**Link to `hello_main_loop/code.py`**](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/hello_main_loop/code.py)

:::tip
It's recommended to start with this example before proceeding to any of the others.
:::

This introductory example covers getting set up, interacting with the Amiga, and
using auto-control mode to drive your Amiga from a computer
using the [**farm-ng microcontroller kit**](https://farm-ng.com/products/microcontroller-kit).

This example enables driving the Amiga by entering simple fwd / rev / left / right keyboard commands the serial port, which the app sends over the CAN bus.

Topics:

- Serial port 101
- Auto-mode control


### [Cansniffer](./cansniffer/)

[**Link to `cansniffer/code.py`**](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/cansniffer/code.py)

This basic example covers a simple tool for listening to all CAN Id's streaming on the bus
and measuring simple statistics about the streamed messages.
The example is inspired by the
[**cansniffer command line tool from can-utils**](https://manpages.debian.org/testing/can-utils/cansniffer.1.en.html).

Topics:

- CAN introduction

### [FPV](./FPV/)

[**Link to `FPV/code.py`**](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/FPV/code.py)

This example shows how to connect off the shelf FPV equipment to your Amiga to enable realtime video streaming and teleoperation through remote control.  This makes the Amiga remotely operable from the comfort of your office (or cab of your truck) and we're pretty psyched by how low cost and practical FPV control of the Amiga is.

Topics:

- Hardware integration
- Auto-mode control

## Brain ADK Examples

:::info
These are the examples that run on your personal computer for interacting with recorded logs and active services running on the Amiga Brain.

Before getting started with any brain examples, you should install the [**farm-ng Brain ADK package**](/docs/brain/brain-install).
:::

### [File Reader](/docs/examples/file_reader/README.md)

:::caution coming soon
More details on the `file_reader` example.
For now, please refer to the[**`file_reader` README**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader#readme)
:::

[**Link to `file_reader/main.py`**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader/main.py)

### [File Reader CAN](/docs/examples/file_reader_can/README.md)

:::caution coming soon
More details on the `file_reader_can` example.
For now, please refer to the[**`file_reader_can` README**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_can#readme)
:::

[**Link to `file_reader_can/main.py`**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_can/main.py)

### [Camera Client](./camera_client/README.md)

[**Link to `camera_client/main.py`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_client/main.py)

This example acts as an `OakCameraClient` in a standalone Python script.

## Brain App Tutorials

These are the examples for ready-to-run apps and learning how you can develop your own custom applications for the [**farm-ng Brain**](/docs/brain/).

:::tip
The tutorials build off of one another and are better when followed in order.
:::

### [00 - Tutorial Introduction](/docs/tutorials/introduction/tutorial-introduction)


This tutorial introduces necessary background knowledge and walks you through the [**`amiga-app-template`**](https://github.com/farm-ng/amiga-app-template).

The topics covered in this tutorial include:
- Creating kivy applications
- GRPC / asyncio application development

### [01 - Camera Streamer Tutorial](/docs/tutorials/camera_streamer/camera-streamer-overview)

This tutorial is designed to teach you to implement the `OakCameraClient` in a GUI application using [**Kivy**](https://kivy.org/) following along the [**`camera-streamer`**](https://github.com/farm-ng/camera-streamer) example application built using the [**`amiga-app-template`**](https://github.com/farm-ng/amiga-app-template).

The topics covered in this tutorial include:
- Creating kivy applications
- GRPC / asyncio application development
- Streaming an Oak camera with the camera client

### [02 - Virtual Joystick Tutorial](/docs/tutorials/virtual_joystick/virtual-joystick-overview)

This tutorial is designed to enable you to develop your own custom applications that uses camera streams and controls your Amiga over the CAN bus following along the [**`virtual-joystick`**](https://github.com/farm-ng/virtual-joystick) example application built using the [**`amiga-app-template`**](https://github.com/farm-ng/amiga-app-template).

The topics covered in this tutorial include:
- Creating kivy applications
- GRPC / asyncio application development
- Streaming an Oak camera with the camera client
- Streaming Amiga state information with the canbus client
- Auto control mode of Amiga robot with the canbus client


### [Developing Custom Applications](/docs/brain/custom-applications.mdx)

This takes you through the steps of creating your own app with the use of an app template and deploying and testing it on the Amiga.
