---
id: app-ownership
title: Custom Apps / Services Ownership
---

<!-- NOTE: Name kept as app-ownership to not break the link
in case it has already been shared with anyone. -->

## Managing App / Service Ownership and Access

When a custom application or service is registered, it is associated with a single user account.
This account is considered the "owner" of the application or service, and it's the only one that
can directly view service and app statuses or make changes to the application or service's code.

### Understanding the Single Owner Model

The single owner model ensures that only one user has control over the app or service's critical functions.
This model helps in maintaining the integrity and security of the application or service,
but can pose challenges in collaborative environments.

### Switching Users

In scenarios where multiple users need to debug or modify the app or service,
switching to the owner's user account is necessary.
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
the app or service owner is and the protocol for making changes.
Regularly updating documentation and maintaining a log of changes can help keep everyone on the same
page.
