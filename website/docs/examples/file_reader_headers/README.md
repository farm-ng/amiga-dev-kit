---
id: file-reader-headers
title: File Reader Headers
---

# File Reader Headers Example

:::info Basic Knowledge Requirements

Before diving into this example, here's a quick overview of what you'll need to be familiar with:

1. **Python Programming**: This code is written in Python.
Basic constructs such as functions, conditional statements, loops, and more are utilized.
:::

This [**File Reader Headers**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_headers/main.py)
example:

1. Parses a recorded `*.bin` log file and prints all topics, with a count of that topic's logged messages
2. Prints all messages with `/header` in the uri path
    - Typically you would expect to see metadata & oak camera calibrations here

You can either run this example directly on a brain by `ssh`'ing in,
or use your local PC.

## 1. Obtain a log file

### Record your own

See the **[Recorder App Guide](/docs/apps/recorder_app/)** for instructions.

<!--
Commented because the old log won't have headers!
When we record a new log, we can reinstate this

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
-->

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
cd py/examples/file_reader_headers
pip install -r requirements.txt
```

## 4. Execute the Python script

Specify the log file, e.g.:

```bash
python main.py --file-name <path-to-file>/2023_01_23_45_54_32_101010_element-vegetable.0000.bin
```

### Additional args

Use the `--help` flag to see all possible arguments for using this tool.

```bash
# usage: Event file reader example for parsing header messages. [-h] --file-name FILE_NAME [--skip-calibrations]

# optional arguments:
#   -h, --help            show this help message and exit
#   --file-name FILE_NAME
#                         Path to the `events.bin` file.
#   --skip-calibrations   Skip camera calibration header messages.
```

For instance, you can skip printing the camera calibrations if you only want to
see the other headers (e.g. `metadata` you specified when recording).
