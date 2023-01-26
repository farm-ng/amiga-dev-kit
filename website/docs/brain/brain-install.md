---
id: brain-install
title: Brain ADK Install
---

# Brain ADK Installation

[![PyPI version](https://badge.fury.io/py/farm-ng-amiga.svg)](https://pypi.org/project/farm-ng-amiga)

## Install


### Clone the repository

To install the [`farm-ng-amiga`](https://github.com/farm-ng/farm-ng-amiga) package and test the available examples, start by cloning the repo:

```bash
cd <to_your_base_directory>
git clone git@github.com:farm-ng/farm-ng-amiga.git
cd farm-ng-amiga/
```

Keep the repo up-to-date with:

```bash
# from farm-ng-amiga/ dir
git checkout main
git pull
```

:::caution troubleshooting
If you have trouble cloning this public repo, Github is likely not able to authenticate your SSH public key.

If this is the case, you can either:
1. [Create a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. [Connect to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
3. Clone with `https`. E.g.,
```bash
git clone https://github.com/farm-ng/farm-ng-amiga.git
```
:::

### [Optional] Set up virtual environment

:::tip
We recommend running the brain SDK applications in a virtual environment to avoid conflicts with other packages / versions installed on your system.
Though this is not a requirement and you are welcome to decide how/where to install.
:::

If you want to install [`farm-ng-amiga`](https://pypi.org/project/farm-ng-amiga) in a virtual environment:

Install `pip3` & `virtualenv`:


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


Start a virtual environment:

```bash
# assuming you're in the directory where you want to create your `venv`
python3 -m venv venv
source venv/bin/activate
```

Later, when you want to exit / re-enter your `venv`:
```bash
deactivate # exit
source venv/bin/activate # re-enter, assuming you're in the root containing `venv/`
```

### Package install
Now install the package with `pip`

```bash
pip3 install farm-ng-amiga
```

You can check the installed version with:

```bash
pip3 list | grep farm-ng

# You should see something like:
# farm-ng-amiga      0.0.3
# farm-ng-core       0.1.2
# farm-ng-package    0.1.1
```

### Package updates

As new releases come out, you can keep your farm-ng packages up to date with:

```bash
pip3 install farm-ng-package --upgrade
pip3 install farm-ng-core --upgrade
pip3 install farm-ng-amiga --upgrade
```


### [Advanced] From source

If you want to edit the package, or contribute, you can install from source.

Install `pip3` & setup a `virtualenv` (shown [above](#optional-set-up-virtual-environment))

Create and install the ``farm-ng-amiga`` Python package

```bash
cd farm-ng-amiga/py/
# install to system
pip3 install .
```

```bash
# or for development mode
pip3 install -e .[dev]
```
