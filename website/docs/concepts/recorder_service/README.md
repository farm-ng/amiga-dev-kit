---
id: recorder-overview
title: Recorder
---

# Recorder Service Overview

The Recorder App/Service is the backbone of the Amiga's data logging and playback functionality.
It is designed to capture and store raw data from various robot services, facilitating later
analysis, debugging, and model training.

Beginning with [**AmigaOS 2.3 Elderberry**](/docs/release-notes/release-023/),
the Recorder service is a sub-service included as part of the [**Amiga Service**](/docs/concepts/amiga_service).

## Purpose

The primary objective of the Recorder sub-service is to provide a robust mechanism for recording
data streams from different services. This is invaluable for tasks such as training computer
vision/AI models, where capturing field imagery is essential.
For instance, when developing a precision sprayer application for weeds, one would
first traverse the field, recording data to train a model to detect weeds.

## Subscriptions

The Recorder Service is a subscriber to the following services:

- Canbus
- Filter
- GPS
- Oak (Multiple Oak topics may be available, depending on the number of Oak cameras connected,
e.g., oak/0, oak/1, ...)
- System Monitor
- Track Follower

## Available Topics for Recording

The Recorder Service offers a variety of topics that can be recorded.
Each topic provides specific data streams from the robot's various services.
Here's a breakdown of each topic:

:::tip
Check out the protobuf messages streamed on these topics at:<br/>
[**`farm-ng-amiga/protos/`**](https://github.com/farm-ng/farm-ng-amiga/tree/main/protos/farm_ng).

Some of which may inherit from the protobuf messages found at:<br/>
[**`farm-ng-core/protos/`**](https://github.com/farm-ng/farm-ng-core/tree/main/protos/farm_ng/core)
:::

- [Canbus Topics](/docs/concepts/canbus_service/#data-streams)

- [Filter Topics](/docs/concepts/filter_service/#data-streams)

- [GPS Topics](/docs/concepts/gps_service/#data-streams)

- [Oak Topics](/docs/concepts/oak_service/#data-streams)

- System Monitor Topics

  - `system_monitor/health`: Delivers health metrics for the system_monitor service,
including publishing frequency.
  - `system_monitor/cpu_usage`: Streams the percent of CPU currently being consumed on the brain.
  - `system_monitor/filter_state`: Streams the filter service state.
  - `system_monitor/wifi_state`: Streams auto mode state (either true or false).
  - `system_monitor/virtual_memory_usage`: Streams athe percent of virtual memory being consumed
by the brain.

- [Track Follower Topics](/docs/concepts/track_follower_service/#data-streams)

---

These topics ensure that users have a comprehensive set of data streams to choose from,
depending on their specific needs and analysis requirements.

## Recording Profile

To initiate recording, a "Recording profile" must be provided as an argument.
This profile is a
[**EventServiceConfig**](https://github.com/farm-ng/farm-ng-core/blob/main/protos/farm_ng/core/event_service.proto#L80-L107)
 protobuf, detailing the subscriptions or topics to be recorded.

```json
{
    "name": "my_profile",
    "subscriptions": [
        {
        "uri": {
            "path": "*",
            "query": "service_name=canbus"
        },
        "every_n": 1
        },
        {
        "uri": {
            "path": "*",
            "query": "service_name=gps"
        },
        "every_n": 1
        },
        {
        "uri": {
            "path": "/imu",
            "query": "service_name=oak/0"
        },
        "every_n": 1
        },
        {
        "uri": {
            "path": "*",
            "query": "service_name=filter"
        },
        "every_n": 1
        }
    ]
}
```

:::info INFO
The **`*`** symbol in the `path` field indicates that all available topics of that specific
subscription (service) should be recorded.

The `every_n` field indicates the ratio of recording frequency.
For example, if the publishing rate of `oak/0/imu` is 50 ms, an every_n of "2" will yield
in data being recording every 100 ms (2 * 50 ms).
:::

## API

Users can interact with the Recorder Service using the following commands:

- `recorder/start`: Initiates data recording.
A valid "Recording profile" must be provided as an argument.
- `recorder/stop`: Halts the data recording process.

## Data Storage

All recorded data is saved as binary files on the disk at /mnt/data.
The naming convention for these files captures the precise timestamp (to the microsecond)
at the recording's start, the robot's name, and the file number in the sequence:

```php
<yyyy>_<mm>_<dd>_<hh>_<mn>_<ss>_<msmsms>_<robot_name>.0000.bin
```

For example:

```php
2024_06_01_12_00_00_134845_element-vegetable.0000.bin
```

## How to Use

Data can be recorded through the AppBar, the Camera App, or using the `EventsClient` class
as in the **Events Recorder example**.

- To record data through the UI on the Brain display, see the
[Launcher Guide - Status Bar](/docs/apps/launcher/#status-bar).

- To record data through the Camera App on the Brain display, see the
[Camera App Guider](/docs/apps/camera_app/).

- To record data using the Recorder Service API from your own application, see the
[Events Recorder example](/docs/examples/events_recorder/).
