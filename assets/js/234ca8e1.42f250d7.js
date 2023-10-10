"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4138],{8184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(1839);const o={id:"controller-track",title:"Follow a track"},i="Controller Follow Track Example",l={unversionedId:"examples/controller_track/controller-track",id:"examples/controller_track/controller-track",title:"Follow a track",description:"The controller examples will cause the Amiga to drive when the dashboard is in auto mode.",source:"@site/docs/examples/controller_track/README.md",sourceDirName:"examples/controller_track",slug:"/examples/controller_track/",permalink:"/docs/examples/controller_track/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/controller_track/README.md",tags:[],version:"current",frontMatter:{id:"controller-track",title:"Follow a track"},sidebar:"examples",previous:{title:"Record a Track",permalink:"/docs/examples/record_track/"},next:{title:"Service Client",permalink:"/docs/examples/service_client/"}},c={},s=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:2},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:2},{value:"Setup",id:"setup",level:3},{value:"Install",id:"install",level:3},{value:"3. Execute the Python script",id:"3-execute-the-python-script",level:2},{value:"4. Customize the run",id:"4-customize-the-run",level:2},{value:"5. Code Overview",id:"5-code-overview",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"controller-follow-track-example"},"Controller Follow Track Example"),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The controller examples will cause the Amiga to drive when the dashboard is in auto mode.\nMake sure the area is clear before running examples."),(0,r.kt)("p",{parentName:"admonition"},"You can also run the examples when the Amiga dashboard is not in ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO READY")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO ACTIVE"),"\nand see the commands being sent with the red needle on the auto page without the Amiga actually moving.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/controller_track/main.py"},(0,r.kt)("strong",{parentName:"a"},"Controller Follow Track Example")),"\noperates as a standalone Python script,\nin which an ",(0,r.kt)("inlineCode",{parentName:"p"},"EventClient")," to the farm-ng Controller service running on an Amiga brain is created."),(0,r.kt)("p",null,"This script takes in a pre-recorded track and commands the Amiga to follow it."),(0,r.kt)("p",null,"You can either run this example directly on a brain by ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh"),"'ing in, or use your local PC.\nIf using your local PC, it should be either connected to the same local network as the brain\nor linked to it through tailscale."),(0,r.kt)("p",null,"Ensure that a ",(0,r.kt)("a",{parentName:"p",href:"/docs/brain/"},(0,r.kt)("strong",{parentName:"a"},"farm-ng brain")),", with a GPS receiver and Oak cameras,\nis actively running the controller service."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is ",(0,r.kt)("strong",{parentName:"p"},"highly recommended")," to read through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/controller_service/"},"Controller Service Overview"),"\nbefore running this example."),(0,r.kt)("p",{parentName:"admonition"},"This will provide insight into the requirements and API\nfor using the controller service to follow a path.")),(0,r.kt)("h2",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,r.kt)("a",{parentName:"h2",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,r.kt)("h2",{id:"2-install-the-examples-dependencies"},"2. Install the example's dependencies"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment.")),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("admonition",{title:"Recommended",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Create a virtual environment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd py/examples/gps_client\npip install -r requirements.txt\n")),(0,r.kt)("h2",{id:"3-execute-the-python-script"},"3. Execute the Python script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --service-config service_config.json --track <path-to-your-track>\n# Replace <path-to-your-track> to the actual path to your track\n")),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There's an example to teach you how to ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/record_track"},(0,r.kt)("strong",{parentName:"a"},"record your own track here")),".")),(0,r.kt)("p",null,"If everything worked correctly you should now see a large stream\nof text come up in your terminal!"),(0,r.kt)("h2",{id:"4-customize-the-run"},"4. Customize the run"),(0,r.kt)("p",null,"If you want to command the robot from your laptop, by connecting with a ",(0,r.kt)("inlineCode",{parentName:"p"},"gRPC")," client over Wifi,\nyou can change the ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"service_config.json")," from localhost to your robot's name\n(e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"element-vegetable"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "controller",\n    "port": 20101,\n    "host": "element-vegetable",\n    "subscriptions": [\n        {\n            "uri": {\n            "path": "/state",\n            "query": "service_name=controller"\n            },\n            "every_n": 1\n        }\n    ],\n    "log_level": "INFO"\n}\n')),(0,r.kt)("h2",{id:"5-code-overview"},"5. Code Overview"),(0,r.kt)("p",null,"In this example we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventClient")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"request_reply")," method to set a track\n(",(0,r.kt)("inlineCode",{parentName:"p"},"/set_track"),") to be followed.\nWe then command the controller to follow the set track (",(0,r.kt)("inlineCode",{parentName:"p"},"/follow_track"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'async def set_track(service_config: EventServiceConfig, filter_track: FilterTrack) -> None:\n    """Set the track of the controller.\n\n    WARNING: This API will change in the future.\n    The controller service currently expects a FilterTrack proto message,\n    but this will change in the future to a more general message type.\n\n    Args:\n        service_config (EventServiceConfig): The controller service config.\n        filter_track (FilterTrack): The track for the controller to follow.\n    """\n    print(f"Setting track:\\n{filter_track}")\n    await EventClient(service_config).request_reply("/set_track", filter_track)\n\n\nasync def follow_track(service_config: EventServiceConfig) -> None:\n    """Follow the track.\n\n    Args:\n        service_config (EventServiceConfig): The controller service config.\n    """\n    print("Following track...")\n    await EventClient(service_config).request_reply("/follow_track",\n        StringValue(value="my_custom_track"))\n\n\nasync def main(service_config_path: Path, track_path: Path) -> None:\n    """Run the controller track example. The robot will drive the pre-recorded track.\n\n    Args:\n        service_config_path (Path): The path to the controller service config.\n    """\n\n    # Extract the controller service config from the JSON file\n    service_config: EventServiceConfig = proto_from_json_file(service_config_path,\n        EventServiceConfig())\n\n    # Build the track and package in a FilterTrack proto message\n    filter_track: FilterTrack = proto_from_json_file(track_path, FilterTrack())\n\n    # Send the track to the controller\n    await set_track(service_config, filter_track)\n\n    # Follow the track\n    await follow_track(service_config)\n')),(0,r.kt)("p",null,"We also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method to receive and stream the controller state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'async def stream_controller_state(service_config_path: Path) -> None:\n    """Stream the controller state.\n\n    Args:\n        service_config_path (Path): The path to the controller service config.\n    """\n\n    # Brief wait to allow the controller to start (not necessary in practice)\n    await asyncio.sleep(1)\n    print("Streaming controller state...")\n\n    # Create a client to the Controller service\n    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())\n\n    message: ControllerState\n    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):\n        print("###################")\n        print(message)\n')),(0,r.kt)("p",null,"We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"asyncio.gather")," method to allow running the two tasks,\n(1) setting the controller to follow the track and (2) streaming the controller state,\nsimultaneously and asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'async def run(args) -> None:\n    tasks: list[asyncio.Task] = [\n        asyncio.create_task(main(args.service_config, args.track)),\n        asyncio.create_task(stream_controller_state(args.service_config)),\n    ]\n    await asyncio.gather(*tasks)\n\n\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="amiga-controller-track")\n    parser.add_argument("--service-config", type=Path, required=True,\n        help="The controller service config.")\n    parser.add_argument("--track", type=Path, required=True,\n        help="The filepath of the track to follow.")\n    args = parser.parse_args()\n\n    loop = asyncio.get_event_loop()\n    loop.run_until_complete(run(args))\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congrats you are done!")),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To run this example, you must activate the ",(0,r.kt)("inlineCode",{parentName:"p"},"auto control")," mode on your Amiga via the dashboard.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We highly recommend to have some basic knowledge about\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"asyncio"))),".")))}m.isMDXComponent=!0}}]);