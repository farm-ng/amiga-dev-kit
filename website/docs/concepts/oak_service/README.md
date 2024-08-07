---
id: oak-overview
title: Oak
---

# Oak Service Overview

The OAK service is a versatile component in the Amiga ecosystem, providing valuable data streams
from the onboard OAK-D device, which includes stereo vision capabilities and an Inertial Measurement
Unit (IMU).
This service doesn't serve a singular purpose; instead, it offers a range of data that can be
instrumental for various user-defined applications, from navigation and mapping to object detection
and data collection.

The OAK service data, especially coming from the IMU, plays a significant role in the Amiga's autonomous
navigation capabilities, as it is fused with GPS and wheel odometry data in the Filter service
(using an Unscented Kalman Filter).

Beginning with [**AmigaOS 2.3 Elderberry**](/docs/release-notes/release-023/),
the Oak service is a sub-service included as part of the [**Amiga Service**](/docs/concepts/amiga_service).
This sub-service now handles all oak devices connected to your Amiga in a single service.

## Stream-only Operation

The Oak sub-service is not a client of any other services.
It is, however, used by other services like the Filter service!

## Message Types

Clients can subscribe to the OAK service to access the messages it publishes.
These messages can include various data types such as:

- Stereo vision (right and left)
- RGB data
- Accelerometer data
- Gyroscope data

## Data Streams

- `/calibration`: Intrinsic parameters of the cameras.
 Check the protobuf definition for more details:
 [oak_pb2.OakCalibration](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto#L139-L154)

- `/disparity`: Disparity (depth image).

- `/left`: Left stereo image.

- `/right`: Right stereo image.

- `/rgb`: RGB image.

The disparity, left, right, and rgb images all have the same structure.
Check their protobuf definition for more details:
[oak_pb2.OakFrame](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto#L38-L41)

- `/imu`: Accelerometer and Gyroscope data.
Check the protobuf definition for more details:
[oak_pb2.OakImuPackets](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto#L43-L68)

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

## Requirements

For the Oak service to function, there's only a single requirement:
the oak camera(s) need to be powered via the POE Switch.

## Practical Applications

One of the key applications of the OAK service within the Amiga system is contributing to the robot's
autonomous navigation.
The gyroscope data from the OAK service's IMU is crucial for the robot's state estimation,
as it's fused with other data sources in the Filter service.
This fusion helps in achieving accurate positioning and orientation, enabling the Amiga
to navigate effectively and autonomously.
