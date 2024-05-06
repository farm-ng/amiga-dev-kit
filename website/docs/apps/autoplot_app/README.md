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
- [ ] [**GPS NTRIP**](/docs/apps/launcher/#gps-ntrip) requirements have been met.
- [ ] Robot is connected to [**WiFi**](/docs/apps/launcher/#wifi).
- [ ] Amiga Dashboard is set to [**Auto Control**](/docs/dashboard/dashboard-user-guide#auto-control).

:::tip RTK-GPS Configuration
For precision in autonomous operations,
configuring the RTK-GPS is essential.
This is critical for tasks that require
 precise geo-location capabilities.
Detailed RTK-GPS information can be found on the
 [**GPS Service**](/docs/concepts/gps_service/) overview page.
:::

## How to Use the Autoplot App

### Teach-and-Repeat

The Amiga's teach-and-repeat functionality allows you to
 drive the robot along a desired path
and then repeat the path autonomously. The process for doing so is as follows:

#### 1. New Path

Click the **New Path** icon to initiate recording.

![new path](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/4e338205-6f07-42a7-8131-5ee6522d597b)

#### 2. Map your Path

Drive the robot through the desired path and note
 the blue dots popping up on the screen indicating
  the robot's trace.

![recording](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/65c208c2-0685-48b6-ba51-8124747c5e85)

If you need to remove points along your recorded track,
 click the **Pause Path** button followed by
  the **Remove Point** button.

![remove points](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/22cb8ddf-87c7-4d13-b9d6-6d976b1d120f)
Each press of the **Remove Point** button will delete a single dot. Deleted points will appear in green.
  Once you have removed the desired points, click on **Resume Recording**
    to continue mapping your path.

:::tip Removing Points
Use this feature when you have deviated
 slightly from the desired course and
 need to make some corrections.
:::

#### 3. Saving a Path

Clicking the **Save** button will prompt you to name
 your recently recorded track for later use.

![name it](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/e31b3e77-4b94-4119-a0cc-2efd260c0fff)

#### 4. Load Path

Clicking the **Load Path** icon enables you to
 select from any of your previously recorded tracks.

![load it](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/deb2daaf-37bf-4a51-9537-1ffcda67464c)

:::tip Auto Control
In order to repeat a pre-recorded path, you must manually
set the Dashboard to [**Auto Control**](/docs/dashboard/dashboard-user-guide#auto-control), and be sure that all
other [**Autonomy Requirements**](/docs/apps/autoplot_app/#autonomy-requirements) have been met.

:::

![start](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/621eb211-1e2d-4553-a202-fb9e8eac962d)

Once you have loaded a track the **Start Path** icon will
 turn black and you will be ready to deploy
  autonomous navigation on your Amiga.

:::info
After starting to follow the track, the `Start Track` button will switch to `Stop`,
which can be used to interrupt the autonomous task.
Additionally, users can press the `○` button on the pendant to disengage `automode`,
which will automatically cancel the autonomous operation.
:::

### Tool Control

![Screenshot from 2024-05-02 17-57-53](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/7ea61bf7-d90f-4c06-b98e-bc7f76133213)
This feature allows you to control your
 connected hardware devices through
  a browser window. The control panel is accessed by
   clicking on the gear icon located in the upper
    right corner of the Autoplot app. Note that you must have
     your Dashboard set to [**Auto Control**](/docs/dashboard/dashboard-user-guide#auto-control) in order for this feature to work.

H bridge Devices can be latched or momentarily controlled.
:::tip H-Bridges
Our current Firmware release [**amiga-dash-v0.5.0**](https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.5.0) supports
 up to four H-Bridge devices that can be coupled for
  synchronous operation. It also supports controls for two PTO's.
:::

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
