---
id: tracks-and-waypoints
title: Tracks & Waypoints
---

## Understanding Transforms & Poses

Before we can send our robot out to drive a **track** (or **path**),
we need to understand where our robot is and where we want to send it.
For that purposes, please refer to **[Concepts - Transforms & Poses](/docs/concepts/transforms_and_poses)**
before continuing on with this overview.

## Creating and Propagating Poses for the Controller

When you want the Amiga to perform a specific movement, you need to provide it with a series
of poses that describe that movement.
We call these poses **waypoints** and the series of them a **track*.*

For a better understanding of the `Pose` structure, please refer to our
[`Pose` proto overview](/docs/concepts/transforms_and_poses/#the-farm-ng-pose-proto).

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
