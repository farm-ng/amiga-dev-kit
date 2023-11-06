---
id: vehicle-twist
title: Vehicle Twist
---

# Amiga Vehicle Twist example

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, and `loops`, since the example utilizes these fundamentals.
and poses as they pertain to autonomous systems and autonomous navigation.

2. [**farm-ng Canbus Service Overview**](/docs/concepts/canbus_service):
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

The [**Amiga Vehicle Twist**](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/vehicle_twist/main.py)
example is a basic way of showing how to send `Twist2d` proto messages
to the canbus service to control the amiga.

## Setup

Create first a virtual environment

```bash
cd farm-ng-amiga
python3 -m venv venv
source venv/bin/activate
```

## Install

```bash
cd py/examples/vehicle_twist
pip install -r requirements.txt
```

## Run example

Specify the `host` field with the IP address of your amiga
in the `service_config.json` file.
As a debugging step, ensure you can ping the amiga at that IP address.

```bash
python main.py --service-config service_config.json
```

:::warning
WARNING: When the dashboard is in auto mode, this will cause the Amiga to drive.
Make sure the area is clear before using this.

You can also test this by sending the commands when the Amiga dashboard is
not in `AUTO READY` or `AUTO ACTIVE` and see the commands being sent
with the red needle on the auto page.
:::

### Drive the amiga

Use the `WASD` keys to drive the amiga in the window that pops up after when run the script.

`w` & `s` will increment the linear velocity up / down respectively.

`a` & `d` will increment the angular velocity left / right respectively.

:::caution
The commanded speed will persist!
:::

Use space bar to set all velocities back to 0.

Use `q` to quit the application.

## Expected output

You should see a printed stream of the `Twist2d` messages you are sending to the canbus service.
