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
pip install -r requirements.txt
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
# Copyright (c) farm-ng, inc.
#
# Licensed under the Amiga Development Kit License (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://github.com/farm-ng/amiga-dev-kit/blob/main/LICENSE
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
import argparse
import asyncio
from typing import List

import cv2
import numpy as np
from client import PeopleDetectorClient
from farm_ng.oak import oak_pb2
from farm_ng.oak.camera_client import OakCameraClient
from farm_ng.people_detection import people_detection_pb2
from farm_ng.service.service_client import ClientConfig
from limbus.core import Component
from limbus.core import ComponentState
from limbus.core import InputParams
from limbus.core import OutputParams
from limbus.core.pipeline import Pipeline


class AmigaCamera(Component):
    def __init__(self, name: str, config: ClientConfig, stream_every_n: int) -> None:
        super().__init__(name)
        # configure the camera client
        self.client = OakCameraClient(config)

        # create a stream
        self.stream = self.client.stream_frames(every_n=stream_every_n)

    @staticmethod
    def register_outputs(outputs: OutputParams) -> None:
        outputs.declare("image", np.ndarray)

    def _decode_image(self, image_data: bytes) -> np.ndarray:
        image: np.ndarray = np.frombuffer(image_data, dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_UNCHANGED)
        return image

    async def forward(self) -> ComponentState:
        response = await self.stream.read()
        frame: oak_pb2.OakSyncFrame = response.frame

        await self.outputs.image.send(self._decode_image(frame.left.image_data))

        return ComponentState.OK


class OpenCvCamera(Component):
    def __init__(self, name: str) -> None:
        super().__init__(name)
        # configure the camera client
        self.grabber = cv2.VideoCapture(0)

    @staticmethod
    def register_outputs(outputs: OutputParams) -> None:
        outputs.declare("image", np.ndarray)

    async def forward(self) -> ComponentState:
        ret, frame = self.grabber.read()
        if not ret:
            return ComponentState.STOPPED

        await self.outputs.image.send(frame)

        return ComponentState.OK


class PeopleDetector(Component):
    def __init__(self, name: str, config: ClientConfig, confidence_threshold: float) -> None:
        super().__init__(name)
        self.confidence_threshold = confidence_threshold
        self.detector_client = PeopleDetectorClient(config)

    @staticmethod
    def register_inputs(inputs: InputParams) -> None:
        inputs.declare("image", np.ndarray)

    @staticmethod
    def register_outputs(outputs: OutputParams) -> None:
        outputs.declare("detections", List[people_detection_pb2.Detection])

    async def forward(self) -> ComponentState:
        # get the image
        image: np.ndarray = await self.inputs.image.receive()

        # send data to the server
        detections: List[people_detection_pb2.Detection] = await self.detector_client.detect_people(
            image, self.confidence_threshold
        )

        # send the detections
        await self.outputs.detections.send(detections)
        return ComponentState.OK


class Visualization(Component):
    @staticmethod
    def register_inputs(inputs: InputParams) -> None:
        inputs.declare("image", np.ndarray)
        inputs.declare("detections", List[people_detection_pb2.Detection])

    async def forward(self) -> ComponentState:
        image, detections = await asyncio.gather(self.inputs.image.receive(), self.inputs.detections.receive())

        image_vis = image.copy()
        for det in detections:
            image_vis = cv2.rectangle(
                image_vis, (int(det.x), int(det.y)), (int(det.x + det.width), int(det.y + det.height)), (0, 255, 0), 2
            )

        cv2.namedWindow("image", cv2.WINDOW_NORMAL)
        cv2.imshow("image", image_vis)
        cv2.waitKey(1)


async def main(config_camera: ClientConfig, config_detector: ClientConfig) -> None:

    cam = AmigaCamera("amiga-camera", config_camera, stream_every_n=config_camera.stream_every_n)
    # NOTE: use the OpenCvCamera if you want to use a webcam
    # cam = OpenCvCamera("opencv-camera")
    detector = PeopleDetector("people-detector", config_detector, confidence_threshold=0.5)
    viz = Visualization("visualization")

    cam.outputs.image >> detector.inputs.image
    cam.outputs.image >> viz.inputs.image
    detector.outputs.detections >> viz.inputs.detections

    pipeline = Pipeline()
    pipeline.add_nodes([cam, detector, viz])

    await pipeline.async_run()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-people-detector")
    parser.add_argument("--port-camera", type=int, required=True, help="The camera port.")
    parser.add_argument("--address-camera", type=str, default="localhost", help="The camera address")
    parser.add_argument("--port-detector", type=int, required=True, help="The camera port.")
    parser.add_argument("--address-detector", type=str, default="localhost", help="The camera address")
    parser.add_argument("--stream-every-n", type=int, default=5, help="Streaming frequency")
    args = parser.parse_args()

    # create the config for the clients
    config_camera = ClientConfig(port=args.port_camera, address=args.address_camera)
    config_camera.stream_every_n = args.stream_every_n

    config_detector = ClientConfig(port=args.port_detector, address=args.address_detector)

    # run the main
    asyncio.run(main(config_camera, config_detector))
```

:::tip
We highgly recommend to have some basic knowledge about [**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
