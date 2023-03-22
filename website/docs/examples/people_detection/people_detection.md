---
id: people-detection
title: People Detection
---


### [Link to `people_detection/main.py`](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/people_detection/main.py)

This example shows how to use the `farm-ng-amiga` library to detect people in a video stream.

It also shows how to implement a service and client via grpc.

The requirements to run this example are to have a [**farm-ng brain**](/docs/brain/) running Oak cameras and that your PC is on the same local network as the brain.

For testing you can use your webcam as a replacement, which we will go over later in this tutorial.

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Setup
:::tip

It is recommended to also install these dependencies and run the example in the brain ADK virtual environment.

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
pip3 install -r requirements.txt
```
### 3. Download the model data
In this example we use MobileNet SSD from tensorflow to be implemented in opencv.

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
### 4. Execute the Python script
Open one terminal or in that same terminal run the service:

```bash
python service.py --port 50090 --models-dir models/
# INFO:__main__:Loaded model: /home/edgar/software/farm-ng-amiga/py/examples/people_detection/models
# INFO:__main__:Starting server on port 50090
# INFO:__main__:Server started
```
In another terminal, run the a pipeline using the client:
```bash
python main.py --port-camera 50051 --port-detector 50090
```
And you should see a window with the video stream and the detected people.

### 5. Code overview

```bash
python3 main.py --help

# usage: amiga-camera-app [-h] --port PORT [--address ADDRESS] [--stream-every-n STREAM_EVERY_N]

# optional arguments:
#   -h, --help            show this help message and exit
#   --port PORT           The camera port.
#   --address ADDRESS     The camera address
#   --stream-every-n STREAM_EVERY_N
#                         Streaming frequency
```
Usage example:

```bash

Basic structure to consume from the camera client in an async fashion.

```python
enter main.py code here
```
:::tip
We highgly recommend to have some basic knowledge about [**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
