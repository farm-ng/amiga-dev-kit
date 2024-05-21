"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[5301],{2935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(5893),r=t(1151);const a={id:"square-track",title:"Drive a Square"},i=void 0,o={id:"examples/square_track/square-track",title:"Drive a Square",description:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:",source:"@site/docs/examples/square_track/README.md",sourceDirName:"examples/square_track",slug:"/examples/square_track/",permalink:"/docs/examples/square_track/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/square_track/README.md",tags:[],version:"current",frontMatter:{id:"square-track",title:"Drive a Square"},sidebar:"examples",previous:{title:"Track Planner",permalink:"/docs/examples/track_planner/"},next:{title:"Multi Client Subscriber",permalink:"/docs/examples/multi_client_subscriber/"}},l={},c=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:2},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:2},{value:"Setup",id:"setup",level:3},{value:"Install",id:"install",level:3},{value:"3. Execute the Python script",id:"3-execute-the-python-script",level:2},{value:"4. Customize the run",id:"4-customize-the-run",level:2},{value:"Modify the square",id:"modify-the-square",level:3},{value:"5. Code Overview",id:"5-code-overview",level:2},{value:"<code>/get_pose</code>",id:"get_pose",level:3},{value:"Track creation",id:"track-creation",level:3},{value:"Follow the track",id:"follow-the-track",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,s.jsx)(n.p,{children:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Python Programming"}),": It's important to have a good grasp of Python, especially with concepts\nlike ",(0,s.jsx)(n.code,{children:"functions"}),", ",(0,s.jsx)(n.code,{children:"loops"}),", and ",(0,s.jsx)(n.code,{children:"classes"}),", since the example utilizes these fundamentals."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Asynchronous Programming with asyncio"}),": Familiarity with Python's asyncio for writing concurrent\ncode using the ",(0,s.jsx)(n.code,{children:"async/await"})," syntax."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/concepts/filter_service/",children:"farm-ng Filter Service Overview"})}),":\nThis overview provides a base understanding of the gRPC service the client you create will connect to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/concepts/track_follower_service/",children:"farm-ng Track Follower Service Overview"})}),":\nThis overview provides a base understanding of the gRPC service the client you create will connect to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/concepts/transforms_and_poses/",children:(0,s.jsx)(n.strong,{children:"farm-ng Transforms & Poses Overview"})}),":\nThis overview provides insight into coordinate frames, transforms,\nand poses as they pertain to autonomous systems and autonomous navigation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/concepts/tracks_and_waypoints/",children:(0,s.jsx)(n.strong,{children:"farm-ng Tracks & Waypoints Overview"})}),":\nThis overview provides insight into compiling poses as waypoints into a Track\nthat can be followed by the Amiga."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.admonition,{title:"Warning",type:"caution",children:[(0,s.jsx)(n.p,{children:"The track follower examples will cause the Amiga to drive when the dashboard is in auto mode.\nMake sure the area is clear before running examples."}),(0,s.jsxs)(n.p,{children:["You can also run the examples when the Amiga dashboard is not in ",(0,s.jsx)(n.code,{children:"AUTO READY"})," or ",(0,s.jsx)(n.code,{children:"AUTO ACTIVE"}),"\nand see the commands being sent with the red needle on the auto page without the Amiga actually moving."]})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/square_track/main.py",children:(0,s.jsx)(n.strong,{children:"Square Track Example"})}),"\noperates as a standalone Python script,\nin which an ",(0,s.jsx)(n.code,{children:"EventClient"})," to the farm-ng track follower service running on an Amiga brain is created."]}),"\n",(0,s.jsx)(n.p,{children:"This script requests the current pose of the robot,\ncreates a square track from the current pose for the track follower,\nand commands the Amiga to follow the square track."}),"\n",(0,s.jsxs)(n.p,{children:["You can either run this example directly on a brain by ",(0,s.jsx)(n.code,{children:"ssh"}),"'ing in, or use your local PC.\nIf using your local PC, it should be either connected to the same local network as the brain\nor linked to it through ",(0,s.jsxs)(n.a,{href:"https://tailscale.com/",children:[(0,s.jsx)(n.strong,{children:"tailscale"}),"."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Ensure that a ",(0,s.jsx)(n.a,{href:"/docs/brain/",children:(0,s.jsx)(n.strong,{children:"farm-ng brain"})}),", with a GPS receiver and Oak cameras,\nis actively running the track follower service."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["It is ",(0,s.jsx)(n.strong,{children:"highly recommended"})," to read through the ",(0,s.jsx)(n.a,{href:"/docs/concepts/track_follower_service/",children:"Track Follower Service Overview"}),"\nbefore running this example."]}),(0,s.jsx)(n.p,{children:"This will provide insight into the requirements and API\nfor using the track follower service to follow a path."}),(0,s.jsxs)(n.p,{children:["It is also recommended you go through the simpler\n",(0,s.jsx)(n.a,{href:"/docs/examples/track_follower/",children:"Follow a Track"})," example first."]})]}),"\n",(0,s.jsxs)(n.h2,{id:"1-install-the-farm-ng-brain-adk-package",children:["1. Install the ",(0,s.jsx)(n.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,s.jsx)(n.h2,{id:"2-install-the-examples-dependencies",children:"2. Install the example's dependencies"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment."})}),"\n",(0,s.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.admonition,{title:"Recommended",type:"important",children:(0,s.jsx)(n.p,{children:"Create a virtual environment"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd py/examples/square_track\npip install -r requirements.txt\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-execute-the-python-script",children:"3. Execute the Python script"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["To run this script from your PC, you need to update the ",(0,s.jsx)(n.code,{children:"service_config.json"}),"\nby modifying the ",(0,s.jsx)(n.code,{children:"host"})," field with your Amiga brain name."]}),(0,s.jsxs)(n.p,{children:["Please check out ",(0,s.jsx)(n.a,{href:"/docs/concepts/system_overview/#where-to-run-the-examples",children:"Amiga Development 101"}),"\nfor more details."]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python main.py --service-config service_config.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"If everything worked correctly you should now see a large stream\nof text come up in your terminal!"}),"\n",(0,s.jsx)(n.h2,{id:"4-customize-the-run",children:"4. Customize the run"}),"\n",(0,s.jsx)(n.h3,{id:"modify-the-square",children:"Modify the square"}),"\n",(0,s.jsx)(n.p,{children:"If you wish to modify the square, you can either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Change the side length by specifying a ",(0,s.jsx)(n.code,{children:"--side-length"})," value"]}),"\n",(0,s.jsxs)(n.li,{children:["Change the direction of the square by using the ",(0,s.jsx)(n.code,{children:"--clockwise"})," flag"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Check for details with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python main.py --help\n"})}),"\n",(0,s.jsx)(n.p,{children:"And see:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"usage: amiga-track_follower-square [-h] --service-config SERVICE_CONFIG [--side-length SIDE_LENGTH] [--clockwise]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --service-config SERVICE_CONFIG\n                        The service config.\n  --side-length SIDE_LENGTH\n                        The side length of the square.\n  --clockwise           Set to drive the square clockwise (right hand turns).\n                        Default is counter-clockwise (left hand turns).\n"})}),"\n",(0,s.jsx)(n.h2,{id:"5-code-overview",children:"5. Code Overview"}),"\n",(0,s.jsx)(n.h3,{id:"get_pose",children:(0,s.jsx)(n.code,{children:"/get_pose"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example we use the ",(0,s.jsx)(n.code,{children:"EventClient"})," with the ",(0,s.jsx)(n.code,{children:"request_reply"})," method\nto get the current pose of the Amiga robot.\nThis pose becomes the first pose in the square track we will define programmatically."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'async def get_pose(clients: dict[str, EventClient]) -> Pose3F64:\n    """Get the current pose of the robot in the world frame, from the filter service.\n\n    Args:\n        clients (dict[str, EventClient]): A dictionary of EventClients.\n    """\n    # We use the FilterState as the best source of the current pose of the robot\n    state: FilterState = await clients["filter"].request_reply("/get_state", Empty(), decode=True)\n    print(f"Current filter state:\\n{state}")\n    return Pose3F64.from_proto(state.pose)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"track-creation",children:"Track creation"}),"\n",(0,s.jsxs)(n.p,{children:["We then construct a square track by iteratively adding waypoints along the track\nat a small linear and/or angular distance away.\nWe use ",(0,s.jsx)(n.code,{children:"0.1 meters"})," and ",(0,s.jsx)(n.code,{children:"0.1 radians"})," between each point along the track,\nbut your track can be spaced much further.\nWe do recommend, however, that if you are creating a track that crosses itself\nor a track in which the end and the start are at the same coordinates,\nyou have greater than ",(0,s.jsx)(n.code,{children:"20"})," waypoints along your track."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-core/blob/main/py/pybind/lie_pybind.cpp",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Pose3F64"})})}),"\nobjects are ",(0,s.jsx)(n.code,{children:"C++"})," classes from ",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-core",children:(0,s.jsx)(n.code,{children:"farm-ng-core"})}),"\nexposed to the ",(0,s.jsx)(n.code,{children:"Python"})," script using ",(0,s.jsx)(n.a,{href:"https://pybind11.readthedocs.io/en/stable/index.html",children:(0,s.jsx)(n.code,{children:"pybind"})}),"."]}),(0,s.jsxs)(n.p,{children:["These represent a 3D Isometry frame transformation from a\nparent (",(0,s.jsx)(n.code,{children:"frame_a"}),") to a child (",(0,s.jsx)(n.code,{children:"frame_b"}),") coordinate frame."]})]}),"\n",(0,s.jsx)(n.p,{children:"Each point along the track is created by multiplying a small relative transform to\nthe pose of the previous pose along the track.\nIn other words, the next pose along the track is either a small distance in front of\nor a small angular rotation to the right of the previous pose along the track."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The multiplication of coordinate frame transforms is a fundamental concept in robotics!\nIf you would like more insight into this topic, please see the\n",(0,s.jsx)(n.a,{href:"/docs/concepts/transforms_and_poses/",children:(0,s.jsx)(n.strong,{children:"farm-ng Transforms & Poses Overview"})}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Because this example is a square, the transform between each waypoint\nrepresents either driving straight forward or turning in place.\nBut this is not a constraint for the track follower!\nYour tracks can reflect a combination of rotation and translation (a 3d Isometry) between track waypoints."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'async def build_square(clients: dict[str, EventClient], side_length: float, clockwise: bool) -> Track:\n    """Build a square track, from the current pose of the robot.\n\n    Args:\n        clients (dict[str, EventClient]): A dictionary of EventClients.\n        side_length (float): The side length of the square, in meters.\n        clockwise (bool): True will drive the square clockwise (right hand turns).\n                        False is counter-clockwise (left hand turns).\n    Returns:\n        Track: The track for the track_follower to follow.\n    """\n\n    # Query the state estimation filter for the current pose of the robot in the world frame\n    world_pose_robot: Pose3F64 = await get_pose(clients)\n\n    # Create a container to store the track waypoints\n    track_waypoints: list[Pose3F64] = []\n\n    # Set the angle of the turns, based on indicated direction\n    angle: float = radians(-90) if clockwise else radians(90)\n\n    # Add the first goal at the current pose of the robot\n    world_pose_goal0: Pose3F64 = world_pose_robot *\n        Pose3F64(a_from_b=Isometry3F64(), frame_a="robot", frame_b="goal0")\n    track_waypoints.append(world_pose_goal0)\n\n    # Drive forward 1 meter (first side of the square)\n    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal1", side_length))\n\n    # Turn left 90 degrees (first turn)\n    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal2", angle))\n\n    # Add second side and turn\n    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal3", side_length))\n    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal4", angle))\n\n    # Add third side and turn\n    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal5", side_length))\n    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal6", angle))\n\n    # Add fourth side and turn\n    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal7", side_length))\n    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal8", angle))\n\n    # Return the list of waypoints as a Track proto message\n    return format_track(track_waypoints)\n\n\ndef create_straight_segment(\n    previous_pose: Pose3F64, next_frame_b: str, distance: float, spacing: float = 0.1\n) -> list[Pose3F64]:\n    """Compute a straight segment of a square.\n\n    Args:\n        previous_pose (Pose3F64): The previous pose.\n        next_frame_b (str): The name of the child frame of the next pose.\n        distance (float): The side length of the square, in meters.\n        spacing (float): The spacing between waypoints, in meters.\n\n    Returns:\n        Pose3F64: The poses of the straight segment.\n    """\n    # Create a container to store the track segment waypoints\n    segment_poses: list[Pose3F64] = [previous_pose]\n\n    # For tracking the number of segments and remaining angle\n    counter: int = 0\n    remaining_distance: float = distance\n\n    while abs(remaining_distance) > 0.01:\n        # Compute the distance of the next segment\n        segment_distance: float = copysign(min(abs(remaining_distance), spacing), distance)\n\n        # Compute the next pose\n        straight_segment: Pose3F64 = Pose3F64(\n            a_from_b=Isometry3F64([segment_distance, 0, 0], Rotation3F64.Rz(0)),\n            frame_a=segment_poses[-1].frame_b,\n            frame_b=f"{next_frame_b}_{counter}",\n        )\n        segment_poses.append(segment_poses[-1] * straight_segment)\n\n        # Update the counter and remaining angle\n        counter += 1\n        remaining_distance -= segment_distance\n\n    # Rename the last pose to the desired name\n    segment_poses[-1].frame_b = next_frame_b\n    return segment_poses\n\n\ndef create_turn_segment(\n    previous_pose: Pose3F64, next_frame_b: str, angle: float, spacing: float = 0.1\n) -> list[Pose3F64]:\n    """Compute a turn segment of a square.\n\n    Args:\n        previous_pose (Pose3F64): The previous pose.\n        next_frame_b (str): The name of the child frame of the next pose.\n        angle (float): The angle to turn, in radians (+ left, - right).\n        spacing (float): The spacing between waypoints, in radians.\n    Returns:\n        list[Pose3F64]: The poses of the turn segment.\n    """\n    # Create a container to store the track segment waypoints\n    segment_poses: list[Pose3F64] = [previous_pose]\n\n    # For tracking the number of segments and remaining angle\n    counter: int = 0\n    remaining_angle: float = angle\n\n    while abs(remaining_angle) > 0.01:\n        # Compute the angle of the next segment\n        segment_angle: float = copysign(min(abs(remaining_angle), spacing), angle)\n\n        # Compute the next pose\n        turn_segment: Pose3F64 = Pose3F64(\n            a_from_b=Isometry3F64.Rz(segment_angle),\n            frame_a=segment_poses[-1].frame_b,\n            frame_b=f"{next_frame_b}_{counter}",\n        )\n        segment_poses.append(segment_poses[-1] * turn_segment)\n\n        # Update the counter and remaining angle\n        counter += 1\n        remaining_angle -= segment_angle\n\n    # Rename the last pose to the desired name\n    segment_poses[-1].frame_b = next_frame_b\n    return segment_poses\n'})}),"\n",(0,s.jsx)(n.h3,{id:"follow-the-track",children:"Follow the track"}),"\n",(0,s.jsx)(n.p,{children:"Additionally, this example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"formats the created track"}),"\n",(0,s.jsxs)(n.li,{children:["Sets the track for the track follower to follow ( ",(0,s.jsx)(n.code,{children:"/set_track"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Sends the request to start following the track (",(0,s.jsx)(n.code,{children:"/start"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Creates multiple ",(0,s.jsx)(n.code,{children:"asyncio.Task"}),"'s and runs them simultaneously","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creating, setting, and following the path"}),"\n",(0,s.jsx)(n.li,{children:"Streaming the state of the track follower service"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more details on these, please review the simpler\n",(0,s.jsx)(n.a,{href:"/docs/examples/track_follower/",children:"Follow a Track"})," example."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Congrats you are done!"})}),"\n",(0,s.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,s.jsxs)(n.p,{children:["To run this example, you must activate the ",(0,s.jsx)(n.code,{children:"auto control"})," mode on your Amiga via the dashboard."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We highly recommend to have some basic knowledge about\n",(0,s.jsx)(n.a,{href:"https://docs.python.org/3/library/asyncio.html",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"asyncio"})})}),"."]})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(7294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);