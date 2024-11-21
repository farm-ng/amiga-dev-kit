"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[5274],{20805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const r={id:"filter-client",title:"Filter Client"},a=void 0,o={id:"examples/filter_client/filter-client",title:"Filter Client",description:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:",source:"@site/docs/examples/filter_client/README.md",sourceDirName:"examples/filter_client",slug:"/examples/filter_client/",permalink:"/docs/examples/filter_client/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/filter_client/README.md",tags:[],version:"current",frontMatter:{id:"filter-client",title:"Filter Client"},sidebar:"examples",previous:{title:"File Reader GPS",permalink:"/docs/examples/file_reader_gps/"},next:{title:"Record a Track",permalink:"/docs/examples/track_recorder/"}},l={},c=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:2},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:2},{value:"Setup",id:"setup",level:3},{value:"Install",id:"install",level:3},{value:"3. Execute the Python script",id:"3-execute-the-python-script",level:2},{value:"4. Code overview",id:"4-code-overview",level:2},{value:"Expected output",id:"expected-output",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,i.jsx)(n.p,{children:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Python Programming"}),": It's important to have a good grasp of Python, especially with concepts\nlike ",(0,i.jsx)(n.code,{children:"functions"}),", ",(0,i.jsx)(n.code,{children:"loops"}),", and ",(0,i.jsx)(n.code,{children:"classes"}),", since the example utilizes these fundamentals."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Asynchronous Programming with asyncio"}),": Familiarity with Python's asyncio for writing concurrent\ncode using the ",(0,i.jsx)(n.code,{children:"async/await"})," syntax."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/docs/concepts/filter_service/",children:"farm-ng Filter Service Overview"})}),":\nThis overview provides a base understanding of the gRPC service the client you create will connect to."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/concepts/transforms_and_poses/",children:(0,i.jsx)(n.strong,{children:"farm-ng Transforms & Poses Overview"})}),":\nThis overview provides insight into coordinate frames, transforms,\nand poses as they pertain to autonomous systems and autonomous navigation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Knowledge of State Estimation and Uncertainty"}),": The example deals with concepts of state estimation\n(pose, orientation) and the associated uncertainties.\nUnderstanding these concepts is important for interpreting the received data and how these\nmight be used in downstream applications or enhancements."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Understanding of Kalman Filters, specifically the Unscented Kalman Filter (UKF)"}),":\nThe client in this example is receiving state estimates that are the result of UKF computations.\nIt may be helpful to understand how UKFs work, their limitations and functionalities."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/filter_client/main.py",children:(0,i.jsx)(n.strong,{children:"Filter Client"})}),"\nexample streams the results from the state estimation filter running on the Amiga."]}),"\n",(0,i.jsxs)(n.p,{children:["You can either run this example directly on a brain by ",(0,i.jsx)(n.code,{children:"ssh"}),"'ing in, or use your local PC.\nIf using your local PC, it should be either connected to the same local network as the brain\nor linked to it through ",(0,i.jsxs)(n.a,{href:"https://tailscale.com/",children:[(0,i.jsx)(n.strong,{children:"tailscale"}),"."]})]}),"\n",(0,i.jsxs)(n.p,{children:["The requirements to run this example are to have a\n",(0,i.jsx)(n.a,{href:"/docs/brain/",children:(0,i.jsx)(n.strong,{children:"farm-ng brain"})})," running the ",(0,i.jsx)(n.code,{children:"filter service"}),".\nThe filter service will output the state, even if state estimation results are poor,\nas will be the case if certain data streams from device services are missing."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"The state estimation filter service is a client of the following services:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"canbus"}),"\n",(0,i.jsx)(n.li,{children:"gps"}),"\n",(0,i.jsx)(n.li,{children:"oak0"}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"1-install-the-farm-ng-brain-adk-package",children:["1. Install the ",(0,i.jsx)(n.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,i.jsx)(n.h2,{id:"2-install-the-examples-dependencies",children:"2. Install the example's dependencies"}),"\n",(0,i.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd farm-ng-amiga/\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"Recommended",type:"tip",children:[(0,i.jsx)(n.p,{children:"Create a virtual environment"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m venv venv\nsource venv/bin/activate\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd py/examples/filter_client\npip install -r requirements.txt\n"})}),"\n",(0,i.jsx)(n.h2,{id:"3-execute-the-python-script",children:"3. Execute the Python script"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["To run this script from your PC, you need to update the ",(0,i.jsx)(n.code,{children:"service_config.json"}),"\nby modifying the ",(0,i.jsx)(n.code,{children:"host"})," field with your Amiga brain name."]}),(0,i.jsxs)(n.p,{children:["Please check out ",(0,i.jsx)(n.a,{href:"/docs/concepts/system_overview/#where-to-run-the-examples",children:"Amiga Development 101"}),"\nfor more details."]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 main.py --service-config service_config.json\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["By default, the host address is assumed to be ",(0,i.jsx)(n.code,{children:"localhost"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"4-code-overview",children:"4. Code overview"}),"\n",(0,i.jsxs)(n.p,{children:["In this example we use the ",(0,i.jsx)(n.code,{children:"EventClient"})," with the ",(0,i.jsx)(n.code,{children:"subscribe"})," method to receive the filter state stream."]}),"\n",(0,i.jsx)(n.p,{children:"In this example, we:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Extract the timestamp from when the state estimation filter sent the pose","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Which is immediately after it estimates the state"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"Pose3F64"})," object, a C++ object in ",(0,i.jsx)(n.code,{children:"farm-ng-core"})," made available through pybind"]}),"\n",(0,i.jsx)(n.li,{children:"Extract other important state values, including the uncertainty or confidence in the state estimate"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'async def main(service_config_path: Path) -> None:\n    """Run the filter service client.\n    Args:\n        service_config_path (Path): The path to the filter service config.\n    """\n    # create a client to the filter service\n    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())\n\n    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):\n        # Find the monotonic service send timestamp (this is the time the filter calculated the state),\n        # or the first timestamp if not available.\n        stamp = (\n            get_stamp_by_semantics_and_clock_type(event, StampSemantics.SERVICE_SEND, "monotonic")\n            or event.timestamps[0].stamp\n        )\n\n        # Unpack the filter state message\n        pose: Pose3F64 = Pose3F64.from_proto(message.pose)\n        orientation: float = message.heading\n        uncertainties: list[float] = [message.uncertainty_diagonal.data[i] for i in range(3)]\n\n        # Print some key details about the filter state\n        print("\\n###################")\n        print(f"Timestamp: {stamp}")\n        print("Filter state received with pose:")\n        print(f"x: {pose.translation[0]:.3f} m, y: {pose.translation[1]:.3f} m,\n                                                orientation: {orientation:.3f} rad")\n        print(f"Parent frame: {pose.frame_a} -> Child frame: {pose.frame_b}")\n        print(f"Filter has converged: {message.has_converged}")\n        print("And pose uncertainties:")\n        print(f"x: {uncertainties[0]:.3f} m, y: {uncertainties[1]:.3f} m,\n                                             orientation: {uncertainties[2]:.3f} rad")\n\n\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="amiga-filter-stream")\n    parser.add_argument("--service-config", type=Path, required=True, help="The filter service config.")\n    args = parser.parse_args()\n\n    asyncio.run(main(args.service_config))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"expected-output",children:"Expected output"}),"\n",(0,i.jsxs)(n.p,{children:["You should see a printed stream of key details from the ",(0,i.jsx)(n.code,{children:"FilterState"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);