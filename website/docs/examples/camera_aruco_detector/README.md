---
id: camera-aruco-detector
title: Camera Aruco Detector
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
3. **Understanding of ArUco Markers**: Understand what ArUco markers are and how they function.
These markers are used for various applications in computer vision,
most commonly for camera calibration and pose estimation,
and this example specifically utilizes them for detecting their positions in image frames.
4. **Familiarity with OpenCV's ArUco Library**: The example uses OpenCV's functionalities to handle ArUco
markers, including detection and pose estimation.
Knowledge of functions like `detectMarkers`, `drawDetectedMarkers`, and `estimatePoseSingleMarkers`
is important.
5. **Camera Calibration and 3D Geometry Concepts**: Knowledge of camera intrinsic parameters
to compute the camera matrix and distortion coefficients.
Knowing how these parameters influence the projection of 3D points onto a 2D image is important.
6. **Experience with Image Processing and Decoding**: Users should be comfortable with image manipulation
tasks, as the example involves converting images to grayscale for marker.
7. **[farm-ng Oak Service Overview](/docs/concepts/oak_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

In the [**Camera ArUco**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_aruco_detector/main.py)
example we are going show how to implement a simple Aruco marker detector
using the [**OpenCV**](https://opencv.org/) library and the Camera service to
detect and estimate the 6DoF pose of an Aruco marker useful for robot localization.

To understand the basics of the Aruco marker detection and pose estimation, please
refer to the [**OpenCV Aruco tutorial**](https://docs.opencv.org/master/d5/dae/tutorial_aruco_detection.html).

We also recommend to read first the
[**`Camera Client`**](/docs/examples/camera_client) and
[**`Camera Calibration`**](/docs/examples/camera_calibration) tutorials.

To successfully run this example, you must use your local PC, as the example won't
work if executed directly from a brain (because of the popup window).
Ensure that a [**farm-ng brain**](/docs/brain/) running Oak cameras is active.
Your local PC should be either connected to the same local network as the brain
or linked to it through tailscale.

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/camera_aruco_detector
```

```bash
pip3 install -r requirements.txt
```

This is will install the following dependencies:
    - `farm-ng-amiga` - the farm-ng python client library
    - `opencv-python` - the OpenCV python library
    - `opencv-contrib-python` - the OpenCV python library with extra modules (needed for Aruco detection)

### 3. The Aruco detector

In order to detect the Aruco markers, we need to create an Aruco detector object and
configure it with the desired parameters. To do this, we'll create an auxiliary class
`ArucoDetector` that will hold the detector object and the configuration parameters.

In this example, we'll use the `DICT_6X6_250` Aruco dictionary type and a marker size of 0.1 meters
to detect the Aruco markers following the [**OpenCV Aruco tutorial**](https://docs.opencv.org/master/d5/dae/tutorial_aruco_detection.html).

```python
class ArucoDetector:
    """A class for detecting ArUco markers in an image frame."""

    def __init__(self, aruco_dict_type: str, marker_size: float) -> None:
        """Initialize the ArUco detector.

        Args:
            aruco_dict_type (str): The ArUco dictionary type.
            marker_size (float): The size of the ArUco marker in meters.
        """
        self._detector = self._create_detector(aruco_dict_type)
        self._marker_size = marker_size

    def _create_detector(self, aruco_dict_type: str) -> cv2.aruco.ArucoDetector:
        """Create an ArUco detector.

        Args:
            aruco_dict_type (str): The ArUco dictionary type.

        Returns:
            cv2.aruco.ArucoDetector: The ArUco detector.
        """
        aruco_params = cv2.aruco.DetectorParameters()

        # See all the available ArUco dictionary types here:
        # https://docs.opencv.org/4.x/de/d67/group__objdetect__aruco.html#ga4e13135a118f497c6172311d601ce00d
        aruco_dict = cv2.aruco.getPredefinedDictionary(getattr(cv2.aruco, aruco_dict_type))
        return cv2.aruco.ArucoDetector(aruco_dict, aruco_params)
```

We will also create a couple of internal utilities to create the reference 3d points needed by the
pose estimation solver.

```python
    def _create_object_points(self, marker_size: float) -> np.ndarray:
        """Create the object points for the ArUco markers.

        Args:
            marker_size (float): The size of the ArUco marker in meters.

        Returns:
            np.ndarray: The object points for the ArUco markers.
        """
        size_half: float = marker_size / 2.0
        return np.array(
            [
                [-size_half, -size_half, 0],
                [size_half, -size_half, 0],
                [size_half, size_half, 0],
                [-size_half, size_half, 0],
            ],
            dtype=np.float32,
        )
```

As described in the [**Camera to Pointcloud**](/docs/examples/camera_pointcloud)
tutorial, we need to create a camera intrinsics matrix
from the camera calibration parameters. We'll create a utility function to do this.

```python
@staticmethod
def get_camera_matrix(camera_data: oak_pb2.CameraData) -> np.ndarray:
    """Compute the camera matrix from the camera calibration data.

    Args:
        camera_data (oak_pb2.CameraData): The camera calibration data.

    Returns:
        Tensor: The camera matrix with shape 3x3.
    """
    fx = camera_data.intrinsic_matrix[0]
    fy = camera_data.intrinsic_matrix[4]
    cx = camera_data.intrinsic_matrix[2]
    cy = camera_data.intrinsic_matrix[5]

    return np.array([[fx, 0, cx], [0, fy, cy], [0, 0, 1]])
```

Finally, we'll create a method to detect the Aruco markers in an image frame and estimate their
pose that can be used later to build other applications. In this example, for educational purposes,
we will render the 3d detection into the original image.

```python
def detect_pose(self, frame: np.ndarray, camera_matrix: np.ndarray, distortion_coeff: np.ndarray):
    """Detect ArUco markers in an image frame.

        Args:
            frame (np.ndarray): The image frame in rgb format with shape HxWx3.
            camera_matrix (np.ndarray): The camera matrix with shape 3x3.
            distortion_coeff (np.ndarray): The distortion coefficients with shape 1x5.
    """
    assert len(frame.shape) == 3 and frame.shape[2] == 3, "image must be rgb"

    # Convert the image to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)

    # Detect the markers
    corners, _, _ = self._detector.detectMarkers(gray)

    print(f"Detected {len(corners)} markers")

    rvec = []
    tvec = []
    frame_vis = frame

    for corner in corners:
        # Estimate the pose of the marker
        _rvec, _tvec, _ = cv2.aruco.estimatePoseSingleMarkers(
            corner, self._marker_size, camera_matrix, distortion_coeff
        )

        # sotre the results
        rvec.append(_rvec)
        tvec.append(_tvec)

        # Draw the detected marker and its pose
        frame_vis = cv2.drawFrameAxes(
            frame, camera_matrix, distortion_coeff, _rvec, _tvec, self._marker_size * 0.5
        )

    # Draw the detected markers
    frame_vis = cv2.aruco.drawDetectedMarkers(frame_vis, corners)

    return (np.array(rvec), np.array(tvec)), frame_vis
```

### 4. The main function

Now that we have the Aruco detector, we can create the main function from where we'll
first request the camera calibration data and then subscribe to the camera service to receive
the camera stream and detect the Aruco markers. Finally, we'll visualize the detections in the
original image using OpenCV.

```python
# create a client to the camera service
config: EventServiceConfig = proto_from_json_file(args.service_config, EventServiceConfig())

# create the camera client
camera_client = EventClient(config)

# request the camera calibration data
calibration: oak_pb2.OakCalibration = await camera_client.request_reply("/calibration", Empty(), decode=True)

# create the ArUco detector
detector = ArucoDetector(aruco_dict_type=args.aruc_type, marker_size=args.marker_size)

# NOTE: The OakCalibration message contains the camera calibration data for all the cameras.
# Since we are interested in the disparity image, we will use the calibration data for the right camera
# which is the first camera in the list.
camera_matrix: np.ndarray = detector.get_camera_matrix(calibration.camera_data[0])
distortion_coeff = np.array(calibration.camera_data[0].distortion_coeff)

async for event, message in camera_client.subscribe(config.subscriptions[0], decode=True):
    # cast image data bytes to numpy and decode
    image: np.ndarray = cv2.imdecode(np.frombuffer(message.image_data, dtype="uint8"), cv2.IMREAD_UNCHANGED)

    # detect the aruco markers in the image
    # NOTE: do something with the detections here, e.g. publish them to the event service
    detections, image_vis = detector.detect_pose(image, camera_matrix, distortion_coeff)

    # visualize the image
    cv2.namedWindow("image", cv2.WINDOW_NORMAL)
    cv2.imshow("image", image_vis)
    cv2.waitKey(1)
```

### 5. Execute the Python script

To run this script from your PC, you need to update the `service_config.json`
by modifying the `host` field with your Amiga brain name.
Please check out the [Amiga Development 101](../../concepts/system_overview/README.md#where-to-run-the-examples)
for more details.

You can also stream the stereo left or right images or the camera's disparity by changing
the `path` field (e.g., /left) or change the port and service name to instead stream
the Oak1 camera.

In order to run the example, we need to provide the path to the camera service config file

```bash
python3 main.py --service-config service_config.json
```

Optionally, we can also provide the Aruco dictionary type and the marker size

```bash
python3 main.py --service-config service_config.json --aruco-type DICT_6X6_250 --marker-size 0.1
```

The example will open a window with the camera stream and the detected Aruco markers.

![Screenshot from 2023-10-06 16-34-59](https://github.com/farm-ng/amiga-dev-kit/assets/5157099/a0a1abb4-4727-4c2e-be76-b94868dd75fa)
