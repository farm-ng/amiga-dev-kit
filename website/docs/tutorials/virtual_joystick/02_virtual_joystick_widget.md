---
id: virtual-joystick-widget
title: 02 - Virtual Joystick Widget
---
# Building Virtual Joystick Widget

We will begin by defining a custom widget, the `VirtualJoystickWidget`,
by following the kivy API to add widgets to our application!

![virtualJoystick](https://github.com/farm-ng/amiga-dev-kit/assets/53889589/e574c53a-39bf-4784-b010-8a0e24e3dfd9)

This widget will be used to drive the robot by moving the virtual
joystick on the Brain screen.
The driving behavior is modelled after the behavior of driving
with the joystick on the pendant.

:::info
If you ever feel lost, please refer to the [`Virtual-Joystick Repository`](https://github.com/farm-ng/virtual-joystick-v2/tree/main).
:::

## Virtual Joystick App Structure

In this tutorial, it is expected that you are familiear with the previous camera-streamer example.

We will be adding files to libs/ to build our custom kivy widget. By the end of this tutorial,
your file tree should look like this.

```bash
Virtual-Joystick-v2/  # Root level of the project.
├── libs/ # Contains private libraries.
|   ├── amiga_packages/ # placeholder for other template packages
|   └── virtual_joystick/ # virtual joystick package we'll build
|       ├── res/
|       |   └── virtual_joystick.kv # kivy virtual joystick frontend
|       ├── joystick.py # kivy virtual joystick backend
|       └── utils.py # helper functions for joystick
├── src/ # Contains all code needed to run the main gui application.
|   ├── assets/  # Contains files needed to run the application
|   |   └── app_logo.png  # static images or images for buttons.
|   ├── res/  # Contains the layout files and UI strings.
|   |   └── main.kv  # main ui layout in Kivy languague
|   └── main.py  # Is the main entry point for the gui application.
├── test/  # Contains code for test of the private libs.
|   └── test_dummy.py  # sets of unit test
.
├── install.sh
|    # The script to install the app on the brain.
├── uninstall.sh
|    # The script to uninstall the app from the brain.
├── manifest.json
|    # The file containing the metadata of the app to register it on the brain.
├── entry.sh
|    # The script to setup the project, create a virtual env. and install dependencies.
└── setup.cfg
    # The file containing the metadata of the package, including the name, versioning,
    # etc. Learn more here: https://setuptools.pypa.io/en/latest/userguide/declarative_config.html

```

## Building the widget in libs/virtual_joystick

### New File: virtual_joystick/res/virtual_joystick.kv

Within the folder libs/virtual_joystick/res, create a file called virtual_joystick.kv.
This file will include all of the code to build the user interface of the virutal_joystick.

We first define a few custom arguments for defining the drawn
`joystick` that are linked to the
[**`Ellipse`**](https://kivy.org/doc/stable/api-kivy.graphics.html#kivy.graphics.Ellipse)
widget used to draw the joystick circle (the one with `id: joystick`).
Because these values are linked, they can be updated on the
Python side of the `VirtualJoystickWidget` and the kivy drawing
will update accordingly.

An important component to understand is the kivy
[**`Canvas`**](https://kivy.org/doc/stable/api-kivy.graphics.instructions.html),
which is the root object used for drawing by a `Widget`.
As you can see, both the background `Ellipse` and the joystick
`Ellipse` are drawn within the scope of the canvas.
Also note how the
[**`Color`**](https://kivy.org/doc/stable/api-kivy.graphics.html#kivy.graphics.Color)
 is set before drawing each widget in `rgba` format, allowing
 color and alpha adjustments.

## Python Implementation

### Builder

By building the `.kv` definition of the `VirtualJoystickWidget`
in the Python constructor,
the widget can be imported just like a kivy API widget.
That means you can import it into your Python definition of your
`App` (i.e., `main.py`), and reference it both there and in your
kivy app definition (i.e., `main.kv`)

Explore
[**kivy `Builder`**](https://kivy.org/doc/stable/api-kivy.lang.builder.html)
for more details.

### kivy `Clock`

We schedule regular updates to the linked variables containing
the pose of the drawn joystick using the [**kivy Clock**](https://kivy.org/doc/stable/api-kivy.clock.html).
kivy provides multiple options for scheduling tasks, which you
can explore in their API.

Updating these linked values will cause the drawn Widget to
automatically update.
You could alternatively update these values as they are
calculated in the touch handling methods if you don't want to use
the kivy `Clock`.

:::caution
Do not schedule long running, blocking tasks with the kivy clock
or you will freeze the app while the task executes.
The kivy clock (which runs on the main loop) should only be used
to schedule very quick actions.

Blocking tasks should be scheduled as an `asyncio` task!
:::

### Touch handling

The [**`on_touch_down()`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.on_touch_down),
[**`on_touch_move()`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.on_touch_move),
and
[**`on_touch_up()`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.on_touch_up)
calls are triggered for all `Widget`s within a kivy `App` whenever there is a touch interaction (by default).

We overwrite the default behavior of these methods to move the
pose of the joystick whenever we touch and/or move within the
`VirtualJoystickWidget`,
and recenter the joystick upon release.

From the [**kivy `Widget` class docs**](https://kivy.org/doc/stable/api-kivy.uix.widget.html),
which all widgets inherit from:

> `on_touch_down()`, `on_touch_move()`, `on_touch_up()` don’t do
any sort of collisions.
> If you want to know if the touch is inside your widget, use
`collide_point()`.

So we filter `on_touch_down()` & `on_touch_move()` with
[**`collide_point()`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.collide_point)
to only perform our custom behavior when the touch occurred within our `VirtualJoystickWidget`.

Because we want to recenter the joystick regardless of which
widget the `touch_up` occurred in, we do not filter
`on_touch_up()` with `collide_point()`.

### Vec2

We also define a simple container called `Vec2` for handling the
`x` & `y` values of the joystick coordinates in
[**libs/virtual_joystick/utils.py**](https://github.com/farm-ng/virtual-joystick/blob/main/libs/virtual_joystick/utils.py)
and import this into `joystick.py`.

## Add it to the app

- Import this widget in [**`src/main.py`**](https://github.com/farm-ng/virtual-joystick/blob/main/src/main.py)
- Add the `VirtualJoystickWidget` next to the `TabbedPanel` in
the `BoxLayout` of app's kivy definition in
[**`src/res/main.kv`**](https://github.com/farm-ng/virtual-joystick-v2/blob/main/src/res/main.kv)
