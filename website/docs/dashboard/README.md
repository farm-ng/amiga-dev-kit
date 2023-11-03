---
id: dashboard
title: Dashboard Overview
---

![DSCF6570-2-16x9-aspect-reduced](https://user-images.githubusercontent.com/11846963/186734463-aa149b3a-7510-4d5a-99ea-f9a8a96775d2.jpg)

### [Dashboard product page](https://farm-ng.com/products/dashboard)

## Dashboard overview video

<iframe width="560" height="315"
src="https://www.youtube.com/embed/PKOhI4hbGUs"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

## Description

Farm-ng's Dashboard is a ruggedized, waterproof, outdoor-visible touch-screen display
and machine controller - customizable through our ADK (Amiga-Dev-Kit) toolset!

Under the hood is a simple yet powerful embedded microcontroller based on Adafruit's Feather M4 CAN,
which runs CircuitPython and makes building your own custom interfaces as simple as connecting
a USB cable and writing a few lines of code.
If you've been looking for a microcontroller and display that can handle harsh environments,
look no further!

Farm-ng's Dashboard is a ruggedized, waterproof, outdoor-visible
touch-screen display and machine controller - customizable
through our ADK (Amiga-Dev-Kit) toolset!

Under the hood is a simple yet powerful embedded microcontroller
based on Adafruit's Feather M4 CAN, which runs CircuitPython and
makes building your own custom interfaces as simple as connecting
a USB cable and writing a few lines of code.  If you've been
looking for a microcontroller and display that can handle harsh
environments, look no further!

The Dashboard comes with a Wifi modem and CANbus transceiver on
board, and is powered over an industrial M12 connector compatible
with the Amiga.  Includes debug cable.

## Features overview

:::info
The farm-ng Dash display is a Beta early release product, specification and rating are subject to change
:::

| Specifications       |                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Input Power          | 12/24 volts (9-28vdc)                                                                                                 |
| Power consumption    | ~2.5 watts, < 5watts (depending usage, wifi, and brightness)                                                           |
| Screen               | 4.3" High brightness (850cd/m2) optically bonded IPS display, 480x272 resolution                                      |
| Touch                | Industrial capacitive touch screen controller, tunable for gloves and wet environment (Tuning requires customization) |
| Microcontroller      | Microchip SAM ATSAME51 32-Bit Arm Cortex M4 running at 120MHz                                                         |
| Ecosystem            | Circuitpython based development, compatible with Adafruit Feather M4 CAN                                              |
| Environmental rating | IP65 (Validation pending)                                                                                             |
| Temp rating          | -20c to -70c ambient                                                                                                  |
| Vibration and Shock  | TBD                                                                                                                   |
| Basic dimensions     | xxx (Not including shroud)                                                                                            |
| Weight               | TBD                                                                                                                   |

## Mechanical

## Connections

![Dash_Connectors](https://user-images.githubusercontent.com/53625197/187535995-d4ad8c7c-05a0-482b-8be9-6b6fb6b87ac3.png)

### Pinouts

![Dash_Pinout](https://user-images.githubusercontent.com/53625197/187536079-a3c71c29-d13d-4c54-a343-5960ef98c793.png)

### CAN/Power input

Mating connector M12-5 A code female

| PIN | Description   | Typical Wire Color | Notes                                                        |
| --- | ------------- | ------------------ | ------------------------------------------------------------ |
| 1   | Shield        | Bare/Green         | Should only be grounded at one end                           |
| 2   | Supply +24vdc | Red                | farm-ng uses 24v                                             |
| 3   | GND           | Black              |                                                              |
| 4   | CAN_High      | White              | Needs at least one termination, and two devices to function. |
| 5   | CAN_Low       | Blue               | Needs at least one termination, and two devices to function. |

### CAN/Power output (accessories)

Mating connector M12-5 A code male

| PIN | Description   | Typical Wire Color | Notes                                                        |
| --- | ------------- | ------------------ | ------------------------------------------------------------ |
| 1   | Shield        | Bare/Green         | Should only be grounded at one end                           |
| 2   | Supply +24vdc | Red                | farm-ng uses 24v                                             |
| 3   | GND           | Black              |                                                              |
| 4   | CAN_High      | White              | Needs at least one termination, and two devices to function. |
| 5   | CAN_Low       | Blue               | Needs at least one termination, and two devices to function. |

### Debug

Mating connector M12-8 A code female

Debug wire colors based on common cable with flying leads used on
farm-ng built debug kits.

| PIN | Description   | Typical Wire Color | Notes                      |
| --- | ------------- | ------------------ | -------------------------- |
| 1   | RESET         | White              |                            |
| 2   | TTL RX (3.3v) | Brown              | Connect to TX of interface |
| 3   | TTL TX (3.3v) | Green              | Connect to RX of interface |
| 4   | USB D-        | Yellow             |                            |
| 5   | UDB D+        | Gray               |                            |
| 6   | USB VBUS      | Pink               |                            |
| 7   | NC            | Blue               |                            |
| 8   | GND           | Black              |                            |
