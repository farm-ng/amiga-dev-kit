---
id: tutorial-introduction
title: 00 - Introduction
---
# Tutorial Introduction

This first tutorial is designed to provide you with:

1. References and the basic background knowledge that your Amiga app development will be based on.
2. An understanding of the [**`amiga-app-template`**](https://github.com/farm-ng/amiga-app-template) you will use as the base of your custom apps.

## Your system

The app development process works best on Ubuntu 20.04, but we also support Windows and Mac systems.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="linux" label="Linux" default>
The instructions should work as written on native Linux machines!
</TabItem>

<TabItem value="windows" label="Windows" default>

You should run this with windows Subsystem for Linux (WSL).
This is a well supported and documented environment.

[**Install WSL**](https://learn.microsoft.com/en-us/windows/wsl/install)

You should install **WSL2**, using the **Ubuntu 20.04** distribution.

One option: [**Ubuntu 20.04 from Microsoft store**](https://apps.microsoft.com/store/detail/ubuntu-2004/9N6SVWS3RX71)

For the most part, you should be able to use WSL to run the native Linux commands.

</TabItem>
<TabItem value="macos" label="Mac">

Everything should work as with Linux, though there may be some unmet dependencies you can install with `brew`.
E.g.,

```bash
brew install wget
```

Some of the scripts may fail, and we're working through that.
For instance, if you come into an `md5sum` issue, you'll need to change `md5sum` to `md5`.

We are actively working on this support, so please reach out with an issues you encounter so we can help you through them and resolve it promptly!

</TabItem>
</Tabs>
