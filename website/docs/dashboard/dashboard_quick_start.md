---
id: dashboard-qs
title: Dashboard User Guide
---
:::caution
This is subject for change with new updates to the Dashboard. The current version of the Dashboard Firmware is `v0.1.9`.
:::

## Dahboard overview video
<iframe width="560" height="315" src="https://www.youtube.com/embed/PKOhI4hbGUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Main Screen
*insert picture/ gif of home screen
This is the main screen of the dashboard. This screen will appear when you first turn on the Amiga. “Ready” or “listo” will appear and once you touch the button you will be taken to the home screen

Alternatively if you receive this page, this means that either you have defective pendant or your pendant needs to be calibrated.
If your pendant is not being detected at all and if it says `No Pendant Detected` please contact the Farm-ng Support immediately.

:::tip
you can check this in the pendant section of the Settings tab.
:::

If you need help with support you can go [here](https://amiga.farm-ng.com/docs/support/)

## Home Screen
Insert screen shot or gif

This is the home screen of the dashboard. On this screen you will find:
- The speedometer
- A preview of motor health
- Average motor temperature
- Battery levels of the amiga

## Motor Status Screen
This screen for monitoring each motor in much more detail than that of the home screen. On this screen you can:
- monitor the control state of the motors,
- their individual temperature,
- CAN state

## Auto Control Screen
On this screen, is where the autonomous control of the amiga comes to life. Here you will be able to :
- Enable and disable Auto Control
- Monitor the state
- Monitor the speed and turn radius of the amiga while in this state

If you have a brain, here is where you will be able to use the virtual joystick to control your Amiga.

## General Settings Tab

Now we have the settings tab, which may be the most important tab. Here on the settings tab you have a few options. Here you can find:

- ### The General Settings Tab
  - This page is where all of the general settings are located. Here, you will be able to set the total `wheel_track` of the Amiga, to which motor you would like to disable or enable.

- ### The Pendant Settings

![IMG-0641](https://user-images.githubusercontent.com/64480560/231795336-43477c82-db0d-4fa7-9cfc-638af2e11ede.GIF)

  - This page is the hub for the pendant. Here is where you will go to calibrate it, and to ensure all of the functions of the pendant are operatinal. This including the buttons, joystick, and data reception.
- ### Advanced settings
  - This page are for specific function of the dashboard firmware. The options under `Advance Settings` are :
    - `Reboot Dashboard`: This will give a soft reboot to the dashboard without having to power cycle your Amiga.
    - `Factory Setting Reset`: This setting will revert the general settings such as `wheel_track`, `max_turn_rate`, and more, back to it's original values when your Amiga first arrived.
    - `Mount CIRCIUTPY`: When you would like to Mount CIRCUItPY to update the Dashboard Firmware, here is where you will do that in order for your computer to communicate with your Dashboard.
    - `Bootloader Mode`: Similar to `Mount CIRCUITPY`, when you would like to update the UF2 file on the dashboard you will need to place it in a `Bootloader` state. With this button you can perform that action.

:::tip
For more information about Firmware Updates or how to perform an update, please visit [Dashboard Firmware Update](https://amiga.farm-ng.com/docs/dashboard/dashboard-fw)
:::


- ### H-bridge settings


- ### PTO(power take-off) settings


- ### ID settings
  - On this page, you will find important information about your Amiga, including the `Tractor Hardware ID`, `Dashboard Firmware` version number, and the `Updator App`.
  - #### Updator App
    - On the `Updator App`, you will be able to update your Amiga dashboard and Updator app itself through here. You can use the `Updator App` to perform an Over-the-air update.

:::tip
For more information about Firmware Updates or how to perform an update, please visit [Dashboard Firmware Update](https://amiga.farm-ng.com/docs/dashboard/dashboard-fw)
:::
