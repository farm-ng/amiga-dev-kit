---
id: amiga-dev
title: Amiga Development 101
---

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

- [**Canbus**](/docs/concepts/canbus_service/): Manages the robot's motors.
It's like the nervous system, transmitting movement commands and receiving feedback.
- [**Oak**](/docs/concepts/oak_service/): The eyes and balance of the robot.
It streams imagery and provides IMU data, crucial for services like Filter and Track Follower.
- [**GPS**](/docs/concepts/gps_service/): The robot's global positioning sense.
It knows where the Amiga is in the world.
- [**Filter (UKF)**](/docs/concepts/filter_service/): Acts as the robot's sense of self-awareness.
By using IMU data from the OAK service, wheel odometry from CANBUS, and global positioning from GPS,
it estimates the state of the robot.
- [**Recorder**](/docs/concepts/recorder_service/): The memory of the robot.
It logs data, ensuring we can revisit past operations or analyze performance.
- [**Track Follower**](/docs/concepts/track_follower_service/): The brain of the operation.
It uses algorithms like pure pursuit and PID to guide the Amiga.
It makes decisions based on data from other services.

## How Do Services Talk to Each Other?

Imagine a bustling city where everyone has a job. The mail carrier brings letters (data),
the traffic cop (Track Follower) guides vehicles (services),
and everyone communicates to ensure the city runs smoothly.
Similarly, in the Amiga ecosystem:

- The **OAK** service streams visual and IMU data.
- The **Filter** service uses IMU data from OAK, wheel odometry from CANBUS, and global positioning
data from GPS to understand how the robot is moving.
- The **Track Follower** takes this movement data, combines it with its algorithms, and decides
the best way to move the robot.
- This decision is then passed to **CANBUS**, which communicates with the robot's motors to
execute the movement.

All these services run on the powerful Brain, allowing for efficient and concurrent operations.

## Architectural Diagram

Below is the architectural diagram that visually represents how these services interact:
![amiga_brain-1](https://github.com/farm-ng/amiga-dev-kit/assets/5157099/a7d5d95f-a94d-40a9-8df0-3c0c9084c2fa)

This introduction is designed to be a primer.
Each service has its depths and intricacies, which you'll uncover as you dive deeper into Amiga development.
Enjoy the journey!

## Open Source Code Examples

Diving into Amiga robot development is made significantly easier with our collection of over
30 open source Python code examples.
These examples are meticulously designed to cater to a wide range of skill levels, from beginners
to advanced developers, ensuring that everyone can find a suitable starting point for their journey.
By exploring these examples, you'll gain hands-on experience with our API, learning how to effectively
communicate with and leverage the robot's diverse sensors.

### Where to Run the Examples

Every code example comes with detailed instructions on how to run it, tailored to the specifics of
the example.
A key feature of our development environment is its flexibility; examples can be executed on your
local machine as well as directly on the Amiga's brain.
This adaptability is essential for developers who wish to work within their own environments or
need to manage operations across multiple robots.

#### Running Examples on Your Local Machine

To run examples on your local PC you need to either be connected to the same Wifi network of your Amiga
or set up [**Tailscale**](/docs/ssh/README.md#recommended-configure-cross-network-access)
for cross-network access.

For either case, you must modify the `host` field on the `service_config.json` file (or its equivalent).

If you're on the same Wifi network of your Amiga, you can change the `host` field from `localhost` to
your Amiga's local IP address (e.g., 192.168.1.29).
Make sure to check your Amiga's local IP address on the "Wifi" menu on the brain.

On the other hand, if you're on a different Wifi network, the `host` field should be changed from
`localhost` to your robot's unique tailscale name (e.g., `element-vegetable.tail0be07.ts.net`).
This ensures that your gRPC client can successfully connect to the robot, facilitating seamless
interaction and data exchange.

Notice how we change the `host` field here from `localhost` to `element-vegetable.tail0be07.ts.net`:

```json
{
    "name": "filter",
    "port": 20001,
    "host": "element-vegetable.tail0be07.ts.net",
    "log_level": "INFO",
    "subscriptions": [
        {
            "uri": {
                "path": "/state",
                "query": "service_name=filter"
            },
            "every_n": 1
        }
    ]
}
```

#### Running Examples Directly on the Amiga's Brain

Most examples are also designed to run directly on the Amiga's brain, offering a straightforward
approach for developers working closely with the robot.
For these instances, the `host` field in the `service_config.json` file should remain as `localhost`.
It's important to note that examples requiring a user interface, such as the "track_plotter" example,
cannot be run on the brain due to its headless nature.
These exceptions are clearly stated; unless otherwise mentioned, you can assume that an example is
compatible with both local PC and the brain execution.
