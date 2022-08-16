# amiga-dev-kit
Amiga development kit for third party hardware or software extensions.


Clone this  repository to work with the Amiga from micro-controllers or computers (Mac/Linux/Windows).

```
git clone git@github.com:farm-ng/amiga-dev-kit.git
```

## Feather M4 Can device setup

The Feather M4 Can can be used for rapid prototyping of applications with farm-ng's Amiga platform.

TODO Add photos of the M4 can, with the M12 mail canbus connector.  Add photo of the cut resitor.

### Flashing the UF2 firmware on the M4 device

Plug in your feather to your computer. It should mount as thumb drive, typically called CIRCUITPY.
 
Double click the reset button on the Feather to enter its uf2 loader mode.  The feather should autonmatically remount as FTHRCANBOOT.

Copy the ``amiga-dev-kit/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2`` onto the drive by drag 
and drop using you're computers graphical interface, or command line.  The feather should reboot with the newly loaded firmware.

#### WSL uf2 flashing

To do this from the command line on Windows, please use Windows Subsystem from Linux.

```bash
cd ~/amiga-dev-kit # 
sudo ./mnt_feather_wsl.sh d # mount the feather in wsl, assuming the feather is presenting as the D: drive on windows.
cp feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 /mnt/d/
```

#### Ubuntu uf2 flashing

To do this from the command line on Windows, please use Windows Subsystem from Linux.

```bash
cd ~/amiga-dev-kit # 
cp feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 /media/$USERNAME/FTHRCANBOOT/
```


#### Mac OS uf2 flashing

To do this from the command line on Windows, please use Windows Subsystem from Linux.

```bash
cd ~/amiga-dev-kit # 
cp feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 FIXME(garybradski)
```


 
