---
id: camera-calibration
title: Camera Calibration
---

## Camera Calibration

The requirements to run this example are to have a
[**farm-ng brain**](/docs/brain/) running Oak cameras and that
your PC is on the same local network as the brain.

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Setup

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

Create first a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/camera_calibration
```

### 3. Install the example's dependencies

```bash
pip3 install -r requirements.txt
```

### 4. Execute the Python script

```bash
python3 read_oak_calibration.py --port 50051
```

:::info
By default, the camera address is assumed top be `localhost`.
:::

### 5. Customize run of the Script

Usage example:

```bash
python3 read_oak_calibration.py --address 192.168.1.93 --port 50051
```

:::info
The `--address` will be the IP address of the Amiga. If you need help understanding the
structure of the command line use `python3 read_oak_calibration.py --help`.
:::

### 6. Code overview

Here you can review the code and gain a closer look at how this
example is done.

#### [Link to `camera_calibration/read_oak_calibration.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_calibration/read_oak_calibration.py)

:::tip
We highgly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
