---
id: app-ownership
title: Custom Applications Ownership and Troubleshooting
---

## Managing App Ownership and Access

When a custom application is registered, it is associated with a single user account.
This account is considered the "owner" of the application, and it's the only one that
can directly view service and app statuses or make changes to the application's code.

### Understanding the Single Owner Model

The single owner model ensures that only one user has control over the app's critical functions.
This model helps in maintaining the integrity and security of the application but can pose challenges
in collaborative environments.

### Switching Users

In scenarios where multiple users need to debug or modify the app, switching to the owner's user
account is necessary.
Here's how you can switch users:

1. Suppose `farm-ng-user-john` is the owner who registered the app.
2. Another user, `farm-ng-user-jane`, needs to make changes to the app.
3. Jane can switch to John's account by running the following command in the terminal:

    ```bash
    sudo -su farm-ng-user-john
    ```

4. This command switches Jane to John's user account, granting her the necessary control.

### Best Practices for Collaborative Environments

In collaborative settings, it's essential to have clear communication and understanding of who
the app owner is and the protocol for making changes.
Regularly updating documentation and maintaining a log of changes can help keep everyone on the same
page.

## Debugging the App on the Launcher

:::warning
**Single Owner Limitation:** When a custom App is registered via the `manifest.json`,
it has a "single owner".
Only the app's owner can view service statuses and modify the code.
Other users must switch to the owner's account to gain these capabilities.
:::

### Viewing Logs and Outputs

Once your project is launched through the farm-ng-launcher, it will no longer be runnable as a
standalone Python script.
Instead, you can monitor and debug it using the `journalctl` tool.
This tool allows you to view logs and outputs from your project in real-time.

To see a list of all running services, use:

```bash
journalctl -f --user-unit
```

Press Tab twice to auto-complete and view a list of all available services.
Look for your application, which will be named in the format `<your-app-name>.service`.

To view the outputs of your application, complete the `journalctl` command like this:

```bash
journalctl -f --user-unit <your-app-name>.service
```

#### Managing Your Application

If you make changes to the backend code, you'll need to restart your application for these changes
to take effect.
This can be done using systemctl, which manages the application processes.

- To start your application:

```bash
systemctl --user start <your-app-name>.service
```

- To stop your application:

```bash
systemctl --user stop <your-app-name>.service
```

- To restart your application:

```bash
systemctl --user restart <your-app-name>.service
```
