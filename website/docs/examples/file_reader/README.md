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

To successfully run this example, you must use your local PC, as the example won't
work if executed directly from a brain (because of the popup window).

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

Now you should navigate (in your terminal) to the `farm-ng-amiga` repository.

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
cd py/examples/file_reader
pip install -r requirements.txt
```

## 4. Execute the Python script

Specify the log file, e.g.:

```bash
python main.py --file-name <path-from-above>/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin
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
