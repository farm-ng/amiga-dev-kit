---
id: dashboard-fw
title: Dashboard Firmware Updates
---

## Dashboard firmware updates

At farm-ng, we are regularly updating and improving our firmware as we continue to develop the Amiga platform.
We want to get every new feature, performance improvement, and reliability increase out to you as soon as we can.
And we want to enable you to easily upgrade your dashboard with these improvements at your convenience.

:::tip Update
Over-the-air (OTA) firmware updates for the dashboard application layer are now supported!
This means that going forward you will be able to wirelessly update your amiga dashboard applications from the touchscreen.
The OTA update method is available starting with release: [amiga-dash-v0.1.1](https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.1.1).

For dashboards with earlier versions of the firmware, one additional wired update is required to get to v0.1.1.
So make sure you have your [**debug cable**](./../debug_cable/) handy before proceeding with the following firmware update steps.
If you don't have one, reach out to us using one of the options on our [**For Developers**](https://farm-ng.com/pages/for-developers) page.

Note: the OTA update method does not yet support the (infrequent) UF2 bootloader updates, so keep your debug cable somewhere safe.
:::

### Wired updates

### farm-ng Amiga application update

To upgrade your Dashboard with the latest Amiga application, grab your Dashboard and your debug cable and take the following steps:

:::info
This process is currently only supported on Windows and Mac.
:::

**Access the files:**

1. Download the application zip file [amiga-dash-v0.1.1.zip](https://github.com/farm-ng/amiga-dev-kit/releases/download/amiga-dash-v0.1.1/amiga-dash-v0.1.1.zip)
2. For more details on the release navigate to [Release: amiga-dash-v0.1.1](https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.1.1)

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
12. Make sure to drop **all files** (`dashboard/`, `updator/`, `node_id.txt`, `code.py`, `boot.py`, etc.) directly into the root of the `CIRCUITPY` drive (as below).
13. The firmware will **NOT** load if the files are nested in a subfolder.
14. Once the file transfer is complete, power cycle your dashboard (disconnect & reconnect power) and check the basic functionality.
    1.  The dashboard will no longer mount as `CIRCUITPY` when connected to a computer. If you have any issues, see the troubleshooting information below.
15. If all is as expected, you're good to go. Just power down the dashboard, disconnect the debug cable, and enjoy your new features!
16. `[Recommended]` Navigate to the configuration tab (gear icon) on the dashboard, and select the pendant icon to calibrate your pendant and confirm functionality.
17. `[Recommended]` Also check the settings and ensure your desired wheel track and turning speed values remain.

:::caution Troubleshooting
- If the file transfer process fails, or the behavior is not as expected, just delete all files in CIRCUITPY and try it again.
  - If the dashboard remounts on your computer as `CIRCUITPY`, just select all and delete.
  - If the dashboard does NOT remount on your computer as `CIRCUITPY`:
    - Open a serial console connected to the dashboard (see: [Adafruit connecting to the serial console](https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console))
    - Pause the program with `ctrl+C`
    - Enter the following commands in the REPL

    ```
    import storage
    storage.erase_filesystem()
    # The dashboard should reboot automatically
    # If it does not, continue with:
    import microcontroller
    microcontroller.reset()
    ```
    - This will reset the microcontroller to a "hello world" state and it should remount as `CIRCUITPY`.
    - You can now manually delete all files and try again.
- Repeated hot plugging / unplugging of the dashboard can cause the filesystem to go into an irregular state. Try connecting / disconnecting between dashboard and your PC with the dashboard powered down.
- When in doubt, turn it off and back on again.
:::

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

:::info
This process is currently only supported on Windows and Mac.
:::

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
    :::tip
    The timing of the double click can be a little tricky, so if it mounts as `CIRCUITPY`, just try again until it mounts as `AMIGA`.
    If you cannot get the double click timing correct, you can enter BOOTLOADER mode with the following advanced user steps:

    - Open a serial console connected to the dashboard (see: [Adafruit connecting to the serial console](https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console))
    - Pause the program with `ctrl+C`
    - Enter the following commands in the REPL

    ```
    import microcontroller
    microcontroller.on_next_reset(microcontroller.RunMode.BOOTLOADER)
    microcontroller.reset()
    ```
    :::
12. Drag and drop the newly downloaded UF2 file onto the mounted drive.
13. This will immediately cause the bootloader firmware to update, and the dashboard will automatically reboot as `CIRCUITPY` once complete.
:::note
The farm-ng firmware you may have just updated should remain untouched, so the order is not important if you are updating both types of firmware.
:::

**AMIGA mounted**

![AMIGA](https://user-images.githubusercontent.com/53625197/187532028-6c93c1fe-4196-4b33-8d8e-dfa145a83001.png)

:::caution Troubleshooting
In rare cases, the board could go into an update failure mode.

In this case, the microcontroller inside the dashboard is restored to the factory default `Hello world` example.
This will be characterized by no display on the dash and no response.
You can double check this occurred by opening the file named `code.py` (or `main.py`) and seeing that there is only a single line of code `print('hello world')`.
In this case, you should go through both the [UF2 firmware](#uf2-bootloader-update) and [farm-ng application layer](#farm-ng-amiga-application-update) update steps.
:::
