# amiga-dev-kit
Amiga development kit for third party hardware or software extensions.

Clone this repository to work with the Amiga from micro-controllers or computers (Mac/Linux/Windows).

```
cd <to_your_base_directory>
git clone git@github.com:farm-ng/amiga-dev-kit.git
```

In Pycharm, you can 
* Create a new project
* Use the menue VCS->Checkout From Version Control->Git 
* Enter the github SSH URL and set the directory
   * Now the project will also manage the github connection and venv for you


## Feather M4 Can device setup

The Feather M4 Can can be used for rapid prototyping of applications with farm-ng's Amiga platform.

TODO Add photos of the M4 can, with the M12 mail canbus connector.  Add photo of the cut resitor.

### Flashing the UF2 firmware on the M4 device

#### On initial plug in

Our goal is to have the Adafruit Feather show up as a CIRCUITPY directory for plugging it in, see 
[this reference](https://learn.adafruit.com/circuit-playground-lesson-number-0/usb-connection).

* Plug in your feather to your computer probably using a Type-C (feather) to Type-C (computer connector).
   * You'll get randomly varying LED colors
* Look for the little reset switch on the Feather board. Double click the reset button to enter bootloader mode 
[(reference here)](https://learn.adafruit.com/circuit-playground-lesson-number-0/reset-button-bootloader)
   * The Feather should automatically remount and show up as FTHRCANBOOT
   * This allows you to copy a Microsoft standard flash format uf2 file onto the device
* Copy the ``amiga-dev-kit/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2`` onto the drive by 
   * drag and drop using you're computers graphical interface, or 
   * command line.  
* The feather should reboot with the newly loaded firmware and now show up as CICCUITPY

On subsequent times when attaching the Feather device, it should automatically mount as CICUITPY. Below are instructions for
different operating systems.

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


 
