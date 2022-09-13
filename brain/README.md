# farm-ng Brain ADK


### Install

We recommend running the brain ADK applications in a virtual environment to avoid conflicts with other packages / versions installed on your system.
Though this is not a requirement and you are welcome to decide how/where to install.

Install `pip3` & `virtualenv`:
```bash
sudo apt-get install python3-pip
sudo pip3 install virtualenv
```

Start a virtual environment:
```bash
# assuming you're already in the amiga-dev-kit/ directory
cd brain/
python3 -m venv venv
source ./venv/bin/activate
```

Create and install the `farm_ng` (brain) Python package
```bash
# install to system
pip3 install .

# or for development mode
pip3 install -e .[dev]
```

Verify that you have installed the package
```bash
python3 -c "import farm_ng; print(farm_ng.__version__)"
```
