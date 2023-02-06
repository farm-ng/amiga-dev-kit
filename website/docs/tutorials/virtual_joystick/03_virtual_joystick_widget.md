---
id: virtual-joystick-widget
title: 03 - Virtual Joystick Widget
---
# Virtual Joystick Widget


### Add the VirtualJoystickWidget

We will now define a custom widget in Python that gives an introduction to kivy drawing.
This widget will be used to drive the robot by moving the virtual joystick on the Brain screen.
The driving behavior is modelled after the behavior of driving with the joystick on the pendant.

#### imports

The imports we need to add for this step are:

```Python
from math import sqrt
from typing import Tuple

...

from kivy.graphics import Color, Ellipse  # noqa: E402
from kivy.uix.widget import Widget  # noqa: E402
```

:::tip Reminder
Remember to place all kivy imports below the `Config.set(...)` lines!
:::


#### relative_cord_in_widget

Kivy is drawn in pixel coordinates of the `Window`, starting in the bottom left, with `+x` to the right and `+y` up.
In line with this, the coordinates of a `MouseMotionEvent` (what we call a `touch`) come by default in these same `Window` coordinates.

For our virtual joystick, we want relative coordinates of the touch from the `(0, 0)` center of the widget, on the range `[-1.0, 1.0]`.
We also only want to consider touches within the `VirtualJoystickWidget`, and want to ignore touches on the `Image` or `Label` widgets.

For this purpose, we define a free function that returns the coordinates of the `touch` on the `scale` IFF it occurs within the bounds of the `widget`.
If the touch occurs outside of the widget, `None` is returned.

```Python
def relative_cord_in_widget(
    widget: Widget, touch: MouseMotionEvent, scale: Tuple[float, float] = (-1.0, 1.0)
) -> Optional[Tuple[float, float]]:
    """Returns the coordinates of the touch on the scale IFF it occurs within the bounds of the widget."""
    x_s: Tuple[int, int] = (widget.pos[0], widget.pos[0] + widget.width)
    y_s: Tuple[int, int] = (widget.pos[1], widget.pos[1] + widget.height)

    if not (x_s[0] < touch.x < x_s[1]) or not (y_s[0] < touch.y < y_s[1]):
        return None

    return (
        scale[0] + (touch.x - x_s[0]) * (scale[1] - scale[0]) / (widget.width),
        scale[0] + (touch.y - y_s[0]) * (scale[1] - scale[0]) / (widget.height),
    )
```

#### Vec2

We also define a simple container for x & y values of these relative coordinates.
The motivation is:
1. It is less likely to mix up `pose.x` and `pose.y` than it is to mix up `pose[0]` and `pose[1]`, if we left the relative coordinates as a `Tuple`.
2. This falls in line with kivy notation that tends to use the `*.x` & `*.y` notation as you will soon see
3. This allows us to clip values and force them on the range `[-1.0, 1.0]` we want from the virtual joystick.

```Python
class Vec2:
    """Simple container for keeping joystick coords in x & y terms.

    Defaults to a centered joystick (0,0). Clips values to range [-1.0, 1.0], as with the Amiga joystick.
    """

    def __init__(self, x: float = 0.0, y: float = 0.0) -> None:
        self.x: float = min(max(-1.0, x), 1.0)
        self.y: float = min(max(-1.0, y), 1.0)
```

#### VirtualJoystickWidget


The `VirtualJoystickWidget` inherits from the kivy `Widget` class, so it has all the features of a generic `Widget` and anything we add to it.
For this to actually work, it is important to initialize as:
```Python
class VirtualJoystickWidget(Widget):
    def __init__(self, **kwargs) -> None:
        super(VirtualJoystickWidget, self).__init__(**kwargs)

        self.joystick_pose: Vec2 = Vec2()
        self.joystick_rad: int = 100
```

We also add two parameters: one for the relative pose of joystick and one for the size (in pixels) to draw the joystick.


<!-- But first, we need to override the default touch handling since we are interacting on a touchscreen.

##### A note on touch handling

`on_touch_down`, `on_touch_move`, and `on_touch_up` define the behavior at various stages of a screen press or mouse click.
Because kivy can mis-register touches on the touchscreen, you can override these built-in methods . -->

#### draw (Widget)

We define how the virtual joystick will draw here, and this function has no requirement from kivy to be named `draw`.
In this function, we draw in the widget's [**`Canvas`**](https://kivy.org/doc/stable/api-kivy.graphics.instructions.html).

:::info
This is the `draw()` method of the `VirtualJoystickWidget`.
It is not to be confused with the `async draw()` method of the `VirtualJoystickApp`
:::

```Python
def draw(self) -> None:
    self.canvas.clear()

    # Draw background circle
    self.canvas.add(Color(0.2, 0.2, 0.2, 1.0, mode="rgba"))
    self.canvas.add(
        Ellipse(
            pos=(self.center_x - self.width // 2, self.center_y - self.height // 2), size=(self.width, self.height)
        )
    )

    # Draw joystick at position
    x_abs, y_abs = (
        self.center_x + 0.5 * self.joystick_pose.x * (self.width - 2 * self.joystick_rad),
        self.center_y + 0.5 * self.joystick_pose.y * (self.height - 2 * self.joystick_rad),
    )
    self.canvas.add(Color(1.0, 1.0, 0.0, 1.0, mode="rgba"))
    self.canvas.add(
        Ellipse(
            pos=(x_abs - self.joystick_rad, y_abs - self.joystick_rad),
            size=(self.joystick_rad * 2, self.joystick_rad * 2),
        )
    )
```

For each call of `draw`, we erase what was previously drawn on the widget canvas with the `clear()` method.

:::caution Careful
If you are drawing on top of an `Image` widget, `clear()` will erase the image too!
:::

We draw two shapes on the canvas with the kivy [**Graphics**](https://kivy.org/doc/stable/api-kivy.graphics.html) package.
:::info Reminder
Kivy is drawn in pixel coordinates of the `Window`, starting in the bottom left, with `+x` to the right and `+y` up.
:::
We use [**`Widget`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html) parameters, such as [**`center`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.center), [**`pos`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos), and [**`size`**](https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos), to determine where to draw the stable circle representing the range of the joystick.

We do the same for the moving joystick, but map the `joystick_pose` value into pixel coordinates, and offset it from the center of the `VirtualJoystickWidget`.

- Reference: [**`Canvas`**](https://kivy.org/doc/stable/api-kivy.graphics.instructions.html)
- Reference: [**Graphics**](https://kivy.org/doc/stable/api-kivy.graphics.html)

#### draw (App)

The `draw()` method in the `VirtualJoystickApp` needs to be updated to call the `draw()` method in the `VirtualJoystickWidget` every loop.

```Python
async def draw(self) -> None:
    """Loop over drawing the VirtualJoystickWidget."""
    while self.root is None:
        await asyncio.sleep(0.01)

    joystick: VirtualJoystickWidget = self.root.ids["joystick"]
    while True:
        joystick.draw()
        self.update_kivy_strings()
        await asyncio.sleep(0.01)
```
Once the root of the kivy app is created, the `VirtualJoystickWidget` can accessed by its `id:`.

We then loop forever, continuously drawing the `VirtualJoystickWidget` and updating the `StringProperty` strings displayed as `Label` widgets, containing values from the most recent `AmigaTpdo1` message with our simple `update_kivy_strings()` method from before.

Lastly, we sleep for our default duration of 10ms before the next iteration.

#### Add to kv string

Now that we have defined our custom `Widget`, we can add it to the kv string.

At the top of the kv string, before we must declare this custom widget and that it inherits from the kivy `Widget` class.

```Python
kv = """
<VirtualJoystickWidget@Widget>:
RelativeLayout:
    Button:
        ...
```

We can then add the `VirtualJoystickWidget` in the parent `BoxLayout`, between the `BoxLayout` of `Label` widgets and the `TabbedPanel`.

```Python
VirtualJoystickWidget:
    id: joystick
```
:::tip
Ensure the `VirtualJoystickWidget` is indexed to the same level as the `BoxLayout` of `Label` widgets and the `TabbedPanel`.
:::

We then have a `BoxLayout` that stacks 3 sub-widgets horizontally (by default):
1. Another `BoxLayout` with 3 vertically stacked labels
2. A custom `Widget` called `VirtualJoystickWidget`, defined in Python
3. A [**`TabbedPanel`**](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html).


Since the `VirtualJoystickWidget` is fully defined in Python below, the only details we need to add is the `id:`, so the Widget can be easily referenced by the `App`.

You could add more details here to customize various `Widget` parameters, for instance a `size_hint`, but we just leave the default size to be used.


#### touch handling

If you were to sync the app to the Brain and run it now, you could see the `VirtualJoystickWidget` but it would not interact with your touches.
We need to replace the placeholder comments in the 3 touch handling functions of the `VirtualJoystickApp`, nested in the `build()` method.


In both `on_touch_down` and `on_touch_move`, we want to assign a `Vec2` of the relative coordinates of the "touch" to the `joystick_pose` member of the `VirtualJoystickWidget`.
This way the virtual joystick will move to wherever we press our finger and move it around to, within the widget.

Replace:
```Python
# Add additional on_touch_XXXXX behavior here
```
with:
```Python
joystick: VirtualJoystickWidget = self.root.ids["joystick"]

res: Optional[Tuple[float, float]] = relative_cord_in_widget(widget=joystick, touch=touch)
if res:
    # Clip to unit circle
    div: float = max(1.0, sqrt(res[0] ** 2 + res[1] ** 2))
    joystick.joystick_pose = Vec2(x=res[0] / div, y=res[1] / div)
```

Here we access the `VirtualJoystickWidget` with the `id:` value from the kv string.
We then get the relative coordinates of the "touch" in the widget.

If those coordinates are not within the widget, the `joystick_pose` is not updated.
This happens, for example, when you click on the `Image` widget or when you slide your finger from within the `VirtualJoystickWidget` widget to the `Label` widgets.

If the coordinates are within the `VirtualJoystickWidget`, we update the `joystick_pose` with the coordinates clipped to the unit circle (like a real joystick where the range of motion is circular).

For `on_touch_up`, however, we want the joystick to return to it's centered position when it is released.

Replace:
```Python
# Add additional on_touch_XXXXX behavior here
```
with:
```Python
joystick: VirtualJoystickWidget = self.root.ids["joystick"]
joystick.joystick_pose = Vec2()
```

Here we set the `joystick_pose` back to a default `Vec2` pose of `(0,0)` whenever we release our touch.

### Run the app - virtual joystick

Now sync the app to the Brain and launch it with the following instructions!

:::info Deploy Instructions
[**Deploy Instructions**](/brain/custom-applications.mdx) for syncing the app onto the Amiga Brain.
:::

You should now see the virtual joystick between the camera stream (far right) and the `AmigaTpdo1` values from the canbus (left).
Try moving the joystick around with your finger and releasing it, but note: It won't drive yet!

![joystick](https://user-images.githubusercontent.com/53625197/200641720-c722fa9f-f6a3-4918-a4f0-d7270b73fd43.png)
