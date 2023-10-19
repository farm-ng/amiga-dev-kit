---
id: oak-overview
title: OAK
---

# Oak Service Overview

The OAK service is a versatile component in the Amiga ecosystem, providing valuable data streams
from the onboard OAK-D device, which includes stereo vision capabilities and an Inertial Measurement
Unit (IMU).
This service doesn't serve a singular purpose; instead, it offers a range of data that can be
instrumental for various user-defined applications, from navigation and mapping to object detection
and data collection.

The OAK service is autonomous, not relying on other services to function.
However, its data, especially the IMU information, plays a significant role in the Amiga's autonomous
navigation capabilities, as it's fused with GPS and wheel odometry data in the Filter service
(using an Unscented Kalman Filter).

## Standalone Operation

Unlike other services, the Oak service operates independently and is not a client of any other services.

## Message Types

Clients can subscribe to the OAK service to access the messages it publishes.
These messages can include various data types such as:

- Stereo vision (right and left)
- RGB data
- Accelerometer data
- Gyroscope data

The specifics of these messages, including their data structures and formats, are defined in the
service's [protobuf definitions](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/protos/farm_ng/oak/oak.proto),
which users can refer to for detailed information.

## Requirements

For the Oak service to function, there's only a single requirement:
the oak camera(s) need to be powered via the POE Switch.

## API

The OAK service offers a few API endpoints that allow users to interact with and configure the
OAK-D device's settings:

- `/calibration`: Retrieves the calibration of the device, specifically the intrinsic parameters of
the cameras.
This is typically a one-time requirement unless the device undergoes significant changes or maintenance.

- `/camera_settings/rgb`: Allows users to configure the RGB camera settings.
If no settings are specified in the request, the service will return the current settings.

- `/camera_settings/mono`: Similar to the RGB settings endpoint, this allows users to configure
the mono camera settings or retrieve them if no new configurations are specified.

While the specifics of these configurations are found in the protobuf definitions, they offer users
the ability to customize the camera performance as per their application requirements,
potentially adjusting parameters like exposure, focus, and white balance.

## Practical Applications

One of the key applications of the OAK service within the Amiga system is contributing to the robot's
autonomous navigation.
The gyroscope data from the OAK service's IMU is crucial for the robot's state estimation,
as it's fused with other data sources in the Filter service.
This fusion helps in achieving accurate positioning and orientation, enabling the Amiga
to navigate effectively and autonomously.
