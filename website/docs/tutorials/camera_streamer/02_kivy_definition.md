---
id: kivy-definition
title: 02 - Kivy Definition
---
# Kivy Definition

:::info
In the [**`src/res/main.kv`**](https://github.com/farm-ng/camera-streamer/blob/main/src/res/main.kv) file of the [**camera-streamer**](https://github.com/farm-ng/camera-streamer) app we define the kivy app.
You should open that file for reference as you follow along.
:::

Our app will have two components:

1. A [**`TabbedPanel`**](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html) of [**`Image`**](https://kivy.org/doc/stable/api-kivy.uix.image.html) widgets for displaying the camera streams
2. A [**`Button`**](https://kivy.org/doc/stable/api-kivy.uix.button.html) for exiting the app

### Starting with the template

The [**`src/res/main.kv`**](https://github.com/farm-ng/amiga-app-template/blob/main/src/res/main.kv) file of the [**amiga-app-template**](https://github.com/farm-ng/amiga-app-template) defines a root of a `RelativeLayout`, with a `Button`, and a `Label`, as explained in [**kivy app definition**](/docs/tutorials/introduction/template-overview#kivy-app-definition).

We will keep the `RelativeLayout` root and the `Button` for exiting the app, but remove the `Label` widget.
Instead, we will add a `TabbedPanel` for displaying the image streams from our Oak device.

The `RelativeLayout` allows for overlapping widgets,
which is nice as we can allow the image streams to take up the full size of our window with the button drawn on top.
Notice we draw the `Button` after the `TabbedPannel` so it is visible and usable.

### TabbedPanel of Image widgets

To conveniently package the 4 image streams from the oak camera in the kivy `Window`, we will add the `Image` widgets as a `TabbedPanel`.
The `TabbedPanel` is used to select between different pages, which in our case is 4 `Image` Widgets.

For the `TabbedPanel`, we do not need a `default_tab` and we assign the `text` each tab will display.

We assign each `Image` widget an `id` so it can be easily referenced in the Python `App`.
This will allow us to set the correct image stream to the correct tab, so the `rgb` image stream is shown on the `rgb` panel and the `left` stereo camera stream is displayed on the `left` tab.

In the Python app, we can access a `Widget` directly using the widget `id` in two ways:

```Python
# As a dictionary
FOO_WIDGET = self.root.ids['FOO_WIDGET_ID']
# As an attribute
FOO_WIDGET = self.root.ids.FOO_WIDGET_ID
```

- Reference: [**TabbedPanel**](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html)
- Reference: [**Image**](https://kivy.org/doc/stable/api-kivy.uix.image.html)
