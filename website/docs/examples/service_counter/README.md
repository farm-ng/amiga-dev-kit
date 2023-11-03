---
id: service-counter
title: Service Counter
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
:::

The [**Service Counter**](https://github.com/farm-ng/farm-ng-amiga/tree/main-v2/py/examples/service_counter)
is a subsequent example of the [**`service_client`**](/docs/examples/service_client/) example
where we will show how to use the `publish` method from `EventServiceGrpc` to publish messages
to later use the `EventClient` to interact with the service.

In particular, we will create a service that will have a counter running in a separate
task and will publish the counter value at fixed rate. We will show how to use the client
to subscribe to the service and will print the counter value every time it receives a message.
In addition, the client will be able to request the service to reset the counter to zero.

### Requirements

This example only requires the farm-ng-core package.

```bash
pip3 install farm-ng-core

```

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html),
[**`gRPC`**](https://grpc.io/docs/what-is-grpc/introduction/),
and [**`protobuf`**](https://developers.google.com/protocol-buffers/docs/pythontutorial).
:::

### Create the service

We first create a [service](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/service_counter/client.py)
that will publish the counter value at a certain
rate. For this, we will create a [`counter.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/service_counter/counter.py)
program that will
instantiate the `EventServiceGrpc` and will run the service leveraging
the `serve` method with the `asyncio` event loop.

In the same program, we will create a `CounterService` class that will
implement the logic of the service, including the concurrent task that
will run the counter. The `CounterService` class will also have a method
to handle the `requests` from the client. The `requests` method is a
coroutine that triggers the `request_handler` method in the service,
in that case to reset the counter to zero.

```python
class CounterServer:
    def __init__(self, event_service: EventServiceGrpc) -> None:
        """Initialize the service.
        Args:
            event_service: The event service to use for communication.
        """
        self._event_service = event_service
        self._event_service.add_request_reply_handler(self.request_reply_handler)

        self._counter: int = 0
        self._rate: float = 1.0

    async def request_reply_handler(self, event: Event, message: Message) -> None:
        """The callback for handling request/reply messages."""
        if event.uri.path == "/reset_counter":
            self._counter = 0

        return Empty()

    async def run(self) -> None:
        """Run the main task."""
        while True:
            await self._event_service.publish("/counter", Int32Value(value=self._counter))
            self._counter += 1
            await asyncio.sleep(1.0 / self._rate)

    async def serve(self) -> None:
        await asyncio.gather(self._event_service.serve(), self.run())
```

### Create the client

For the client, we will create a `client.py` program that will implement a thin wrapper
class `CounterClient` around the `EventClient` class. The `CounterClient` will
have a method to `subscribe` to the events stream coming from the `/counter` path.

```python
class CounterClient:
    def __init__(self, service_config: EventServiceConfig) -> None:
        """Initialize the client.
        Args:
            service_config: The service config.
        """
        self._event_client = EventClient(service_config)

    async def subscribe(self) -> None:
        """Run the main task."""
        async for event, message in self._event_client.subscribe(
            request=SubscribeRequest(uri=Uri(path="/counter"), every_n=1), decode=True
        ):
            print(f"Received message: {message}")
```

In the same program, we will create a `main` function that will instantiate the
`EventServiceConfig` and the `CounterClient`. The `main` function will have a
couple high level commands to `subscribe` to the `/counter` path and to `request`
the service to reset the counter to zero.

```python
async def command_subscribe(client: CounterClient) -> None:
    """Subscribe to the counter service."""
    await client.subscribe()


async def command_reset(client: CounterClient) -> None:
    """Reset the counter."""
    await client._event_client.request_reply("/reset_counter", Empty())
```

## Run the example

### 1. Run the service

In a first terminal, run the service:

```bash
python counter.py --service-config service_config.json
```

you should see the following output:

```bash
Starting server on port 5001
Server started
```

### 2. Subscribe to the service

In a second terminal, run the client:

```bash
python client.py --service-config service_config.json subscribe
```

you should see the following output and the counter value increasing:

```bash
Received message: value: 3

Received message: value: 4

Received message: value: 5

Received message: value: 6

...
...
```

### 3. Reset the counter

In a third terminal, run the client:

```bash
python client.py --service-config service_config.json reset
```

you should see the following output:

```bash
Received message:
Received message: value: 1

Received message: value: 2

Received message: value: 3
...
...
```
