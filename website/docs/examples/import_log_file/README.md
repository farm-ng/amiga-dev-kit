---
id: import-log-file
title: Get data from your Amiga
---

# How to get data from your Amiga

As an example for how to get data from the Amiga we will capture video that we will use in this example

To do this we go to the Recorder Screen app on the Brain and record a little photage of us driving the Amiga around.
Now that this is done we need to somehow get this data unto our device so we can play it back.
- You are going to get a fatty USB drive and plug this into a port in the back of the brain
- Next go to the file mover app on the brain and the drive that was previously red should now turn green implying that there is now
a drive to receive the files.
- ... After it is downloaded you should disconnect the dive and plug it into you computer
- You should get a pop up containing all the data files on the drive the next step is to drag and drop the files you want onto
your desktop
- From there you can to move the file where you want
```bash
mv <file-name> <path>
```

- We want to make sure the naming convention of this file is correct so you can identify the infomration of this file later
it goes: yyyy_mm_dd_hh_mm_ss_msmsms_type_hostname.xxxx.bin
That is the year, day, month, hour, minute, second....

Congratulations now you have the data files from the Amiga to do with it what you want!

:::tip

If you go to the bottom of this page you can click the next button to go through an example where you can utilize this data with
the file Reader or File Reader Can example.

:::

Other available data examples:
- Amiga driving in a field [(click to download)](s3://farm-ng-dev-auto-plot-mvp/datasets/jacobs_freedom_1013/events_10132022112259.bin)
- Amiga driving in a row [(click to download)](https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/western-growers-2022-12-05/events_12052022115852.bin)
