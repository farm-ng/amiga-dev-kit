---
id: template-starter
title: 01 - Template Starter
---
# Template Starter

## Set up your Amiga brain template

:::tip
For the purpose of this tutorial, we will assume the name of this custom app is "camera_tutorial"
:::

## Rename the `TemplateApp`

Now that you've created the template, it's time to rename it for
your app.
In this tutorial, we'll go with `CameraApp`.

Navigate to `main.py` in your app and open it with a text editor.

:::tip
We recommend [**Visual Studio Code**](https://code.visualstudio.com/)!
:::

There's 3 places to change the templated name:

```Python
# 1. Rename the class
class CameraApp(App):
    def __init__(self) -> None:
        super().__init__()

...

# 2. Rename the program
if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="camera-tutorial")

...

# 3. Run with the new class name
try:
    loop.run_until_complete(CameraApp().app_func())
except asyncio.CancelledError:
    pass
```

### Run the app - template

Now sync the app to the Brain and launch it with the
[**Deploy Instructions**](/docs/brain/brain-apps#develop-and-test-in-the-robot)
for syncing the app onto the Amiga Brain!

After the requirements install, you should see the template kivy
app pop up.
Try out the `Back` button to exit the app.

![app-template](https://user-images.githubusercontent.com/53625197/217021857-aede9e9b-0f85-4b15-971f-c45944a3813c.png)
