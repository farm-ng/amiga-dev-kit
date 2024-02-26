---
id: filter-client
title: Filter Client
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
5. **Knowledge of State Estimation and Uncertainty**: The example deals with concepts of state estimation
(pose, orientation) and the associated uncertainties.
Understanding these concepts is important for interpreting the received data and how these
might be used in downstream applications or enhancements.
6. **Understanding of Kalman Filters, specifically the Unscented Kalman Filter (UKF)**:
The client in this example is receiving state estimates that are the result of UKF computations.
It may be helpful to understand how UKFs work, their limitations and functionalities.
:::

The [**Filter Client**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/filter_client/main.py)
example streams the results from the state estimation filter running on the Amiga.

You can either run this example directly on a brain by `ssh`'ing in, or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

The requirements to run this example are to have a
[**farm-ng brain**](/docs/brain/) running the `filter service`.
The filter service will output the state, even if state estimation results are poor,
as will be the case if certain data streams from device services are missing.

:::info
The state estimation filter service is a client of the following services:

- canbus
- gps
- oak0

:::

## 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## 2. Install the example's dependencies

### Setup

```bash
cd farm-ng-amiga/
```

:::tip Recommended

Create a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

:::

### Install

```bash
cd py/examples/filter_client
pip install -r requirements.txt
```

## 3. Execute the Python script

```bash
python3 main.py --service-config service_config.json
```

:::info
By default, the host address is assumed to be `localhost`.
:::

## 4. Customize the run

If you want to stream the state on your laptop, by connecting with a gRPC client over Wifi,
you can change the `host` field in `service_config.json` from `localhost`
to your robot's name (e.g., `element-vegetable.tail0be07.ts.net`).

```json
{
    "name": "filter",
    "port": 20001,
    "host": "element-vegetable.tail0be07.ts.net",
    "log_level": "INFO",
    "subscriptions": [
        {
            "uri": {
                "path": "/state",
                "query": "service_name=filter"
            },
            "every_n": 1
        }
    ]
}
```

To customize the run, you need to update the `service_config.json`
by modifying the `host` and `port` fields.

## 5. Code overview

In this example we use the `EventClient` with the `subscribe` method to receive the filter state stream.

In this example, we:

- Extract the timestamp from when the state estimation filter sent the pose
  - Which is immediately after it estimates the state
- Create a `Pose3F64` object, a C++ object in `farm-ng-core` made available through pybind
- Extract other important state values, including the uncertainty or confidence in the state estimate

```python
async def main(service_config_path: Path) -> None:
    """Run the filter service client.
    Args:
        service_config_path (Path): The path to the filter service config.
    """
    # create a client to the filter service
    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())

    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):
        # Find the monotonic service send timestamp (this is the time the filter calculated the state),
        # or the first timestamp if not available.
        stamp = (
            get_stamp_by_semantics_and_clock_type(event, StampSemantics.SERVICE_SEND, "monotonic")
            or event.timestamps[0].stamp
        )

        # Unpack the filter state message
        pose: Pose3F64 = Pose3F64.from_proto(message.pose)
        orientation: float = message.heading
        uncertainties: list[float] = [message.uncertainty_diagonal.data[i] for i in range(3)]

        # Print some key details about the filter state
        print("\n###################")
        print(f"Timestamp: {stamp}")
        print("Filter state received with pose:")
        print(f"x: {pose.translation[0]:.3f} m, y: {pose.translation[1]:.3f} m,
                                                orientation: {orientation:.3f} rad")
        print(f"Parent frame: {pose.frame_a} -> Child frame: {pose.frame_b}")
        print(f"Filter has converged: {message.has_converged}")
        print("And pose uncertainties:")
        print(f"x: {uncertainties[0]:.3f} m, y: {uncertainties[1]:.3f} m,
                                             orientation: {uncertainties[2]:.3f} rad")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-filter-stream")
    parser.add_argument("--service-config", type=Path, required=True, help="The filter service config.")
    args = parser.parse_args()

    asyncio.run(main(args.service_config))
```

## Expected output

You should see a printed stream of key details from the `FilterState`.
