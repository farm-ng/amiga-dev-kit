# Amiga Brain Camera example

1. Install the dependencies

```bash
cd brain/examples/oak/
pip3 install -r requirements.txt
```

2. Execute the Python script

```bash
python3 main.py --port 50051
```

3. Customize the run

```bash
python3 main.py --help

usage: amiga-camera-app [-h] --port PORT [--address ADDRESS] [--stream-every-n STREAM_EVERY_N]

optional arguments:
  -h, --help            show this help message and exit
  --port PORT           The camera port.
  --address ADDRESS     The camera address
  --stream-every-n STREAM_EVERY_N
                        Streaming frequency
```
