# Amiga Brain Camera example

This example acts as an Oak camera client.
This example assumes you have a [farm-ng brain](https://farm-ng.github.io/amiga-dev-kit/docs/brain/) running Oak cameras and that your PC is on the same local network as the brain.

## Instructions

1. Install the [farm-ng Brain ADK package](./../../README.md)

2. Install the example's dependencies

::tip
It is recommended to also install these dependencies and run the example in the brain ADK virtual environment.
::

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd brain
pip3 install -r examples/oak/requirements.txt
```

3. Execute the Python script
```bash
python3 examples/oak/main.py --port 50051
```

4. Customize the run
```bash
python3 examples/oak/main.py --help

# usage: amiga-camera-app [-h] --port PORT [--address ADDRESS] [--stream-every-n STREAM_EVERY_N]

# optional arguments:
#   -h, --help            show this help message and exit
#   --port PORT           The camera port.
#   --address ADDRESS     The camera address
#   --stream-every-n STREAM_EVERY_N
#                         Streaming frequency
```
