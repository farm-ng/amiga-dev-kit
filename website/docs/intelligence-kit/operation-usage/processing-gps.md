---
id: processing-gps
title: 6.6 Processing GPS Information
---
# 6.6 Processing GPS Information
To access the u-blox GPS module, connect via the USB Serial interface, usually found at /dev/ttyACM0, and ensure the user is a member of the dialout group.

For more sophisticated applications, like acquiring GPS information through Python, consider utilizing libraries like: https://github.com/semuconsulting/pyubx2.

For system-level access, employ an application like GPSD: https://manpages.ubuntu.com/manpages/bionic/man8/gpsd.8.html
