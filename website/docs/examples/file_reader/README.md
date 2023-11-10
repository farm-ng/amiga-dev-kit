---
id: file-reader
title: File Reader
---

# File Reader Example

:::info Basic Knowledge Requirements

Before diving into this example, here's a quick overview of what you'll need to be familiar with:

1. **Python Programming**: Mastery of Python is essential, as the example employs foundational
concepts such as functions, conditional statements, and working with third-party libraries.

2. **OpenCV**: A foundational understanding of the OpenCV library, particularly functions related to
image decoding and display, as the example showcases how to visualize camera images from the log file.
:::

In this example you will learn how to upload a given log file and
use it to run the
[**File Reader Example**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader/main.py).

## Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## Download the log file

:::tip
If you already have the log file you want to run with this
example you can skip to [**set up**](#setup)
:::

Now you are going to download the log file that you will use in
this example.
[**Click here to download**](https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/examples_log_file/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin)

## [Optional] Make a Data folder

We are going to make a folder that will store all of our log
files, including the one you just downloaded.

```bash
cd <to-your-base-directory>
mkdir <data-file>
cd <data-file>
pwd # the output of this is your <path>

# Now that the file is downloaded you will do the following

cd ~ # navigate to home directory
cd Downloads
mv events_12052022115852.bin <path-to-where-data-file-is-above> # moving the data to to data-folder
```

 Now that you have your log file in the correct place, in your
 terminal navigate to where the repository `farm-ng-amiga` is and
 open Visual Studio Code.

## Setup

Create first a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

## Install

```bash
cd py/examples/file_reader
pip install -r requirements.txt
```

## Run example

Specify the file (download before)

```bash
python main.py --file-name <path-from-above>/events_12052022115852.bin
```

Optionally, you can change the camera that is played back from
the default of `oak0`. E.g., and the view `rgb`. E.g.

```bash
python main.py --file-name <path-from-above>/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin \
               --camera-name oak1 --view-name rgb
```

Congratulations two videos should now pop up and play! One should
be RGB and one should be disparity (it might be hidden behind the
RGB window so try moving the RGB window). You have now finished
running this example!

:::caution deprecation warning
This log file comes from a brain running Amiga OS `v1.x` versions.<br/>
Please check back for an updated log file from a brain running `v2.x` Amiga OS software.
:::

If you want another log file to run here is an example of Amiga
driving in a field
[(click to download)](https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/jacobs_freedom_1013/events_10132022112259.bin)

:::tip
There is another tutorial that walks you through getting data
directly from the Amiga
[**here**](docs/examples/import_log_file/README.md).
:::
