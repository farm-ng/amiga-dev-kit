# amiga-dev-kit

[![docs](https://github.com/farm-ng/amiga-dev-kit/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/farm-ng/amiga-dev-kit/actions/workflows/pages/pages-build-deployment)
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/YTCyGsEtBU)

Welcome to the Amiga Development Kit!

Please check out the [Amiga Development Kit documentation](https://farm-ng.github.io/amiga-dev-kit/) for full context on this repository, where you'll find documentation, tutorials, & the API.

If you're just now learning about farm-ng and the Amiga robot, check out our website:

### https://farm-ng.com/

The Amiga, and accompanying development kit, is a [toolset](https://farm-ng.com/collections/amiga-attachments) of hardware and software built by farm-ng to enable farmers, hackers, engineers, roboticists, or anyone with a vision of creating ruggedized, waterproof, outdoor robotic rover applications.

## Directory structure

### Brain

See [brain/](/brain/) for instructions on building the `farm_ng` lib for the brain and example applications for interacting with the [farm-ng brain](https://farm-ng.github.io/amiga-dev-kit/docs/brain/).

### Circuitpy

   * Farm-ng's feather microcontroller kit's introduction/overview and buying page is at the [Amiga Development Kit](https://farm-ng.github.io/amiga-dev-kit) website.    
   * Farm-ng's github CircuitPython codebase is here: [circuitpy/](/circuitpy/).
      * After attaching a USB cable to the feather chip, follow instructions to get circuitpy onto the microcontroller board  [here](https://amiga.farm-ng.com/docs/dashboard/dashboard-fw#wired-amiga-application-updates).
   * Hardware setup of farm-ng's feather microcontroller and running farm-ng's codebase on the chip is [here](https://amiga.farm-ng.com/docs/mcu_kit/)
       * Once you copy your own or farm-ng's code onto the microcontroller, you can use vscode to just open the the root directory to actively work on the files there. Any `code.py` file in the root directory will automatically run, but in the terminal ^D will cause the microcontroller to restart code execution.
       * To develop on a laptop, you can use the `screen` program such that python print statements show up. Running `code.py` with `screen` is described [here](https://amiga.farm-ng.com/docs/mcu_kit/#loading-code-on-the-feather)

   

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
