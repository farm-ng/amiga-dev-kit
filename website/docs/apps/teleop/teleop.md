---
id: teleop
title: TeleOp
---

# TeleOp
The TeleOp (Teleoperation) application is a remote control interface with real-time video streaming! All panels are draggable and can be minimized to save screen space. Use WASD keyboard commands for robot controls and visualize movement in real-time.
![Screenshot from 2025-06-11 10-17-41](https://github.com/user-attachments/assets/f0d122ca-7733-4f2a-b7e7-de860c309001)

### Panel Controls
**W** Moves robot forward. **A** Turns robot left. **S** Moves robot backward. **D** Turns robot right. The **SPACE BAR** Immediately stops all robot movement and the red stop button is highlighted. When pressed, the keys will be highlighted on the panel to indicate that they are active. **Linear** and **Angular** velocities are displayed whenever the robot is in motion.

The **Tool Controls** panel is used to control attachments. With a PTO attached you will be provided with circular arrow buttons for **Clockwise** and **Counterclockwise** directional control. The **RPM** slider adjusts rotational speed for PTO tools (1-200 RPM) and provides you with a numeric value display.

In the case of and H-bride, this panel will give you the option to configure it as an **On/Off** switch, or a **Linear Motion** tool for linear/polar control. Selecting the **On/Off** option takes you to a screen where you set the polarity of the switch. If you select **Linear Motion** to configure your H-bridge, a **Time to Active** slider allow you to set a timeout duration for your linear motion tool (1-16 seconds) and provides you with a with numeric value display.

In both instances the **Play** button starts/tests the selected tool with your current settings. When engaged the play circle turns Green. The **Stop** button stops the currently active tool and when engaged the play circle turns Red. The **Undo** button resets your tool configuration to previously configured state.

In the **Camera Controls** panel, you can switch between available cameras (Oak0, Oak1, etc.) by way of the **Camera selection** buttons. Choose amongst **RGB** and **Mono** under the **Stream Type** field. The **Resolution** buttons set the camera resolution to 360p or 720p depending on your desired needs. Toggle the **Auto Exposure** and **Auto Focus** buttons under the **Camera Settings** to make fine-tuned adjustments to your camera's **Exposure Time**, **ISO** , and **Lens Position**. Press the **Apply Settings** button to save your camera configuration. **Note that stream type, resolution, and camera settings are only applied to the currently selected camera**

The lower left crosshair target on the **Map View** centers the map view on the current position of your robot. The robot position marker shows both the robot location and its heading on the map.
**Exit to Launcher** takes you back to the main dashboard.