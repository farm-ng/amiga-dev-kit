---
id: file-reader
title: File Reader
---

# File Reader Example

In this example you will learn how to upload a given log file and
use it to run the
[**file_reader example**](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader).

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
python main.py --file-name <path-from-above>/events_12052022115852.bin \
               --camera-name oak1 --view-name rgb
```

Congratulations two videos should now pop up and play! One should
be RGB and one should be disparity (it might be hidden behind the
RGB window so try moving the RGB window). You have now finished
running this example!

If you want another log file to run here is an example of Amiga
driving in a field
[(click to download)](https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/jacobs_freedom_1013/events_10132022112259.bin)
:::tip
There is another tutorial that walks you through getting data
directly from the Amiga
[**here**](docs/examples/import_log_file/README.md).
:::
