"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2412],{957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(1839);const i={id:"background-knowledge",title:"01 - Background Knowledge"},o="Background knowledge",l={unversionedId:"tutorials/introduction/background-knowledge",id:"tutorials/introduction/background-knowledge",title:"01 - Background Knowledge",description:"The Amiga brain app development meets at the intersection of three key libraries, as well as a few publicly available libraries developed by the farm-ng team:",source:"@site/docs/tutorials/introduction/01_background_knowledge.md",sourceDirName:"tutorials/introduction",slug:"/tutorials/introduction/background-knowledge",permalink:"/docs/tutorials/introduction/background-knowledge",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/tutorials/introduction/01_background_knowledge.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"background-knowledge",title:"01 - Background Knowledge"},sidebar:"examples",previous:{title:"00 - Introduction",permalink:"/docs/tutorials/introduction/tutorial-introduction"},next:{title:"02 - Template Overview",permalink:"/docs/tutorials/introduction/template-overview"}},s={},p=[{value:"gRPC",id:"grpc",level:3},{value:"asyncio",id:"asyncio",level:3},{value:"kivy",id:"kivy",level:3},{value:"farm-ng libraries",id:"farm-ng-libraries",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"background-knowledge"},"Background knowledge"),(0,r.kt)("p",null,"The Amiga brain app development meets at the intersection of three key libraries, as well as a few publicly available libraries developed by the ",(0,r.kt)("strong",{parentName:"p"},"farm-ng")," team:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://grpc.io/"},(0,r.kt)("strong",{parentName:"a"},"gRPC"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/asyncio.html"},(0,r.kt)("strong",{parentName:"a"},"asyncio"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://kivy.org/"},(0,r.kt)("strong",{parentName:"a"},"kivy"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#farm-ng-libraries"},(0,r.kt)("strong",{parentName:"a"},"farm-ng libraries")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Currently we are only supporting Python app development, but our infrastructure allows for C++ app development support in the near future.")),(0,r.kt)("h3",{id:"grpc"},"gRPC"),(0,r.kt)("p",null,"The best place to start to gain an understanding of gRPC is the ",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/docs/what-is-grpc/introduction/"},(0,r.kt)("strong",{parentName:"a"},"gRPC introduction")),", followed by the ",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/docs/what-is-grpc/core-concepts/"},(0,r.kt)("strong",{parentName:"a"},"gRPC core concepts")),"."),(0,r.kt)("p",null,"gRPC is used as our communication protocol between services (devices like cameras running in the background) and clients (how you connect to services in your app).\nThe communication is done through Protocol Buffers, defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"*.proto")," files in our ",(0,r.kt)("a",{parentName:"p",href:"#farm-ng-libraries"},(0,r.kt)("strong",{parentName:"a"},"farm-ng libraries")),"."),(0,r.kt)("h3",{id:"asyncio"},"asyncio"),(0,r.kt)("p",null,"The best place to start to gain an understanding of asyncio is the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,r.kt)("strong",{parentName:"a"},"asyncio docs")),"."),(0,r.kt)("p",null,"We use asyncio in order to run multiple concurrent tasks in our applications.\nThis is crucial to the system design to prevent high rate robotic control from being blocked by time consuming processes, such as image processing."),(0,r.kt)("p",null,"In the virtual joystick example, we have multiple, concurrent ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loops running that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Receive the camera stream (from the camera service)"),(0,r.kt)("li",{parentName:"ul"},"Receive the canbus stream (from the canbus service)"),(0,r.kt)("li",{parentName:"ul"},"Draw the joystick (in ",(0,r.kt)("a",{parentName:"li",href:"#kivy"},(0,r.kt)("strong",{parentName:"a"},"kivy")),")"),(0,r.kt)("li",{parentName:"ul"},"Send canbus commands (to the canbus service)")),(0,r.kt)("h3",{id:"kivy"},"kivy"),(0,r.kt)("p",null,"The best place to start to gain an understanding of kivy is the ",(0,r.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/gettingstarted/intro.html"},(0,r.kt)("strong",{parentName:"a"},"kivy Getting Started >> Introduction")),"."),(0,r.kt)("p",null,"We use kivy to draw our apps and handle touch screen interactions for our interactive apps.\nkivy can be coded in its own language (",(0,r.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/guide/lang.html"},(0,r.kt)("strong",{parentName:"a"},"the Kv language")),"), in Python, or in some combination of both!"),(0,r.kt)("p",null,"We tend to define our apps in the kv language, and add interaction in Python code.\nIn the example, however, we also demonstrate creating a custom kivy ",(0,r.kt)("inlineCode",{parentName:"p"},"Widget")," in Python!"),(0,r.kt)("h3",{id:"farm-ng-libraries"},"farm-ng libraries"),(0,r.kt)("p",null,"We have some libraries that are imported by the brain infrastructure and are used in our apps.\nThey are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"defined as python packages (installed with ",(0,r.kt)("inlineCode",{parentName:"li"},"pip")," by pointing to the repo)"),(0,r.kt)("li",{parentName:"ul"},"contain the ",(0,r.kt)("inlineCode",{parentName:"li"},".proto")," definitions used in our gRPC communications"),(0,r.kt)("li",{parentName:"ul"},"contain the gRPC clients you can use to interact with the Amiga brain services")),(0,r.kt)("p",null,"See: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-core"},(0,r.kt)("strong",{parentName:"a"},"farm_ng_core"))),(0,r.kt)("p",null,"See: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga"},(0,r.kt)("strong",{parentName:"a"},"farm_ng_amiga"))))}u.isMDXComponent=!0}}]);