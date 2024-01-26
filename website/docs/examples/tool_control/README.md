---
id: tool-control
title: Tool Control
---

# Amiga Tool Control example

:::danger Pre-release
Running this example has minimum release versions of:

- brain: `AmigaOS v2.3.0 +`
- dashboard: `firmware v0.5.0 +`
- PC: `farm-ng-amiga v2.3.0+`

These may not yet be publicly available and are scheduled for release in early March 2024.
To request early access, please reach out to us at: [support@farm-ng.com](mailto:support@farm-ng.com)
:::

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
3. **[farm-ng Canbus Service Overview](/docs/concepts/canbus_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
4. **[Vehicle Twist example](/docs/examples/vehicle_twist/)**: It is recommended to have used the
Vehicle Twist example for motion control of the Amiga before controlling the tools.
:::

:::caution Warning
The tool control example will cause any tools connected to the Amiga to actuate when the dashboard
is in auto mode.
This includes H-bridges and PTOs.
Make sure the area is clear before running examples.
:::

The [**Tool Control Example**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/tool_control/main.py)
operates as a standalone Python script,
in which an `EventClient` to the farm-ng Canbus service running on an Amiga brain is created.

This script commands actuators (H-bridges & PTOs) based on keyboard inputs from the computer
on which you run the example.

You should run this example on your local PC, connected to the same local network as the brain
or linked to it through tailscale.

Ensure that a [**farm-ng brain**](/docs/brain/),
attached to an Amiga with at least one H-bridge or PTO device,
is actively running the canbus service.

## 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## 2. Install the example's dependencies

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

### Setup

:::important Recommended
Create a virtual environment
:::

```bash
python3 -m venv venv
source venv/bin/activate
```

### Install

```bash
cd py/examples/tool_control
pip install -r requirements.txt
```

## 3. Modify the Service Config

To command the robot tools from your laptop, by connecting with a `gRPC` client over Wifi,
you must change the `host` field in `service_config.json` from localhost to your robot's name
(e.g., `element-vegetable`).

```json
{
    "name": "canbus",
    "port": 6001,
    "host": "element-vegetable",
    "subscriptions": [
        {
            "uri": {
            "path": "/tool_statuses",
            "query": "service_name=canbus"
            },
            "every_n": 1
        }
    ],
    "log_level": "INFO"
}
```

## 4. Execute the Python script

```bash
python main.py --service-config service_config.json
```

If everything worked correctly you should now see a stream
of the statuses of all connected tools come up in your terminal!

## 5. Using the example

:::caution Reminder
To control tools using this example,
you must activate the `auto control` mode on your Amiga via the dashboard.
:::

### Key Combinations for Tool Control

Let's explore the key combinations used in the `tool_control_from_key_presses` function for
controlling various devices:

:::tip
It is recommended to double check the example code to confirm that
the following key mappings have not changed before you run the example.
:::

#### All devices passive

- **Spacebar**: Pressing this key sets all devices to passive mode and overrides any additional key presses.

#### H-Bridge Control

The H-Bridges are controlled using the numbers `0`, `1`, `2`, & `3`,
corresponding to H-Bridges `0`, `1`, `2`, & `3`,
along with the Up and Down arrow keys:

- **Up Arrow + [0/1/2/3]**: Moves the corresponding H-Bridges forward.
- **Down Arrow + [0/1/2/3]**: Moves the corresponding H-Bridges in reverse.
- **Up + Down Arrows + [0/1/2/3]**: Stops the corresponding H-Bridges.

#### PTO Control

PTOs are controlled with the keys `a`, `b`, `c`, & `d`,
corresponding to PTOs `0`, `1`, `2`, & `3`,
combined with the Left and Right arrow keys:

- **Left Arrow + [a/b/c/d]**: Moves the PTO forward.
- **Right Arrow + [a/b/c/d]**: Moves the PTO in reverse.
- **Left + Right Arrows + [a/b/c/d]**: Stops the PTO.

These key mappings allow for simultaneous control of multiple devices
through the **[Canbus Service](/docs/concepts/canbus_service/)** `/control_tools` API.

### Running with Twist control

You can also run this example alongside the
**[Vehicle Twist example](/docs/examples/vehicle_twist/)**
to control the tools and drive the robot at the same time.
The **[Canbus Service](/docs/concepts/canbus_service/)**
will synchronize the `Twist2d` commands with the `ActuatorCommands`
for simultaneous driving and tool control!

## 6. Code Overview

### `KeyboardListener`

We create a `KeyboardListener` class that wraps the
**[`pynput.keyboard`](https://pynput.readthedocs.io/en/latest/keyboard.html)**
for receiving and assembling a `set` of simultaneous key presses.

```python
class KeyboardListener:
    def __init__(self):
        self.pressed_keys = set()
        self.listener = keyboard.Listener(on_press=self.on_press, on_release=self.on_release)

    def on_press(self, key):
        try:
            key_name = key.char
        except AttributeError:
            key_name = key.name  # For special keys
        self.pressed_keys.add(key_name)

    def on_release(self, key):
        try:
            key_name = key.char
        except AttributeError:
            key_name = key.name  # For special keys
        self.pressed_keys.discard(key_name)

    def start(self):
        self.listener.start()

    def stop(self):
        self.listener.stop()
```

### `tool_control_from_key_presses`

This function maps the pressed `set` of pressed_keys to an `ActuatorCommands` proto message
that we can use to command the tools on the Amiga.

```python
def tool_control_from_key_presses(pressed_keys: set) -> ActuatorCommands:
    if 'space' in pressed_keys:
        print("Set all to passive with empty command")
        return ActuatorCommands()

    commands: ActuatorCommands = ActuatorCommands()

    # H-bridges controlled with 0, 1, 2, 3 & up / down arrows
    # up = forward, down = reverse, both = stop, neither / not pressed => omitted => passive
    if 'up' in pressed_keys and 'down' in pressed_keys:
        for hbridge_id in pressed_keys & {'0', '1', '2', '3'}:
            commands.hbridges.append(HBridgeCommand(id=int(hbridge_id), command=HBridgeCommandType.HBRIDGE_STOPPED))
    elif 'up' in pressed_keys:
        for hbridge_id in pressed_keys & {'0', '1', '2', '3'}:
            commands.hbridges.append(HBridgeCommand(id=int(hbridge_id), command=HBridgeCommandType.HBRIDGE_FORWARD))
    elif 'down' in pressed_keys:
        for hbridge_id in pressed_keys & {'0', '1', '2', '3'}:
            commands.hbridges.append(HBridgeCommand(id=int(hbridge_id), command=HBridgeCommandType.HBRIDGE_REVERSE))

    # PTOs controlled with a, b, c, d & left / right arrows
    # left = forward, right = reverse, both = stop, neither / not pressed => omitted => passive
    pto_id_mapping = {'a': 0x0, 'b': 0x1, 'c': 0x2, 'd': 0x3}
    pto_rpm: float = 20.0
    if 'left' in pressed_keys and 'right' in pressed_keys:
        for pto_char in pressed_keys & {'a', 'b', 'c', 'd'}:
            pto_id = pto_id_mapping[pto_char]
            commands.ptos.append(PtoCommand(id=pto_id, command=PtoCommandType.PTO_STOPPED, rpm=pto_rpm))
    elif 'left' in pressed_keys:
        for pto_char in pressed_keys & {'a', 'b', 'c', 'd'}:
            pto_id = pto_id_mapping[pto_char]
            commands.ptos.append(PtoCommand(id=pto_id, command=PtoCommandType.PTO_FORWARD, rpm=pto_rpm))
    elif 'right' in pressed_keys:
        for pto_char in pressed_keys & {'a', 'b', 'c', 'd'}:
            pto_id = pto_id_mapping[pto_char]
            commands.ptos.append(PtoCommand(id=pto_id, command=PtoCommandType.PTO_REVERSE, rpm=pto_rpm))

    return commands
```

### `control_tools`

In this example we use the `EventClient` with the `request_reply` method to send
an `ActuatorCommands` message on the `/control_tools` path at a regular interval.

```python
async def control_tools(service_config_path: Path, keyboard_listener: KeyboardListener) -> None:
    """Control the tools / actuators on your Amiga.

    Args:
        service_config_path (Path): The path to the canbus service config.
        keyboard_listener (KeyboardListener): The keyboard listener.
    """
    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())
    client: EventClient = EventClient(config)

    while True:
        # Send the tool control command
        commands: ActuatorCommands = tool_control_from_key_presses(keyboard_listener.pressed_keys)
        await client.request_reply("/control_tools", commands, decode=True)

        # Sleep for a bit
        await asyncio.sleep(0.1)
```

### `stream_tool_statuses`

We asynchronously stream the `ToolStatuses` message from the `canbus` service on the
`/tool_statuses` topic.

```python
async def stream_tool_statuses(service_config_path: Path) -> None:
    """Stream the tool statuses.

    Args:
        service_config_path (Path): The path to the canbus service config.
    """

    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())

    message: ToolStatuses
    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):
        print("###################")
        print(message)
```

### Run the tasks

We use the `asyncio.gather` method to allow running the two tasks,
(1) controlling the tools and (2) streaming the tool statuses,
simultaneously and asynchronously.

```python
async def run(service_config_path: Path, keyboard_listener: KeyboardListener):
    # Create tasks for both functions
    tasks: list[asyncio.Task] = [
        asyncio.create_task(control_tools(service_config_path, keyboard_listener)),
        asyncio.create_task(stream_tool_statuses(service_config_path)),
    ]
    await asyncio.gather(*tasks)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="Command and monitor tools with the canbus service.")
    parser.add_argument("--service-config", type=Path, required=True, help="The canbus service config.")
    args = parser.parse_args()

    keyboard_listener = KeyboardListener()
    keyboard_listener.start()

    try:
        asyncio.run(run(args.service_config, keyboard_listener))
    except KeyboardInterrupt:
        pass
    finally:
        keyboard_listener.stop()
```

**Congrats you are done!**
