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

This [**File Reader Can**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_can/main.py)
example parses the CAN data from a recorded log and prints the `AmigaTpdo1` parsed
values. The `AmigaTpdo1` can packet contains
the `state`, `speed`, and `angular rate` of the Amiga, as
reported by the vehicle control unit (VCU).

You can either run this example directly on a brain by `ssh`'ing in,
or use your local PC.

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
cd py/examples/file_reader_can
pip install -r requirements.txt
```

## 4. Execute the Python script

Specify the log file, e.g.:

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
