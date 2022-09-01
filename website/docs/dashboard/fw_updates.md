---
id: dashboard-fw
title: Dashboard Firmware Updates
---

## Dashboard firmware updates

At farm-ng, we are regularly updating and improving our firmware as we continue to develop the Amiga platform.
We want to get every new feature, performance improvement, and reliability increase out to you as soon as we can.
And we want to enable you to easily upgrade your dashboard with these improvements at your convenience.


> We're actively working on over-the-air (OTA) firmware updates for our dashboard.
> Once we've stabilized the wifi interface on the dashboard and ensured the
> OTA updater is robust, we'll make this available to you.
>
> In the meantime, make sure you have your [debug cable](./../debug_cable/) handy before proceeding with any firmware or UF2 updates.
> If you don't have one, check out the options on our [For Developers](https://farm-ng.com/pages/for-developers) page.



### farm-ng Amiga application update

To upgrade your Dashboard with the latest Amiga application, grab your Dashboard and your debug cable and take the following steps:

> **_NOTE:_** This process is currently only supported on Windows and Mac.

**Access the files:**

1. Download the application zip file [amiga-dash-v0.0.3.zip](https://github.com/farm-ng/amiga-dev-kit/releases/download/amiga-dash-v0.0.3/amiga-dash-v0.0.3.zip)
2. For more details on the release navigate to [Release: amiga-dash-v0.0.3](https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.0.3)

**Connect to your dashboard:**

4. Power down your dashboard.
5. Connect the debug cable into the back of the dashboard. See [debug cable](./../debug_cable/) for details.
7. Connect your Windows or Mac PC to the USB / debug breakout micro-USB port (not the smaller, serial breakout).
8. Reconnect your dashboard to power so a folder automatically pops up under the name `CIRCUITPY` and resembles the example below.

**CIRCUITPY mounted**

![CIRCUITPY](https://user-images.githubusercontent.com/53625197/187532222-eabfa798-9c01-43c8-8c1e-4ecaa0b673e6.png)

**Update the firmware:**

9.  Select all files in the mounted CIRCUITPY drive and delete them
10. This *may* freeze the dash on the screen it was displaying.
11. Drag and drop all extracted files from the downloaded firmware update.
12. Make sure to drop the `node_id.txt`, `main.py`, `boot.py`, & `app/` files directly into the root of the `CIRCUITPY` drive (as below).
13. The firmware will **NOT** load if the files are nested in a subfolder.
14. Once the file transfer is complete, power cycle your dashboard (disconnect & reconnect power) and check the basic functionality.
15. If all is as expected, you're good to go. Just power down the dashboard, disconnect the debug cable, and enjoy your new features!
16. `[Recommended]` Navigate to the configuration tab (gear icon) on the dashboard, and select the pendant icon to calibrate your pendant and confirm functionality.
17. `[Recommended]` Also check the settings and ensure your desired wheel track and turning speed values remain.

**CIRCUITPY updated**

![CIRCUITPY updated](https://user-images.githubusercontent.com/53625197/187532633-c87803a3-9fb9-4ba6-be39-a2f6bed27613.png)

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

1. Download the latest [UF2 file](https://github.com/farm-ng/amiga-dev-kit/releases/download/fw-dash-v1.0.0/fw-dash-v1.0.0.uf2)
2. For more details on the UF2 file release see the release page here: [Release: fw-dash-v1.0.0](https://github.com/farm-ng/amiga-dev-kit/releases/tag/fw-dash-v1.0.0)

**Connect to your dashboard:**

4. Power down your dashboard.
5. Connect the debug cable into the back of the dashboard. See [debug cable](./../debug_cable/) for details.
7. Connect your Windows or Mac PC to the USB / debug breakout micro-USB port (not the smaller, serial breakout).
8. Reconnect your dashboard to power so a folder automatically pops up under the name `CIRCUITPY`, as with the farm-ng firmware update example above.

**Load into BOOTLOADER mode**

10. With the dashboard connected to your PC, double click the reset button on the USB / debug breakout.
11. This should remount the dashboard under the name `AMIGA` and resemble the example below.
> *NOTE:* The timing of the double click can be a little tricky, so if it mounts as `CIRCUITPY`, just try again until it mounts as `AMIGA`.
> If you cannot get the double click timing correct, you can enter BOOTLOADER mode with the following advanced user steps:
> 1. Open a serial console connected to the dashboard (see: [Adafruit connecting to the serial console](https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console))
> 2. Pause the program with `ctrl+C`
> 3. Enter the following commands in the REPL
>```
> import microcontroller
> microcontroller.on_next_reset(microcontroller.RunMode.BOOTLOADER)
> microcontroller.reset()
>```
12. Drag and drop the newly downloaded UF2 file onto the mounted drive.
13. This will immediately cause the bootloader firmware to update, and the dashboard will automatically reboot as `CIRCUITPY` once complete.


> **_NOTE:_** The farm-ng firmware you may have just updated should remain untouched, so the order is not important if you are updating both types of firmware.

**AMIGA mounted**

![AMIGA](https://user-images.githubusercontent.com/53625197/187532028-6c93c1fe-4196-4b33-8d8e-dfa145a83001.png)

> **Troubleshooting**
>
> In rare cases, the board could go into an update failure mode.
> In this case, the microcontroller inside the dashboard is restored to factory default `Hello world` example.
> This will be characterized by no display on the dash and no response.
> You can double check this occurred by opening the file named `code.py` (or `main.py`) and seeing that there is only a single line of code `print('hello world')`.
> In this case, you should go through both the UF2 and farm-ng firmware update steps.

