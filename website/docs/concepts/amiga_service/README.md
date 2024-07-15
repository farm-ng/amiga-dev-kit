---
id: amiga-service-overview
title: Amiga
---

# Amiga Service Overview

In [**AmigaOS 2.3 Elderberry Release Notes**](/docs/release-notes/release-023/),
we began the transition of many of our core services from Python to Rust,
significantly improving resource utilization, CPU performance and logging robustness.
As part of this transition, we are moving from a micro-service architecture to
more monolithic, encompassing services.

At the time of the **AmigaOS 2.3 Elderberry Release**,
the amiga service encompasses the following sub-services:

- [**Recorder Service**](/docs/concepts/recorder_service)
- [**GPS Service**](/docs/concepts/gps_service)
- [**Oak Service**](/docs/concepts/oak_service)

This makes the full architecture of the AmigaOS:

![amiga-services-diagram](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/68bff7a0-08df-48d2-b6ae-5155cf7ff1eb)

Please refer to the documentation for each sub-service as necessary!
