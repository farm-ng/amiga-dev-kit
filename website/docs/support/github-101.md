---
id: github-101
title: GitHub 101
---

Welcome to GitHub 101!

This will be the guide to all the steps you need to follow
in order to be able to participate in the [Farm Robotics Challenge](https://farmroboticschallenge.ai/).

We use GitHub for all of our repositories and it is where you can access the files and code
(hosted in repositories) you need to begin working on your project developing with the Amiga.

## Create an account

First you will need to have an Github account

- To create one, just go to [github.com](https://www.github.com) and sign up!

## Git clone

There are two primary options for cloning a git repository, `https` & `ssh`.
You can find these by clicking on the green **`<> Code`** button on a repository's home page.

![image](https://github.com/farm-ng/farm-ng-amiga/assets/53625197/511020f2-c9c0-4aec-8f39-5cbff2c13d25)

### Cloning with `https`

The easiest way to get started with using a public repository is to clone with `https`.
For this approach, you do not need to create an ssh key and you can just clone with e.g.:

```bash
git clone https://github.com/farm-ng/farm-ng-amiga.git
```

However, you should only use this approach if you plan on treating the repository as "read only".
This is because you will not be able to push to a repository cloned with `https` as of August 2021.
See [Git password authentication is shutting down](https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/).

### Cloning with `ssh`

If you are cloning a repository that you plan to create branches off of and push to,
you should clone with `ssh`.

:::info hint
This will be the case for your project!
:::

After you've followed the [Set up an ssh key](#set-up-an-ssh-key) instructions,
you can clone with e.g.:

```bash
git clone https://github.com/farm-ng/farm-ng-amiga.git
```

## Set up an ssh key

To set up an ssh key, follow the instructions from GitHub:

1. [Create a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. [Connect to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
3. Clone with e.g.: `git clone git@github.com:farm-ng/farm-ng-amiga.git`

This will allow you to `pull`, `branch`, `push`, etc. to your heart's content on public
and your personal and team's private repos.
You should only need to do this once per device,
unless you delete the key or remove it from your GitHub account.

## Your Identity

You'll also need to set your identity so github knows who to give credit for a commit to.
Typically this is done with the `--global` flag so you only have to
do it a single time for your PC.

From within a cloned git repository, run:

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

> For more information, see: [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

## Editing and Contributing

Here you will learn about a good workflow to have when contributing to code.

Before anything be sure to clone the respective repository.
You can do this following the listed commands below.

```bash
cd ~ # home directory
git clone <RESPECTIVE REPOSITORY>
cd <RESPECTIVE REPOSITORY>
```

Once you have cloned into that repository, you will need to create your own branch.
This can be done with these commands:

```bash
cd <RESPECTIVE REPOSITORY>
git checkout -b your-branch-name
```

From there begin coding!

:::info
It is not recommended to edit directly on the main branch.
It is recommended for you to start your own branch before committing any changes.
Some GitHub repositories will have built-in protections that prevent you from pushing directly to `main`.
:::

Now that you have completed your code, you are ready to make a push.
It is recommended that you follow this workflow.

### [recommended] Format your code

We recommend using `pre-commit` to automatically format your code for readability.

:::tip
It is always a great and healthy practice to pre-commit your code before attempting any push.
:::

```bash
pre-commit install
git add -p # Add the changes I want
pre-commit run --all-files
git add -p # Add the formatting changes the check just fixed
pre-commit run --all-files # check for any formatting issues not resolved automatically (e.g., spellcheck)
git commit -m "insert brief comment for the changes"
git push
```

See the [`pre-commit` documentation](https://pre-commit.com/) for more details.

## Pull-Requests (PR)

After you commit and push your changes,
you will notice that a "compare and create pull request" button has appeared
on your repository's page on GitHub.com.

If that option hasn't appeared then you can go to "pull request"
in the above bar then click on “new pull request”.

From that screen you will select your branch, then select create pull request.

- If your pull request is to a `farm-ng` repository,
it will need to go under review by a team member of the `farm-ng` team.
- If your pull request is to your own repository,
you can merge it into `main` whenever you are ready.
- If you are working as part of a team,
we recommend implementing the practice of reviewing each other's code before merging.

:::tip
If you need any help from the Farm-ng support please see our
[Support page](/docs/support/support.md) for instructions on starting a conversation on our
[Discourse Channel](https://discourse.farm-ng.com/) and posting your question there.
:::
