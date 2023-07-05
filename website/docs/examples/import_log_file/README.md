---
id: import-log-file
title: Record and Access data
---

# How to Record and Access data on the Amiga

This tutorial will walk you through how to record field data and
transfer that data from the Amiga to your local machine.

## Record data with the Recorder App

The first step in this tutorial is to record some field data. To
do this, you are going to use the handy Recorder app on the
Amiga. To learn how to use it, watch the video below (watch until 5:03)
<iframe width="560" height="315"
src="https://www.youtube.com/embed/_p0I11p4QF4?start=169"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

### File naming convention

The data will be recorded with a file naming convention that captures the precise timestamp (to the microsecond)
at the time recording starts, the name of the robot on which the files were recorded,
and the file number in the video sequence:

```bash
<yyyy>_<mm>_<dd>_<hh>_<mn>_<ss>_<msmsms>_events_<robot_name>.<####>.bin
```

E.g.,

```bash
  2023_01_12_16_17_52_134845_events_banana_bot.0000.bin
# yyyy_mm_dd_hh_mn_ss_msmsms_events_robot_name.####.bin
```

#### Snapshots

For individual snapshots, the `events` keyword is replaced with `snapshot`:

```bash
<yyyy>_<mm>_<dd>_<hh>_<mn>_<ss>_<msmsms>_snapshot_<robot_name>.<####>.bin
```

#### Sequence number

The first file suffix (`.<####>`) reflects the file number in the recorded sequence,
so you can easily determine the order in which the files in a single video sequence were recorded.
The order starts with `.0000` and increases by 1 per file split.

This is applicable when the `Max. file size (Mb)` value in the Recorder App settings is non-zero.
When this value is non-zero (and positive), the recorded logs will be split when the recording reaches
a multiple of the specified max file size value, in megabytes.

For example, if you record a 3.3 gigabyte log with a max file size of 500 Mb,
you will get six logs of ~500 Mb and one of ~300 Mb.
This will look something like:

```bash
2023_01_12_16_17_52_134845_events_banana_bot.0000.bin # ~500 Mb
2023_01_12_16_17_52_134845_events_banana_bot.0001.bin # ~500 Mb
2023_01_12_16_17_52_134845_events_banana_bot.0002.bin # ~500 Mb
2023_01_12_16_17_52_134845_events_banana_bot.0003.bin # ~500 Mb
2023_01_12_16_17_52_134845_events_banana_bot.0004.bin # ~500 Mb
2023_01_12_16_17_52_134845_events_banana_bot.0005.bin # ~500 Mb
2023_01_12_16_17_52_134845_events_banana_bot.0006.bin # ~500 Mb
2023_01_12_16_17_52_134845_events_banana_bot.0007.bin # ~300 Mb
```

When the max file size is set to zero, or is much larger than the size of the recorded log,
the file will not be split and the entire recorded log will be in a single log
with sequence number of `.0000`

In our example above that would yield:

```bash
2023_01_12_16_17_52_134845_events_banana_bot.0000.bin # ~ 3.3 Gb
```

# How to transfer data from the Amiga to your local machine

There are two different methods you can use to transfer the log
files from the Amiga to your local machine.
The first way is to use a USB flash drive, and the second way is
to SSH into the Amiga.
:::tip
Make sure you have done the first step of having data recorded
otherwise you will have nothing to transfer.
:::

## Transfer data with a USB flash drive

The very first thing you are going to need is a USB drive

:::info
In order to transfer data with this USB drive it will need to either be in the `exFAT` or `ext4` format.

If your USB drive is not appearing in the `File Mover` app when you plug it in,
it is likely not formatted as one of these.
:::

### Format your USB drive

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="linux" label="Linux" default>

1. Plug your USB drive into your computer
2. Backup any files you don't want to to lose
3. Navigate to `files` then right click on your USB name
4. Next, click on `properties`, then `Open in Discs`
5. Under the Volumes click on the setting icon
6. Then click `Format Partition...`
7. Name the file what you want and select
    `Internal disk for use with Linux systems only (Ext4)`
       > ![image_480-1](https://user-images.githubusercontent.com/66448234/233509945-08e8ff77-83fc-4ef3-b51a-3cd39d6f8a17.png)
8. Then select `Next` and then select `Format`

Congrats you successfully formatted your USB drive!

</TabItem>
<TabItem value="macos" label="MacOs">

1. Plug your USB drive into your computer
2. Backup any files you don't want to to lose
3. Launch Disk Utility (from Applications > Utilities > Disk Utility)
4. Select the drive in the left-hand sidebar
5. Click Erase
6. From the Format menu, select ExFAT
7. From the Scheme menu, select Master Boot Record
8. Click Erase and follow prompts to confirm

You have now formatted your flash drive on a Mac!

</TabItem>
</Tabs>

### Use the `File Mover` app

:::caution
Right now you have to first open the file mover app then plug in the USB.
Do not plug in the USB before you open the File Mover App or it may not behave as expected.
:::

1. Open the File Mover App
2. Plug in the USB drive into the back of the brain.
    - Watch for the top left to go from red, `Disk Status: No Disk` to green `Disk Status: Available`
    - The `Select All` button and the list of files on the left should light up, meaning they are active.
3. Select the files you want to transfer
    - The list of files on the left contains files available to transfer
    - The list of files on the right contains files already on the USB drive
    - Each file is a `ToggleButton` that highlights blue when selected
    - You can choose to transfer all files, in which case click the `Select All` button
    and all the buttons should highlight blue.
    - You can undo this action by pressing `De-select All`
4. Press `Start Transfer` to begin the transfer onto the USB drive
    - If you decide you no longer want to transfer the files click `Cancel Transfer`
    - There is a blue progress bar at the bottom of the page to track the progress
5. After the transfer is complete you will be notified and you can now dismount you drive

## Transfer data with SSH

To transfer files using ssh you will first need to ssh into the
Amiga.

```bash
ssh amiga
    # Password: amiga
```

- If having issues further instructions for how to do this are
listed
[**here**](/docs/brain/custom-applications.mdx#ssh-configuration)

- Once connected: Verify the logs are present on the Amiga

```bash
cd ~ # to go to home directory
cd /data/farm_ng/ # navigate to where the logs are located
ls
# In the output you should see the name of the logs you just
#recorded.
# You can see its the right log by the date in the of its name.
```

- In a local terminal (**not ssh**) copy the files over

```bash
scp -rp amiga@10.0.4.110:/data/farm_ng/<name-of-log-file> ~/path/in/local/directory
# Replace amiga@... with what is shown as the name in the SSH
#terminal, and your Amiga's ip address
```

- When prompted enter the password for the Amiga.

:::tip
If you are receiving an error like: No such file or directory

- Check to see if your path is right, both on your local machine,
and the ssh terminal
- Check to make sure you are entering this command in your local
terminal and not the Amiga
:::
- The files should begin to download, and when it reaches 100%
the download is complete, and the file transfer it done!
- We recommend adding meaningful names to your field data so that
you will know what it is later down the road. An example of this
is
yyyy_mm_dd_hh_mm_ss_msmsms_type_hostname.xxxx.bin

Congratulations you have now completed this tutorial, and should
now know how to record field data and offload it!

:::tip
If you want to go through an example that will use this data, at
the bottom of this page click the next button to arrive at
the File Reader example and the page after that is the File
Reader Can example.
:::
