---
id: api-index
title: API Index
---

There are two distinct, yet compatible, APIs.

## Microcontroller API

This is the API for low level control via CAN bus, and is used in the
[**Microcontroller Examples**](/docs/examples/examples-index#microcontroller-examples).

This is [**CircuitPython**](https://circuitpython.org/) and is
for running directly on micro-controllers or other computer other than farm-ng's brain.
If you are using your own hardware, you should use this API.

## Brain API

This is the API of the farm-ng Brain development kit and is used in the
[**Brain ADK Examples**](/docs/examples/examples-index#brain-adk-examples).

This is for running directly on the
[**farm-ng Brain**](/docs/intelligence-kit/brain/brain-v2/)
or for interacting with the gRPC services running on the brain
from another computer.
