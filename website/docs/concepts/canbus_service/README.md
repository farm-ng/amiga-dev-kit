---
id: canbus-overview
title: Canbus
---

# Canbus Service Overview

The Canbus service is an integral component of the Amiga platform.
This service offers direct control over the robot's motors, allowing users to both
publish motor states and send specific commands to manipulate the robot's movements.

- **Purpose**: Control and manage the motors on the Amiga, handling command reception,
processing, and motor instruction.
- **Communication**: Direct interface with motors via CAN bus, a communication standard
or microcontrollers and devices.
- **Dependencies**: Standalone service, but pivotal for many autonomous operations.
Notably, the Track Follower service is heavily reliant on the Canbus service.

# Data Streams

- `/twist`: The commanded linear velocity of the vehicle in the x direction in meters per second.
 Check the protobuf definition for more details:
 [canbus_pb2.Twist2d](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto#L58-L61)

- `/raw_messages`:A representation of raw CAN bus messages with timestamps, node IDs, error
flags, remote transmission indicators, and encoded payloads.
Check the protobuf definition for more details:
[canbus_pb2.RawCanbusMessages](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto#L95-L107)

- `/state`: State of the Amiga CAN bus.
  Encapsulates key information required to evaluate the state of the Amiga robot.
  Check the protobuf definition for more details:
  [amiga_v6_pb2.AmigaV6CanbusState](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/amiga_v6.proto)

## API

1. `/twist`: Receives twist commands (linear and angular velocities) and instructs the
motors accordingly.
2. `/can_message`: Accepts a specific Protobuf message format (details TBD).
3. `/get_battery_state`: Returns the battery state.
A float value indicating the battery's state of charge, ranging [0.0, 1.0].
If no motors are connected, it returns -1.0.

## Safety and Operation

- **Operating Mode**: The robot should be in automode (activated via the dashboard)
to utilize the Canbus service.
- **Safety Perimeter**: Establish a clear perimeter when operating the robot, as motor
commands will induce movement, ensuring safe operation.

## Common Use-Cases

The Canbus service is foundational for many of Amiga's autonomous functionalities.
For instance, the Track Follower service is a prominent client of the Canbus service, making the
Canbus service pivotal for any autonomous motion or activity undertaken by the Amiga.
