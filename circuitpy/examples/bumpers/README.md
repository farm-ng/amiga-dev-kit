# Bumpers for the amiga

This `code.py` example reads up to four bumpers by attaching a 3 volt pin on a farm-ng [feather microcontroller](https://amiga.farm-ng.com/docs/mcu_kit/) to the "high" side of a bumper switch and bringing the low side to one of four pins, D10-D13 on the chip.

The CAN bus message ID will correspond to the value in `node_id.txt` (currently `0x1`). For safety devices, this value should be in the range `[0x1, 0x5]`.
The CAN bus message data takes the form of 8 bytes coded as 1 signed char, 1 signed short, and 5 pad bytes.
The lower order bits of the unsigned short are set (where "1" means "bumper pressed" and "0" means "not pressed).

So pins are bit coded in the first 4 bits as:
   * bit 0 => pin D10 => 0x1,
   * bit 1 => pin D11 => 0x2,
   * bit 2 => pin D12 => 0x4,
   * bit 3 => pin D13 => 0x8

The dashboard will read the `BumperState` message as a generic `EstopRequest` message and treat the unsigned short as pad bytes.
