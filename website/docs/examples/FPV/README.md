---
id: fpv
title: FPV Example
---
# amiga-dev-kit FPV example

### [Link to `FPV/code.py`](https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/FPV/code.py)


![fpv-in-truck-16x9-reduced](https://user-images.githubusercontent.com/11846963/185976329-c65208e1-a42a-436f-a191-9dcc57ecb354.jpg)

This example shows how to connect inexpensive off the shelf FPV equipment to your Amiga to enable realtime video streaming and teleoperation through remote control.
This makes the Amiga remotely operable from the comfort of your office (or cab of your truck) and we're pretty psyched by how low cost and practical FPV control of the Amiga is.



:::warning Hot off the press! 
Check out [video from our first farm test here](https://youtu.be/tN20_CspsyU)!
:::

![fpv_wiring_diagram](https://user-images.githubusercontent.com/11846963/189413919-56a2f380-289e-4205-bcb4-e31cba84bda4.png)

[Downloadable PDF of the diagram found here](https://github.com/farm-ng/amiga-dev-kit/files/9537718/fpv_wiring_diagram.pdf)

There are two discrete radio links in this setup: 
  1. Analog video stream
  2. Digital data stream (abstracting a UART serial connection via this simple but perhaps esoteric SBUS format)

As such, there are two transmitters, and two receivers as shown in the diagram above.  They are completely separate from one another, with exception to their shared power sources.


[//]: # (Wiring diagram https://lucid.app/lucidchart/7255e46a-d128-421e-9bc1-2329d3f280fa/edit?viewport_loc=285%2C-61%2C1837%2C2040%2C0_0&invitationId=inv_f69a2688-850c-4d8f-bfdb-c38752df5303#)

:::tip
If you have not gone through any of our examples yet, you should start with the [**Hello MainLoop**](./../hello_main_loop/) example.
:::

<!-- - Blog post about the project : -->

[//]: # (TODO - Add link to setting up the Feather with our recommended firmware)


## Parts required:
| Description                    | Recommendation                                     | Purchase Link                                                                                          | Price |
| ------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----- |
| Microcontroller kit                         | [farm-ng microcontroller kit](./../../mcu_kit/)    | [farm-ng store link](https://farm-ng.com/products/microcontroller-kit)                                 | $100  |
| Radio control receiver                      | [FrSky x8r](https://www.frsky-rc.com/product/x8r/) | [Amazon link](https://www.amazon.com/dp/B00RCAHHFM)                                                    | $40   |
| Radio remote control                        | FrSky Taranis X9D Plus SE 2019                     | [Amazon link](https://www.amazon.com/dp/B07VYRGB5Q)                                                    | $300  |
| Remote control battery                      | 7.4V 3000mAh 8C 2S LiPo Battery                    | [Amazon link](https://www.amazon.com/Upgrade-3000mAh-Rechargeable-Radiolink-Transmitter/dp/B08FC4LWCG) | $20   |
| FPV video camera                            | Inexpensive and works | [Amazon link](https://www.amazon.com/dp/B06XPX18VY)                                                    | $25   |
| FPV video transmitter/receiver              | Inexpensive and works | [Amazon link](https://www.amazon.com/dp/B01FXGQ2KC)                                                    | $30   |
| Small FPV video screen                      | LCD 5802D 7" Receiver Monitor                      | [getfpv link](https://www.getfpv.com/fpv/fpv-monitors/eachine-7-lcd5802d-dvr-5-8ghz-40ch-fpv-monitor.html)| $90 |
| DC/DC Buck converter - 24v to 12v           |                                                    | [Amazon Link](https://smile.amazon.com/Protooma-Voltage-Converter-Light%EF%BC%8CWaterproof-Transformer/dp/B0B1NRDTF5/ref=sr_1_1_sspa?crid=FDHT22Y0D5H1&keywords=24v+to+12v+converter+5a&qid=1662748022&sprefix=24v+to+12v+converter+5a%2Caps%2C107&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUlJMNjZRNFROMFVTJmVuY3J5cHRlZElkPUEwMzY4NzU5QlVNNlZFUzNKNjNIJmVuY3J5cHRlZEFkSWQ9QTA4NzcxMjEzSERJMFBGUUY0VDZKJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)                                                                                          | $15  |
| DC/DC Buck converter - 24v to 5v            | *This comes with our microcontroller kit | [Amazon Link](https://smile.amazon.com/DROK-090581-Converter-Step-down-Transformer/dp/B00CE75K0W/ref=sr_1_3?crid=1X1SSEWY1TEG6&keywords=24v+to+5v+converter+5a&qid=1662748102&sprefix=24v+to+5v+converter+5a%2Caps%2C96&sr=8-3)| $11 |
| Alternate step down, cheaper/smaller option | Will required a voltmeter to adjust output |  [Amazon link](https://smile.amazon.com/Maxmoral-Converter-Adjustable-Step-Down-Regulator/dp/B07MKQXNWG/ref=sr_1_6?crid=1ZJ4Z4GBUV64E&keywords=24v+to+5v+adjustable+step+down&qid=1662748233&sprefix=24v+to+5v+adjustable+step+down%2Caps%2C87&sr=8-6)| $8 |
| Enclosure                                   | [Hammond 1554 JGY (abs, gray, solid lid)](https://www.hammfg.com/part/1554JGY)| [Mouser Link](https://www.mouser.com/ProductDetail/Hammond-Manufacturing/1554JGY?qs=FmjOKN4Os87trO9vnjsZvg%3D%3D)  | $14 |
| Cord grip kit | We used a single PG-13.5 | [Amazon Link](https://smile.amazon.com/MAKERELE-Electrical-NPT-Waterproof-Connector/dp/B08R86BHBC/ref=sr_1_5?crid=2SYJ7I6BJ0HZT&keywords=cord+grip+kit&qid=1662750051&sprefix=cord+grip+kit%2Caps%2C142&sr=8-5)| $22 |
| VHB Double-stick tape for mounting stuff    |  Our favorite | [Amazon Link](https://smile.amazon.com/Width-Length-Black-Multipurpose-Double/dp/B07K4PQG8P/ref=sxts_rp_s_1_0?content-id=amzn1.sym.14b5a3ec-ddf3-42f1-bf1e-8515f8d25a34%3Aamzn1.sym.14b5a3ec-ddf3-42f1-bf1e-8515f8d25a34&crid=QLFBHDQ2W1UQ&cv_ct_cx=vhb&keywords=vhb&pd_rd_i=B07K4PQG8P&pd_rd_r=b76fadc2-12af-4732-8736-b46b4aa63cac&pd_rd_w=WnaiQ&pd_rd_wg=USSdg&pf_rd_p=14b5a3ec-ddf3-42f1-bf1e-8515f8d25a34&pf_rd_r=WDNTEH07SBH1HZZ0N2AV&psc=1&qid=1662749091&sprefix=vhb%2Caps%2C99&sr=1-1-f0029781-b79b-4b60-9cb0-eeda4dea34d6)|$15|
| Micro-grip rod (monitor to controller hack)| | [B&H Link](https://www.bhphotovideo.com/c/product/686707-REG/Matthews_350602_5_4_101mm_Rod_for.html)| $8|
| Micro-grip head (monitor to controller hack)| | [B&H Link](https://www.bhphotovideo.com/c/product/686694-REG/Matthews_350604_MICROgrip_Head.html)| $48 |


:::info
- We chose the [FrSky x8r](https://www.frsky-rc.com/product/x8r/) radio receiver because it supports:
  - SBUS (which is compatible with UART ports on the [`Amiga Dev Kit microcontroller`](./../../mcu_kit/))
  - Sending telemetry for two way communication (note: this tutorial only demonstrates one-way communication - joystick to rover)
- The recommended video transmitter/receiver requires an old-school RCA capable monitor on the receiver side, we recommend one above

:::

## What is SBUS?

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
Shown above, is the entire receiver rover side of the FPV setup, correctly wired and unpacked.  See also the wiring diagram above.

:::caution
SBUS is "inverted" UART, we want the un-inverted signal.  So need to do a little hardware hacking...  
::: 

The only aspect of the wiring that is not obvious in the wiring diagrams, is that in order to get a non-inverted UART signal out of the RC receiver on the rover side, you need to open the enclosure and solder a wire to one of the test points on the PCB as shown below.
So we cracked open the x8r receiver, and soldered a wire directly to the output pin before it gets inverted, and connected this wire to UART RX pin on the Feather.

Wiring the receiver to access the un-inverted signal

![x8r-receiver-solder-point-reduced](https://user-images.githubusercontent.com/11846963/185978326-a21598e7-fe93-4c99-9ff3-f3b047d586e6.jpg)


## Code

This code builds on top of the hello_main_loop example, but replaces the keyboard input with radio control.  Wire up the SBUS, connect the microcontroller to the Amiga's canbus, enable Auto mode on the Amiga's dashboard and enjoy driving the Amiga remotely.
