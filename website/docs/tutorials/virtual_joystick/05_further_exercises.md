---
id: further-exercises
title: 04 - Further Exercises
---
# Further Exercises

:::caution deprecation warning
This is out-of-date for brains running `v2.x` Amiga OS software.<br/>
This tutorial only applies to brains running Amiga OS `v1.x` versions.<br/>
Please check back for an updated tutorial for brains running `v2.x` Amiga OS software.
:::

Optionally, go beyond the tutorial and try to add features to this example.
Two options are:

## Adjustable rates

Define two kivy [**`Slider`**](https://kivy.org/doc/stable/api-kivy.uix.slider.html)
widgets that allow changing `max_speed` & `max_angular_rate`!
Play around with where you can put these and how you can link
them directly to the value in the `VirtualJoystickApp`.

Just remember, the actual rates the amiga drives at are limited
by the vehicle control unit (VCU), so don't be surprised if the
true max speed doesn't reflect the slider.

## Toggle between Auto modes

Try to add a kivy `Button` widget that toggles the requested
`AmigaControlState` so the brain is not constantly trying to take
control of the dashboard while running.

Or more advanced, add a button that starts/stops the sending of
canbus messages.
This could require stopping the stream of messages from the
generator, signalling to the `sendCanbusMessage` to stop, and
re-initializing the `sendCanbusMessage` RPC later.

:::tip possible hint
sending `grpc.aio.EOF` might do it...
:::

## Customizing an app

In order to customize an app we leverage the `setup.cfg` that contains all the metadata and package configuration.
More can be found [here](https://setuptools.pypa.io/en/latest/userguide/declarative_config.html)!

The most important first steps are to modify the metadata of the project and dependencies:

1. Inside the `setup.cfg` file, adjust the fields under the tag `[metadata]`
    * For basic users, the package name (`project_name` in the project structure above)
     goes in the `name` field, and must match with the directory name right under the `libs/` directory.
      * I.e., change both the `name` field and the directory name under `libs/` to your new app name.
      * VScode should prompt you to change the import
      names in `test_dummy.py` once you change the directory name.
        * If not, manually change:

            ```note
            from amiga_package import __version__
            from amiga_package import ops
            ```

        * To:

            ```note
            from <project_name> import __version__
            from <project_name> import ops
            ```

    * For advanced users, you can modify as much is compliant with Python `setuptools`.
2. Adjust the package dependencies
    * Include whatever extra dependency you need in the `install_requires` field.
    * Our only requirements are:
        * `wheel`: for packaging the app.
        * `kivy`: to generate the graphical user interface (GUI).
        * `farm-ng-amiga`: the Farm-ng Amiga public SDK.

### Update the `manifest.json`

In this file, you can find the metadata of the app. This file is used by the launcher
and has the following structure:

```json
{
   "services": {
        "example-app-kivy": {
            "name": "example-app-kivy",
            "type": "app",
            "exec_cmd": "entry.sh",
            "display_name": "Example App"
            "autostart": false
        }
    }
}
```

:::note
Learn more about the manifest file [here](/docs/brain/brain-apps-manifest).
:::

In case you face issues, connect with us and the community on [Discourse](https://discourse.farm-ng.com/c/support/5)

## Development and Debug an app

The workflow for development is pretty much the same as any standard gui application.

1. Make changes in the code.
2. Run the code with the play button in vs-code.
    * [Optionally] Add a breakpoint to any line and use the Debug Console to interact.
3. Go to step 1

## [Optional] Test your application

In order to validate your functionality, we suggest to add test cases for the internal `libs/[package_name]`
located under `test/test_[test_name].py`.

To launch the tests: `pytest test/`
To run specific tests: `pytest test/test_dummy.py::TestDummy::test_add`
