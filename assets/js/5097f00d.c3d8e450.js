"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[7410],{30806:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(74848),t=a(28453);const r={id:"release-02",title:"AmigaOS 2.0 Barley Release Notes",authors:["mihelich","hackerman342","guilhermedemouraa"],tags:["announcement","release"]},s=void 0,o={id:"release-notes/release-02",title:"AmigaOS 2.0 Barley Release Notes",description:"barley-logo",source:"@site/docs/release-notes/2023-11-15-version-200.md",sourceDirName:"release-notes",slug:"/release-notes/release-02",permalink:"/docs/release-notes/release-02",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/release-notes/2023-11-15-version-200.md",tags:[{inline:!0,label:"announcement",permalink:"/docs/tags/announcement"},{inline:!0,label:"release",permalink:"/docs/tags/release"}],version:"current",frontMatter:{id:"release-02",title:"AmigaOS 2.0 Barley Release Notes",authors:["mihelich","hackerman342","guilhermedemouraa"],tags:["announcement","release"]},sidebar:"Resources/Support",previous:{title:"AmigaOS 2.1 Clementine Release Notes",permalink:"/docs/release-notes/release-021"},next:{title:"AmigaOS 1.0 Artichoke Release Notes",permalink:"/docs/release-notes/release-01"}},l={},c=[{value:"AmigaOS Architecture",id:"amigaos-architecture",level:2},{value:"Amiga Platform",id:"amiga-platform",level:3},{value:"Amiga OS",id:"amiga-os",level:3},{value:"Amiga Services",id:"amiga-services",level:3},{value:"Amiga Apps",id:"amiga-apps",level:2},{value:"Autoplot",id:"autoplot",level:3},{value:"GPS and Filter",id:"gps-and-filter",level:3},{value:"Recorder and File Manager",id:"recorder-and-file-manager",level:3},{value:"Amiga Development",id:"amiga-development",level:2},{value:"Create custom web apps",id:"create-custom-web-apps",level:3},{value:"Porting apps from 1.0",id:"porting-apps-from-10",level:3},{value:"Integrate with ROS",id:"integrate-with-ros",level:3}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/484900/df9e214a-1dcf-4332-acbb-b73d00e2d1fc",alt:"barley-logo"})}),"\n",(0,i.jsx)(n.p,{children:"We are excited to announce AmigaOS 2.0 \u201cBarley\u201d, a major release providing the foundation of\nbuilt-in autonomy features and powerful custom application development on the Amiga robot."}),"\n",(0,i.jsx)(n.p,{children:"Highlights of Barley include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Core capabilities for autonomy and precision navigation:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Precise geo-location, up to 2 cm accuracy, with integrated RTK-GPS receiver."}),"\n",(0,i.jsx)(n.li,{children:"Robust tracking of robot movement (position and orientation), fusing GPS, IMU, and wheel\nodometry."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Autoplot app providing user-friendly control of the Amiga, including:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Teach-and-repeat workflow for automating navigation tasks."}),"\n",(0,i.jsx)(n.li,{children:"Remote teleoperation from any web browser."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Developer-focused environment for custom application development, including:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ubuntu 20.04 and Jetpack 5.1 for NVIDIA Jetson ecosystem compatibility."}),"\n",(0,i.jsx)(n.li,{children:"Remote SSH access from any network."}),"\n",(0,i.jsx)(n.li,{children:"API access to all sensor data streams, robot state estimation and control, and autonomous track\nfollowing."}),"\n",(0,i.jsx)(n.li,{children:"Custom web application deployment to the Brain display."}),"\n",(0,i.jsx)(n.li,{children:"Optional ROS bridge."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Bandwidth-optimized over-the-air (OTA) updates for future AmigaOS releases."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Upgrading from 1.0",type:"warning",children:(0,i.jsxs)(n.p,{children:["Due to the significant platform- and OS-level changes, existing Brains running AmigaOS 1.0 require a\none-time physical upgrade by farm-ng staff to install the GPS receiver module and re-image the Brain\nto AmigaOS 2.0. Please contact ",(0,i.jsx)(n.a,{href:"mailto:support@farm-ng.com",children:"support@farm-ng.com"})," if your Brain has not been upgraded already.\nFuture software updates will be provided over-the-air."]})}),"\n",(0,i.jsx)(n.h2,{id:"amigaos-architecture",children:"AmigaOS Architecture"}),"\n",(0,i.jsx)(n.p,{children:"AmigaOS 2.0 is a major upgrade at all levels of the Brain software stack:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/484900/372032c0-a5aa-4170-92f1-34bb2e6fb73c",alt:"AmigaOS 2 0 Layer Cake"})}),"\n",(0,i.jsx)(n.h3,{id:"amiga-platform",children:"Amiga Platform"}),"\n",(0,i.jsxs)(n.p,{children:["At the hardware layer, the Brain now integrates a GPS receiver to track the robot\u2019s position on\nearth. GPS is indispensable for tasks that require geo-location, from simple navigation to complex\ntasks like field mapping or precision agriculture. When paired with an RTK base station, GPS can\nprovide up to 2 cm accuracy. See our ",(0,i.jsx)(n.a,{href:"/docs/concepts/gps_service/",children:"GPS Overview"})," for more!"]}),"\n",(0,i.jsx)(n.h3,{id:"amiga-os",children:"Amiga OS"}),"\n",(0,i.jsx)(n.p,{children:"At the operating system level, AmigaOS 2.0 is now based on Ubuntu 20.04 and Jetpack 5.1 for\ncompatibility with the broader NVIDIA Jetson developer ecosystem. AmigaOS additionally includes\nsystem services for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["User management, securely providing remote ",(0,i.jsx)(n.a,{href:"/docs/ssh/",children:"SSH access"})," to the Brain."]}),"\n",(0,i.jsx)(n.li,{children:"Over-the-air updates for future AmigaOS releases, following industry best practices for robust\natomic updates (image-based OTA) and minimal data transfer (compressed binary diffs)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"amiga-services",children:"Amiga Services"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/docs/concepts/system_overview/",children:"service layer"})," provides gRPC API access to the various\nfunctions of the Amiga. Each service handles a distinct aspect of the robot's operation, from\nprocessing imagery to managing movement. They're the cogs that make the Amiga machine tick."]}),"\n",(0,i.jsx)(n.p,{children:"The key services include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/concepts/canbus_service/",children:(0,i.jsx)(n.strong,{children:"Canbus"})}),": Manages the robot's motors.\nIt's like the nervous system, transmitting movement commands and receiving feedback."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/concepts/oak_service/",children:(0,i.jsx)(n.strong,{children:"Oak"})}),": The eyes and balance of the robot.\nIt streams imagery and provides IMU data, crucial for services like Filter and Track Follower."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/concepts/gps_service/",children:(0,i.jsx)(n.strong,{children:"GPS"})}),": The robot's global positioning sense.\nIt knows where the Amiga is in the world."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/concepts/filter_service/",children:(0,i.jsx)(n.strong,{children:"Filter (UKF)"})}),": Acts as the robot's sense of self-awareness.\nBy using IMU data from the OAK service, wheel odometry from CANBUS, and global positioning from\nGPS, it estimates the state of the robot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/concepts/recorder_service/",children:(0,i.jsx)(n.strong,{children:"Recorder"})}),": The memory of the robot.\nIt logs data, ensuring we can revisit past operations or analyze performance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/concepts/track_follower_service/",children:(0,i.jsx)(n.strong,{children:"Track Follower"})}),": The brain of the operation.\nIt uses algorithms like pure pursuit and PID to guide the Amiga.\nIt makes decisions based on data from other services."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The architectural diagram below represents how these services interact:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/5157099/a7d5d95f-a94d-40a9-8df0-3c0c9084c2fa",alt:"amiga_brain-1"})}),"\n",(0,i.jsx)(n.h2,{id:"amiga-apps",children:"Amiga Apps"}),"\n",(0,i.jsx)(n.h3,{id:"autoplot",children:"Autoplot"}),"\n",(0,i.jsx)(n.p,{children:"The Autoplot app is an advanced control interface for your Amiga, offering multiple modes of\noperation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Direct control:"})," Manually drive the robot with simple controls for straight, turn, and\nbackwards."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Teach-and-repeat:"})," Manually drive the robot along a desired path, save it, and then command the\nrobot to repeat the path autonomously."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Remote teleoperation:"})," Control the robot through any web browser using a keyboard."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See our ",(0,i.jsx)(n.a,{href:"/docs/apps/autoplot_app/",children:"Autoplot App Guide"})," to try it out!"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/39603677/13bbbec5-f66f-47a4-b064-8e98be59e43f",alt:"Screenshot from 2023-11-08 16-20-21"})}),"\n",(0,i.jsx)(n.h3,{id:"gps-and-filter",children:"GPS and Filter"}),"\n",(0,i.jsx)(n.p,{children:"The GPS and Filter apps provide controls to configure, fine-tune, and troubleshoot the Amiga\u2019s\nautonomous driving. Use them to connect to an RTK base station, calibrate the IMU, and input the\nphysical location of components."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/39603677/c49d41fb-7109-44a3-a8f2-9d1db3ac2ba4",alt:"Screenshot from 2023-11-07 13-51-25"})}),"\n",(0,i.jsx)(n.h3,{id:"recorder-and-file-manager",children:"Recorder and File Manager"}),"\n",(0,i.jsx)(n.p,{children:"The Recorder App / Service is the backbone of the Amiga's data logging and playback functionality.\nIt is designed to capture and store raw data from various robot services, facilitating later\nanalysis, debugging, and model training. The File Manager app allows you to list your recorded log\nfiles and manage your disk space."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/484900/72544c9d-38ef-4961-b37e-a1ea8975e374",alt:"recorder-app"})}),"\n",(0,i.jsx)(n.h2,{id:"amiga-development",children:"Amiga Development"}),"\n",(0,i.jsx)(n.h3,{id:"create-custom-web-apps",children:"Create custom web apps"}),"\n",(0,i.jsx)(n.p,{children:"A key pillar of the Amiga Development Kit is the ability for any user to create their own custom\napplications that run on the Amiga Brain. We have updated our application framework from a\nKivy-based application approach to a web app based approach. This change facilitates:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Seamless embedding of custom apps into the system UI."}),"\n",(0,i.jsx)(n.li,{children:"Teleoperation and remote monitoring of your Amiga, as demonstrated by the Autoplot app."}),"\n",(0,i.jsx)(n.li,{children:"Separation of rate-critical robotics functionality from visualization processes."}),"\n",(0,i.jsx)(n.li,{children:"Use of modern web standards and frameworks."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Please check out our instructions for getting started at\n",(0,i.jsx)(n.a,{href:"/docs/brain/brain-apps/",children:"Developing Custom Applications"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/5157099/205272492-356c1540-948e-43dc-8f60-8992caa8d511.gif",alt:"Create a new templated repository"})}),"\n",(0,i.jsx)(n.h3,{id:"porting-apps-from-10",children:"Porting apps from 1.0"}),"\n",(0,i.jsx)(n.p,{children:"AmigaOS 1.0 supported Kivy as the framework for running custom applications on the Brain. To port\nyour existing app to run on the Brain with AmigaOS 2.0, you\u2019ll need to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Update your use of Amiga services to match our current APIs; see our examples.\nYou will still use Python for backend / application / data processing logic."}),"\n",(0,i.jsx)(n.li,{children:"Port the frontend / visualization code to your web application framework of choice.\nWe provide a template for a Python/FastAPI backend serving a TypeScript/ReactJS-based frontend."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As an intermediate step, after (1) updating your use of Amiga APIs, you should be able to run your\nKivy app on an external PC connected to the Amiga services over the network."}),"\n",(0,i.jsxs)(n.p,{children:["If you need additional guidance on porting your application, please reach out on Discourse or via\n",(0,i.jsx)(n.a,{href:"mailto:support@farm-ng.com",children:"support@farm-ng.com"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"integrate-with-ros",children:"Integrate with ROS"}),"\n",(0,i.jsxs)(n.p,{children:["The updated ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-ros-bridge",children:"farm-ng/amiga-ros-bridge"})," supports\ninterfacing ROS Noetic nodes with the gRPC services running on the Amiga brains. Supported features\ninclude:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Stream data from the Amiga brain services: wheel odometry, state estimation filter results, video\nstreams, etc."}),"\n",(0,i.jsx)(n.li,{children:"Control the Amiga using the available vehicle control APIs."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Check out the documentation at\n",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-ros-bridge#readme",children:"amiga-ros-bridge README"})," for installation and\nusage details."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/5157099/219821724-69dfc97d-17fc-4a08-933a-e6fb2446495e.jpg",alt:"command prompt"})}),"\n",(0,i.jsxs)(n.p,{children:["Happy coding ","\ud83d\ude0e"," from the Amiga Brain Team!"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var i=a(96540);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);