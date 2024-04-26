---
id: debug-cable
title: Debug Cable Overview
---

# farm-ng Debug Cable

![image](https://user-images.githubusercontent.com/64480560/236905673-456671a1-9930-416b-af00-9c489addc206.png)

## Overview

Cable is used to update and debug farm-ng products.
It includes reset functionality along with USB and serial communication.

The `debug cable` has a single circuit board with two ports connected to it.
On the left is the USB / debug breakout, and on the right is the serial interface.

:::caution
It is required to have a data USB-C cable and not a charge only USB-C cable
when connecting to the debug or service cable.
:::

![IMG_9578](https://user-images.githubusercontent.com/64480560/205400599-f79e0cae-35f3-4610-bbcf-9a4e50857fac.jpg)

### Product specific uses

#### How to Connect

Connect cable to the debug port on the back of the dashboard

![187535995-d4ad8c7c-05a0-482b-8be9-6b6fb6b87ac3](https://user-images.githubusercontent.com/64480560/206007745-b36c59c7-22dd-4435-9cae-8503956174f3.png)

#### Dash

- USB interface is for REPL, filesystem access as well as
updating firmware and applications,
- Serial interface is not used at the moment
- A reset button is connected to the Microcontroller and used for
hard reset. It also can be double pressed to force bootloader
mode.

**See update process documentation for more information [here](/docs/dashboard/fw_updates.md)**

#### Brain

- USB interface is used for connecting for lashing images
- Serial interface is used for operating system terminal
- Reset / Flash button is used for enabling the firmware update
mode (press on boot)

**For more flashing and operating system documentation go [here](/docs/intelligence-kit/brain/brain-v2/)**

## Pin-out

Connector M12-8 A code female used to connect to farm-ng products.
The debug cable connects the IO to two MicroUSB connectors and a reset button.

Debug wire colors based on common cable with flying leads used on
farm-ng built debug kits.

| PIN | Description   | Typical Wire Color | Notes                      |
| --- | ------------- | ------------------ | -------------------------- |
| 1   | RESET         | Black              |                            |
| 2   | TTL RX (3.3v) | Brown              | Connect to TX of interface |
| 3   | TTL TX (3.3v) | Red                | Connect to RX of interface |
| 4   | USB D-        | Yellow             |                            |
| 5   | UDB D+        | Green              |                            |
| 6   | USB VBUS      | Blue               |                            |
| 7   | NC            | Gray               |                            |
| 8   | GND           | White              |                            |
