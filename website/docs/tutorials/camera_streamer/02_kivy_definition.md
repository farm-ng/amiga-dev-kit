---
id: kivy-definition
title: 02 - Kivy Definition
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

The [**`src/res/main.kv`**](https://github.com/farm-ng/amiga-app-template-kivy/blob/main/src/res/main.kv)
file of the
[**amiga-app-template-kivy**](https://github.com/farm-ng/amiga-app-template)
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

```python
RelativeLayout:
    TabbedPanel:
        pos_hint: {"x": 0.0, "top": 1.0}
        do_default_tab: False
RelativeLayout:
    TabbedPanel:
        pos_hint: {"x": 0.0, "top": 1.0}
        do_default_tab: False
        TabbedPanelItem:
            text: "Rgb"
            on_press: app.update_view('rgb')
            Image:
                id: rgb
        TabbedPanelItem:
            text: "Disparity"
            on_press: app.update_view('disparity')
            Image:
                id: disparity
        TabbedPanelItem:
            text: "Left"
            on_press: app.update_view('left')
            Image:
                id: left
        TabbedPanelItem:
            text: "Right"
            on_press: app.update_view('right')
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
            source: "assets/back_button_normal.png" if
                self.parent.state == "normal" else "assets/back_button_down.png"
            pos: self.parent.pos
            size: self.parent.size

```

`app.update_view()` method is used to update a class
level variable which stores which tab is currently being viewed.
There are alternatives using kivy variables, however, this method is reliable.

Next, we will get into [main.py](https://github.com/farm-ng/camera-streamer-kivy/tree/main/src)
and break down how to send images from the oak service to be visualized on the brain.
