---
id: gps-overview
title: GPS
---

# GPS Service Overview

The GPS service is an integral component of the Amiga's navigation system, utilizing a
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

## Standalone Operation

Unlike other services, the GPS service operates independently and is not a client of any other services.
Its sole responsibility is to interpret and publish the data received from the GPS module.

## Message Types

Clients can subscribe to the GPS service to receive messages, which are typically of type `pvt` or `relposned`.
These messages contain rich data sets that include the robot's current geospatial coordinates,
velocity, time, and other relevant GPS data.

:::info INFO
There are two types of GPS messages: **PVT** and **RELPOSNED**.

**PVT** (Position, Velocity, and Time) messages provide the all-in-one solution: position, velocity, and time.
It contains details like longitude, latitude, altitude, speed, and UTC time.

**RELPOSNED** (Relative Positioning) messages provide relative position information in a
North, East, Down (N-E-D) frame. It's mainly used for applications requiring relative positioning
between two receivers, often as a part of Real Time Kinematics (RTK) solutions.
It shows the difference in position between a "moving" receiver and a "fixed" reference receiver.
:::

## Requirements

For the GPS service to function optimally, certain conditions must be met:

- The robot must have an active Wi-Fi connection, ensuring real-time data communication.
- Users need to input credentials for connecting to an RTK base station, enhancing the GPS accuracy.
The required credentials include:
  - NTRIP ID: The server address of the base station.
  - NTRIP PORT: The port used by the NTRIP server.
  - NTRIP MOUNTPOINT: Specific mount point on the NTRIP server.
  - USER: Username for accessing the base station.
  - PASSWORD: Corresponding password for the above username.
  
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
