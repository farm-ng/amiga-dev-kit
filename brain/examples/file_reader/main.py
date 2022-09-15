# Copyright (c) farm-ng, inc. All rights reserved.
import argparse
from pathlib import Path

import cv2
import numpy as np
from farm_ng.core.events_file_reader import EventsFileReader
from farm_ng.oak import oak_pb2


def main(data_path: str) -> None:
    file_name = Path(data_path) / "event.log"
    reader = EventsFileReader(file_name)
    assert reader.open()

    # main window to visualize image and interact with keyboard
    cv2.namedWindow("image", cv2.WINDOW_NORMAL)

    while True:
        # read frame by frame
        frame: oak_pb2.OakSyncFrame = reader.read()
        if frame is None:
            break

        # cast image data bytes to numpy and decode
        # NOTE: explore frame.[rgb, disparity, left, right]
        image = np.frombuffer(frame.rgb.image_data, dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_UNCHANGED)

        # visualize the image
        cv2.imshow("image", image)
        cv2.waitKey(30)

    reader.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="Event file reader example.")
    parser.add_argument("--data-path", type=str, default="/tmp", help="Path to the `events.log` file.")
    args = parser.parse_args()

    main(args.data_path)
