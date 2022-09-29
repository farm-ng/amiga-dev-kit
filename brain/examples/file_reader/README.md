# Setup

Create first a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

# Install

Clone the repo

```bash
git clone https://github.com/farm-ng/amiga-dev-kit.git
git checkout demo-lleida-reader
```

Go to the brain sdk directory and install

```bash
cd amiga-dev-kit/brain
pip install -e .
```

Check the version

```bash
python -c "import farm_ng; print(farm_ng.__version__)"
```

# Run example

```bash
cd examples/file_reader
```

Specify the file (download before)

```bash
python main --file-name events_09162022160753_000000.bin
```
