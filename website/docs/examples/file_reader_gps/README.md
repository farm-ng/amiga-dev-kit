---
id: file-reader-gps
title: File Reader GPS
---

# File Reader GPS Example

:::info Basic Knowledge Requirements

1. **Python Programming**: Understanding basic Python programming concepts such as functions, loops,
conditional statements, and type-checking.
2. **[farm-ng GPS Service Overview](/docs/concepts/gps_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

This [**File Reader GPS**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/file_reader_gps/main.py)
example provides a utility for reading and parsing GPS messages from the event file.
It can process two types of GPS messages: `relposned` and `pvt`.
The user specifies the type of GPS message to parse, and the script reads the corresponding data,
unpacks it, and prints it to the console.

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
cd py/examples/file_reader_gps
pip install -r requirements.txt
```

## 4. Execute the Python script

Specify the log file, e.g.:

```bash
python main.py --file-name <path-from-above>/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin
```

```bash
python main.py --file-name <path-to-your-file>
```

:::info
You should replace &lt;path-to-your-file&gt; with the path to your events binary file (**.bin**).
:::
:::tip Tip
You can also specify a gps interface to read by adding the flag **--topic-name**
:::
For example:

```bash
python main.py --file-name <path-to-your-file> --topic-name relposned
python main.py --file-name <path-to-your-file> --topic-name pvt
```

If everything worked correctly you should now see a large stream
of text come up in your terminal!

The output should look something like this:

```bash
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
Carrier solution: 2
GNSS fix ok: True
--------------------------------------------------
```

**Congrats you are done!**
