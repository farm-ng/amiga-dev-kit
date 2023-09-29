---
id: motor-state
title: Motor State
---

# Amiga Motor State Stream Example

Currently this is a very basic [example](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/motor_states_stream/main.py)
showing how to access and decode the
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
