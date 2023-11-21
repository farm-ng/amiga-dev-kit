---
id: track-plotter
title: Plot a Track
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a basic grasp of Python,
including plotting / visualization with the [`matplotlib`](https://matplotlib.org/) library.
2. [**Record a Track**](/docs/examples/track_recorder/): Follow the example to record the track you
will plot in this example and cover the required knowledge
for that example to understand `Tracks`, `Waypoints`, & `Poses`.
3. **Transfer Data**: Know how to transfer data from your robot to your local PC by following the
data transfer section of the [**Recorder App Guide**](/docs/apps/recorder_app/).
:::

The [**Track Plotter Example**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/track_plotter/main.py)
operates as a standalone Python script,
in which a [**`Track`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/track/track.proto)
proto message is plotted using the [`matplotlib`](https://matplotlib.org/) library.
This script takes in a pre-recorded track and plots the track.

To successfully run this example, you must use your local PC, as the example won't
work if executed directly from a brain (because of the popup window).

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
cd py/examples/track_plotter
pip install -r requirements.txt
```

## 3. Execute the Python script

```bash
python main.py --track <path-to-your-track>
# Replace <path-to-your-track> to the actual file path to your track
```

:::info reminder
There's an example to teach you how to [**record your own track here**](/docs/examples/track_recorder).
:::

You should now see a `matplotlib` popup with a plot of your `Track`.

![full_track](https://github.com/farm-ng/amiga-dev-kit/assets/53625197/d22590eb-92fd-421a-9e72-865a9edfcd4b)

If you zoom in on the track, you will see that each waypoint is
plotted as an arrow indicating the heading of the waypoint pose.

![zoomer_track](https://github.com/farm-ng/amiga-dev-kit/assets/53625197/35c9c627-dadb-4bcf-ae7f-23bd46f687fb)

## 4. Code Highlights

The `unpack_track` function is what interacts with the [**`Track`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/track/track.proto)
proto to extract `x` & `y` coordinates and `heading` of each waypoint.
This is done by converting each waypoint
[**`Pose`**](https://github.com/farm-ng/farm-ng-core/blob/main/protos/farm_ng/core/pose.proto)
proto to the
[**`Pose3F64`**](https://github.com/farm-ng/farm-ng-core/blob/main/py/pybind/lie_pybind.cpp)
`C++` class that is exposed through `Pybind`.
We then extract the required values from this class.

```Python
def unpack_track(track: Track) -> tuple[list[float], list[float], list[float]]:
    """Unpack a track from a Track proto message into lists of x, y, and heading values.

    Args:
        track: (Track) The Track proto message to unpack.
    Returns:
        x_values: (list[float]) The x values of the track.
        y_values: (list[float]) The y values of the track.
        headings: (list[float]) The heading values of the track.
    """
    x_values: list[float] = []
    y_values: list[float] = []
    headings: list[float] = []

    waypoint: Pose
    for waypoint in track.waypoints:
        goal: Pose3F64 = Pose3F64.from_proto(waypoint)

        x_values.append(goal.translation[0])
        y_values.append(goal.translation[1])
        headings.append(goal.rotation.log()[-1])

    return x_values, y_values, headings
```

**Congrats you are done!**
