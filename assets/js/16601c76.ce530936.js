"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3010],{6017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={title:"AmigaOS Artichoke 1.0 Release Notes",authors:["edgarriba","garybradski","hackerman342","christopherbradski","ethanrublee"],tags:["announcement","release"]},o=void 0,s={permalink:"/blog/2023/02/17/version-100",editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/blog/2023-02-17-version-100.md",source:"@site/blog/2023-02-17-version-100.md",title:"AmigaOS Artichoke 1.0 Release Notes",description:"At farm-ng we love making tools for engineers, hackers, building",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:5.78,hasTruncateMarker:!1,authors:[{name:"Edgar Riba",title:"Robotics and Computer Vision Research Engineer",url:"https://github.com/edgarriba",imageURL:"https://avatars.githubusercontent.com/u/5157099?s=400&u=bbda35a12c82cbdca2d00ca1ce24323ccaef989d&v=4",key:"edgarriba"},{name:"Gary Bradski",title:"VP and Computer Vision Godfather",url:"https://github.com/garybradski",imageURL:"https://avatars.githubusercontent.com/u/810997?v=4",key:"garybradski"},{name:"Kyle Coble",title:"Robotics and Computer Vision Engineer",url:"https://github.com/Hackerman342",imageURL:"https://avatars.githubusercontent.com/u/53625197?v=4",key:"hackerman342"},{name:"Chris Bradski",title:"Senior Software Engineer",url:"https://github.com/christopherbradski",imageURL:"https://media.licdn.com/dms/image/C5603AQFJ1W8ZkC8NDQ/profile-displayphoto-shrink_800_800/0/1517490482612?e=1681948800&v=beta&t=Yj0lepP5Yu1q0nnGEcKWOwZFwpWgfttfQXAWWOwaq0o",key:"christopherbradski"},{name:"Ethan Rublee",title:"CEO at Farm-ng",url:"https://github.com/ethanrublee",imageURL:"https://avatars.githubusercontent.com/u/153678?v=4",key:"ethanrublee"}],frontMatter:{title:"AmigaOS Artichoke 1.0 Release Notes",authors:["edgarriba","garybradski","hackerman342","christopherbradski","ethanrublee"],tags:["announcement","release"]}},l={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},m=[{value:"The Amiga",id:"the-amiga",level:2},{value:"The Dashboard",id:"the-dashboard",level:3},{value:"The Brain",id:"the-brain",level:3},{value:"Amiga OS",id:"amiga-os",level:2},{value:"Microservices Architecture",id:"microservices-architecture",level:3},{value:"gRPC Services",id:"grpc-services",level:3},{value:"The native Apps",id:"the-native-apps",level:2},{value:"Recorder",id:"recorder",level:3},{value:"Gallery / Playback",id:"gallery--playback",level:3},{value:"File mover",id:"file-mover",level:3},{value:"Create custom apps",id:"create-custom-apps",level:2},{value:"Ecosystem",id:"ecosystem",level:2},{value:"Happy Coding :sunglasses",id:"happy-coding-sunglasses",level:3},{value:"&gt;_ The Amiga Brain Team",id:"_-the-amiga-brain-team",level:4}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At farm-ng we love making tools for engineers, hackers, building\ncommunities, and inspiring people to make their own. For this\nreason, we are excited to announce the release of the\n",(0,r.kt)("strong",{parentName:"p"},"AmigaOS Artichoke 1.0"),", the operating system and software\ndevelopment kit for the Farm-ng Amiga platform."),(0,r.kt)("p",null,"The release goes aligned with the starting of the\n",(0,r.kt)("a",{parentName:"p",href:"https://farmbot.ai/"},"Farm Robotics Challenge 2023")," to help the\nstudent to bootstrap their ideas."),(0,r.kt)("h2",{id:"the-amiga"},"The Amiga"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187559379-b7b8fcf3-5fe7-4e14-aa47-fa0022f3801b.JPG",alt:"image"})),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/la-maquina-amiga"},(0,r.kt)("strong",{parentName:"a"},"Amiga"))," is\na platform of robotic hardware and software built by farm-ng to\nenable farmers, hackers, engineers, roboticists, or anyone with a\nvision of creating ruggedized, waterproof, outdoor robotic rover\napplications."),(0,r.kt)("p",null,"The Amiga includes two main pieces, the Dashboard and the\nartificial intelligence (AI) Brain."),(0,r.kt)("h3",{id:"the-dashboard"},"The Dashboard"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11846963/186734463-aa149b3a-7510-4d5a-99ea-f9a8a96775d2.jpg",alt:"image"})),(0,r.kt)("p",null,"The Amiga robotics platform can operate under manual control\nthrough the Dashboard which is the master control of the CAN Bus\ncommands and electricity flow to the motors. The Dashboard\nconsists of ruggedized and waterproof case with a 4.3 inch\ndaylight readable touchscreen display and is completely\ncustomizable through our ADK (Amiga-Dev-Kit) tools. Inside is a\npowerful microcontroller based on Adafruit's Feather m4 CAN,\nwhich can be programmed via CircuitPython."),(0,r.kt)("p",null,"The Dashboard allows the user to manually set speed limits and\nother system parameters as well as monitor system state\n(temperature, speed, CAN Bus traffic etc). It has a pendant\nconnected to it which allows a stretchable wired interface to the\nAmiga with a joystick for steering and speed, brake, pose and\ncontrol over any tools connected to and powered by the Amiga. An\nemergency stop (E-Stop) knob is attached to the Dashboard to\nallow users to instantly shut down the Amiga."),(0,r.kt)("p",null,"Farm-ng allows developers to create new tools or adapt existing\ntools to the Amiga with an interface to extend electricity and\nCAN bus control signals and even to add your own custom CAN bus\nfeather microcontroller. There are a number of standard farming\ntools already available such as 3 Point Lifts, seats, plows,\nseeders, weeders, dibblers etc,\nsee ",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/collections/amiga-attachments"},"https://farm-ng.com/collections/amiga-attachments")),(0,r.kt)("h3",{id:"the-brain"},"The Brain"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.shopify.com/s/files/1/0634/0241/0211/products/Brain-front.png?v=1674003215",alt:"image"})),(0,r.kt)("p",null,"The Amiga Brain allows the platform to run complex artificial\nintelligence applications with a powerful computer encased in a\nweatherized, rugged aluminum case sporting a daylight readable 10.\n1 inch touch screen. Inside is a\n",(0,r.kt)("a",{parentName:"p",href:"https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-xavier-nx/"},"NVIDIA Xavier NX"),"\ncomputer with up to 21 TOPS of performance. It includes CAN bus,\nUSB and GIGe communication along with built-in WiFi. The brain\nallows a developer to write and deploy powerful AI applications\nusing standard Python. There are several example applications and\nexamples available at\n",(0,r.kt)("a",{parentName:"p",href:"https://amiga.farm-ng.com/docs/examples/examples-index#brain-adk-examples"},"https://amiga.farm-ng.com/docs/examples/examples-index#brain-adk-examples")),(0,r.kt)("p",null,"Most Brain systems come with two\n",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/amiga-smart-camera-kit"},"Oak-D Smart Camera"),"\nwhich are powered by the system over ethernet and themselves can\nrun AI models at 4 TOPS in addition to stereo depth computations."),(0,r.kt)("h2",{id:"amiga-os"},"Amiga OS"),(0,r.kt)("p",null,"The Amiga Brain includes the ",(0,r.kt)("strong",{parentName:"p"},"AmigaOS"),", a robotics operating\nsystem exclusively developed for the Amiga platform and for its\nspecific farming applications. The operating system is the one in\ncharge to manage the different supported devices, and interact\nwith the native or user provided."),(0,r.kt)("p",null,"Below you can see a couple of screenshots of the main layouts to\nnavigate through the different apps, settings pages, or access to\nthe developers tools."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5157099/219821743-fc500b20-591b-4f93-8d26-fa5a536fd0c3.png",alt:"launcher_main"})),(0,r.kt)("h3",{id:"microservices-architecture"},"Microservices Architecture"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"AmigaOS")," and therefore the SDK are designed following a\nmicroservices architecture leveraging gRPC as a lightweight\nprotocol framework for message passing, and asyncio to\nconcurrently orchestrate the different services as independent\nasynchronous tasks."),(0,r.kt)("p",null,"Below you can see a high level description of the Amiga OS\narchitecture, starting from the Amiga platform which is the\nhardware layer, until the final user layer which are the GUI\napps. The connection in between happens thanks to the\n",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," message passing framework."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5157099/219821793-fa1eec88-35c6-43fd-bcc2-dafe2a961366.png",alt:"image"})),(0,r.kt)("h3",{id:"grpc-services"},"gRPC Services"),(0,r.kt)("p",null,"The Amiga includes different core ",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),"\nservices that expose the basic sensors and intercommunication\nwithin the robot. We expose to the user the services to interact\nwith the OAK-D cameras and the CAN bus used to receive the robot\ntelemetry and send the signal to the motors."),(0,r.kt)("p",null,"The way to access this data is using the Python Open Source\nclients in the Python farm-ng-amiga package. We also provide\nexamples about how to use this either as a standalone Python\nscript, or as a ",(0,r.kt)("a",{parentName:"p",href:"https://kivy.org/"},"Kivy")," application."),(0,r.kt)("p",null,"Below is a snippet of the Python API to interact with the Oak\ncameras:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5157099/219821830-ebe221b7-c550-4f6c-8fab-2bbb7706806e.png",alt:"amiga-sdk-1 0 0"})),(0,r.kt)("h2",{id:"the-native-apps"},"The native Apps"),(0,r.kt)("p",null,"The AmigaOS provides some native apps to fulfill different needs\nand requirements from a GUI perspective."),(0,r.kt)("h3",{id:"recorder"},"Recorder"),(0,r.kt)("p",null,"The recorder app is the tool we provide to collect data from the\nGUI. It\u2019s a replica of the camera apps that you can find in any\nsmartphone, but it records all the data (for example all CAN bus\nmessages) coming from the connected sensors and devices."),(0,r.kt)("p",null,"With this app you can customize the numbers of sensors to record\nthe data, adjust the camera parameters, and visualize in real\ntime from the different cameras modes e.g rgb, disparity or left/\nright grayscale images."),(0,r.kt)("p",null,"In addition, we provide the open source library\n(in Python and C++)\nto decode the events file generated by the recorder. See:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-core"},"https://github.com/farm-ng/farm-ng-core")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5157099/219821846-386dd217-cf1f-43ee-becd-85ee5c3e2f9a.png",alt:"recorder_app"})),(0,r.kt)("h3",{id:"gallery--playback"},"Gallery / Playback"),(0,r.kt)("p",null,"With this app you can explore the different files collected with\nthe Recorder app and visualize in situ the collected data. In the\nfuture we\u2019ll provide more functionality to perform data\nannotation e.g to train AI models. In addition, we also provide a\nplayback tool to visualize the video sequences at different speed\nand seek frames."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5157099/219821855-b47b9465-f648-4ed5-b44d-deaca2517f0e.png",alt:"gallery_app"})),(0,r.kt)("h3",{id:"file-mover"},"File mover"),(0,r.kt)("p",null,"We provide a simple application so that you can copy in your\nexternal drive all the data stored in the robot to perform later\nany type of data analysis."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5157099/219821868-d7f88168-0ffe-4eff-b4dd-1dfcd0cc71ba.png",alt:"file_mover"})),(0,r.kt)("h2",{id:"create-custom-apps"},"Create custom apps"),(0,r.kt)("p",null,"With the Amiga SDK we want to encourage anyone to create their\nown applications and improve the development experience. For this\nreason we provide an\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-app-template"},"app-template")," in\ngithub so that you can clone and start building your robotics\napp, integrate with any Python library from your vs-code via ssh\ndirectly in the robot (enjoying also the co-pilot)."),(0,r.kt)("p",null,"You can follow this tutorial to start developing your Amiga apps:\n",(0,r.kt)("a",{parentName:"p",href:"https://amiga.farm-ng.com/docs/brain/brain-apps"},"https://amiga.farm-ng.com/docs/brain/brain-apps")),(0,r.kt)("p",null,"For a full developed tutorial, see the Virtual Joystick example,\ncopy, paste, modify and have fun !\n",(0,r.kt)("a",{parentName:"p",href:"https://amiga.farm-ng.com/docs/tutorials/introduction/tutorial-introduction"},"https://amiga.farm-ng.com/docs/tutorials/introduction/tutorial-introduction")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5157099/219821890-4c4478ed-374e-4213-819f-d67b78d1a4ea.png",alt:"virtual_joystick"})),(0,r.kt)("h2",{id:"ecosystem"},"Ecosystem"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Developer documentation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Documentation for how the key electrical and software work is\navailable at ",(0,r.kt)("a",{parentName:"li",href:"https://amiga.farm-ng.com/docs/getting-started/"},"https://amiga.farm-ng.com/docs/getting-started/")))),(0,r.kt)("li",{parentName:"ul"},"Video tutorials:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tutorials with a quickstart guide, an introduction to the\ncomponents of the tractor and it\u2019s software development kit are\navailable on this playlist:\n",(0,r.kt)("a",{parentName:"li",href:"https://youtube.com/playlist?list=PLWQmpzk0y9NDXFKSwvCjYtRL8QNWfK4ND"},"https://youtube.com/playlist?list=PLWQmpzk0y9NDXFKSwvCjYtRL8QNWfK4ND")))),(0,r.kt)("li",{parentName:"ul"},"Discourse:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There is an active Discourse community at\n",(0,r.kt)("a",{parentName:"li",href:"https://discourse.farm-ng.com/"},"https://discourse.farm-ng.com/")))),(0,r.kt)("li",{parentName:"ul"},"Farm Robotics Challenge:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Together with University of California Agriculture and\nNatural Resources division (UC ANR) and farm-ng, we are hosting\na nation wide agriculture competition to use farm-ng\u2019s Amiga\nrobot to create innovative solutions to automate an essential\nfarm function on any crop or farm size.\n",(0,r.kt)("a",{parentName:"li",href:"https://farm-ng.com/products/farmbot-ai-challenge-package"},"https://farm-ng.com/products/farmbot-ai-challenge-package")))),(0,r.kt)("li",{parentName:"ul"},"Community examples:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/virtual-joystick"},"https://github.com/farm-ng/virtual-joystick")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/camera-streamer"},"https://github.com/farm-ng/camera-streamer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/edgarriba/amiga-limbus-examples"},"https://github.com/edgarriba/amiga-limbus-examples"))))),(0,r.kt)("hr",null),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/5157099/219821724-69dfc97d-17fc-4a08-933a-e6fb2446495e.jpg"}),(0,r.kt)("h3",{id:"happy-coding-sunglasses"},"Happy Coding :sunglasses"),(0,r.kt)("h4",{id:"_-the-amiga-brain-team"},">_ The Amiga Brain Team"))}p.isMDXComponent=!0}}]);