---
id: dashboard-debugging
title: Debugging error codes
---

# Debugging Error Codes

:::warning Deprecation Warning
This section is intended for the dashboard firmware v0.3.0 and older.
The error codes are human-readable in the dashboard firmware v0.4.0+.
:::

## Pendant Error

Pendant error codes are formatted as: `0x00`

### Guide to Decode Pendant Error Codes

- `WAITING_PENDANT_HEARTBEAT (2**0 or 1)`: System is awaiting a heartbeat signal from the pendant.
- `WAITING_PENDANT_STATE (2**1 or 2)`: System is waiting for a state update from the pendant.
- `PENDANT_HEARTBEAT_TIMEOUT (2**2 or 4)`: Triggered by a timeout in receiving the pendant's heartbeat.
- `PENDANT_STATE_TIMEOUT (2**3 or 8)`: Triggered by a timeout in receiving the pendant's state.
- `AUTO_MODE_ESTOP_REQUEST (2**4 or 16)`: Indicates an emergency stop request in auto mode from the pendant.

## Motor Error

Motor error messages are formatted as: `motor_10_codes = (0x00, 0x0000, 0x00, 0x00, 0x0000, 0x0000)`

The different fields are: **Error_code, EMCY code, Error registry, faults 2, faults 1, warning**

### Decoding Process

1. Identify the error category (Faults1, Faults2, Error Register, or Warnings).
2. Check the bit positions in the error code.
3. Refer to the respective section for the error description.

### Faults1 Bits (0-15)

- `0`: CONTROLLER_OVER_VOLTAGE
- `1`: PHASE_OVER_CURRENT
- `2`: CURRENT_SENSOR_CALIBRATION
- `3`: CURRENT_SENSOR_OVER_CURRENT
- `4`: CONTROLLER_OVER_TEMPERATURE
- `5`: MOTOR_HALL_SENSOR_FAULT
- `6`: CONTROLLER_UNDER_VOLTAGE
- `7`: POST_STATIC_GATING_TEST
- `8`: NETWORK_COMMUNICATION_TIMEOUT
- `9`: INSTANTANEOUS_PHASE_OVER_CURRENT
- `10`: MOTOR_OVER_TEMPERATURE
- `11`: THROTTLE_VOLTAGE_OUTSIDE_RANGE
- `12`: INSTANT_CONTROLLER_OVER_VOLTAGE
- `13`: INTERNAL_ERROR
- `14`: POST_DYNAMIC_GATING_TEST
- `15`: INSTANTANEOUS_UNDER_VOLTAGE

### Faults2 Bits (0-7)

- `0`: PARAMETER_CRC
- `1`: CURRENT_SCALING
- `2`: VOLTAGE_SCALING
- `3`: HEADLIGHT_UNDER_VOLTAGE
- `4`: TORQUE_SENSOR
- `5`: CAN_BUS
- `6`: HALL_STALL
- `7`: BOOTLOADER

### Error Register Bits (0-7)

- `0`: GENERIC_ERROR
- `1`: CURRENT
- `2`: VOLTAGE
- `3`: TEMPERATURE
- `4`: COMS_ERROR
- `5`: DEV_PROFILE_SPECIFIC
- `6`: RESERVED (ALWAYS 0)
- `7`: MANU_SPECIFIC

### Warnings Bits (0-15)

- `0`: COMMUNICATION_TIMEOUT
- `1`: HALL_SENSOR
- `2`: HALL_STALL
- `3`: WHEEL_SPEED_SENSOR
- `4`: CAN_BUS
- `5`: HALL_ILLEGAL_SECTOR
- `6`: HALL_ILLEGAL_TRANSITION
- `7`: VDC_LOW_FOLDBACK
- `8`: VDC_HIGH_FOLDBACK
- `9`: MOTOR_TEMPERATURE_FOLDBACK
- `10`: CONTROL_TEMPERATURE_FOLDBACK
- `11`: LOW_SOC_FOLDBACK
- `12`: HI_SOC_FOLDBACK
- `13`: I2T_FOLDBACK
- `14`: RESERVED
- `15`: BMS_TIMEOUT

## Converting Hexadecimal to Binary

For the Amiga dashboard, the errors are reported in hexadecimal values.
Here's a quick summary on how to convert hexadecimals to binary:

### 1. Understand the Hexadecimal System

Hexadecimal is a base-16 number system.
It uses 16 symbols: 0-9 represent values zero to nine, and A-F (or a-f) represent values ten to fifteen.

### 2. Identify Each Hexadecimal Digit

Break down the hexadecimal number into its individual digits. For example, in `0x0020`,
the digits are `0`, `0`, `2`, and `0`.

### 3. Convert Each Digit to Binary

Convert each hexadecimal digit to its four-bit binary equivalent using this mapping:

- `0` in hex is `0000` in binary
- `1` in hex is `0001` in binary
- `2` in hex is `0010` in binary
- `3` in hex is `0011` in binary
- `4` in hex is `0100` in binary
- `5` in hex is `0101` in binary
- `6` in hex is `0110` in binary
- `7` in hex is `0111` in binary
- `8` in hex is `1000` in binary
- `9` in hex is `1001` in binary
- `A` or `a` in hex is `1010` in binary
- `B` or `b` in hex is `1011` in binary
- `C` or `c` in hex is `1100` in binary
- `D` or `d` in hex is `1101` in binary
- `E` or `e` in hex is `1110` in binary
- `F` or `f` in hex is `1111` in binary

### 4. Combine the Binary Sequences

Write down the binary sequences of each digit next to each other, in the same order as the
hexadecimal digits.
For `0x0020`, convert each digit to binary:

- `0` → `0000`
- `0` → `0000`
- `2` → `0010`
- `0` → `0000`
Combined, the binary representation is `0000 0000 0010 0000`.

### 5. Result

The final binary number is the direct representation of the hexadecimal number in binary form.

## Examples

### Pendant error example

Consider `03`.

![pendant error-2](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/3a9b63de-7c0a-48c8-970a-fbdfdacf3b12)

Convert Hexadecimal to Binary:

- The hexadecimal code 03 needs to be converted to binary.
- In hexadecimal, 0 is 0000 and 3 is 0011 in binary.
- Therefore, 03 in hexadecimal is 0000 0011 in binary.

Decode Based on Binary Position:

- In binary, 0000 0011, we check which bits are set to 1.
- Reading from right to left (least significant bit to most significant bit),
the first and second bits are set (positions 0 and 1).
- These positions correspond to `2**0 or 1`, and `2**1 or 2` in decimal, respectively.

Match with Pendant Error Descriptions:

- 2**0 or 1 corresponds to WAITING_PENDANT_HEARTBEAT.
- 2**1 or 2 corresponds to WAITING_PENDANT_STATE.

### Motor error example

Consider `Motor 12: 13 (1000 r 21 f 00.0020 w 0022)`.

![motor error](https://github.com/farm-ng/amiga-dev-kit/assets/39603677/b04b5319-7b7f-410a-8dbe-51c06c15a3ec)

Breaking Down the Error Message:

- 1000: This is the EMCY code indicating a specific error or emergency condition.
- r 21: This is the error registry or status code.
- f 00 and 0020: These are the Faults error code in hexadecimal.
- w 0022: This is a Warnings code in hexadecimal.

Let's convert 00.0020 from hexadecimal to binary and match it against the Faults1 Bits guide.

- Hexadecimal 0020 converts to binary 0000 0000 0010 0000.
- The bit set is in position 5, counting from 0 (sixth bit).
- Referring to the Faults1 guide, position 5 corresponds to MOTOR_HALL_SENSOR_FAULT.

Interpreting Warnings (0022):

- Hexadecimal 0022 converts to binary 0000 0000 0010 0010.
- The bits set are in positions 1 and 5, counting from 0 (second and sixth bits).
- Referring to the Warnings Bits list:
  - Bit position 1 corresponds to HALL_SENSOR.
  - Bit position 5 corresponds to HALL_ILLEGAL_SECTOR.

The guide should help in quickly identifying and understanding specific errors based on their categories
and bit positions.
