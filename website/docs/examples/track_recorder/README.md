---
id: track-recorder
title: Record a Track
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
3. **[farm-ng Filter Service Overview](/docs/concepts/filter_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
4. [**farm-ng Transforms & Poses Overview**](/docs/concepts/transforms_and_poses/):
This overview provides insight into coordinate frames, transforms,
and poses as they pertain to autonomous systems and autonomous navigation.
5. [**farm-ng Tracks & Waypoints Overview**](/docs/concepts/tracks_and_waypoints/):
This overview provides insight into compiling poses as waypoints into a Track
that can be followed by the Amiga.
:::

:::caution Warning
The controller examples will cause the Amiga to drive when the dashboard is in auto mode.
Make sure the area is clear before running examples.

You can also run the examples when the Amiga dashboard is not in `AUTO READY` or `AUTO ACTIVE`
and see the commands being sent with the red needle on the auto page without the Amiga actually moving.
:::

The [**Record a Track**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/record_track/main.py)
example operates as a standalone Python script,
in which an `EventClient` to the filter running on an Amiga brain is created.
This example records the filter track from the state estimation filter running on the Amiga.
When recording a track for the controller to later follow,
we use the `/track` output stream from the filter service.

The requirements to run this example are to have a
[**farm-ng brain**](/docs/intelligence-kit/brain/brain-v2/) running the `filter service`.

:::info
The state estimation filter service is a client of the following services:

- canbus
- gps
- oak0
:::

You can either run this example directly on a brain by `ssh`'ing in,
or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

The filter service will add to the track whenever a sufficient distance,
as a combination of linear and angular difference from the last track pose,
has passed (e.g., `0.1` meters or radians).

A valid path for the existing controller is one with motion that is either turn-in-place or forwards.
Forward motion can be either straight or curved.
The filter service will **NOT** add to the track under certain conditions
that would make following this track difficult or undesirable.
These include:

- Poor state estimation results (lack of filter convergence)
- State estimation missing required sensor data
- GPS service is not connected to an RTK base station
- Driving backwards
- Discontinuities in the path

## 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/record_track
```

```bash
pip3 install -r requirements.txt
```

## 3. Execute the Python script

```bash
python3 main.py --service-config service_config.json --track-name my_new_track
```

:::info
By default, the host address is assumed to be `localhost`.
:::

Once you've started the script,
drive your Amiga along the route you wish to record as a track for the controller to later follow.
When you are done driving the track, kill the script with `ctrl` + `C`.
You can then set the Amiga to follow this track by following the
[**Controller Follow Track Example**](/docs/examples/track_follower).

## 4. Customize the run

If you want to record the track on your laptop, by connecting with a gRPC client over Wifi,
you can change the `host` field in `service_config.json` from `localhost`
to your robot's name (e.g., `element-vegetable`).

```json
{
    "name": "filter",
    "port": 20001,
    "host": "element-vegetable",
    "log_level": "INFO",
    "subscriptions": [
        {
            "uri": {
                "path": "/track",
                "query": "service_name=filter"
            },
            "every_n": 1
        }
    ]
}
```

You can optionally specify the `--output-dir` to change the default directory
in which your track file will be saved.

```bash
python3 main.py --help

usage: amiga-track-recorder [-h] --service-config SERVICE_CONFIG --track-name TRACK_NAME
                          [--output-dir OUTPUT_DIR]

optional arguments:
  -h, --help            show this help message and exit
  --service-config SERVICE_CONFIG
                        The filter service config.
  --track-name TRACK_NAME
                        The name of the track.
  --output-dir OUTPUT_DIR
                        The directory to save the track to.
```

### 5. Code overview

In this example we use the `EventClient` with the `subscribe` method to receive the filter track stream.

In this example, we:

- Request that the filter reset the tracking of the filter track with the `/clear_track` request
  - This will clear any previously hit criteria that would cause the filter to stop adding to the
    track. See above for more details.
- Stream the `/track` topic from the filter service
- Write (or overwrite) the full `FilterTrack` proto to disk every time a pose is added to the track
  - This allows you to exit the program at anytime with the track you have recorded up to that point

```python
async def main(service_config_path: Path, track_name: str, output_dir: Path) -> None:
    """Run the filter service client to record a track.

    Args:
        service_config_path (Path): The path to the filter service config.
        track_name (str): The name of the track.
        output_dir (Path): The directory to save the track to.
    """
    # create a client to the filter service
    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())

    # Clear the track so everything going forward is tracked
    await EventClient(config).request_reply("/clear_track", Empty())

    # Create a list to store the filter track states
    filter_track_states: list[FilterState] = []

    # Subscribe to the filter track topic
    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):

        print("###################")
        print("Adding to track:")
        print(message)

        # Add the filter state to the list
        filter_track_states.append(message)

        # Write the FilterTrack to disk, overwriting the file each time
        if not proto_to_json_file(
            output_dir / f"{track_name}.json", FilterTrack(states=filter_track_states, name=track_name)
        ):
            raise RuntimeError(f"Failed to write track to {output_dir}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-track-recorder")
    parser.add_argument("--service-config", type=Path, required=True, help="The filter service config.")
    parser.add_argument("--track-name", type=str, required=True, help="The name of the track.")
    parser.add_argument(
        "--output-dir", type=Path, default=Path(__file__).parent,
        help="The directory to save the track to."
    )
    args = parser.parse_args()

    if not args.output_dir.exists() or not args.output_dir.is_dir():
        raise ValueError(f"Invalid output directory: {args.output_dir}")

    if not args.track_name:
        raise ValueError("No track name provided.")

    asyncio.run(main(args.service_config, args.track_name, args.output_dir))
```

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
