---
id: filter-app
title: Filter App
---

:::warning
The configuration settings and robot geometry found in this page are now part
of the [launcher](docs/apps/launcher/README.md) app and can be found under the settings tab.
:::

# Filter App Guide

## Calibration

Calibrating your Amiga ensures that the Inertial Measurement Unit (IMU) is accurately aligned
with the robot's frame, essential for precise navigation and operation.

### Why Calibrate?

- **Accuracy**: Proper calibration corrects any sensor biases and alignments,
ensuring sensor readings are accurate.
- **Performance**: Accurate sensor data is critical for effective task performance,
especially in autonomous navigation.
- **Maintenance**: Calibration is necessary when setting up your Amiga, after physical
modifications, or when environmental factors (such as significant changes in temperature)
could have affected sensor readings.

### How to Calibrate?

#### 1. Check Calibration Status: In the Filter App, look for the "Calibration Status" indicator

If it shows as "Calibrated" with a recent date, no further action is needed unless you've encountered
issues that suggest recalibration is necessary.
For example, the filter diverges often when the robot starts driving,
or the robot goes significantly off the path when performing an autonomous task.

    ![Screenshot from 2023-11-07 13-51-18](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/61b489c4-8b2d-41fd-8ff6-7df3228a4fef)

#### 2. Begin Calibration

    a. Click "Recalibrate" if needed.

    b. Position the Amiga on flat ground, as indicated by the app's visual guide.

    ![Screenshot from 2023-11-07 13-51-25](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/c49d41fb-7109-44a3-a8f2-9d1db3ac2ba4)

#### 3. Perform Calibration

    a. Confirm the correct positioning and start the calibration process.

    b. The app will display a progress indicator and notify you upon completion.

    ![Screenshot from 2023-11-07 13-51-35](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/a0f5be38-2a3a-480e-9fd6-bae6f68419f8)

#### 4. Calibration Complete: The status will update to "Calibrated"

![image](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/2f80d8f4-d0d7-4560-b97d-3ab68129c074)

## Fine-Tuning Settings

Adjust GPS antenna offsets, track width, and wheelbase to tailor the Amiga's movement to
its operational environment and physical characteristics.

### Why Fine-Tune Settings?

- **Tailored Navigation**: Compensate for unique physical configurations.
- **Operational Precision**: More accurate settings lead to more precise path following.
- **Adaptability**: Adjust settings when changing operational environments or the robot's physical setup.

### How to Adjust Settings?

#### 1. Access Settings Panel: Click the "Settings" gear icon in the Filter App

#### 2. Adjust Parameters

    a. Change GPS and IMU offsets to match your robot's setup.
    The reference point for the GPS is the center of the GPS antenna,
    and the reference point for the IMU is the center of the **oak0** camera.
    See the illustration below showing how to measure the offsets of the GPS antenna.

    ![image](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/4ca99130-db62-415f-a82c-3211fa7d9c5c)
    ![image](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/cfb64d74-a70c-42d3-aee5-c304afed2d45)

:::info INFO
**Amiga Calibration Guide**

To ensure accurate calibration of your Amiga robot, please adhere to the following measurement guidelines:

1. **Unit of Measurement**: All measurements must be taken in meters (m).

2. **Reference Point**: Begin all measurements from the central axis of the robot
(center of the robot (in length & width) at ground level).

3. **Axis Coordination**:

    a. *X-Axis Coordination*:

        - Positive X Value: Assign this to anything located ahead of the robot's center.

        - Negative X Value: Use this for anything situated behind the robot's center.

    b. *Y-Axis Coordination*:

        - Positive Y Value: This applies to objects on the left-hand side of the robot's center.

        - Negative Y Value: Assign this to objects on the right-hand side of the robot's center.

Adhering to these guidelines ensures consistent and reliable data collection during your Amiga's
calibration process.
:::

    b. Input the correct track width and wheelbase.

    ![Screenshot from 2023-11-07 13-52-02](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/2df60c70-7c37-4919-ac32-fc895eb77b6d)

    See the illustration below showing how to measure the wheelbase and track width of your Amiga.

    ![Group 4 (7)](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/28fa7805-75e2-4b99-9b8e-7c9961b392a8)

#### 3. Apply or Reset Settings

    a. Click "Apply" to save new settings.
    b. Click "Reset To Factory Settings" if necessary.

#### 4. Close Settings: After adjustments, close the panel to return to the main view

Remember, calibration and fine-tuning are key to the seamless operation of your Amiga.
Ensure these steps are completed before engaging in autonomous operations to maximize
efficiency and accuracy.
