---
id: map-recorder
title: Map Recorder
---

# Map Recorder

The Map Recorder application enables users to record and manage field maps for the Amiga.

Real-time map
![Visualize recorder path and zones](https://github.com/user-attachments/assets/3b8d64a4-f327-42d5-b06d-705b2d579ae7)

## Visualize

Opens panel showing saved routes/zones. Toggle between Zones and Routes view. Hide button to close panel

**Record**: Starts new GPS path recording

**Resume**: Continues paused recording

**Pause**: Temporarily stops recording

## Mark Location

Adds waypoint at current GPS position. Used to mark important field locations

**Undo Zone** Removes last recorded zone segment

**Undo Last** Removes last track point

**Abort** Cancels entire recording session (Only active during recording)

**Save** Brings up a pop up to save recorded path/zone. Allows custom naming

## Studio

**Path/Zones/Safety** Switches between viewing paths, farming zones, or safety zones.
Each item has delete button (trash icon)

**Modify** (Edit icon) Enables editing of existing paths/zones. Shows "Cancel" when active

**Create** (Plus square icon) Enables drawing new zones on map. Shows "Cancel" when active

**Save** Brings up a pop up to save recorded path/zone. Allows custom naming

### Navigation Controls

**Studio/Recorder Toggle** Switches between recording and editing modes

**Exit to Launcher** Returns to launcher application

**Center Map** (Crosshair icon) Centers map on robot position. Only visible in Studio mode

### Zone Types

**Transition** (Orange)

**Farming** (Light Green)

**Safety Zones** (Purple)

### Real-time Features

GPS position tracking
Robot heading indicator
WebSocket updates for state changes
Error notifications with E-Stop trigger
