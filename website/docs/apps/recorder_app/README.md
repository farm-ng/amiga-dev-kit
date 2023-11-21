---
id: recorder-app
title: Recorder App
---

# Recorder App Guide

This guide will walk you through how to record field data and
transfer that data from the Amiga to your local machine.

## Record data with the Recorder App

The first step in this tutorial is to record some field data. To
do this, you are going to use the handy Recorder app on the
Amiga.

On the **Recorder** app, select what data you want to record by checking
the boxes under the column `Include URI` to indicate which topics to record.
The [Recorder Service Overview](/docs/concepts/recorder_service/) describes the available topics.

Then use the `Start` and `Stop` buttons to start/stop collecting data.

While recording data, a message displaying **Recording in Progress** will pop up
on the left-hand side of the menu.

![Screenshot from 2023-10-04 11-46-43](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/8464afd9-88fb-43b0-b624-1e308e13c36b)

:::info Info
Change the values on the `everyN` column to adjust the frequency of data collection.

`everyN` = Max_frequency / Desired_frequency.

For example, `gps/relposned` messages are published at a frequency of 2 Hz.
If, for example, you wish to receive those messages at a frequency of 1 Hz,
then change the value of `everyN` to 2.
Be sure to use integers in the `everyN` field.
:::

### File naming convention

The data will be recorded with a file naming convention that captures the precise timestamp (to the microsecond)
at the time recording starts, the name of the robot on which the files were recorded,
and the file number in the video sequence:

```bash
<yyyy>_<mm>_<dd>_<hh>_<mn>_<ss>_<msmsms>_<robot_name>.0000.bin
```

E.g.,

```bash
  2023_01_12_16_17_52_134845_element-vegetable.0000.bin
# yyyy_mm_dd_hh_mn_ss_msmsms_robot_name.####.bin
```

# How to transfer data from the Amiga to your local machine

Right now, it is only possible to transfer files using ssh.

First, let's make sure your data was properly saved.
Using a terminal command window:

```bash
ssh <robot-name>
```

You should replace `<robot-name>` with your actual robot name, e.g., `element-vegetable`.

- If having issues further instructions for how to do this are
listed
[**here**](/docs/brain/custom-applications.mdx#ssh-configuration)

- Once connected: Verify the logs are present on the Amiga

```bash
cd /mnt/data/ # navigate to where the logs are located
ls
# In the output you should see the name of the logs you just
#recorded.
# You can see its the right log by the date in the of its name.
```

- Open a new local terminal window (**not ssh**) to copy the files over

```bash
scp -rp <robot-name>:/mnt/data/<name-of-log-file> ~/path/in/local/directory

# Replace <robot-name> with what is shown as the name in the SSH terminal
```

:::tip
If you are receiving an error like: No such file or directory

- Check to see if your path is right, both on your local machine,
and the **ssh** terminal
- Check to make sure you are entering this command in your local
terminal and not the Amiga
:::
- The files should begin to download, and when it reaches 100%
the download is complete, and the file transfer it done!
- Feel free to rename the file once it has transferred to your local PC

Congratulations you have now completed this tutorial, and should
now know how to record field data and offload it!

:::tip
If you want to collect data via terminal commands, check out
the [**Events Recorder**](https://amiga.farm-ng.com/docs/examples/events_recorder/) tutorial.
:::
