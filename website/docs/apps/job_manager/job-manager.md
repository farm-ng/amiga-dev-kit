---
id: job-manager
title: Job Manager
---

# Job Manager Guide

The Job Manager provides you with comprehensive job management and execution capabilities for the Amiga. It is the central hub for job creation and execution.

![Screenshot from 2025-06-10 16-49-14](https://github.com/user-attachments/assets/dff035f8-5a6e-4d66-802f-587fb805b0a6)


### Job Creation
Start by pressing **Create New JOb** Select your desired **Path** and press **Continue**. Every job requires an implement and you may **Choose Implement** from the defaults we provide **Seeder**, **Weeder**, **Sprayer**. Alternatively, you can create an implement of your own. Begin by pressing the plus icon **+** next to the **Choose Implement** header. **Select Tools** on the lower right corner, press **Continue** and **Edit Tool Parameters**.

Tools can be configured in three different ways. **On/Off** sets the tool in binary operation mode. **Linear Motion** is an analog control mode that requires you to define a **Time to Activate**, which determines the time that it will take for your tool to be fully extended. The **Direction** buttons (clockwise and counter-clockwise arrows) determine the rotational direction of the pto. These buttons are also used to specify the direction of travel on the H-bridge and the "polarity of the On/Off state. Use the **Play** button to tests your tool's operation and the **Stop** button to stop them.

**The dashboard must be set to AUTOMODE in order for you to test and fine tune your tool  parameters**

Once you have selected the tools and parameters needed for your Job,**Create Imp** (checkmark) - Creates implement with selected tools



   **Path** Selection Buttons (item names) - Loads route data for job
   **Zone** Selection Buttons (zone names) - Defines operational boundaries
   **Implement** Selection Buttons (tool names) - Assigns tools to job
   Navigation Controls:
     Back (back arrow) - Returns to previous step
     Continue (forward arrow) - Advances to next step
     Save (forward arrow) - Finalizes job creation

### Tool & Implement Management

   Add Implement, open the implement 
  ## Tool Type Selection:
     **H-BRIDGES** - Selects motor control tools
     **PTOs** - Selects power take-off tools

  ## Tool Management:
     **Undo** (undo icon) - Removes tool from configuration
     

### Job Loading & Execution

   Job/Route Toggle Tabs:
     **Available Jobs** - Shows created jobs list
     **Repeat a Route** - Shows saved routes list
   Job Selection Buttons (job names) - Loads job for preview/execution
   Route Selection Buttons (route names) - Loads route for execution
  **Data Logging** Controls:
     Recording checkbox - Enables/disables data logging
     Profile dropdown - Selects logging configuration
   Job Preview & Control:
     **Run** (play icon) - Starts job/route execution
     **Cancel** (X icon) - Cancels job preview
     **Tool Edit** (edit icon) - Opens tool editor for job
     **Confirm** (checkmark) - Saves tool configuration changes

### Real-Time Job Control

   Execution Control:
     **PAUSE/RESUME** (dynamic text) - Pauses or resumes active job
     **STOP** (red button) - Completely stops job execution
   Tool Status Indicators (tools icon) - Opens real-time tool editor
   Tool Editor Controls:
     **Update Tools** - Applies changes to running job
     **Cancel** - Discards tool changes

### Data Management

   **Delete Buttons** (trash icons) - Remove jobs, routes, or implements
   Confirmation pop ups:
     **Cancel** - Cancels deletion
     **Confirm** - Executes deletion

### Error Handling & Safety

   Error Acknowledgment - Dismisses critical error messages
   E-Stop Functionality - Emergency stop with 60-second cooldown (integrated into job control)

### Map & Visualization

  The MapView component provides real-time visualization and uses mouse/touch interactions for:
   Zoom controls
   Pan navigation

### Additional Elements

   Virtual Keyboard Support - Multi-input keyboard for touch interfaces
   Theme Toggle - Light/dark mode switching
   Notification System - SnackBar alerts for user feedback

### Core Application States

  The application manages these primary states through the UI buttons:
   **IDLE** - Ready for job selection
   **LOADED** - Job selected and ready to run
   **EXECUTING** - Job actively running
   **PAUSED** - Job temporarily stopped
   **ERROR** - Critical failure requiring attention

### Navigation & Application Control

   Exit to Launcher Button (Exit to Launcher + logout icon) - Returns to the main launcher
  application
   Job Creation Toggle (Create New Job + plus icon) - Switches to job builder mode