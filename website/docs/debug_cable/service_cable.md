---
id: service-cable
title: Service Cable Overview
---

# farm-ng Service Cable

![IMG-9583](https://user-images.githubusercontent.com/64480560/205402624-fa7d8a61-4017-4691-9d24-d6d3ebdeb359.jpg)

## Overview

Cable used to update and service farm-ng products. It includes
rest functionality along with USB communication.

![IMG-9585](https://user-images.githubusercontent.com/64480560/205402615-a182d74f-ea46-437b-ad3f-f02f4efbb28d.jpg)

### Product specific uses

#### Dashboard

- USB interface is for REPL, filesystem access as well as
updating firmware and applications,

#### How to connect

![187535995-d4ad8c7c-05a0-482b-8be9-6b6fb6b87ac3](https://user-images.githubusercontent.com/64480560/206007745-b36c59c7-22dd-4435-9cae-8503956174f3.png)

**Connect cable to the debug port on the back of dashboard**

#### REPL for BOOTLOADER State

These commands from the REPL will put the device into the
bootloader state the same way the double press reset on  would.

##### On Linux/ WSL

```
sudo screen /dev/ttyACM0

import microcontroller
microcontroller.on_next_reset(microcontroller.RunMode.BOOTLOADER)
microcontroller.reset()
```

**See update process documentation for more information**
**[here](/docs/dashboard/fw_updates.md)**

**See flashing and operating system documentation for more**
**information [here](/docs/brain/README.md)**

## Pinout

| PIN | Description   | Typical Wire Color | Notes                      |
| --- | ------------- | ------------------ | -------------------------- |
| 1   | USB D-        | Yellow             |                            |
| 2   | USB D+        | Gray               |                            |
| 3   | USB VBUS      | Pink               |                            |
| 4   | NC            | Blue               |                            |
| 5   | GND           | Black              |                            |
