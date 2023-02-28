# Bumpers for the amiga

This `code.py` example reads up to four bumpers by attaching a 3 volt pin on a farm-ng [feather microcontroller](https://amiga.farm-ng.com/docs/mcu_kit/) to the "high" side of a bumper switch and bringing the low side to one of four pins, D10-D13 on the chip.

The CAN Bus, message ID will be **BUMPER_NODE_ID = 0x2F** which takes the form of 8 bytes coded as 4 unisigned shorts. The lower order bits of the first short are set (where "1" means "bumper pressed" and "0" means "not pressed). 

So pins are bit coded in the first 4 bits as:
   * bit 0 => pin D10, 
   * bit 1 => pin D11, 
   * bit 2 => pin D12, 
   * bit 3 => pin D13
