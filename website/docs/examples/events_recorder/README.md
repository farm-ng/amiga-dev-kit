---
id: events-recorder
title: Events Recorder
---

## Events Recorder

In this example we show how to record events from farm-ng-brain using
the `EventClient` class.

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
cd farm-ng-amiga/py/examples/events_recorder
```

### 3. Install the example's dependencies

```bash
pip3 install -r requirements.txt
```

### 4. Execute the Python script

In the provided example, we show how to implement the `/start` and `/stop`
requests to start and stop the recording of events. We also provide two example profiles
`record_camera_config.json` and `record_fiter_config.json` that can be used to record the
camera and filter events.

```python
async def start_recording(service_config: EventServiceConfig, recording_profile: EventServiceConfigList) -> None:
    reply = await EventClient(service_config).request_reply("start", recording_profile, decode=True)
    print(reply)


async def stop_recording(service_config: EventServiceConfig) -> None:
    reply = await EventClient(service_config).request_reply("/stop", Empty(), decode=True)
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

    # create a client to the camera service
    service_config: EventServiceConfig = proto_from_json_file(
        args.service_config, EventServiceConfig()
    )

    if args.command == "start_recording":
        recording_profile = proto_from_json_file(
            args.recording_profile, EventServiceConfigList()
        )
        asyncio.run(start_recording(service_config, recording_profile))

    if args.command == "stop_recording":
        asyncio.run(stop_recording(service_config))
```

To start recording the camera events, run the following command:

```bash
python main.py --service-config service_config.json start_recording --recording-profile record_camera_config.json
```

You should see a similar output:

```bash
value: "/mnt/data/2023_09_28_10_24_07_212687_lead-mango"
```

In order to stop the recording, run the following command:

```bash
python main.py --service-config service_config.json stop_recording
```

Finally, to validate that the events have been recorded, you can run the following command:

```bash
python -m farm_ng.core.events_file_reader playback /mnt/data/2023_09_28_10_24_07_212687_lead-mango.0000.bin
```
