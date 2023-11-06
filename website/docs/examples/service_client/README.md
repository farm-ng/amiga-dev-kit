---
id: service-client
title: Service Client
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
:::

The [**Service Client**](https://github.com/farm-ng/farm-ng-amiga/tree/main-v2/py/examples/service_client)
example is the hello world of the farm-ng-core Event Service framework.

The Event Service is a publish-subscribe service that allows to stream
data from the farm-ng-core services to its respective clients. The central piece
of the Event Service is the `EventServiceGrpc` service that is the main
class encapsulating the gRPC server.

In the following example, we will explain how to define your own service
and how to use the `EventClient` to subscribe to the service.
You will need a file to create the [service](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/service_client/service.py)
and another one to create the [client](https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/service_client/client.py)

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

### Define your protobuf messages

The farm-ng-core Event Service uses protobuf messages and leverages
gRPC to communicate between client and server. The first step is to
define your own protobuf messages.

For this example, we provide the `two_ints.proto`:

```protobuf
syntax = "proto3";

// The request message containing the two integers.
message AddTwoIntsRequest {
    int32 a = 1;
    int32 b = 2;
}

// The response message containing the sum.
message AddTwoIntsResponse {
    int32 sum = 1;
}
```

We provide the generated Python code in the `two_ints_pb2.py` file and
its corresponding `two_ints_pb2.pyi` file for type hinting. Optionally,
you can regenerate the Python code yourself using the `genprotos.py`.

### Create your own service

In order to create your own service, we will create an auxiliary class
to encapsulate the `EventServiceGrpc` class. This auxiliary class will
be called `AddTwoIntsServer` and will easily allow us to define the
service.

The class `AddTwoIntsServer` will have a method called `request_reply_handler`
that will be called every time a request is received. The method
`request_reply_handler` will receive two arguments: the `Event` and the
request message. The `Event` contains the metadata of the request and
the request message contains the actual request message.

```python
class AddTwoIntServer:
    """A simple service that implements the AddTwoInts service."""

    def __init__(self, event_service: EventServiceGrpc) -> None:
        """Initialize the service.

        Args:
            event_service: The event service to use for communication.
        """
        self._event_service = event_service
        self._event_service.add_request_reply_handler(self.request_reply_handler)

    @property
    def logger(self) -> logging.Logger:
        """Return the logger for this service."""
        return self._event_service.logger

    async def request_reply_handler(self, event: Event, message: two_ints_pb2.AddTwoIntsRequest) -> Message:
        """The callback for handling request/reply messages."""
        if event.uri.path == "/sum":
            self.logger.info(f"Requested to sum {message.a} + {message.b}")

            return two_ints_pb2.AddTwoIntsResponse(sum=message.a + message.b)

        return Empty()
```

To wrap up, we need to create a `service.py` program that will instantiate
the `EventServiceGrpc` and the `AddTwoIntServer` and run the service leveraging
the `serve` method with the `asyncio` event loop.

```python
if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="farm-ng-service")
    parser.add_argument("--service-config", type=Path, required=True, help="The service config.")
    args = parser.parse_args()

    # load the service config
    service_config: EventServiceConfig = proto_from_json_file(args.service_config, EventServiceConfig())

    # create the grpc server
    event_service: EventServiceGrpc = EventServiceGrpc(grpc.aio.server(), service_config)

    loop = asyncio.get_event_loop()

    try:
        # wrap and run the service
        loop.run_until_complete(AddTwoIntServer(event_service).serve())
    except KeyboardInterrupt:
        print("Exiting...")
    finally:
        loop.close()
```

Additionally, we provide a `service_config.json` file that contains the
configuration of the service. The `service_config.json` file contains
the following fields:

```json
{
    "name": "two_int",
    "port": 5001,
    "host": "localhost",
    "log_level": "DEBUG"
}
```

### Create the client

The client is a simple Python script that will connect to the service
and subscribe to the service. For the client, we will leverage the
`EventClient` class that will allow us to interact with the service.

In this example, we will create a `client.py` program that will instantiate
the `EventServiceConfig` and the `EventClient`. The `EventClient` will
request the service to sum two integers implementing the `request_reply`
method. The `request_reply` method is a coroutine that triggers a the
`request_reply_handler` method in the service and returns a `Future`
object. The `Future` object is used to retrieve the result of the
request.

```python
async def main() -> None:
    parser = argparse.ArgumentParser(prog="farm-ng-client")
    parser.add_argument("--service-config", type=Path, required=True, help="The service config.")
    parser.add_argument("--a", type=int, required=True, help="The first integer.")
    parser.add_argument("--b", type=int, required=True, help="The second integer.")
    args = parser.parse_args()

    # create a client to the camera service
    config: EventServiceConfig = proto_from_json_file(args.service_config, EventServiceConfig())

    # request the sum of two integers
    result = await EventClient(config).request_reply("/sum", AddTwoIntsRequest(a=args.a, b=args.b), decode=True)

    print(f"Result of {args.a} + {args.b} = {result.sum}")


if __name__ == "__main__":
    asyncio.run(main())
```

## Run the example

### 1. Run the service

In a first terminal, run the service:

```bash
python service.py --service-config config.json
```

you should see the following output:

```bash
Starting server on port 5001
Server started
Sending /health: 0 to 0 clients
Sending /health: 1 to 0 clients
Sending /health: 2 to 0 clients
Sending /health: 3 to 0 clients
...
...
```

### 2. Run the client

In a second terminal, run the client:

```bash
python client.py --service-config config.json --a 1 --b 2
```

you should see the following output:

```bash
Result of 1 + 2 = 3
```
