---
id: template-starter
title: 01 - Template Starter
---
# Template Starter


## Set up your Amiga brain template

Follow the instructions in [**Developing Custom Applications**](/docs/brain/custom-applications.mdx)
to set up an application from the [**amiga-app-template**](https://github.com/farm-ng/amiga-app-template).

Be sure not to skip the [Customizing an app](/docs/brain/brain-apps#customizing-an-app) required to properly configure
the library and app you are creating.

:::tip
Feel free to choose any name, but it's recommended to go with something like `joystick_tutorial` for the repository.
That difference will make it easier to differentiate between the [`farm-ng/virtual-joystick`](https://github.com/farm-ng/virtual-joystick)
example and your own implementation if they both get cloned onto the same machine.

We will assume this is the case in the tutorial.
:::

## Rename the `TemplateApp`

Now that you've created the template, it's time to rename it for your app.
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
    parser = argparse.ArgumentParser(prog="joystick-template")

...

# 3. Run with the new class name
try:
    loop.run_until_complete(VirtualJoystickApp().app_func())
except asyncio.CancelledError:
    pass
```

### Run the app - template

Now sync the app to the Brain and launch it with the
[**Deploy Instructions**](/docs/brain/brain-apps#develop-and-test-in-the-robot)
for syncing the app onto the Amiga Brain!

After the requirements install, you should see the template kivy app pop up.
Try out the `Back` button to exit the app.

![template](https://user-images.githubusercontent.com/53625197/200450581-7c93eb1f-3aa2-49f5-9c52-51e8b051c76e.png)
