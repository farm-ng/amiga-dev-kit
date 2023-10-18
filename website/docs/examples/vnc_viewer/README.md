---
id: vnc-viewer
title: Using a VNC Viewer
---

If you want to see the screen of the Amiga and interact with it from a laptop or dev station,
use a remote desktop / VNC viewing program.
There are an abundance of free VNC viewing programs available, so feel free to use your preferred tool.

If you don't have a preferred tool, an option for each OS includes:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="linux" label="Linux" default>

On Linux, you can use [Remmina](https://remmina.org)

Follow the installation instructions at [Remmina Install](https://remmina.org/how-to-install-remmina/#ubuntu).

Then to connect:

- Open Remmina
- Use `VNC` as the connection type.
- Enter the IP address of your brain

</TabItem>
<TabItem value="macos" label="MacOs" default>

On Mac, you can connect directly through you Safari browser.

- Open Safari, then where you type the url enter:

```bash
vnc://<ip-address> # Enter chosen amiga ip-address
# Then press enter/return
```

</TabItem>
<TabItem value="windows" label="Windows" default>

On Windows, you can use [Real VNC Lite](https://www.realvnc.com/en/connect/plan/lite/).
This is there free version, but it still requires creating an account.
There are likely other free VNC remote desktop tools that do not require an account.

See download at: [Download VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

Then to connect:

- Open VNC VIewer
- Enter the IP address of your brain

</TabItem>
</Tabs>

:::tip
If you have tailscale enabled, you may be able to use the Amiga name instead of the IP address
:::

- Finally enter the password when prompted

> Contact us by e-mail at `support@farm-ng.com` for the VNC access password.
