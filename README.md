# amiga-dev-kit

Welcome to the Amiga Development Kit!

Please check out the [Amiga Development Kit documentation](https://farm-ng.github.io/amiga-dev-kit/) for full context on this repository, where you'll find documentation, tutorials, & the API.

If you're just now learning about farm-ng and the Amiga robot, check out our website:

### https://farm-ng.com/

The Amiga, and accompanying development kit, is a [toolset](https://farm-ng.com/collections/amiga-attachments) of hardware and software built by farm-ng to enable farmers, hackers, engineers, roboticists, or anyone with a vision of creating ruggedized, waterproof, outdoor robotic rover applications.


## Cloning the Amiga Development Kit

Clone this repository to work with the Amiga from micro-controllers or your personal computer (Mac/Linux/Windows).

```bash
cd <to_your_base_directory>
git clone git@github.com:farm-ng/amiga-dev-kit.git
```

Create and install the `farm_ng` Python package

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

## Develop using PyCharm

In Pycharm, you can:
* Create a new project
* Use the menu: `VCS` -> `Checkout From Version Control` -> `Git`
* Enter the github SSH URL and set the directory
  * Now the project will manage the github connection and venv for you
