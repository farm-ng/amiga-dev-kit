---
id: tutorial-introduction
title: 00 - Introduction
---
# Kivy Tutorial Introduction

This is a three part tutorial designed to walk you throuhg the process of
 devleoping your custom kivy application on the brain. We support two main user
 interface development environments, ReactJS and Kivy.

Part 1 will walk you through cloneing a template repository onto the
brain. [**Amiga-app-template-kivy**](https://github.com/farm-ng/amiga-app-template-kivy/tree/main)
 includes all the files required to begin developing a custom application.

Part 2 ([**camera-streamer-kivy**](https://github.com/farm-ng/camera-streamer-kivy))
will walk you through building a simple kivy interface to allow you to visualize the
 oak camera streams from the brain.

Part 3 ([**virtual-joystick**](https://github.com/farm-ng/virtual-joystick-v2)) will
walk you through a more complicated kivy interface, sending movement controls and
customizing app requirements.

This first tutorial is designed to provide you with:

1. References and the basic background knowledge that your Amiga
app development will be based on.
2. An understanding of the
[**`amiga-app-template-kivy`**](https://github.com/farm-ng/amiga-app-template-kivy/tree/main)
you will use as the base of your custom apps.

If you would rather develop using ReactJS please refer to: [**ReactJS Tutorial**](/docs/brain/custom-applications.mdx)

# Background knowledge

The Amiga brain app development meets at the intersection of three key libraries,
as well as a few publicly available libraries developed by the **farm-ng** team:

1. [**gRPC**](https://grpc.io/)
2. [**asyncio**](https://docs.python.org/3/library/asyncio.html)
3. [**kivy**](https://kivy.org/)
4. [**farm-ng libraries**](#farm-ng-libraries)

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
