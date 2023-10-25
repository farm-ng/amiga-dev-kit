---
id: controller-101
title: Controller 101
---

# Controller 101: Understanding the Amiga's Controller

## Fundamental Concepts

### Frames of Reference

In robotics, a frame of reference (often just called a "frame") is a way to describe the
position and orientation of something in space.
There are two primary frames you need to be aware of:

**World Frame**: This is a fixed frame, usually representing the environment or the world in which
the robot operates.
Think of it as an anchor point that doesn't move.

**Robot Frame**: This frame is attached to the robot.
As the robot moves, this frame moves with it.
It's used to describe the robot's position and orientation relative to the world frame.

### Poses

A pose describes the position and orientation of the robot in space.
It's a combination of:

**Position**: Where the robot is. This is usually given as a set of coordinates (x, y, z).

**Orientation**: Which way the robot is facing. This can be represented using quaternions,
which are a way to describe 3D rotations.

### Quaternions

Quaternions are a type of mathematical object used to represent rotations in 3D space.
They're an alternative to other methods like Euler angles or rotation matrices.
Quaternions are particularly useful because they avoid certain problems like gimbal lock
and can be more computationally efficient.

### Transformations

A transformation describes how to move from one frame to another.
For instance, if you know the robot's pose in the world frame and you want to know its
pose in another frame (like a camera attached to the robot), you'd use a transformation.

:::tip
The multiplication of coordinate frame transforms is a fundamental concept in robotics!

If you wish to learn more, there is an abundance of free online resources and courses covering the topic.
One such option is [MIT OpenCourseWare - Introduction To Robotics](https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/).
:::

## Creating and Propagating Poses for the Controller

When you want the Amiga to perform a specific movement, you need to provide it with a series
of poses that describe that movement.

For a better understanding of the `Pose` structure, please refer to our
[**protobuf definition of a pose**](https://github.com/farm-ng/farm-ng-core/blob/main/protos/farm_ng/core/pose.proto).

Each pose has an `Isometry3F64`, which is a representation of rigid body transformations in 3D space.
In simple terms, it describes how an object moves and rotates in three-dimensional space
without changing its shape.
The term "isometry" implies that distances between points remain unchanged during the transformation.

In the context of robotics, `Isometry3F64` is used to describe the movement
and rotation of a robot in 3D space.

### Properties of Isometry3F64

**Translation**: This represents the linear movement of the robot.
This is represented as a 3D vector, where each component (x, y, z) describes movement along that axis.

**Rotation**: This represents the angular movement of the robot.
This rotation is represented using `Rotation3F64`, which, in this context, uses the Rz method
to denote a rotation about the z-axis.

**Rz method**: The Rz method, when applied to Rotation3F64, denotes a rotation about the z-axis.
In 3D space, the z-axis typically points upwards, perpendicular to the ground plane
(assuming the x-y plane represents the ground).
When you rotate an object about the z-axis, it turns around this vertical line,
much like how a spinning top rotates around its central axis.

### Example

There are several ways of creating poses and commanding your `Controller` to follow them.
Let's check how to use the concepts learned here to create poses that represent a `pi turn`
(also know as a U turn) using the `pose` structure:

**NOTE**: Please note that in this example we propagate the proposes from the robot frame.

```python
def create_pi_turn_segment(
    previous_pose: Pose3F64, next_frame_b: str, radius: float, spacing: float = 0.1
) -> list[Pose3F64]:
    """Compute a pi turn segment.

    Args:
        previous_pose (Pose3F64): The previous pose.
        next_frame_b (str): The name of the child frame of the next pose.
        radius (float): The radius of the pi turn.
        spacing (float): The spacing between waypoints, in meters.

    Returns:
        list[Pose3F64]: The poses of the pi turn segment.
    """
    # Calculate the total arc length of the half-circle
    arc_length = pi * radius

    # Determine the number of segments, ensuring at least one segment
    num_segments = max(int(arc_length / spacing), 1)

    # Angle increment per segment
    delta_angle = pi / num_segments

    # Distance increment per segment
    delta_distance = arc_length / num_segments

    # Create a container to store the track segment waypoints
    segment_poses: list[Pose3F64] = [previous_pose]

    for i in range(1, num_segments + 1):

        # Calculate the pose for the current segment
        turn_segment: Pose3F64 = Pose3F64(
            a_from_b=Isometry3F64([delta_distance, 0, 0], Rotation3F64.Rz(delta_angle)),
            frame_a=segment_poses[-1].frame_b,
            frame_b=f"{next_frame_b}_{i-1}",
        )
        segment_poses.append(segment_poses[-1] * turn_segment)

    # Rename the last pose to the desired name
    segment_poses[-1].frame_b = next_frame_b
    return segment_poses
```

### Code Breakdown

Since we're in the robot frame, we always command it to drive forward, for this reason the `y` and `z`
components of our `Isometry3F64` are always zero.

- The robot moves forward by delta_distance (linear movement along the x-axis).
- It rotates by delta_angle about the z-axis.
- This transformation is then used to calculate the new pose of the robot for that segment.

In essence, by using Isometry3F64, you're able to succinctly describe both the linear and
angular movements of the robot for each segment of its pi turn.

## Next Steps

Make sure to check the [Concepts](https://amiga.farm-ng.com/docs/concepts/) page
to know more about all the services available in your Amiga and how they interact with each other.

Make sure to also check our [Brain Controller Examples](https://amiga.farm-ng.com/docs/examples/examples-index)
to test the `Controller` in your Amiga.
