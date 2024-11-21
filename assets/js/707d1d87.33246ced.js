"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[2467],{4332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(74848),r=n(28453);const o={id:"track-plotter",title:"Plot a Track"},s=void 0,i={id:"examples/track_plotter/track-plotter",title:"Plot a Track",description:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:",source:"@site/docs/examples/track_plotter/README.md",sourceDirName:"examples/track_plotter",slug:"/examples/track_plotter/",permalink:"/docs/examples/track_plotter/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/track_plotter/README.md",tags:[],version:"current",frontMatter:{id:"track-plotter",title:"Plot a Track"},sidebar:"examples",previous:{title:"Record a Track",permalink:"/docs/examples/track_recorder/"},next:{title:"Follow a Track",permalink:"/docs/examples/track_follower/"}},l={},c=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:2},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:2},{value:"Setup",id:"setup",level:3},{value:"Install",id:"install",level:3},{value:"3. Execute the Python script",id:"3-execute-the-python-script",level:2},{value:"4. Code Highlights",id:"4-code-highlights",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,a.jsx)(t.p,{children:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Python Programming"}),": It's important to have a basic grasp of Python,\nincluding plotting / visualization with the ",(0,a.jsx)(t.a,{href:"https://matplotlib.org/",children:(0,a.jsx)(t.code,{children:"matplotlib"})})," library."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/examples/track_recorder/",children:(0,a.jsx)(t.strong,{children:"Record a Track"})}),": Follow the example to record the track you\nwill plot in this example and cover the required knowledge\nfor that example to understand ",(0,a.jsx)(t.code,{children:"Tracks"}),", ",(0,a.jsx)(t.code,{children:"Waypoints"}),", & ",(0,a.jsx)(t.code,{children:"Poses"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Transfer Data"}),": Know how to transfer data from your robot to your local PC by following the\ndata transfer section of the ",(0,a.jsx)(t.a,{href:"/docs/apps/recorder_app/",children:(0,a.jsx)(t.strong,{children:"Recorder App Guide"})}),"."]}),"\n"]})]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/track_plotter/main.py",children:(0,a.jsx)(t.strong,{children:"Track Plotter Example"})}),"\noperates as a standalone Python script,\nin which a ",(0,a.jsx)(t.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/track/track.proto",children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Track"})})}),"\nproto message is plotted using the ",(0,a.jsx)(t.a,{href:"https://matplotlib.org/",children:(0,a.jsx)(t.code,{children:"matplotlib"})})," library.\nThis script takes in a pre-recorded track and plots the track."]}),"\n",(0,a.jsx)(t.p,{children:"To successfully run this example, you must use your local PC, as the example won't\nwork if executed directly from a brain (because of the popup window)."}),"\n",(0,a.jsxs)(t.h2,{id:"1-install-the-farm-ng-brain-adk-package",children:["1. Install the ",(0,a.jsx)(t.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,a.jsx)(t.h2,{id:"2-install-the-examples-dependencies",children:"2. Install the example's dependencies"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment."})}),"\n",(0,a.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(t.admonition,{title:"Recommended",type:"important",children:(0,a.jsx)(t.p,{children:"Create a virtual environment"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"python3 -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,a.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd py/examples/track_plotter\npip install -r requirements.txt\n"})}),"\n",(0,a.jsx)(t.h2,{id:"3-execute-the-python-script",children:"3. Execute the Python script"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"python main.py --track <path-to-your-track>\n# Replace <path-to-your-track> to the actual file path to your track\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"reminder",type:"info",children:(0,a.jsxs)(t.p,{children:["There's an example to teach you how to ",(0,a.jsx)(t.a,{href:"/docs/examples/track_recorder",children:(0,a.jsx)(t.strong,{children:"record your own track here"})}),"."]})}),"\n",(0,a.jsxs)(t.p,{children:["You should now see a ",(0,a.jsx)(t.code,{children:"matplotlib"})," popup with a plot of your ",(0,a.jsx)(t.code,{children:"Track"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/53625197/d22590eb-92fd-421a-9e72-865a9edfcd4b",alt:"full_track"})}),"\n",(0,a.jsx)(t.p,{children:"If you zoom in on the track, you will see that each waypoint is\nplotted as an arrow indicating the heading of the waypoint pose."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/53625197/35c9c627-dadb-4bcf-ae7f-23bd46f687fb",alt:"zoomer_track"})}),"\n",(0,a.jsx)(t.h2,{id:"4-code-highlights",children:"4. Code Highlights"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"unpack_track"})," function is what interacts with the ",(0,a.jsx)(t.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/track/track.proto",children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Track"})})}),"\nproto to extract ",(0,a.jsx)(t.code,{children:"x"})," & ",(0,a.jsx)(t.code,{children:"y"})," coordinates and ",(0,a.jsx)(t.code,{children:"heading"})," of each waypoint.\nThis is done by converting each waypoint\n",(0,a.jsx)(t.a,{href:"https://github.com/farm-ng/farm-ng-core/blob/main/protos/farm_ng/core/pose.proto",children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Pose"})})}),"\nproto to the\n",(0,a.jsx)(t.a,{href:"https://github.com/farm-ng/farm-ng-core/blob/main/py/pybind/lie_pybind.cpp",children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Pose3F64"})})}),"\n",(0,a.jsx)(t.code,{children:"C++"})," class that is exposed through ",(0,a.jsx)(t.code,{children:"Pybind"}),".\nWe then extract the required values from this class."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Python",children:'def unpack_track(track: Track) -> tuple[list[float], list[float], list[float]]:\n    """Unpack a track from a Track proto message into lists of x, y, and heading values.\n\n    Args:\n        track: (Track) The Track proto message to unpack.\n    Returns:\n        x_values: (list[float]) The x values of the track.\n        y_values: (list[float]) The y values of the track.\n        headings: (list[float]) The heading values of the track.\n    """\n    x_values: list[float] = []\n    y_values: list[float] = []\n    headings: list[float] = []\n\n    waypoint: Pose\n    for waypoint in track.waypoints:\n        goal: Pose3F64 = Pose3F64.from_proto(waypoint)\n\n        x_values.append(goal.translation[0])\n        y_values.append(goal.translation[1])\n        headings.append(goal.rotation.log()[-1])\n\n    return x_values, y_values, headings\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Congrats you are done!"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(96540);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);