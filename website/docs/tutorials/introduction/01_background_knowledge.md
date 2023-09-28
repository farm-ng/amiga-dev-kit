---
id: background-knowledge
title: 01 - Background Knowledge
---
# Background knowledge

:::caution deprecation warning
This is out-of-date for brains running `v2.x` Amiga OS software.<br/>
This tutorial only applies to brains running Amiga OS `v1.x` versions.<br/>
Please check back for an updated tutorial for brains running `v2.x` Amiga OS software.
:::

The Amiga brain app development meets at the intersection of three key libraries,
as well as a few publicly available libraries developed by the **farm-ng** team:

1. [**gRPC**](https://grpc.io/)
2. [**asyncio**](https://docs.python.org/3/library/asyncio.html)
3. [**kivy**](https://kivy.org/)
4. [**farm-ng libraries**](#farm-ng-libraries)

:::info
Currently we are only supporting Python app development, but our
infrastructure allows for C++ app development support in the near
future.
:::

## gRPC

The best place to start to gain an understanding of gRPC is the
[**gRPC introduction**](https://grpc.io/docs/what-is-grpc/introduction/),
followed by the [**gRPC core concepts**](https://grpc.io/docs/what-is-grpc/core-concepts/).

gRPC is used as our communication protocol between services
(devices like cameras running in the background) and clients (how
you connect to services in your app).
The communication is done through Protocol Buffers, defined in `*.
proto` files in our [**farm-ng libraries**](#farm-ng-libraries).

## asyncio

The best place to start to gain an understanding of asyncio is
the [**asyncio docs**](https://docs.python.org/3/library/asyncio.html).

We use asyncio in order to run multiple concurrent tasks in our
applications.
This is crucial to the system design to prevent high rate robotic
control from being blocked by time consuming processes, such as
image processing.

In the virtual joystick example, we have multiple, concurrent
`while` loops running that:

- Receive the camera stream (from the camera service)
- Receive the canbus stream (from the canbus service)
- Draw the joystick (in [**kivy**](#kivy))
- Send canbus commands (to the canbus service)

## kivy

The best place to start to gain an understanding of kivy is the
[**kivy Getting Started >> Introduction**](https://kivy.org/doc/stable/gettingstarted/intro.html).

We use kivy to draw our apps and handle touch screen interactions
for our interactive apps.
kivy can be coded in its own language
([**the Kv language**](https://kivy.org/doc/stable/guide/lang.html)), in Python, or in
some combination of both!

We tend to define our apps in the kv language, and add
interaction in Python code.
In the example, however, we also demonstrate creating a custom
kivy `Widget` in Python!

## farm-ng libraries

We have some libraries that are imported by the brain
infrastructure and are used in our apps.
They are:

- defined as python packages (installed with `pip` by pointing to
the repo)
- contain the `.proto` definitions used in our gRPC communications
- contain the gRPC clients you can use to interact with the Amiga
brain services

See: [**farm_ng_core**](https://github.com/farm-ng/farm-ng-core)

See: [**farm_ng_amiga**](https://github.com/farm-ng/farm-ng-amiga)
