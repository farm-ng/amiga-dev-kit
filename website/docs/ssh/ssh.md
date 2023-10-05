---
id: ssh
title: Access and Develop on the Brain
---

Users can remotely access and start developing on the brain via `ssh` access.

### Sign up for a farm-ng-user account

1. Request SSH access to our Fleet Custommer Support via email (fleet@farm-ng.com).

2. You will receive a confirmation email with a link for sign up along with instructions.
At this time, we only support Google accounts.
While not required, we highly encourage you to sign up using your institutional email.
If your institution does not use Google accounts, you may be able to create a
[Google](https://support.google.com/accounts/answer/27441?sjid=986712808663701328-NA#existingemail)
account using your existing institutional email address.

3. On our fleet manager webiste, click on **login**.

4. Select a Google account and proceed to the next page.
5. Follow the instructions to create a valid username.
Please note that once set, this username cannot be changed.
6. Click on "Set Name"

7. Now you will need to register an `SSH key`. An SSH key is like a secret handshake that lets your
computer talk safely to another computer
without using a password.
8. Open a terminal window on your computer and type:
```bash
cd ~ # This will take you to your home directory
ssh-keygen # This creates an ssh key
```
9. When prompted, press Enter twice to use a blank passphrase.
10. Use the following command to display your public SSH key
```bash
cat ~/.ssh/id_rsa.pub # Copy it with Shift + Ctrl + C
```
11. Copy your ssh key to the fleet manager website (`New SSH Key`)
12. Assign a name to that key (e.g., my-lenovo-pc)
13. Click on `Add SSH Key`
14. Email our Fleet Custommer Support to inform that you have signed up successfully.
They will grant you access to your robot.

Congratulations, you're done setting up your account!

:::tip Tip
Each SSH key corresponds to a single PC.
If you need to access the Amiga from multiple PCs, you will need to repeat steps 7-13 for each PC.
:::

### Accessing the brain
You can access the brain via a terminal or VS Code.

#### Terminal
Connecting to your robot via the terminal is simple.
Open a terminal window and type:
```bash
ssh farm-ng-user-<your-farm-ng-username>@<robot-name>
# e.g., farm-ng-user-john-doe@dubnium-durian
```

#### VS Code
1. Click on the "Open a Remote Window" button on the bottom left corner of your VS Code screen
2. Click on "Connect to Host"
3. Click on "Configre SSH Hosts"
4. Click on the first option that pops up (/home/user/.ssh/config)
5. Add the following lines to your file:
```bash
Host boron-banana
  HostName boron-banana
  User farm-ng-user-gui
  ```
6. Save and close the document
7. Click on "Open a Remote Window" again (same as Step 1)
8. Select the host
9. Hit Enter if asked to continue

Congratulations, you are connected to your robot via SSH
