---
id: file-reader
title: File Reader
---

# File Reader Example

In this example you will learn how to upload data to this [program](https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader)
and run the example on your machine.

This is an example data file you can use. We will also teach you how to get your own directly from the Amiga.

Follow the instructions to clone the repository if you haven't already [here](/docs/brain/brain-install.md#clone-the-repository)

Now we will make a data folder for all of our log files and other things that will be useful to us.

## Make a Data folder
```bash
cd <to-your-base-directory>
mkdir <data-file>
cd <data-file>
pwd # the output of this is your <path>
```
## Download the log file
Now you are going to download this log file that you can use in this example and will go in this folder
 The [file is here](https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/western-growers-2022-12-05/events_12052022115852.bin)

 Now that the file is downloaded you do the following
 open a new terminal and
 ```bash
 cd ~
 cd Downloads
 mv events_12052022115852.bin <path-to-where-data-file-is-above>
 ```
 Now that you have your log file in the correct place navigate to where the repository `farm-ng-amiga` is and

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

Optionally, you can change the camera that is played back from the default of `oak0`. E.g.,

```bash
python main.py --file-name <path-from-above>/events_12052022115852.bin --camera-name oak1
```

Congratulations a video should now pop up and play! You finished running this example!
