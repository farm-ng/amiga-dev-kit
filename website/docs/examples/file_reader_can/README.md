---
id: file-reader-can
title: File Reader CAN
---

# File Reader CAN Example

:::info Basic Knowledge Requirements

Before diving into this example, here's a quick overview of what you'll need to be familiar with:

1. **Python Programming**: This code is written in Python.
Basic constructs such as functions, conditional statements, loops, and more are utilized.

2. **[farm-ng Canbus Service Overview](/docs/concepts/canbus_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

This [**File Reader Can**](https://github.com/farm-ng/farm-ng-amiga/tree/main-v2/py/examples/file_reader_can/main.py)
example parses the CAN data from a recorded log and prints the `AmigaTpdo1` parsed
values. The `AmigaTpdo1` can packet contains
the `state`, `speed`, and `angular rate` of the Amiga, as
reported by the vehicle control unit (VCU).

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
mv 2023_09_29_17_52_35_070804_dubnium-durian.0000.bin <path-to-where-data-file-is-above>
# moving the data to to data-folder
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
cd py/examples/file_reader_can
pip install -r requirements.txt
```

## Run example

Specify the file (download before)

```bash
python main.py --file-name <path-to-file>/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin
```

If everything worked correctly you should now see a large stream
of text come up in your terminal!

The output should look something like this:

```Python
AMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular
rate 0.000 @ time 1512.775886915
AMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular
rate 0.000 @ time 1512.843416858
AMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular
rate 0.000 @ time 1512.866171608
AMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular
rate 0.000 @ time 1512.928378193
AMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular
rate 0.000 @ time 1512.985744047
AMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular
rate 0.000 @ time 1513.019865388
AMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular
rate 0.000 @ time 1513.076998664
```

Congrats you are done!
:::tip
There is another tutorial that walks you through getting data
directly from the Amiga
[**here**](docs/examples/import_log_file/README.md).
:::
