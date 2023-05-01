---
id: github-101
title: GitHub 101
---

Welcome to GitHub 101!

Here will be the guide to all the steps you need to follow in order to be able to participate in the challenge.

We use GitHub for all of our repositories and that is also where you can access the files needed to being working on the project and Amiga.

Prerequisites:

First you will need to have an Github account
- To create on you can go [here](https://www.github.com)

Once you do that you will need to generate a personal token:

## Personal Access Token

1. Verify your email address, if it hasn't been verified yet.

2. In the upper-right corner of any page, click your profile photo, then click Settings.
![userbar-account-settings](https://user-images.githubusercontent.com/64480560/216469067-dd3a5214-a4c8-43c2-919b-2905bcb967ed.png)

3. In the left sidebar, click  Developer settings.

4. In the left sidebar, under  Personal access tokens, click Tokens (classic).

5. Select Generate new token, then click Generate new token (classic).

6. Give your token a descriptive name.

:::tip
To give your token an expiration, select the Expiration drop-down menu, then click a default or use the calendar picker.
:::

8. Select the scopes you'd like to grant this token.

9.  To use your token to access repositories from the command line, select repo. A token with no assigned scopes can only access public information. For more information, see "Available scopes".

10. Once that has been created you can then begin cloning the repositories from farm-ng!


## Editing and Contributing

Here you will learn about a good workflow to have when contributing to code.

Before anything be sure to clone the respective repository. You can do this following the listed commands below.

```bash
cd ~ #home directory
git clone <RESPECTIVE REPOSITORY>
cd <RESPECTIVE REPOSITORY>
```
Once you have cloned into that repository, you will need to create your own branch. This can be done with these commands:

```bash
cd <RESPECTIVE REPOSITORY>
git checkout -b "insert name of branch here"
```

From there begin coding!

Now that you have completed your code, you are ready to make a push. It is recommended that you follow this workflow.


Pre-commit your code
```bash
pre-commit install
git add -p # Add the changes I want
pre-commit run --all-files
git add -p # Add the formatting changes the check just fixed
pre-commit run --all-files # double check for any formatting issues not resolved automatically (e.g., spellcheck)
git commit -m "insert brief comment for the changes"
git push
```

:::tip
It is always a great and healthy practice to pre-commit your code before attempting any push.
:::

## Pull-Requests (PR)

After you commit and push your changes, you will noticing that on GitHub.com, a button has appeared that says "compare and create pull request"

If that option hasn't appeared then you can go to "pull request" in the above bar then click on “new pull request”.

From that screen you will select your branch, then select create pull request.

:::caution
Never edit on the main branch. It is required for you to start your own branch before committing any changes.
:::

After you have created your pull request, it will need to go under review by another team member of the SDK team.

:::tip
If you need any help from the Farm-ng support please see our
[Support page](/docs/support/support.md) for instructions on starting a conversation on our
[Discourse Channel](https://discourse.farm-ng.com/) and posting your question there.
:::
