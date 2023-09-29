---
id: gps-client
title: GPS Client
---

The [GPS Client example](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/gps_client/main.py)
acts as a `EventClient` to the GPS service in a standalone Python script.

It can process two types of GPS messages: `relposned` and `pvt`.
The user specifies the type of GPS message to parse, and the script reads the corresponding data,
and prints it to the console.

To run this example, you need a [**farm-ng brain**](/docs/brain/) and an RTK GPS.
If running this example on your PC, please ensure it's connected to the same
network as the brain.
Alternatively, this example can also just be run directly on the brain.

:::info
There are two types of GPS messages: **PVT** and **RELPOSNED**.

**PVT** (Position, Velocity, and Time) messages provide the all-in-one solution: position, velocity,
and time.
It contains details like longitude, latitude, altitude, speed, and UTC time.

**RELPOSNED** (Relative Positioning) messages provide relative position
information in a North, East, Down (N-E-D) frame. It's mainly used for applications requiring relative
positioning between two receivers, often as a part of Real Time Kinematics (RTK) solutions.
It shows the difference in position between a "moving" receiver and a "fixed" reference receiver.
:::

:::tip
If you haven't already cloned the `farm-ng-amiga` repository, do
so [**here**](/docs/brain/brain-install.md#clone-the-repository).
:::

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

#### Setup

:::important Recommended
Create a virtual environment
:::

```bash
python3 -m venv venv
source venv/bin/activate
```

#### Install

```bash
cd py/examples/gps_client
pip install -r requirements.txt
```

### 3. Execture the Python script

```bash
python main.py --service-config service_config.json
```

:::tip Tip
You can also specify a gps interface (`relposned` or `pvt`) to read by adding the flag **--uri-path**
:::

For example:

```bash
python main.py --service-config service_config.json --uri-path /relposned
python main.py --service-config service_config.json --uri-path /pvt
```

If everything worked correctly you should now see a large stream
of text come up in your terminal!

The output should look something like this:

```bash
Message stamp: 913.417056353
GPS time: 1696009971.6
Latitude: 36.9293043
Longitude: -121.7903499
Altitude: 35.574
Ground speed: 0.78
Speed accuracy: 0.06199999898672104
Horizontal accuracy: 0.014999999664723873
Vertical accuracy: 0.017000000923871994
P DOP: 0.0179
--------------------------------------------------
```

**Congrats you are done!**

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::

<!-- INCLUDE_CODE: farm-ng-amiga/py/examples/gps_client/main.py -->
