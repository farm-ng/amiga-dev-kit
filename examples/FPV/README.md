# amiga-dev-kit FPV example

This example shows how to connect off the shelf FPV equipment to your Amiga to enble realtime video see through remote control.  This is makes the Amiga remotely operable from the comfort of your office (or cab of your truck) and we're pretty psyched by how low cost and practical FPV control of the Amiga is.

Parts required:
- A radio control receiver, such as the frsky x8r  https://www.frsky-rc.com/product/x8r/ - On amazon $40 - https://www.amazon.com/dp/B00RCAHHFM
  - We chose this one, because it supports SBUS (which is compatible with UART ports on the Amiga Dev Kit microcontroller) and also sending telemetry for two way communication
- A radio controller, such as the frysky Taranis X9D Plus SE 2019 -https://www.amazon.com/dp/B07VYRGB5Q - $300
  - don't forget to also purchase a battery - https://www.amazon.com/Upgrade-3000mAh-Rechargeable-Radiolink-Transmitter/dp/B08FC4LWCG - $20
- An FPV video camera - https://www.amazon.com/dp/B06XPX18VY?psc=1&ref=ppx_yo2ov_dt_b_product_details&pldnSite=1 - $25
- An FPV video transmitter/receiver - https://www.amazon.com/dp/B01FXGQ2KC?psc=1&ref=ppx_yo2ov_dt_b_product_details&pldnSite=1 - $30
  - Note that this transmitter/receiver requires an RCA capable monitor on the receiver side.


# SBUS

SBUS is "inverted" UART.  So we cracked open the x8r receiver, and soldered the yellow wire directly to the output pin before it gets inverted, and connected this wire to UART RX pin on the Feather.

 Found this link useful https://oscarliang.com/uninverted-sbus-smart-port-frsky-receivers/
 
![PXL_20220818_181456142](https://user-images.githubusercontent.com/153678/185775798-3c4334fb-3c1c-4c21-8e6c-c21fb21c9f8d.jpg)


The SBUS protocol is fairly simple.  A 25 byte packet, start byte of 0x0F, end byte of 0x00, second to last byte is a parity byte, and then 16 11bit integers packed into the rest.  This is a usefull resource for decoding the packets -     # https://github.com/robotmaker/Real-time-graphical-representation-of-16-channel-S-BUS-protocol/blob/master/ProcessingSketch_SBUS_16_Channel_Simulation/ProcessingSketch_SBUS_16_Channel_Simulation.pde

The UART needs to be configured with:

```
busio.UART(None, board.RX, baudrate=100000, bits=8, parity=0, stop=2, timeout=0.002, receiver_buffer_size=256)
```

TODO support TX over the x8r smart bus.

# Wiring
TODO
1. Step 1
2. Step 2

# Code

This code builds on top of the hello_main_loop example, but replaces the keyboard input with radio control.  Wire up the SBUS, connect the microcontroller to the Amiga's canbus, enable Auto mode on the Amiga's dashboard and enjoy driving the Amiga remotely.

