---
id: microcontroller-kit
title: Microcontroller Kit Overview
---

We sell a complete kit containing all necessary components on the Amiga shop website:

#### [farm-ng micro-controller kit](https://farm-ng.com/products/microcontroller-kit)


## Feather M4 Can device setup

This device can be used for rapid prototyping of applications with farm-ng's Amiga platform.


The Feather M4 board front and back, where to solder the connector, and the resistor that must be cut:
<p align="center">
<img width="773" title="Feather M4 board front and back" alt="Screen Shot 2022-08-16 at 7 34 34 PM" src="https://user-images.githubusercontent.com/810997/185022043-bf6f20b6-f332-4e63-a050-be5f4248462c.png"/>
</p>

The connected Feather M4 and which wire to screw into high and low sides and where the reset button is:
<p align="center">
  <img width="702" title="Connected Feather M4" alt="Screen Shot 2022-08-16 at 7 24 54 PM" src="https://user-images.githubusercontent.com/810997/185021388-b290fd2b-f721-4e59-843b-c30ee245c51b.png"/>
</p>

The male M12 CAN bus connector whose white (high) and blue (low) connectors are screwed into the Feather M4 and the male CAN bus connector is attached to the CAN bus:
<p align="center">
<img width="650" title="Male M12 CAN bus connector" alt="Screen Shot 2022-08-16 at 7 41 38 PM" src="https://user-images.githubusercontent.com/810997/185022824-593e543f-7899-4a65-93b0-9f07e97f8572.png"/>
</p>


### Flashing the UF2 firmware on the M4 device
##### On initial plug in

Our goal is to have the Adafruit Feather show up as a CIRCUITPY directory for plugging it in, see
[this reference](https://learn.adafruit.com/circuit-playground-lesson-number-0/usb-connection).

* Plug in your feather to your computer probably using a Type-C (feather) to Type-C (computer connector).
   * You'll get randomly varying LED colors
* Look for the little reset switch on the Feather board. Double click the reset button to enter bootloader mode
[(reference here)](https://learn.adafruit.com/circuit-playground-lesson-number-0/reset-button-bootloader)
   * The Feather should automatically remount and show up as FTHRCANBOOT
   * This allows you to copy a Microsoft standard flash format uf2 file onto the device
* For each OS, see below how to copy (flash) the ``amiga-dev-kit/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2`` file onto the Feather
* After the above, feather should reboot with the newly loaded firmware and now show up as CIRCUITPY

Below are instructions for flashing under different operating systems.


##### On subsequent plug in
When attaching a previously flashed Feather M4 device, it should automatically mount as CIRCUITPY.

#### WSL uf2 flashing

From a terminal, use the command line:

```bash
cd ~/<to_your_base_directory>/amiga-dev-kit
sudo ./mnt_feather_wsl.sh d # mount the feather in wsl, assuming the feather is presenting as the D: drive on windows.
cp feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 /mnt/d/
```

#### Ubuntu uf2 flashing

From a terminal, use the command line:

```bash
cd ~/<to_your_base_directory>/amiga-dev-kit
cp feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 /media/$USERNAME/FTHRCANBOOT/
```


#### Mac OS uf2 flashing

In your PyCharm terminal or system terminal, use the command line:

```bash
cd ~/<to_your_base_directory>/amiga-dev-kit
cp feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 /Volumes/FTHRCANBOOT
```

You can also drag and drop the file onto the volume in Finder, and it will automatically install the uf2.  The volume will dismount, and then remount showing up as CIRCUITPY.


# Loading code on the Feather

Now that you have a flashed Feather, time to load some code:

1. Copy the lib folder to the root of the Feather.  This gets added automatically to your python path.

2. Attach a serial terminal to the feather, so you can see std out.

* On mac (use autocomplete to get the correct usb modem) ``.../tty.usb<tab_for_autocomplete>``:

```
screen /dev/tty./dev/tty.usbmodem14201
```

* On ubuntu:

```
screen /dev/ttyACM0
```

3. Now add a code.py file to the root of the Feather drive. Try copying the ``examples/hello_main_loop/code.py``

The feather will automatically reload. You run this command on the screen terminal which is now running on the Feather

# Feather M4 references

* The CircuitPython programming guide from Adafruit is [here: programming docs](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)
* The microcontroller is described [here: microcontroller](https://learn.adafruit.com/adafruit-feather-m4-can-express)
* The background on Circuitpy (that we showed you how to flash above) is [here: background](https://learn.adafruit.com/adafruit-feather-m4-can-express/circuitpython-on-feather-m4-can)
