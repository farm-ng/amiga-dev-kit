---
id: dashboard-fw
title: Dashboard Firmware Updates
---

## Dashboard firmware updates

At farm-ng, we are regularly updating and improving our firmware as we continue to develop the Amiga platform.
We want to get every new feature, performance improvement, and reliability increase out to you as soon as we can.
And we want to enable you to easily upgrade your dashboard with these improvements at your convenience.

### Where to start

To update the Amiga application layer (our frequent [**amiga-dash FW releases**](https://github.com/farm-ng/amiga-dev-kit/releases)), you can follow either:
<!-- no toc -->
 - [**Over-the-air (OTA) Amiga application updates**](#over-the-air-ota-amiga-application-updates)
   - Simpler, especially for v0.1.5+
   - Requires v0.1.1+ already installed
   - No required materials
 - [**Wired Amiga application updates**](#wired-amiga-application-updates)
   - Faster
   - Not dependent upon current installed version
   - Requires a [**debug cable**](/docs/debug_cable/README.md) or [**service cable**](/docs/debug_cable/service_cable.md)

To update the (infrequent) CircuitPython build releases, please follow [**UF2 bootloader update**](#uf2-bootloader-update).

### Over-the-air (OTA) Amiga application updates

You can use the over-the-air (OTA) firmware update method to wirelessly update your amiga dashboard applications from the touchscreen.
The updator app is installed alongside the dashboard app, starting with the `amiga-dash-v0.1.1` release.

For dashboards with earlier versions of the firmware, one additional wired update is required to get to `v0.1.1` or later.
Grab your [**debug cable**](/docs/debug_cable/README.md) or [**service cable**](/docs/debug_cable/service_cable.md),
and follow the instructions at [**Wired Amiga application updates**](#wired-amiga-application-updates) to install the latest release.

- For dashboards with the `v0.1.3` `Updator` app installed, you will be able to install any available update.
- For dashboards with the `v0.1.1` `Updator` app installed, it is important that you start by updating your `Updator` app to `v0.1.3`.
  - You can then proceed to updating your `Dashboard` app to `v0.1.3` (or later) and your `Updator` app to versions later than `v0.1.3`.
  - If you have trouble updating your  `v0.1.1` `Updator` app to `v0.1.3`, please try again.
    - If the update fails during the download, it will pick up where it left off when you get back to the download stage.
  - If you are not able to complete the update, you should follow [**Wired Amiga application updates**](#wired-amiga-application-updates) to install the latest release.
- For dashboards without any `Updator` app, you should follow [**Wired Amiga application updates**](#wired-amiga-application-updates) to install the latest release.

#### Tips

- To begin the Over-the-air (OTA) Amiga application updates, navigate to the ID page of the settings tab.
- If you decide to cancel and update at any step along the process, you can always exit the Updator app and return to the dashboard app by cancelling the current operation, and clicking back through the home page.
- Check the versions on the ID page of the settings tab after you update

### Wired Amiga application updates

:::info
This process is currently only supported on Windows and Mac.
:::

To upgrade your Dashboard with the latest Amiga application, grab your Dashboard and your debug cable and take the following steps:

:::caution
It is required to have a data USB-C cable and not a charge only USB-C cable when connecting to the debug or service cable.
:::

**Access the files:**

1. Download the latest application zip file [amiga-dash-v0.1.9.zip](https://github.com/farm-ng/amiga-dev-kit/releases/download/amiga-dash-v0.1.9/amiga-dash-v0.1.9.zip)
2. For more details on the git latest release navigate to [Release: amiga-dash-v0.1.9](https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.1.9)
3. Extract the files from the zipped folder

:::tip
- Check the [**amiga-dev-kit Releases**](https://github.com/farm-ng/amiga-dev-kit/releases) page, as there may be an even newer available release.
- Select the newest `amiga-dash-v#.#.#` and download that version.
  - Do not select a `fw-dash-v#.#.#` or `pendant-v#.#.#` update!
:::

**Connect to your dashboard:**

:::info
If you don't have a [**debug cable**](/docs/debug_cable/README.md) or [**service cable**](/docs/debug_cable/service_cable.md), reach out to us using one of the options on our [**For Developers**](https://farm-ng.com/pages/for-developers) page.
:::

4. Power down your dashboard.
5. Connect your [**debug cable**](/docs/debug_cable/README.md) or [**service cable**](/docs/debug_cable/service_cable.md) into the [**Debug port**](/docs/debug_cable/#how-to-connect) on the back of the dashboard.
   1. If using a debug cable, connect your Windows or Mac PC to the **USB** interface:
      1. On newer cables this is the side labelled `USB`
      2. On older cables this is the larger purple board
   2. If using a service cable, you only have the one port.
6. Reconnect your dashboard to power
   1. With **very** early versions of firmware, a folder automatically pops up under the name `CIRCUITPY` and resembles the example below.
   2. With versions `v0.1.8` and higher, there is a `Mount CIRCUITPY` advanced user button that'll reboot the dashboard and mount it for Windows or Mac computers.
   3. With older versions, you'll need to manually bring the `CIRCUITPY` drive up on your Windows or Mac computer by:
        1. Open a serial console connected to the dashboard
           - If you are unfamiliar, see: [**FAQ - Using the REPL**](/docs/reference/faq#using-the-repl)
        2. Interrupt the program with `ctrl+C`
        3. Run the following commands in the REPL:
        <!-- :::tip
        You can copy code blocks on this website by left clicking the icon in the top right corner of the code block.
        Paste the commands in the REPL by right clicking and selecting `Paste`.
        ::: -->
        ```
        import boot_utils
        boot_utils.mount_circuitpy()
        ```
        :::caution If you receive an `AtributeError: ModuleNotFound 'mount_circuitpy'` error
        You don't yet have that utility available with your installed dashboard version.
        To mount the circuitpy drive, you can instead run:
        ```
        import os
        import storage
        import microcontroller
        storage.remount("/", False)
        os.remove('boot.py')
        microcontroller.reset()
        ```
        :::
        4. The serial console should freeze / exit and the CIRCUITPY drive should now show up mounted

**CIRCUITPY mounted**

![CIRCUITPY](https://user-images.githubusercontent.com/53625197/187532222-eabfa798-9c01-43c8-8c1e-4ecaa0b673e6.png)

**Update the firmware:**

7.  Select all files in the mounted CIRCUITPY drive and delete them
<!-- 1.  This *may* freeze the dash on the screen it was displaying, if it was running. -->
8. Drag and drop all extracted files from the downloaded firmware update.
    1.  Make sure to drop **all files** (`dashboard/`, `updator/`, `node_id.txt`, `code.py`, `boot.py`, etc.) directly into the root of the `CIRCUITPY` drive (as below).
        1.  The firmware will **NOT** load if the files are nested in a subfolder.
9. Once the file transfer is complete, power cycle your dashboard (disconnect & reconnect power) and check the basic functionality.
    1.  The dashboard will no longer mount as `CIRCUITPY` when connected to a computer. If you have any issues, go through the connecting / mounting process again OR see the troubleshooting information below.
10. If all is as expected, you're good to go. Just power down the dashboard, disconnect the debug cable, and enjoy your new features!
11. `[Recommended]` Navigate to the configuration tab (gear icon) on the dashboard, and select the pendant icon to calibrate your pendant and confirm functionality.
12. `[Recommended]` Also check the settings and ensure your desired wheel track and turning speed values remain.

![CIRCUITPY_updated_windows](https://user-images.githubusercontent.com/53625197/208778396-68113b71-ddb2-409c-9d0d-acdd9ad887e6.png)

:::caution Troubleshooting
- If the file transfer process fails, or the behavior is not as expected, just delete all files in CIRCUITPY and try it again.
  - If the dashboard remounts on your computer as `CIRCUITPY`, just select all and delete.
  - If the dashboard does NOT remount on your computer as `CIRCUITPY`:
    - Open a serial console connected to the dashboard (see: [**Adafruit connecting to the serial console**](https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console))
    - Interrupt the program with `ctrl+C`
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
[**Adafruit UF2 details**](https://learn.adafruit.com/adafruit-feather-m0-express-designed-for-circuit-python-circuitpython/uf2-bootloader-details)
is a great place to start!

#### Bootloader update instructions

:::info
This process is currently only supported on Windows and Mac.
:::

**Access the files:**

1. Download the latest [**fw-dash UF2 file**](https://github.com/farm-ng/amiga-dev-kit/releases/download/fw-dash-v1.1.0/fw-dash-v1.1.0.uf2)
   1. For more details on the UF2 file release see the release page here: [**Release: fw-dash-v1.1.0**](https://github.com/farm-ng/amiga-dev-kit/releases/tag/fw-dash-v1.1.0)

**Connect to your dashboard:**

2. Power down your dashboard.
3. Connect your [**debug cable**](/docs/debug_cable/README.md) or [**service cable**](/docs/debug_cable/service_cable.md) into the [**Debug port**](/docs/debug_cable/#how-to-connect) on the back of the dashboard.
   1. If using a debug cable, connect your Windows or Mac PC to the **USB** interface:
      1. On newer cables this is the side labelled `USB`
      2. On older cables this is the larger purple board
   2. If using a service cable, you only have the one interface.
4. Reconnect your dashboard to power so a folder automatically pops up under the name `CIRCUITPY`, as with the farm-ng firmware update example above.

**Load into BOOTLOADER mode**

5. With the dashboard connected to your PC, load into `BOOTLOADER` mode so the dashboard remounts under the name `AMIGA` and resembles the **AMIGA mounted** example below:
   1. With versions `v0.1.8` and higher, there is a `BOOTLOADER` advanced user button that'll reboot the dashboard into `BOOTLOADER` mode.
   2. Otherwise, if using a [**debug cable**](/docs/debug_cable/README.md) you can double click the reset button.
   3. Otherwise, if using a [**service cable**](/docs/debug_cable/service_cable.md) (or if you can't seem to get the double click timing right):
      1. Open a serial console connected to the dashboard
         - See: [**FAQ - Using the REPL**](/docs/reference/faq#using-the-repl)
      2. Interrupt the program with `ctrl+C`
      3. Enter the following commands in the REPL:
        ```
        import boot_utils
        boot_utils.reset_to_bootloader()
        ```
        :::caution If you receive an `AtributeError: ModuleNotFound 'reset_to_bootloader'` error
        You don't yet have that utility available with your installed dashboard version.
        To load into `BOOTLOADER` mode, you can instead run:
        ```
        import microcontroller
        microcontroller.on_next_reset(microcontroller.RunMode.BOOTLOADER)
        microcontroller.reset()
        ```
6.  Drag and drop the newly downloaded UF2 file onto the mounted drive.
7.  This will immediately cause the bootloader firmware to update, and the dashboard will automatically reboot as `CIRCUITPY` once complete.
:::note
The [**Amiga application layer**](#wired-amiga-application-updates) should remain untouched, so be sure to update that if it is not already up to date!
:::

**AMIGA mounted**

![AMIGA](https://user-images.githubusercontent.com/53625197/187532028-6c93c1fe-4196-4b33-8d8e-dfa145a83001.png)

:::caution Troubleshooting
In rare cases, the board could go into an update failure mode.

In this case, the microcontroller inside the dashboard is restored to the factory default `Hello world` example.
This will be characterized by no display on the dash and no response.
You can double check this occurred by opening the file named `code.py` (or `main.py`) and seeing that there is only a single line of code `print('hello world')`.
In this case, you should go through both the [**UF2 firmware**](#uf2-bootloader-update) and [**farm-ng application layer**](#farm-ng-amiga-application-update) update steps.
:::
