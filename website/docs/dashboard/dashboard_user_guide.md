---
id: dashboard-user-guide
title: Dashboard User Guide
---
:::caution
This is subject for change with new updates to the Dashboard.
The user guide represents Dashboard Firmware release `v0.1.9`.
The latest version is Dashboard Firmware release `v0.4.0`.
:::

![IMG6570-2-16x9-aspect-rediced](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/6d3b25ee-cd16-4878-adbc-0e23ffd8d84b)


## Dashboard overview video

<iframe width="560" height="315" src="https://www.youtube.com/embed/PKOhI4hbGUs"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

## Start Page

This is the start page on the dashboard. It will appear when you first turn on your Amiga. Here you select the display's language. You may choose between English, Spanish, French. Pressing the START button will take you to the home screen.

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/fccbf6aa-95ae-41cb-bb65-fb816451c011"/>



Alternatively if you receive the "Check pendant calibration" page,
this means that either you have defective pendant or your pendant needs to be calibrated.

<img src="https://user-images.githubusercontent.com/64480560/233126475-5416e312-9d77-4552-876c-f4129d30f244.jpg"
     width="400"
     height="500" />

:::tip
This button will take you to the same page as the `pendant` section of the Settings tab.
:::

If your pendant is not being detected at all and if it says `No Pendant Detected`
please contact the Farm-ng Support immediately by visiting [our Support page](https://amiga.farm-ng.com/docs/support/).

## Home Screen

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/954a66d5-2155-48f1-9830-25428374fa2a"/>


This is the home screen of the dashboard. On this screen you will find:

- The speedometer
- A preview of motor health
- Average motor temperature
- Battery level of the amiga

## Motor Status Screen

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/d0cc17f2-3cdf-49c5-ab02-e412cbec56bd"/>

This screen for monitoring each motor in much more detail than that of the home screen.
On this screen you can:

- Monitor the control state of the Amiga
- Voltage, RPM, temperature, and current of each motor / motor controller
- State of the CAN bus

## Auto Control Screen

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/9a8dcddf-cb5d-4e3c-95e0-0224f521ae6d"/>


This screen is where the autonomous control of the amiga comes to life. Here you will be able to :

- Enable and disable Auto Control
- Monitor the auto control state
- Monitor the commanded & measured speed and turning rates of the amiga

If you are controlling the Amiga with a brain or other micro-controller,
here is where you will enable & monitor the auto control commands sent to your Amiga.
Auto control examples include the [FPV example](/docs/examples/FPV/) (micro-controller).

## General Settings Tab

Now we have the settings tab, which may be the most important tab.
Here on the settings tab you have a few options. Here you can find:

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/5a500398-6f71-4af6-b589-83560975638f"/> 


### The General Settings Tab

<img src="https://user-images.githubusercontent.com/64480560/233127855-eafd4df9-555f-4154-a238-48c8a2961e3c.jpg"
     width="320"
     height="300" />

This page is where all of the general settings are located.
Here you will be able to set the total `wheel_track` of the Amiga,
or even motor you would like to disable or enable.

The settings you can set on this page are:

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
