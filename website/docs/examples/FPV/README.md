---
id: fpv
title: FPV Example
---
# amiga-dev-kit FPV example

### [Link to `FPV/code.py`](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/FPV/code.py)


![fpv-in-truck-16x9-reduced](https://user-images.githubusercontent.com/11846963/185976329-c65208e1-a42a-436f-a191-9dcc57ecb354.jpg)

This example shows how to connect off the shelf FPV equipment to your Amiga to enable realtime video streaming and teleoperation through remote control.
This makes the Amiga remotely operable from the comfort of your office (or cab of your truck) and we're pretty psyched by how low cost and practical FPV control of the Amiga is.

## Resources
- Video demonstration of our first test : https://youtu.be/tN20_CspsyU
- Link to wiring diagram in LucidChart : https://lucid.app/lucidchart/7255e46a-d128-421e-9bc1-2329d3f280fa/edit?viewport_loc=285%2C-61%2C1837%2C2040%2C0_0&invitationId=inv_f69a2688-850c-4d8f-bfdb-c38752df5303#
- Blog post about the project :
- Adafruit Feather Documentation (microcontroller we commonly use for sending/receiving CANbus messages : https://learn.adafruit.com/adafruit-feather-m4-can-express
- Setting up the Feather with our recommended firmware :


### Parts required:
- A radio control receiver, such as the FrSky x8r  https://www.frsky-rc.com/product/x8r/ - On amazon $40 - https://www.amazon.com/dp/B00RCAHHFM
  - We chose this one, because it supports SBUS (which is compatible with UART ports on the Amiga Dev Kit microcontroller) and also sending telemetry for two way communication
- A radio controller, such as the FrSky Taranis X9D Plus SE 2019 -https://www.amazon.com/dp/B07VYRGB5Q - $300
  - don't forget to also purchase a battery - https://www.amazon.com/Upgrade-3000mAh-Rechargeable-Radiolink-Transmitter/dp/B08FC4LWCG - $20
- An FPV video camera - https://www.amazon.com/dp/B06XPX18VY?psc=1&ref=ppx_yo2ov_dt_b_product_details&pldnSite=1 - $25
- An FPV video transmitter/receiver - https://www.amazon.com/dp/B01FXGQ2KC?psc=1&ref=ppx_yo2ov_dt_b_product_details&pldnSite=1 - $30
  - Note that this transmitter/receiver requires an RCA capable monitor on the receiver side.


## About SBUS

SBUS is "inverted" UART.  So we cracked open the x8r receiver, and soldered the yellow wire directly to the output pin before it gets inverted, and connected this wire to UART RX pin on the Feather.

Found this link useful https://oscarliang.com/uninverted-sbus-smart-port-frsky-receivers/
Here is a great video overview on SBUS, visually explaining inverted vs. non-inverted uart and packet structure https://youtu.be/IqLUHj7nJhI?t=398 

The SBUS protocol is fairly simple.  A 25 byte packet, start byte of 0x0F, end byte of 0x00, second to last byte is a parity byte, and then 16 11bit integers packed into the rest.  This is a useful resource for decoding the packets -     # https://github.com/robotmaker/Real-time-graphical-representation-of-16-channel-S-BUS-protocol/blob/master/ProcessingSketch_SBUS_16_Channel_Simulation/ProcessingSketch_SBUS_16_Channel_Simulation.pde

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
Wiring the receiver to access the un-inverted signal

![x8r-receiver-solder-point-reduced](https://user-images.githubusercontent.com/11846963/185978326-a21598e7-fe93-4c99-9ff3-f3b047d586e6.jpg)


## Code

This code builds on top of the hello_main_loop example, but replaces the keyboard input with radio control.  Wire up the SBUS, connect the microcontroller to the Amiga's canbus, enable Auto mode on the Amiga's dashboard and enjoy driving the Amiga remotely.

