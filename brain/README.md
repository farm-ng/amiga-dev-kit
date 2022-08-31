# farm-ng Brain ADK


### Install

The brain ADK should be run in a virtual environment.

If you need pip & virtual env installed:

```bash
sudo apt-get install python3-pip
sudo pip3 install virtualenv


```

```bash
# install to system
cd amiga-dev-kit/brain/
pip3 install -e .

# or for development mode
pip3 install -e .[dev]
```


Create and install the `farm_ng` Python package

```bash
# install to system
cd amiga-dev-kit/brain/
pip3 install -e .

# or for development mode
pip3 install -e .[dev]
```

Verify that you have installed the package

```bash
python3 -c "import farm_ng; print(farm_ng.__version__)"
```
