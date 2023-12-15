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

## Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## Setup

Create first a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

## Install

```bash
cd examples/file_reader_headers
pip install -r requirements.txt
```

## Select your log file

See the **[Recorder App Guide](/docs/apps/recorder_app/)** for instructions.

## Run example

E.g.,

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
