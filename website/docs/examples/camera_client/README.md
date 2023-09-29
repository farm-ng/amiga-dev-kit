---
id: camera-client
title: Camera Client
---

### [Link to `camera_client/main.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_client/main.py)

This example acts as an `OakCameraClient` in a standalone Python
script.

The requirements to run this example are to have a
[**farm-ng brain**](/docs/brain/) running Oak cameras and that
your PC is on the same local network as the brain.

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/camera_client
```

```bash
pip3 install -r requirements.txt
```

### 3. Execute the Python script

```bash
python3 main.py --service-config service_config.json
```

:::info
By default, the camera address is assumed to be `localhost`.
:::

### 4. Customize the run

Let's have some fun and stream the camera to your laptop over the
Wifi.

:::tip
You need to discover the WiFi address of your Amiga Brain using
the `WifiClient` (coming soon)
:::

```bash
python3 main.py --help

# usage: amiga-camera-stream [-h] --service-config SERVICE_CONFIG
#
# optional arguments:
#   -h, --help            show this help message and exit
#   --service-config SERVICE_CONFIG
#                         The camera config.
```

To customize the run, you need to update the `service_config.json`
by modifying the `host` and `port` fields.

### 5. Code overview

In this example we use the `EventClient` with the `subscribe` method to receive the camera stream.

```python
async def main(service_config_path: Path) -> None:
    """Run the camera service client.

    Args:
        service_config_path (Path): The path to the camera service config.
    """
    # create a client to the camera service
    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())

    # instantiate the image decoder
    image_decoder = ImageDecoder()

    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):
        print(f"Timestamps: {event.timestamps[-2]}")
        print(f"Meta: {message.meta}")
        print("###################\n")

        # cast image data bytes to numpy and decode
        image = np.from_dlpack(image_decoder.decode(message.image_data))

        # visualize the image
        cv2.namedWindow("image", cv2.WINDOW_NORMAL)
        cv2.imshow("image", image)
        cv2.waitKey(1)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-camera-stream")
    parser.add_argument("--service-config", type=Path, required=True, help="The camera config.")
    args = parser.parse_args()

    asyncio.run(main(args.service_config))
```

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
