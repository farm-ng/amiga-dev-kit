---
id: kivy-definition
title: 01 - Kivy Definition
---
# Kivy

In this tutorial, we will be adding a few new elements to our app, a Tabbed Panel and Images
to make an app that looks like this:

![camera-streamer](https://user-images.githubusercontent.com/53625197/216075393-6e578a01-677e-4279-b224-70fd3f73ce5f.png)

This app is constructed using four tabbed panels to represent
each of the available streams from the oak camera.
These are rgb (color image), disparity (depth), and left and right streams.

1. [**`TabbedPanel`**](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html)
for selecting camera stream
2. [**`Image`**](https://kivy.org/doc/stable/api-kivy.uix.image.html)
widgets for displaying the camera streams

And we will continue using a [**`Button`**](https://kivy.org/doc/stable/api-kivy.uix.button.html)
for exiting the app.

## Starting with the template

Right now our file, [**`src/res/main.kv`**](https://github.com/farm-ng/amiga-app-template-kivy/blob/main/src/res/main.kv)
file
defines a root of a `RelativeLayout`, with a
`Button`, and a `Label`,
as explained in [**kivy app definition**](/docs/tutorials/introduction/template-overview#kivy-app-definition).

We will keep the `RelativeLayout` root and the `Button` for
exiting the app, but remove the `Label` widget.
Instead, we will add a `TabbedPanel` for displaying the image
streams from our Oak device.

The `RelativeLayout` allows for overlapping widgets,
which is nice as we can allow the image streams to take up the
full size of our window with the button drawn on top.
Notice we draw the `Button` after the `TabbedPannel` so it is
visible and usable.

## TabbedPanel of Image widgets

:::info
The Python implementation of the
[**camera-streamer**](https://github.com/farm-ng/camera-streamer)
app can be found at
[**`src/res/main.kv`**](https://github.com/farm-ng/camera-streamer/blob/main/src/res/main.kv).
You should open that file for reference as you follow along.
:::

To conveniently package the 4 image streams from the oak camera
in the kivy `Window`, we will add the `Image` widgets as a
`TabbedPanel`.
The `TabbedPanel` is used to select between different pages,
which in our case is 4 `Image` Widgets.

For the `TabbedPanel`, we do not need a `default_tab` and we
assign the `text` each tab will display.

We assign each `Image` widget an `id` so it can be easily
referenced in the Python `App`.
This will allow us to set the correct image stream to the correct
tab, so the `rgb` image stream is shown on the `rgb` panel and
the `left` stereo camera stream is displayed on the `left` tab.

Adjust "src/res/main.kv":

```python
RelativeLayout:
    TabbedPanel:
        pos_hint: {"x": 0.0, "top": 1.0}
        do_default_tab: False
        id: tab_root
        TabbedPanelItem:
            text: "rgb"
            Image:
                id: rgb
        TabbedPanelItem:
            text: "disparity"
            Image:
                id: disparity
        TabbedPanelItem:
            text: "left"
            Image:
                id: left
        TabbedPanelItem:
            text: "right"
            Image:
                id: right
    Button:
        id: back_btn_layout
        pos_hint: {"x": 0.0, "top": 0.925}
        background_color: 0, 0, 0, 0
        size_hint: 0.1, 0.1
        background_normal: "assets/back_button.png"
        on_release: app.on_exit_btn()
        Image:
            source: "assets/back_button_normal.png" if self.parent.state == "normal" else "assets/back_button_down.png"
            pos: self.parent.pos
            size: self.parent.size

```

Now, we'd like to test if the changes we made to the kivy string compile.

:::warning
You'll see if you run `./entry.sh` you get an error:

```bash
 Traceback (most recent call last):
   File "kivy/properties.pyx", line 961, in kivy.properties.ObservableDict.**getattr**
 KeyError: 'counter_label'
```

:::

If we update our template_function():

```python
    async def template_function(self) -> None:
        """Placeholder forever loop."""
        while self.root is None:
            await asyncio.sleep(0.01)

        while True:
            print(self.root.ids["tab_root"].current_tab.text)
            await asyncio.sleep(1.0)
```

With this modification, when we run ```./entry.sh``` the terminal will start printing
the text attribute of the current tab.

```python
rgb
rgb
rgb
left
right
right
right
```

Since we haven't connected to the oak service yet, each of the tabs will be blank, but
this test proves to us that we have created the tabbed panels and can read which one
we're looking at:)
