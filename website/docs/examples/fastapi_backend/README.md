---
id: fastapi-backend
title: FastAPI Backend
---

### [Link to `fastapi_backend/main.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/fastapi_backend/main.py)

This example shows how to create a backend using [**FastAPI**](https://fastapi.tiangolo.com/)
to serve the data from the [**farm-ng brain**](/docs/brain/) services to a frontend.

We will show in particular how to create a couple of endpoints to discover the different
services running in the brain and to subscribe to the events of a particular service
and stream the data to the frontend that will help later to build web applications.

:::tip

We strongly recommend go through the FastAPI tutorials to get familiar with the framework.
You can start here [**FastAPI Tutorial**](https://fastapi.tiangolo.com/tutorial/).

:::

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/fastapi_backend
```

```bash
pip3 install -r requirements.txt
```

### 3. Register the clients

In the first place, we need to register the clients in the `config.json` file.
We will do that by creating a dictionary with the different clients order by
the service name.

```python
# to store the events clients
clients: dict[str, EventClient] = {}

if __name__ == "__main__":
    import uvicorn

    # NOTE: alternatively, we can use uvicorn to run the server
    # uvicorn main:app --reload --port 8002
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", type=Path, required=True, help="config file")
    parser.add_argument("--port", type=int, default=8002, help="port to run the server")
    args = parser.parse_args()

    # config list with all the configs
    config_list: EventServiceConfigList = proto_from_json_file(args.config, EventServiceConfigList())

    for config in config_list.configs:
        # create the event client
        client = EventClient(config=config)

        # add the client to the clients dict
        clients[config.name] = client

    # TODO (tony-ologic): review later so that we can access the website over tailscale
    # without port forwarding.
    uvicorn.run(app, host="0.0.0.0", port=args.port)  # noqa: S104
```

### 4. Create a `list_uris` end point

The first endpoint will be used to discover the different services running in the brain.
For this, we will iterate over the different clients and retrieve the `uris` of the
available for that service with the `client.list_uris()` method.

Finally, we will return the list of accumulated `uris` in the as a `JSONResponse`.

```python
@app.get("/list_uris")
async def list_uris() -> JSONResponse:

    all_uris = {}

    for service_name, client in clients.items():
        # get the list of uris from the event service
        uris: list[Uri] = []
        try:
            # NOTE: some services may not be available, so we need to handle the timeout
            uris = await asyncio.wait_for(client.list_uris(), timeout=0.1)
        except asyncio.TimeoutError:
            continue

        # convert the uris to a dict, where the key is the uri full path
        # and the value is the uri proto as a json string
        for uri in uris:
            all_uris[f"{service_name}{uri.path}"] = json.loads(MessageToJson(uri))

    return JSONResponse(content=all_uris, status_code=200)
```

### 4. Create a `subscribe` end point

The next example we want to show is how to subscribe to the events of a particular service
and stream the data to the frontend. To do that, we will create a `subscribe` endpoint
that will take the `service_name` and the `uri_path` as parameters and with an async
generator we will stream the data to the frontend.

```python
@app.get("/subscribe/{service_name}/{uri_path}")
async def subscribe(service_name: str, uri_path: str, every_n: int = 1):

    if service_name not in clients:
        return JSONResponse(content={"error": f"service {service_name} is not available"}, status_code=404)

    client: EventClient = clients[service_name]

    uris = await client.list_uris()

    if not any(uri.path == f"/{uri_path}" for uri in uris):
        return JSONResponse(content={"error": f"uri {uri_path} is not available"}, status_code=404)

    # subscribe to the uri
    async def generate_data():
        async for event, message in client.subscribe(
            request=SubscribeRequest(uri=Uri(path=f"/{uri_path}"), every_n=every_n), decode=True
        ):
            yield MessageToJson(message)

    return StreamingResponse(generate_data(), media_type="text/event-stream")
```

### 5. Run the server

In a terminal in your robot, run the server:

```bash
python main.py --config config.json
```

you should see the following output:

```bash
INFO:     Started server process [348298]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://0.0.0.0:8002 (Press CTRL+C to quit)
```

In order to visualize the serve you could `curl` or in your browser go to
the following url:

```bash
curl http://localhost:8002/list_uris
```

```json
{
  "gps/health":
    {
      "scheme":"protobuf",
      "authority":"lead-mango",
      "path":"/health",
      "query":"type=google.protobuf.Struct&pb=google/protobuf/struct.proto&service_name=gps"
    },
  "gps/pvt":
    {
      "scheme":"protobuf",
      "authority":"lead-mango",
      "path":"/pvt",
      "query":"type=farm_ng.gps.proto.GpsFrame&pb=farm_ng/gps/gps.proto&service_name=gps"
    },
  "gps/relposned":
    {
      "scheme":"protobuf",
      "authority":"lead-mango",
      "path":"/relposned",
      "query":"type=farm_ng.gps.proto.RelativePositionFrame&pb=farm_ng/gps/gps.proto&service_name=gps"
    }
}
```

To subscribe to the events of a particular service, you can use the following url:

```bash
curl http://localhost:8002/subscribe/gps/pvt
# or with the every_n parameter
curl http://localhost:8002/subscribe/gps/pvt?every_n=5
```

and you should see the following output:

```json
{
  "stamp": {
    "stamp": 64291.767745599,
    "clockName": "lead-mango/monotonic",
    "semantics": "driver/receive"
  },
  "longitude": -121.7905902,
  "latitude": 36.9292526,
  "altitude": 40.258,
  "headingMotion": 4.182266164042437e-06,
  "headingAccuracy": 3.1415926e-05,
  "groundSpeed": 0.016,
  "speedAccuracy": 0.083,
  "velNorth": -0.008,
  "velEast": 0.014,
  "velDown": -0.002,
  "status": {
    "timeFullyResolved": true,
    "gnssFixOk": true,
    "diffSoln": true
  },
  "gpsTime": {
    "stamp": 1696346260.0,
    "clockName": "gps/POSIX",
    "semantics": "device/sample"
  },
  "horizontalAccuracy": 0.014,
  "verticalAccuracy": 0.01,
  "positionMode": 3,
  "pDop": 0.0217,
  "height": 9.796
}

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
