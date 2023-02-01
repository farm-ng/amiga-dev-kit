---
id: import-log-file
title: Get data from your Amiga
---

# How to get data from your Amiga
## Record data with the Recorder App
This is a quick video that shows you how to use the recorder app, and where you can find the files (watch until 5:03)
<iframe width="560" height="315" src="https://www.youtube.com/embed/_p0I11p4QF4?start=169" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# How to transfer data from the Amiga to Your local machine
There are two methods you can do to transfer the data from the Amiga to your local machine
The first way is to use a USB flash drive

The second way is to SSH into the Amiga
:::tip
Make sure you have done the first step of having data recoreded otherwise you will have nothing to transfer.
:::

## Transfer data with USB flash drive
- You are going to get your USB drive which you have handy and plug this into a USB port in the back of the brain
- Next go to the `File Mover App` on the brain. Make sure the flash is properly mounted if it is not you will see a big red box that says `Disk Status:: No Disk`.
If you don't see this then great! Click the button `Start Transfer` and you should see at the button of the screen the data begin to upload.
- After you receive a message saying download complete you should disconnect the dive and plug it into you computer
- After plugging the drive into your machine you should get a pop up containing all the data files on the drive the next step is to drag and drop the files you want onto
your desktop.
- From there you can to move the file where you want
```bash
mv <file-name> <path>
```
Congrats you now have transferred files from the Amiga to you local machine

## Transfer data with SSH
To transfer files using ssh you will fist need to ssh into the Amiga
- Instructions for how to do this are listed [**here**](/docs/brain/custom-applications.mdx#initial-ssh-configuration)

Once connected:
- Verify the logs are present
```bash
ls farm-ng/workspace/field_data/<yyyy-mm-dd>
```
- In a local terminal (not ssh) copy the files over
```bash
scp -rp nvidia@100.108.196.17:~/farm-ng/workspace/field_data/<yyy-mm-dd>/ ~/<path/to/desired/local/storage>
```
- Now you will organize this how you wish but we recommend writing some notes about the data so it is easier to deal with later




- We want to make sure the naming convention of this file is correct so you can identify the infomration of this file later
it goes: yyyy_mm_dd_hh_mm_ss_msmsms_type_hostname.xxxx.bin
That is the year, day, month, hour, minute, second....

Congratulations now you have the data files from the Amiga to do with it what you want!

:::tip
If you go to the bottom of this page you can click the next button to go through an example where you can utilize this data with
the file Reader or File Reader Can example.
:::
