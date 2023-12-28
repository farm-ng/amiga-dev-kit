---
id: template-starter
title: 01 - Template Starter
---
# Template Starter

## Set up your Amiga brain template

This tutorial will build upon the
[**camera streamer**](/docs/tutorials/camera_streamer/01_template_starter.md) tutorial.

To begin, clone the [**camera streamer**](https://github.com/farm-ng/camera-streamer-kivy/tree/main)
and continue with this tutorial.

If you don't feel confident about the camera-streamer app, clone
[**amiga-template-kivy**](https://github.com/farm-ng/amiga-app-template-kivy/tree/main)
and go back to [**camera-streamer**](/docs/tutorials/camera_streamer/01_template_starter.md).

:::tip
Feel free to choose any repository name, but it's recommended to
go with something like `joystick_tutorial` for the repository.
That difference will make it easier to differentiate between the
[**`farm-ng/virtual-joystick`**](https://github.com/farm-ng/virtual-joystick-v2)
example and your own implementation if they both get cloned onto
the same machine.
We will assume you went with `joystick_tutorial` in this tutorial.
:::

## Renaming the 'TemplateApp'

Now that you've created the template, it's time to rename it for
your app.
In this tutorial, we'll go with `VirtualJoystickApp`.

Navigate to `main.py` in your app and open it with a text editor.

:::tip
We recommend [**Visual Studio Code**](https://code.visualstudio.com/)!
:::

There's 3 places to change the templated name:

```Python
# 1. Rename the class
class VirtualJoystickApp(App):
    def __init__(self) -> None:
        super().__init__()

...

# 2. Rename the program
if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="joystick-tutorial")

...

# 3. Run with the new class name
try:
    loop.run_until_complete(VirtualJoystickApp().app_func())
except asyncio.CancelledError:
    pass
```

### Run the camera app template

Now sync the app to the Brain and launch it with the
[**Brain Installation**](/docs/tutorials/introduction/getting-started-kivy#brain-setup)
for syncing the app onto the Amiga Brain!

After the requirements install, you should see the template kivy
app pop up.
Try out the `Back` button to exit the app.

![app-template](https://user-images.githubusercontent.com/53625197/216075393-6e578a01-677e-4279-b224-70fd3f73ce5f.png)

This tutorial will walk you through going from the camera-streamer (above) to the virtual joystick (below)

![Virtual-joystick-template](https://user-images.githubusercontent.com/53625197/200641720-c722fa9f-f6a3-4918-a4f0-d7270b73fd43.png)
