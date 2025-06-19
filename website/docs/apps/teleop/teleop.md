---
id: teleop
title: TeleOp
---

# TeleOp Guide

The TeleOp (Teleoperation) application is a remote control interface with real-time video streaming! All panels are draggable and can be minimized to save screen space. Use WASD keyboard shortcuts for robot control and visualize real-time updates from the robot sensors and status.

![Screenshot from 2025-06-11 10-17-41](https://github.com/user-attachments/assets/f0d122ca-7733-4f2a-b7e7-de860c309001)

  ### Teleop Controls Panel

   **Movement Buttons:**
   **W** Moves robot forward (positive linear velocity). It is highlighted when active
   **A** Turns robot left (positive angular velocity). It is highlighted when active
   **S** Moves robot backward (negative linear velocity). It is highlighted when active
   **D** Turns robot right (negative angular velocity). It is highlighted when active
   **SPACE BAR** Immediately stops all robot movement and the red stop button is highlighted when pressed

  ### Panel Controls:
   **Minimize/Maximize** This button collapses or expands the chosen control panel window
   **Resize Handle** You may resizing the tool control panel by clicking the bottom-right corner indicator
   **Drag Handle** You may reposition any window on the control panel by dragging it to your selected location

  ### Tool Control Panel

  Draggable panel for implement/attachment control

  ### Tool Type Selection:

   **On/Off** This button configures your chosen tool as simple on/off switch
   **Linear Motion** This button configures your tool for linear/polar motion with timeout

  ### Tool Operation Buttons:

   Direction Buttons
   **Clockwise Button** This circular arrow sets positive direction for tool operations
   **Counterclockwise Button** This circular arrow sets negative direction for tool operations
   **Play** This button starts/tests the selected tool with your current settings. When engaged the play circle turns Green
   **Stop** This button stops the currently active tool. When engaged the play circle turns Red
   **Undo** This arrow button resets your tool configuration to previous state

  ### Tool Setting Sliders:

   **RPM Slider** This slider adjusts rotational speed for PTO tools (1-200 RPM) and provides you with a numeric value display
   **Time Slider** This range slider sets the timeout duration for your linear motion tools (1-16 seconds) and provides you with a with numeric value display

  ### Camera Control Panel
   **Camera selection** These buttons allow you to switch between available cameras (Oak0, Oak1, etc.)
  ### Stream Configuration:

   **Stream Type** These buttons allow you to choose amongst various camera stream types (Mono, RGB, etc.)
   **Resolution**Buttons
     Function: Sets camera resolution (360p, 720p)
     Visual: Radio button group with resolution options

  ### Camera Settings:

   **Auto Exposure** Button
     Function: Toggles automatic exposure control
     Visual: Blue when enabled, gray when disabled
   **Auto Focus** Button
     Function: Toggles automatic focus control
     Visual: Blue when enabled, gray when disabled

  ### Camera Setting Sliders:

   **Exposure Time** Slider
     Function: Manual exposure time adjustment (when auto-exposure off)
     Visual: Range slider with microsecond values
   **ISO** Slider
     Function: Manual ISO sensitivity adjustment (when auto-exposure off)
     Visual: Range slider with ISO values
   **Lens Position** Slider
     Function: Manual focus adjustment (when auto-focus off)
     Visual: Range slider with position values

  ### Panel Actions:

   **Apply Settings** Button
     Function: Sends camera configuration to robot
     Visual: White button, shows "Applying..." when processing

 ### Map Controls:

   **Center on Robot** Button
     Function: Centers map view on current robot position
     Visual: Crosshair target icon in bottom-left of map

  ### Real-time Data Display:

   Connection Status Indicator: Shows WebSocket connection status
   Velocity Display: Shows current linear/angular velocities
   Robot Position Marker: Shows robot location and heading on map
   Tool Status Indicators: Shows if tools are active/inactive

  **Exit to Launcher**
   Located on the bottom-left corner of screen; this button returns the user to the main launcher application