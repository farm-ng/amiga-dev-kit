---
id: camera-stream
title: 03 - Python Implementation
---
# Python Implementation

:::info
The Python implementation of the
[**camera-streamer**](https://github.com/farm-ng/camera-streamer)
app can be found at
[**`src/main.py`**](https://github.com/farm-ng/camera-streamer/blob/main/src/main.py).
You should open that file for reference as you follow along.
:::

## Add a camera stream

The main method we'll add to our app is a camera stream.
This will:

- Use the [**`OakCameraClient`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py)
- Display images as kivy [**`Image`**](https://kivy.org/doc/stable/api-kivy.uix.label.html)
  widgets in our `TabbedPanel`.

This task listens to the camera client's stream and populates the
tabbed panel with all 4 image streams from the oak camera.
In this task we connect to a "server streaming" RPC, as described
in [**gRPC core concepts**](https://grpc.io/docs/what-is-grpc/core-concepts/).

### Setup

Once the `root` of the kivy `App` is created, we loop "forever"
(until the app is closed).

First we check the state of the `OakCameraClient`, which forwards
the state of the Oak camera service.
When the service is in the `IDLE` state it is available, but no
client has yet connected to it.
When the service is in the `RUNNING` state it is available and
has a client connected to it.
In this case, that's your `OakCameraClient`!

### Connection logic

If the service is in one of these available states (`IDLE` or
`RUNNING`), you want to create a stream with your client.

If the service is not in one of these available states (`IDLE` or
`RUNNING`), you want to cancel the stream (if it exists) and
re-create it once it is again available.

When creating the `response_stream` we use the
[**`stream_frames()`**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py)
call.
This wraps the GRPC service stub `StreamFramesRequest`, which
takes the `every_n` argument used to throttle the rate of images
in the stream.

### Read the stream

The asyncio grpc stream allows your client to wait, in a
non-blocking way, for a new message from the service to be put on
the stream queue.

If a service crashes unexpectedly, it is ideal to handle this
gracefully with the client.

We receive a `StreamFramesReply` and access the `OakSyncFrame`
proto message it contains, both defined in
[**oak.proto**](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto),
from the response.
This contains all of the available camera streams from the Oak
device you are connected to.
Remember, the Oak camera devices have 3 cameras and, in this
case, send 4 image streams (rgb, left, right, & disparity).

### Decode and display

Finally, we can decode and display the images received from the
stream.

For each of the image streams, we update the `Image` widget
`Texture` in the `TabbedPanel` with the corresponding decoded
image.
The `Image` widgets in the `TabbedPanel` accessed by their kivy
id.

## Other notes

### `farm_ng` Imports

We import the necessary `farm_ng` libraries for creating the
camera client and interacting with the camera service.

### Image decoding

We will use `TurboJPEG` as the image decoder (it is much faster
than kivy's default image decoder), so we add that as an import
in our `main.py` file.

In order to import this, we must add the library `PyTurboJPEG` to
the
[**`setup.cfg`**](https://github.com/farm-ng/camera-streamer/blob/main/setup.cfg)
file so the dependency installs.

We also construct an instance of this image decoder and assign it
as a class variable of our `CameraApp` so it is not created every
time we decode an image.

### Command line Arguments

We add a few command line arguments used by the `OakCameraClient`
at the bottom of the app and pass these to the `CameraApp` class
through the constructor.

These include the `address` and `port` of the oak device we will
stream and the `stream_every_n` argument that allows you to
throttle the stream rate of your camera, if you wish to save
computational resources.

### entry.sh

There are **required arguments** that must be set in the
[**`entry.sh`**](https://github.com/farm-ng/camera-streamer/blob/main/entry.sh)
file and **optional arguments** that take on a default value,
unless overridden in the command line.

Since `port` is required, we add `--port 50051` to the `python`
call in [**`entry.sh`**](https://github.com/farm-ng/camera-streamer/blob/main/entry.sh)
to set the script to use the `Oak0` device (`Oak1` would be on `50052`, `Oak2` on `50053`,
and so on).

When launching your app on the Brain with the button, any
required args being passed to `main.py` must already be specified
in `entry.sh`.

When launching your app on your computer, or on the brain but
from an SSH terminal, you can add additional arguments to change
the default value of the optional arguments.
The `$@` in `python` call in `entry.sh` is what allows for this.

For example, to run the app from your computer, while the camera
runs on the brain nearby:

```Python
cd camera_tutorial/
./entry.sh --address <amiga ip address>
```

To run the app on the amiga, with changing a default command line
arg:

```Python
ssh amiga
    # Password: amiga
# Now in an ssh terminal
cd ~/apps/
./camera_tutorial/entry.sh --stream-every-n 2
```

### App icon

We replace the `app_logo.png` with an icon from
<https://fonts.google.com/icons>.
When developing your own app, you can:

1. Choose a suitable symbol or icon for your app
2. Tweak the appearance parameters, including moving to the
largest 'Optical Size' available
3. Export it as a `.png` file

For following along with this tutorial, feel free to download the
image from
[**src/assets/app_logo.png**](https://github.com/farm-ng/camera-streamer/blob/main/src/assets/app_logo.png).

:::info note
The brain may not display the app icon immediately when it is
cloned onto your machine.
You can trigger a `Refresh App Buttons` on the settings screen to
apply the newly downloaded app icon.
This also is applicable if you change the app icon and want to
display the new icon.
:::

### `app_func()`

Here we create the `OakCameraClient` and add the `stream_camera`
asyncio task to our tasks list.

## Run it

Run the app on the brain by launching with the app button or run
it through a terminal as described in
[**Command line arguments**](#command-line-arguments).

![camera-streamer](https://user-images.githubusercontent.com/53625197/216075393-6e578a01-677e-4279-b224-70fd3f73ce5f.png)
