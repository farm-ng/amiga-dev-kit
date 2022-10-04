# Copyright (c) farm-ng, inc. All rights reserved.
import argparse
from pathlib import Path

import cv2
import numpy as np
from farm_ng.core.events_file_reader import EventsFileReader
from farm_ng.oak import oak_pb2


def main(file_name: str) -> None:
    reader = EventsFileReader(Path(file_name))
    assert reader.open()

    # main window to visualize image
    uris = reader.uris()
    print(uris)

    while True:
        # read frame by frame
        event, sample = reader.read()
        if not event:
            break
        if event.name != "OakDataSample":
            continue
        frame: oak_pb2.OakSyncFrame = sample.frame
        if frame is None:
            break

        # cast image data bytes to numpy and decode
        # NOTE: explore frame.[rgb, disparity, left, right]
        depth = cv2.imdecode(np.frombuffer(frame.disparity.image_data, dtype="uint8"), cv2.IMREAD_GRAYSCALE)
        rgb = cv2.imdecode(np.frombuffer(frame.rgb.image_data, dtype="uint8"), cv2.IMREAD_UNCHANGED)

        # visualize the image
        #
        depth_color = cv2.applyColorMap(depth * 2, cv2.COLORMAP_HOT)

        rgb_window_name = "rgb:" + event.uri.query
        depth_window_name = "depth:" + event.uri.query

        cv2.namedWindow(depth_window_name, cv2.WINDOW_NORMAL)
        cv2.namedWindow(rgb_window_name, cv2.WINDOW_NORMAL)

        cv2.imshow(depth_window_name, depth_color)
        cv2.imshow(rgb_window_name, rgb)
        cv2.waitKey(30)

    reader.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="Event file reader example.")
    parser.add_argument("--file-name", type=str, required=True, help="Path to the `events.log` file.")
    args = parser.parse_args()

    main(args.file_name)
