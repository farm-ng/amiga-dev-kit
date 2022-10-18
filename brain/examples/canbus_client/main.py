# Copyright (c) farm-ng, inc. All rights reserved.
import argparse
import asyncio

import cv2
import numpy as np
from farm_ng.canbus.canbus_client import CanbusClient
from farm_ng.canbus.canbus_client import CanbusClientConfig
from farm_ng.oak.oak_client import OakCameraClient
from farm_ng.oak.oak_client import OakCameraClientConfig
from farm_ng_adk.oak import oak_pb2


async def main(address: str, camera_port: int, canbus_port: int, stream_every_n: int) -> None:
    # configure the camera client
    camera_config = OakCameraClientConfig(address=address, port=camera_port)
    camera_client = OakCameraClient(camera_config)

    # configure the canbus client
    canbus_config = CanbusClientConfig(address=address, port=canbus_port)
    canbus_client = CanbusClient(canbus_config)

    # get the camera streaming object
    response_stream = camera_client.stream_frames(every_n=stream_every_n)

    # start the services
    await camera_client.start_service()
    await canbus_client.start_service()

    # main window to visualize image and interact with keyboard
    cv2.namedWindow("image", cv2.WINDOW_NORMAL)

    while True:
        state: oak_pb2.OakServiceState = await camera_client.get_state()

        if state.value != oak_pb2.OakServiceState.RUNNING:
            print("Camera is not streaming!")
            continue

        response: oak_pb2.StreamFramesReply = await response_stream.read()
        if response and response.status == oak_pb2.ReplyStatus.OK:
            # get the sync frame
            frame: oak_pb2.OakSyncFrame = response.frame
            print(f"Got frame: {frame.sequence_num}")
            print(f"Device info: {frame.device_info}")
            print(f"Timestamp: {frame.rgb.meta.timestamp}")
            print("#################################\n")

            # get the image data and decode
            frame: oak_pb2.OakFrame = getattr(frame, "disparity")

            # cast image data bytes to numpy, rgb needs decoding
            image = np.frombuffer(frame.image_data, dtype=frame.dtype)
            if frame.dtype == "uint8":
                image = cv2.imdecode(image, cv2.IMREAD_COLOR)
            image = image.reshape(frame.rows, frame.cols, frame.channels)

            # visualize the image
            cv2.imshow("image", image)
            key = cv2.waitKey(1)

            if key == ord("i"):
                canbus_client.send_velocity(linear=0.1, angular=0.0)
                pass
            elif key == ord("k"):
                canbus_client.send_velocity(linear=-0.1, angular=0.0)
                pass
            elif key == ord("j"):
                print("pressed j")
                pass
            elif key == ord("l"):
                print("pressed l")
                pass
            elif key == ord("q"):
                print("ending client application!")
                cv2.destroyAllWindows()
                break


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-camera-app")
    parser.add_argument("--port-camera", type=int, required=True, help="The camera port.")
    parser.add_argument("--port-canbus", type=int, required=True, help="The canbus port.")
    parser.add_argument("--address", type=str, default="localhost", help="The camera address")
    parser.add_argument("--stream-every-n", type=int, default=4, help="Streaming frequency")
    args = parser.parse_args()

    asyncio.run(main(args.address, args.port_camera, args.port_canbus, args.stream_every_n))
