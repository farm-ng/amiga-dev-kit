"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[4074],{51917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(74848),s=a(28453);const i={id:"release-01",title:"AmigaOS 1.0 Artichoke Release Notes",authors:["edgarriba","garybradski","hackerman342","christopherbradski","ethanrublee"],tags:["announcement","release"]},r=void 0,o={id:"release-notes/release-01",title:"AmigaOS 1.0 Artichoke Release Notes",description:"At farm-ng we love making tools for engineers, hackers, building",source:"@site/docs/release-notes/2023-02-17-version-100.md",sourceDirName:"release-notes",slug:"/release-notes/release-01",permalink:"/docs/release-notes/release-01",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/release-notes/2023-02-17-version-100.md",tags:[{inline:!0,label:"announcement",permalink:"/docs/tags/announcement"},{inline:!0,label:"release",permalink:"/docs/tags/release"}],version:"current",frontMatter:{id:"release-01",title:"AmigaOS 1.0 Artichoke Release Notes",authors:["edgarriba","garybradski","hackerman342","christopherbradski","ethanrublee"],tags:["announcement","release"]},sidebar:"Resources/Support",previous:{title:"AmigaOS 2.0 Barley Release Notes",permalink:"/docs/release-notes/release-02"}},c={},l=[{value:"The Amiga",id:"the-amiga",level:2},{value:"The Dashboard",id:"the-dashboard",level:3},{value:"The Brain",id:"the-brain",level:3},{value:"Amiga OS",id:"amiga-os",level:2},{value:"Microservices Architecture",id:"microservices-architecture",level:3},{value:"gRPC Services",id:"grpc-services",level:3},{value:"The native Apps",id:"the-native-apps",level:2},{value:"Recorder",id:"recorder",level:3},{value:"Gallery / Playback",id:"gallery--playback",level:3},{value:"File mover",id:"file-mover",level:3},{value:"Create custom apps",id:"create-custom-apps",level:2},{value:"Ecosystem",id:"ecosystem",level:2},{value:"Happy Coding ",id:"happy-coding-",level:3},{value:"&gt;_ The Amiga Brain Team",id:"_-the-amiga-brain-team",level:4}];function h(e){const t={a:"a",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["At farm-ng we love making tools for engineers, hackers, building\ncommunities, and inspiring people to make their own. For this\nreason, we are excited to announce the release of the\n",(0,n.jsx)(t.strong,{children:"AmigaOS Artichoke 1.0"}),", the operating system and software\ndevelopment kit for the Farm-ng Amiga platform."]}),"\n",(0,n.jsxs)(t.p,{children:["The release goes aligned with the starting of the\n",(0,n.jsx)(t.a,{href:"https://farmbot.ai/",children:"Farm Robotics Challenge 2023"})," to help the\nstudent to bootstrap their ideas."]}),"\n",(0,n.jsx)(t.h2,{id:"the-amiga",children:"The Amiga"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/53625197/187559379-b7b8fcf3-5fe7-4e14-aa47-fa0022f3801b.JPG",alt:"image"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://farm-ng.com/products/la-maquina-amiga",children:(0,n.jsx)(t.strong,{children:"Amiga"})})," is\na platform of robotic hardware and software built by farm-ng to\nenable farmers, hackers, engineers, roboticists, or anyone with a\nvision of creating ruggedized, waterproof, outdoor robotic rover\napplications."]}),"\n",(0,n.jsx)(t.p,{children:"The Amiga includes two main pieces, the Dashboard and the\nartificial intelligence (AI) Brain."}),"\n",(0,n.jsx)(t.h3,{id:"the-dashboard",children:"The Dashboard"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/11846963/186734463-aa149b3a-7510-4d5a-99ea-f9a8a96775d2.jpg",alt:"image"})}),"\n",(0,n.jsx)(t.p,{children:"The Amiga robotics platform can operate under manual control\nthrough the Dashboard which is the master control of the CAN Bus\ncommands and electricity flow to the motors. The Dashboard\nconsists of ruggedized and waterproof case with a 4.3 inch\ndaylight readable touchscreen display and is completely\ncustomizable through our ADK (Amiga-Dev-Kit) tools. Inside is a\npowerful microcontroller based on Adafruit's Feather m4 CAN,\nwhich can be programmed via CircuitPython."}),"\n",(0,n.jsx)(t.p,{children:"The Dashboard allows the user to manually set speed limits and\nother system parameters as well as monitor system state\n(temperature, speed, CAN Bus traffic etc). It has a pendant\nconnected to it which allows a stretchable wired interface to the\nAmiga with a joystick for steering and speed, brake, pose and\ncontrol over any tools connected to and powered by the Amiga. An\nemergency stop (E-Stop) knob is attached to the Dashboard to\nallow users to instantly shut down the Amiga."}),"\n",(0,n.jsxs)(t.p,{children:["Farm-ng allows developers to create new tools or adapt existing\ntools to the Amiga with an interface to extend electricity and\nCAN bus control signals and even to add your own custom CAN bus\nfeather microcontroller. There are a number of standard farming\ntools already available such as 3 Point Lifts, seats, plows,\nseeders, weeders, dibblers etc,\nsee ",(0,n.jsx)(t.a,{href:"https://farm-ng.com/collections/amiga-attachments",children:"https://farm-ng.com/collections/amiga-attachments"})]}),"\n",(0,n.jsx)(t.h3,{id:"the-brain",children:"The Brain"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://cdn.shopify.com/s/files/1/0634/0241/0211/products/Brain-front.png?v=1674003215",alt:"image"})}),"\n",(0,n.jsxs)(t.p,{children:["The Amiga Brain allows the platform to run complex artificial\nintelligence applications with a powerful computer encased in a\nweatherized, rugged aluminum case sporting a daylight readable 10.\n1 inch touch screen. Inside is a\n",(0,n.jsx)(t.a,{href:"https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-xavier-nx/",children:"NVIDIA Xavier NX"}),"\ncomputer with up to 21 TOPS of performance. It includes CAN bus,\nUSB and GIGe communication along with built-in WiFi. The brain\nallows a developer to write and deploy powerful AI applications\nusing standard Python. There are several example applications and\nexamples available at\n",(0,n.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/examples/examples-index#brain-adk-examples",children:"https://amiga.farm-ng.com/docs/examples/examples-index#brain-adk-examples"})]}),"\n",(0,n.jsxs)(t.p,{children:["Most Brain systems come with two\n",(0,n.jsx)(t.a,{href:"https://farm-ng.com/products/amiga-smart-camera-kit",children:"Oak-D Smart Camera"}),"\nwhich are powered by the system over ethernet and themselves can\nrun AI models at 4 TOPS in addition to stereo depth computations."]}),"\n",(0,n.jsx)(t.h2,{id:"amiga-os",children:"Amiga OS"}),"\n",(0,n.jsxs)(t.p,{children:["The Amiga Brain includes the ",(0,n.jsx)(t.strong,{children:"AmigaOS"}),", a robotics operating\nsystem exclusively developed for the Amiga platform and for its\nspecific farming applications. The operating system is the one in\ncharge to manage the different supported devices, and interact\nwith the native or user provided."]}),"\n",(0,n.jsx)(t.p,{children:"Below you can see a couple of screenshots of the main layouts to\nnavigate through the different apps, settings pages, or access to\nthe developers tools."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5157099/219821743-fc500b20-591b-4f93-8d26-fa5a536fd0c3.png",alt:"launcher_main"})}),"\n",(0,n.jsx)(t.h3,{id:"microservices-architecture",children:"Microservices Architecture"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"AmigaOS"})," and therefore the SDK are designed following a\nmicroservices architecture leveraging gRPC as a lightweight\nprotocol framework for message passing, and asyncio to\nconcurrently orchestrate the different services as independent\nasynchronous tasks."]}),"\n",(0,n.jsxs)(t.p,{children:["Below you can see a high level description of the Amiga OS\narchitecture, starting from the Amiga platform which is the\nhardware layer, until the final user layer which are the GUI\napps. The connection in between happens thanks to the\n",(0,n.jsx)(t.a,{href:"https://grpc.io/",children:"gRPC"})," message passing framework."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5157099/219821793-fa1eec88-35c6-43fd-bcc2-dafe2a961366.png",alt:"image"})}),"\n",(0,n.jsx)(t.h3,{id:"grpc-services",children:"gRPC Services"}),"\n",(0,n.jsxs)(t.p,{children:["The Amiga includes different core ",(0,n.jsx)(t.a,{href:"https://grpc.io/",children:"gRPC"}),"\nservices that expose the basic sensors and intercommunication\nwithin the robot. We expose to the user the services to interact\nwith the OAK-D cameras and the CAN bus used to receive the robot\ntelemetry and send the signal to the motors."]}),"\n",(0,n.jsxs)(t.p,{children:["The way to access this data is using the Python Open Source\nclients in the Python farm-ng-amiga package. We also provide\nexamples about how to use this either as a standalone Python\nscript, or as a ",(0,n.jsx)(t.a,{href:"https://kivy.org/",children:"Kivy"})," application."]}),"\n",(0,n.jsx)(t.p,{children:"Below is a snippet of the Python API to interact with the Oak\ncameras:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5157099/219821830-ebe221b7-c550-4f6c-8fab-2bbb7706806e.png",alt:"amiga-sdk-1 0 0"})}),"\n",(0,n.jsx)(t.h2,{id:"the-native-apps",children:"The native Apps"}),"\n",(0,n.jsx)(t.p,{children:"The AmigaOS provides some native apps to fulfill different needs\nand requirements from a GUI perspective."}),"\n",(0,n.jsx)(t.h3,{id:"recorder",children:"Recorder"}),"\n",(0,n.jsx)(t.p,{children:"The recorder app is the tool we provide to collect data from the\nGUI. It\u2019s a replica of the camera apps that you can find in any\nsmartphone, but it records all the data (for example all CAN bus\nmessages) coming from the connected sensors and devices."}),"\n",(0,n.jsx)(t.p,{children:"With this app you can customize the numbers of sensors to record\nthe data, adjust the camera parameters, and visualize in real\ntime from the different cameras modes e.g rgb, disparity or left/\nright grayscale images."}),"\n",(0,n.jsxs)(t.p,{children:["In addition, we provide the open source library\n(in Python and C++)\nto decode the events file generated by the recorder. See:\n",(0,n.jsx)(t.a,{href:"https://github.com/farm-ng/farm-ng-core",children:"https://github.com/farm-ng/farm-ng-core"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5157099/219821846-386dd217-cf1f-43ee-becd-85ee5c3e2f9a.png",alt:"recorder_app"})}),"\n",(0,n.jsx)(t.h3,{id:"gallery--playback",children:"Gallery / Playback"}),"\n",(0,n.jsx)(t.p,{children:"With this app you can explore the different files collected with\nthe Recorder app and visualize in situ the collected data. In the\nfuture we\u2019ll provide more functionality to perform data\nannotation e.g to train AI models. In addition, we also provide a\nplayback tool to visualize the video sequences at different speed\nand seek frames."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5157099/219821855-b47b9465-f648-4ed5-b44d-deaca2517f0e.png",alt:"gallery_app"})}),"\n",(0,n.jsx)(t.h3,{id:"file-mover",children:"File mover"}),"\n",(0,n.jsx)(t.p,{children:"We provide a simple application so that you can copy in your\nexternal drive all the data stored in the robot to perform later\nany type of data analysis."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5157099/219821868-d7f88168-0ffe-4eff-b4dd-1dfcd0cc71ba.png",alt:"file_mover"})}),"\n",(0,n.jsx)(t.h2,{id:"create-custom-apps",children:"Create custom apps"}),"\n",(0,n.jsxs)(t.p,{children:["With the Amiga SDK we want to encourage anyone to create their\nown applications and improve the development experience. For this\nreason we provide an\n",(0,n.jsx)(t.a,{href:"https://github.com/farm-ng/amiga-app-template",children:"app-template"})," in\ngithub so that you can clone and start building your robotics\napp, integrate with any Python library from your vs-code via ssh\ndirectly in the robot (enjoying also the co-pilot)."]}),"\n",(0,n.jsxs)(t.p,{children:["You can follow this tutorial to start developing your Amiga apps:\n",(0,n.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/brain/brain-apps",children:"https://amiga.farm-ng.com/docs/brain/brain-apps"})]}),"\n",(0,n.jsxs)(t.p,{children:["For a full developed tutorial, see the Virtual Joystick example,\ncopy, paste, modify and have fun !\n",(0,n.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/tutorials/introduction/tutorial-introduction",children:"https://amiga.farm-ng.com/docs/tutorials/introduction/tutorial-introduction"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5157099/219821890-4c4478ed-374e-4213-819f-d67b78d1a4ea.png",alt:"virtual_joystick"})}),"\n",(0,n.jsx)(t.h2,{id:"ecosystem",children:"Ecosystem"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Developer documentation","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Documentation for how the key electrical and software work is\navailable at ",(0,n.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/getting-started",children:"https://amiga.farm-ng.com/docs/getting-started"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Video tutorials:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Tutorials with a quickstart guide, an introduction to the\ncomponents of the tractor and it\u2019s software development kit are\navailable on this playlist:\n",(0,n.jsx)(t.a,{href:"https://youtube.com/playlist?list=PLWQmpzk0y9NDXFKSwvCjYtRL8QNWfK4ND",children:"https://youtube.com/playlist?list=PLWQmpzk0y9NDXFKSwvCjYtRL8QNWfK4ND"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Discourse:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["There is an active Discourse community at\n",(0,n.jsx)(t.a,{href:"https://discourse.farm-ng.com",children:"https://discourse.farm-ng.com"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Farm Robotics Challenge:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Together with University of California Agriculture and\nNatural Resources division (UC ANR) and farm-ng, we are hosting\na nation wide agriculture competition to use farm-ng\u2019s Amiga\nrobot to create innovative solutions to automate an essential\nfarm function on any crop or farm size.\n",(0,n.jsx)(t.a,{href:"https://farm-ng.com/products/farmbot-ai-challenge-package",children:"https://farm-ng.com/products/farmbot-ai-challenge-package"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Community examples:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/farm-ng/virtual-joystick",children:"https://github.com/farm-ng/virtual-joystick"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/farm-ng/virtual-joystick",children:"https://github.com/farm-ng/camera-streamer"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/edgarriba/amiga-limbus-examples",children:"https://github.com/edgarriba/amiga-limbus-examples"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)("img",{src:"https://user-images.githubusercontent.com/5157099/219821724-69dfc97d-17fc-4a08-933a-e6fb2446495e.jpg"}),"\n",(0,n.jsxs)(t.h3,{id:"happy-coding-",children:["Happy Coding ",":sunglasses"]}),"\n",(0,n.jsx)(t.h4,{id:"_-the-amiga-brain-team",children:">_ The Amiga Brain Team"})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(96540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);