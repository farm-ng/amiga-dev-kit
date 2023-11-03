---
id: monitor-app
title: Monitor App
---

## Building an App: Understanding the Basics

Every modern app typically consists of two main parts: the backend and the frontend.
Let's dive into what each of these components does and how they interact with each other.

Backend:

The backend is like the brain of your app. It processes data, makes calculations,
 communicates with databases, and performs all the logical operations.
  When you hear terms like "server," "API," or "database," they're usually related to the backend.

In our example, we're using FastAPI to build our backend. FastAPI is a modern, high-performance
web framework for building APIs. Coupled with the farm-ng brain services, our backend will
fetch and serve data efficiently and securely to the frontend.

Key Points:

- Handles data processing, storage, and retrieval.
- Communicates with other services and databases.
- Secures data and ensures only authorized users can access it.

Frontend:

The frontend is the part of the app users see and interact with. Think of it as the face of your app.
 It includes everything that you can touch, click, or interact with:
  buttons, images, text inputs, animations, and more.

For our frontend, we're using React. React is a popular JavaScript library for building
 user interfaces. It allows developers to create responsive and interactive UI components easily.

Key Points:

- Displays data fetched from the backend.
- Interacts with users, capturing their inputs and preferences.
- Updates in real-time, ensuring users always see the latest data.

### How They Work Together

- A user interacts with the frontend (e.g., clicks a button to fetch information).
- The frontend sends a request to the backend, asking for specific data.
- The backend processes the request, fetches the data (from databases, other services,
 or the farm-ng brain services in our case).
- Once the data is retrieved, the backend sends it back to the frontend.
- The frontend then displays this data to the user in a readable and interactive manner.

### [Link to `monitor_app/`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/monitor_app/)

In this example we will show how to create a simple web application to stream and monitor
the data from the [**farm-ng brain**](/docs/brain/) services.

The tutorial is divided in two parts:

- [**Backend**](#backend): we will create a backend using [**FastAPI**](https://fastapi.tiangolo.com/)
    to serve the data from the [**farm-ng brain**](/docs/brain/) services to a frontend.
- [**Frontend**](#frontend): we will create a frontend app using [**React**](https://reactjs.org/).

## Backend

To create the backend we will use [**FastAPI**](https://fastapi.tiangolo.com/)
to serve the data from the [**farm-ng brain**](/docs/brain/) services leveraging
WebSockets to stream the data to the frontend.

In particular, in this part we will show how to create a couple of endpoints to discover the different
services running in the brain and to subscribe to the events of a particular service
and stream the data to the frontend using WebSockets.

:::tip

We strongly recommend go through the FastAPI tutorials to get familiar with the framework.
You can start here [**FastAPI Tutorial**](https://fastapi.tiangolo.com/tutorial/).

:::

### [Link to `monitor_app/main.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/monitor_app/main.py)

### Topics discoverability

The first thing we need to do is to be able to discover the different topics, for this we will
create the following endpoint `/list_uris` that will return a list of the available topics.

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

### Subscribing to the events

The next end point we want to create is the one to subscribe to the events of a particular service.
For this, we will create the following endpoint `/subscribe/{service_name}/{uri_path}` that will
take the `service_name` and the `uri_path` as parameters and with an async generator we will
stream the data to the frontend using WebSockets.

```python
@app.websocket("/subscribe/{service_name}/{uri_path}")
async def subscribe(websocket: WebSocket, service_name: str, uri_path: str, every_n: int = 1):

    client: EventClient = clients[service_name]

    await websocket.accept()

    async for event, message in client.subscribe(
        request=SubscribeRequest(uri=Uri(path=f"/{uri_path}"), every_n=every_n), decode=True
    ):
        await websocket.send_json(MessageToJson(message))

    await websocket.close()
```

::: note

In this example we use the `every_n` parameter to reduce the number of messages sent to the frontend.
We also send the message as a json string, but we could also send the message as a binary string
and decode the protobuf message in the frontend.

:::

## Frontend

In this part we will create a simple frontend using [**React**](https://reactjs.org/)
with [**TypeScript**](https://www.typescriptlang.org/) and [**Vite**](https://vitejs.dev/) as a bundler.
The code for the frontend is located in the `monitor_app/ts` directory.

The structure of the frontend is the following:

```bash
├── src
│   ├── main.tsx
│   └── components/
│       ├── App.tsx
│       └── TopicMonitor.tsx
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.js
```

### Components

For simplicity we will explain only the `TopicMonitor` component, since the other components are
just boilerplate code.

::: tip

For this example we recommend to get familiar with React Hooks, in particular `useEffect` and `useState`.
You can find more information here [**React Hooks**](https://reactjs.org/docs/hooks-intro.html).

:::

We designed the `TopicMonitor` component to be as simple as possible to have a selector to choose
the service and the uri to subscribe to and we will use a third party library called `react-json-view-lite`
to render the received data.

First we declare the shared variables and their associated hooks to be used across the component.

```typescript
function TopicMonitor() {
    const [uris, setUris] = useState<string[]>([]);
    const [selectedUri, setSelectedUri] = useState<string>('');
    const [details, setDetails] = useState<any>(null);
    ...
}
```

Next, we implement the function to fetch the available topics from the backend.
This is done using the `fetch` function and the `useEffect` hook against the `/list_uris` endpoint.
The result is stored in the `uris` variable:

```typescript
useEffect(() => {
    const fetchData = async () => {
        try {
            // Replace with your backend URL
            const response = await fetch(
                `${window.location.protocol}//${window.location.hostname}:8002/list_uris`
            );
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const rawData = await response.json();
            setUris(Object.keys(rawData));
            // Select the first URI by default
            setSelectedUri(Object.keys(rawData)[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
  }, []);
```

The next step is to implement the event function to subscribe to the events using the
`WebSocket` API and the `useEffect` hook that will be triggered every time we select
 a new uri. The result is stored in the `details` variable.

```typescript
useEffect(() => {
  if (!selectedUri) return;

  const detailSocket = new WebSocket(
      `ws://${window.location.hostname}:8002/subscribe/${selectedUri}`
  );

  detailSocket.onopen = (event) => {
      console.log('Detail WebSocket connection opened:', event);
  };

  detailSocket.onmessage = (event) => {
      const receivedDetails = JSON.parse(event.data);
      setDetails(receivedDetails);
  }

  detailSocket.onclose = (event) => {
      console.log('Detail WebSocket connection closed:', event);
  };

  return () => {
      detailSocket.close();
  };
}, [selectedUri]);
```

We finally put all together in the `TopicMonitor` component as follows:

```typescript
return (
  <div>
      <select value={selectedUri} onChange={(e) => setSelectedUri(e.target.value)}>
          {uris.map((uri, index) =>
              <option key={index} value={uri}>
                  {uri}
              </option>
          )}
      </select>

      <div>
          {selectedUri && (
              <JsonView data={details} shouldExpandNode={allExpanded} style={defaultStyles} />
          )}
      </div>
  </div>
);
```

## Setup

First, we need to install the dependencies of the backend and the frontend.

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Install the backend dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/monitor_app
```

```bash
pip3 install -r requirements.txt
```

### 3. Install the frontend dependencies

<!-- markdownlint-enable MD013 -->
Recommendation: Use [**Node Version Manager**](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-3-installing-node-using-the-node-version-manager)
to install Node.js 18.x.

```bash
cd ts/

# Install dependencies
npm install
```

### 4. Run the backend

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

To debug the backend you could use the following command:

```bash
curl http://localhost:8002/list_uris
```

```json
{
  "gps/health":
    {
      "scheme":"protobuf",
      "authority":"element-vegetable",
      "path":"/health",
      "query":"type=google.protobuf.Struct&pb=google/protobuf/struct.proto&service_name=gps"
    },
  "gps/pvt":
    {
      "scheme":"protobuf",
      "authority":"element-vegetable",
      "path":"/pvt",
      "query":"type=farm_ng.gps.proto.GpsFrame&pb=farm_ng/gps/gps.proto&service_name=gps"
    },
  "gps/relposned":
    {
      "scheme":"protobuf",
      "authority":"element-vegetable",
      "path":"/relposned",
      "query":"type=farm_ng.gps.proto.RelativePositionFrame&pb=farm_ng/gps/gps.proto&service_name=gps"
    }
}
```

Optionally, you can subscribe to the events of a particular service, you can use the following url:

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
    "clockName": "element-vegetable/monotonic",
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
```

### 5. Run the frontend

In a separated terminal in your robot (or in your computer), run the frontend:

```bash
cd ts/

# Run the frontend
npm run dev
```

you should see the following output:

```bash

  VITE v4.4.10  ready in 1381 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Now you can open the browser and go to `http://localhost:5173/` and you should see the following:

![Screenshot from 2023-10-04 15-40-28](https://github.com/farm-ng/amiga-dev-kit/assets/5157099/ff25d6c5-aa51-49a4-b8e0-398e12d5f00a)

::: tip

Switch between the different topics to see the data from the different services.

:::
