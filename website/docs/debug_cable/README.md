---
id: debug-cable
title: Debug Cable Overview
---

# farm-ng Debug Cable

![IMG_9574](https://user-images.githubusercontent.com/64480560/205400778-1bfa084c-a187-4f42-8840-7b91714ab7f0.jpg)
## Overview

Cable used to update and debug farm-ng products. It includes rest functionality along with USB and serial communication.

The larger circuit board on the left is the USB / debug breakout, and the smaller board on the right is the serial interface.

![IMG_9578](https://user-images.githubusercontent.com/64480560/205400599-f79e0cae-35f3-4610-bbcf-9a4e50857fac.jpg)

### Product specific uses


#### How to Connect
![187535995-d4ad8c7c-05a0-482b-8be9-6b6fb6b87ac3](https://user-images.githubusercontent.com/64480560/206007745-b36c59c7-22dd-4435-9cae-8503956174f3.png)



#### Dash

- USB interface is for REPL, filesystem access as well as updating firmware and applications,
- Serial interface is not used at the moment
- Reset is connected to the Microcontroller reset and used for hard reset. It also can be double pressed to force bootloader mode.

**See update process documentation for more information**

#### Brain

- USB interface is used for connecting for lashing images
- Serial interface is used for operating system terminal
- Reset / Flash button is used for enabling the firmware update mode (press on boot)

**See flashing and operating system documentation for more information**

## Pinout

Connector M12-8 A code female used to connect to farm-ng products. The debug cable connects the IO to two MicroUSB connectors and a reset button.

Debug wire colors based on common cable with flying leads used on farm-ng built debug kits.

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
