---
id: electronics
title: Base Amiga
---

# Amiga's circuits

Your base Amiga is designed for simplicity in assembly and maintenance. It contains three main circuits essential for operation.

## Power Circuit

This circuit provides power to all other circuits and the motors, operating at 48 VDC. Power is drawn from the batteries via C14 connectors and distributed using the cross bar and truck bar harnesses via Anderson connectors.

![schematics of power circuit](./assets/circuit48.png)

Each fork also includes an additional Anderson connector for charging or connecting other 48V accessories.


## CAN Bus

Your Amiga uses a CAN network to send control messages between the dashboard, pendant, motors, and tools (if available). This network operates at 24 VDC provided by the Power Buck installed in one of the forks (typically fork B). To prevent current surges on the CAN Bus (and on the ESTOP circuit), there is a fuse box right out of the Power Buck. It uses 10 Amps automotive fuses.

![schematics of CAN Bus](./assets/can.png)

Inside each fork panel, NMEA-2000 hubs connect motor controllers to the CAN network. Extra ports can be used to connect the Dashboard, Pendant, or other CAN devices without needing longer cables. Termination connectors are present at the end of the CAN network and are essential for proper system function and network debugging.

:::tip pro tip
When you can't detect power on your CAN bus (red and black wires), there is a high chance you have a blown fuse. Inspect your fuse visually  and/or using a multimeter before proceeding with troubleshooting.
:::

## ESTOP Circuit
The ESTOP circuit is crucial for your Amiga, receiving 24 VDC from the Power Buck and distributing it via M8 connectors to the motor controllers and the physical STOP button.

![schematics of E-STOP circuit](./assets/estop.png)


Inside each fork panel, blue M8 Tees allow motor controllers to receive the E-STOP signal. Extra tees can be added for additional E-STOP cables, useful for operating tools. Farm-ng PTOs and H-Bridges require an E-STOP signal to operate.

The STOP button physically opens the circuit, cutting power to the motors. It includes a second connector for adding more buttons; if not in use, this connector should have a termination loop. **Without the termination loop the circuit remains open, leaving the robot in [E-STOP status](../dashboard/control-states#state-descriptions)**.

