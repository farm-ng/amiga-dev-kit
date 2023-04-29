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


- In order to transfer data with this USB drive it will need to either be in the `exFAT` or `ext4` format.
Steps:

1. Plug your USB drive into your computer

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="linux" label="Linux" default>

2. Navigate to `files` then right click on your USB name.
3. Next, click on `properties`, then `Open in Discs`
4. Under the Volumes click on the setting icon
6. Then click `Format Partition...`

![image_480-1](https://user-images.githubusercontent.com/66448234/233509945-08e8ff77-83fc-4ef3-b51a-3cd39d6f8a17.png)

7. Then you will get the above picture. Name the file what you want and select
    `Internal disk for use with Linux systems only (Ext4)`
8. Then select `Next` and then select `Format`
Congrats you successfully formatted your USB drive!

</TabItem>
<TabItem value="macos" label="MacOs" default>

2. Launch Disk Utility (from Applications > Utilities > Disk Utility).
3. Select the drive in the left-hand sidebar.
4. Click Erase.
5. From the Format menu, select ExFAT.
6. From the Scheme menu, select Master Boot Record.
7. Click Erase and follow prompts to confirm.
You have now formatted your flash drive on a Mac

</Tabs>

:::caution
Right now you have to first open the file mover app then plug in the USB. Do not plug in the USB before you open the File Mover App or it may not behave as expected.
:::

1. Open the File Mover App
2. Plug in the USB drive into the back of the brain.
    - Watch for the top left to go from red, `Disk Status:: No Disk` to green `Disk Status:: Available`, so you know you are good to go.
    - You should see the button `Select All` and the left box light up, meaning it is now press-able.
3. Now, you are going to select which files you want to transfer
    - The left box is what files are available to transfer, each is a toggle button, so to select one you only need to press which file you want and it will highlight in blue as in selected.
    - You can also choose to transfer all files in which case click the `Select All` button and all the buttons should highlight it blue.
    - You can also undo this action by no pressing `De-select All`
4. Now that you have selected the files you want to transfer you may press `Start Transfer`, and the transfer will begin.
    - If you decide you no longer want to transfer the files click `Cancel Transfer` to stop it.
    - As the transfer progresses, you will see at the bottom of the page a blue progress bar move across the screen updating you on the progress of the transfer.
5. After the transfer is complete you will be notified and you can now dismount you drive.

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
