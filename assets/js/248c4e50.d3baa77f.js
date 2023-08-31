"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3318],{2141:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>m,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905)),n=t(1839);const o={id:"camera-streamer-overview",title:"00 - Camera Streamer Overview"},m="Camera Streamer Overview",s={unversionedId:"tutorials/camera_streamer/camera-streamer-overview",id:"tutorials/camera_streamer/camera-streamer-overview",title:"00 - Camera Streamer Overview",description:"This tutorial builds off of the",source:"@site/docs/tutorials/camera_streamer/00_intro.md",sourceDirName:"tutorials/camera_streamer",slug:"/tutorials/camera_streamer/camera-streamer-overview",permalink:"/docs/tutorials/camera_streamer/camera-streamer-overview",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/tutorials/camera_streamer/00_intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"camera-streamer-overview",title:"00 - Camera Streamer Overview"},sidebar:"examples",previous:{title:"02 - Template Overview",permalink:"/docs/tutorials/introduction/template-overview"},next:{title:"01 - Template Starter",permalink:"/docs/tutorials/camera_streamer/template-starter"}},c={},l=[{value:"Link to <code>camera-streamer</code>",id:"link-to-camera-streamer",level:2},{value:"Block diagram",id:"block-diagram",level:2}],d={toc:l};function u(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"camera-streamer-overview"},"Camera Streamer Overview"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial builds off of the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/introduction/tutorial-introduction"},(0,i.kt)("strong",{parentName:"a"},"Tutorial Introduction")),",\nso please check that out if you have not already.")),(0,i.kt)("h2",{id:"link-to-camera-streamer"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/farm-ng/camera-streamer"},"Link to ",(0,i.kt)("inlineCode",{parentName:"a"},"camera-streamer"))),(0,i.kt)("p",null,"This example application and tutorial is designed to get you\nstarted developing your own basic applications and deploying them\nto the Amiga brain."),(0,i.kt)("p",null,"On the brain, there are multiple gRPC services running in the\nbackground, including an oak camera service per camera device on\nyour Amiga.\nYou will see how to interact with one of these services through\nthe camera client in a basic kivy application,\nusing gRPC and asyncio in that application."),(0,i.kt)("p",null,"The topics covered in this tutorial include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating kivy applications"),(0,i.kt)("li",{parentName:"ul"},"GRPC / asyncio application development"),(0,i.kt)("li",{parentName:"ul"},"Streaming an Oak camera with the camera client")),(0,i.kt)("h2",{id:"block-diagram"},"Block diagram"),(0,i.kt)(n.G,{chart:"  flowchart BT;\n\n    subgraph kivy_window\n        direction LR\n        ImageTexture\n    end\n\n    subgraph AmigaOS\n        OakCameraServices\n        CanbusService\n    end\n\n    subgraph CameraStreamerApp\n        OakCameraClient -- decoded jpeg --\x3e ImageTexture\n    end\n\n    subgraph OakCameraServices\n        direction LR\n        Oak0\n        Oak1\n        Oak2\n        Oak3\n    end\n\n    Oak0 -- streamFrames rpc --\x3e OakCameraClient\n",mdxType:"Mermaid"}))}u.isMDXComponent=!0}}]);