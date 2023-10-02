---
id: multi-client-geoimage
title: Multi Client GeoImage
---

### [Link to `multi_client_geoimage/main.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/multi_client_geoimage/main.py)

This example shows how to leverage a multi client application to create a geoimage from the `oak` and `gps` services. We show how to implement a simple
technique to synchronize the images and the gps data.

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

We first create a `GeoTaggedImageSubscriber` class that will encapsulate the needed clients and the subscriptions. In order to showcase the synchronization
technique, we will also create a queue to store the images since they come in faster than we can process them.

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

This class will also have a method called `_subscribe` that will allow us to subscribe to the particular service. In the first place, we show how to filter the message type and
if the message is of type `farm_ng.oak.proto.OakFrame` we store it in the queue. If the message is of type `farm_ng.gps.proto.GpsFrame` we try to find the closest image in the queue.

In this example, we use the `get_stamp_by_semantics_and_clock_type` function to get the timestamp of the event. This function is used to get the timestamp of the event
based on the semantics and the clock type. The semantics is the type of event and the clock type is the type of clock used to timestamp the event.

The threshold used to synchronize the images and the gps data is defined by the `stamp_diff` variable. This threshold depends on the precision of your application.

For educational purposes, we left a lot of `print` statements in the code to visualize the flow of the program. We recommend to remove them later in your application.

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

In addtion, we provide a `config.json` file example that contains the configuration of the
service. Notice that the subscribers are against the `oak0` and `gps` services, in particular to the `/rgb` and `/pvt` paths respectively.

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
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from gps/pvt
Skipping image because stamp_diff is too large: 0.4036272089870181
Skipping image because stamp_diff is too large: 0.30224284599535167
Skipping image because stamp_diff is too large: 0.19944817599025555
Skipping image because stamp_diff is too large: 0.09692963500856422
Synced image and gps data with stamp_diff: 0.006475306989159435
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from gps/pvt
Skipping image because stamp_diff is too large: 0.32480611599748954
Skipping image because stamp_diff is too large: 0.22475609098910354
Skipping image because stamp_diff is too large: 0.12418683301075362
Synced image and gps data with stamp_diff: 0.024251561000710353
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from gps/pvt
Skipping image because stamp_diff is too large: 0.23738648000289686
Skipping image because stamp_diff is too large: 0.09838183000101708
Synced image and gps data with stamp_diff: 0.039805378997698426
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from gps/pvt
Skipping image because stamp_diff is too large: 0.3453739270044025
Skipping image because stamp_diff is too large: 0.24114773501059972
Skipping image because stamp_diff is too large: 0.14996879699174315
Skipping image because stamp_diff is too large: 0.05010190900065936
Could not sync image and gps data
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from gps/pvt
Skipping image because stamp_diff is too large: 0.36291974800406024
Skipping image because stamp_diff is too large: 0.2664781129860785
Skipping image because stamp_diff is too large: 0.1661627120047342
Skipping image because stamp_diff is too large: 0.06768680198001675
Could not sync image and gps data
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from oak0/rgb
Received event from gps/pvt
Skipping image because stamp_diff is too large: 0.38380739899002947
Skipping image because stamp_diff is too large: 0.28419670299626887
Skipping image because stamp_diff is too large: 0.1739979569974821
Skipping image because stamp_diff is too large: 0.07935888497740962
```

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
