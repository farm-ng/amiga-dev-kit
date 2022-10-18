import asyncio

import cv2
import kornia as K
import numpy as np
from farm_ng_adk.oak.client import OakCameraClient
from farm_ng_adk.oak.client import OakCameraClientConfig
from limbus.core import Component
from limbus.core import ComponentState
from limbus.core import Params
from limbus.core import Pipeline


class AmigaCamera(Component):
    def __init__(self, name: str):
        super().__init__(name)
        # configure the camera client
        self.config = OakCameraClientConfig(address="192.168.1.93", port=50051)
        self.client = OakCameraClient(self.config)

        self.stream = None

    @staticmethod
    def register_outputs():
        outputs = Params()
        outputs.declare("img")
        return outputs

    async def forward(self):
        if self.stream is None:
            self.stream = self.client.stream_frames(every_n=10)

        response = await self.stream.read()
        frame = response.frame

        data: bytes = getattr(frame, "rgb").image_data

        # use imdecode function
        image = np.frombuffer(data, dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)

        self.outputs.set_param("img", image)
        return ComponentState.OK


class OpencvWindow(Component):
    @staticmethod
    def register_inputs():
        inputs = Params()
        inputs.declare("img")
        return inputs

    async def forward(self):
        img = self.inputs.get_param("img")
        cv2.imshow(f"{self.name}", img)
        cv2.waitKey(1)
        return ComponentState.OK


class KorniaProcess(Component):
    @staticmethod
    def register_inputs():
        inputs = Params()
        inputs.declare("img")
        return inputs

    @staticmethod
    def register_outputs():
        inputs = Params()
        inputs.declare("img")
        return inputs

    async def forward(self):
        img = self.inputs.get_param("img")

        img_t = K.image_to_tensor(img)
        img_t = img_t[None].float() / 255.0
        img_t = K.filters.sobel(img_t, normalized=False)

        img = K.tensor_to_image(img_t)
        self.outputs.set_param("img", img)

        return ComponentState.OK


async def main():
    cam = AmigaCamera("oak1")
    await cam.client.start_service()

    viz1 = OpencvWindow("viz_raw")
    viz2 = OpencvWindow("viz_img")

    imgproc = KorniaProcess("imgproc")

    cam.outputs.img.connect(viz1.inputs.img)
    cam.outputs.img.connect(imgproc.inputs.img)
    imgproc.outputs.img.connect(viz2.inputs.img)

    pipeline = Pipeline()
    # NOTE: in future not needed
    pipeline.add_nodes([cam, viz1, viz2, imgproc])

    # run your pipeline
    # NOTE: in future not needed
    pipeline.traverse()
    await pipeline.async_execute()


if __name__ == "__main__":
    asyncio.run(main())
