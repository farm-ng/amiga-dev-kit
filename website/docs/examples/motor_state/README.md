---
id: motor-state
title: Motor State
---

# Amiga Motor State Stream Example

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, and `loops`, since the example utilizes these fundamentals.
and poses as they pertain to autonomous systems and autonomous navigation.

2. [**farm-ng Canbus Service Overview**](/docs/concepts/canbus_service):
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

The [**Amiga Motor State Stream**](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/motor_states_stream/main.py)
example is a basic way of showing how to access and decode the
`MotorState` values streamed by the canbus service.

:::info
There will be no `/motor_states` stream if your amiga is e-stopped by a physical e-stop press.
The e-stop cuts the power to the motors, so they do not send their state on the CAN bus.
:::

## Setup

Create first a virtual environment

```bash
cd farm-ng-amiga
python3 -m venv venv
source venv/bin/activate
```

## Install

```bash
cd py/examples/motor_states_stream
pip install -r requirements.txt
```

## Run example

Specify the `host` field with the IP address of your amiga
in the `service_config.json` file.
As a debugging step, ensure you can ping the amiga at that IP address.

```bash
python main.py --service-config service_config.json
```

## Expected output

You should see a printed stream of the current `MotorState` for all detected motors in your terminal.
