---
id: job-manager
title: Job Manager
---
The Job Manager gives you comprehensive job management and execution
capabilities for the Amiga. It is the central hub for
job creation and execution. When you first open the Job Manager app,
you will be presented with a list of Available Jobs.
These are jobs you would have previously created and saved.
Click on the job name you wish to execute to load it up into a preview.
![Run](https://github.com/user-attachments/assets/512d2f97-c3f0-4ed5-b42b-0b48350886af)

### Job Creation
![edit_tools](https://github.com/user-attachments/assets/103033ce-aeb4-49e5-aaae-ec2686612650)
Start by selecting your desired **Path** and press **Continue**. Press **Create New Job**
and **Choose Implement** from the defaults we provide:
**Seeder**, **Weeder**, **Sprayer**. Alternatively, you can
create an implement of your own. To do so, press the plus icon
**+** next to the **Choose Implement** header.
A pop up on the lower right corner will come up, and this is where you
will **Select Tools** for your job. After you have made your selection,
press **Continue** and **Edit Tool Parameters**.
![review_name](https://github.com/user-attachments/assets/3bbb679b-a729-4415-89f5-28f097c68702)

For tools that rely on an **H-Bridge**, the **On/Off**
switch sets the tool in binary operation mode. **Linear Motion** is an analog
control mode that requires you to define a **Time to Activate**.
This parameter determines the time that it will take for your
tool to be fully extended. The directional **arrow buttons**
(clockwise and counter-clockwise) determine the direction of
travel on the H-bridge and the polarity of the On/Off state.
These buttons are also used to set the the rotational
direction of the PTO. Use the **Play** button to preview your tool's
configuration and the **Stop** button to stop them.
Once you have selected the tools and parameters needed for your Job,
press the **Create Imp** button to create your implement with your selected tools.

:::tip
The dashboard must be set to **AUTOMODE** in order for you to test and fine
tune your tool parameters
:::


### Job Loading & Execution
Click on the job name you wish to execute
to load it up into a preview. If you need to test your tools or make
any changes, press the **Tool Edit** button to bring up the tool editor.
The **Confirm** button saves any changes you might have made to your
tool configuration. Once you are ready, press the **Run**
button to execute your selected job. Alternatively, press
**Cancel** exit the preview screen.
![rec_enabled](https://github.com/user-attachments/assets/bc2d8c79-2a71-43b3-90ef-0f54082413a0)
Check the **Enable Recording**checkbox and select a recording profile
from the dropdown menu to enables/disables data logging.

While executing a Job, you may **PAUSE/RESUME** your active job or completely **STOP**
(red button) job execution. The tool status indicators opes a real-time tool editor
allowing you to **Update Tools** and apply your changes to the running job.
Press **Cancel** to discard any tool changes.
![Screenshot from 2025-06-19 15-45-48](https://github.com/user-attachments/assets/f81d9d00-4720-4319-a5f4-b849d2798828)


### Route Loading & Execution
Next to the available jobs pane, you will see the **Repeat a Route** button,
where you will see a list of all your saved routes. To select a route,
press the route name and continue to execution. Press the **Run**
button to execute your selected route or hit the **Cancel**
button to exit the preview screen.


### Data Logging

## Error Handling & Safety
![error](https://github.com/user-attachments/assets/a26f6b72-ed92-4955-9a50-d04828b7a0de)
If you loose GPS or your Amiga is not in AutoMode you will be prompted
with an error message to address the situation. There is also an Emergency
e-stop with 60-second cooldown integrated into job control

## Map & Visualization
The MapView component provides real-time visualization and uses mouse/touch
interactions for: zoom controls and pan navigation.

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


**Exit to Launcher** returns to the main launcher application.



