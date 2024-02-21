---
id: pendant-state
title: Pendant State
---

# Amiga Pendant State Example

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. [**farm-ng Canbus Service Overview**](/docs/concepts/canbus_service):
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

The [**Amiga Pendant State**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/pendant_state/main.py)
example is a basic way of showing how to access and decode the
`PendantState` values streamed by the canbus service.

You can either run this example directly on a brain by `ssh`'ing in, or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

The requirements to run this example are to have a
[**farm-ng brain**](/docs/brain/) running the `canbus service`, with a pendant attached to your Amiga.
There will be no `/pendant` stream if your amiga does not have a wired pendant connected.

At the current dashboard firmware release `v0.4.0`, the `PendantState` is not published on the CAN
bus for pendant alternatives, including Kartech wireless remotes and the on-screen pendant.

## `PendantState` details

:::tip
Check out [`farm-ng-amiga/py/farm_ng/canbus/packet.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py)
or the auto-generated [**`canbus.packet` API docs**](/docs/reference/brain/canbus/packet) for the latest.
:::

- `x`: Joystick `[left, right]`, on range `[-1.0, 1.0]`
- `y`: Joystick `[reverse, forward]`, on range `[-1.0, 1.0]`
- `buttons`: Bit masked integer representing which buttons are pressed

```python
class PendantButtons(IntEnum):
    """Bit field for pendant buttons."""

    PAUSE = 0x01  # Square
    BRAKE = 0x02  # Circle
    PTO = 0x04  # Triangle
    CRUISE = 0x08  # Cross (X)
    LEFT = 0x10  # D-pad left
    UP = 0x20  # D-pad up
    RIGHT = 0x40  # D-pad right
    DOWN = 0x80  # D-pad down
```

:::warning caution
This is the raw output of the pendant,
so you should not expect to see `x == 0.0` or `y == 0.0` when the joystick is "centered",
as there is inherent noise in the reading of a joystick axis.

The dashboard filters these values out for vehicle control based on the pendant calibration,
but that is not represented in the `PendantState`.
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
cd py/examples/pendant_state
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
              "path": "/pendant",
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

You should see a printed stream of  `PendantState`,
with additional printout of any pressed buttons.
