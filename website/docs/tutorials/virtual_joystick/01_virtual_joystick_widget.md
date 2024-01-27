---
id: virtual-joystick-widget
title: 01 - Widget
---
# Building Virtual Joystick Widget

We will begin by defining a custom widget, the `VirtualJoystickWidget`,
by following the kivy API to add widgets to our application!

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

By the end of this section, our virtual_joystick will look something like this:
<div align="center">
![virtualJoystick](https://github.com/farm-ng/amiga-dev-kit/assets/53889589/e574c53a-39bf-4784-b010-8a0e24e3dfd9)
</div>
We will need to add a few files in order to get there. All of the files
for the joystick widget will be stored in libs/virtual_joystick. This will make
it easiest to organize our project. We recommend you do the same for any and all
custom widgets you hope to add to your custom application.

## New File: virtual_joystick/res/virtual_joystick.kv

Within the folder libs/virtual_joystick/res, create a file called virtual_joystick.kv
and add the following content.

### virtual_joystick.kv

```python
<VirtualJoystickWidget>:
    joystick_diameter: 200
    joystick_position_x: 0
    joystick_position_y: 0
    canvas:
        Color:
            rgba: 0.2, 0.2, 0.2, 1.0
        Ellipse:
            id: background_ellipse
            pos: root.center_x - root.width // 2, root.center_y - root.height // 2
            size: root.width, root.height
        Color:
            rgba: 1.0, 1.0, 0.0, 1.0
        Ellipse:
            id: joystick
            pos: root.joystick_position_x, root.joystick_position_y
            size: root.joystick_diameter, root.joystick_diameter
```

You can think of this similar to a class, where there are a few instance variables
assigned to each instacnce of the `<VirtualJoystickWidget>`. These are, diameter, position_x
and position_y. These are variables we will access to draw our joystick but also querry
its position on the screen.

## New File: virtual_joystick/utils.py

Writing modules is avery useful tool in python so we decided to add one to this example.
In this example, a module is a python file that contains methods. They are used for code
readbility and making programs modular.

Once you have created the file utils.py, copy the following code:

### utils.py

```python
class Vec2:
    """Simple container for keeping joystick coords in x & y terms.

    Defaults to a centered joystick (0,0). Clips values to range [-1.0, 1.0], as with the Amiga joystick.
    """

    def __init__(self, x: float = 0.0, y: float = 0.0) -> None:
        self.x: float = min(max(-1.0, x), 1.0)
        self.y: float = min(max(-1.0, y), 1.0)

    def __str__(self) -> str:
        return f"({self.x:0.2f}, {self.y:0.2f})"
```

This creates a class called Vec2. What this allows us to is make a Vec2 object in the future.
It will make more sense as the tutorial continues. The class Vec2() will store the coordinates
of joystick bounded between -1 and 1.

## New File: virtual_joystick/virtual_joystick.py

Now that our kivy string is defined, we can define the features of our widget in python.
These methods will allow us from our main app to read the state of our joystick.
This section includes all the sequential blocks of code to build this file. Feel free
to refer to the repository if you get lost in the chaos.

### Imports

Similar to the previous examples, we will need some external libraries. The top of this
 file should look like this:

```python
import os
from math import sqrt
from typing import Tuple

from virtual_joystick.utils import Vec2

# Must come before kivy imports
os.environ["KIVY_NO_ARGS"] = "1"

from kivy.clock import Clock  # noqa: E402
from kivy.input.providers.mouse import MouseMotionEvent  # noqa: E402
from kivy.lang.builder import Builder  # noqa: E402
from kivy.uix.widget import Widget  # noqa: E402
```

We are importing a method called Vec2 from virtual_joystick.utils. This is a good introduction
to building modules in python.

```python
from virtual_joystick.utils import Vec2
```

This means, from within the folder, virtual_joystick, import the utils file. From utils, import
the class Vec2. This will allow us to create Vec2 objects from within virtual_joystick.py.

### New Class: VirtualJoystickWidget

```python
class VirtualJoystickWidget(Widget):
    def __init__(self, **kwargs) -> None:
        super(VirtualJoystickWidget, self).__init__(**kwargs)

        self.joystick_pose: Vec2 = Vec2()

        # Schedule the drawing of the joystick at 30 hz
        Clock.schedule_interval(self.draw_joystick, 1 / 30)

        # Build the .kv file for this VirtualJoystickWidget
        # This is so it is included when your app imports the VirtualJoystickWidget
        Builder.load_file(os.path.join(os.path.dirname(__file__), "res/joystick.kv"))
```

There is a lot going on in this initialization. But most simply, it sets up the superclass
of this Widget Class. Next, we create an instance of Vec2 called self.joystick_pose. This
will store the position of our joystick in (x,y) coordinates.

Clock, is the kivy eventloop. This is used to schedule updates of the user interface at 30 Hz.

Finally, we use the Builder module from kivy to build our joystick widget.

### Update Kivy Method: on_touch_down()

```python
    def on_touch_down(self, touch: MouseMotionEvent) -> None:
        """Overwrite kivy method that handles initial press with mouse click or touchscreen.

        NOTE: This is called regardless of whether this is the touched widget.
        """
        # Check if touch is in this widget using kivy ``collide_point`` method
        if not self.collide_point(*touch.pos):
            return

        self.update_joystick_pose(touch)
```

This method takes a touch event generated by kivy every time the screen is pressed,
the coordinates are passed to self.update_joystick_pose() method.

More info can be found here:
[**`on_touch_down()`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.on_touch_down)

### Update Kivy Method: on_touch_move()

```python
    def on_touch_move(self, touch: MouseMotionEvent) -> None:
        """Overwrite kivy method that handles when press is held and dragged with mouse click or touchscreen.

        NOTE: This is called regardless of whether this is the touched widget.
        """
        # Check if touch is in this widget using kivy ``collide_point`` method
        if not self.collide_point(*touch.pos):
            return

        self.update_joystick_pose(touch)
```

You can see that this method performs the same operation as
on_touch_down(), however it is used to handle when
a touch is held.

More info can be found here:
[**`on_touch_move()`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.on_touch_move)

### Update Kivy Method: on_touch_up()

```python
    def on_touch_up(self, touch: MouseMotionEvent) -> None:
        """Overwrite kivy method that handles release of press with mouse click or touchscreen.

        NOTE: This is called regardless of whether this is the touched widget.
        """
        # Reset joystick pose, regardless of where touch_up occurs
        self.joystick_pose = Vec2()
```

This method resets the position of the joystick when the screen is no longer being depressed.

More info can be found here:
[**`on_touch_up()`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.on_touch_up)

### New Method: update_joystick_pose()

```python
    def update_joystick_pose(self, touch: MouseMotionEvent) -> None:
        assert self.collide_point(*touch.pos), "Only pass touches "

        res: Tuple[float, float] = self.relative_cord_in_widget(touch)

        # Clip to unit circle
        div: float = max(1.0, sqrt(res[0] ** 2 + res[1] ** 2))
        self.joystick_pose = Vec2(x=res[0] / div, y=res[1] / div)
```

When you press, hold and move your finger, this method is responsible for
taking that motion and converting it to a Vec2() object to let kivy know where to
move the yellow icon. div is used to normalize the motion to that on the unit circle.

### New Method: relative_cord_in_widget()

```python
    def relative_cord_in_widget(self, touch: MouseMotionEvent) -> Tuple[float, float]:
        """Returns the coordinates of the touch on the scale IFF it occurs within the bounds of the widget."""

        # Range to put the values on
        scale: Tuple[float, float] = (-1.0, 1.0)

        # Map coord onto scale range
        return (
            scale[0] + (touch.x - self.pos[0]) * (scale[1] - scale[0]) / (self.width),
            scale[0] + (touch.y - self.pos[1]) * (scale[1] - scale[0]) / (self.height),
        )
```

This method is used to ensure that the joystick only moves when TouchEvents have occurred
within the bounds of the widget.

### New Method: draw_joystick()

```python
    def draw_joystick(self, dt: float = 0.0):
        """Update the drawn pose of the joystick, in pixel coords."""
        self.joystick_position_x = (
            self.center_x
            + 0.5 * self.joystick_pose.x * (self.width - self.joystick_diameter)
            - self.joystick_diameter // 2
        )

        self.joystick_position_y = (
            self.center_y
            + 0.5 * self.joystick_pose.y * (self.height - self.joystick_diameter)
            - self.joystick_diameter // 2
        )
```

The final function we have is draw_joystick(). This method is called by the Clock at
a frequency of 30Hz. This updates the coordinates of the yellow circle in the virtual joysick.

## More Information

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
