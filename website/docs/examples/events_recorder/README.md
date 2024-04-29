---
id: events-recorder
title: Events Recorder
---

:::info Basic Knowledge Requirements

Before diving into this example, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's essential to be well-versed in Python, as the example leverages foundational
concepts such as functions, conditional statements, and command-line argument parsing using the
argparse module.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
3. **[farm-ng Recorder Service Overview](/docs/concepts/recorder_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

In the [**Events Recorder**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/event_recorder/main.py)
example we show how to record events from farm-ng-brain using
the `EventClient` class.

You can either run this example directly on a brain by `ssh`'ing in,
or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through [**tailscale**.](https://tailscale.com/)

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
# Assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/events_recorder
```

### 3. Install the example's dependencies

```bash
pip3 install -r requirements.txt
```

### 4. Code overview

In the provided example, we show how to implement the `/start` and `/stop`
requests to start and stop the recording of events. We also provide two example profiles
`record_camera_config.json` and `record_fiter_config.json` that can be used to record the
camera and filter events.

```python
async def start_recording(
    service_config: EventServiceConfig, recording_profile: EventServiceConfig
) -> None:
    reply = await EventClient(service_config).request_reply(
        "/start", recording_profile, decode=True
    )
    print(reply)


async def stop_recording(service_config: EventServiceConfig) -> None:
    reply = await EventClient(service_config).request_reply(
        "/stop", Empty(), decode=True
    )
    print(reply)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-camera-calibration")
    parser.add_argument(
        "--service-config", type=Path, required=True, help="The camera config.")

    subparsers = parser.add_subparsers(dest="command")

    start_command = subparsers.add_parser("start_recording", help="Start recording.")
    start_command.add_argument(
        "--recording-profile", type=Path, required=True, help="The recording profile.")

    stop_command = subparsers.add_parser("stop_recording", help="Stop recording.")

    args = parser.parse_args()

    # Create a client to the Recorder service
    service_config: EventServiceConfig = proto_from_json_file(
        args.service_config, EventServiceConfig()
    )

    if args.command == "start_recording":
        recording_profile = proto_from_json_file(
            args.recording_profile, EventServiceConfig()
        )
        asyncio.run(start_recording(service_config, recording_profile))

    if args.command == "stop_recording":
        asyncio.run(stop_recording(service_config))
```

### 5. Execute the Python script

:::info
To run this script from your PC, you need to update the `service_config.json`
by modifying the `host` field with your Amiga brain name.

Please check out [Amiga Development 101](/docs/concepts/system_overview/README.md#where-to-run-the-examples)
for more details.
:::

To start recording the camera events, run the following command:

```bash
python main.py --service-config service_config.json start_recording --recording-profile record_camera_config.json
```

You should see a similar output:

```bash
string_value: "/mnt/data/2023_09_28_10_24_07_212687_lead-mango"
```

In order to stop the recording, run the following command:

```bash
python main.py --service-config service_config.json stop_recording
```

Finally, to validate that the events have been recorded, you can run the following command:

```bash
python -m farm_ng.core.events_file_reader playback /mnt/data/2023_09_28_10_24_07_212687_lead-mango.0000.bin
```
