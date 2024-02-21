"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[1149],{151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(5893),a=t(1151);const i={id:"pendant-state",title:"Pendant State"},r="Amiga Pendant State Example",d={id:"examples/pendant_state/pendant-state",title:"Pendant State",description:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:",source:"@site/docs/examples/pendant_state/README.md",sourceDirName:"examples/pendant_state",slug:"/examples/pendant_state/",permalink:"/docs/examples/pendant_state/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/pendant_state/README.md",tags:[],version:"current",frontMatter:{id:"pendant-state",title:"Pendant State"},sidebar:"examples",previous:{title:"Motor State",permalink:"/docs/examples/motor_state/"},next:{title:"Vehicle Twist",permalink:"/docs/examples/vehicle_twist/"}},c={},l=[{value:"<code>PendantState</code> details",id:"pendantstate-details",level:2},{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:2},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:2},{value:"Setup",id:"setup",level:3},{value:"Install",id:"install",level:3},{value:"3. [Optional] Modify the Service Config",id:"3-optional-modify-the-service-config",level:2},{value:"4. Execute the Python script",id:"4-execute-the-python-script",level:2},{value:"Expected output",id:"expected-output",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"amiga-pendant-state-example",children:"Amiga Pendant State Example"}),"\n",(0,s.jsxs)(n.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,s.jsx)(n.p,{children:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Python Programming"}),": It's important to have a good grasp of Python, especially with concepts\nlike ",(0,s.jsx)(n.code,{children:"functions"}),", ",(0,s.jsx)(n.code,{children:"loops"}),", and ",(0,s.jsx)(n.code,{children:"classes"}),", since the example utilizes these fundamentals."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/concepts/canbus_service",children:(0,s.jsx)(n.strong,{children:"farm-ng Canbus Service Overview"})}),":\nThis overview provides a base understanding of the gRPC service the client you create will connect to."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/pendant_state/main.py",children:(0,s.jsx)(n.strong,{children:"Amiga Pendant State"})}),"\nexample is a basic way of showing how to access and decode the\n",(0,s.jsx)(n.code,{children:"PendantState"})," values streamed by the canbus service."]}),"\n",(0,s.jsxs)(n.p,{children:["You can either run this example directly on a brain by ",(0,s.jsx)(n.code,{children:"ssh"}),"'ing in, or use your local PC.\nIf using your local PC, it should be either connected to the same local network as the brain\nor linked to it through tailscale."]}),"\n",(0,s.jsxs)(n.p,{children:["The requirements to run this example are to have a\n",(0,s.jsx)(n.a,{href:"/docs/brain/",children:(0,s.jsx)(n.strong,{children:"farm-ng brain"})})," running the ",(0,s.jsx)(n.code,{children:"canbus service"}),", with a pendant attached to your Amiga.\nThere will be no ",(0,s.jsx)(n.code,{children:"/pendant"})," stream if your amiga does not have a wired pendant connected."]}),"\n",(0,s.jsxs)(n.p,{children:["At the current dashboard firmware release ",(0,s.jsx)(n.code,{children:"v0.4.0"}),", the ",(0,s.jsx)(n.code,{children:"PendantState"})," is not published on the CAN\nbus for pendant alternatives, including Kartech wireless remotes and the on-screen pendant."]}),"\n",(0,s.jsxs)(n.h2,{id:"pendantstate-details",children:[(0,s.jsx)(n.code,{children:"PendantState"})," details"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Check out ",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py",children:(0,s.jsx)(n.code,{children:"farm-ng-amiga/py/farm_ng/canbus/packet.py"})}),"\nor the auto-generated ",(0,s.jsx)(n.a,{href:"/docs/reference/brain/canbus/packet",children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"canbus.packet"})," API docs"]})})," for the latest."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x"}),": Joystick ",(0,s.jsx)(n.code,{children:"[left, right]"}),", on range ",(0,s.jsx)(n.code,{children:"[-1.0, 1.0]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"y"}),": Joystick ",(0,s.jsx)(n.code,{children:"[reverse, forward]"}),", on range ",(0,s.jsx)(n.code,{children:"[-1.0, 1.0]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"buttons"}),": Bit masked integer representing which buttons are pressed"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class PendantButtons(IntEnum):\n    """Bit field for pendant buttons."""\n\n    PAUSE = 0x01  # Square\n    BRAKE = 0x02  # Circle\n    PTO = 0x04  # Triangle\n    CRUISE = 0x08  # Cross (X)\n    LEFT = 0x10  # D-pad left\n    UP = 0x20  # D-pad up\n    RIGHT = 0x40  # D-pad right\n    DOWN = 0x80  # D-pad down\n'})}),"\n",(0,s.jsxs)(n.admonition,{title:"caution",type:"warning",children:[(0,s.jsxs)(n.p,{children:["This is the raw output of the pendant,\nso you should not expect to see ",(0,s.jsx)(n.code,{children:"x == 0.0"})," or ",(0,s.jsx)(n.code,{children:"y == 0.0"}),' when the joystick is "centered",\nas there is inherent noise in the reading of a joystick axis.']}),(0,s.jsxs)(n.p,{children:["The dashboard filters these values out for vehicle control based on the pendant calibration,\nbut that is not represented in the ",(0,s.jsx)(n.code,{children:"PendantState"}),"."]})]}),"\n",(0,s.jsxs)(n.h2,{id:"1-install-the-farm-ng-brain-adk-package",children:["1. Install the ",(0,s.jsx)(n.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,s.jsx)(n.h2,{id:"2-install-the-examples-dependencies",children:"2. Install the example's dependencies"}),"\n",(0,s.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd farm-ng-amiga/\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Recommended",type:"tip",children:[(0,s.jsx)(n.p,{children:"Create a virtual environment"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 -m venv venv\nsource venv/bin/activate\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd py/examples/pendant_state\npip install -r requirements.txt\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-optional-modify-the-service-config",children:"3. [Optional] Modify the Service Config"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can skip this if running the example ",(0,s.jsx)(n.code,{children:"ssh"}),"'d into your brain."]})}),"\n",(0,s.jsxs)(n.p,{children:["To connect with a ",(0,s.jsx)(n.code,{children:"gRPC"})," client over Wifi,\nyou must change the ",(0,s.jsx)(n.code,{children:"host"})," field in ",(0,s.jsx)(n.code,{children:"service_config.json"})," from localhost to your robot's name\n(e.g., ",(0,s.jsx)(n.code,{children:"element-vegetable"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["As a debugging step, ensure you can ping the amiga at that IP address or tailscale name with ",(0,s.jsx)(n.code,{children:"ping element-vegetable"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "canbus",\n    "port": 6001,\n    "host": "element-vegetable",\n    "log_level": "INFO",\n    "subscriptions": [\n      {\n          "uri": {\n              "path": "/pendant",\n              "query": "service_name=canbus"\n          },\n          "every_n": 1\n      }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"4-execute-the-python-script",children:"4. Execute the Python script"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python main.py --service-config service_config.json\n"})}),"\n",(0,s.jsx)(n.h2,{id:"expected-output",children:"Expected output"}),"\n",(0,s.jsxs)(n.p,{children:["You should see a printed stream of  ",(0,s.jsx)(n.code,{children:"PendantState"}),",\nwith additional printout of any pressed buttons."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(7294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);