---
id: gps-overview
title: GPS
---

# GPS Service Overview

The GPS sub-service is an integral component of the Amiga's navigation system, utilizing a
high-precision Ublox module to determine the robot's exact position on Earth.
This service is indispensable for tasks that require geo-location, from simple
navigation to complex tasks like field mapping or precision agriculture.

The primary role of the GPS service is to continuously capture and broadcast detailed
positional data, which other components and services within the Amiga's system can utilize.
It simplifies the intricacies of satellite-based positioning, offering users straightforward
access to precise, real-time location data.

In short, the GPS service continuously decodes and transmits location data, allowing users
and systems to tap into accurate geospatial information without dealing with the
complexities of GPS data interpretation.

Beginning with [**AmigaOS 2.3 Elderberry**](/docs/release-notes/release-023/),
the GPS service is a sub-service included as part of the [**Amiga Service**](/docs/concepts/amiga_service).

## Stream-only Operation

The GPS sub-service is not a client of any other services.
It is, however, used by other services like the Filter service!

## Message Types

Clients can subscribe to the GPS service to receive messages, which are typically of type `pvt` or `relposned`.
These messages contain rich data sets that include the robot's current geospatial coordinates,
velocity, time, and other relevant GPS data.

:::info INFO
There are three types of GPS messages: **PVT**, **RELPOSNED**, and **ECEF**.

**PVT** (Position, Velocity, and Time) messages provide the all-in-one solution: position, velocity,
and time.
It contains details like longitude, latitude, altitude, speed, and UTC time.

**RELPOSNED** (Relative Positioning) messages provide relative position information in a
North, East, Down (N-E-D) frame. It's mainly used for applications requiring relative positioning
between two receivers, often as a part of Real Time Kinematics (RTK) solutions.
It shows the difference in position between a "moving" receiver and a "fixed" reference receiver.

**ECEF** (Earth-Centered, Earth-Fixed) messages provide coordinates that represent positions
relative to the earth's center, but fixed to the earth as it rotates.
ECEF coordinates are expressed in meters in a 3D Cartesian coordinate system.
These messages are particularly useful for applications
that require a global reference frame, such as satellite operations and global mapping projects.
:::

## Data Streams

- `/pvt`: PVT message.
 Check the protobuf definition for more details:
 [gps_pb2.GpsFrame](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/gps/gps.proto#L50-L71)

- `/relposned`:RELPOSNED message.
Check the protobuf definition for more details:
[gps_pb2.RelativePositionFrame](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/gps/gps.proto#L73-L97)

- `/ecef`:ECEF message.
Check the protobuf definition for more details:
[gps_pb2.EcefCoordinates](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/gps/gps.proto#L109-L117)

## Requirements

For the GPS service to function optimally, certain conditions must be met:

- The robot **must** be connected to an RTK base station.
- To connect to an RTK base station, users need to input credentials using our GPS app.
The required credentials include:
  - NTRIP ID: The server address of the base station.
  - NTRIP PORT: The port used by the NTRIP server.
  - NTRIP MOUNTPOINT: Specific mount point on the NTRIP server.
  - USER: Username for accessing the base station.
  - PASSWORD: Corresponding password for the above username.
- The robot must have an active Wi-Fi connection, ensuring real-time data communication.
  - **NOTE**: The robot needs to be connected to Wi-Fi for `relposned` messages.
 However, an internet connection is not required for `pvt` messages.

:::caution Virtual Reference Station (vrs) not supported
Currently, our services that use GPS rely on a static base station. If your service provider issues
RTK corrections with respect to a VRS (Virtual Reference Station), your `relposned` coordinates
will experience a significant offset after every reboot, and so the Autoplot app. <br/><br/>
Consult your service provider and/or support@farm-ng.com for more info.
:::

:::info NTRIP (Network Transport of RTCM via Internet Protocol)
NTRIP is a protocol for streaming differential GPS (DGPS) data over the internet, enabling RTK
corrections in areas with cellular coverage.
Connecting to an NTRIP service enhances the GPS accuracy, crucial for tasks requiring precision navigation.
:::

:::tip Pro Tip for California Users
If you're operating in California, consider [**signing up**](https://www.surveymonkey.com/survey-taken?sm=8oRYqrBI74rDSaBAdtcV5GY0_2FRs585_2FD4c_2BTVJDw_2Be9msUlD1XrZDpZ1Rvu0DLWBo8bsPAjLG8jj8DbutXMqryiezNdZiuVvgEb0osp55QY_3D)
for a free CRTN
(California Real Time Network) account.
Managed by UC San Diego, [CRTN](http://sopac-csrc.ucsd.edu/index.php/crtn/) provides access
to multiple base stations across the state, offering enhanced GPS accuracy.
Other states or regions may have similar services available.
Always check local resources for the best positioning support in your area.
:::

## Utilizing GPS Data

The GPS data, while technical, is immensely valuable.
With high-precision location information, users can:

1. **Enhance Navigation**:
Use the precise geospatial data in navigation tasks, allowing the Amiga to traverse pre-defined
routes with minimal deviation.

2. **Inform Decision-Making**:
Analyze the GPS data to make informed decisions about resource allocation, route optimization,
and task planning.

3. **Improve Operational Efficiency**:
Leverage the accuracy of real-time GPS data to enhance the reliability and efficiency of automated tasks,
reducing the need for human intervention and potential for error.
