---
id: camera-pointcloud
title: Camera Pointcloud
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
3. **3D Point Cloud Data**: Understanding the basics of 3D point cloud data.
You should be familiar with concepts like depth maps and disparity maps, and how they can be
converted into 3D representations of a scene.
Knowledge of methods such as `depth_from_disparity` and `depth_to_3d_v2`, and data structures
for representing 3D data (like tensors), will be especially helpful.
4. **Image Decoding and Tensor Manipulation**: Understanding of image data decoding and manipulation,
particularly using tensors.
5. **[farm-ng Oak Service Overview](/docs/concepts/oak_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

The requirements to run the [**Camera Pointcloud**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_pointcloud/main.py)
 example are to have a
[**farm-ng brain**](/docs/brain/) running Oak cameras and that
your PC is on the same local network as the brain.

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
# assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/pointcloud
```

### 3. Install the example's dependencies

```bash
pip3 install -r requirements.txt
```

### 4. Execute the Python script

```bash
python3 main.py --service-config service_config.json
```

:::info
To run this script from your PC, you need to update the `service_config.json`
by modifying the `host` field with your Amiga brain name.
Please check out the [Amiga Development 101](../../concepts/system_overview/README.md#where-to-run-the-examples)
for more details.
:::

### 5. Customize run

```bash
# usage: amiga-camera-pointcloud [-h] --service-config SERVICE_CONFIG [--save-disparity] [--save-pointcloud]
#
# optional arguments:
#   -h, --help            show this help message and exit
#   --service-config SERVICE_CONFIG
#                         The camera config.
#   --save-disparity      Save the disparity image.
#   --save-pointcloud     Save the depth image.
```

### 6. Code overview

In this example we get the camera calibration from the camera service and use it jointly
with the `disparity` image to generate the `pointcloud`.

Firstly, we use the `EventClient` to request the camera calibration from the camera service.
The camera calibration is an `oak_pb2.CameraCalibration` message that
contains the camera intrinsic and extrinsic parameters.

```python
# create a client to the camera service
config: EventServiceConfig = proto_from_json_file(args.service_config, EventServiceConfig())

camera_client = EventClient(config)

# get the calibration message
calibration_proto: oak_pb2.OakCalibration =
                    await camera_client.request_reply("/calibration", Empty(), decode=True)

# NOTE: The OakCalibration message contains the camera calibration data for all the cameras.
# Since we are interested in the disparity image, we will use the calibration data for the right camera
# which is the first camera in the list.
camera_data: oak_pb2.CameraData = calibration_proto.camera_data[0]

# compute the camera matrix from the calibration data
camera_matrix: Tensor = get_camera_matrix(camera_data)
```

Below is the code to compute the camera matrix from the calibration data.
Notice that we cast the `intrinsic_matrix` to a `Tensor` and reshape it to
a 3x3 matrix.
This will allow an easy integration with the kornia library.

```python
def get_camera_matrix(camera_data: oak_pb2.CameraData) -> Tensor:
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

    return tensor([[fx, 0, cx], [0, fy, cy], [0, 0, 1]])
```

Next, we use the `EventClient` to subscribe to the `disparity` path from the camera service.
The `disparity` image is an `oak_pb2.OakImage` message that contains the `disparity` image data.

To compute the `pointcloud` we first need to decode the `disparity` image data to a `Tensor`
and then compute the `pointcloud` from the `disparity` image
using the kornia method `depth_from_disparity` and `depth_to_3d_v2`.

```python
async for event, message in camera_client.subscribe(
    SubscribeRequest(uri=uri_pb2.Uri(path="/disparity"), every_n=5), decode=True
):
    # cast image data bytes to a tensor and decode
    disparity_t = decode_disparity(message, image_decoder)  # HxW

    # compute the depth image from the disparity image
    calibration_baseline: float = 0.075  # m
    calibration_focal: float = float(camera_matrix[0, 0])

    depth_t = K.geometry.depth.depth_from_disparity(
        disparity_t, baseline=calibration_baseline, focal=calibration_focal
    )  # HxW

    # compute the point cloud from the depth image
    points_xyz = K.geometry.depth.depth_to_3d_v2(depth_t, camera_matrix)  # HxWx3

    # filter out points that are in the range of the camera
    valid_mask = (points_xyz[..., -1:] >= 0.2) & (points_xyz[..., -1:] <= 7.5)  # HxWx1
    valid_mask = valid_mask.repeat(1, 1, 3)  # HxWx3

    points_xyz = points_xyz[valid_mask].reshape(-1, 3)  # Nx3
```

Below is the code to decode the `disparity` image data to a `Tensor`.

```python
def decode_disparity(message: oak_pb2.OakFrame, decoder: ImageDecoder) -> Tensor:
    """Decode the disparity image from the message.

    Args:
        message (oak_pb2.OakFrame): The camera frame message.
        decoder (ImageDecoder): The image decoder.

    Returns:
        Tensor: The disparity image tensor (HxW).
    """
    # decode the disparity image from the message into a dlpack tensor for zero-copy
    disparity_dl = decoder.decode(message.image_data)

    # cast the dlpack tensor to a torch tensor
    disparity_t = torch.from_dlpack(disparity_dl)

    return disparity_t[..., 0].float()  # HxW
```

Additionally, we can save the `disparity` image and the `pointcloud` to disk by
using the `--save-disparity` and `--save-pointcloud` flags respectively.

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
