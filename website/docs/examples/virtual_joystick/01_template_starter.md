---
id: template-starter
title: 01 - Template Starter
---
# Template Starter


## Set up your Amiga brain template

Follow the instructions in [Developing Custom Applications](./../../brain/custom-applications.md)
to set up an application from the [amiga-app-template](https://github.com/farm-ng/amiga-app-template).

:::tip
Feel free to choose any name, but it's recommended to go with `Virtual Joystick`.
:::

## Rename the `TemplateApp`

Now that you've created the template, it's time to rename it for your app.
In this tutorial, we'll go with `VirtualJoystickApp`.

Navigate to `main.py` in your app and open it with a text editor.

:::tip
We recommend [Visual Studio Code](https://code.visualstudio.com/)!
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
    parser = argparse.ArgumentParser(prog="virtual-joystick")

...

# 3. Run with the new class name
try:
    loop.run_until_complete(VirtualJoystickApp().app_func())
except asyncio.CancelledError:
    pass
```

### Run the app - template

Now sync the app to the Brain and launch it with the following instructions!

:::info Deploy Instructions
[Deploy Instructions](../../brain/custom-applications.md) for syncing the app onto the Amiga Brain.
:::

You should see a blank kivy app pop up, once loaded, with only a `Back` button.
Try out the button to exit the app.

![template](https://user-images.githubusercontent.com/53625197/200450581-7c93eb1f-3aa2-49f5-9c52-51e8b051c76e.png)


:::caution Coming soon
Link to this checkpoint
:::
