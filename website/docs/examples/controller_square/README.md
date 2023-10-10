---
id: controller-square
title: Drive a Square
---

# Controller Drive a Square Example

:::caution Warning
The controller examples will cause the Amiga to drive when the dashboard is in auto mode.
Make sure the area is clear before running examples.

You can also run the examples when the Amiga dashboard is not in `AUTO READY` or `AUTO ACTIVE`
and see the commands being sent with the red needle on the auto page without the Amiga actually moving.
:::

The [**Controller Drive a Square Example**](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/controller_square/main.py)
operates as a standalone Python script,
in which an `EventClient` to the farm-ng Controller service running on an Amiga brain is created.

This script requests the current pose of the robot,
creates a square track from the current pose for the controller,
and commands the Amiga to follow the square track.

You can either run this example directly on a brain by `ssh`'ing in, or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

Ensure that a [**farm-ng brain**](/docs/brain/), with a GPS receiver and Oak cameras,
is actively running the controller service.

:::info
It is **highly recommended** to read through the [Controller Service Overview](/docs/concepts/controller_service/)
before running this example.

This will provide insight into the requirements and API
for using the controller service to follow a path.

It is also recommended you go through the simpler
[Follow a Track](/docs/examples/controller_track/) example first.
:::

## 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

### Setup

:::important Recommended
Create a virtual environment
:::

```bash
python3 -m venv venv
source venv/bin/activate
```

### Install

```bash
cd py/examples/controller_square
pip install -r requirements.txt
```

## 3. Execute the Python script

```bash
python main.py --service-config service_config.json
```

If everything worked correctly you should now see a large stream
of text come up in your terminal!

## 4. Customize the run

### Run remotely

If you want to command the robot from your laptop, by connecting with a `gRPC` client over Wifi,
you can change the `host` field in `service_config.json` from localhost to your robot's name
(e.g., `element-vegetable`).

```json
{
    "name": "controller",
    "port": 20101,
    "host": "element-vegetable",
    "subscriptions": [
        {
            "uri": {
            "path": "/state",
            "query": "service_name=controller"
            },
            "every_n": 1
        }
    ],
    "log_level": "INFO"
}
```

### Modify the square

If you wish to modify the square, you can either:

- Change the side length by specifying a `--side-length` value
- Change the direction of the square by using the `--clockwise` flag

Check for details with:

```bash
python main.py --help
```

And see:

```bash
usage: amiga-controller-square [-h] --service-config SERVICE_CONFIG [--side-length SIDE_LENGTH] [--clockwise]

optional arguments:
  -h, --help            show this help message and exit
  --service-config SERVICE_CONFIG
                        The controller service config.
  --side-length SIDE_LENGTH
                        The side length of the square.
  --clockwise           Set to drive the square clockwise (right hand turns).
                        Default is counter-clockwise (left hand turns).
```

## 5. Code Overview

### `/get_pose`

In this example we use the `EventClient` with the `request_reply` method
to get the current pose of the Amiga robot.
This pose becomes the first pose in the square track we will define programmatically.

```python
async def get_pose(service_config: EventServiceConfig) -> Pose3F64:
    """Get the current pose of the robot in the world frame, from the controller service.

    Args:
        service_config (EventServiceConfig): The controller service config.
    """
    reply = await EventClient(service_config).request_reply("/get_pose", Empty(), decode=True)
    print(f"Current pose:\n{reply}")
    return Pose3F64.from_proto(reply)
```

### Track creation

We then construct a square track by iteratively adding waypoints along the track
at a small linear and/or angular distance away.
We use `0.1 meters` and `0.1 radians` between each point along the track,
but your track can be spaced much further.
We do recommend, however, that if you are creating a track that crosses itself
or a track in which the end and the start are at the same coordinates,
you have greater than `20` waypoints along your track.

:::info
The [**`Pose3F64`**](https://github.com/farm-ng/farm-ng-core/blob/main/py/pybind/lie_pybind.cpp)
objects are `C++` classes from [`farm-ng-core`](https://github.com/farm-ng/farm-ng-core)
exposed to the `Python` script using [`pybind`](https://pybind11.readthedocs.io/en/stable/index.html).

These represent a 3D Isometry frame transformation from a
parent (`frame_a`) to a child (`frame_b`) coordinate frame.
:::

Each point along the track is created by multiplying a small relative transform to
the pose of the previous pose along the track.
In other words, the next pose along the track is either a small distance in front of
or a small angular rotation to the right of the previous pose along the track.

:::tip
The multiplication of coordinate frame transforms is a fundamental concept in robotics!

Covering this topic is out of the scope of this example.
If you wish to learn more, there is an abundance of free online resources and courses covering the topic.
One such option is [MIT OpenCourseWare - Introduction To Robotics](https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/).
:::

Because this example is a square, the transform between each waypoint
represents either driving straight forward or turning in place.
But this is not a constraint for the controller!
Your tracks can reflect a combination of rotation and translation (a 3d Isometry) between track waypoints.

```python
async def build_square(service_config: EventServiceConfig, side_length: float, clockwise: bool) -> FilterTrack:
    """Build a square track, from the current pose of the robot.

    Args:
        service_config (EventServiceConfig): The controller service config.
        side_length (float): The side length of the square.
        clockwise (bool): True will drive the square clockwise (right hand turns).
                        False is counter-clockwise (left hand turns).
    """

    # Query the controller for the current pose of the robot in the world frame
    world_pose_robot: Pose3F64 = await get_pose(service_config)

    # Create a container to store the track waypoints
    track_waypoints: list[Pose3F64] = []

    # Set the angle of the turns, based on indicated direction
    angle: float = radians(-90) if clockwise else radians(90)

    # Add the first goal at the current pose of the robot
    world_pose_goal0: Pose3F64 = world_pose_robot *
        Pose3F64(a_from_b=Isometry3F64(), frame_a="robot", frame_b="goal0")
    track_waypoints.append(world_pose_goal0)

    # Drive forward 1 meter (first side of the square)
    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal1", side_length))

    # Turn left 90 degrees (first turn)
    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal2", angle))

    # Add second side and turn
    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal3", side_length))
    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal4", angle))

    # Add third side and turn
    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal5", side_length))
    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal6", angle))

    # Add fourth side and turn
    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal7", side_length))
    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal8", angle))

    # Return the list of waypoints as a FilterTrack proto message
    # This is the format currently expected by the controller service
    return format_track(track_waypoints)


def create_straight_segment(
    previous_pose: Pose3F64, next_frame_b: str, distance: float, spacing: float = 0.1
) -> list[Pose3F64]:
    """Compute a straight segment of a square.

    Args:
        previous_pose (Pose3F64): The previous pose.
        next_frame_b (str): The name of the child frame of the next pose.
        distance (float): The side length of the square.
        spacing (float): The spacing between waypoints, in meters.

    Returns:
        Pose3F64: The poses of the straight segment.
    """
    # Create a container to store the track segment waypoints
    segment_poses: list[Pose3F64] = [previous_pose]

    # For tracking the number of segments and remaining angle
    counter: int = 0
    remaining_distance: float = distance

    while abs(remaining_distance) > 0.01:
        # Compute the distance of the next segment
        segment_distance: float = copysign(min(abs(remaining_distance), spacing), distance)

        # Compute the next pose
        straight_segment: Pose3F64 = Pose3F64(
            a_from_b=Isometry3F64([segment_distance, 0, 0], Rotation3F64.Rz(0)),
            frame_a=segment_poses[-1].frame_b,
            frame_b=f"{next_frame_b}_{counter}",
        )
        segment_poses.append(segment_poses[-1] * straight_segment)

        # Update the counter and remaining angle
        counter += 1
        remaining_distance -= segment_distance

    # Rename the last pose to the desired name
    segment_poses[-1].frame_b = next_frame_b
    return segment_poses


def create_turn_segment(
    previous_pose: Pose3F64, next_frame_b: str, angle: float, spacing: float = 0.1
) -> list[Pose3F64]:
    """Compute a turn segment of a square.

    Args:
        previous_pose (Pose3F64): The previous pose.
        next_frame_b (str): The name of the child frame of the next pose.
        angle (float): The angle to turn, in radians (+ left, - right).
        spacing (float): The spacing between waypoints, in radians.
    Returns:
        list[Pose3F64]: The poses of the turn segment.
    """
    # Create a container to store the track segment waypoints
    segment_poses: list[Pose3F64] = [previous_pose]

    # For tracking the number of segments and remaining angle
    counter: int = 0
    remaining_angle: float = angle

    while abs(remaining_angle) > 0.01:
        # Compute the angle of the next segment
        segment_angle: float = copysign(min(abs(remaining_angle), spacing), angle)

        # Compute the next pose
        turn_segment: Pose3F64 = Pose3F64(
            a_from_b=Isometry3F64.Rz(segment_angle),
            frame_a=segment_poses[-1].frame_b,
            frame_b=f"{next_frame_b}_{counter}",
        )
        segment_poses.append(segment_poses[-1] * turn_segment)

        # Update the counter and remaining angle
        counter += 1
        remaining_angle -= segment_angle

    # Rename the last pose to the desired name
    segment_poses[-1].frame_b = next_frame_b
    return segment_poses
```

### Follow the track

Additionally, this example:

- formats the created track
- Sets the track for the controller to follow ( `/set_track`)
- Sends the controller to follow the track (`/follow_track`)
- Creates multiple `asyncio.Task`'s and runs them simultaneously
  - Creating, setting, and following the path
  - Streaming the state of the controller service

For more details on these, please review the simpler
[Follow a Track](/docs/examples/controller_track/) example.

**Congrats you are done!**

:::caution Warning
To run this example, you must activate the `auto control` mode on your Amiga via the dashboard.
:::

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
