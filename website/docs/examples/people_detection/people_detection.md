---
id: people-detection
title: People Detection
---


This example shows how to use the `farm-ng-amiga` library to
detect people in a video stream.

It also shows how to implement a service and client via grpc.

The requirements to run this example are to have a
[**farm-ng brain**](/docs/brain/) running Oak cameras and that
your PC is on the same local network as the brain.

For testing you can use your webcam as a replacement, which we
will go over later in this tutorial.

![PD gif](https://user-images.githubusercontent.com/64480560/229892116-e99de4d2-577a-4c38-876f-4ba03429d52c.gif)

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Setup

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

Create first a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

```bash
#assuming you have the farm-ng-amiga repository.
cd farm-ng-amiga/py/examples/people_detection
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

#### Download the model data

In this example we use MobileNet SSD from tensorflow to be
implemented in opencv.

Download the model weights and architecture:

```bash
mkdir models
```

```bash
wget https://github.com/rdeepc/ExploreOpencvDnn/raw/master/models/frozen_inference_graph.pb -O models/frozen_inference_graph.pb
```

```bash
wget https://github.com/rdeepc/ExploreOpencvDnn/raw/master/models/ssd_mobilenet_v2_coco_2018_03_29.pbtxt -O models/ssd_mobilenet_v2_coco_2018_03_29.pbtxt
```

### 4. Run the service

Open one terminal or in that same terminal run the service:

```bash
python service.py --port 50090 --models-dir models/
# INFO:__main__:Loaded model: /home/edgar/software/farm-ng-amiga/
# py/examples/people_detection/models
# INFO:__main__:Starting server on port 50090
# INFO:__main__:Server started
```

![server](https://user-images.githubusercontent.com/64480560/229893034-7302d479-692a-4907-98e1-87a31b60fc19.png)

:::tip
With this command, you can run this on either your computer or
your Amiga!
:::

### 5. Run the Client

In another terminal, run the a pipeline using the client:

```bash
python main.py --port-camera 50051 --port-detector 50090
```

And you should see a window with the video stream and the
detected people. The server is a process receives the decoded
images then computes an AI model and returns the results. If you
have a service on your machine and the client consume from the
robot, there is the transmission overhead of grpc from the
robot-camera to you laptop (service).

:::tip
You can also run this command from either your computer or your
Amiga.
:::

### 6. Code overview

Here you can review the code and gain a closer look at how this
example is done.

### [Link to `people_detection/main.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/people_detection/main.py)

:::tip
We highgly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
