---
id: brain-apps
title: Developing Custom Applications
---

# Developing Custom Applications

#### Quick Tips
* The Amiga user is able to install APT packages. Edit the "entry.sh" script in the sample git repository.
* We leverage a venv per application. The contents of requirements.txt will be installed by the bootstrap.sh script.
* If you've updated the requirements.txt remove the hidden ".lock" before relaunching the app from the Brain UI.
* You may use VSCode remote development/containers to edit directly on the Amiga brain as well.


#### Initial Configuration
To make ssh easier, we'll add some configuration to our ssh on the workstation.

First add the following to your .ssh/config utilizing the IP addess displayed on the bottom right of the brain display:
```bash
Host amiga
    HostName <ip address>
    Port 22
    User amiga
    StrictHostKeyChecking no
```

Let’s copy our keys to the robot as well (you may need to do this any time you are working with a new robot)
```bash
    ssh-copy-id amiga
```

Now you can ssh to the robot with:
```bash
    ssh amiga
    exit
```

Open the "Hello World" workspace by ... You may use an alternate editor of your choice. If you do, the sample application for publishing an app is located at amiga-dev-kit/brain/examples/hello 

Using a terminal window, change to the git repository file cloned above. 

#### Live Code Syncing 

Now we'll start a synchronization session that will mirror the code in this directory to an Apps directory (/data/apps) on the Amiga Brain. Note: This directory is persistent across reboots.

Our current sync process leverages Mutagen, the sync.sh script will set this up for you. Please provide your sudo password if required. This will copy the Mutagen binary and agents to your local filesystem.
Additional documentation regarding Mutagen may be viewed at: [Mutagen](https://mutagen.io/documentation/introduction).

To start the synchronization process in the background:
```bash
    ./sync.sh -s start
```

To stop the synchronization process:
```bash
    ./sync.sh -s stop
```

Finally to view the status:
```bash
    ./sync.sh -s status
```

While the sync process is running, any changes are mirrored to the Amiga Brain.


