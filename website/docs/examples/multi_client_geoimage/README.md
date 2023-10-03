---
id: multi-client-geoimage
title: Multi Client GeoImage
---

### [Link to `multi_client_geoimage/main.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/multi_client_geoimage/main.py)

This example shows how to leverage a multi client application to create a geoimage
from the `oak` and `gps` services. We show how to implement a simple technique to
synchronize the images and the gps data.

You can either run this example directly on a brain by `ssh`'ing in, or use your local PC.
To successfully run this example, ensure that a [**farm-ng brain**](/docs/brain/) running
Oak cameras and GPS is active. Your local PC should be either connected to the same local
 network as the brain or linked to it through tailscale.

:::tip

We recommend to read first the
[**`Multi Client Subscriber`**](/docs/examples/multi_client_subscriber/README) tutorial.

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/multi_client_geoimage
```

```bash
pip3 install -r requirements.txt
```

### 3. Create a client wrapper

We first create a `GeoTaggedImageSubscriber` class that will encapsulate
the needed clients and the subscriptions. In order to showcase the synchronization
technique, we will also create a queue to store the images since they come
in faster than we can process them.

```python
class GeoTaggedImageSubscriber:
    """Example of subscribing to events from multiple clients."""

    def __init__(self, service_config: EventServiceConfigList) -> None:
        """Initialize the multi-client subscriber.

        Args:
            service_config: The service config.
        """
        self.service_config = service_config
        self.clients: dict[str, EventClient] = {}

        # populate the clients
        config: EventServiceConfig
        for config in self.service_config.configs:
            if not config.port:
                self.subscriptions = config.subscriptions
                continue
            self.clients[config.name] = EventClient(config)

        # create a queue to store the images since they come in faster than we can process them
        self.image_queue: asyncio.Queue = asyncio.Queue()
```

This class will also have a method called `_subscribe` that will allow us to
subscribe to the particular service. In the first place, we show how to filter the message type and
if the message is of type `farm_ng.oak.proto.OakFrame` we store it in the queue.
If the message is of type `farm_ng.gps.proto.GpsFrame` we try to find the closest image in the queue.

In this example, we use the `get_stamp_by_semantics_and_clock_type` function to get
the timestamp of the event. This function is used to get the timestamp of the event
based on the semantics and the clock type. The semantics is the type of event and
the clock type is the type of clock used to timestamp the event.

The threshold used to synchronize the images and the gps data is defined by
 the `stamp_diff` variable. This threshold depends on the precision of your application.

For educational purposes, we left a lot of `print` statements in the code to
visualize the flow of the program. We recommend to remove them later in your application.

```python
async def _subscribe(self, subscription: SubscribeRequest) -> None:
  # the client name is the last part of the query
  client_name: str = subscription.uri.query.split("=")[-1]
  client: EventClient = self.clients[client_name]
  # subscribe to the event
  async for event, message in client.subscribe(subscription, decode=True):
      print(f"Received event from {client_name}{event.uri.path}")
      if isinstance(message, oak_pb2.OakFrame):
          await self.image_queue.put((event, message))
      elif isinstance(message, gps_pb2.GpsFrame):
          stamp_gps = get_stamp_by_semantics_and_clock_type(
              event, semantics="service/send", clock_type="monotonic"
          )
          if stamp_gps is None:
              continue

          geo_image = None

          while self.image_queue.qsize() > 0:
              event_image, image = await self.image_queue.get()
              stamp_image = get_stamp_by_semantics_and_clock_type(
                  event_image, semantics="service/send", clock_type="monotonic"
              )
              if stamp_image is None:
                  continue
              stamp_diff = abs(stamp_gps - stamp_image)

              # NOTE: define this threshold depending on the precision of your application
              if stamp_diff > 0.05:
                  print(f"Skipping image because stamp_diff is too large: {stamp_diff}")
                  continue
              else:
                  print(f"Synced image and gps data with stamp_diff: {stamp_diff}")
                  geo_image = ((event_image, image), (event, message))
                  break

          if geo_image is None:
              print("Could not sync image and gps data")
              continue
```

In addition, we provide a `config.json` file example that contains the configuration of the
service. Notice that we subscribe to the `oak0` and `gps` services,
in particular to the `/left` and `/pvt` paths respectively.

:::tip
If you want to better understand the different GPS message types,
make sure to check this [link](/docs/examples/file_reader_gps/).
:::

```json
{
  "configs": [
    {
      "name": "gps",
      "port": 3001,
      "host": "localhost"
    },
    {
      "name": "oak0",
      "port": 50010,
      "host": "localhost"
    },
    {
      "name": "multi_subscriber",
      "subscriptions": [
        {
          "uri": {
            "path": "/rgb",
            "query": "service_name=oak0"
          },
          "every_n": 2
        },
        {
          "uri": {
            "path": "/pvt",
            "query": "service_name=gps"
          },
          "every_n": 1
        }
      ]
    }
  ]
}
```

## 4. Run the client

In a terminal, run the client:

```bash
python main.py --config config.json
```

you should see the following output:

```bash
Received event from gps/pvt
Could not sync image and gps data
Received event from oak0/right
Received event from oak0/right
Received event from oak0/right
Received event from oak0/right
Received event from gps/pvt
Skipping image because stamp_diff is too large: 0.3942121310028597
Skipping image because stamp_diff is too large: 0.2926876120036468
Skipping image because stamp_diff is too large: 0.1811352020013146
Synced image and gps data with stamp_diff: 0.07548795500042615
Received event from oak0/right
Received event from oak0/right
Received event from oak0/right
Received event from oak0/right
Received event from oak0/right
Received event from gps/pvt
Skipping image because stamp_diff is too large: 0.3935612499990384
Skipping image because stamp_diff is too large: 0.3073112889978802
Skipping image because stamp_diff is too large: 0.20796539900038624
Skipping image because stamp_diff is too large: 0.10631262399692787
Synced image and gps data with stamp_diff: 0.00445908099936787
```

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
