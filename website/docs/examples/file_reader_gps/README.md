---
id: file-reader-gps
title: File Reader GPS Example
---

This [file_reader_gps_example] (Link to gps_event_reader/main.py) provides a utility for reading and parsing GPS messages from the event file. It can process two types of GPS messages: relposned and pvt. The user specifies the type of GPS message to parse, and the script reads the corresponding data, unpacks it, and prints it to the console.

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

:::info
You should replace <path_to_events.bin> with the path to your events binary file.

By default, the msg-type is set to relposned (relative to the base station). You can also use pvt as an option.
:::

```bash
python main.py --file-name <path-to-file>/events_12052022115852.bin --msg-type pvt
```

If everything worked correctly you should now see a large stream
of text come up in your terminal!

The output should look something like this:

```Python
All available topics: ['/gps/pvt', '/gps/relposned']
Found 11 packets of gps/relposned

Message stamp: 92614.926564468
GPS time: 1695861128.4
Relative pose north: 2680.3909000000003
Relative pose east: -4297.41093
Relative pose down: -4.00042
Relative pose length: 506481.000063
Accuracy north: 0.0010000000474974513
Accuracy east: 0.0010000000474974513
Accuracy down: 0.0011399999493733048
Carr soln: 2
GNSS fix ok: True
################################
Message stamp: 92615.350155732
GPS time: 1695861128.8
Relative pose north: 2680.39071
Relative pose east: -4297.42
Relative pose down: -4.00037
Relative pose length: 506481.000059
Accuracy north: 0.0010000000474974513
Accuracy east: 0.0010000000474974513
Accuracy down: 0.0011500000255182385
Carr soln: 2
GNSS fix ok: True
################################
```

Congrats you are done!
:::tip
There is another tutorial that walks you through getting data
directly from the Amiga
[**here**](docs/examples/import_log_file/README.md).
:::