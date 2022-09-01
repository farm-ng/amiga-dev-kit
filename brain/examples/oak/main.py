# Copyright (c) farm-ng, inc. All rights reserved.
import argparse
import asyncio

import cv2
import numpy as np
from farm_ng.oak.client import OakCameraClient, OakCameraClientConfig
from farm_ng.oak import oak_pb2


async def main(address: str, port: int, stream_every_n: int) -> None:
    # configure the camera client
    config = OakCameraClientConfig(address=address, port=port)
    client = OakCameraClient(config)

    # get the streaming object
    response_stream = client.stream_frames(every_n=stream_every_n)

    # start the streaming service
    await client.start_service()

    while True:
        # query the service state
        # TODO: explain states
        state: oak_pb2.OakServiceState = await client.get_state()

        if state.value != oak_pb2.OakServiceState.RUNNING:
            print("Camera is not streaming!")
            continue

        response: oak_pb2.StreamFramesReply = await response_stream.read()
        if response and response.status == oak_pb2.ReplyStatus.OK:
            # get the sync frame
            frame: oak_pb2.OakSyncFrame = response.frame
            print(f"Got frame: {frame.sequence_num}")
            print(f"Device info: {frame.device_info}")
            print("#################################\n")

            # get the image data and decode
            data: bytes = getattr(frame, "rgb").image_data

            # use imdecode function
            image = np.frombuffer(data, dtype="uint8")
            image = cv2.imdecode(image, cv2.IMREAD_COLOR)

            # visualize the image
            cv2.namedWindow("rgb", cv2.WINDOW_NORMAL)
            cv2.imshow("rgb", image)
            cv2.waitKey(1)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-camera-app")
    parser.add_argument("--port", type=int, required=True, help="The camera port.")
    parser.add_argument("--address", type=str, default="localhost", help="The camera address")
    parser.add_argument("--stream-every-n", type=int, default=4, help="Streaming frequency")
    args = parser.parse_args()

    asyncio.run(main(args.address, args.port, args.stream_every_n))
