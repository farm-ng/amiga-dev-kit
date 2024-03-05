---
id: file-converter
title: File Converter
---

# File Converter Example

:::info Basic Knowledge Requirements

Before diving into this example, here's a quick overview of what you'll need to be familiar with:

1. **Python Programming**: This example is based in Python, making use of various foundational
constructs like functions, conditional statements, and object-oriented techniques.
2. **OpenCV**: A foundational understanding of the OpenCV library, particularly functions related to
image decoding and display, as the example showcases how to visualize camera images from the log file.
:::

The [**File Converter example**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/file_converter/main.py)
will take the `*.bin` log file for a given Oak Camera Stream or snapshot
captured by the Recorder app on an Amiga brain and convert it to either
`*.mp4` videos or `*.jpg` images for each view stream.

To successfully run this example, you must use your local PC, as the example won't
work if executed directly from a brain (because of the popup window).

:::tip
You should typically expect 4 view streams per Oak Device ("rgb", "disparity", "left, "right").
:::

## 1. Obtain a log file

### Record your own

See the **[Recorder App Guide](/docs/apps/recorder_app/)** for instructions.

### Download the log file

You can also download a pre-recorded log file to run this example with.

[**Click here to download**](https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/examples_log_file/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin)

#### [Optional] Make a Data folder

We are going to make a folder that will store all of our log
files, including the one you just downloaded.

```bash
cd <to-your-base-directory>
mkdir <data-dir>
cd <data-dir>
mv ~/Download/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin
```

Now that you have your log file in the correct place, in your
terminal navigate to where the repository `farm-ng-amiga` is and
open Visual Studio Code.

## 2. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## 3. Install the example's dependencies

### Setup

```bash
cd farm-ng-amiga/
```

:::tip Recommended

Create a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

:::

### Install

```bash
cd py/examples/file_converter
pip install -r requirements.txt
```

## 4. Execute the Python script

Specify the log file, e.g.:

```bash
python main.py --file-name <path-to-file>/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin
```

### Additional args

 Use the `--help` flag to see all possible arguments for using this tool.

```bash
# usage: Event file converter example. [-h] --file-name FILE_NAME
#                                      [--output-path OUTPUT_PATH] [--camera-name CAMERA_NAME]
#                                      [--view-name {rgb,left,right,disparity}] [--disparity-scale DISPARITY_SCALE]
#                                      [--video-to-jpg]
#
# optional arguments:
#   -h, --help            show this help message and exit
#   --file-name FILE_NAME
#                         Path to the `events.bin` file.
#   --output-path OUTPUT_PATH
#                         Path to the folder where converted data will be written.
#   --camera-name CAMERA_NAME
#                         The name of the camera to visualize. Default: oak0.
#   --view-name {rgb,left,right,disparity}
#                         The name of the camera view to visualize. Default: rbg.
#   --disparity-scale DISPARITY_SCALE
#                         Scale for amplifying disparity color mapping. Default: 1.
#   --video-to-jpg        Use this flag to convert video .bin files to a series of jpg images.
#                         Default is mp4.
```

 For instance, you can change the camera that is played back from the default of `oak0`. E.g.,

```bash
python main.py --file-name events_09162022160753_000000.bin --camera-name oak1
```

You can convert video logs to a stream of jpg images, rather than the default mp4 videos.

```bash
python main.py --file-name events_09162022160753_000000.bin --camera-name oak1 --video-to-jpg
```

Or you can convert a "snapshot" log to one jpg per view.

```bash
python main.py --file-name cpy_data/farm_ng/2023_01_06_13_24_33_445932_snapshot_b42d218.bin --video-to-jpg
```

:::info
Video logs will not convert if the `--snapshot` flag is used.
Similarly, snapshot logs will not convert if the `--snapshot` flag is not used.
:::
