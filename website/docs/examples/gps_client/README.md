---
id: gps-client
title: GPS service client Example
---

This [example](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/gps_client/main.py)
acts as a `GpsClient` in a standalone Python script.

It can process two types of GPS messages: relposned and pvt.
The user specifies the type of GPS message to parse, and the script reads the corresponding data,
and prints it to the console.

To run this example, you need a [**farm-ng brain**](/docs/brain/) and a GPS.
In addition, your PC should be connected to the same network as the brain.

:::info
If you haven't already cloned the `farm-ng-amiga` repository, do
so [**here**](/docs/brain/brain-install.md#clone-the-repository).
:::

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

## Setup

Create first a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

## Install

```bash
cd py/examples/file_reader_can
pip install -r requirements.txt
```

## Run example

Specify the file (download before)

```bash
python main.py --service-conf service_config.json
```

:::info
By default, the msg-type is set to relposned (relative to the base station).
You can also use pvt as an option.
:::

```bash
python main.py --service-conf service_config.json --msg-type pvt
```

If everything worked correctly you should now see a large stream
of text come up in your terminal!

The output should look something like this:

```Python

Message stamp: 92614.926564468
GPS time: 1695861128.4
Relative pose north: 2680.3909000000003
Relative pose east: -4297.41093
Relative pose down: -4.00042
Relative pose length: 506481.000063
Accuracy north: 0.0010000000474974513
Accuracy east: 0.0010000000474974513
Accuracy down: 0.0011399999493733048
Carr soln: 2
GNSS fix ok: True
################################
Message stamp: 92615.350155732
GPS time: 1695861128.8
Relative pose north: 2680.39071
Relative pose east: -4297.42
Relative pose down: -4.00037
Relative pose length: 506481.000059
Accuracy north: 0.0010000000474974513
Accuracy east: 0.0010000000474974513
Accuracy down: 0.0011500000255182385
Carr soln: 2
GNSS fix ok: True
################################
```

Congrats you are done!

:::info
**PVT** (Position, Velocity, and Time) messages provide the all-in-one solution: position, velocity,
and time.
It contains details like longitude, latitude, altitude, speed, and UTC time.

**RELPOSNED** (Relative Positioning) messages provide relative position
information in a North, East, Down (N-E-D) frame. It's mainly used for applications requiring relative
positioning between two receivers, often as a part of Real Time Kinematics (RTK) solutions.
It shows the difference in position between a "moving" receiver and a "fixed" reference receiver.
:::

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
