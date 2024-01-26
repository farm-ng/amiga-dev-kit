"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[2614],{3036:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=s(5893),t=s(1151);const r={id:"tool-control",title:"Tool Control"},i="Amiga Tool Control example",l={id:"examples/tool_control/tool-control",title:"Tool Control",description:"Running this example has minimum release versions of:",source:"@site/docs/examples/tool_control/README.md",sourceDirName:"examples/tool_control",slug:"/examples/tool_control/",permalink:"/docs/examples/tool_control/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/tool_control/README.md",tags:[],version:"current",frontMatter:{id:"tool-control",title:"Tool Control"},sidebar:"examples",previous:{title:"Vehicle Twist",permalink:"/docs/examples/vehicle_twist/"},next:{title:"File Reader CAN",permalink:"/docs/examples/file_reader_can/"}},a={},c=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:2},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:2},{value:"Setup",id:"setup",level:3},{value:"Install",id:"install",level:3},{value:"3. Modify the Service Config",id:"3-modify-the-service-config",level:2},{value:"4. Execute the Python script",id:"4-execute-the-python-script",level:2},{value:"5. Using the example",id:"5-using-the-example",level:2},{value:"Key Combinations for Tool Control",id:"key-combinations-for-tool-control",level:3},{value:"All devices passive",id:"all-devices-passive",level:4},{value:"H-Bridge Control",id:"h-bridge-control",level:4},{value:"PTO Control",id:"pto-control",level:4},{value:"Running with Twist control",id:"running-with-twist-control",level:3},{value:"6. Code Overview",id:"6-code-overview",level:2},{value:"<code>KeyboardListener</code>",id:"keyboardlistener",level:3},{value:"<code>tool_control_from_key_presses</code>",id:"tool_control_from_key_presses",level:3},{value:"<code>control_tools</code>",id:"control_tools",level:3},{value:"<code>stream_tool_statuses</code>",id:"stream_tool_statuses",level:3},{value:"Run the tasks",id:"run-the-tasks",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"amiga-tool-control-example",children:"Amiga Tool Control example"}),"\n",(0,o.jsxs)(n.admonition,{title:"Pre-release",type:"danger",children:[(0,o.jsx)(n.p,{children:"Running this example has minimum release versions of:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["brain: ",(0,o.jsx)(n.code,{children:"AmigaOS v2.3.0 +"})]}),"\n",(0,o.jsxs)(n.li,{children:["dashboard: ",(0,o.jsx)(n.code,{children:"firmware v0.5.0 +"})]}),"\n",(0,o.jsxs)(n.li,{children:["PC: ",(0,o.jsx)(n.code,{children:"farm-ng-amiga v2.3.0+"})]}),"\n"]}),(0,o.jsxs)(n.p,{children:["These may not yet be publicly available and are scheduled for release in early March 2024.\nTo request early access, please reach out to us at: ",(0,o.jsx)(n.a,{href:"mailto:support@farm-ng.com",children:"support@farm-ng.com"})]})]}),"\n",(0,o.jsxs)(n.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,o.jsx)(n.p,{children:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Python Programming"}),": It's important to have a good grasp of Python, especially with concepts\nlike ",(0,o.jsx)(n.code,{children:"functions"}),", ",(0,o.jsx)(n.code,{children:"loops"}),", and ",(0,o.jsx)(n.code,{children:"classes"}),", since the example utilizes these fundamentals."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Asynchronous Programming with asyncio"}),": Familiarity with Python's asyncio for writing concurrent\ncode using the ",(0,o.jsx)(n.code,{children:"async/await"})," syntax."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/docs/concepts/canbus_service/",children:"farm-ng Canbus Service Overview"})}),":\nThis overview provides a base understanding of the gRPC service the client you create will connect to."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/docs/examples/vehicle_twist/",children:"Vehicle Twist example"})}),": It is recommended to have used the\nVehicle Twist example for motion control of the Amiga before controlling the tools."]}),"\n"]})]}),"\n",(0,o.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,o.jsx)(n.p,{children:"The tool control example will cause any tools connected to the Amiga to actuate when the dashboard\nis in auto mode.\nThis includes H-bridges and PTOs.\nMake sure the area is clear before running examples."})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/tool_control/main.py",children:(0,o.jsx)(n.strong,{children:"Tool Control Example"})}),"\noperates as a standalone Python script,\nin which an ",(0,o.jsx)(n.code,{children:"EventClient"})," to the farm-ng Canbus service running on an Amiga brain is created."]}),"\n",(0,o.jsx)(n.p,{children:"This script commands actuators (H-bridges & PTOs) based on keyboard inputs from the computer\non which you run the example."}),"\n",(0,o.jsx)(n.p,{children:"You should run this example on your local PC, connected to the same local network as the brain\nor linked to it through tailscale."}),"\n",(0,o.jsxs)(n.p,{children:["Ensure that a ",(0,o.jsx)(n.a,{href:"/docs/brain/",children:(0,o.jsx)(n.strong,{children:"farm-ng brain"})}),",\nattached to an Amiga with at least one H-bridge or PTO device,\nis actively running the canbus service."]}),"\n",(0,o.jsxs)(n.h2,{id:"1-install-the-farm-ng-brain-adk-package",children:["1. Install the ",(0,o.jsx)(n.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,o.jsx)(n.h2,{id:"2-install-the-examples-dependencies",children:"2. Install the example's dependencies"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment."})}),"\n",(0,o.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(n.admonition,{title:"Recommended",type:"important",children:(0,o.jsx)(n.p,{children:"Create a virtual environment"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python3 -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd py/examples/tool_control\npip install -r requirements.txt\n"})}),"\n",(0,o.jsx)(n.h2,{id:"3-modify-the-service-config",children:"3. Modify the Service Config"}),"\n",(0,o.jsxs)(n.p,{children:["To command the robot tools from your laptop, by connecting with a ",(0,o.jsx)(n.code,{children:"gRPC"})," client over Wifi,\nyou must change the ",(0,o.jsx)(n.code,{children:"host"})," field in ",(0,o.jsx)(n.code,{children:"service_config.json"})," from localhost to your robot's name\n(e.g., ",(0,o.jsx)(n.code,{children:"element-vegetable"}),")."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "name": "canbus",\n    "port": 6001,\n    "host": "element-vegetable",\n    "subscriptions": [\n        {\n            "uri": {\n            "path": "/tool_statuses",\n            "query": "service_name=canbus"\n            },\n            "every_n": 1\n        }\n    ],\n    "log_level": "INFO"\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"4-execute-the-python-script",children:"4. Execute the Python script"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python main.py --service-config service_config.json\n"})}),"\n",(0,o.jsx)(n.p,{children:"If everything worked correctly you should now see a stream\nof the statuses of all connected tools come up in your terminal!"}),"\n",(0,o.jsx)(n.h2,{id:"5-using-the-example",children:"5. Using the example"}),"\n",(0,o.jsx)(n.admonition,{title:"Reminder",type:"caution",children:(0,o.jsxs)(n.p,{children:["To control tools using this example,\nyou must activate the ",(0,o.jsx)(n.code,{children:"auto control"})," mode on your Amiga via the dashboard."]})}),"\n",(0,o.jsx)(n.h3,{id:"key-combinations-for-tool-control",children:"Key Combinations for Tool Control"}),"\n",(0,o.jsxs)(n.p,{children:["Let's explore the key combinations used in the ",(0,o.jsx)(n.code,{children:"tool_control_from_key_presses"})," function for\ncontrolling various devices:"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"It is recommended to double check the example code to confirm that\nthe following key mappings have not changed before you run the example."})}),"\n",(0,o.jsx)(n.h4,{id:"all-devices-passive",children:"All devices passive"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Spacebar"}),": Pressing this key sets all devices to passive mode and overrides any additional key presses."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"h-bridge-control",children:"H-Bridge Control"}),"\n",(0,o.jsxs)(n.p,{children:["The H-Bridges are controlled using the numbers ",(0,o.jsx)(n.code,{children:"0"}),", ",(0,o.jsx)(n.code,{children:"1"}),", ",(0,o.jsx)(n.code,{children:"2"}),", & ",(0,o.jsx)(n.code,{children:"3"}),",\ncorresponding to H-Bridges ",(0,o.jsx)(n.code,{children:"0"}),", ",(0,o.jsx)(n.code,{children:"1"}),", ",(0,o.jsx)(n.code,{children:"2"}),", & ",(0,o.jsx)(n.code,{children:"3"}),",\nalong with the Up and Down arrow keys:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Up Arrow + [0/1/2/3]"}),": Moves the corresponding H-Bridges forward."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Down Arrow + [0/1/2/3]"}),": Moves the corresponding H-Bridges in reverse."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Up + Down Arrows + [0/1/2/3]"}),": Stops the corresponding H-Bridges."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"pto-control",children:"PTO Control"}),"\n",(0,o.jsxs)(n.p,{children:["PTOs are controlled with the keys ",(0,o.jsx)(n.code,{children:"a"}),", ",(0,o.jsx)(n.code,{children:"b"}),", ",(0,o.jsx)(n.code,{children:"c"}),", & ",(0,o.jsx)(n.code,{children:"d"}),",\ncorresponding to PTOs ",(0,o.jsx)(n.code,{children:"0"}),", ",(0,o.jsx)(n.code,{children:"1"}),", ",(0,o.jsx)(n.code,{children:"2"}),", & ",(0,o.jsx)(n.code,{children:"3"}),",\ncombined with the Left and Right arrow keys:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Left Arrow + [a/b/c/d]"}),": Moves the PTO forward."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Right Arrow + [a/b/c/d]"}),": Moves the PTO in reverse."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Left + Right Arrows + [a/b/c/d]"}),": Stops the PTO."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["These key mappings allow for simultaneous control of multiple devices\nthrough the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/docs/concepts/canbus_service/",children:"Canbus Service"})})," ",(0,o.jsx)(n.code,{children:"/control_tools"})," API."]}),"\n",(0,o.jsx)(n.h3,{id:"running-with-twist-control",children:"Running with Twist control"}),"\n",(0,o.jsxs)(n.p,{children:["You can also run this example alongside the\n",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/docs/examples/vehicle_twist/",children:"Vehicle Twist example"})}),"\nto control the tools and drive the robot at the same time.\nThe ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/docs/concepts/canbus_service/",children:"Canbus Service"})}),"\nwill synchronize the ",(0,o.jsx)(n.code,{children:"Twist2d"})," commands with the ",(0,o.jsx)(n.code,{children:"ActuatorCommands"}),"\nfor simultaneous driving and tool control!"]}),"\n",(0,o.jsx)(n.h2,{id:"6-code-overview",children:"6. Code Overview"}),"\n",(0,o.jsx)(n.h3,{id:"keyboardlistener",children:(0,o.jsx)(n.code,{children:"KeyboardListener"})}),"\n",(0,o.jsxs)(n.p,{children:["We create a ",(0,o.jsx)(n.code,{children:"KeyboardListener"})," class that wraps the\n",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://pynput.readthedocs.io/en/latest/keyboard.html",children:(0,o.jsx)(n.code,{children:"pynput.keyboard"})})}),"\nfor receiving and assembling a ",(0,o.jsx)(n.code,{children:"set"})," of simultaneous key presses."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class KeyboardListener:\n    def __init__(self):\n        self.pressed_keys = set()\n        self.listener = keyboard.Listener(on_press=self.on_press, on_release=self.on_release)\n\n    def on_press(self, key):\n        try:\n            key_name = key.char\n        except AttributeError:\n            key_name = key.name  # For special keys\n        self.pressed_keys.add(key_name)\n\n    def on_release(self, key):\n        try:\n            key_name = key.char\n        except AttributeError:\n            key_name = key.name  # For special keys\n        self.pressed_keys.discard(key_name)\n\n    def start(self):\n        self.listener.start()\n\n    def stop(self):\n        self.listener.stop()\n"})}),"\n",(0,o.jsx)(n.h3,{id:"tool_control_from_key_presses",children:(0,o.jsx)(n.code,{children:"tool_control_from_key_presses"})}),"\n",(0,o.jsxs)(n.p,{children:["This function maps the pressed ",(0,o.jsx)(n.code,{children:"set"})," of pressed_keys to an ",(0,o.jsx)(n.code,{children:"ActuatorCommands"})," proto message\nthat we can use to command the tools on the Amiga."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def tool_control_from_key_presses(pressed_keys: set) -> ActuatorCommands:\n    if 'space' in pressed_keys:\n        print(\"Set all to passive with empty command\")\n        return ActuatorCommands()\n\n    commands: ActuatorCommands = ActuatorCommands()\n\n    # H-bridges controlled with 0, 1, 2, 3 & up / down arrows\n    # up = forward, down = reverse, both = stop, neither / not pressed => omitted => passive\n    if 'up' in pressed_keys and 'down' in pressed_keys:\n        for hbridge_id in pressed_keys & {'0', '1', '2', '3'}:\n            commands.hbridges.append(HBridgeCommand(id=int(hbridge_id), command=HBridgeCommandType.HBRIDGE_STOPPED))\n    elif 'up' in pressed_keys:\n        for hbridge_id in pressed_keys & {'0', '1', '2', '3'}:\n            commands.hbridges.append(HBridgeCommand(id=int(hbridge_id), command=HBridgeCommandType.HBRIDGE_FORWARD))\n    elif 'down' in pressed_keys:\n        for hbridge_id in pressed_keys & {'0', '1', '2', '3'}:\n            commands.hbridges.append(HBridgeCommand(id=int(hbridge_id), command=HBridgeCommandType.HBRIDGE_REVERSE))\n\n    # PTOs controlled with a, b, c, d & left / right arrows\n    # left = forward, right = reverse, both = stop, neither / not pressed => omitted => passive\n    pto_id_mapping = {'a': 0x0, 'b': 0x1, 'c': 0x2, 'd': 0x3}\n    pto_rpm: float = 20.0\n    if 'left' in pressed_keys and 'right' in pressed_keys:\n        for pto_char in pressed_keys & {'a', 'b', 'c', 'd'}:\n            pto_id = pto_id_mapping[pto_char]\n            commands.ptos.append(PtoCommand(id=pto_id, command=PtoCommandType.PTO_STOPPED, rpm=pto_rpm))\n    elif 'left' in pressed_keys:\n        for pto_char in pressed_keys & {'a', 'b', 'c', 'd'}:\n            pto_id = pto_id_mapping[pto_char]\n            commands.ptos.append(PtoCommand(id=pto_id, command=PtoCommandType.PTO_FORWARD, rpm=pto_rpm))\n    elif 'right' in pressed_keys:\n        for pto_char in pressed_keys & {'a', 'b', 'c', 'd'}:\n            pto_id = pto_id_mapping[pto_char]\n            commands.ptos.append(PtoCommand(id=pto_id, command=PtoCommandType.PTO_REVERSE, rpm=pto_rpm))\n\n    return commands\n"})}),"\n",(0,o.jsx)(n.h3,{id:"control_tools",children:(0,o.jsx)(n.code,{children:"control_tools"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example we use the ",(0,o.jsx)(n.code,{children:"EventClient"})," with the ",(0,o.jsx)(n.code,{children:"request_reply"})," method to send\nan ",(0,o.jsx)(n.code,{children:"ActuatorCommands"})," message on the ",(0,o.jsx)(n.code,{children:"/control_tools"})," path at a regular interval."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'async def control_tools(service_config_path: Path, keyboard_listener: KeyboardListener) -> None:\n    """Control the tools / actuators on your Amiga.\n\n    Args:\n        service_config_path (Path): The path to the canbus service config.\n        keyboard_listener (KeyboardListener): The keyboard listener.\n    """\n    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())\n    client: EventClient = EventClient(config)\n\n    while True:\n        # Send the tool control command\n        commands: ActuatorCommands = tool_control_from_key_presses(keyboard_listener.pressed_keys)\n        await client.request_reply("/control_tools", commands, decode=True)\n\n        # Sleep for a bit\n        await asyncio.sleep(0.1)\n'})}),"\n",(0,o.jsx)(n.h3,{id:"stream_tool_statuses",children:(0,o.jsx)(n.code,{children:"stream_tool_statuses"})}),"\n",(0,o.jsxs)(n.p,{children:["We asynchronously stream the ",(0,o.jsx)(n.code,{children:"ToolStatuses"})," message from the ",(0,o.jsx)(n.code,{children:"canbus"})," service on the\n",(0,o.jsx)(n.code,{children:"/tool_statuses"})," topic."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'async def stream_tool_statuses(service_config_path: Path) -> None:\n    """Stream the tool statuses.\n\n    Args:\n        service_config_path (Path): The path to the canbus service config.\n    """\n\n    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())\n\n    message: ToolStatuses\n    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):\n        print("###################")\n        print(message)\n'})}),"\n",(0,o.jsx)(n.h3,{id:"run-the-tasks",children:"Run the tasks"}),"\n",(0,o.jsxs)(n.p,{children:["We use the ",(0,o.jsx)(n.code,{children:"asyncio.gather"})," method to allow running the two tasks,\n(1) controlling the tools and (2) streaming the tool statuses,\nsimultaneously and asynchronously."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'async def run(service_config_path: Path, keyboard_listener: KeyboardListener):\n    # Create tasks for both functions\n    tasks: list[asyncio.Task] = [\n        asyncio.create_task(control_tools(service_config_path, keyboard_listener)),\n        asyncio.create_task(stream_tool_statuses(service_config_path)),\n    ]\n    await asyncio.gather(*tasks)\n\n\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="Command and monitor tools with the canbus service.")\n    parser.add_argument("--service-config", type=Path, required=True, help="The canbus service config.")\n    args = parser.parse_args()\n\n    keyboard_listener = KeyboardListener()\n    keyboard_listener.start()\n\n    try:\n        asyncio.run(run(args.service_config, keyboard_listener))\n    except KeyboardInterrupt:\n        pass\n    finally:\n        keyboard_listener.stop()\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Congrats you are done!"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var o=s(7294);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);