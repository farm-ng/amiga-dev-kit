---
id: ssh
title: Access and Develop on the Brain
---

Users can remotely access and start developing on the brain via `SSH` access.

### Sign up for a farm-ng-user account

#### 1. Request SSH access to our Fleet Customer Support via email (fleet@farm-ng.com)

#### 2. You will receive a confirmation email with a link for sign-up along with instructions

At this time, we only support Google accounts.
While not required, we highly encourage you to sign up using your institutional email.
If your institution does not use Google accounts, you may be able to create a
[Google](https://support.google.com/accounts/answer/27441?sjid=986712808663701328-NA#existingemail)
account using your existing institutional email address.

#### 3. On our fleet manager website, click on **login**

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

#### 9. When prompted, press Enter twice to use a blank passphrase

#### 10. Use the following command to display your public SSH key

```bash
cat ~/.ssh/id_rsa.pub # Copy it with Shift + Ctrl + C
```

#### 11. Copy your ssh key to the fleet manager website (`New SSH Key`)

#### 12. Assign a name to that key (e.g., my-lenovo-pc)

#### 13. Click on `Add SSH Key`

![Screenshot from 2023-10-05 11-44-09](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/2fe86af2-6156-4fda-bef8-7bb803d5ff52)

#### 14. Email our Fleet Custommer Support to inform that you have signed up successfully

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

You should now be connected to your robot!

#### VS Code

#### 1. Click on the "Open a Remote Window" (blue button on the bottom left corner of your VS Code screen)

![Screenshot from 2023-10-05 13-57-39](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/24d84831-7bca-4923-9b2d-ce2abcce3ea7)

#### 2. Click on "Connect to Host"

![Screenshot from 2023-10-05 13-57-47](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/87a15980-5b98-46f0-9e83-3c80e752b279)

#### 3. Click on "Configure SSH Hosts"

![Screenshot from 2023-10-05 13-57-56](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/57aa9506-1738-4daf-9848-7b3c9af80ff1)

#### 4. Click on the first option that pops up (/home/user/.ssh/config)

![Screenshot from 2023-10-05 13-58-05](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/6a577080-a052-4a90-9ffb-491d7bb7c2ed)

#### 5. Add the following lines to your file

```bash
Host boron-banana
  HostName boron-banana
  User farm-ng-user-<username>
  # Replace <username> with your username (e.g., john-doe)
  ```

![Screenshot from 2023-10-05 13-58-32](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/82ed45cf-82e1-46c4-9220-33e2338cc6d0)

#### 6. Save and close the document

#### 7. Click on "Open a Remote Window" again (same as Step 1)

#### 8. Select the host

#### 9. Hit Enter if asked to continue

Congratulations, you are connected to your robot via SSH
