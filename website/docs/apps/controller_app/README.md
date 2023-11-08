---
id: controller-app
title: Autoplot App
---

# Autoplot App Guide

The Autoplot app is an advanced control interface for your Amiga, offering multiple modes of
operation:

- **Direct control**: Manually drive the robot with simple controls for straight, turn, and backwards.
- **Teach-and-repeat**: Manually drive the robot along a desired path, save it, and then command the robot to repeat the path autonomously.
- **Remote teleoperation**: Control the robot through any web browser.

## How to Use the Autoplot App

### Teach-and-Repeat

The teach-and-repeat functionality allows you to manually drive the robot along a desired path
and then have the robot repeat the path autonomously.

1. Click "Record" to start mapping your path.
2. Drive the robot as desired.
3. Click "Save" and name your track to use it later.
4. Load the track when needed and click "Start Track" to initiate autonomous follow.

### Remote Access via Web Browser

The Autoplot is a web-app, and can be access through any web browser, such as Google Chrome.
To view it in your browser, navigate to: `<element-vegetable>:8008`

:::note NOTE
Make sure to rename `<element-vegetable>` with your actual robot name.
:::

This app runs persistently in the background, even when not active on the robot's display,
ensuring that you can control your Amiga from any web browser at any time.

### WASD Control

WASD is possible on web browsers.
When your robot is in `automode`, you can take direct control with simple keyboard commands.

- **W**: Move forward
- **A**: Turn counterclockwise in place
- **D**: Turn clockwise in place
- **S**: Disabled for safety

Pressing these keys in your web browser will send commands directly to the robot, allowing for
immediate control.

:::info
Using WASD control will override any ongoing autonomous tasks.
:::

## Autonomy Requirements

Before starting any operation, make sure to check the following:

- [ ] The robot is calibrated through the [**Filter App**](/docs/apps/filter_app).
- [ ] The GPS antenna offsets are correctly set in the [**Filter App**](/docs/apps/filter_app).
- [ ] Ensure the robot is connected to an RTK base station for enhanced GPS accuracy.

:::tip RTK-GPS Configuration
For precision in autonomous operations, configuring the RTK-GPS is essential.
This high-accuracy GPS configuration is critical for tasks that require precise geolocation capabilities.

For detailed information on setting up and configuring RTK-GPS with your Amiga, please refer
to the [**farm-ng GPS Service Overview**](/docs/concepts/gps_service#Requirements).
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

## Tips for Optimal Autonomy

- Before engaging in autonomous operations, always perform a safety check of the environment.
- When operating the robot via WASD control in the web app, ensure a stable and responsive network connection.
- Monitor the robot's battery status via the Autoplot app to avoid interruptions in longer operations.

## Troubleshooting

If you encounter issues with autonomy or control:

- Verify all status indicators in the Autoplot app's top bar are active and showing the expected states.
- Check the [**Filter App**](/docs/apps/filter_app)
to confirm that calibration and GPS settings are up-to-date.
- If the robot does not respond to WASD commands, ensure that no other tasks are running and that
the robot is in automode.

For further assistance, reach out to the [support team](mailto:support@farm-ng.com).
