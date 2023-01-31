---
id: kivy-definition
title: 02 - Kivy Definition
---
# Kivy Definition

:::caution TODO
This is a placeholder for the tutorial
:::


#### TabbedPanel of Image widgets
BoxLayout
To conveniently package the 4 image streams from the oak camera in the kivy `Window`, we will add the `Image` widgets as a `TabbedPanel`.
A `BoxLayout` will be convenient to stack the `TabbedPanel` of image streams next to the `Labels` displaying the `AmigaTpdo1` values streamed from the canbus.
So we push the `BoxLayout` of `Label` widgets one level deeper and add an additional `BoxLayout` level.

So we will have a `BoxLayout` that stacks 2 sub-widgets horizontally (by default) of:
1. Another `BoxLayout` with 3 vertically stacked labels
2. A [**`TabbedPanel`**](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html).

The `TabbedPanel` is used to select between different pages, which in our case is 4 `Image` Widgets.

Our kivy string becomes:

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
    BoxLayout:
        BoxLayout:
            size_hint_x: 0.3
            orientation: 'vertical'
            Label:
                text: "state:\\n" + str(app.amiga_state)
            Label:
                text: "speed:\\n" + str(app.amiga_speed) + "  [m/s]"
            Label:
                text: "angular rate:\\n" + str(app.amiga_rate) + "  [rad/s]"
        TabbedPanel:
            do_default_tab: False
            TabbedPanelItem:
                text: "Rgb"
                Image:
                    id: rgb
            TabbedPanelItem:
                text: "Disparity"
                Image:
                    id: disparity
            TabbedPanelItem:
                text: "Left"
                Image:
                    id: left
            TabbedPanelItem:
                text: "Right"
                Image:
                    id: right
"""
```

We add the `size_hint_x: 0.3` to the `BoxLayout` of `Label` widgets so that the `TabbedPanel` gets 70% of the width of the parent layer `BoxLayout`, and the `BoxLayout` of `Label` widgets get 30% of the width.

For the `TabbedPanel`, we do not need a `default_tab` and we assign the `text` each tab will display.

In the Python app, we can access a `Widget` directly using the widget `id:` as in:
```Python
FOO_WIDGET = self.root.ids['FOO_WIDGET_ID']
```
So we assign each `Image` widget an id so it can be easily referenced in the `App`.

- Reference: [**TabbedPanel**](https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html)
- Reference: [**Image**](https://kivy.org/doc/stable/api-kivy.uix.image.html)
