---
id: service-propagation
title: Service Propagation
---

In this example, we will show how create a subsystem of services that can be
composed together to create a more complex system and leverage bidirectional
communication between services to propagate information.

In particular, we will create an `Agent` service that will have several
tasks running concurrently sampling data from different tasks. The `Agent`
service will publish the data from the tasks at fixed rate to a `/sample` path
that will be subscribed by a `Supervisor` service.

At the same time, the `Agent` service will listen to a `/update_residual` path
to receive the residual value from another the `Supervisor` service.

```python
class AgentServer:
    def __init__(self, event_service: EventServiceGrpc) -> None:
        """Initialize the service.
        Args:
            event_service: The event service to use for communication.
        """
        self._event_service = event_service
        self._event_service.add_request_reply_handler(self.request_reply_handler)

        args: dict[str, float] = {}
        for arg in self._event_service.config.args:
            key, value = arg.split("=")
            args[key] = value

        # the rate in hertz to send commands
        self._rate = float(args["rate"])
        self._num_tasks = int(args["num_tasks"])

        self._remainder: int = 1e6

    async def request_reply_handler(self, event: Event, message) -> None:
        """The callback for handling request/reply messages."""
        if event.uri.path == "/update_residual":
            self._remainder = message.value
            self._event_service.logger.info(f"Remainder: {self._remainder}")

        return Empty()

    async def run_task(self, task_id: int) -> None:
        """Run the main task."""
        while True:
            if self._remainder <= 0:
                await asyncio.sleep(0.01)
                continue

            message = Struct()
            message["sample"] = random.random()
            message["task_id"] = task_id

            await self._event_service.publish("/sample", message)
            await asyncio.sleep(1.0 / self._rate)
            print(f"Published sample {message['sample']} from task {task_id}")

    async def serve(self) -> None:
        """Run the service."""
        tasks: list[asyncio.Task] = [asyncio.create_task(self.run_task(i)) for i in range(self._num_tasks)]
        await asyncio.gather(self._event_service.serve(), *tasks)
```

In addition, we will create a `SupervisorServer` service that will be subscribed to the `/sample`
path of the `Agent` service. The `SupervisorServer` will listen to the samples and send a request
update to the `StorageServer` service when the sample is above a certain confidence threshold.

```python
class SupervisorServer:
    def __init__(self, event_service: EventServiceGrpc, config_list: EventServiceConfigList) -> None:
        """Initialize the service.
        Args:
            event_service: The event service to use for communication.
        """
        self._event_service = event_service

        self._clients: dict[str, EventClient] = {
            config.name: EventClient(config)
            for config in config_list.configs
            if config.name != event_service.config.name
        }

        args: dict[str, float] = {}
        for arg in self._event_service.config.args:
            key, value = arg.split("=")
            args[key] = value

        # the rate in hertz to send commands
        self._confidence = float(args["confidence"])

    async def subscribe(self, subscripton) -> None:
        """Run the main task."""
        # create the event client
        service_name = subscripton.uri.query.split("=")[-1]
        client = self._clients[service_name]

        async for event, message in client.subscribe(subscripton, decode=True):
            if message["sample"] > self._confidence:
                residual = await self._clients["storage"].request_reply("/update_storage", Empty(), decode=True)
                self._event_service.logger.info(f"Residual: {residual}")
                await client.request_reply("/update_residual", residual)

    async def serve(self) -> None:
        """Run the service."""
        tasks: list[asyncio.Task] = []
        for subscription in self._event_service.config.subscriptions:
            tasks.append(asyncio.create_task(self.subscribe(subscription)))
        await asyncio.gather(self._event_service.serve(), *tasks)
```

The last service we will create is a `StorageServer` service that will be listening
to the `/update_storage` path. The `StorageServer` will keep track of the storage
capacity and will remove from storage at fixed rate.

```python
class StorageServer:
    def __init__(self, event_service: EventServiceGrpc) -> None:
        """Initialize the service.
        Args:
            event_service: The event service to use for communication.
        """
        self._event_service = event_service
        self._event_service.add_request_reply_handler(self.request_reply_handler)

        self._storage: int = 0

        args: dict[str, float] = {}
        for arg in self._event_service.config.args:
            key, value = arg.split("=")
            args[key] = value

        # the maximum storage capacity
        self._max_storage = int(args["max_storage"])

        # the batch size to remove from storage
        self._batch_size = int(args["batch_size"])

    async def request_reply_handler(self, event: Event, message: Empty) -> None:
        """The callback for handling request/reply messages."""
        if event.uri.path == "/update_storage":
            self._storage += 1
            residual: int = self._max_storage - self._storage
            self._event_service.logger.info(
                f"Storage: {self._storage}/{self._max_storage} ({residual} remaining)")
            return Int32Value(value=residual)

        return Empty()

    async def remove_from_storage(self) -> None:
        """Remove from storage."""
        while True:

            if self._storage < self._batch_size:
                await asyncio.sleep(0.05)
                continue

            self._storage -= self._batch_size

            self._event_service.logger.info(f"Removed from storage: {self._batch_size}/{self._max_storage}")

            await asyncio.sleep(0.1)

    async def serve(self) -> None:
        tasks: list[asyncio.Task] = [
            asyncio.create_task(self._event_service.serve()),
            asyncio.create_task(self.remove_from_storage()),
        ]
        await asyncio.gather(*tasks)
```

### Requirements

This example only requires the farm-ng-core package.

```bash
pip3 install farm-ng-core
```

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html),
[**`gRPC`**](https://grpc.io/docs/what-is-grpc/introduction/) and
[**`protobuf`**](https://developers.google.com/protocol-buffers/docs/pythontutorial).
:::

### Service configuration

The service configuration is defined in the `service_config.json` file which describes how each service
 instance is connected to each other and how they are configured. As an example, the `agent-1` service
is configured as follows:

```json
{
  "name": "agent-1",
  "args": [
    "rate=1.0",
    "num_tasks=3"
  ],
  "subscriptions": [
    {
      "uri": "event://supervisor-1/sample?service=agent-1"
    }
  ]
}
```

## Run the example

### 1. Run the storage service

```bash
python storage.py --service-config service_config.json --service-name storage
```

### 2. Run the supervisor services

```bash
python supervisor.py --service-config service_config.json --service-name supervisor-1
python supervisor.py --service-config service_config.json --service-name supervisor-2
```

### 3. Run the agent services

```bash
python agent.py --service-config service_config.json --service-name agent-1
python agent.py --service-config service_config.json --service-name agent-2
python agent.py --service-config service_config.json --service-name agent-3
```

### Expected output

In the `storage` service terminal, you should see the capacity of the storage
which is decreasing as the `agent` services are publishing samples. As soon as
the storage capacity is full, the `agent` services will stop publishing samples
until the `supervisor` services request the `agent` services to update the
residual value.

```bash
Storage: 37/500 (463 remaining)
Storage: 38/500 (462 remaining)
Storage: 39/500 (461 remaining)
Storage: 40/500 (460 remaining)
Storage: 41/500 (459 remaining)
Storage: 42/500 (458 remaining)
Storage: 43/500 (457 remaining)
Storage: 44/500 (456 remaining)
Storage: 45/500 (455 remaining)
Storage: 46/500 (454 remaining)
Storage: 47/500 (453 remaining)
Storage: 48/500 (452 remaining)
```

In the `supervisor` service terminal, you should see the residual value
decreasing as the `agent` services are publishing samples. As soon as the
residual value is zero, the `supervisor` services will request the `agent`
services to update the residual value.

```bash
INFO:supervisor-1:Residual: value: 455

Residual: value: 454

INFO:supervisor-1:Residual: value: 454

Residual: value: 453

INFO:supervisor-1:Residual: value: 453

Residual: value: 452
```

Finally, in the `agent` service terminal, you should see the samples being
published at fixed rate. As soon as the residual value is zero, the `agent`
services will stop publishing samples until the `supervisor` services request
the `agent` services to update the residual value.

```bash
Published sample 0.7213814924044664 from task 1
Published sample 0.19269278385883515 from task 2
Published sample 0.41566478402029516 from task 3
Published sample 0.6616156115367178 from task 4
Published sample 0.699833473381781 from task 5
Published sample 0.1892017291616711 from task 6
Published sample 0.6031618279156414 from task 7
Published sample 0.6306753264890216 from task 8
Published sample 0.9169593227439662 from task 9
```
