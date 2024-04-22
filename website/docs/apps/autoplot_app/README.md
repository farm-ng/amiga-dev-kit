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
- **Remote teleoperation**: Control the robot through any web browser using a keyboard or an [8Bitdo
Sn30](https://shop.8bitdo.com/products/8bitdo-sn30-pro-bluetooth-gamepad) joystick.

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

![record](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/2f33966c-372e-44ea-a62e-91d2307b3d30)

![record paths](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/86c47778-d759-40a3-834f-93221920b5f5)


#### 2. Drive the robot as desired, blue dots will pop up on the screen indicating the robot's trace

![save path](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/f4fa52c4-ddff-4f6b-897c-93303e252f2e)


#### 3. Click "Save" and name your track to use it later

![load path](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/3a846ca0-902f-457d-9c69-da67564cb452)


#### 4. Load the track when needed and click "Start Track" to initiate autonomous follow

![image](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/72fcf1e5-5152-419b-a74a-78c0ef66b062)

:::info
After starting to follow the track, the `Start Track` button will switch to `Stop`,
which can be used to interrupt the autonomous task.
Additionally, users can press the `○` button on the pendant to disengage `automode`,
which will automatically cancel the autonomous operation.
:::

![gps](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/03744cf3-35a2-4fea-8ed5-05426d9350c6)

![filter](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/317fb625-f4fc-4e77-bd23-d353c624f0fe)

![metadata](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/bc0ce395-da58-4064-848d-a61e66d991d4)


![nav bar](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/03e49c43-19fb-449b-9040-bb66b82bc6db)



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

## How to Control your Amiga

You can control your Amiga robot in two ways:

**Manual Control**: Use the [pendant](/docs/pendant),
the [kartech](https://kar-tech.com/single-axis-joystick-universal-mega-system.html)
or [dashboard](/docs/dashboard/dashboard-user-guide)
while physically present with the robot, ideal for teaching the robot new tracks.

Here are instructions for using the pendant and the kartech as of dashboard firmware
release [**`v0.0.5`**](https://github.com/farm-ng/amiga-dev-kit/releases):

![pendant](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/4a8fbe60-7780-4f32-b92f-6ce895a706e0)
![kartech](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/99aee18e-e7d2-41c5-888b-6d38365c699e)

**Remote Control**: From your web browser, you can remotely operate the robot without needing
to be in the same physical location.
For that, you can use a keyboard for driving your Amiga, or use an
[8Bitdo Sn30](https://shop.8bitdo.com/products/8bitdo-sn30-pro-bluetooth-gamepad) joystick.

Here are instructions for using both options:

![keyboard](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/6d81ee6c-6f9b-4395-ab4b-aaaa01b17565)
![joystick](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/6bf57701-f241-4855-a675-d174084637b4)

:::info Autonomy Required for Remote Control
Remote Control requires the robot to be in `automode`.
This mode ensures that all movements are managed safely by the robot's autonomous systems.
:::

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
