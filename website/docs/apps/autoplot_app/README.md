---
id: autoplot-app
title: Autoplot App
---

# Autoplot App Guide

The Autoplot app is an advanced control interface for your Amiga,
offering multiple modes of
operation:

:::caution Resource Intensive Operation
Running the Autoplot app directly on the robot's
 screen demands considerable computational resources.
  For optimal performance, avoid using the Autoplot app
   alongside other custom applications on the brain.
It is recommended to use the Autoplot app and
any custom applications through a web browser
 on a separate device, as this should not impact performance.
:::

## Autonomy Requirements

Before engaging autonomy, ensure to verify:

- [ ] Accurate [**IMU Calibration**](/docs/apps/launcher/#imu-calibration).
- [ ] The correct offsets are set in [**Robot Geometry**](/docs/apps/launcher/#robot-geometry).
- [ ] [**GPS NTRIP**](docs/apps/launcher/#gps-ntrip) requirements have been met.
- [ ] Robot is connected to [**WiFi**](docs/apps/launcher/#wifi).
- [ ] Amiga Dashboard is set to [**Auto Control**](/docs/dashboard/dashboard-user-guide#auto-control).

:::tip RTK-GPS Configuration
For precision in autonomous operations,
configuring the RTK-GPS is essential.
This high-accuracy GPS configuration is
critical for tasks that require precise geo-location capabilities.

For detailed information on setting up and
configuring RTK-GPS with your Amiga, please refer
to the [**farm-ng GPS Service Overview**](/docs/concepts/gps_service#Requirements).
:::

## How to Use the Autoplot App

### Teach-and-Repeat

The teach-and-repeat functionality allows you to
 drive the robot along a desired path
and then have the robot repeat the path autonomously.

#### 1. New Path

Click the 'New Path' icon to initiate recording.

![new path](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/4e338205-6f07-42a7-8131-5ee6522d597b)

#### 2. Drive the robot as desired, blue dots will pop up on the screen indicating the robot's trace

![recording](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/65c208c2-0685-48b6-ba51-8124747c5e85)

To remove waypoints (blue dots), first click the
 'Pause Path' button, then select the 'Remove Point' icon.
  Each press of the 'Remove Point' icon will delete a single dot.
   Once you have removed the desired points, click 'Resume Recording'
    to continue mapping your path.

![remove](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/697f37f8-435b-4d4c-945b-7c12fd22b2dd)

![remove points](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/22cb8ddf-87c7-4d13-b9d6-6d976b1d120f)

#### 3. Click "Save" and name your track to use it later

![name it](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/e31b3e77-4b94-4119-a0cc-2efd260c0fff)

#### 4. Load the track when needed and click "Start Track" to initiate autonomous follow

![load it](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/deb2daaf-37bf-4a51-9537-1ffcda67464c)

![start](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/621eb211-1e2d-4553-a202-fb9e8eac962d)

:::info
After starting to follow the track, the `Start Track` button will switch to `Stop`,
which can be used to interrupt the autonomous task.
Additionally, users can press the `○` button on the pendant to disengage `automode`,
which will automatically cancel the autonomous operation.
:::

### Tool Control

![Screenshot from 2024-05-02 17-57-53](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/7ea61bf7-d90f-4c06-b98e-bc7f76133213)

![Screenshot from 2024-05-02 18-05-04](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/ffb45918-ed86-497d-a72b-5892d75053ab)

### Remote Access via Web Browser

The Autoplot app is designed as a web-app,
enabling seamless access from any standard web browser
like Google Chrome, Firefox, or Safari.
To open the Autoplot interface in your browser,
simply enter the following address:

```bash
<your-robot-name>:8008
```

:::note Remote Control Requirements
To remotely control your Amiga:

- Ensure you are connected to the same network as your Amiga robot.
- For access across different networks,
  configure [**cross-network access**](/docs/ssh#recommended-configure-cross-network-access)
by adding your Amiga to your Tailscale network.

For Tailscale users, access the app using your Amiga's
Fully Qualified Domain Name (FQDN):

```bash
<element-fruit>.<tailnet-name>.ts.net:8008
```

Replace `<element-fruit>` and `<tailnet-name>`
with the respective names configured in your
Tailscale network.
:::

You can control your Amiga from a web browser at any time,
even when the Autoplot app is not active
on the Brain display.

## How to Control your Amiga

You can control your Amiga robot in two ways:

**Manual Control**: Use the [pendant](/docs/pendant),
the [kartech](https://kar-tech.com/single-axis-joystick-universal-mega-system.html)
or [dashboard](/docs/dashboard/dashboard-user-guide)
while physically present with the robot,
ideal for teaching the robot new tracks.

Here are instructions for using the pendant
and the kartech as of dashboard firmware
release [**`v0.0.5`**](https://github.com/farm-ng/amiga-dev-kit/releases):

![pendant](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/4a8fbe60-7780-4f32-b92f-6ce895a706e0)
![kartech](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/99aee18e-e7d2-41c5-888b-6d38365c699e)

**Remote Control**: From your web browser,
you can remotely operate the robot without needing
to be in the same physical location.
For that, you can use a keyboard for
driving your Amiga, or use an
[8Bitdo Sn30](https://shop.8bitdo.com/products/8bitdo-sn30-pro-bluetooth-gamepad) joystick.

Here are instructions for using both options:

![keyboard](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/6d81ee6c-6f9b-4395-ab4b-aaaa01b17565)
![joystick](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/6bf57701-f241-4855-a675-d174084637b4)

:::info Autonomy Required for Remote Control
Remote Control requires the robot to be in `automode`.
This mode ensures that all movements
are managed safely by the robot's autonomous systems.
:::

Both methods allow for track recording;
however, remote control enables you to operate the
robot from any location with internet access.

:::tip Teaching Tracks Remotely or On-Site
Tracks can be taught to the robot
whether you're using the on-site pendant or the Remote Keyboard
Control feature via a web browser.
:::

## Tips for Optimal Autonomy

- Before engaging in autonomous operations,
- always perform a safety check of the environment.
- When operating the robot via remote keyboard control
in the web app, ensure a stable and
responsive network connection.
- Monitor the robot's battery status via the Autoplot app
to avoid interruptions in longer operations.

## Troubleshooting

If you encounter issues with autonomy or control:

- Verify all status indicators in the Autoplot app's
top bar are active and showing the expected states.
- Check the [**Filter App**](/docs/apps/filter_app)
to confirm that calibration and GPS settings are up-to-date.
- If the robot does not respond to WAD keyboard commands,
ensure that no other tasks are running and
that the robot is in automode.

![filter error](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/9e6ab78d-dd52-4d86-9688-53b7ee9bff66)

![gps error](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/c026d6fb-c86e-43d9-b8ca-928bd2ed5515)

![fail](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/9bd8b212-3286-4bac-9e40-2ec86b9ff11d)

For further assistance, reach out to the [support team](mailto:support@farm-ng.com).
