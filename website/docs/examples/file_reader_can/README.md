---
id: file-reader-can
title: File Reader Can
---

# File Reader Can Example

This [**file_reader_can example**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_can)
parses the CAN data from a recorded log and prints the `AmigaTpdo1` parsed
values. The `AmigaTpdo1` can packet contains
the `state`, `speed`, and `angular rate` of the Amiga, as
reported by the vehicle control unit (VCU).

:::info
If you haven't already cloned the `farm-ng-amiga` repository, do
so [**here**](/docs/brain/brain-install.md#clone-the-repository).
:::

:::tip
If you already have the log file you want to run with this
example you can skip to [**set up**](#setup)
:::

## Download the log file

Now you are going to download the log file that you will use in
this example.
[**Click here to download**](https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/western-growers-2022-12-05/events_12052022115852.bin)

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
cd py/examples/file_reader_can
pip install -r requirements.txt
```

## Run example

Specify the file (download before)

```bash
python main.py --file-name <path-to-file>/events_12052022115852.bin
```

Optionally, you can change the can interface that is played back
from the default of `can0`. E.g.,

```bash
python main.py --file-name <path-to-file>/events_12052022115852.bin --can-interface vcan0
```

If everything worked correctly you should now see a large stream
of text come up in your terminal!

The output should look something like this:

`AMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular
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
rate 0.000 @ time 1513.076998664`

Congrats you are done!
:::tip
There is another tutorial that walks you through getting data
directly from the Amiga
[**here**](docs/examples/import_log_file/README.md).
:::
