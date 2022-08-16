#!/bin/bash -ex
# https://learn.adafruit.com/building-circuitpython/windows-subsystem-for-linux
# You only need to do this once.

# Choose the appropriate drive letter.
mkdir -p /mnt/$1

# Now mount the drive.
mount -t drvfs $1: /mnt/$1
