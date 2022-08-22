# farm-ng Dash

<img src="resources/Dash_Iso.png" alt="Dash_Iso" style="zoom:50%;" />



## Description
Farm-ng's Dashboard is a ruggedized, waterproof, outdoor-visible touch-screen display and machine controller - customizable through our ADK (Amiga-Dev-Kit) toolset!

Under the hood is a simple yet powerful embedded microcontroller based on Adafruit's Feather M4 CAN, which runs CircuitPython and makes building your own custom interfaces as simple as connecting a USB cable and writing a few lines of code.  If you've been looking for a microcontroller and display that can handle harsh environments, look no further!

The Dashboard comes with a Wifi modem and CANbus transceiver on board, and is powered over an industrial M12 connector compatible with the Amiga.  Includes debug cable.

## Feature overview



| Specifications       |                                                              |
| -------------------- | ------------------------------------------------------------ |
| Input Power          | 12/24 volts (9-28vdc)                                        |
| Power consumption    | ~2.5 watts, <5watts (depending usage, wifi, and brightness)  |
| Screen               | 4.3" High brightness optically bonded IPS display            |
| Touch                | Industrial capacitive touch screen controller, tunable for gloves and wet environment (Tuning requires customization) |
| Microcontroller      | Microchip SAM ATSAME51 32-Bit Arm Cortex M4 running at 120MHz |
| Ecosystem            | Circuitpython based development, compatible with Adafruit Feather M4 CAN |
| Environmental rating | IP65 (Validation pending)                                    |
| Temp rating          | -20c to -70c ambient                                         |
| Vibration and Shock  | TBD                                                          |



## Pinout

<img src="resources/Dash_Connectors.png" alt="Dash_Connectors" style="zoom:50%;" />



### CAN/Power Input

Mating connector M12-5 A code female



### CAN/Power output (accessories)

Mating connector M12-5 A code male

### Debug

Mating connector M12-8 A code female
