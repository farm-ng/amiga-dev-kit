---
id: template-overview
title: Template Overview
---
# Template Overview



### Template overview

This section explains all of the Python code in the template, so you can understand the base before adding anything.

#### Imports

```Python
# Copyright (c) farm-ng, inc. Amiga Development Kit License, Version 0.1
import argparse
import asyncio
import os
from typing import List

# Must come before kivy imports
os.environ["KIVY_NO_ARGS"] = "1"

from kivy.config import Config  # noreorder # noqa: E402

Config.set("graphics", "resizable", False)
Config.set("graphics", "width", "1280")
Config.set("graphics", "height", "800")
Config.set("graphics", "fullscreen", "false")
Config.set("input", "mouse", "mouse,disable_on_activity")
Config.set("kivy", "keyboard_mode", "systemanddock")

from kivy.input.providers.mouse import MouseMotionEvent  # noqa: E402
from kivy.app import App  # noqa: E402
from kivy.lang.builder import Builder  # noqa: E402
from kivy.core.window import Window  # noqa: E402
```

The template starts with generic Python imports that are used in the app, followed by the basic kivy imports and configuration.
Before any kivy imports, we must explicitly state that the command line args for the app are to be used, rather than the default kivy command line args, with `os.environ["KIVY_NO_ARGS"] = "1"`.


Next we import kivy `Config` and define the config parameters we recommend for running kivy applications on the brain.
This should come before importing any other Kivy modules, as stated in [kivy - Configuration object](https://kivy.org/doc/stable/api-kivy.config.html).

Finally we import the remaining kivy modules we use in our app, with the `# noqa: E402` flag, so any `pre-commit` formatters don't move these imports above the kivy configuration setting.


#### kivy app definition

```Python
kv = """
RelativeLayout:
    Button:
        id: back_btn_layout
        pos_hint: {"x": 0.0, "top": 1.0}
        background_color: 0, 0, 0, 0
        size_hint: 0.1, 0.1
        background_normal: "assets/back_button.png"
        on_release: app.on_exit_btn()
        Image:
            source: "assets/back_button_normal.png" \
            if self.parent.state == "normal" \
            else "assets/back_button_down.png"
            pos: self.parent.pos
            size: self.parent.size
"""
```

Next we define our application in the Kv language.
This definition can be a string at the top of a `.py` file or can be defined
in a separate `.kv` file, and we tend to go for strings at the top of the Python file.

:::tip
Throughout this tutorial we'll explain the kivy app created in this example, but this is not intended as a thorough introduction to using kivy. Try the [kivy tutorials](https://kivy.org/doc/stable/tutorials-index.html) and use the [kivy API](https://kivy.org/doc/stable/api-index.html) for more information on creating custom applications with kivy.
:::


#### RelativeLayout

Two key components of kivy are [`Layouts`](https://kivy.org/doc/stable/gettingstarted/layouts.html#) and [`Widgets`](https://kivy.org/doc/stable/api-kivy.uix.html).
The root of our template app is a `RelativeLayout`, which contains a `Button` widget.
The `RelativeLayout` allows us to position the [Back button](#back-button) (and any widgets or nested layouts we may add in the future) in relative coordinates.

- Reference: [Relative Layout](https://kivy.org/doc/stable/api-kivy.uix.relativelayout.html)

#### Back button

This `Button` is used to exit the app when it is pressed, by calling the [`TemplateApp.on_exit_btn()`](#on_exit_button) method.

:::info
To be precise it's actually when the button is released due to using the `on_release:` keyword.
:::

Since the `TemplateApp` inherits from the kivy `App` class, methods and variables of the `TemplateApp` can be linked with the `app.foo_variable` or `app.bar_method()`
We define the `Button` with two images, one that shows most of the time, and another that shows while the button is pressed down.
You can also define a button with a string, if you want to quickly add buttons without finding an icon.

:::tip
[Material Icons](https://github.com/google/material-design-icons) is a nice place to find symbols to use for app buttons / UI features.
:::

- Reference: [Button](https://kivy.org/doc/stable/api-kivy.uix.button.html)



#### TemplateApp

```Python
class TemplateApp(App):
    def __init__(self) -> None:
        super().__init__()

        self.async_tasks: List[asyncio.Task] = []
```

We define the `TemplateApp` to inherit from the kivy `App` class, so it has all the features of a generic `App`, plus anything we add to it.

All we add here is a placeholder for the `TemplateApp` class methods that will each be added as an `asyncio.Task`.


#### build

```Python
def build(self):
    def on_touch_down(window: Window, touch: MouseMotionEvent) -> bool:
        """Handles initial press with mouse click or touchscreen."""
        if isinstance(touch, MouseMotionEvent) and int(
            os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)
        ):
            return True
        for w in window.children[:]:
            if w.dispatch("on_touch_down", touch):
                return True

        # Add additional on_touch_down behavior here

        return False

    def on_touch_move(window: Window, touch: MouseMotionEvent) -> bool:
        """Handles when press is held and dragged with mouse click or touchscreen."""
        if isinstance(touch, MouseMotionEvent) and int(
            os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)
        ):
            return True
        for w in window.children[:]:
            if w.dispatch("on_touch_move", touch):
                return True

        # Add additional on_touch_move behavior here

        return False

    def on_touch_up(window: Window, touch: MouseMotionEvent) -> bool:
        """Handles release of press with mouse click or touchscreen."""
        if isinstance(touch, MouseMotionEvent) and int(
            os.environ.get("DISABLE_KIVY_MOUSE_EVENTS", 0)
        ):
            return True
        for w in window.children[:]:
            if w.dispatch("on_touch_up", touch):
                return True

        # Add additional on_touch_up behavior here

        return False

    Window.bind(on_touch_down=on_touch_down)
    Window.bind(on_touch_move=on_touch_move)
    Window.bind(on_touch_up=on_touch_up)

    return Builder.load_string(kv)
```


`build` is a default kivy `App` method that we must overwrite with our app's details.

To load the Kv formatted string into our app, we use the built-in method:

```Python
Builder.load_string(KV_STRING)
```

But first, we need to override the default touch handling since we are interacting on a touchscreen.

##### touch handling

`on_touch_down`, `on_touch_move`, and `on_touch_up` define the behavior at various stages of a screen press or mouse click.
Because kivy can mis-register touches on the touchscreen, you will notice the clear pattern that all of these follow to correct for this.
There is a placeholder after the initial pattern in all of these that allows you to add logic to be performed at these various stages of the press.

We also must bind these touch handling functions to the kivy app `Window`.

:::info Note
In the future we plan to hide this so it is not needed in your apps.
:::


#### on_exit_button

```Python
def on_exit_btn(self) -> None:
    """Kills the running kivy application."""
    App.get_running_app().stop()
```

This simple method stops the running kivy app.
When an app was launched on the Amiga Brain through the Launcher app, this will return the Brain state to the Launcher app.



#### app_func

```Python
async def app_func(self):
    async def run_wrapper() -> None:
        # we don't actually need to set asyncio as the lib because it is
        # the default, but it doesn't hurt to be explicit
        await self.async_run(async_lib="asyncio")
        for task in self.async_tasks:
            task.cancel()

    # Placeholder task
    self.async_tasks.append(asyncio.ensure_future(self.template_function()))

    return await asyncio.gather(run_wrapper(), *self.async_tasks)
```

We use the `app_func` pattern, with the nested `run_wrapper`, to build, run, and manage the list of long duration, asynchronous tasks required by the app.

Here we build the list of `async` methods that will run simultaneously for the life of our app.
Currently this list only consists of a placeholder method called [`template_function()`](#template_function) that we will later replace with tasks that actually do something.

Each method is added as an `asyncio.Task` following the pattern used to add `self.template_function()`.

#### template_function

```Python
async def template_function(self) -> None:
    """Placeholder forever loop."""
    while self.root is None:
        await asyncio.sleep(0.01)

    while True:
        await asyncio.sleep(0.01)
```

In each of our `async` functions, we should wait for the root of the kivy App to be initialized before doing anything in the function.
Often these functions will rely on the kivy app, so this prevents unexpected crashes.

In this placeholder, the `while` loop doesn't do anything besides sleep for 10 ms before the next iteration of the `while` loop.
We tend to add this 10 ms at the end of each of our loops.

:::tip
The custom defined async functions must be defined with the `async` decorator and any blocking tasks with the `await` keyword.
:::

#### Command line args and execution

```Python
if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="template-app")

    # Add additional command line arguments here

    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(TemplateApp().app_func())
    except asyncio.CancelledError:
        pass
    loop.close()
```

Finally we run the app!
There is infrastructure in place for defining command line args, which you'll likely want in your apps so you don't have to hard code configurations.
The last six lines are a useful pattern for cleanly running your app with `asyncio`.