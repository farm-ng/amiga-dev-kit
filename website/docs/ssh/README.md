---
id: ssh
title: Access and Develop on the Brain
---

Users can remotely access and start developing on the brain via `SSH` access.

### Sign up for a farm-ng-user account

#### 1. Email Customer Support (support@farm-ng.com) with subject line "Request device access"

#### 2. You will receive a confirmation email with a link for sign-up along with instructions

At this time, we only support Google accounts.
While not required, we highly encourage you to sign up using your institutional email.
If your institution does not use Google accounts, you may be able to create a
[Google](https://support.google.com/accounts/answer/27441?sjid=986712808663701328-NA#existingemail)
account using your existing institutional email address.

#### 3. On our Fleet Manager website, click on **login**

![Screenshot from 2023-10-05 11-37-02](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/16afce2a-f338-44a6-9757-f1eadce9a9bb)

#### 4. Select a Google account and proceed to the next page

![Screenshot from 2023-10-05 11-38-29](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/ac571d4b-303e-4956-a8fa-bb324e40fe48)

#### 5. Follow the instructions to create a valid username

![Screenshot from 2023-10-05 11-39-25](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/a02ed7b7-5781-46b0-9847-60a45bc203cf)
Please note that once set, this username cannot be changed.

#### 6. Click on "Set Name"

#### 7. Now you will need to register an `SSH key`

An SSH key is like a secret handshake that lets your
computer talk safely to another computer
without using a password.

#### 8. Open a terminal window on your computer and type

```bash
cd ~ # This will take you to your home directory
ssh-keygen # This creates an ssh key
```

:::tip TIP
You can skip this step if you already have a `~/.ssh/id_rsa.pub` public key
on your computer that you'd like to use.
:::

#### 9. When prompted, press Enter twice to use a blank passphrase

#### 10. Display your public SSH key

<Tabs>
<TabItem value="linux" label="Linux" default>

```bash
cat ~/.ssh/id_rsa.pub # Copy it with Shift + Ctrl + C
```

</TabItem>

<TabItem value="windows" label="Windows" default>

a. Open the command prompt (Windows Key + R -> cmd -> Enter)

b. On the terminal window type:

```bash
cd .ssh
start .
```

c. Hit **Enter**

d. This will open the folder where your `SSH` key was saved.

e. Open the `id_rsa.pub` on a text editor such as Notepad.

f. Copy the entire content of the file (including ssh-rsa) and paste in the website (Step 11)
</TabItem>

<TabItem value="macos" label="MacOS" default>

```bash
cat ~/.ssh/id_rsa.pub # Copy it with Shift + Ctrl + C
```

</TabItem>
</Tabs>

#### 11. Copy your SSH key (including ssh-rsa) to the Fleet Manager website (`New SSH Key`)

#### 12. Assign a name to that key (e.g., my-lenovo-pc)

#### 13. Click on `Add SSH Key`

![Screenshot from 2023-10-05 11-44-09](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/2fe86af2-6156-4fda-bef8-7bb803d5ff52)

:::info INFO
Each SSH key corresponds to a single PC.
If you need to access the Amiga from multiple PCs, you will need to repeat steps 7-13 for each PC.
:::

#### 14. Inform Customer Support that you have signed up successfully

Reply on the "Request device access" email thread. Provide the Google account email you used to sign up in Fleet Manager.

Customer Support will grant you access to your robot and reply with additional instructions for remote access (see next
section).

### (Recommended) Configure cross-network access

You should now be able to SSH into the Amiga as described in the next sections, but **only if your PC is connected to
the same Wifi network as your Amiga.** With a small amount of additional setup, you can use
[Tailscale](https://tailscale.com/) for secure remote access to your Amiga from any network.

#### 1. Create a Tailscale network with your development machines

:::info INFO
For simplicity, we describe here how an individual user can create their own private Tailscale network (tailnet). If your
development machines are already on a tailnet, or if you prefer to set up a larger tailnet for your team, you are free to
do so.
:::

Follow the [Tailscale quickstart](https://tailscale.com/kb/1017/install/) guide. Note:
 * Sign up using the same Google account you use to login to Fleet Manager.
 * You can use Tailscale's free plan to provide remote access to up to three of your machines, for example: a laptop, a
   workstation, and a mobile phone/tablet. The Amiga will not count against your limit.

#### 2. Add the Amiga to your Tailscale network

In your access confirmation email from farm-ng Support, you should have received an invite link to share the Amiga with
you via your Tailscale network. Click the link and sign in to your Tailscale account to accept the invite. In the
[Machines](https://login.tailscale.com/admin/machines) page of the Tailscale admin console, you should see a new machine
listed with hostname of the form `[element]-[fruit]`. That's your Amiga!

The invite link works for a limited amount of time. If you need a new one, contact support@farm-ng.com.

#### 3. Connect your development machine

In a terminal window, run the following commands:

```bash
sudo tailscale up
tailscale status
```

This will output a list of machines on your Tailscale network, similar to:

```bash
100.95.129.75   my-laptop            my-username@ linux   -
100.77.194.143  my-phone             my-username@ android -
100.127.188.107 [element-fruit].[tailnet-name].ts.net support-username@     linux -
```

In this example, the bottom row represents your Amiga. You will access it via either:
 * IP address: a stable IP of the form `100.x.y.z` assigned on your Tailscale network.
 * Fully qualified domain name (FQDN): of the form `[element-fruit].[tailnet-name].ts.net`.

### (Recommended) Configure your SSH Connections

Now that you have an `SSH` key and remote connectivity to your Amiga, let's configure your SSH connections.

This can be done via the terminal or VS Code.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="linux" label="Linux" default>

Open a terminal window and type the following command:

```bash
gedit ~/.ssh/config # This will open your .ssh/config
# Here we're using gedit as our text manager, feel free to choose another one (e.g., vi, nano)
```

</TabItem>

<TabItem value="windows" label="Windows" default>

a. Open the command prompt (Windows Key + R -> cmd -> Enter)

b. On the terminal type:

```bash
cd .ssh
copy nul config
start .
```

c. Hit **Enter**

d. This will create a file named config and open the folder it's stored.

e. Open the file using a text editor such as notepad.

</TabItem>

<TabItem value="macos" label="MacOS" default>

Open a terminal window and type the following command:

```bash
gedit ~/.ssh/config # This will open your .ssh/config
# Here we're using gedit as our text manager, feel free to choose another one (e.g., vi, nano)
```

</TabItem>

<TabItem value="vscode" label="VS Code">

#### 1. Click on the "Open a Remote Window" (blue button on the bottom left corner of your VS Code screen)

![Screenshot from 2023-10-05 13-57-39](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/24d84831-7bca-4923-9b2d-ce2abcce3ea7)

#### 2. Click on "Connect to Host"

![Screenshot from 2023-10-05 13-57-47](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/87a15980-5b98-46f0-9e83-3c80e752b279)

#### 3. Click on "Configure SSH Hosts"

![Screenshot from 2023-10-05 13-57-56](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/57aa9506-1738-4daf-9848-7b3c9af80ff1)

#### 4. Click on the first option that pops up (/home/user/.ssh/config)

![Screenshot from 2023-10-05 13-58-05](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/6a577080-a052-4a90-9ffb-491d7bb7c2ed)

</TabItem>
</Tabs>

Add the following lines to your file:

```bash
Host <robot-name>
  HostName <ip-address>
  User farm-ng-user-<username>
```

Replace:

* `<robot-name>` with your robot name (of the form `element-vegetable`).
* `<ip-address>` with the robot's Tailscale FQDN (or IP address) reported by `tailscale status` in  the previous section.
  If you have not set up remote access via Tailscale, and your PC and Amiga are connected to the same Wifi network, you
  may use the Amiga's local IP address instead.
* `<username>` with the username you chose on your first login to Fleet Manager (e.g., `john-doe`).

Make sure to save the file before you close it!

:::tip TIP
You can download [**Fing**](https://www.fing.com/products/fing-app) to scan
all devices connected to your network and figure out your robot's local IP address.
:::


### Accessing the brain

You can access the brain via a terminal (**Linux, Windows or MacOS**) or VS Code.

<Tabs>
<TabItem value="terminal" label="Terminal" default>

Connecting to your robot via the terminal is simple.
Open a terminal window and type:

```bash
ssh farm-ng-user-<your-farm-ng-username>@<ip-address>
# e.g., farm-ng-user-john-doe@10.0.4.116
```

:::tip TIP
If you have configured your SSH Connections (`.ssh/config`)
you can connect to the robot by simply typing:

```bash
ssh <robot-name>
# Make sure to replace <robot-name> (including the < >) with your actual robot name
```

:::

You should now be connected to your robot!

</TabItem>

<TabItem value="vscode" label="VS Code">

#### 1. Click on the "Open a Remote Window" (blue button on the bottom left corner of your VS Code)

![Screenshot from 2023-10-05 13-57-39](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/24d84831-7bca-4923-9b2d-ce2abcce3ea7)

#### 2. Select the host

#### 3. Hit Enter if asked to continue

Congratulations, you are connected to your robot via SSH!

</TabItem>
</Tabs>

## Check out our Examples

Now that you know how to connect to your Amiga, start developing your own applications!

We have plenty of examples to help you understand how to communicate with our services,
access data, and submit requests (e.g., commanding your Amiga to follow a path).
Make sure to check the [**examples here**](../examples/examples-index).
