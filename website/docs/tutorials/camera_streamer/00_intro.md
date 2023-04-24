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

## [Link to `camera-streamer`](https://github.com/farm-ng/camera-streamer)

This example application and tutorial is designed to get you
started developing your own basic applications and deploying them
to the Amiga brain.

On the brain, there are multiple gRPC services running in the
background, including an oak camera service per camera device on
your Amiga.
You will see how to interact with one of these services through
the camera client in a basic kivy application,
using gRPC and asyncio in that application.

The topics covered in this tutorial include:

- Creating kivy applications
- GRPC / asyncio application development
- Streaming an Oak camera with the camera client
