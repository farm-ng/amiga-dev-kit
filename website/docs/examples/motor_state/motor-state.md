---
id: motor-state
title: Motor State
---

# Amiga Motor State Stream

Currently this is a very basic example showing how to access and decode the `MotorState` values streamed by the canbus service.

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

Specify the file (download before)

```bash
python main.py --canbus-port 50060 # --address <YOUR_AMIGA_IP_ADDRESS>
```

## Expected output

You should see a printed stream of the current `MotorState` for all detected motors in your terminal.
