---
id: track-follower
title: Follow a Track
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
3. **[farm-ng Track Follower Service Overview](/docs/concepts/track_follower_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
4. [**farm-ng Transforms & Poses Overview**](/docs/concepts/transforms_and_poses/):
This overview provides insight into coordinate frames, transforms,
and poses as they pertain to autonomous systems and autonomous navigation.
5. [**farm-ng Tracks & Waypoints Overview**](/docs/concepts/tracks_and_waypoints/):
This overview provides insight into compiling poses as waypoints into a Track
that can be followed by the Amiga.
:::

:::caution Warning
The track follower examples will cause the Amiga to drive when the dashboard is in auto mode.
Make sure the area is clear before running examples.

You can also run the examples when the Amiga dashboard is not in `AUTO READY` or `AUTO ACTIVE`
and see the commands being sent with the red needle on the auto page without the Amiga actually moving.
:::

The [**Track Follower Example**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/track_follower/main.py)
operates as a standalone Python script,
in which an `EventClient` to the farm-ng Track Follower service running on an Amiga brain is created.

This script takes in a pre-recorded track and commands the Amiga to follow it.

You can either run this example directly on a brain by `ssh`'ing in, or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

Ensure that a [**farm-ng brain**](/docs/brain/), with a GPS receiver and Oak cameras,
is actively running the track follower service.

:::info
It is **highly recommended** to read through the [Track Follower Service Overview](/docs/concepts/track_follower_service/)
before running this example.

This will provide insight into the requirements and API
for using the track follower service to follow a path.
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
cd py/examples/track_follower
pip install -r requirements.txt
```

## 3. Execute the Python script

```bash
python main.py --service-config service_config.json --track <path-to-your-track>
# Replace <path-to-your-track> to the actual file path to your track
```

:::tip Tip
There's an example to teach you how to [**record your own track here**](/docs/examples/track_recorder).
:::

If everything worked correctly you should now see a large stream
of text come up in your terminal!

## 4. Customize the run

To run this script from your PC, you need to update the `service_config.json`
by modifying the `host` field with your Amiga brain name.
Please check out [Amiga Development 101](docs/concepts/system_overview/README.md#where-to-run-the-examples)
for more details.

## 5. Code Overview

In this example we use the `EventClient` with the `request_reply` method to set a track
(`/set_track`) to be followed.
We then command the track follower to follow the set track (`/start`).

```python
async def set_track(service_config: EventServiceConfig, track: Track) -> None:
    """Set the track of the track_follower.

    Args:
        service_config (EventServiceConfig): The track_follower service config.
        track (Track): The track for the track_follower to follow.
    """
    print(f"Setting track:\n{track}")
    await EventClient(service_config).request_reply("/set_track", TrackFollowRequest(track=track))


async def start(service_config: EventServiceConfig) -> None:
    """Follow the track.

    Args:
        service_config (EventServiceConfig): The track_follower service config.
    """
    print("Sending request to start following the track...")
    await EventClient(service_config).request_reply("/start", Empty())


async def main(service_config_path: Path, track_path: Path) -> None:
    """Run the track_follower track example. The robot will drive the pre-recorded track.

    Args:
        service_config_path (Path): The path to the track_follower service config.
    """

    # Extract the track_follower service config from the JSON file
    service_config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())

    # Read the track and package in a Track proto message
    track: Track = proto_from_json_file(track_path, Track())

    # Send the track to the track_follower
    await set_track(service_config, track)

    # Follow the track
    await start(service_config)
```

We also use the `subscribe` method to receive and stream the track follower state.

```python
async def stream_track_state(service_config_path: Path) -> None:
    """Stream the track_follower state.

    Args:
        service_config_path (Path): The path to the track_follower service config.
    """

    # Brief wait to allow the track_follower to start (not necessary in practice)
    await asyncio.sleep(1)
    print("Streaming track_follower state...")

    # create a client to the camera service
    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())

    message: TrackFollowerState
    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):
        print("###################")
        print(message)
```

We use the `asyncio.gather` method to allow running the two tasks,
(1) setting the track follower to follow the track and (2) streaming the track follower state,
simultaneously and asynchronously.

```python
async def run(args) -> None:
    tasks: list[asyncio.Task] = [
        asyncio.create_task(main(args.service_config, args.track)),
        asyncio.create_task(stream_track_state(args.service_config)),
    ]
    await asyncio.gather(*tasks)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-track-follower")
    parser.add_argument("--service-config", type=Path, required=True,
        help="The track_follower service config.")
    parser.add_argument("--track", type=Path, required=True,
        help="The filepath of the track to follow.")
    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    loop.run_until_complete(run(args))
```

**Congrats you are done!**

:::caution Warning
To run this example, you must activate the `auto control` mode on your Amiga via the dashboard.
:::

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
