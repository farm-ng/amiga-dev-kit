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
    reader.compute_offsets()

    # main window to visualize image
    cv2.namedWindow("image", cv2.WINDOW_NORMAL)

    uris = reader.uris()
    camera_id = 0

    for frame_id in range(reader.num_frames(uris[camera_id])):
        # read frame by frame
        sample = reader.seek_and_read(uris[0], frame_id)
        frame: oak_pb2.OakSyncFrame = sample.frame
        if frame is None:
            break

        # cast image data bytes to numpy and decode
        # NOTE: explore frame.[rgb, disparity, left, right]
        image = np.frombuffer(frame.disparity.image_data, dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_UNCHANGED)

        # visualize the image
        cv2.imshow("image", image)
        cv2.waitKey(30)

    reader.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="Event file reader example.")
    parser.add_argument("--file-name", type=str, required=True, help="Path to the `events.log` file.")
    args = parser.parse_args()

    main(args.file_name)
