---
id: multi-client-subscriber
title: Multi Client Subscriber
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
:::

The [**Multi Client Subscriber**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/multi_client_subscriber/main.py)
example shows how to create a multi client application that can be subscribed concurrently
to different services.

You can either run this example directly on a brain by `ssh`'ing in, or use your local PC.
To successfully run this example, ensure that a [**farm-ng brain**](/docs/brain/) running
the Canbus and Filter services. Your local PC should be either connected to the same local
 network as the brain or linked to it through tailscale.

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/multi_client_subscriber
```

```bash
pip3 install -r requirements.txt
```

### 3. Create a client wrapper

The first step is to create a client wrapper that will allow us to easily interact with
the services. We create a `MultiClientSubscriber` class that will encapsulate a
`EventClient` classes corresponding to each service. The `MultiClientSubscriber` class
will have a method called `subscribe` that will allow us to subscribe to the particular
service given a `SubscribeRequest`. The `SubscribeRequest` contains the URI of the
service to subscribe to.

```python
class MultiClientSubscriber:
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

    async def _subscribe(self, subscription: SubscribeRequest) -> None:
        # the client name is the last part of the query
        client_name: str = subscription.uri.query.split("=")[-1]
        client: EventClient = self.clients[client_name]
        # subscribe to the event
        # NOTE: set decode to True to decode the message
        async for event, message in client.subscribe(subscription, decode=False):
            # decode the message type
            message_type = event.uri.query.split("&")[0].split("=")[-1]
            print(f"Received event from {client_name}{event.uri.path}: {message_type}")

    async def run(self) -> None:
        # start the subscribe routines
        tasks: list[asyncio.Task] = []
        for subscription in self.subscriptions:
            tasks.append(asyncio.create_task(self._subscribe(subscription)))
        # wait for the subscribe routines to finish
        await asyncio.gather(*tasks)
```

In addition, we provide a `config.json` file example that contains the configuration of the
service. The `config.json` file contains the following fields:

```json
{
  "configs": [
    {
      "name": "canbus",
      "port": 6001,
      "host": "localhost"
    },
    {
      "name": "filter",
      "port": 20001,
      "host": "localhost"
    },
    {
      "name": "multi_subscriber",
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
            "query": "service_name=filter"
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
Received event from filter/state: farm_ng.filter.proto.FilterState
Received event from canbus/twist: farm_ng.canbus.proto.Twist2d
Received event from canbus/raw_messages: farm_ng.canbus.proto.RawCanbusMessages
Received event from canbus/motor_states: farm_ng.canbus.proto.MotorStates
Received event from canbus/raw_messages: farm_ng.canbus.proto.RawCanbusMessages
Received event from canbus/motor_states: farm_ng.canbus.proto.MotorStates
Received event from filter/state: farm_ng.filter.proto.FilterState
Received event from filter/state: farm_ng.filter.proto.FilterState
Received event from canbus/raw_messages: farm_ng.canbus.proto.RawCanbusMessages
Received event from filter/state: farm_ng.filter.proto.FilterState
Received event from canbus/health: google.protobuf.Struct
```

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
