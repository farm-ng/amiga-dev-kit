---
id: autoplot-app
title: Autoplot App
---

# Autoplot App Guide

The Autoplot app is an advanced control interface for your Amiga,
offering multiple modes of operation:

- **Direct control**: Manually drive the robot with simple controls for straight, turn, and backwards.
- **Teach-and-repeat**: Manually drive the robot along a desired path, save it, and then command the
robot to repeat the path autonomously.
- **Remote teleoperation**: Control the robot through any web browser using a keyboard or an [8Bitdo
Sn30](https://shop.8bitdo.com/products/8bitdo-sn30-pro-bluetooth-gamepad) joystick.

:::caution Resource Intensive Operation
Running the Autoplot app directly on the robot's screen demands considerable computational resources.
For optimal performance, avoid using the Autoplot app alongside other custom applications on the brain.
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
For precision in autonomous operations, configuring the RTK-GPS is essential.
This is critical for tasks that require  precise geo-location capabilities.
Detailed RTK-GPS information can be found on the
[**GPS Service**](/docs/concepts/gps_service/) overview page.
:::

## How to Use the Autoplot App

### Teach-and-Repeat

The Amiga's teach-and-repeat functionality allows you to drive the robot along a desired path
and then repeat the path autonomously.
The process for doing so is as follows:

#### 1. New Path

Click the **New Path** icon to initiate recording.

![new path](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/4e338205-6f07-42a7-8131-5ee6522d597b)

#### 2. Map your Path

Drive the robot through the desired path and note the blue dots popping up on the screen indicating
the robot's trace.

![recording](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/65c208c2-0685-48b6-ba51-8124747c5e85)

If you need to remove points along your recorded track, click the **Pause Path** button followed by
the **Remove Point** button.

![remove points](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/22cb8ddf-87c7-4d13-b9d6-6d976b1d120f)
Each press of the **Remove Point** button will delete a single dot. Deleted points will appear in green.
Once you have removed the desired points, click on **Resume Recording** to continue mapping your path.

:::tip Removing Points
Use this feature when you have deviated slightly from the desired course and need to make some corrections.
:::

#### 3. Saving a Path

Clicking the **Save** button will prompt you to name your recently recorded track for later use.

![name it](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/e31b3e77-4b94-4119-a0cc-2efd260c0fff)

#### 4. Load Path

Clicking the **Load Path** icon enables you to
 select from any of your previously recorded tracks.

![load it](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/deb2daaf-37bf-4a51-9537-1ffcda67464c)

:::tip Auto Control
In order to repeat a pre-recorded path, you must manually set the Dashboard to
[**Auto Control**](/docs/dashboard/dashboard-user-guide#auto-control),
and be sure that all other
[**Autonomy Requirements**](/docs/apps/autoplot_app/#autonomy-requirements) have been met.
:::

![start](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/621eb211-1e2d-4553-a202-fb9e8eac962d)

Once you have loaded a track the **Start Path** icon will turn black and you will be ready to deploy
autonomous navigation on your Amiga.

:::info
After starting to follow the track, the `Start Track` button will switch to `Stop`,
which can be used to interrupt the autonomous task.
Additionally, users can press the `○` button on the pendant to disengage `automode`,
which will automatically cancel the autonomous operation.
:::

### Tool Control

This feature allows you to control your connected hardware devices through a browser window.
The control panel is accessed by clicking on the gear icon located in the upper
right corner.
![gearing](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/f09d117f-1026-4036-b2f0-20a557f83c9a)

Starting with dashboard firmware release
[**amiga-dash-v0.5.0**](https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.5.0),
there is support for up to four H-Bridge devices.
These devices can be either latched or momentarily controlled,
and can optionally be coupled for synchronous operation.

![Screenshot from 2024-05-02 18-05-04](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/ffb45918-ed86-497d-a72b-5892d75053ab)

Up to two PTO Devices are also supported and can be remotely selected for operation.
The control panel gives you directional controls for both H-Bridge and PTO connected devices.
As an added safety measure you may remotely stop all actively engaged tools.

## How to Control your Amiga

You can control your Amiga robot in two ways:

**Manual Control**: Use the [pendant](/docs/pendant),
the [kartech](https://kar-tech.com/single-axis-joystick-universal-mega-system.html)
or [dashboard](/docs/dashboard/dashboard-user-guide)
while physically present with the robot,
ideal for teaching the robot new tracks.

Here are instructions for using the pendant and the kartech at the dashboard firmware release
[**amiga-dash-v0.5.0**](https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.5.0)

:::info
The supported Kartech remote changed in dashboard firmware release
[**amiga-dash-v0.7.0**](https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.7.0).

Documentation of the controls for this remote are coming soon.
:::

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

:::info Auto Mode Required for Remote Control
The remote Control operation requires the robot's
Dashboard be set to [**Auto Control**](/docs/dashboard/dashboard-user-guide#auto-control).
This mode ensures that all movements are managed safely by the robot's autonomous systems.
:::

Both methods allow for track recording; however, remote control enables you to operate the
robot from any location with internet access.

:::tip Teaching Tracks Remotely or On-Site
Tracks can be taught to the robot by driving it manually with the pendant or the Kar-Tech controller.
Alternatively, you may use the Keyboard controls or the Game Pad controller via a web browser.
:::

## Tips for Optimal Autonomy

- Always perform a safety check of the surrounding environment before engaging in autonomous operations.
- When operating the robot via remote keyboard control in the web app, ensure a stable and
responsive network connection.
- Monitor the robot's battery status via the Autoplot app to avoid interruptions in longer operations.

## Troubleshooting

If you encounter issues with autonomy or control:

![icon bar](https://github.com/user-attachments/assets/06161702-9f28-4ea0-9026-102cc00db88c)

- Verify all status indicators in the Autoplot app's top bar are active and showing the expected states.
- Confirm that [**IMU Calibration**](/docs/apps/launcher/#imu-calibration) and
[**GPS NTRIP**](/docs/apps/launcher/#gps-ntrip) settings are set correctly and up-to-date.
- If the robot does not respond to WASD keyboard commands, ensure that no other tasks are running and
the robot's Dashboard is set to [**Auto Control**](/docs/dashboard/dashboard-user-guide#auto-control).

![can error](https://github.com/user-attachments/assets/7595058f-9b7d-495c-a4b5-e73acca36cb9)

- If the CAN has an unhealthy state, the icon on the navigation bar will be crossed out.
Click on the icon to visualize the CAN status and any possible errors.

![filter error](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/9e6ab78d-dd52-4d86-9688-53b7ee9bff66)

- If the filter is not converged, the icon on the navigation bar will be crossed out.
Click on the icon to visualize error's details.

![gps error](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/c026d6fb-c86e-43d9-b8ca-928bd2ed5515)

- If the robot is not receiving GPS messages the icon on the navigation bar will be crossed out.
Click on the icon to visualize error's details.

![fail](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/9bd8b212-3286-4bac-9e40-2ec86b9ff11d)

- If the robot is following tracks but with an small offset (up to 30 cm or 12 inches), your RTK
service may need extra time to improve the accuracy of its connection. This is prone to happen when
more than 12 km (8 miles) of your base station, when operating under cloudy conditions, and/or
local topography. In some cases, this problem is reduced within 5 to 30 minutes of the system boot.
Moving the robot on your operational area can reduce this time.

- If you see tracks with an expressive offset (larger than 0.5 m or 2 feet), verify that your
RTK-correction service provider is NOT using a VRS (Virtual Reference Station).These stations
change their reference system after every reboot and are not currently supported. We recommend
switching to a service provider that uses a static base station or that you record new paths after
every reboot.

Occasionally, track following might fail.
An error message will appear and the **Start Path** button will switch to **Error-Check status**.
If you encounter this error message, make sure you Robot meets all the [**Autonomy Requirements**](/docs/apps/autoplot_app/#autonomy-requirements).

For further assistance, reach out to the [support team](mailto:support@farm-ng.com).
