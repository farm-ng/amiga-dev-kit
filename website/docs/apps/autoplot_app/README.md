---
id: autoplot-app
title: Autoplot App
---

# Autoplot App Guide

The Autoplot app is an advanced control interface for your Amiga, offering multiple modes of
operation:

- **Direct control**: Manually drive the robot with simple controls for straight, turn, and backwards.
- **Teach-and-repeat**: Manually drive the robot along a desired path, save it, and then command the
robot to repeat the path autonomously.
- **Remote teleoperation**: Control the robot through any web browser using a keyboard.

:::caution Resource Intensive Operation
The Autoplot app requires significant computational resources when run directly on the robot's screen.
To ensure optimal performance, it is recommended not to use the Autoplot app in conjunction with the
recorder or other custom user applications on the brain's display itself.
However, running the Autoplot app and the recorder app through a web browser on a separate device is
acceptable and should not impact performance.
:::

## Autonomy Requirements

Before starting any operation, make sure to check the following:

- [ ] The robot is calibrated through the [**Filter App**](/docs/apps/filter_app).
- [ ] The GPS antenna offsets are correctly set in the [**Filter App**](/docs/apps/filter_app).
- [ ] Ensure the robot is connected to an RTK base station for enhanced GPS accuracy.
- [ ] Set your Amiga to `automode`.
This is done through the dashboard in the [**automation screen**](https://www.youtube.com/watch?v=PKOhI4hbGUs&t=258s).

:::tip RTK-GPS Configuration
For precision in autonomous operations, configuring the RTK-GPS is essential.
This high-accuracy GPS configuration is critical for tasks that require precise geolocation capabilities.

For detailed information on setting up and configuring RTK-GPS with your Amiga, please refer
to the [**farm-ng GPS Service Overview**](/docs/concepts/gps_service#Requirements).
:::

## How to Use the Autoplot App

### Teach-and-Repeat

The teach-and-repeat functionality allows you to manually drive the robot along a desired path
and then have the robot repeat the path autonomously.

#### 1. Click "Record" to start mapping your path

![Screenshot from 2023-11-08 16-15-51](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/a23646f6-26e3-49c9-b70f-d8faab3ae159)

#### 2. Drive the robot as desired, blue dots will pop up on the screen indicating the robot's trace

![Screenshot from 2023-11-08 16-20-21](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/13bbbec5-f66f-47a4-b064-8e98be59e43f)

#### 3. Click "Save" and name your track to use it later

![image](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/7be15197-ced2-4f07-aa23-453dff7a0835)

#### 4. Load the track when needed and click "Start Track" to initiate autonomous follow

![image](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/72fcf1e5-5152-419b-a74a-78c0ef66b062)

:::info
After starting to follow the track, the `Start Track` button will switch to `Stop`,
which can be used to interrupt the autonomous task.
Additionally, users can press the `○` button on the pendant to disengage `automode`,
which will automatically cancel the autonomous operation.
:::

### Remote Access via Web Browser

The Autoplot app is designed as a web-app, enabling seamless access from any standard web browser
like Google Chrome, Firefox, or Safari.
To open the Autoplot interface in your browser, simply enter the following address:

```bash
<your-robot-name>:8008
```

:::note Remote Control Requirements
To remotely control your Amiga:

- Ensure you are connected to the same network as your Amiga robot.
- For access across different networks, configure [**cross-network access**](/docs/ssh#recommended-configure-cross-network-access)
by adding your Amiga to your Tailscale network.

For Tailscale users, access the app using your Amiga's Fully Qualified Domain Name (FQDN):

```bash
<element-fruit>.<tailnet-name>.ts.net:8008
```

Replace `<element-fruit>` and `<tailnet-name>` with the respective names configured in your
Tailscale network.
:::

You can control your Amiga from a web browser at any time, even when the Autoplot app is not active
on the Brain display.

#### Remote Keyboard Control

Experience direct control of your Amiga robot from any web browser.
Similar to video game controls, this feature allows you to command the robot using simple keyboard inputs.

- **W**: Propels the robot forward
- **A**: Rotates the robot counter-clockwise on the spot
- **D**: Rotates the robot clockwise on the spot

These commands engage the robot's autonomy systems to perform the actions safely and precisely,
setting incremental goals for the robot to achieve.

:::info Autonomy Required for Remote Control
Remote Keyboard Control requires the robot to be in `automode`.
This mode ensures that all movements are managed safely by the robot's autonomous systems.
:::

## Manual vs. Remote Control

You can control your Amiga robot in two ways:

**Manual Control**: Use the pendant or dashboard while physically present with the robot,
ideal for teaching the robot new tracks.

**Remote Control**: From your web browser, you can remotely operate the robot without needing
to be in the same physical location.

Both methods allow for track recording; however, remote control enables you to operate the
robot from any location with internet access.

:::tip Teaching Tracks Remotely or On-Site
Tracks can be taught to the robot whether you're using the on-site pendant or the Remote Keyboard
Control feature via a web browser.
:::

## Status Bar Icons

The Autoplot app features a status bar with icons that provide critical
information for autonomous operation:

- **Automode**: This icon confirms if the robot is in automode, a prerequisite for autonomous tasks.
- **Filter**: This indicates the status of the UKF filter.
Autonomy will not engage if the filter has not converged.
- **GPS**: A visual indicator showing if the GPS service is active and functional.
- **WiFi**: This shows if the robot is connected to Wifi, which is necessary for autonomous operations.
- **Battery**: Displays the current battery level.
Always monitor this, especially before starting long tasks.

<div align="center">
  <img src="https://github.com/farm-ng/amiga-dev-kit/assets/39603677/044304e6-1ae5-4724-845f-da4a9ebe4def"
  alt="image" />
</div>

## Tips for Optimal Autonomy

- Before engaging in autonomous operations, always perform a safety check of the environment.
- When operating the robot via remote keyboard control in the web app, ensure a stable and
responsive network connection.
- Monitor the robot's battery status via the Autoplot app to avoid interruptions in longer operations.

## Troubleshooting

If you encounter issues with autonomy or control:

- Verify all status indicators in the Autoplot app's top bar are active and showing the expected states.
- Check the [**Filter App**](/docs/apps/filter_app)
to confirm that calibration and GPS settings are up-to-date.
- If the robot does not respond to WAD keyboard commands, ensure that no other tasks are running and
that the robot is in automode.

For further assistance, reach out to the [support team](mailto:support@farm-ng.com).
