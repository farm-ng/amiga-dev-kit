---
id: custom-troubleshooting
title: Custom Apps / Services Troubleshooting
---

:::warning
**Single Owner Limitation:** When a custom app or service is registered via the `manifest.json`,
it has a "single owner".
Only the app or service's owner can view service statuses and modify the code.
Other users must switch to the owner's account to gain these capabilities.

See [**Custom Apps / Services Ownership**](/docs/brain/app-ownership) for more information.
:::

## Debugging Apps / Services on the Launcher

### Viewing Logs and Outputs

Once your project is launched through the farm-ng-launcher,
you no longer have to run it as a standalone Python script.
Instead, you can monitor and debug it using the `journalctl` tool.
This tool allows you to view logs and outputs from your project in real-time.

To see a list of all running services, use:

```bash
journalctl -f --user-unit
```

Press `Tab` twice to auto-complete and view a list of all available services.
Look for your application, which will be named in the format `<your-app-or-service-name>.service`.

To view the outputs of your application or service, complete the `journalctl` command like this:

```bash
journalctl -f --user-unit <your-app-or-service-name>.service
```

#### `journalctl` as another user

If you are not the owner of the application or service and have not switched to their user account,
you can run the `journalctl` command from your user account and
specify the app or service owner's account name:

```bash
sudo -u farm-ng-user-<owners_name> journalctl -f --user-unit <your-app-or-service-name>.service
```

### Managing Your Application / Service

If you make changes to the backend code,
you'll need to restart your application or service for these changes to take effect.
This can be done using `systemctl`, which manages the application processes.

- To start your application or service:

```bash
systemctl --user start <your-app-or-service-name>.service
```

- To stop your application or service:

```bash
systemctl --user stop <your-app-or-service-name>.service
```

- To restart your application or service:

```bash
systemctl --user restart <your-app-or-service-name>.service
```

#### `systemctl` as another user

If you are not the owner of the application or service and have not switched to their user account,
you can run the `systemctl` command from your user account and
specify the app or service owner's account name:

- To start the application or service:

```bash
sudo -u farm-ng-user-<owners_name> XDG_RUNTIME_DIR=/run/user/$(id -u farm-ng-user-<owners_name>) \
systemctl --user start <your-app-or-service-name>.service
```

- To stop the application or service:

```bash
sudo -u farm-ng-user-<owners_name> XDG_RUNTIME_DIR=/run/user/$(id -u farm-ng-user-<owners_name>) \
systemctl --user stop <your-app-or-service-name>.service
```

- To restart the application or service:

```bash
sudo -u farm-ng-user-<owners_name> XDG_RUNTIME_DIR=/run/user/$(id -u farm-ng-user-<owners_name>) \
systemctl --user restart <your-app-or-service-name>.service
```
