---
id: camera-client
title: Camera Client
---

### [Link to `camera_client/main.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_client/main.py)

This example acts as an `OakCameraClient` in a standalone Python script.

The requirements to run this example are to have a [farm-ng brain](/docs/brain/) running Oak cameras and that your PC is on the same local network as the brain.

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the example in the brain ADK virtual environment.

:::

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd brain/examples/camera_client
```
```bash
pip3 install -r requirements.txt
```

### 3. Execute the Python script

```bash
python3 main.py --port 50051
```

:::info
By default, the camera address is assumed top be `localhost`.
:::

### 4. Customize the run

Let's have some fun and stream the camera to your laptop over the Wifi.

:::tip
You need to discover the WiFi address of your Amiga Brain using the `WifiClient` (coming soon)
:::

```bash
python3 main.py --help

# usage: amiga-camera-app [-h] --port PORT [--address ADDRESS] [--stream-every-n STREAM_EVERY_N]

# optional arguments:
#   -h, --help            show this help message and exit
#   --port PORT           The camera port.
#   --address ADDRESS     The camera address
#   --stream-every-n STREAM_EVERY_N
#                         Streaming frequency
```
Usage example:

```bash
python3 main.py --address 192.168.1.93 --port 50051
```

### 5. Code overview

Basic structure to consume from the camera client in an async fashion.

```python
from farm_ng.oak.client import OakCameraClient, OakCameraClientConfig
from farm_ng.oak import oak_pb2

async def main(address: str, port: int, stream_every_n: int) -> None:

    # configure the camera client
    config = OakCameraClientConfig(address=address, port=port)
    client = OakCameraClient(config)

    # get the streaming object
    response_stream = client.stream_frames(every_n=stream_every_n)

    # start the streaming service
    await client.connect_to_service()

    while True:
        # query the service state
        state: oak_pb2.OakServiceState = await client.get_state()

        if state.value != oak_pb2.OakServiceState.RUNNING:
            print("Camera is not streaming!")
            continue

        response: oak_pb2.StreamFramesReply = await response_stream.read()
        if response and response.status == oak_pb2.ReplyStatus.OK:
            # get the sync frame
            frame: oak_pb2.OakSyncFrame = response.frame
            print(f"Got frame: {frame.sequence_num}")
            print(f"Device info: {frame.device_info}")
            print("#################################\n")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-camera-app")
    parser.add_argument("--port", type=int, required=True, help="The camera port.")
    parser.add_argument("--address", type=str, default="localhost", help="The camera address")
    parser.add_argument("--stream-every-n", type=int, default=4, help="Streaming frequency")
    args = parser.parse_args()

    asyncio.run(main(args.address, args.port, args.stream_every_n))
```
:::tip
We highgly recommend to have some basic knowledge about [`asyncio`](https://docs.python.org/3/library/asyncio.html).
:::
