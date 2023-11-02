---
id: canbus-overview
title: CANBUS
---

# Canbus Service Overview

The Canbus service is an integral component of the Amiga platform.
This service offers direct control over the robot's motors, allowing users to both
publish motor states and send specific commands to manipulate the robot's movements.

## Overview

- **Purpose**: Control and manage the motors on the Amiga, handling command reception,
processing, and motor instruction.
- **Communication**: Direct interface with motors via CAN bus, a communication standard
or microcontrollers and devices.
- **Dependencies**: Standalone service, but pivotal for many autonomous operations.
Notably, the Controller service is heavily reliant on the Canbus service.

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
For instance, the Controller service is a prominent client of the Canbus service, making the
Canbus service pivotal for any autonomous motion or activity undertaken by the Amiga.
