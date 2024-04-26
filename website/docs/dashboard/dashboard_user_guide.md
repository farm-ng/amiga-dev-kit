---
id: dashboard-user-guide
title: Dashboard User Guide
---
:::caution
This guide is subject to change with each new update to the Dashboard.

The latest version is Dashboard Firmware release `v0.5.0`.
:::

![IMG6570-2-16x9-aspect-rediced](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/6d3b25ee-cd16-4878-adbc-0e23ffd8d84b)

## Dashboard overview video

<iframe width="560" height="315" src="https://www.youtube.com/embed/PKOhI4hbGUs"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

## Start Page

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/fccbf6aa-95ae-41cb-bb65-fb816451c011"/>

This is the start page on the dashboard.
It will appear when you first turn on your Amiga.
Here is where you can change the display's language.
You may choose between English, Spanish, and French.
Pressing the START button will take you to the home screen.

## Home Screen

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/954a66d5-2155-48f1-9830-25428374fa2a"/>

This is the home screen of the dashboard. In the center sits the speedometer,
 where you can switch between metric and standard units and adjust to the travel speed of your Amiga.

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

 You will also see details on each motor / motor controller's:

- Voltage
- RPM
- Temperature
- Current draw

Lastly, CAN bus states will appear on the right side of the display.

## Auto Control Screen

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/9a8dcddf-cb5d-4e3c-95e0-0224f521ae6d"/>

If you have an [Intelligence Kit](/docs/intelligence-kit/overview-intel)
 mounted on your Amiga and have some tracks recorded in
[Autoplot](https://amiga.farm-ng.com/docs/apps/autoplot_app/), activating the
auto mode on this screen is what brings autonomous control into action.

From this screen, you will be able to:

- Enable and disable Auto Control
- Monitor the Auto Control state
- Monitor the commanded & measured speed of your Amiga

You can also use micro-controllers to command your Amiga.
For an example of how to do so, please follow the instructions in this [FPV example](/docs/examples/FPV/)

## General Settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/6dbb13d1-679b-4b7a-8c8c-8c97f6c5b585"/>

In this screen, you can make configuration changes to your Amiga's:

- Settings
- Pendant
- H Bridge
- ID
- PTO
- Advanced

### Configuration Settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/a6ed5324-11fa-4c39-9fcd-6d3c974f9062"/>

General configuration settings are located in this tab.
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
You should press the E-stop button prior to turning the motors on / off
(with `m10_on`, `m11_on`, `m12_on`, `m13_on`).
Failure to do so will brake the wheels until it is pressed -> released.
:::

### The Pendant Settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/b458227f-3422-4c43-8602-58c56b1c0dba"/>

This is the hub for the pendant. Here is where you can confirm data reception and overall functionality.
Pressing on the icon will take you to the calibration screen.

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/a73710af-f00e-4c34-a492-c487f7380e22"/>

A green square around the center dot indicates that the your pendant is properly calibrated.

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/b0232548-6f36-480c-900f-0faeeb236b65"/>

A purple square indicates the need to re-calibrate your pendant.

:::caution
If your Amiga begins to move on its own at start up, chances are that your pendant needs to be calibrated.
With the above image in mind (purple square around the white dot), your Amiga would move forwards
and towards the right at start up.
:::

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/8bc4980b-d6f4-445b-b772-0b7e46b7eb1a"/>

Pressing the Pendant image on the right will show the latest button configurations.

:::tip
The arrows (up/down/left/right) in the center of the pendant are used to select and engage with the H-Bridge(s).
:::

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/0f880f2a-3958-4066-989d-d68b68547665"/>

These are the button configurations for those of you who purchased a Kar-Tech controller.

### H-bridge settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/bd24caf0-01c7-4647-b6ba-9ce6c55c47aa"/>

An H bridge circuit allows you to apply a voltage across a load (i.e. a linear actuator)
in either direction. We currently support up to four h bridge modules on the Amiga.
They can be engaged momentarily or latched.
The `up` - `down` arrows are used to control the selected H bridge device(s)
and the `left` - `right` arrow keys are used to select between H-bridge devices.
Two H-bridge devices (0 & 1 or 2 & 3) can be coupled with the **coupler** button and actuated together.

:::tip
Our [3 point hitch](https://farm-ng.com/products/cat-zero-3-point-lift-kit)
is temporarily engaged by the [H bridge](https://farm-ng.com/products/h-bridge-for-canbus-accessory-control)
to lift and lower the [A frame](https://farm-ng.com/products/cat-0-a-frame-kit)
which you can use to engage a [seeder](https://farm-ng.com/products/mounted-6-line-seeder).
Alternatively, you can use the latching function in a sprayer system.
:::

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/93f1e736-9796-4959-a32c-fdd7bd7457b8"/>

By default, the first H-bridge that is connected will fill the 0 position in green.
You can switch between MOMENTARY and LATCHING states by tapping on the desired state on the Dashboard.

If you expect a H-bridge device but it is not showing up,
 please reach out to us via farm-ng's
[Support](https://amiga.farm-ng.com/docs/support/) page.

### ID settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/4ea758d8-5a1e-47fc-ae93-567306267af1"/>

This page displays your `Tractor Hardware ID`, `Dashboard Firmware` version,
and enables you to launch the `Updator App` where you can carry out Over-the-Air updates.

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/e01028c1-cccd-4cff-b2db-62fef69cd9d5"/>

#### Updator App

On the `Updator App`, you will be able to update your Amiga dashboard and Updator app itself
through here. You can use the `Updator App` to perform an Over-the-air update.

:::tip
For more information about Firmware Updates or how to perform an update,
please visit [Dashboard Firmware Update](https://amiga.farm-ng.com/docs/dashboard/dashboard-fw)
:::

### PTO settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/40511d77-a07a-4344-a532-2118d0e61b62"/>

The PTO (power take-off) screen allows you to select between devices (PTO0 &PTO1), fine tune their
settings and monitor their performance.
We currently support up to two PTO's running at the same time.

When you connect a PTO device, you will have access to the following features:

- A slider control that enables you to increase or decrease the PTO's RPM.
- Directional control by means of a toggle switch on the touchscreen.

On the left side of the screen you will see a graph displaying the current PTO set-point &
measured rpm values.

:::tip
The default, min, & max values for the RPM slider can be configured on the settings page.
The PTO gear ratio can also be configured on the settings page.
:::

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/e08dd594-e229-4820-904c-9e4f9aeb2bc1"/>

Occasionally a message stating that no PTO device has been detected will be accompanied by the
following image.
Inspect all cables and make sure they are properly connected.
<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/bf3d2a67-d10b-41ca-b35b-89fc0f3a1199"/>

If you expect a PTO device but it is not showing up,
please reach out to us via farm-ng's
[Support](https://amiga.farm-ng.com/docs/support/) page.

### Advanced settings

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/33a4aa3c-ac1f-436b-89c7-b5ef84a66004"/>

This page allows you to deep dive into the dashboard's firmware

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

<img src="https://github.com/farm-ng/amiga-dev-kit/assets/133177230/55e969d6-1a83-4e4d-a5cc-135f27475af0"/>

:::tip

For more information about Firmware Updates or how to perform an update,
please visit [Dashboard Firmware Update](https://amiga.farm-ng.com/docs/dashboard/dashboard-fw)
:::

### State Indicators

The state indicators are for defining and understanding which control state your Amiga is in.
These states include, but are not limited to, `E-stopped`, `Auto_ready`, and `Cruise Control`.

#### E-Stopped

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
