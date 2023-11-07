---
id: filter-app
title: Filter App
---

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
modifications, or when environmental factors could have affected sensor readings.

### How to Calibrate?

1. **Check Calibration Status**: In the Filter App, look for the "Calibration Status" indicator.
If it shows as "Calibrated" with a recent date, no further action is needed unless you've encountered
issues that suggest recalibration is necessary.

    ![Screenshot from 2023-11-07 13-51-18](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/61b489c4-8b2d-41fd-8ff6-7df3228a4fef)

2. **Begin Calibration**:

    a. Click "Recalibrate" if needed.

    b. Position the Amiga on flat ground, as indicated by the app's visual guide.

    ![Screenshot from 2023-11-07 13-51-25](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/c49d41fb-7109-44a3-a8f2-9d1db3ac2ba4)

3. **Perform Calibration**:

    a. Confirm the correct positioning and start the calibration process.

    b. The app will display a progress indicator and notify you upon completion.

    ![Screenshot from 2023-11-07 13-51-35](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/a0f5be38-2a3a-480e-9fd6-bae6f68419f8)

4. **Calibration Complete**: The status will update to "Calibrated," and the last calibration
date will refresh.


## Fine-Tuning Settings

Adjust GPS antenna offsets, track width, and wheelbase to tailor the Amiga's movement to
its operational environment and physical characteristics.

### Why Fine-Tune Settings?

- **Tailored Navigation**: Compensate for unique physical configurations.
- **Operational Precision**: More accurate settings lead to more precise path following.
- **Adaptability**: Adjust settings when changing operational environments or the robot's physical setup.

### How to Adjust Settings?

1. **Access Settings Panel**: Click the "Settings" gear icon in the Filter App.

2. **Adjust Parameters**:

    a. Change GPS and IMU offsets to match your robot's setup.

    b. Input the correct track width and wheelbase.

    ![Screenshot from 2023-11-07 13-52-02](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/2df60c70-7c37-4919-ac32-fc895eb77b6d)

:::note NOTE
For precise calibration of the robotic platform, all measurements are taken in meters (m)
and should originate from the central axis of the robot.
Please follow the indicated measurement guide to maintain consistency and reliability in data collection.
:::

3. **Apply or Reset Settings**:

    a. Click "Apply" to save new settings.

    b. Click "Reset To Factory Settings" if necessary.

4. **Close Settings**: After adjustments, close the panel to return to the main view.

Remember, calibration and fine-tuning are key to the seamless operation of your Amiga.
Ensure these steps are completed before engaging in autonomous operations to maximize
efficiency and accuracy.
