---
id: controller_track
title: Follow a track
---

# Controller Track Example

:::warning Danger
**WARNING**: When the dashboard is in auto mode, this will cause the Amiga to drive.
Make sure the area is clear before running this example.

You can also run this example when the Amiga dashboard is not in `AUTO READY` or `AUTO ACTIVE`
and see the commands being sent with the red needle on the auto page.
:::

The [**Controller Track Example**](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/controller_track/main.py)
operates as a standalone Python script,
in which an `EventClient` to the farm-ng Controller service running on an Amiga brain is created.

This script takes in a pre-recorded track and commands the Amiga to follow it.

You can either run this example directly on a brain by `ssh`'ing in, or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

Ensure that a [**farm-ng brain**](/docs/brain/), with a GPS receiver and Oak cameras,
is actively running the GPS and OAK service.
A connection to an RTK base station is also required.

:::tip
If you haven't already cloned the `farm-ng-amiga` repository, do
so [**here**](/docs/brain/brain-install.md#clone-the-repository).
:::

## 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

### Setup

:::important Recommended
Create a virtual environment
:::

```bash
python3 -m venv venv
source venv/bin/activate
```

### Install

```bash
cd py/examples/gps_client
pip install -r requirements.txt
```

## 3. Execute the Python script

```bash
python main.py --service-config service_config.json --track <path-to-your-track>
# Replace <path-to-your-track> to the actual path to your track
```

:::tip Tip
There's an example to teach you how to [**record your own track here**](/docs/examples/record-track).
:::

If everything worked correctly you should now see a large stream
of text come up in your terminal!

The output should look something like this:
## 4. Customize the run
If you want to command the robot from your laptop, by connecting with a `gRPC` client over Wifi,
you can change the `host` field in `service_config.json` from localhost to your robot's name
(e.g., dubnium-durian).

```bash
{
    "name": "controller",
    "port": 20101,
    "host": "dubnium-durian",
    "subscriptions": [
        {
            "uri": {
            "path": "/state",
            "query": "service_name=controller"
            },
            "every_n": 1
        }
    ],
    "log_level": "INFO"
}
```

## 5. Code Overview
In this example we use the `EventClient` with the `request_reply` method to set a track
(`/set_track`) to be followed.
And then, we command the controller to follow the set track (`/follow_track`).

```bash
async def set_track(service_config: EventServiceConfig, filter_track: FilterTrack) -> None:
    """Set the track of the controller.

    WARNING: This API will change in the future.
    The controller service currently expects a FilterTrack proto message,
    but this will change in the future to a more general message type.

    Args:
        service_config (EventServiceConfig): The controller service config.
        filter_track (FilterTrack): The track for the controller to follow.
    """
    print(f"Setting track:\n{filter_track}")
    await EventClient(service_config).request_reply("/set_track", filter_track)


async def follow_track(service_config: EventServiceConfig) -> None:
    """Follow the track.

    Args:
        service_config (EventServiceConfig): The controller service config.
    """
    print("Following track...")
    await EventClient(service_config).request_reply("/follow_track",
        StringValue(value="my_custom_track"))


async def main(service_config_path: Path, track_path: Path) -> None:
    """Run the controller track example. The robot will drive the pre-recorded track.

    Args:
        service_config_path (Path): The path to the controller service config.
    """

    # Extract the controller service config from the JSON file
    service_config: EventServiceConfig = proto_from_json_file(service_config_path,
        EventServiceConfig())

    # Build the track and package in a FilterTrack proto message
    filter_track: FilterTrack = proto_from_json_file(track_path, FilterTrack())

    # Send the track to the controller
    await set_track(service_config, filter_track)

    # Follow the track
    await follow_track(service_config)

    async def run(args) -> None:
    tasks: list[asyncio.Task] = [
        asyncio.create_task(main(args.service_config, args.track)),
        asyncio.create_task(stream_controller_state(args.service_config)),
    ]
    await asyncio.gather(*tasks)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-controller-track")
    parser.add_argument("--service-config", type=Path, required=True,
        help="The controller service config.")
    parser.add_argument("--track", type=Path, required=True,
        help="The filepath of the track to follow.")
    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    loop.run_until_complete(run(args))

```
We also use the `subscribe` method to receive and stream the controller state.

```bash
async def stream_controller_state(service_config_path: Path) -> None:
    """Stream the controller state.

    Args:
        service_config_path (Path): The path to the controller service config.
    """

    # Brief wait to allow the controller to start (not necessary in practice)
    await asyncio.sleep(1)
    print("Streaming controller state...")

    # Create a client to the Controller service
    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())

    message: ControllerState
    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):
        print("###################")
        print(message)
```

**Congrats you are done!**

:::caution Warning
To run this example, you must activate the `auto control` mode on your Amiga via the dashboard.
:::

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::

<!-- INCLUDE_CODE: farm-ng-amiga/py/examples/gps_client/main.py -->
