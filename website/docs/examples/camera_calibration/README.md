---
id: camera-calibration
title: Camera Calibration
---

## Camera Calibration

This [example](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/camera_calibration/main.py)
operates as a standalone Python script,
in which an `EventClient` to an Oak camera service running on an Amiga brain is created.
The calibration of the Oak camera is printed in the terminal.

You can either run this example directly on a brain by `ssh`'ing in,
or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

Ensure that a [**farm-ng brain**](/docs/brain/) running Oak cameras is active.

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
python3 main.py --service-config service_config.json
```

:::info
By default, the camera host is assumed to be `localhost`.
If running the example from your local PC, you should replace `localhost` with your brain's
IP address (e.g., 100.67.32.5) or your Amiga's name (e.g., `element-vegetable` -
only supported if connected via tailscale).
:::

### 5. Customize run

```bash
# usage: amiga-camera-calibration [-h] --service-config SERVICE_CONFIG
#
# optional arguments:
#   -h, --help            show this help message and exit
#   --service-config SERVICE_CONFIG
#                         The camera config.
```

### 6. Code overview

In this example we use the `EventClient` with the `request_reply`
method to receive the camera camera calibration.
The `request_reply` method is a coroutine that returns a `Future` object.
The `Future` object is used to retrieve the result of the request.

The path to the calibration service is `/calibration` and the request message is `Empty`.
The response message is `OakCalibration`, which is automatically decoded by the `request_reply`
method using the `decode=True` argument.

```python
async def main(service_config_path: Path) -> None:
    """Request the camera calibration from the camera service.

    Args:
        service_config_path (Path): The path to the camera service config.
    """
    # create a client to the camera service
    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())

    # get the calibration message
    calibration: oak_pb2.OakCalibration =
        await EventClient(config).request_reply("/calibration", Empty(), decode=True)
    print(calibration)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-camera-calibration")
    parser.add_argument("--service-config", type=Path, required=True, help="The camera config.")
    args = parser.parse_args()

    asyncio.run(main(args.service_config))
```

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
