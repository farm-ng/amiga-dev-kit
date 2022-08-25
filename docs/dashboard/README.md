# farm-ng Dash

<img src="./assets/DSCF6570-2-16x9-aspect-reduced.jpg" alt="Dash_Iso" width="600;" />



## Description
Farm-ng's Dashboard is a ruggedized, waterproof, outdoor-visible touch-screen display and machine controller - customizable through our ADK (Amiga-Dev-Kit) toolset!

Under the hood is a simple yet powerful embedded microcontroller based on Adafruit's Feather M4 CAN, which runs CircuitPython and makes building your own custom interfaces as simple as connecting a USB cable and writing a few lines of code.  If you've been looking for a microcontroller and display that can handle harsh environments, look no further!

The Dashboard comes with a Wifi modem and CANbus transceiver on board, and is powered over an industrial M12 connector compatible with the Amiga.  Includes debug cable.

## Features overview

**The farm-ng Dash display is a Beta early release product, specification and rating are subject to change**



| Specifications       |                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Input Power          | 12/24 volts (9-28vdc)                                                                                                 |
| Power consumption    | ~2.5 watts, <5watts (depending usage, wifi, and brightness)                                                           |
| Screen               | 4.3" High brightness (850cd/m2) optically bonded IPS display, 480x272 resolution                                      |
| Touch                | Industrial capacitive touch screen controller, tunable for gloves and wet environment (Tuning requires customization) |
| Microcontroller      | Microchip SAM ATSAME51 32-Bit Arm Cortex M4 running at 120MHz                                                         |
| Ecosystem            | Circuitpython based development, compatible with Adafruit Feather M4 CAN                                              |
| Environmental rating | IP65 (Validation pending)                                                                                             |
| Temp rating          | -20c to -70c ambient                                                                                                  |
| Vibration and Shock  | TBD                                                                                                                   |
| Basic dimensions     | xxx (Not including shroud)                                                                                            |
| Weight               | TBD                                                                                                                   |




## Firmware updates

At farm-ng, we are regularly updating and improving our firmware as we continue to develop the Amiga platform.
We want to get every new feature, performance improvement, and reliability increase out to you as soon as we can.
And we want to enable you to easily upgrade your dashboard with these improvements at your convenience.


> We're actively working on over-the-air (OTA) firmware updates for our dashboard.
> Once we've stabilized the wifi interface on the dashboard and ensured the
> OTA updater is robust, we'll make this available to you.
>
> In the meantime, make sure you have your [debug cable](/docs/debug_cable/) handy before proceeding with any firmware or UF2 updates.
> If you don't have one, check out the options on our [For Developers](https://farm-ng.com/pages/for-developers) page.



### farm-ng firmware update

To upgrade your dashboard with the latest farm-ng firmware, grab your dashboard and your debug cable and take the following steps:

> **_NOTE:_** This process is currently only supported on Windows and Mac.

**Access the files:**

1. Navigate to the [firmware](/firmware/) directory of the [amiga-dev-kit](https://github.com/farm-ng/amiga-dev-kit) (this) repository.
2. Select the desired (`[recommended]` latest) firmware `.zip` folder.
3. Download the folder (`~0.1 MB`) with the `Download` button on the right and unzip the files.

**Connect to your dashboard:**

4. Power down your dashboard.
5. Connect the debug cable into the back of the dashboard.
6. Connect your Windows or Mac PC to the USB / debug breakout micro-USB port.
7. See [debug cable](/docs/debug_cable/) for details.
8. Power your dashboard back on.
9. A folder should automatically pop up under the name `CIRCUITPY` and resemble the example below.

**CIRCUITPY mounted**

![CIRCUITPY](/docs/dashboard/assets/CIRCUITPY_mounted_windows.png)

**Update the firmware:**

9.  Select all files in the mounted CIRCUITPY drive and delete them
10. This will freeze the dash on the screen it was displaying.
11. Drag and drop all extracted files from the downloaded firmware update.
12. Make sure to drop the `node_id.txt`, `main.py`, `boot.py`, & `app/` files directly into the root of the `CIRCUITPY` drive (as below).
13. The firmware will **NOT** load if the files are nested in a subfolder.
14. Power cycle your dashboard (disconnect & reconnect power) and check the basic functionality.
15. If all is as expected, you're good to go. Just power down the dashboard, disconnect the debug cable, and enjoy your new features!

**CIRCUITPY updated**

![CIRCUITPY updated](/docs/dashboard/assets/CIRCUITPY_updated_windows.png)

> **Troubleshooting**
> - If the file transfer process fails, just delete all files in CIRCUITPY and try it again.
> - Repeated hot plugging / unplugging of the dashboard can cause the filesystem to go into an irregular state. Try connecting / disconnecting between dashboard and your PC with the dashboard powered down.
> - When in doubt, turn it off and back on again.


### UF2 bootloader update

#### Overview

Occasionally, it may be recommended to update the bootloader UF2 firmware installed on your dashboard.
At farm-ng, we generate a custom UF2 file for our dashboards that are tailored towards the dashboard's use case.
For example, we've increased the capacity of the receive queue for the CAN module,
which reduces the likelihood of dropped messages!

The farm-ng UF2 releases may come out following a CircuitPython stable release,
or if we find more modifications that significantly improve performance or enable new features.

To learn more about the topic of UF2 bootloader files,
[Adafruit UF2 details](https://learn.adafruit.com/adafruit-feather-m0-express-designed-for-circuit-python-circuitpython/uf2-bootloader-details)
is a great place to start!

#### Bootloader update instructions

> **_NOTE:_** This process is currently only supported on Windows and Mac.

**Access the files:**

1. Navigate to the [firmware](/firmware/) directory of the [amiga-dev-kit](https://github.com/farm-ng/amiga-dev-kit) (this) repository.
2. Select the desired (`[recommended]` latest) firmware UF2 (`.uf2`) file
3. Download the file (`~1.0 MB`) with the `Download` button on the right.

**Connect to your dashboard:**

4. Power down your dashboard.
5. Connect the debug cable into the back of the dashboard.
6. Connect your Windows or Mac PC to the USB / debug breakout micro-USB port.
7. See [debug cable](/docs/debug_cable/) for details.
8. Power your dashboard back on.
9. A folder should automatically pop up under the name `CIRCUITPY`, as with the farm-ng firmware update example above.

**Load into BOOTLOADER mode**

10. With the dashboard connected to your PC, double click the reset button on the USB / debug breakout.
11. This should remount the dashboard under the name `AMIGA` and resemble the example below.
12. The timing of the double click can be a little tricky, so if it mounts as `CIRCUITPY`, just try again until it mounts as `AMIGA`.
13. Drag and drop the newly downloaded UF2 file onto the mounted drive.
14. This will immediately cause the bootloader firmware to update, and the dashboard will automatically reboot as `CIRCUITPY` once complete.
15. Your farm-ng firmware should remain untouched, so the update order is not important if you are updating both types of firmware.

**AMIGA mounted**

![AMIGA](/docs/dashboard/assets/AMIGA_mounted_windows.png)

> **Troubleshooting**
>
> In rare cases, the board could go into an update failure mode.
> In this case, the microcontroller inside the dashboard is restored to factory default `Hello world` example.
> This will be characterized by no display on the dash and no response.
> You can double check this occurred by opening the file named `code.py` (or `main.py`) and seeing that there is only a single line of code `print('hello world')`.
> In this case, you should go through both the UF2 and farm-ng firmware update steps.


## Mechanical



## Connections

<img src="./assets/Dash_Connectors.png" alt="Dash_Connectors" width="600;" />



### Pinouts 

<img src="./assets/Dash_Pinout.png" alt="Dash_Pinout" width="600;" />



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

Debug wire colors based on common cable with flying leads used on farm-ng built debug kits. 

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

