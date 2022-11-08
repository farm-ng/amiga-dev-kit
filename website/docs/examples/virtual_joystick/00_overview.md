---
id: virtual-joystick-overview
title: Virtual Joystick Overview
---
# Virtual Joystick Overview

This example application and tutorial is designed to enable you to develop your own custom applications and deploy them to the Amiga brain.

On the Brain, there are multiple gRPC services running in the background, including the oak camera service and the canbus service.
We will teach you how to interact with these two services through the camera client and canbus client, respectively.
We will also show you how to create a basic kivy application, and use gRPC and asyncio in that application.

The topics covered in this tutorial include:
- Creating kivy applications
- GRPC / asyncio application development
- Streaming an Oak camera with the camera client
- Streaming Amiga state information with the canbus client
- Auto control mode of Amiga robot with the canbus client

:::tip
We hope that this tutorial is sufficient to get you started on developing your own custom Amiga brain applications.
If you feel we missed any key details, please let us know so we can help you through it and add it to the tutorial for everyone else to benefit from!
:::


## Infrastructure instructions

:::caution Coming soon
Link to instructions for setting up amiga-brain-template
:::

:::caution Coming soon
Link to instructions for deploying apps to brain
:::

The following assumes you:
- Have created a repository based on the template repository
- Are able to deploy apps from that repository to the Amiga Brain


## Block diagram

:::caution Coming soon
System level block diagram
:::

## Necessary background knowledge

The Amiga brain app development meets at the intersection of three key libraries, as well as some farm-ng libraries:

1. [gRPC](https://grpc.io/)
2. [asyncio](https://docs.python.org/3/library/asyncio.html)
3. [kivy](https://kivy.org/)
4. [farm-ng libraries](#farm-ng-libraries)

:::info
Currently we are only supporting Python app development, but our infrastructure allows for C++ app development support in the near future.
:::

### gRPC

The best place to start to gain an understanding of gRPC is the [gRPC introduction](https://grpc.io/docs/what-is-grpc/introduction/), followed by the [gRPC core concepts](https://grpc.io/docs/what-is-grpc/core-concepts/).

gRPC is used as our communication protocol between services (running in the background) and clients (what you link in your app).
The communication is through Protocol Buffers, defined in `*.proto` files in our [farm-ng libraries](#farm-ng-libraries).

### asyncio

The best place to start to gain an understanding of asyncio is the [asyncio docs](https://docs.python.org/3/library/asyncio.html).

We use asyncio in order to run multiple concurrent tasks in our applications.
This is crucial to the system design to prevent high rate robotic control from being blocked by time consuming processes, such as image processing.

In the virtual joystick example, we have multiple, concurrent `while` loops running that:
- Receive the camera stream (from the camera service)
- Receive the canbus stream (from the canbus service)
- Draw the joystick (in [kivy](#kivy))
- Send canbus commands (to the canbus service)

### kivy

The best place to start to gain an understanding of kivy is the [kivy Getting Started >> Introduction](https://kivy.org/doc/stable/gettingstarted/intro.html).

We use kivy to draw our apps and handle touch screen interactions for our interactive apps.
kivy can be coded in its own language ([the Kv language](https://kivy.org/doc/stable/guide/lang.html)), in Python, or in some combination of both!

We tend to define our apps in the kv language at the top of the app files using `"""` strings, and may add some interaction in Python code.
In this example, however, we also demonstrate creating a custom kivy `Widget` in Python!

### farm-ng libraries

We have some libraries that are imported by the brain infrastructure and are used in our apps.
They are:
- defined as python packages (installed with `pip` by pointing to the repo)
- contain the `.proto` definitions used in our gRPC communications
- contain the gRPC clients you can use to interact with the Amiga brain services

See: [farm_ng_core](https://github.com/farm-ng/farm-ng-core)

See: [farm_ng_amiga](https://github.com/farm-ng/amiga-brain-api)

## Virtual Joystick tutorial

The goal of this tutorial is to take you step-by-step from the template repository to the full [`virtual_joystick/main.py`](https://github.com/farm-ng/amiga-brain-api/blob/main/py/examples/virtual_joystick/main.py) example.
Then you can mirror what you've done here in your own custom app development!
