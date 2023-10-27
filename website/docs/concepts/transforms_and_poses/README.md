---
id: transforms-and-poses
title: Transforms & Poses
---

## Fundamental Concepts

Before we can create autonomy applications for our robot,
we need to understand where our robot and other points of reference are.
The following concepts are critical to understand if you wish
to develop autonomous robotics applications with your Amiga.

### Frames of Reference

In robotics, a **frame of reference**
(often called a "**frame**", **coordinate frame**, or "**reference frame**")
is a description of a coordinate system of 3 orthogonal axes (**x**, **y**, & **z**) defined by
the position and orientation of the object.

The two primary frames you need to be aware of are:

**World Frame (`world`)**:
Conventionally, this is a fixed frame representing the environment in which the robot operates.
Think of it as an anchor point that doesn't move.
If using RTK GPS, a typical world frame coordinate system is defined at the location
of your RTK base station.

**Robot Frame (`robot`)**: This frame is attached to the robot.
As the robot moves, this frame moves with it.
Considering the robot is not a single point, it is important to define where on the robot
is considered the center of the `robot` frame axes.
At farm-ng we choose the center of the robot (in length & width) at ground level.

Additional relevant frames for your Amiga-based robotics applications
may include the `camera` frame, the `imu` frame, the `gps_antenna` frame, and so on.

Each **reference frame** is represented below as a set of red-green-blue axes.
The frames are connected by 6 degree-of-freedom **transforms**,
represented below by yellow arrows.

<!-- ![reference](https://foxglove.dev/images/blog/understanding-ros-transforms/hero.webp) -->
![image](https://github.com/farm-ng/amiga-dev-kit/assets/53625197/656fff08-0296-4d81-8990-dc65d7f1af16)

*Image Credit: [https://foxglove.dev/blog/understanding-ros-transforms](https://foxglove.dev/blog/understanding-ros-transforms)*

### Transformations

A **transformation**, or **transform**, describes how to move from one reference frame to another.

Typically in robotics we represent these transforms as an **isometry** transformation in 3D space.
This is a distance-preserving 6 degree-of-freedom (DOF) transformation
that includes a translation (3 DOF) and a rotation (the other 3 DOF).

For instance, we can represent the transformation from the `world` reference frame
to the `robot` reference frame.
Our naming convention at farm-ng is to call this the **`world_from_robot`** transformation,
following a `<parent>_from_<child>` or `<frame_a>_from_<frame_b>` naming convention.

This transform contains the **translation** along the `world` **x, y, z** axes,
as well as the **rotation** required to align the axes.

The **translation**, a 3-dimensional linear offset,
is represented as a vector of `[x, y, z]` coordinates in the parent reference frame.

The **rotation**, a 3-dimensional rotation, can be represented in a number of ways,
but typically is represented as a **quaternion**.

#### Quaternions

Quaternions are a type of mathematical object used to represent rotations in 3D space.

Quaternions consist of four numbers `(x, y, z, w)` (or sometimes in order `(w, x, y, z)`).
`w` represents the scalar (or real) part of the rotation
and `x`, `y`, and `z` are the vector (or imaginary) parts.

Quaternions are an alternative to other methods like Euler angles or rotation matrices.
Quaternions are particularly useful because they are compact,
avoid certain problems like gimbal lock, and can be more computationally efficient.

#### Transform math

**Transforms** can be mathematically manipulated to understand where **coordinate frames**
are in relation to one another.
Most commonly, you will **invert** transforms and you will **multiply** transforms.

If you know the transform from the `world` coordinate frame to the `robot` coordinate frame (`world_from_robot`),
you can **invert** that transform to get the transform from the `robot` coordinate frame
to the `world` coordinate frame (`robot_from_world`).

```python
world_from_robot = robot_from_imu^-1
```

If you know two transforms with a common frame, you can **multiply** them.

Say you know `world_from_robot` and the `robot_from_imu` transform from your
`robot` frame to your `imu` frame (where the IMU is on your robot).
You can calculate the transform from the `world` frame to the `imu` frame (`world_from_imu`)
with transform **multiplication**.

```python
world_from_imu = world_from_robot * robot_from_imu
```

### Poses

We tend to think of where our robot is as a **pose**, a combination of **position** and **orientation**.
The **position** being where the robot is, and the **orientation** being which way the robot is facing.

A pose is, however, undetermined as there needs to be a **frame of reference** the position
and orientation are in.
Queue **transforms**!

We can define the **pose** of our robot as the 6-DOF transformation from the `world` frame
to our `robot` frame (`world_from_robot`).

We are not limited to representing the `world_from_robot` transformation as a pose.
Any transform can be represented as a pose by correctly specifying the `frame_a` (parent frame)
and `frame_b` (child frame) in our
[**`Pose` protobuf definition**](https://github.com/farm-ng/farm-ng-core/blob/main/protos/farm_ng/core/pose.proto).

### The farm-ng `Pose` proto

:::info
For the latest definition of the `Pose` structure, please refer to our
[**`Pose` protobuf definition**](https://github.com/farm-ng/farm-ng-core/blob/main/protos/farm_ng/core/pose.proto).
:::

Each pose has an `Isometry3F64`, which is a representation of rigid body transformations in 3D space.
In simple terms, it describes how an object moves and rotates in three-dimensional space
without changing its shape.
The term "isometry" implies that distances between points remain unchanged during the transformation.

In the context of robotics, `Isometry3F64` is used to describe the movement
and rotation of a robot in 3D space.

#### Properties of Isometry3F64

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

### Resources

The use and multiplication of coordinate frame transforms is a fundamental concept in robotics!
As such, there is an abundance of quality, free resources on the topic.

For a slightly-less-brief introduction you can refer to [Understanding ROS Transforms](https://foxglove.dev/blog/understanding-ros-transforms).

If you wish to dive deeper on this topic, one option is [MIT OpenCourseWare - Introduction To Robotics](https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/).
