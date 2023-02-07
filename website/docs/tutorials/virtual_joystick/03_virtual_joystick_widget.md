---
id: virtual-joystick-widget
title: 03 - Virtual Joystick Widget
---
# Virtual Joystick Widget

We will now define a custom widget, the `VirtualJoystickWidget`, in kivy and Python to give an introduction to kivy drawing.
We define the custom widget such that it can be imported just like a kivy API widget!

This widget will be used to drive the robot by moving the virtual joystick on the Brain screen.
The driving behavior is modelled after the behavior of driving with the joystick on the pendant.

:::info
In the [`libs/virtual_joystick/res/joystick.kv`](https://github.com/farm-ng/virtual-joystick/blob/main/libs/virtual_joystick/res/joystick.kv) and [`libs/virtual_joystick/joystick.py`](https://github.com/farm-ng/virtual-joystick/blob/main/libs/virtual_joystick/joystick.py) files of the [**virtual-joystick**](https://github.com/farm-ng/virtual-joystick) app we define the custom widget in kivy and Python.

You should open these files for reference as you follow along.
:::

### kivy Definition

We first define a few custom arguments for defining the drawn `joystick` that are linked to the [`Ellipse`](https://kivy.org/doc/stable/api-kivy.graphics.html#kivy.graphics.Ellipse) widget used to draw the joystick circle (the one with `id: joystick`).
Because these values are linked, they can be updated on the Python side of the `VirtualJoystickWidget` and the kivy drawing will update accordingly.

An important component to understand is the kivy [**`Canvas`**](https://kivy.org/doc/stable/api-kivy.graphics.instructions.html),
which is the root object used for drawing by a `Widget`.
As you can see, both the background `Ellipse` and the joystick `Ellipse` are drawn within the scope of the canvas.
Also note how the [**`Color`**](https://kivy.org/doc/stable/api-kivy.graphics.html#kivy.graphics.Color) is set before drawing each widget in `rgba` format, allowing color and alpha adjustments.

### Python Implementation

#### Builder

By building the `.kv` definition of the `VirtualJoystickWidget` in the Python constructor,
the widget can be imported just like a kivy API widget.
That means you can import it into your Python definition of your `App` (i.e., `main.py`), and reference it both there and in your kivy app definition (i.e., `main.kv`)

Explore [**kivy `Builder`**](https://kivy.org/doc/stable/api-kivy.lang.builder.html) for more details.

#### kivy `Clock`

We schedule regular updates to the linked variables containing the pose of the drawn joystick using the [**kivy Clock**](https://kivy.org/doc/stable/api-kivy.clock.html).
kivy provides multiple options for scheduling tasks, which you can explore in their API.

Updating these linked values will cause the drawn Widget to automatically update.
You could alternatively update these values as they are calculated in the touch handling methods if you don't want to use the kivy `Clock`.


:::caution
Do not schedule long running, blocking tasks with the kivy clock or you will freeze the app while the task executes.
The kivy clock (which runs on the main loop) should only be used to schedule very quick actions.

Blocking tasks should be scheduled as an `asyncio` task!
:::

#### Touch handling

The [`on_touch_down()`](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.on_touch_down), [`on_touch_move()`](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.on_touch_move), & [`on_touch_up()`](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.on_touch_up) calls are triggered for all `Widget`s within a kivy `App` whenever there is a touch interaction (by default).

We overwrite the default behavior of these methods to move the pose of the joystick whenever we touch and/or move within the `VirtualJoystickWidget`,
and recenter the joystick upon release.

From the [**kivy `Widget` class docs**](https://kivy.org/doc/stable/api-kivy.uix.widget.html), which all widgets inherit from:

> `on_touch_down()`, `on_touch_move()`, `on_touch_up()` don’t do any sort of collisions.
> If you want to know if the touch is inside your widget, use `collide_point()`.

So we filter `on_touch_down()` & `on_touch_move()` with [**`collide_point()`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.collide_point) to only perform our custom behavior when the touch occurred within our `VirtualJoystickWidget`.

Because we want to recenter the joystick regardless of which widget the `touch_up` occurred in, we do not filter `on_touch_up()` with `collide_point()`.

#### Vec2

We also define a simple container called `Vec2` for handling the `x` & `y` values of the joystick coordinates in [libs/virtual_joystick/utils.py](https://github.com/farm-ng/virtual-joystick/blob/main/libs/virtual_joystick/utils.py) and import this into `joystick.py`.


### Add it to the app

- Import this widget in [`src/main.py`](https://github.com/farm-ng/virtual-joystick/blob/main/src/main.py)
- Add the `VirtualJoystickWidget` next to the `TabbedPanel` in the `BoxLayout` of app's kivy definition in [`src/res/main.kv`](https://github.com/farm-ng/virtual-joystick/blob/main/src/res/main.kv)


### Run it

Now sync the app to the Brain and launch it.

You should now see the virtual joystick between the camera stream (far right) and the `AmigaTpdo1` values from the canbus (left).
Try moving the joystick around with your finger and releasing it, but note: It won't drive yet!

![joystick](https://user-images.githubusercontent.com/53625197/200641720-c722fa9f-f6a3-4918-a4f0-d7270b73fd43.png)
