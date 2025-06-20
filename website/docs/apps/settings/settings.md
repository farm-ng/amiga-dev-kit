---
id: settings
title: Settings
---

The Settings page is the central configuration interface for the Amiga.
It provides comprehensive controls over the robot's configuration.

### About

![Screenshot from 2025-06-17 10-12-51](https://github.com/user-attachments/assets/284e8f16-306e-45bc-aa87-fd92cf7d34f2)
This page displays your Amiga robot information (name, software version, and installed apps).
From here you can also access the debug terminal for basic troubleshooting.
To begin typing, you can either click on the **Show Keyboard** icon or connect a keyboard to
the USB port on the back of the Robot's Brain.
**Exit to Launcher** takes you back to the main dashboard.

### Wifi

![Screenshot from 2025-06-17 09-38-02](https://github.com/user-attachments/assets/9ce80ddf-aa1b-4c36-8c91-a13759039caf)
This is where you manage your Amiga's network connections.
After selecting a network from the available list, enter the password and press **connect**.
You will now see your currently **Connected Network**, **Hostname**, and **IP Address**.
Press the button labelled **My Networks** to manage your saved network connections.
Toggle the **Wifi Manager** to enable and disable wifi connections and press
the **Rescan** button to refresh available networks.
**Exit to Launcher** takes you back to the main dashboard.

### Services

![Screenshot from 2025-06-17 09-38-24](https://github.com/user-attachments/assets/380241a1-ee49-4f70-a366-031198133c8c)
This is where you view and control your Amiga's system services.
You will be presented with rows that include each **Service Name** and **Status**.
From here, you can start/stop services and navigate to the **Next** or **Previous** page
to locate a specific service from the list.
**Exit to Launcher** takes you back to the main dashboard.

### GPS NTRIP

![Screenshot from 2025-06-17 15-19-36](https://github.com/user-attachments/assets/bedc34a1-6458-403a-afb6-77796a0a6b99)
On this this page you will configure and authenticate your base station's connection for
the purpose of RTK based navigation.
To **Setup NTRIP** credentials, enter your base-station's address (IP address or URL)
into the **Server Name** field.
Next, enter the **Mountpoint** and **Port** used by your NTRIP server.
Enter your **Username** and **Password** to authenticate, and press the **Apply**
button save your configuration.
The **GPS Status** block will provide you with real-time status display
**Capabilities** as well as positioning data in the form of **Global Pose**.
We provide coordinates for your reference **RTK Base Station** as well.
If all the required fields have been met and your Amiga is connected to wifi,
you will see a **GPS RTK Connected** icon,
highlighted in green on the upper right corner of this page.
**Exit to Launcher** takes you back to the main dashboard.

### Robot Configuration

![Screenshot from 2025-06-17 09-38-55](https://github.com/user-attachments/assets/c2858ee7-75a0-49d5-a080-ddfadf323201)
The **Robot Configuration** page is the place for you to fine-tune your Amiga's
**Geometry**, a key component for autonomous navigation.
All required measurements must be taken from the center of the robot
(in length & width) at ground level,
and you may toggle the **Units** switch to select metric/imperial units.

Begin by measuring your **GPS Offset** in the X, Y positions.
We use right-handed coordinates whereby **positive X values are located ahead of center,
and positive Y values are located left-side of center**.
Measure the GPS offset on the **Z direction from flat ground to the center of the GPS antenna**.
The next critical measurements are your Amiga's **Track Width** and **Wheelbase**.

Under the **Tolerances** submenu, we provide a user defined **Path Deviation Threshold**
that determines the maximum allowable deviation
from the planned path before the robot is considered off-track.
A lower threshold ensures the robot is always close to the path,
preventing it from entering unwanted regions.
A higher threshold allows the track following to resume if for some reason the robot is far
away from the track, but at the cost of path adherence.
Once you have fine tuned your Robot's Configuration press the **Apply** button to save all your changes.
Note that if you press the **Reset** button your Amiga will be restored to the default factory settings.
**Exit to Launcher** takes you back to the main dashboard.

### IMU Calibration

![Screenshot from 2025-06-17 09-40-15](https://github.com/user-attachments/assets/608d6a14-2116-4bec-b998-a99da62f2ac8)
This where you will carry out and monitor your Amiga's **IMU Calibration** state.
IMU calibration is essential for precise navigation and it is required after
any changes to your Amiga's geometry.
To calibrate your Amiga, place it on flat ground and press the **Start Calibration** button.
Press **Confirm** to proceed through the calibration stages or **Cancel** to abort calibration.
Once the process is complete, you will be presented with a timestamp to denote when your Amiga was
**Last Calibrated** and a **Calibrated** icon highlighted in green.
You will also see a message with a green checkmark stating that **Your Amiga is ready**.
**Exit to Launcher** takes you back to the main dashboard.

### PoE Switch

![Screenshot from 2025-06-17 09-39-43](https://github.com/user-attachments/assets/8f7c1a5f-93c2-422f-9d19-f78892f565a7)
The **PoE Switch** offers network diagnostic capabilities, including the ability
to detect potential cabling issues.
It is here that you execute per-port network diagnostics and remote ping operations.
You may also enable/disable individual ports and reset your PoE switch to
test functionality across all PoE connected devices.
Use the **Ping Camera** button and **Select Camera** from dropdown menu (oak0-oak3)
to test camera connectivity.
Press the **Reset Port** button and select from the dropdown menu (1-6) to
power cycle your desired PoE port.
Finally Use the **Reset PoE Switch** button to reboot entire switch.
**Exit to Launcher** - Return to main dashboard.
