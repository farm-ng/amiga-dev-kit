---
id: examples
title: Examples Index
---

# Amiga SDK Examples

## [Hello World Auto-mode (hello_main_loop)](/examples/hello_main_loop/README.md)

This introductory example covers getting set up, interacting with the Amiga, and
using auto-control mode to drive your Amiga from a computer
using the [farm-ng microcontroller Kit](https://farm-ng.com/products/microcontroller-kit).

This example enables driving the Amiga by entering simple fwd / rev / left / right keyboard commands the serial port, which the app sends over the CAN bus.

Topics:

- Serial port 101
- Auto-mode control


## [Cansniffer](/examples/cansniffer/README.md)

This basic example covers a simple tool for listening to all CAN Id's streaming on the bus
and measuring simple statistics about the streamed messages.
The example is inspired by the
[cansniffer command line tool from can-utils](https://manpages.debian.org/testing/can-utils/cansniffer.1.en.html).

Topics:

- CAN introduction

## [FPV](/examples/FPV/README.md)

This example shows how to connect off the shelf FPV equipment to your Amiga to enable realtime video streaming and teleoperation through remote control.  This makes the Amiga remotely operable from the comfort of your office (or cab of your truck) and we're pretty psyched by how low cost and practical FPV control of the Amiga is.

Topics:

- Hardware integration
- Auto-mode control