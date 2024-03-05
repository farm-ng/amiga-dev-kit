---
id: track-planner
title: Track Planner
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

The [**Track Planner Example**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/track_planner/main.py)
operates as a standalone Python script,
in which a [**`Track`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/track/track.proto)
proto message is generated using the [TrackPlanner](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/track_planner/track_planner.py)
class. We use the [`matplotlib`](https://matplotlib.org/) library to visualize
the Track we created.

We used this example to generate a virtual strawberry field at the 2024 World Ag. Expo!

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
sudo apt-get install python3-tk
```

## 3. Execute the Python script

:::info
Since this example must be run from your local PC, you will need update the `service_config.json`
by modifying the `host` field with your Amiga brain name.

Please check out [Amiga Development 101](/docs/concepts/system_overview/README.md#running-examples-on-your-local-machine)
for more details.
:::

```bash
python main.py --service-config service_config.json
```

You should now see a `matplotlib` popup with a plot of your `Track`.

![track](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/4193007c-4246-4d1f-a620-43aacd92813f)

## 4. Customize the run

You can use the flags `--invert` and `--save-track` to invert and/or save your track.
Check out more details by running:

```bash
python main.py --help
```

If saving a track, you will need to specify a path (e.g., `/Documents/my_track.json`).

For example:

```bash
python main.py --service-config service_config.json --save-track /Documents/my_track.json
```

### Methods

The `TrackPlanner` class contains several methods for primitive motion planning segments:

- `create_straight_segment`: Use this method for creating straight turns.
- `create_ab_segment`: Use this method to connect your last position to a know location (ab line).
- `create_turn_segment`: Use this method to make the robot turn in place.
- `create_arc_segment`: Use this method to create smooth turns such as a U-turn.

## 5. [Optional] Use your custom track on Autoplot

To use your custom track on Autoplot, all you have to do is copy it to `/mnt/data/tracks`
inside your robot.

First, let's copy your custom track to your home directory on the robot:

```bash
cd <to your custom track> # e.g., cd /Documents/
scp <track-name> farm-ng-user-<username>@<your-brain>: # e.g., scp my_track.json farm-ng-user-jdoe@element-vegetable:
```

`scp` will copy the track from your local computer to your robot.
The next step is to SSH into your robot and move your track to the correct destination

```bash
ssh <your-brain>
sudo mv <track-name> /mnt/data/tracks # e.g., sudo mv my_track.json /mnt/data/tracks
```

:::info SSH access
Make sure to check [Access and Development on the Brain](/docs/ssh) to learn how to
SSH into your brain
:::

**Congrats you are done!**
