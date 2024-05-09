---
id: filter-overview
title: Filter
---

# Filter Service Overview

The Filter service is the state estimation core of the Amiga, crucial for understanding the robot's
position, orientation, and movement within its environment.
Utilizing an **Unscented Kalman Filter**, it seamlessly fuses data from various sources like wheel odometry,
GPS, and the IMU to provide a consistent and accurate representation of the robot's current state.

The primary goal of the Filter service is to abstract the complexity involved in state estimation,
providing users with clear, reliable information about the robot's pose, heading, and movement trajectory.
This allows users to interact with and direct the Amiga effectively, without getting immersed in the
technical depths of data fusion or sensor calibration.

In essence, the Filter does the intricate work of synthesizing sensor data, enabling users to
confidently interpret and utilize the Amiga's spatial information without needing extensive expertise
in robotics or state estimation.

## Subscriptions

The `Filter` is a client from the following services:

- Canbus (for wheel odometry)
- GPS
- Oak0 (for IMU data)

For the Filter service to function correctly, these services must be operational and communicating
relevant sensor data.
Since the Filter relies on GPS data, the Amiga must have a GPS connected to an RTK base station.

## Data Streams

- `/state`: A filter's state detailing pose, convergence, calibration, uncertainty, innovation, and heading.
 Check the protobuf definition for more details:
 [filter_pb2.FilterState](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/filter/filter.proto#L26-L37)

## API

Users can interact with the filter service using these commands through an EventClient of
the filter service:

- `/calibrate`: Triggers the calibration process, adjusting the IMU orientation relative to the robot
and calculating gyroscope biases.
- `/get_state`: Retrieves a protobuf message of type FilterState, containing the robot’s pose,
heading (in radians), convergence status, and pose uncertainty.
- `/get_track`: Returns the current track of the robot, essentially the path that the robot has traveled.
- `/clear_track`: Clears the current track, useful when initiating a new tracking sequence or
recalibrating the system.
- `/pause_track`: Pause adding waypoints to a track.
- `/resume_track`: Resume adding waypoints to a track.
- `/pop_track_end`: Removes the last waypoint added to the track.
Track must be paused first (`/pause_track`).

## Convergence Requirements

For the state estimation to be considered valid and the results to be reliable, certain criteria
need to be met, including:

- The robot is connected to Wi-Fi, ensuring communication continuity.
- The GPS service is receiving messages, with `accuracyNorth` and `accuracyEast` values smaller
than 0.01, indicating high precision.
- The oak/0 sub-service is active and transmitting IMU data.

Upon startup or recalibration, the robot needs to be moved slightly to allow the filter to converge
(indicated by `has_converged` = true).

:::info Remember
State estimation is a dynamic process, and environmental factors or sensor issues can affect convergence.
Regular calibration and adherence to the recommended workflows are essential for maintaining accurate
state estimation.
:::

## Filter Service in Practice

When planning to record a new track, the recommended workflow is as follows:

- Start with `/clear_track`. This will clear the current track on memory and allow the user to
"start fresh"
- User drives the robot to generate the desired track
- Once satisfied, the user stops the robot
- Get the track with the API `/get_track`.

:::tip TIP
For a comprehensive understanding of the list of variables available in the filter state messages,
make sure to check its [protobuf definition](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/filter/filter.proto).
:::

## Features

The Filter service, while sophisticated, is designed with user-friendliness in mind.
It not only provides essential information on the robot's current state but also empowers users to:

1. **Track Creation and Retrieval**:
The system automatically logs the robot's path, creating tracks that can be reviewed and utilized for
future tasks. This feature is invaluable for repeated navigation tasks or analyzing the robot's
coverage over a workspace.

2. **Real-time State Estimation**:
By continuously synthesizing data from multiple sensors, the Filter offers real-time insights into
the robot's position, orientation, and trajectory.
This is crucial for tasks that require precise navigation or environment mapping.

3. **Calibration on Demand**:
Environmental changes or operational demands may necessitate recalibration.
The /calibrate command simplifies this, enabling users to quickly recalibrate the IMU, ensuring
continued accuracy in state estimation.
