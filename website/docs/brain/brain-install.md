---
id: brain-install
title: Brain ADK Install
---

# Brain ADK Installation

[![PyPI version](https://badge.fury.io/py/farm-ng-amiga.svg)](https://pypi.org/project/farm-ng-amiga)

## Install from pip [recommended]

:::tip
We strongly recommend running the brain SDK applications in a virtual
environment to avoid conflicts with other packages / versions
installed on your system.
Though this is not a requirement and you are welcome to decide
how/where to install.
:::

### Setup environment

If you want to install [`farm-ng-amiga`](https://pypi.org/project/farm-ng-amiga) in a virtual environment:

Install `pip3` & `virtualenv`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="linux" label="Linux" default>

```bash
sudo apt-get install python3-pip
sudo pip3 install virtualenv
```

</TabItem>
<TabItem value="macos" label="MacOs">

```bash
brew install python3
# to check if the installation was successful input command
pip --version
sudo pip3 install virtualenv
```

</TabItem>
</Tabs>

Start a virtual environment

```bash
# assuming you're in the directory where you want to create your
# `venv`
python3 -m venv venv
source venv/bin/activate
```

[optional] when you want to exit / re-enter your `venv`

```bash
deactivate # exit
source venv/bin/activate # re-enter, assuming you're in the root
# containing `venv/`
```

### Package install

Now install the package with `pip`

:::warning notice
Currently the `farm-ng-core` wheel must be built from source on MacOS.
Please use the correct tab for your OS.
For Amiga Brains, please follow the `Linux` instructions.
:::

<Tabs>
<TabItem value="linux" label="Linux" default>

```bash
pip install --upgrade pip
pip install --upgrade setuptools
pip3 install farm-ng-amiga
```

</TabItem>
<TabItem value="macos" label="MacOs">

```bash
# Clone the farm-ng-core repo
git clone https://github.com/farm-ng/farm-ng-core.git

# Checkout the correct release and update submodules
cd farm-ng-core/
git checkout v2.0.0
git submodule update --init --recursive
cd ../

# [Optional] Upgrade some deps
pip install --upgrade pip
pip install --upgrade setuptools wheel

# Build farm-ng-core from source
cd farm-ng-core/
pip install .
cd ../

# Install farm-ng-amiga wheel, using farm-ng-core built from source
pip install --no-build-isolation farm-ng-amiga
```

</TabItem>
</Tabs>

#### Check installed version

You can check the installed version

```bash
pip3 list | grep farm-ng

# You should see something like:
# farm-ng-amiga      2.0.0
# farm-ng-core       2.0.0
# farm-ng-package    0.1.3
```

### Package updates

As new releases come out, you can keep your farm-ng packages up
to date

```bash
pip3 install farm-ng-package --upgrade
pip3 install farm-ng-core --upgrade
pip3 install farm-ng-amiga --upgrade
```

## Install from source [advanced]

### Clone the repository

To install the
[`farm-ng-amiga`](https://github.com/farm-ng/farm-ng-amiga)
package and test the available examples, start by cloning the
repo

```bash
git clone https://github.com/farm-ng/farm-ng-amiga.git
cd farm-ng-amiga/
```

:::tip
If you want to clone with `git` instead of `https`:

```bash
git clone git@github.com:farm-ng/farm-ng-amiga.git
```

> NOTE: This requires that you have an ssh key set up.<br/>
> See [farm-ng Github 101 - Set up an SSH key](/docs/support/github-101.md#set-up-an-ssh-key)
> for more information and instructions.
:::

Keep the repo up-to-date with:

```bash
# from farm-ng-amiga/ dir
git checkout main
git pull
```

### Build the package

- Install `pip3` & setup a `virtualenv` (shown above)
- Create and install the ``farm-ng-amiga`` Python package

```bash
# install to system
pip install --upgrade pip
pip install --upgrade setuptools
pip3 install .
```

```bash
# or for development mode
pip3 install -e .[dev]
```
