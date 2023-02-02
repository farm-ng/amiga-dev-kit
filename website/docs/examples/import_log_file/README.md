---
id: import-log-file
title: Record and Access data
---

# How to Record and Access data on the Amiga
This tutorial will walk you through how to record field data and transfer that data from the Amiga to your local machine.
## Record data with the Recorder App
The first step in this tutorial is to record some field data. To do this, you are going to use the handy Recorder app on the Amiga. To learn how to use it, watch the video below (watch until 5:03)
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p0I11p4QF4?start=169" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# How to transfer data from the Amiga to your local machine
There are two different methods you can use to transfer the log files from the Amiga to your local machine.
The first way is to use a USB flash drive, and the second way is to SSH into the Amiga.
:::tip
Make sure you have done the first step of having data recorded otherwise you will have nothing to transfer.
:::

## Transfer data with a USB flash drive
- You are going to get a USB fash drive and plug it into the USB port in the back of the brain (There is a label next to the USB port
and you may have to unscrew a black cap covering the opening to use it).
- Next go to the File Mover App on the brain. If the flash is not properly mounted, you will see a big red box that
says `Disk Status:: No Disk`. If the flash is properly mounted, you will see a green box that says `Disk Status:: Available`.
This means you are good to go.
- Click the `Start Transfer` button.
- You should now see a blue line begin to appear on the bottom on the screen indicating the progress of the transfer. When the
transfer is done, a pop up message will appear that says `Transfer Status Done`. Click outside of the box to exit it.
- Dismount the flash drive and plug it into your computer. A pop up containing all the data files on the flash drive should appear.
- The next step is to drag and drop the files to wherever you want to store them.
```bash
mv <file-name> <path> # command to move the files to a location on your machine
```
Congrats you now have transferred files from the Amiga to you local machine!

## Transfer data with SSH
To transfer files using ssh you will first need to ssh into the Amiga.
- Instructions for how to do this are listed [**here**](/docs/brain/custom-applications.mdx#initial-ssh-configuration)

- Once connected: Verify the logs are present on the Amiga
```bash
cd ~ # to go to home directory
cd /data/farm_ng/ # navigate to where the logs are located
ls
# In the output you should see the name of the logs you just recoreded.
# You can see its the right log by the date in the of its name.
```
- In a local terminal (**not ssh**) copy the files over
```bash
scp -rp amiga@10.0.4.110:/data/farm_ng/<name-of-log-file> ~/path/in/local/directory
# Replace amiga@... with what is shown as the name in the SSH terminal, and your Amiga's ip address
```
- When prompted enter the password for the Amiga.

:::tip
If you are receiving an error like: No such file or directory

- Check to see if your path is right, both on your local machine, and the ssh terminal
- Check to make sure you are entering this command in your local terminal and not the Amiga
:::
- The files should begin to download, and when it reaches 100% the download is complete, and the file transfer it done!
- We recommend adding meaningful names to your field data so that you will know what it is later down the road. An example of this is
yyyy_mm_dd_hh_mm_ss_msmsms_type_hostname.xxxx.bin

Congratulations you have now completed this tutorial, and should now know how to record field data and offload it!

:::tip
If you want to go through an example that will use this data, at the bottom of this page click the next button to arrive at
the File Reader example and the page after that is the File Reader Can example.
:::
