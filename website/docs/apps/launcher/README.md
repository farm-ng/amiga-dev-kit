---
id: launcher
title: Launcher
---

# Launcher Guide

The Launcher is the first page you will see after
your Amiga Brain has completed its booting process.
From here you can open Apps and dive deeper into settings.

![Untitled (2)](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/2acb4ab3-aa5b-4ce8-a2cb-fca627651ac3)

## Apps

Please visit the following links for an in-depth
exploration of the [Autoplot App](/docs/apps/autoplot_app),
[Recorder App](/docs/apps/recorder_app),
[Filemanager App](/docs/apps/file_manager_app),
and [Camera App](/docs/apps/camera_app).

## Settings

### About

This section presents useful information such as your Brain's name and software versions.

![Screenshot from 2024-04-12 10-20-24](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/0e6892b3-4b99-4f29-8705-cc7ce6cdcd82)

You may also open a terminal window for debugging
 purposes while you are away from your computer.

![Screenshot from 2024-04-12 10-20-33](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/64258d28-4d9d-4cb7-b0a4-fa7ff6def6b2)

### WiFi

The WiFi Manager is where you will select which network you would like to join.
Upon selecting a given network, you will be prompted to input a password.
After all the fields have been satisfied your connection to WiFi will be established.

![Screenshot from 2024-04-12 10-20-18](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/4eab6af0-fb5f-46f8-aa96-9b974acce051)

### Services

For an in dept exploration of the Amiga Services follow this [link](/docs/concepts/canbus_service/).
By default services will be active, but you may cycle them on/off.

![Screenshot from 2024-04-12 10-20-51](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/29c91c44-1cbb-4877-8832-ed2aee178f90)

### Robot Geometry

Fine-tuning your Amiga's geometry is key to seamless autonomous operation.
**Begin all measurements from the CENTER OF THE ROBOT (in length & width) at ground level**.

**Positive X** values are located **ahead of center** while
**Negative X** values are located **behind center**.

**Positive Y** values are located **left-side** of **center**,
while **Negative Y** values are located on the **right-side** of **center**.

![Screenshot from 2024-04-12 10-21-07](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/bd5b899e-fd39-4e6e-b098-72a19996e1bc)
:::info
The **GPS** value is taken from the center of the antenna, while the **IMU** value comes from OAK 0.
:::

To determine the **wheelbase** and **track width** of your Amiga, see the illustration below.

![Group 4 (7)](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/28fa7805-75e2-4b99-9b8e-7c9961b392a8)

### Robot Localization

![distance](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/dfd3bfe4-90a0-4648-b207-792e814ad5dd)

![time](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/ccd721ae-1353-436d-b17a-cf004390ea6c)

### IMU Calibration

Calibrating the Inertial Measurement Unit (IMU)
corrects any sensor biases and is essential for
precise navigation.
Carry out this process when setting up your
Amiga or after making any changes to the Robot's geometry.

If your Amiga has been calibrated you will see the date/time when this process was last performed
along with a green tab that reads Calibrated.

![Screenshot from 2024-04-12 10-21-58](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/14d89b5f-dd5d-4ae0-896e-107f24079b8e)

If you need to calibrate your Amiga,
place it on flat ground and press the
 **Start Calibration** button. Hit **Confirm**

![Screenshot from 2024-04-15 14-59-26](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/e3c2d168-c360-4952-8f4c-3c193fc7bd91)

The Calibration will begin and a green bar will move across the screen as the process is completed.

![Screenshot from 2024-04-15 14-59-51](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/9f925384-2ee1-4df7-a911-d12a4bff73cb)

Once the Calibration process is complete you will be returned
to the initial screen page and a new date/time stamp will appear
reflecting the latest Calibration performed.

### GPS NTRIP

The Setup ntrip fields are where you will input your base station's credentials.

**Server Name**: The server address of the base station.

**Mountpoint**: Specific mount point on the ntrip server.

**Port**: The port used by the ntrip server.

**User**: Username for accessing the base station.

**Password**: Corresponding password for the above username.

**Serial Interface**:

![carrsoln](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/c206e401-3fdf-41a8-805c-2f55a90a8c2d)

:::tip
Managed by UC San Diego,
the California Real Time Network offers free access to base stations across the state.
Follow this [**link**](http://sopac-csrc.ucsd.edu/index.php/crtn/) and sign up for a free account.
:::

### Track Following

![general](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/ae450065-9784-415d-9485-ce35212f8ce7)

![angularspeed](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/a30b8b30-7f5c-44f5-b30a-30cae1771c90)

![turn](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/6425fb5c-7422-472b-863e-dfb192ffa744)
