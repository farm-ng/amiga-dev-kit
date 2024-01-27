---
id: camera-streamer-overview
title: 00 - Camera Streamer Overview
---

# Camera Streamer Overview

:::warning Prerequisites
This tutorial builds off of the
[**Tutorial Introduction**](/docs/tutorials/introduction/tutorial-introduction)
:::

This tutorial will walk you through building the
[**camera-streamer-kivy**](https://github.com/farm-ng/camera-streamer-kivy)
from the [**amiga-app-template-kivy**](https://github.com/farm-ng/amiga-app-template-kivy).
It will show how to access the oak
camera streams to perform real-time image processing.
Should one of
the steps in this tutorial be confusing, please refer
to the [**camera-streamer-kivy**](https://github.com/farm-ng/camera-streamer-kivy) for code clarifications.

## Tutorial Outline

1. Build the kivy image widgets
2. Subsrcibe to the oak (camera) service
3. Connect front-end image viewer (kivy) to backend image stream (oak service)

## Outcome

From this tutorial we will build from:

![app-template](https://user-images.githubusercontent.com/53625197/217021857-aede9e9b-0f85-4b15-971f-c45944a3813c.png)

to

![camera-streamer](https://user-images.githubusercontent.com/53625197/216075393-6e578a01-677e-4279-b224-70fd3f73ce5f.png)
