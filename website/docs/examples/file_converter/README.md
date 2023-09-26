---
id: file-converter
title: File Converter
---


# File Converter Example

> This will take the `*.bin` log file for a given Oak Camera Stream or snapshot
> captured by the Recorder app on an Amiga brain and convert it to either
> `*.mp4` videos or `*.jpg` images for each view stream.

:::tip
You should typically expect 4 view streams per Oak Device ("rgb", "disparity", "left, "right").
:::

## Setup

Create first a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

## Install

```bash
cd examples/file_converter
pip install -r requirements.txt
```

## Run example

:::caution
**Specify the file (download before)**
:::

See **[How to Record and Access data on the Amiga](/docs/examples/import_log_file/)**
for instructions.

```bash
python main.py --file-name events_09162022160753_000000.bin
```

### Additional args

 Use the `--help` flag to see all possible arguments for using this tool.

```bash
# usage: Event file converter example. [-h] --file-name FILE_NAME [--output-path OUTPUT_PATH] [--camera-name CAMERA_NAME]
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
#   --video-to-jpg        Use this flag to convert video .bin files to a series of jpg images. Default is mp4.
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

> NOTE: video logs will not convert if the `--snapshot` flag is used.
> Similarly, snapshot logs will not convert if the `--snapshot` flag is not used.
