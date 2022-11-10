---
id: further-exercises
title: 07 - Further Exercises
---
# Further Exercises

### Further exercises

Optionally, go beyond the tutorial and try to add features to this example.
Two options are:

#### Adjustable rates

Define two kivy [`Slider`](https://kivy.org/doc/stable/api-kivy.uix.slider.html) widgets that allow changing `max_speed` & `max_angular_rate`!
Play around with where you can put these and how you can link them directly to the value in the `VirtualJoystickApp`.

Just remember, the actual rates the amiga drives at are limited by the vehicle control unit (VCU), so don't be surprised if the true max speed doesn't reflect the slider.


#### Toggle between Auto modes

Try to add a kivy `Button` widget that toggles the requested `AmigaControlState` so the brain is not constantly trying to take control of the dashboard while running.

Or more advanced, add a button that starts/stops the sending of canbus messages.
This could require stopping the stream of messages from the generator, signalling to the `sendCanbusMessage` to stop, and re-initializing the `sendCanbusMessage` RPC later.

:::tip possible hint
sending `grpc.aio.EOF` might do it...
:::
