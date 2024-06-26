---
id: electronics_brain
title: Intelligence Kit
---

# Farm-ng Brain and accessories

When your Amiga is equipped with a Brain and its typical accessories, you will be able to create
applications that record and interact with the motors and software services. To accomplish that,
your Brain must be connected to the CAN bus and other peripherals (like cameras).

The Brains is usually purchased with the other parts of our Intelligence Kit: cameras, GPS antenna,
and a Power over Ethernet (PoE) Switch:

![schematics of intelligence Kit](./assets/intel.png)

Note that the Brain draws power from the CAN bus connector, while the cameras use PoE. Hence, the
Brain use one of the upper PoE Switch ports (1 and 2) and the cameras use the lower ports (3
through 6, identified with an orange circle). The lower port is for power input and needs a
regulated 48 VDC input.

:::danger Caution
When changing connections on the PoE and/or Brain, make sure you do not connect the M12 power cable
from the PoE (the one leaving the power bucks) to the M12 CAN connector on Brain. **Doing so will
cause electrical and/or thermal damage to your Amiga's Brain.**
:::

Finally, the GPS antenna uses an SMA to TNC cable to provide RTK corrections to the Brain.

:::info Changing Intelligence kit mount
Each time you move the the GPS antenna and/or the IMU (oak 0) you must change your robot's geometry
to conform with the new locations of these components. Doing so will ensure accurate navigation.
Geometry parameters of your Amiga can be changed following the guide at [Robot Geometry](../apps/launcher/#robot-geometry).
:::
