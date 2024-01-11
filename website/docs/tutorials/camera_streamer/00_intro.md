---
id: camera-streamer-overview
title: 00 - Camera Streamer Overview
---

# Camera Streamer Overview

:::tip
This tutorial builds off of the
[**Tutorial Introduction**](/docs/tutorials/introduction/tutorial-introduction),
so please check that out if you have not already.
:::

This tutorial will walk you through building the
[**camera-streamer-kivy**](https://github.com/farm-ng/camera-streamer-kivy)
from the [**amiga-app-template-kivy**](https://github.com/farm-ng/amiga-app-template-kivy).
It will show how to access the oak
camera streams to perform real-time image processing.

The topics covered in this tutorial include:

- Adding images to kivy applications
- grpc / asyncio application development
- Streaming an Oak camera with the camera client

## Tutorial Outline

This tutorial will follow the following structure:

1. Clone and name your custom app repository
2. Build the kivy image widgets
3. Subsrcibe to the oak (camera) service
4. Connect front-end image viewer (kivy) to backend image stream (oak service)
