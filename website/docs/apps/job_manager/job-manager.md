---
id: job-manager
title: Job Manager
---
The Job Manager provides gives you comprehensive job management and execution capabilities for the Amiga.
It is the central hub for job creation and execution.
![Screenshot from 2025-06-10 16-49-14](https://github.com/user-attachments/assets/dff035f8-5a6e-4d66-802f-587fb805b0a6)

### Job Creation

Start by pressing **Create New Job** Select your desired **Path** and press **Continue**.

Every job requires an implement and you may **Choose Implement** from the defaults we provide: **Seeder**,
**Weeder**, **Sprayer**. Alternatively, you can create an implement of your own.
To do so, press the plus icon **+** next to the **Choose Implement** header.
A pop up on the lower right corner will come up, and this is where you
**Select Tools** for your job. After you have made your selection,
press **Continue** and continue to **Edit Tool Parameters**.

Tools are configured in three different ways.

For tools that rely on an **H-Bridge**, the  **On/Off** switch sets the tool in binary operation mode.
**Linear Motion** is an analog control mode that requires you to define a **Time to Activate**.
This parameter determines the time that it will take for your tool to be fully extended.
The directional **arrow buttons** (clockwise and counter-clockwise) determine the
direction of travel on the H-bridge and the "polarity of the On/Off state.
These buttons also used to set the the rotational direction of your the PTO.
Use the **Play** button to preview your tool's configuration and the **Stop** button to stop them.

**The dashboard must be set to AUTOMODE in order for you to test and fine
tune your tool parameters**

Once you have selected the tools and parameters needed for your Job, the **Create Imp**
checkmark creates your implement with your selected tools.

**Path** Selection Buttons (item names) - Loads route data for job
**Zone** Selection Buttons (zone names) - Defines operational boundaries
**Implement** Selection Buttons (tool names) - Assigns tools to job
Navigation Controls:
Back (back arrow) - Returns to previous step
Continue (forward arrow) - Advances to next step
Save (forward arrow) - Finalizes job creation

## Tool & Implement Management

### Job Loading & Execution

When you first open the Job Manager app, you will be presented with a list of **Available Jobs**.
These are jobs you would have previously created and saved. Click on a job name to load it up a preview.
If you need to test your tools or make any changes, press the **Tool Edit** button to bring up the tool editor.
The **Confirm** button saves any changes you might have made to tool configuration.
Once you are ready, press the **Run** button to execute your selected job.
Alternatively, press **Cancel** exit the preview screen.

### Route Loading & Execution

Next to the available jobs pane, you will see the **Repeat a Route** button,
where you will see a list of all your saved routes. To select a route,
press the route name and continue to execution. Press the **Run**
button to execute your selected route or hit the **Cancel**
button to exit the preview screen.

Execution Control:
**PAUSE/RESUME** (dynamic text) - Pauses or resumes active job
**STOP** (red button) - Completely stops job execution
Tool Status Indicators (tools icon) - Opens real-time tool editor
Tool Editor Controls:
**Update Tools** - Applies changes to running job
**Cancel** - Discards tool changes

**Data Logging** Controls:
Recording checkbox - Enables/disables data logging
Profile dropdown - Selects logging configuration

**Path** Selection loads route data for job
**Zone** Selection defines operational boundaries
**Implement** Selection assigns tools to job

Navigation Controls:
Back (back arrow) - Returns to previous step
Continue (forward arrow) - Advances to next step
Save (forward arrow) - Finalizes job creation

### Tool & Implement Management

Add Implement, open the implement

## Tool Type Selection

**H-BRIDGES** - Selects motor control tools
**PTOs** - Selects power take-off tools

## Tool Management

**Undo** (undo icon) - Removes tool from configuration

### Real-Time Job Control

## Data Management

**Delete Buttons** (trash icons) - Remove jobs, routes, or implements
Confirmation pop ups:
**Cancel** - Cancels deletion
**Confirm** - Executes deletion

## Error Handling & Safety

Error Acknowledgment - Dismisses critical error messages
E-Stop Functionality - Emergency stop with 60-second cooldown (integrated into job control)

## Map & Visualization

The MapView component provides real-time visualization and uses mouse/touch interactions for:
Zoom controls
Pan navigation

## Additional Elements

Virtual Keyboard Support - Multi-input keyboard for touch interfaces
Theme Toggle - Light/dark mode switching
Notification System - SnackBar alerts for user feedback

## Core Application States

The application manages these primary states through the UI buttons:
**IDLE** - Ready for job selection
**LOADED** - Job selected and ready to run
**EXECUTING** - Job actively running
**PAUSED** - Job temporarily stopped
**ERROR** - Critical failure requiring attention

## Navigation & Application Control

Exit to Launcher Button (Exit to Launcher + logout icon) - Returns to the main launcher application
Job Creation Toggle (Create New Job + plus icon) - Switches to job builder mode
