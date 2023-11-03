---
id: controller-track
title: Follow Track
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
3. **[farm-ng Controller Service Overview](/docs/concepts/controller_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
4. [**farm-ng Transforms & Poses Overview**](/docs/concepts/transforms_and_poses/):
This overview provides insight into coordinate frames, transforms,
and poses as they pertain to autonomous systems and autonomous navigation.
5. [**farm-ng Tracks & Waypoints Overview**](/docs/concepts/controller_101/):
This overview provides insight into compiling poses as waypoints into a Track
that can be followed by the Amiga.
:::

:::caution Warning
The controller examples will cause the Amiga to drive when the dashboard is in auto mode.
Make sure the area is clear before running examples.

You can also run the examples when the Amiga dashboard is not in `AUTO READY` or `AUTO ACTIVE`
and see the commands being sent with the red needle on the auto page without the Amiga actually moving.
:::

The [**Controller Follow Track Example**](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/controller_track/main.py)
operates as a standalone Python script,
in which an `EventClient` to the farm-ng Controller service running on an Amiga brain is created.

This script takes in a pre-recorded track and commands the Amiga to follow it.

You can either run this example directly on a brain by `ssh`'ing in, or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

Ensure that a [**farm-ng brain**](/docs/brain/), with a GPS receiver and Oak cameras,
is actively running the controller service.

:::info
It is **highly recommended** to read through the [Controller Service Overview](/docs/concepts/controller_service/)
before running this example.

This will provide insight into the requirements and API
for using the controller service to follow a path.
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
cd py/examples/controller_track
pip install -r requirements.txt
```

## 3. Execute the Python script

```bash
python main.py --service-config service_config.json --track <path-to-your-track>
# Replace <path-to-your-track> to the actual path to your track
```

:::tip Tip
There's an example to teach you how to [**record your own track here**](/docs/examples/record_track).
:::

If everything worked correctly you should now see a large stream
of text come up in your terminal!

## 4. Customize the run

If you want to command the robot from your laptop, by connecting with a `gRPC` client over Wifi,
you can change the `host` field in `service_config.json` from localhost to your robot's name
(e.g., `element-vegetable`).

```json
{
    "name": "controller",
    "port": 20101,
    "host": "element-vegetable",
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
We then command the controller to follow the set track (`/follow_track`).

```python
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
```

We also use the `subscribe` method to receive and stream the controller state.

```python
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

We use the `asyncio.gather` method to allow running the two tasks,
(1) setting the controller to follow the track and (2) streaming the controller state,
simultaneously and asynchronously.

```python
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

**Congrats you are done!**

:::caution Warning
To run this example, you must activate the `auto control` mode on your Amiga via the dashboard.
:::

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
