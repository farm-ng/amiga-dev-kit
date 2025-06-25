---
id: map-recorder
title: Map Recorder
---
The Map Recorder application enables users to record and manage field maps for the Amiga.
![Screenshot from 2025-06-19 15-35-50](https://github.com/user-attachments/assets/26fb2a27-f6ad-4172-b81a-92775224cc5f)

Real-time map

## Visualize

Opens panel showing saved routes/zones. Toggle between Zones and Routes view. Hide button to close panel

**Record**: Starts new GPS path recording
![Screenshot from 2025-06-19 15-36-10](https://github.com/user-attachments/assets/e89f60f3-d2a0-461a-ae7e-fc28b4cdd821)


**Resume**: Continues paused recording

**Pause**: Temporarily stops recording

## Mark Location
![Screenshot from 2025-06-19 15-37-31](https://github.com/user-attachments/assets/1823c098-ed6a-469b-965c-ffc1faa1ef50)

Adds waypoint at current GPS position. Used to mark important field locations

**Undo Zone** Removes last recorded zone segment

**Undo Last** Removes last track point

**Abort** Cancels entire recording session (Only active during recording)

**Save** Brings up a pop up to save recorded path/zone. Allows custom naming
![Screenshot from 2025-06-19 15-38-22](https://github.com/user-attachments/assets/d5f26704-3aa3-4061-9902-20bfd139b881)

## Studio
![routes](https://github.com/user-attachments/assets/074fd29f-97ff-4b74-be3a-4c1a5c8b20c8)

**Path/Zones/Safety** Switches between viewing paths, farming zones, or safety zones.
Each item has delete button (trash icon)

**Modify** (Edit icon) Enables editing of existing paths/zones. Shows "Cancel" when active
![modify](https://github.com/user-attachments/assets/5319781d-6f5f-4755-aa5e-a0215f603114)

**Create** (Plus square icon) Enables drawing new zones on map. Shows "Cancel" when active
![Screenshot from 2025-06-19 15-50-18](https://github.com/user-attachments/assets/de22424b-53b4-4542-8f80-28738ee9c9f7)

**Save** Brings up a pop up to save recorded path/zone. Allows custom naming

### Navigation Controls

**Studio/Recorder Toggle** Switches between recording and editing modes
![studioview](https://github.com/user-attachments/assets/60674ec5-8f9c-42b4-9caa-309d653ef67c)

**Exit to Launcher** Returns to launcher application

**Center Map** (Crosshair icon) Centers map on robot position. Only visible in Studio mode

### Zone Types
![zonetype](https://github.com/user-attachments/assets/308ba613-14c2-4996-ab9f-f698294cb5ef)

**Transition** (Orange)

**Farming** (Light Green)

**Safety Zones** (Purple)

### Real-time Features

GPS position tracking
Robot heading indicator
WebSocket updates for state changes
Error notifications with E-Stop trigger
