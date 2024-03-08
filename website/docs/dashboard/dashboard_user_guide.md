---
id: dashboard-user-guide
title: Dashboard User Guide
---
:::caution
This guide is subject to change with each new update to the Dashboard.

The latest version is Dashboard Firmware release `v0.4.2`.
:::

![IMG6570-2-16x9-aspect-rediced](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/6d3b25ee-cd16-4878-adbc-0e23ffd8d84b)


## Dashboard overview video

<iframe width="560" height="315" src="https://www.youtube.com/embed/PKOhI4hbGUs"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

## Start Page

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/fccbf6aa-95ae-41cb-bb65-fb816451c011"/>

This is the start page on the dashboard. It will appear when you first turn on your Amiga. Here is where you can change the display's language. You may choose between English, Spanish, and French. Pressing the START button will take you to the home screen.


## Home Screen

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/954a66d5-2155-48f1-9830-25428374fa2a"/>


This is the home screen of the dashboard. In the center sits the spedometer,
 where you can adjust to the travel speed of your Amiga. You can switch between metric and standard units by pressing the center button 
 
 
 On the right side of the screen you will see several icons displaying: 
 
- Battery Level
- Average motor temperature
- Connection to Pendant
- Preview of each motor's health

You can always come back to this screen by pressing the upper left icon on the dashboard.


## Motor Status Screen

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/d0cc17f2-3cdf-49c5-ab02-e412cbec56bd"/>

In this screen you can see the control state of your Amiga:
- Active
- Cruise
- Auto Ready/Active
- E-Stopped

 You will also see details on each motor's:
- Voltage
- RPM
- Temperature
- Current draw for each motor/controller

Lastly, CANbus states appear on the right side of the display. Follow this link for an indepth description of your Amiga's
[Canbus Service](https://amiga.farm-ng.com/docs/concepts/canbus_service/)


## Auto Control Screen

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/9a8dcddf-cb5d-4e3c-95e0-0224f521ae6d"/>

If you have an [Intelligence Kit](/docs/intelligence-kit/overview-intel)
 mounted on your Amiga and have some tracks recorded in
[Autoplot](https://amiga.farm-ng.com/docs/apps/autoplot_app/), it is here where autonomous control comes to life.
From this screen, you will be able to:


- Enable and disable Auto Control
- Monitor the Auto Control state
- Monitor the commanded & measured speed of your Amiga

You can use other micro-controllers to command your Amiga. For an example of how to do so, please follow the instructions in this [FPV example](/docs/examples/FPV/)

## General Settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/6dbb13d1-679b-4b7a-8c8c-8c97f6c5b585"/> 

In this screen, you can make configutation changes to your Amiga's: 

- Settings
- Pendant
- H Bridge
- ID
- PTO
- Avanced 

### The General Settings Tab

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/a6ed5324-11fa-4c39-9fcd-6d3c974f9062"/>

This page is where all of the general configuration settings are located.
The configuration changes you can make on this page are:

- `wheel_track`
- `v_max_default`
- `max_turn_rate`
- `min_turn_rate`
- `turtle_v`
- `turtle_turn_rate`
- `max_accel`
- `flip_joystick`
- `steering_gamma`
- `batt_lo`
- `batt_hi`
- `pto_gear_ratio`
- `default_pto_rpm`
- `min_pto_rpm`
- `max_pto_rpm`
- `m10_on` (motor A on)
- `m11_on` (motor B on)
- `m12_on` (motor C on)
- `m13_on` (motor D on)

:::caution
You should press the physical E-stop prior to turning the motors on / off
(with `m10_on`, `m11_on`, `m12_on`, `m13_on`).

If you do not press the physical E-stop, the wheels will brake until it is pressed -> released.
:::

### The Pendant Settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/a73710af-f00e-4c34-a492-c487f7380e22"/>

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/b0232548-6f36-480c-900f-0faeeb236b65"/>

<img source="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/80c5dce0-5766-49da-86d9-30b7442627aa"/>


This page is the hub for the pendant. Here is where you will go to calibrate it,
and to ensure all of the functions of the pendant are operational.
This including the buttons, joystick, and data reception.

### Advanced settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/55e969d6-1a83-4e4d-a5cc-135f27475af0"/> 


This page are for specific function of the dashboard firmware.
The options under `Advance Settings` are:

- `Reboot Dashboard`: This will give a soft reboot to the dashboard
  without having to power cycle your Amiga.
- `Factory Setting Reset`: This setting will revert the general settings such as
`wheel_track`, `max_turn_rate`, and more, back to the factory default values.
  - NOTE: These may not match the values when you first received your Amiga
    if you do not have the standard configuration.
- `Mount CIRCUITPY`: When you would like to Mount CIRCUITPY to update the Dashboard Firmware,
  here is where you will do that in order for your computer to communicate with your Dashboard.
- `Bootloader Mode`: Similar to `Mount CIRCUITPY`,
  when you would like to update the UF2 file on the dashboard you will need to
  place it in a `Bootloader` state. With this button you can perform that action.

:::tip
For more information about Firmware Updates or how to perform an update,
please visit [Dashboard Firmware Update](https://amiga.farm-ng.com/docs/dashboard/dashboard-fw)
:::

### H-bridge settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/93f1e736-9796-4959-a32c-fdd7bd7457b8"/>



This page shows the status of the H-bridge linear actuators on your Amiga.
The H-bridge actuators are controlled with the arrow keys on the pendant.
Only one H-bridge can be actuated at a time,
so the `left` - `right` arrow keys are to select the active H-bridge device
and the `up` - `down` arrows are to move an `Active` actuator.
There are three states you will see for the H-bridge actuators.

- Red: `Not detected`
- Yellow: `Idle` (detected, but not selected)
- Green: `Active` (detected and selected)

### PTO settings

Currently only 1 PTO (power take-off) device is supported.
You will see a message that no PTO is detected if there is not a detected PTO device.
> If you see the "No PTO" message and expect a PTO device, contact farm-ng for support by visiting
> [our Support page](https://amiga.farm-ng.com/docs/support/).

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/bf3d2a67-d10b-41ca-b35b-89fc0f3a1199"/>


If there is detected a PTO device, you will see the following features:

- A direction toggle
- A PTO rpm slider
  - The default, min, & max values of this slider can be configured on the settings page.
- A graph of PTO set-point & measured rpm values.

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/e08dd594-e229-4820-904c-9e4f9aeb2bc1"/>


Note that the PTO rpm values are the output RPM.
The PTO gear ratio can also be configured on the settings page.

### ID settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/e01028c1-cccd-4cff-b2db-62fef69cd9d5"/>


On this page, you will find important information about your Amiga, including the
`Tractor Hardware ID`, `Dashboard Firmware` version number, and the `Updator App`.

#### Updator App

On the `Updator App`, you will be able to update your Amiga dashboard and Updator app itself
through here. You can use the `Updator App` to perform an Over-the-air update.

:::tip
For more information about Firmware Updates or how to perform an update,
please visit [Dashboard Firmware Update](https://amiga.farm-ng.com/docs/dashboard/dashboard-fw)
:::

### State Indicators

The state indicators are for distacting and understanding which control state your Amiga is in.
These states include, but are not limited to, `E-stopped`, `Auto_ready`, and `Cruise Control`.

#### E-stopped

<img src="https://user-images.githubusercontent.com/64480560/232072807-af5208a0-786f-4ae8-8204-a5eef1999d02.jpg"
     width="320"
     height="300" />

<img src="https://user-images.githubusercontent.com/64480560/232072818-d87e312f-88a2-4a6a-8f42-d8682aecd6c5.jpg"
     width="315"
     height="300" />

When your Amiga is E-stopped, a red border will display around the edges of your dashboard screen.
When your Amiga is in this state, your motor controller will be un able to move on command.

#### Cruise Control

<img src="https://user-images.githubusercontent.com/64480560/232084662-8b3dcd53-06ac-4479-946a-97471815cb60.gif"
     width="315"
     height="300" />

This state will enable you to place your Amiga at a given speed and allow your Amiga to `cruise`
at that speed. When this control state is activated,
a green border will be at the edge of your dashboard screen.

#### Auto Control

<img src="https://user-images.githubusercontent.com/64480560/232085022-4a475981-e7fa-4e8f-967b-06827ca8924c.gif"
     width="315"
     height="300" />

This state will enable you to control your Amiga via external controls and through remote source.
Some of these sources include the [`virtual_joy_stick`](https://amiga.farm-ng.com/docs/tutorials/virtual_joystick/virtual-joystick-overview).

When you activate the `auto_control` feature on your dashboard.
You will see a yellow border appear around the edge of your dashboard.
This yellow border means your Amiga in the `auto_ready` state and once the connection is secure
it will then gain a green border meaning it is in the `auto_active` state.

:::tip
For more information about Amiga Control States , please visit [Amiga Control States](https://amiga.farm-ng.com/docs/dashboard/control-states)
:::
