---
id: camera-app
title: Camera App
---

# Camera App Guide

# Camera App Overview

The Camera App is your centralized solution for configuring oak cameras and monitoring real-time
imagery on your Amiga.
This intuitive application streamlines the process of camera configuration and data recording,
allowing for effortless customization and operation.

## Key Functionalities

### Real-Time Visualization

The app provides a live feed from each connected oak camera, allowing users to see exactly what the
camera sees.
This real-time visualization aids in making informed adjustments to camera settings for optimal
recording quality.

![main](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/1a146c44-e9f7-40de-ad75-df26a6c2bba7)

### Camera Configuration

Users have the flexibility to configure each oak camera individually.
The following settings can be adjusted directly within the app:

- **Exposure Time (ms)**: Control the duration of each frame's exposure to light.
- **ISO Value**: Adjust the camera's sensitivity to light.
- **Lens Position**: Fine-tune the focus of the camera lens to capture sharp images.
- **Settings Adjustment**: Quick access to camera settings, with sliders for manual adjustments and
checkboxes for automatic configurations.
- **Camera Selection**: Tabs for each oak device enable users to switch between different cameras effortlessly.

![settings](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/3da3b23d-8c59-45b8-bbb4-c86b388edd64)

For convenience, users may also opt for:

- **Auto Exposure**: The camera automatically adjusts the exposure settings for the best image quality.
- **Auto Focus**: The camera will manage its focus settings to ensure clarity and detail in recorded
imagery.

:::tip
Double click anyone of the auto controls to open up their manual configuration settings. **Single Log File** allows you to set a maximum file size for log recording.
:::

### Direct Recording

**Start/Stop Recording**: Simple controls to begin or end the recording session.

![start rec](https://github.com/farm-ng/amiga-dev-kit/assets/133177230/cb1d2d19-aaf5-4091-9d65-b2bf7b6e7499)

To initiate data recording through the Camera App,
 simply press the **Start Recording** button at
  the upper right corner. The button will
   switch from green to red and start flashing,
    signaling that the recording is underway.
     This functionality is especially handy
      for capturing various imagery data
       streams such as RGB, left, right, and disparity views,
        all without requiring extra configuration.

:::tip
By default, all the topic streams in the
 [**Recorder**](/docs/apps/launcher/#recorder)
are captured when you press the **RECORD** button on the
 navigation bar, or the **Start Recording** button
  on the camera app. You may select individual topics
   to record from the [**Recorder**](/docs/apps/launcher/#recorder) tab.
:::

With its user-friendly design and comprehensive
 feature set, the Camera App is an indispensable tool
for anyone looking to maximize the capabilities
 of their Amiga robot's camera system.
