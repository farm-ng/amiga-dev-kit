---
id: overview
title: 00 - Installing Custom to Brain
---

To install your custom applications to the brain, there are a few steps.

The first is updating the manifest.json file:

```json
{
    "services": {
        "TEMPLATE_NAME": {
            "name": "TEMPLATE_NAME",
            "type": "app",
            "exec_cmd": "/mnt/managed_home/farm-ng-user-YOUR_USER_HERE/camera-streamer-kivy/entry.sh",
            "display_name": "My Custom App",
            "autostart": false
        }
    }
}
```

Begin by updating both instances of TEMPLATE_NAME to a unique name.
This name should not have spaces, we recommend using the same name as the repository name.

Second, "YOUR_USER_HERE" should be updated to the name of the user who initially installed the application.
This is the user name from fleet manager.

For example:
