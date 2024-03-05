---
id: camera-calibration
title: Camera Calibration
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
3. **Camera Calibration Concepts**: Basic knowledge about camera calibration, including what it is
and why it's important, will help you understand the context and the results returned by the example.
4. **[farm-ng Oak Service Overview](/docs/concepts/oak_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

The [**Camera Calibration**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_calibration/main.py)
example operates as a standalone Python script,
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

:::info
To run this script from your PC, you need to update the `service_config.json`
by modifying the `host` field with your Amiga brain name.

Please check out [Amiga Development 101](/docs/concepts/system_overview/README.md#where-to-run-the-examples)
for more details.
:::

```bash
python3 main.py --service-config service_config.json
```

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
