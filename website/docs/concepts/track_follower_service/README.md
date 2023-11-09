---
id: track-follower-overview
title: Controller
---

# Track Follower Service Overview

The Controller is the autonomy hub of the Amiga.
It takes in user commands and turns them into actions the robot can perform.

The main goal of the Controller is to act as a bridge between what you want the Amiga to
do and how the robot actually does it. It hides the complicated details, letting users focus
on their main tasks without needing to know the complex workings underneath.

In short, the Controller does the heavy lifting, allowing users to easily command the Amiga without
deep technical knowledge.

## Subscriptions

The `Controller` is a client of the following services:

- Canbus
- Filter (state estimation)

The State estimation filter service is a client of the following services:

- Canbus
- GPS
- Oak0

For this reason, all of the above-mentioned services must be up and running for the `Controller`
to work.

# Data Streams

- `/state`: The Controller state is a combination of information from the various tasks
performed by the Controller.
It cannot be defined by a single protobuf definition, but instead, a combination of them.
 Check the protobuf definitions for the Controller service for more details:
 [control_pb2.](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/control/control.proto)

## API

These are the commands you can use to interact with the controller service with
an `EventClient` of the controller service.

- `/get_pose`: Retrieve the current position and orientation of the Amiga.
- `/set_track`: Provide a specific track (series of waypoints) for the Amiga to follow.
- `/follow_track`: Instruct the Amiga to commence following the previously set track.
- `/stop`: Instruct the Amiga to halt all movements immediately.

## Requirements

There are a few requirements on the `/state` output of the state estimation filter
for the controller service to consider the results valid and allow for following a track.
These include:

- GPS service is connected to an RTK base station
- State estimation is receiving all required sensor data
- State estimation results have converged
  - Requires a few seconds of driving around after starting the filter service

## The Controller in practice

Before the controller can drive the Amiga autonomously, users must set a predefined track
for the robot to follow using the `/set_track` API.

Once a track is set, the next step is to command the controller to make the robot follow it.
This is done using the `/follow_track` API.
The controller will then navigate the robot through each waypoint in the sequence, ensuring it follows
the predefined path.

:::info Remember
It's crucial first to set the track before asking the robot to follow it.
The controller expects the sequence of waypoints in the order they should be traversed.
Without a set track, the controller wouldn't know where to direct the robot.
:::

### Features

The controller offers a level of flexibility and intelligence that goes beyond simply following
a predefined path.
Once a track is set, the robot can also traverse it in a few unique ways:

1. **Reversing the Track**:
After the Amiga has learned a track, it's not restricted to following it in just the direction
it was taught.
The end point of the learned track can seamlessly become the starting point, provided the robot is
oriented towards its recorded initial position.
This allows the robot to navigate environments bidirectionally, offering greater autonomy and
adaptability in dynamic settings.

2. **Initiating from Intermediate Points**:
You don't always have to start the robot from the beginning of a track.
The controller is smart enough to allow track following from any intermediate point within the path.
This is especially useful if the robot needs to start its journey from a point that's not the
traditional beginning or end.

### Requirements for Following a Track

For the controller to begin guiding the robot along a track, certain conditions must be met to
ensure accurate and safe navigation:

**Proximity to the Track**: The robot must be situated within a maximum distance of 0.1 meters from
any existing point on the track.
This ensures it's close enough to align itself correctly and follow the track.

**Orientation or Heading**: The robot's heading needs to align closely with the heading of the nearest
point on the track.
Specifically, it should be within 30 degrees of the track point's heading.
This condition ensures the robot is oriented correctly and can safely navigate along the desired
path without sudden, unexpected maneuvers.

## Tracks

A track is essentially a sequence of waypoints, guiding the robot from its starting point,
through various intermediary points, to its destination.
Each waypoint in this track provides specific spatial information about where the robot should
be and how it should be oriented at that point.

### Define a Track

A track is represented as a JSON file, where each waypoint is defined by a pose.
A pose captures the robot's position and orientation in the world.
Here's an example of what a single pose looks like:

```json
{
  "pose": {
    "aFromB": {
      "rotation": {
        "unitQuaternion": {
          "imag": {
            "z": -0.9932486190247055
          },
          "real": 0.11600508956729176
        }
      },
      "translation": {
        "x": 2674.593868581748,
        "y": 4297.325262829638
      }
    },
    "frameA": "world",
    "frameB": "robot",
    "tangentOfBInA": {
      "linearVelocity": {
        "x": 0.4467579546503179
      },
      "angularVelocity": {
        "z": 0.00475509022854358
      }
    }
  },
  "heading": -2.909058930621276
},
```

### Examples

Now that you have a good understanding of how the controller works, try some of the
controller examples:

- [Record a Track](/docs/examples/track_recorder)
- [Follow a Track](/docs/examples/track_follower)
- [Drive a Square](/docs/examples/square_track)
:::caution Warning
The controller examples will cause the Amiga to drive when the dashboard is in auto mode.
Make sure the area is clear before running examples.

You can also run the examples when the Amiga dashboard is not in `AUTO READY` or `AUTO ACTIVE`
and see the commands being sent with the red needle on the auto page without the Amiga actually moving.
:::
