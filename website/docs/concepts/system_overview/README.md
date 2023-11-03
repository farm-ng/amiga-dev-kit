---
id: amiga-dev
title: Amiga Development 101
---

# Amiga Development 101

Welcome to the world of Amiga robot development!
If you're excited about harnessing the power of the Brain and the Amiga platform,
you've come to the right place.
This guide is designed to give you a bird's-eye view of how various services run on the Brain
work in harmony to power the Amiga.

## What are Services?

In the realm of robot development, a service can be thought of as a specialized program or
routine that performs a specific function.
For the Amiga robot, each service handles a unique aspect of the robot's operation, from processing
imagery to managing movement.
They're the cogs that make the Amiga machine tick.

## Why Are Services Necessary?

Services modularize robot functions.
Instead of having one colossal program trying to manage everything the robot does,
we break down tasks into individual services.
This approach has several advantages:

1. **Scalability**: As the robot's capabilities grow, new services can be added without
disturbing existing ones.
2. **Maintainability**: If there's a bug or an issue, it's isolated to a particular service,
making troubleshooting easier.
3. **Efficiency**: Services can run concurrently, utilizing the multi-core capabilities of
platforms like the Brain.

## The Heartbeat of Amiga: Key Services

- [**Canbus**](../canbus_service/): Manages the robot's motors.
It's like the nervous system, transmitting movement commands and receiving feedback.
- [**Oak**](../oak_service/): The eyes and balance of the robot.
It streams imagery and provides IMU data, crucial for services like Filter and Controller.
- [**GPS**](../gps_service/): The robot's global positioning sense.
It knows where the Amiga is in the world.
- [**Filter (UKF)**](../filter_service/): Acts as the robot's sense of self-awareness.
By using IMU data from the OAK service, wheel odometry from CANBUS, and global positioning from GPS,
it estimates the state of the robot.
- [**Recorder**](../recorder_service/): The memory of the robot.
It logs data, ensuring we can revisit past operations or analyze performance.
- [**Controller**](../controller_service/): The brain of the operation.
It uses algorithms like pure pursuit and PID to guide the Amiga.
It makes decisions based on data from other services.

## How Do Services Talk to Each Other?

Imagine a bustling city where everyone has a job. The mail carrier brings letters (data),
the traffic cop (Controller) guides vehicles (services), and everyone communicates to ensure the city
runs smoothly.
Similarly, in the Amiga ecosystem:

- The **OAK** service streams visual and IMU data.
- The **Filter** service uses IMU data from OAK, wheel odometry from CANBUS, and global positioning
data from GPS to understand how the robot is moving.
- The **Controller** takes this movement data, combines it with its algorithms, and decides
the best way to move the robot.
- This decision is then passed to **CANBUS**, which communicates with the robot's motors to
execute the movement.

All these services run on the powerful Brain, allowing for efficient and concurrent operations.

## Architectural Diagram

Below is the architectural diagram that visually represents how these services interact:
![Screenshot from 2023-11-02 16-18-10](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/50e6c6ad-bb95-4d57-80ae-c97c8c4400dd)

This introduction is designed to be a primer.
Each service has its depths and intricacies, which you'll uncover as you dive deeper into Amiga development.
Enjoy the journey!
