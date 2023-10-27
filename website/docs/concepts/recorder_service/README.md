---
id: recorder-overview
title: Recorder
---

# Recorder Service Overview

The Recorder App/Service is the backbone of the Amiga's data logging and playback functionality.
It is designed to capture and store raw data from various robot services, facilitating later
analysis, debugging, and model training.

## Purpose

The primary objective of the Recorder Service is to provide a robust mechanism for recording
data streams from different services. This is invaluable for tasks such as training computer
vision/AI models, where capturing field imagery is essential.
For instance, when developing a precision sprayer application for weeds, one would
first traverse the field, recording data to train a model to detect weeds.

## Subscriptions

The Recorder Service is a subscriber to the following services:

- Canbus
- Oak (Multiple Oak topics may be available, depending on the number of Oak cameras connected,
e.g., oak0, oak1, ...)
- GPS Service
- Filter Service

## Available Topics for Recording

The Recorder Service offers a variety of topics that can be recorded.
Each topic provides specific data streams from the robot's various services.
Here's a breakdown of each topic:

:::tip
Check out the protobuf messages streamed on these topics at:<br/>
[**`farm-ng-amiga/protos/`**](https://github.com/farm-ng/farm-ng-amiga/tree/main-v2/protos/farm_ng).

Some of which may inherit from the protobuf messages found at:<br/>
[**`farm-ng-core/protos/`**](https://github.com/farm-ng/farm-ng-core/tree/main/protos/farm_ng/core)
:::

### Canbus Topics

- `canbus/health`: Provides health metrics for the Canbus service, such as publishing frequency.
- `canbus/raw_messages`: Streams all messages received from the CAN bus by the canbus service.
You can parse and unpack these messages to see details of the motors (e.g., rpm, temperature),
of your Amiga (e.g., battery voltage, velocity, whether auto-mode is engaged),
and other pertinent information.
- `canbus/twist`: Outputs the linear and angular velocities of the robot, offering insights
into its movement dynamics.

### Oak Topics

- `oak/health`: Delivers health metrics for the Oak service, including publishing frequency.
- `oak/calibration`: Streams the current calibration settings of the Oak device,
ensuring the camera's accuracy.
- `oak/disparity`: Outputs the disparity image calculated from the left/right stereo images,
used for depth perception and 3D mapping.
- `oak/imu`: Streams 3-D accelerometer & gyroscope values from the Oak camera's internal IMU,
giving insights into the robot's orientation and movement.
- `oak/left`: Outputs the feed from the stereo left camera of the Oak device.
- `oak/right`: Outputs the feed from the stereo right camera of the Oak device.
- `oak/rgb`: Streams the stereo RGB image from the Oak device, providing full-color
visuals of the robot's environment.

### GPS Topics

- `gps/health`: Offers health metrics for the GPS service, such as publishing frequency.
- `gps/pvt`: Streams GPS Position, Velocity, and Time (PVT) messages, giving a comprehensive
view of the robot's location and movement.
- `gps/relposned`: Provides GPS relative position in North, East, Down (N-E-D) coordinates,
offering a detailed spatial orientation of the robot.

### Filter Topics

- `filter/health`: Delivers health metrics for the Filter service, including publishing frequency.
- `filter/state`: Streams the filter state, which combines the robot's pose, orientation,
filter state uncertainties, and filter convergence status.
This topic is essential for understanding the robot's current state and its accuracy.

---

These topics ensure that users have a comprehensive set of data streams to choose from,
depending on their specific needs and analysis requirements.

## Recording Profile

To initiate recording, a "Recording profile" must be provided as an argument.
This profile is a JSON file detailing the subscriptions or topics to be recorded. Here's an example:

```json
{
    "config": {
        "name": "record_default",
        "subscriptions": [
            {
            "uri": {
                "path": "*",
                "query": "service_name=canbus"
            },
            "every_n": 1
            },
            {
            "uri": {
                "path": "*",
                "query": "service_name=gps"
            },
            "every_n": 1
            },
            {
            "uri": {
                "path": "/imu",
                "query": "service_name=oak0"
            },
            "every_n": 1
            },
            {
            "uri": {
                "path": "*",
                "query": "service_name=filter"
            },
            "every_n": 1
            }
        ]
    }
}
```

:::info INFO
The **`*`** symbol in the `path` field indicates that all available topics of that specific
subscription (service) should be recorded.
:::

## API

Users can interact with the Recorder Service using the following commands:

- `/start`: Initiates data recording.
A valid "Recording profile" must be provided as an argument.
- `/stop`: Halts the data recording process.

## Data Storage

All recorded data is saved as binary files on the disk at /mnt/data.
The naming convention for these files captures the precise timestamp (to the microsecond)
at the recording's start, the robot's name, and the file number in the sequence:

```php
<yyyy>_<mm>_<dd>_<hh>_<mn>_<ss>_<msmsms>_<robot_name>.0000.bin
```

For example:

```php
2023_01_12_16_17_52_134845_element-vegetable.0000.bin
```

## How to Use

Data can be recorded through the Recorder App, or using the `EventsClient` class.

For a step-by-step guide on using the Recorder App, please refer to the
[Record and Access Data example](/docs/examples/import_log_file/).

For a step-by-step guide on recording data using the `EventsClient`, please refer to the
[Events Recorder example](/docs/examples/events_recorder/).
