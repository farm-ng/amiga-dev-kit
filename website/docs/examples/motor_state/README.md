---
id: motor-state
title: Motor State
---

# Amiga Motor State Stream Example

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, and `loops`, since the example utilizes these fundamentals.
2. [**farm-ng Canbus Service Overview**](/docs/concepts/canbus_service):
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

The [**Amiga Motor State Stream**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/motor_states_stream/main.py)
example is a basic way of showing how to access and decode the
`MotorState` values streamed by the canbus service.

You can either run this example directly on a brain by `ssh`'ing in, or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

The requirements to run this example are to have a
[**farm-ng brain**](/docs/brain/) running the `canbus service`, without the physical E-STOP pressed.

:::info
There will be no `/motor_states` stream if your amiga is e-stopped by a physical e-stop press.
The e-stop cuts the power to the motors, so they do not send their state on the CAN bus.
:::

## 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## 2. Install the example's dependencies

### Setup

```bash
cd farm-ng-amiga/
```

:::tip Recommended

Create a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

:::

### Install

```bash
cd py/examples/motor_states_stream
pip install -r requirements.txt
```

## 3. [Optional] Modify the Service Config

:::info
You can skip this if running the example `ssh`'d into your brain.
:::

To connect with a `gRPC` client over Wifi,
you must change the `host` field in `service_config.json` from localhost to your robot's name
(e.g., `element-vegetable`).

As a debugging step, ensure you can ping the amiga at that IP address or tailscale name with `ping element-vegetable`.

```json
{
    "name": "canbus",
    "port": 6001,
    "host": "element-vegetable",
    "log_level": "INFO",
    "subscriptions": [
      {
          "uri": {
              "path": "/motor_states",
              "query": "service_name=canbus"
          },
          "every_n": 1
      }
  ]
}
```

## 4. Execute the Python script

```bash
python main.py --service-config service_config.json
```

## Expected output

You should see a printed stream of the current `MotorState` for all detected motors in your terminal.
