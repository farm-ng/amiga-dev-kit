"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[437],{6068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(5893),a=t(1151);const o={id:"track-follower",title:"Follow a Track"},i=void 0,s={id:"examples/track_follower/track-follower",title:"Follow a Track",description:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:",source:"@site/docs/examples/track_follower/README.md",sourceDirName:"examples/track_follower",slug:"/examples/track_follower/",permalink:"/docs/examples/track_follower/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/track_follower/README.md",tags:[],version:"current",frontMatter:{id:"track-follower",title:"Follow a Track"},sidebar:"examples",previous:{title:"Plot a Track",permalink:"/docs/examples/track_plotter/"},next:{title:"Drive a Square",permalink:"/docs/examples/square_track/"}},c={},l=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:2},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:2},{value:"Setup",id:"setup",level:3},{value:"Install",id:"install",level:3},{value:"3. Execute the Python script",id:"3-execute-the-python-script",level:2},{value:"4. Customize the run",id:"4-customize-the-run",level:2},{value:"5. Code Overview",id:"5-code-overview",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,r.jsx)(n.p,{children:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Python Programming"}),": It's important to have a good grasp of Python, especially with concepts\nlike ",(0,r.jsx)(n.code,{children:"functions"}),", ",(0,r.jsx)(n.code,{children:"loops"}),", and ",(0,r.jsx)(n.code,{children:"classes"}),", since the example utilizes these fundamentals."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Asynchronous Programming with asyncio"}),": Familiarity with Python's asyncio for writing concurrent\ncode using the ",(0,r.jsx)(n.code,{children:"async/await"})," syntax."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/concepts/track_follower_service/",children:"farm-ng Track Follower Service Overview"})}),":\nThis overview provides a base understanding of the gRPC service the client you create will connect to."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/concepts/transforms_and_poses/",children:(0,r.jsx)(n.strong,{children:"farm-ng Transforms & Poses Overview"})}),":\nThis overview provides insight into coordinate frames, transforms,\nand poses as they pertain to autonomous systems and autonomous navigation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/concepts/tracks_and_waypoints/",children:(0,r.jsx)(n.strong,{children:"farm-ng Tracks & Waypoints Overview"})}),":\nThis overview provides insight into compiling poses as waypoints into a Track\nthat can be followed by the Amiga."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Warning",type:"caution",children:[(0,r.jsx)(n.p,{children:"The track follower examples will cause the Amiga to drive when the dashboard is in auto mode.\nMake sure the area is clear before running examples."}),(0,r.jsxs)(n.p,{children:["You can also run the examples when the Amiga dashboard is not in ",(0,r.jsx)(n.code,{children:"AUTO READY"})," or ",(0,r.jsx)(n.code,{children:"AUTO ACTIVE"}),"\nand see the commands being sent with the red needle on the auto page without the Amiga actually moving."]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/track_follower/main.py",children:(0,r.jsx)(n.strong,{children:"Track Follower Example"})}),"\noperates as a standalone Python script,\nin which an ",(0,r.jsx)(n.code,{children:"EventClient"})," to the farm-ng Track Follower service running on an Amiga brain is created."]}),"\n",(0,r.jsx)(n.p,{children:"This script takes in a pre-recorded track and commands the Amiga to follow it."}),"\n",(0,r.jsxs)(n.p,{children:["You can either run this example directly on a brain by ",(0,r.jsx)(n.code,{children:"ssh"}),"'ing in, or use your local PC.\nIf using your local PC, it should be either connected to the same local network as the brain\nor linked to it through tailscale."]}),"\n",(0,r.jsxs)(n.p,{children:["Ensure that a ",(0,r.jsx)(n.a,{href:"/docs/brain/",children:(0,r.jsx)(n.strong,{children:"farm-ng brain"})}),", with a GPS receiver and Oak cameras,\nis actively running the track follower service."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["It is ",(0,r.jsx)(n.strong,{children:"highly recommended"})," to read through the ",(0,r.jsx)(n.a,{href:"/docs/concepts/track_follower_service/",children:"Track Follower Service Overview"}),"\nbefore running this example."]}),(0,r.jsx)(n.p,{children:"This will provide insight into the requirements and API\nfor using the track follower service to follow a path."})]}),"\n",(0,r.jsxs)(n.h2,{id:"1-install-the-farm-ng-brain-adk-package",children:["1. Install the ",(0,r.jsx)(n.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,r.jsx)(n.h2,{id:"2-install-the-examples-dependencies",children:"2. Install the example's dependencies"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment."})}),"\n",(0,r.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.admonition,{title:"Recommended",type:"important",children:(0,r.jsx)(n.p,{children:"Create a virtual environment"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd py/examples/track_follower\npip install -r requirements.txt\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3-execute-the-python-script",children:"3. Execute the Python script"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python main.py --service-config service_config.json --track <path-to-your-track>\n# Replace <path-to-your-track> to the actual file path to your track\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,r.jsxs)(n.p,{children:["There's an example to teach you how to ",(0,r.jsx)(n.a,{href:"/docs/examples/track_recorder",children:(0,r.jsx)(n.strong,{children:"record your own track here"})}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"If everything worked correctly you should now see a large stream\nof text come up in your terminal!"}),"\n",(0,r.jsx)(n.h2,{id:"4-customize-the-run",children:"4. Customize the run"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to command the robot from your laptop, by connecting with a ",(0,r.jsx)(n.code,{children:"gRPC"})," client over Wifi,\nyou can change the ",(0,r.jsx)(n.code,{children:"host"})," field in ",(0,r.jsx)(n.code,{children:"service_config.json"})," from localhost to your robot's name\n(e.g., ",(0,r.jsx)(n.code,{children:"element-vegetable"}),")."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "name": "track_follower",\n    "port": 20101,\n    "host": "element-vegetable",\n    "subscriptions": [\n        {\n            "uri": {\n            "path": "/state",\n            "query": "service_name=track_follower"\n            },\n            "every_n": 1\n        }\n    ],\n    "log_level": "INFO"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"5-code-overview",children:"5. Code Overview"}),"\n",(0,r.jsxs)(n.p,{children:["In this example we use the ",(0,r.jsx)(n.code,{children:"EventClient"})," with the ",(0,r.jsx)(n.code,{children:"request_reply"})," method to set a track\n(",(0,r.jsx)(n.code,{children:"/set_track"}),") to be followed.\nWe then command the track follower to follow the set track (",(0,r.jsx)(n.code,{children:"/start"}),")."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'async def set_track(service_config: EventServiceConfig, track: Track) -> None:\n    """Set the track of the track_follower.\n\n    Args:\n        service_config (EventServiceConfig): The track_follower service config.\n        track (Track): The track for the track_follower to follow.\n    """\n    print(f"Setting track:\\n{track}")\n    await EventClient(service_config).request_reply("/set_track", TrackFollowRequest(track=track))\n\n\nasync def start(service_config: EventServiceConfig) -> None:\n    """Follow the track.\n\n    Args:\n        service_config (EventServiceConfig): The track_follower service config.\n    """\n    print("Sending request to start following the track...")\n    await EventClient(service_config).request_reply("/start", Empty())\n\n\nasync def main(service_config_path: Path, track_path: Path) -> None:\n    """Run the track_follower track example. The robot will drive the pre-recorded track.\n\n    Args:\n        service_config_path (Path): The path to the track_follower service config.\n    """\n\n    # Extract the track_follower service config from the JSON file\n    service_config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())\n\n    # Read the track and package in a Track proto message\n    track: Track = proto_from_json_file(track_path, Track())\n\n    # Send the track to the track_follower\n    await set_track(service_config, track)\n\n    # Follow the track\n    await start(service_config)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We also use the ",(0,r.jsx)(n.code,{children:"subscribe"})," method to receive and stream the track follower state."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'async def stream_track_state(service_config_path: Path) -> None:\n    """Stream the track_follower state.\n\n    Args:\n        service_config_path (Path): The path to the track_follower service config.\n    """\n\n    # Brief wait to allow the track_follower to start (not necessary in practice)\n    await asyncio.sleep(1)\n    print("Streaming track_follower state...")\n\n    # create a client to the camera service\n    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())\n\n    message: TrackFollowerState\n    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):\n        print("###################")\n        print(message)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We use the ",(0,r.jsx)(n.code,{children:"asyncio.gather"})," method to allow running the two tasks,\n(1) setting the track follower to follow the track and (2) streaming the track follower state,\nsimultaneously and asynchronously."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'async def run(args) -> None:\n    tasks: list[asyncio.Task] = [\n        asyncio.create_task(main(args.service_config, args.track)),\n        asyncio.create_task(stream_track_state(args.service_config)),\n    ]\n    await asyncio.gather(*tasks)\n\n\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="amiga-track-follower")\n    parser.add_argument("--service-config", type=Path, required=True,\n        help="The track_follower service config.")\n    parser.add_argument("--track", type=Path, required=True,\n        help="The filepath of the track to follow.")\n    args = parser.parse_args()\n\n    loop = asyncio.get_event_loop()\n    loop.run_until_complete(run(args))\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Congrats you are done!"})}),"\n",(0,r.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,r.jsxs)(n.p,{children:["To run this example, you must activate the ",(0,r.jsx)(n.code,{children:"auto control"})," mode on your Amiga via the dashboard."]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We highly recommend to have some basic knowledge about\n",(0,r.jsx)(n.a,{href:"https://docs.python.org/3/library/asyncio.html",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"asyncio"})})}),"."]})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);