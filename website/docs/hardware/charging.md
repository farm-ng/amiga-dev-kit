---
id: charging
title: Batteries and Charging
---

## Batteries

Your Amiga use two batteries inside forks A and B, but two more can be added on forks C and D
for more energy demanding applications. The specifications for each battery are:

|Parameters| Values|
|---|---|
|Rated capacity | 15 AH |
|Nominal Voltage| 44 V |
|Maximum Charger Voltage | 50.4 V|
|Over-charge voltage protection | 51 V|
|Over-discharge voltage protection|33.6 V|
|Maximum charge current | 30 A |
|Maximum discharge current | 30 A |
|Weight| 5.2 Kg (11.5 Lb)|
|Dimensions|360 x 150 x 68 mm|
|Operation temperature (charging)| 0 ~ 45 C (32 ~ 113 F)|
|Operation temperature (discharging)| -20 ~ 60 C (-4 ~ 140 F) |

<br/>
To protect all circuits in your Amiga, all batteries are equipped with a fuse located on its side
close to the power output connector. The fuse must be 30 Amp, Slow blow, and we recommend using
ceramic fuses.
Remove it using a phillips screwdriver.

![Changing battery fuse](./assets/fuse.jpeg)

:::tip pro tip
When you battery is not supplying any voltage to the robot, it is likely due to a blown fuse.
Verify its integrity using a multimeter before you proceed with your troubleshooting process.
:::

## Charging you Amiga

Each Amiga typically comes with 2 batteries and 2 chargers. Additional batteries and ways to
connect extra batteries on the same robot are available at our online shop.

To charge your batteries, remove them from the robot, lift the handle and connect the
charger. You will notice the LED in your charging brick will turn RED while the battery is
charging and GREEN when done.

![Amiga's battery charging port](../hardware/assets/dock.jpg) ![Amiga's charging on a bench](../hardware/assets/charging.jpeg)

:::info
Your standard charger can output power at 2 A (max), which will charge a battery for an Amiga with
standard configurations in about 5 hours.
:::

Alternatively, you can charge your batteries directly in your Amiga connecting it to one of the
spare Anderson connectors located inside the forks.

![Amiga's in vehicle charging](../hardware/assets/charger.jpg)

Any 50+ VDC 2+ A charger can be modified to be used as an in-vehicle charging. At Farm-ng we use a
50.4VDC 5A unit that can be purchased at our store. The important is to know that the batteries
will charge at max peak voltage of 50.4 VDC, not to be confused with the nominal battery voltage
(48 V).

:::info
A 5A charger connected to the power circuit will charge both batteries in an standard Amiga in
about 4 hours.
:::

:::tip
In order for in-vehicle charging to work, you need to keep your batteries ON (keys parallel to
ground).
:::
