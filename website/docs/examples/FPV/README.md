---
id: fpv
title: FPV Example
---
# amiga-dev-kit FPV example

### [Link to `FPV/code.py`](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/FPV/code.py)


![fpv-in-truck-16x9-reduced](https://user-images.githubusercontent.com/11846963/185976329-c65208e1-a42a-436f-a191-9dcc57ecb354.jpg)

This example shows how to connect off the shelf FPV equipment to your Amiga to enable realtime video streaming and teleoperation through remote control.
This makes the Amiga remotely operable from the comfort of your office (or cab of your truck) and we're pretty psyched by how low cost and practical FPV control of the Amiga is.

:::tip
If you have not gone through any of our examples yet, you should start with the [**Hello MainLoop**](./../hello_main_loop/) example.
:::

## Resources

:::warning
Add plug-in for embedding youtube
[Video demonstration of our first test](https://youtu.be/tN20_CspsyU)
:::

:::warning
drop fpv wiring image here
[Wiring diagram](https://lucid.app/lucidchart/7255e46a-d128-421e-9bc1-2329d3f280fa/edit?viewport_loc=285%2C-61%2C1837%2C2040%2C0_0&invitationId=inv_f69a2688-850c-4d8f-bfdb-c38752df5303#)
:::


<!-- - Blog post about the project : -->

- Setting up the Feather with our recommended firmware :


### Parts required:
| Description                    | Recommendation                                     | Purchase Link                                                                                          | Price |
| ------------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----- |
| microcontroller kit            | [farm-ng microcontroller kit](./../../mcu_kit/)    | [farm-ng store link](https://farm-ng.com/products/microcontroller-kit)                                 | $100  |
| Radio control receiver         | [FrSky x8r](https://www.frsky-rc.com/product/x8r/) | [Amazon link](https://www.amazon.com/dp/B00RCAHHFM)                                                    | $40   |
| Radio remote control           | FrSky Taranis X9D Plus SE 2019                     | [Amazon link](https://www.amazon.com/dp/B07VYRGB5Q)                                                    | $300  |
| Remote control battery         | 7.4V 3000mAh 8C 2S LiPo Battery                    | [Amazon link](https://www.amazon.com/Upgrade-3000mAh-Rechargeable-Radiolink-Transmitter/dp/B08FC4LWCG) | $20   |
| FPV video camera               |                                                    | [Amazon link](https://www.amazon.com/dp/B06XPX18VY)                                                    | $25   |
| FPV video transmitter/receiver |                                                    | [Amazon link](https://www.amazon.com/dp/B01FXGQ2KC)                                                    | $30   |


:::warning
- TODO : Add buck converters required to order
- TODO : Add enclosure recommended
- TODO : Add portable screen
- TODO : Add ???
:::

:::info
- We chose the [FrSky x8r](https://www.frsky-rc.com/product/x8r/) radio receiver because it supports:
  - SBUS (which is compatible with UART ports on the [`Amiga Dev Kit microcontroller`](./../../mcu_kit/))
  - Sending telemetry for two way communication
- The recommended transmitter/receiver requires an RCA capable monitor on the receiver side.
:::

## About SBUS

:::tip SBUS references
This topic is explained more thoroughly on: [Uninverted SBUS and Smart Port on Frsky Receivers](https://oscarliang.com/uninverted-sbus-smart-port-frsky-receivers/)

We also recommend watching this [video overview on SBUS](https://youtu.be/IqLUHj7nJhI?t=398), that visually explains inverted vs. non-inverted uart and packet structure.
:::

The SBUS protocol is fairly simple.
- A 25 byte packet
  - start byte of 0x0F
  - 16x 11-bit integers packed into the rest
  - second to last byte is a parity byte
  - end byte of 0x00

[This is a useful resource for decoding the packets](https://github.com/robotmaker/Real-time-graphical-representation-of-16-channel-S-BUS-protocol/blob/master/ProcessingSketch_SBUS_16_Channel_Simulation/ProcessingSketch_SBUS_16_Channel_Simulation.pde)

The UART needs to be configured with:

```
busio.UART(None, board.RX, baudrate=100000, bits=8, parity=0, stop=2, timeout=0.002, receiver_buffer_size=256)
```

TODO support TX over the x8r smart bus.

## Wiring
![fpv wiring example](https://user-images.githubusercontent.com/11846963/185976402-ff8c4c77-5a08-42b0-865f-d2840fc0b960.jpg)
Shown above, is the entire receiver rover side of the FPV setup, correctly wired and unpacked.


## TODO / WIP
1. Step 1

SBUS is "inverted" UART.  So we cracked open the x8r receiver, and soldered the yellow wire directly to the output pin before it gets inverted, and connected this wire to UART RX pin on the Feather.

Wiring the receiver to access the un-inverted signal

![x8r-receiver-solder-point-reduced](https://user-images.githubusercontent.com/11846963/185978326-a21598e7-fe93-4c99-9ff3-f3b047d586e6.jpg)


## Code

This code builds on top of the hello_main_loop example, but replaces the keyboard input with radio control.  Wire up the SBUS, connect the microcontroller to the Amiga's canbus, enable Auto mode on the Amiga's dashboard and enjoy driving the Amiga remotely.
