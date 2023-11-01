"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1511],{164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(1839);const o={id:"controller-square",title:"Drive a Square"},i=void 0,s={unversionedId:"examples/controller_square/controller-square",id:"examples/controller_square/controller-square",title:"Drive a Square",description:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:",source:"@site/docs/examples/controller_square/README.md",sourceDirName:"examples/controller_square",slug:"/examples/controller_square/",permalink:"/docs/examples/controller_square/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/controller_square/README.md",tags:[],version:"current",frontMatter:{id:"controller-square",title:"Drive a Square"},sidebar:"examples",previous:{title:"Follow a track",permalink:"/docs/examples/controller_track/"},next:{title:"Multi Client Subscriber",permalink:"/docs/examples/multi_client_subscriber/"}},l={},p=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:2},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:2},{value:"Setup",id:"setup",level:3},{value:"Install",id:"install",level:3},{value:"3. Execute the Python script",id:"3-execute-the-python-script",level:2},{value:"4. Customize the run",id:"4-customize-the-run",level:2},{value:"Run remotely",id:"run-remotely",level:3},{value:"Modify the square",id:"modify-the-square",level:3},{value:"5. Code Overview",id:"5-code-overview",level:2},{value:"<code>/get_pose</code>",id:"get_pose",level:3},{value:"Track creation",id:"track-creation",level:3},{value:"Follow the track",id:"follow-the-track",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Basic Knowledge Requirements",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Python Programming"),": It's important to have a good grasp of Python, especially with concepts\nlike ",(0,r.kt)("inlineCode",{parentName:"li"},"functions"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"loops"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"classes"),", since the example utilizes these fundamentals."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Asynchronous Programming with asyncio"),": Familiarity with Python's asyncio for writing concurrent\ncode using the ",(0,r.kt)("inlineCode",{parentName:"li"},"async/await")," syntax."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/concepts/controller_service/"},"farm-ng Controller Service Overview")),":\nThis overview provides a base understanding of the gRPC service the client you create will connect to."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/transforms_and_poses/"},(0,r.kt)("strong",{parentName:"a"},"farm-ng Transforms & Poses Overview")),":\nThis overview provides insight into coordinate frames, transforms,\nand poses as they pertain to autonomous systems and autonomous navigation."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/controller_101/"},(0,r.kt)("strong",{parentName:"a"},"farm-ng Tracks & Waypoints Overview")),":\nThis overview provides insight into compiling poses as waypoints into a Track\nthat can be followed by the Amiga."))),(0,r.kt)("h1",{id:"controller-drive-a-square-example"},"Controller Drive a Square Example"),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The controller examples will cause the Amiga to drive when the dashboard is in auto mode.\nMake sure the area is clear before running examples."),(0,r.kt)("p",{parentName:"admonition"},"You can also run the examples when the Amiga dashboard is not in ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO READY")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO ACTIVE"),"\nand see the commands being sent with the red needle on the auto page without the Amiga actually moving.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/controller_square/main.py"},(0,r.kt)("strong",{parentName:"a"},"Controller Drive a Square Example")),"\noperates as a standalone Python script,\nin which an ",(0,r.kt)("inlineCode",{parentName:"p"},"EventClient")," to the farm-ng Controller service running on an Amiga brain is created."),(0,r.kt)("p",null,"This script requests the current pose of the robot,\ncreates a square track from the current pose for the controller,\nand commands the Amiga to follow the square track."),(0,r.kt)("p",null,"You can either run this example directly on a brain by ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh"),"'ing in, or use your local PC.\nIf using your local PC, it should be either connected to the same local network as the brain\nor linked to it through tailscale."),(0,r.kt)("p",null,"Ensure that a ",(0,r.kt)("a",{parentName:"p",href:"/docs/brain/"},(0,r.kt)("strong",{parentName:"a"},"farm-ng brain")),", with a GPS receiver and Oak cameras,\nis actively running the controller service."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is ",(0,r.kt)("strong",{parentName:"p"},"highly recommended")," to read through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/controller_service/"},"Controller Service Overview"),"\nbefore running this example."),(0,r.kt)("p",{parentName:"admonition"},"This will provide insight into the requirements and API\nfor using the controller service to follow a path."),(0,r.kt)("p",{parentName:"admonition"},"It is also recommended you go through the simpler\n",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/controller_track/"},"Follow a Track")," example first.")),(0,r.kt)("h2",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,r.kt)("a",{parentName:"h2",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,r.kt)("h2",{id:"2-install-the-examples-dependencies"},"2. Install the example's dependencies"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment.")),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("admonition",{title:"Recommended",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Create a virtual environment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd py/examples/controller_square\npip install -r requirements.txt\n")),(0,r.kt)("h2",{id:"3-execute-the-python-script"},"3. Execute the Python script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --service-config service_config.json\n")),(0,r.kt)("p",null,"If everything worked correctly you should now see a large stream\nof text come up in your terminal!"),(0,r.kt)("h2",{id:"4-customize-the-run"},"4. Customize the run"),(0,r.kt)("h3",{id:"run-remotely"},"Run remotely"),(0,r.kt)("p",null,"If you want to command the robot from your laptop, by connecting with a ",(0,r.kt)("inlineCode",{parentName:"p"},"gRPC")," client over Wifi,\nyou can change the ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"service_config.json")," from localhost to your robot's name\n(e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"element-vegetable"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "controller",\n    "port": 20101,\n    "host": "element-vegetable",\n    "subscriptions": [\n        {\n            "uri": {\n            "path": "/state",\n            "query": "service_name=controller"\n            },\n            "every_n": 1\n        }\n    ],\n    "log_level": "INFO"\n}\n')),(0,r.kt)("h3",{id:"modify-the-square"},"Modify the square"),(0,r.kt)("p",null,"If you wish to modify the square, you can either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the side length by specifying a ",(0,r.kt)("inlineCode",{parentName:"li"},"--side-length")," value"),(0,r.kt)("li",{parentName:"ul"},"Change the direction of the square by using the ",(0,r.kt)("inlineCode",{parentName:"li"},"--clockwise")," flag")),(0,r.kt)("p",null,"Check for details with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --help\n")),(0,r.kt)("p",null,"And see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"usage: amiga-controller-square [-h] --service-config SERVICE_CONFIG [--side-length SIDE_LENGTH] [--clockwise]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --service-config SERVICE_CONFIG\n                        The controller service config.\n  --side-length SIDE_LENGTH\n                        The side length of the square.\n  --clockwise           Set to drive the square clockwise (right hand turns).\n                        Default is counter-clockwise (left hand turns).\n")),(0,r.kt)("h2",{id:"5-code-overview"},"5. Code Overview"),(0,r.kt)("h3",{id:"get_pose"},(0,r.kt)("inlineCode",{parentName:"h3"},"/get_pose")),(0,r.kt)("p",null,"In this example we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventClient")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"request_reply")," method\nto get the current pose of the Amiga robot.\nThis pose becomes the first pose in the square track we will define programmatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'async def get_pose(service_config: EventServiceConfig) -> Pose3F64:\n    """Get the current pose of the robot in the world frame, from the controller service.\n\n    Args:\n        service_config (EventServiceConfig): The controller service config.\n    """\n    reply = await EventClient(service_config).request_reply("/get_pose", Empty(), decode=True)\n    print(f"Current pose:\\n{reply}")\n    return Pose3F64.from_proto(reply)\n')),(0,r.kt)("h3",{id:"track-creation"},"Track creation"),(0,r.kt)("p",null,"We then construct a square track by iteratively adding waypoints along the track\nat a small linear and/or angular distance away.\nWe use ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1 meters")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1 radians")," between each point along the track,\nbut your track can be spaced much further.\nWe do recommend, however, that if you are creating a track that crosses itself\nor a track in which the end and the start are at the same coordinates,\nyou have greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"20")," waypoints along your track."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-core/blob/main/py/pybind/lie_pybind.cpp"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Pose3F64"))),"\nobjects are ",(0,r.kt)("inlineCode",{parentName:"p"},"C++")," classes from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-core"},(0,r.kt)("inlineCode",{parentName:"a"},"farm-ng-core")),"\nexposed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Python")," script using ",(0,r.kt)("a",{parentName:"p",href:"https://pybind11.readthedocs.io/en/stable/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"pybind")),"."),(0,r.kt)("p",{parentName:"admonition"},"These represent a 3D Isometry frame transformation from a\nparent (",(0,r.kt)("inlineCode",{parentName:"p"},"frame_a"),") to a child (",(0,r.kt)("inlineCode",{parentName:"p"},"frame_b"),") coordinate frame.")),(0,r.kt)("p",null,"Each point along the track is created by multiplying a small relative transform to\nthe pose of the previous pose along the track.\nIn other words, the next pose along the track is either a small distance in front of\nor a small angular rotation to the right of the previous pose along the track."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The multiplication of coordinate frame transforms is a fundamental concept in robotics!"),(0,r.kt)("p",{parentName:"admonition"},"Covering this topic is out of the scope of this example.\nIf you wish to learn more, there is an abundance of free online resources and courses covering the topic.\nOne such option is ",(0,r.kt)("a",{parentName:"p",href:"https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/"},"MIT OpenCourseWare - Introduction To Robotics"),".")),(0,r.kt)("p",null,"Because this example is a square, the transform between each waypoint\nrepresents either driving straight forward or turning in place.\nBut this is not a constraint for the controller!\nYour tracks can reflect a combination of rotation and translation (a 3d Isometry) between track waypoints."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'async def build_square(service_config: EventServiceConfig, side_length: float, clockwise: bool) -> FilterTrack:\n    """Build a square track, from the current pose of the robot.\n\n    Args:\n        service_config (EventServiceConfig): The controller service config.\n        side_length (float): The side length of the square.\n        clockwise (bool): True will drive the square clockwise (right hand turns).\n                        False is counter-clockwise (left hand turns).\n    """\n\n    # Query the controller for the current pose of the robot in the world frame\n    world_pose_robot: Pose3F64 = await get_pose(service_config)\n\n    # Create a container to store the track waypoints\n    track_waypoints: list[Pose3F64] = []\n\n    # Set the angle of the turns, based on indicated direction\n    angle: float = radians(-90) if clockwise else radians(90)\n\n    # Add the first goal at the current pose of the robot\n    world_pose_goal0: Pose3F64 = world_pose_robot *\n        Pose3F64(a_from_b=Isometry3F64(), frame_a="robot", frame_b="goal0")\n    track_waypoints.append(world_pose_goal0)\n\n    # Drive forward 1 meter (first side of the square)\n    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal1", side_length))\n\n    # Turn left 90 degrees (first turn)\n    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal2", angle))\n\n    # Add second side and turn\n    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal3", side_length))\n    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal4", angle))\n\n    # Add third side and turn\n    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal5", side_length))\n    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal6", angle))\n\n    # Add fourth side and turn\n    track_waypoints.extend(create_straight_segment(track_waypoints[-1], "goal7", side_length))\n    track_waypoints.extend(create_turn_segment(track_waypoints[-1], "goal8", angle))\n\n    # Return the list of waypoints as a FilterTrack proto message\n    # This is the format currently expected by the controller service\n    return format_track(track_waypoints)\n\n\ndef create_straight_segment(\n    previous_pose: Pose3F64, next_frame_b: str, distance: float, spacing: float = 0.1\n) -> list[Pose3F64]:\n    """Compute a straight segment of a square.\n\n    Args:\n        previous_pose (Pose3F64): The previous pose.\n        next_frame_b (str): The name of the child frame of the next pose.\n        distance (float): The side length of the square.\n        spacing (float): The spacing between waypoints, in meters.\n\n    Returns:\n        Pose3F64: The poses of the straight segment.\n    """\n    # Create a container to store the track segment waypoints\n    segment_poses: list[Pose3F64] = [previous_pose]\n\n    # For tracking the number of segments and remaining angle\n    counter: int = 0\n    remaining_distance: float = distance\n\n    while abs(remaining_distance) > 0.01:\n        # Compute the distance of the next segment\n        segment_distance: float = copysign(min(abs(remaining_distance), spacing), distance)\n\n        # Compute the next pose\n        straight_segment: Pose3F64 = Pose3F64(\n            a_from_b=Isometry3F64([segment_distance, 0, 0], Rotation3F64.Rz(0)),\n            frame_a=segment_poses[-1].frame_b,\n            frame_b=f"{next_frame_b}_{counter}",\n        )\n        segment_poses.append(segment_poses[-1] * straight_segment)\n\n        # Update the counter and remaining angle\n        counter += 1\n        remaining_distance -= segment_distance\n\n    # Rename the last pose to the desired name\n    segment_poses[-1].frame_b = next_frame_b\n    return segment_poses\n\n\ndef create_turn_segment(\n    previous_pose: Pose3F64, next_frame_b: str, angle: float, spacing: float = 0.1\n) -> list[Pose3F64]:\n    """Compute a turn segment of a square.\n\n    Args:\n        previous_pose (Pose3F64): The previous pose.\n        next_frame_b (str): The name of the child frame of the next pose.\n        angle (float): The angle to turn, in radians (+ left, - right).\n        spacing (float): The spacing between waypoints, in radians.\n    Returns:\n        list[Pose3F64]: The poses of the turn segment.\n    """\n    # Create a container to store the track segment waypoints\n    segment_poses: list[Pose3F64] = [previous_pose]\n\n    # For tracking the number of segments and remaining angle\n    counter: int = 0\n    remaining_angle: float = angle\n\n    while abs(remaining_angle) > 0.01:\n        # Compute the angle of the next segment\n        segment_angle: float = copysign(min(abs(remaining_angle), spacing), angle)\n\n        # Compute the next pose\n        turn_segment: Pose3F64 = Pose3F64(\n            a_from_b=Isometry3F64.Rz(segment_angle),\n            frame_a=segment_poses[-1].frame_b,\n            frame_b=f"{next_frame_b}_{counter}",\n        )\n        segment_poses.append(segment_poses[-1] * turn_segment)\n\n        # Update the counter and remaining angle\n        counter += 1\n        remaining_angle -= segment_angle\n\n    # Rename the last pose to the desired name\n    segment_poses[-1].frame_b = next_frame_b\n    return segment_poses\n')),(0,r.kt)("h3",{id:"follow-the-track"},"Follow the track"),(0,r.kt)("p",null,"Additionally, this example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"formats the created track"),(0,r.kt)("li",{parentName:"ul"},"Sets the track for the controller to follow ( ",(0,r.kt)("inlineCode",{parentName:"li"},"/set_track"),")"),(0,r.kt)("li",{parentName:"ul"},"Sends the controller to follow the track (",(0,r.kt)("inlineCode",{parentName:"li"},"/follow_track"),")"),(0,r.kt)("li",{parentName:"ul"},"Creates multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"asyncio.Task"),"'s and runs them simultaneously",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creating, setting, and following the path"),(0,r.kt)("li",{parentName:"ul"},"Streaming the state of the controller service")))),(0,r.kt)("p",null,"For more details on these, please review the simpler\n",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/controller_track/"},"Follow a Track")," example."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congrats you are done!")),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To run this example, you must activate the ",(0,r.kt)("inlineCode",{parentName:"p"},"auto control")," mode on your Amiga via the dashboard.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We highly recommend to have some basic knowledge about\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"asyncio"))),".")))}m.isMDXComponent=!0}}]);