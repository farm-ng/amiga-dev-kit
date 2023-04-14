---
id: dashboard-user-guide
title: Dashboard User Guide
---
:::caution
This is subject for change with new updates to the Dashboard. The current version of the Dashboard Firmware is `v0.1.9`.
:::
![DSCF6570-2-16x9-aspect-reduced](https://user-images.githubusercontent.com/11846963/186734463-aa149b3a-7510-4d5a-99ea-f9a8a96775d2.jpg)
## Dashboard overview video


<iframe width="560" height="315" src="https://www.youtube.com/embed/PKOhI4hbGUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Main Screen


This is the main screen of the dashboard. This screen will appear when you first turn on the Amiga. “Ready” or “listo” will appear and once you touch the button you will be taken to the home screen

Alternatively if you receive this page, this means that either you have defective pendant or your pendant needs to be calibrated.
If your pendant is not being detected at all and if it says `No Pendant Detected` please contact the Farm-ng Support immediately.

:::tip
You can check this in the `pendant` section of the Settings tab.
:::

If you need help with support you can go [here](https://amiga.farm-ng.com/docs/support/)

## Home Screen

This is the home screen of the dashboard. On this screen you will find:
- The speedometer
- A preview of motor health
- Average motor temperature
- Battery levels of the amiga

## Motor Status Screen

<img src="https://user-images.githubusercontent.com/64480560/232093032-cd99e871-5f09-41bb-9485-6e3cf1c3871b.jpg"
     width="330"
     height="300" />

<img src="https://user-images.githubusercontent.com/64480560/232093025-48b6792e-08a3-48f8-b83e-52d4813d84e9.jpg"
     width="330"
     height="300" />


This screen for monitoring each motor in much more detail than that of the home screen. On this screen you can:
- Monitor the control state of the motors,
- Temperature of each motor,
- CAN state

## Auto Control Screen
On this screen, is where the autonomous control of the amiga comes to life. Here you will be able to :
- Enable and disable Auto Control
- Monitor the state
- Monitor the speed and turn radius of the amiga while in this state

If you have a brain, here is where you will be able to use the []`virtual_joy_stick`](https://amiga.farm-ng.com/docs/tutorials/virtual_joystick/virtual-joystick-overview). to control your Amiga.

## General Settings Tab

Now we have the settings tab, which may be the most important tab. Here on the settings tab you have a few options. Here you can find:

- ### The General Settings Tab
  - This page is where all of the general settings are located. Here, you will be able to set the total `wheel_track` of the Amiga, or even motor you would like to disable or enable.
      - The settings you can set on this page are:
        - wheel_track
        - v_max_default
        - max_turn_rate
        - min_turn_rate
        - turtle_v
        - turtle_turn_rate
        - max_accel
        - flip_joystick
        - steering_gamma
        - batt_lo
        - batt_hi
        - pto_gear_ratio
        - default_pto
        - min_pto_
        - max_pto
        - m10_on (motor control)
        - m11_on (motor control)
        - m12_on (motor control)
        - m13_on (motor control)


- ### The Pendant Settings
<img src="https://user-images.githubusercontent.com/64480560/231795336-43477c82-db0d-4fa7-9cfc-638af2e11ede.GIF"
     width="320"
     height="300" />

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


### State Indicators

The state indicators are for distacting and understanding which control state your Amiga is in. These states include, but are not limited to, `E-stopped`, `Auto_ready`, and `Cruise Control`.

#### E-stopped

<img src="https://user-images.githubusercontent.com/64480560/232072807-af5208a0-786f-4ae8-8204-a5eef1999d02.jpg"
     width="320"
     height="300" />

<img src="https://user-images.githubusercontent.com/64480560/232072818-d87e312f-88a2-4a6a-8f42-d8682aecd6c5.jpg"
     width="315"
     height="300" />

When your Amiga is E-stopped, a red border will display around the edges of your dashboard screen. When your Amiga is in this state, your motor controller will be un able to move on command.

#### Cruise Control
<img src="https://user-images.githubusercontent.com/64480560/232084662-8b3dcd53-06ac-4479-946a-97471815cb60.gif"
     width="315"
     height="300" />


This state will enable you to place your Amiga at a given speed and allow your Amiga to `cruise` at that speed. When this control state is activated, a green border will be at the edge of your dashboard screen.

#### Auto Control
<img src="https://user-images.githubusercontent.com/64480560/232085022-4a475981-e7fa-4e8f-967b-06827ca8924c.gif"
     width="315"
     height="300" />


This state will enable you to control your Amiga via external controls and through remote source. Some of these sources include the [`virtual_joy_stick`](https://amiga.farm-ng.com/docs/tutorials/virtual_joystick/virtual-joystick-overview).

When you activate the `auto_control` feature on your dashboard. You will see a yellow border appear around the edge of your dashboard. This yellow border means your Amiga in the `auto_ready` state and once the connection is secure it will then gain a green border meaning it is in the `auto_active` state.

:::tip
For more information about Amiga Control States , please visit [Amiga Control States](https://amiga.farm-ng.com/docs/dashboard/control-states)
:::
