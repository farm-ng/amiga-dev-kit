# amiga-dev-kit

[![Continuous Integration](https://github.com/farm-ng/amiga-dev-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/farm-ng/amiga-dev-kit/actions/workflows/ci.yml)
[![docs](https://github.com/farm-ng/amiga-dev-kit/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/farm-ng/amiga-dev-kit/actions/workflows/pages/pages-build-deployment)
[![Code Format](https://github.com/farm-ng/amiga-dev-kit/actions/workflows/format.yml/badge.svg)](https://github.com/farm-ng/amiga-dev-kit/actions/workflows/format.yml)

Welcome to the Amiga Development Kit!

Please check out the [Amiga Development Kit documentation](https://farm-ng.github.io/amiga-dev-kit/) for full context on this repository, where you'll find documentation, tutorials, & the API.

If you're just now learning about farm-ng and the Amiga robot, check out our website:

### https://farm-ng.com/

The Amiga, and accompanying development kit, is a [toolset](https://farm-ng.com/collections/amiga-attachments) of hardware and software built by farm-ng to enable farmers, hackers, engineers, roboticists, or anyone with a vision of creating ruggedized, waterproof, outdoor robotic rover applications.

## Directory structure

### Brain

See [brain/](/brain/) for instructions on building the `farm_ng` lib for the brain and example applications for interacting with the [farm-ng brain](https://farm-ng.github.io/amiga-dev-kit/docs/brain/).

### Circuitpy

See [circuitpy/](/circuitpy/) for microcontroller applications of the farm-ng ADK.
Instructions are documented on the [Amiga Development Kit](https://farm-ng.github.io/amiga-dev-kit) website.


## Cloning the Amiga Development Kit

Clone this repository to work with the Amiga from micro-controllers or your personal computer (Mac/Linux/Windows).

```bash
cd <to_your_base_directory>
git clone git@github.com:farm-ng/amiga-dev-kit.git
```

### Develop using PyCharm

In Pycharm, you can:
* Create a new project
* Use the menu: `VCS` -> `Checkout From Version Control` -> `Git`
* Enter the github SSH URL and set the directory
  * Now the project will manage the github connection and venv for you
