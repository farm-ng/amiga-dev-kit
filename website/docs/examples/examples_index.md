---
id: examples-index
title: Examples Index
---

# Amiga SDK Examples

## CircuitPython Examples

:::info
These are the examples for developing programs for the
[**farm-ng microcontroller kit**](../mcu_kit/).
:::

Before attempting any of these examples make sure you have
already cloned the `amiga-dev-kit` repository, If you have not
follow the instructions listed
[**here**](/docs/contribute/website.mdx)

### [Hello World Auto-mode (hello_main_loop)](./hello_main_loop/)

[**Link to `hello_main_loop/code.py`**](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/hello_main_loop/code.py)

:::tip
It's recommended to start with this example before proceeding to
any of the others.
:::

This introductory example covers getting set up, interacting with
the Amiga, and
using auto-control mode to drive your Amiga from a computer
using the
[**farm-ng microcontroller kit**](https://farm-ng.com/products/microcontroller-kit).

This example enables driving the Amiga by entering simple fwd /
rev / left / right keyboard commands the serial port, which the
app sends over the CAN bus.

Topics:

- Serial port 101
- Auto-mode control

### [Cansniffer](./cansniffer/)

[**Link to `cansniffer/code.py`**](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/cansniffer/code.py)

This basic example covers a simple tool for listening to all CAN
Id's streaming on the bus
and measuring simple statistics about the streamed messages.
The example is inspired by the
[**cansniffer command line tool from can-utils**](https://manpages.debian.org/testing/can-utils/cansniffer.1.en.html).

Topics:

- CAN introduction

### [FPV](./FPV/)

[**Link to `FPV/code.py`**](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/FPV/code.py)

This example shows how to connect off the shelf FPV equipment to
your Amiga to enable realtime video streaming and teleoperation
through remote control.  This makes the Amiga remotely operable
from the comfort of your office (or cab of your truck) and we're
pretty psyched by how low cost and practical FPV control of the
Amiga is.

Topics:

- Hardware integration
- Auto-mode control

### Other examples

#### Bumpers

[**Link to `bumpers/code.py`**](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/bumpers/code.py)

The bumpers example shows how to use the ***experimental***
safety device API on the Amiga dashboard.
Since this is still experimental, it's not documented as a full
example until the safety devices API is released as a stable
feature
in the dashboard firmware.

> NOTE: We're targeting the `v0.1.9` release for this feature,
with a planned date in April 2023.

In the meantime, we'll still link the README and code for the
[bumpers example](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/bumpers)
to get you inspired about how easy it will be for you to develop
your own safety devices to add them to your Amiga!

## Brain ADK Examples

:::info
These are the examples that run on your personal computer for
interacting with recorded logs and active services running on the
Amiga Brain.

Before getting started with any brain examples, you should
install the
[**farm-ng Brain ADK package**](/docs/brain/brain-install).
:::

### [Events Recorder](/docs/examples/events_recorder/README.md)

[**Link to `event_recorder/main.py`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/event_recorder/main.py)

This example records events from the Brain using the `EventClient` class.

### [File Reader](/docs/examples/file_reader/README.md)

[**Link to `file_reader/main.py`**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader/main.py)

This example reads log files and plays their contents.

### [File Reader CAN](/docs/examples/file_reader_can/README.md)

[**Link to`file_reader_can`**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_can)

This example reads the Can data from recorded logs and prints it
out.

### [Camera Client](./camera_client/README.md)

[**Link to `camera_client/main.py`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_client/main.py)

This example acts as an `OakCameraClient` in a standalone Python
script.

### [Developing Custom Applications](/docs/brain/custom-applications.mdx)

:::caution deprecation warning
This is out-of-date for brains running `v2.x` Amiga OS software.<br/>
This tutorial only applies to brains running Amiga OS `v1.x` versions.<br/>
Please check back for an updated tutorial for brains running `v2.x` Amiga OS software.
:::

This takes you through the steps of creating your own app with
the use of an app template and deploying and testing it on the
Amiga.

### [Amiga ROS Bridge](/docs/brain/ros-bridge.md)

:::caution deprecation warning
This is out-of-date for brains running `v2.x` Amiga OS software.<br/>
This tutorial only applies to brains running Amiga OS `v1.x` versions.<br/>
Please check back for an updated tutorial for brains running `v2.x` Amiga OS software.
:::

This takes you through the steps of setting up the Amiga ROS bridge
for controlling the Amiga robot using your existing ROS nodes.

## Not seeing what you need?

Reach out to us by creating a [Documentation Request](/docs/support/#documentation-request)
based on the instructions on our support page.
