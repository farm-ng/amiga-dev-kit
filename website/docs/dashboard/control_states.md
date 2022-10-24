---
id: control-states
title: Amiga Control States
---

## Amiga control states


### State transition flowchart

```mermaid
  flowchart TB;
    subgraph Start_Up
        Boot-- Warm up -->Manual_Ready
    end

    subgraph Active___states__
        direction LR
        Manual_Active <-- O / CRUISE --> Cruise_Control
        subgraph Auto
            direction TB
            Auto_Ready <-- AmigaRpdo1 --> Auto_Active
        end
        Manual_Active-- Auto mode tab -->Auto
        Manual_Active <-. X / BRAKE .- Auto
        Manual_Active <-. X / BRAKE .- Cruise_Control
    end

    Manual_Ready -- Start / Vamos --> Manual_Active
    Active___states__ -- E-stop condition --> E-stopped
    Start_Up -- E-stop condition --> E-stopped
    Manual_Ready <-. Clear E-stop condition .- E-stopped

```


### State descriptions
- **Boot**
  - Amiga is starting up
- **Manual Ready**
  - Amiga is ready to use!
- **Manual Active**
  - Manual driving with the pendant. Amiga does not hold fwd/rev or turning speed
- **Cruise Control**
  - Pendant adjusts fwd/rev speed. Amiga holds fwd/rev speed
  - Perturb pendant left/right for turning. Amiga does not hold turning speed
- **Auto Ready**
  - Amiga is ready for auto control to take over
  - Pendant only has button interactions
- **Auto Active**
  - Amiga is actively being driven by auto mode
  - Pendant only has button interactions
- **E-stopped**
  - An E-stop condition has been triggered by
    - Physical press of the large E-stop button
    - Loss of communication with a critical component (pendant, motor controllers, etc.)
    - Over / under charged batteries
    - Motor temperature or current spike
    - Etc.
  - E-stop condition must be cleared before transition to Manual Ready state


### Transition descriptions

- **Warm up**
  - Amiga components go through start up procedures
  - Dashboard waits for all components to signal they are ready
  - Transitions
    - `Boot -> Manual Ready`
- **Start / Vamos**
  - The `[Start / Vamos]` button on the dashboard touchscreen is pressed
  - Transitions
    - `Manual Ready -> Manual Active`
- **O / CRUISE**
  - The O / CRUISE pendant button is pressed
    - The top left button either has a circle or the word CRUISE, depending on your pendant version
  - Transitions
    - `Manual Active <--> Cruise Control`
- **X / BRAKE**
  - The X / BRAKE pendant button is pressed
    - The bottom left button either has an X or the word BRAKE, depending on your pendant version
  - Amiga speed is brought to a stop
  - Transitions
    - `Cruise Control -> Manual Active`
    - `Auto Ready -> Manual Active`
    - `Auto Active -> Manual Active`
- **Auto mode tab**
  - Navigate to the auto mode tab on the dashboard
  - Press the `[AUTO CONTROL]` button
  - The `AUTO READY` state will illuminate, if state transition is permitted
- **AmigaRpdo1**
  - Transition between Auto ready and auto active state (both directions) is requested over CAN with an AmigaRpdo1 message
  - The `AUTO READY` or `AUTO ACTIVE` state will illuminate, corresponding to the state the Amiga is in
  - Transitions
    - `Auto Ready <--> Auto Active`
- **E-stop condition**
  - E-stopped mode is automatically triggered by a qualifying issue (see above)
  - Transitions
    - `Manual Ready -> E-stopped`
    - `Manual Active -> E-stopped`
    - `Cruise Control -> E-stopped`
    - `Auto Ready -> E-stopped`
    - `Auto Active -> E-stopped`
- **Clear E-stop condition**
  - E-stopped mode is automatically cleared by resolving the issue that triggered it
  - Transitions
    - `E-stopped -> Manual Ready`
