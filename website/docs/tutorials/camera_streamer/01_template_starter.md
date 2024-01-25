---
id: template-starter
title: 01 - Template Starter
---
# Getting Started

## Prerequisites

You must have cloned the [`TemplateApp`](https://github.com/farm-ng/amiga-app-template-kivy)
onto your brain. This tutorial assumes that when you click your app icon on the screen you see:
![app-template](https://user-images.githubusercontent.com/53625197/217021857-aede9e9b-0f85-4b15-971f-c45944a3813c.png)

## Clone the [`TemplateApp`](https://github.com/farm-ng/amiga-app-template-kivy)

Now that you've created the template, it's time to rename it for
your app.
In this tutorial, we'll go with app name: `CameraApp`.

Navigate to `src/main.py` in your app and open it with a text editor.

There are 3 places to change the templated name:

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
``````
