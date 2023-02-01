"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3363],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),i=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),i=a(7294),r=a(6010),o=a(2389),l=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:d,values:h,groupId:k,className:v}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,l.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===d?d:null!=(t=null!=d?d:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[T,C]=(0,i.useState)(f),j=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=k){const e=w[k];null!=e&&e!==T&&y.some((t=>t.value===e))&&C(e)}const P=e=>{const t=e.currentTarget,a=j.indexOf(t),n=y[a].value;n!==T&&(_(t),C(n),null!=k&&N(k,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;a=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var i;const t=j.indexOf(e.currentTarget)-1;a=null!=(i=j[t])?i:j[j.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:S,onClick:P},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,i.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return i.createElement(m,(0,n.Z)({key:String(t)},e))}},1157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=(a(1839),a(5488)),o=a(5162);const l={id:"virtual-joystick-overview",title:"00 - Virtual Joystick Overview"},s="Virtual Joystick Overview",u={unversionedId:"tutorials/virtual_joystick/virtual-joystick-overview",id:"tutorials/virtual_joystick/virtual-joystick-overview",title:"00 - Virtual Joystick Overview",description:"This tutorial builds off of the Tutorial Introduction and the Camera Streamer Tutorial, so please check those out if you have not already.",source:"@site/docs/tutorials/virtual_joystick/00_overview.md",sourceDirName:"tutorials/virtual_joystick",slug:"/tutorials/virtual_joystick/virtual-joystick-overview",permalink:"/docs/tutorials/virtual_joystick/virtual-joystick-overview",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/tutorials/virtual_joystick/00_overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"virtual-joystick-overview",title:"00 - Virtual Joystick Overview"},sidebar:"examples",previous:{title:"03 - Python Implementation",permalink:"/docs/tutorials/camera_streamer/camera-stream"},next:{title:"01 - Template Starter",permalink:"/docs/tutorials/virtual_joystick/template-starter"}},p={},c=[{value:"Block diagram",id:"block-diagram",level:2},{value:"Your system",id:"your-system",level:2},{value:"Necessary background knowledge",id:"necessary-background-knowledge",level:2},{value:"gRPC",id:"grpc",level:3},{value:"asyncio",id:"asyncio",level:3},{value:"kivy",id:"kivy",level:3},{value:"farm-ng libraries",id:"farm-ng-libraries",level:3},{value:"Virtual Joystick tutorial",id:"virtual-joystick-tutorial",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"virtual-joystick-overview"},"Virtual Joystick Overview"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial builds off of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/introduction/tutorial-introduction"},(0,i.kt)("strong",{parentName:"a"},"Tutorial Introduction"))," and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/camera_streamer/camera-streamer-overview"},(0,i.kt)("strong",{parentName:"a"},"Camera Streamer Tutorial")),", so please check those out if you have not already.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/virtual-joystick"},"Link to ",(0,i.kt)("inlineCode",{parentName:"a"},"virtual-joystick"))),(0,i.kt)("p",null,"This example application and tutorial is designed to enable you to develop your own custom applications and deploy them to the Amiga brain."),(0,i.kt)("p",null,"On the brain, there are multiple gRPC services running in the background, including the oak camera service and the canbus service.\nWe will teach you how to interact with these two services through the camera client and canbus client, respectively.\nWe will also show you how to create a basic kivy application, and use gRPC and asyncio in that application."),(0,i.kt)("p",null,"The topics covered in this tutorial include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating kivy applications"),(0,i.kt)("li",{parentName:"ul"},"GRPC / asyncio application development"),(0,i.kt)("li",{parentName:"ul"},"Streaming an Oak camera with the camera client"),(0,i.kt)("li",{parentName:"ul"},"Streaming Amiga state information with the canbus client"),(0,i.kt)("li",{parentName:"ul"},"Auto control mode of Amiga robot with the canbus client")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We hope that this tutorial is sufficient to get you started on developing your own custom Amiga brain applications.\nIf you feel we missed any key details, please let us know so we can help you through it and add it to the tutorial for everyone else to benefit from!")),(0,i.kt)("h2",{id:"block-diagram"},"Block diagram"),(0,i.kt)("admonition",{title:"Coming soon",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"System level block diagram")),(0,i.kt)("h2",{id:"your-system"},"Your system"),(0,i.kt)("p",null,"This process works best on Ubuntu 20.04, but we also support Mac and Windows systems."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",label:"For Windows",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"You should run this with windows Subsystem for Linux (WSL).\nThis is a well supported and documented environment."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},(0,i.kt)("strong",{parentName:"a"},"Install WSL"))),(0,i.kt)("p",null,"You should install ",(0,i.kt)("strong",{parentName:"p"},"WSL2"),", using the ",(0,i.kt)("strong",{parentName:"p"},"Ubuntu 20.04")," distribution."),(0,i.kt)("p",null,"One option: ",(0,i.kt)("a",{parentName:"p",href:"https://apps.microsoft.com/store/detail/ubuntu-2004/9N6SVWS3RX71"},(0,i.kt)("strong",{parentName:"a"},"Ubuntu 20.04 from Microsoft store")))),(0,i.kt)(o.Z,{value:"macos",label:"For Mac",mdxType:"TabItem"},(0,i.kt)("p",null,"Everything should work as with Linux, though there may be some unmet dependencies you can install with ",(0,i.kt)("inlineCode",{parentName:"p"},"brew"),".\nE.g.,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wget\n")),(0,i.kt)("p",null,"Some of the scripts may fail, and we're working through that.\nFor instance, if you come into an ",(0,i.kt)("inlineCode",{parentName:"p"},"md5sum")," issue, you'll need to change ",(0,i.kt)("inlineCode",{parentName:"p"},"md5sum")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"md5"),"."),(0,i.kt)("p",null,"We are actively working on this support, so please reach out with an issues you encounter so we can help you through them and resolve it promptly!"))),(0,i.kt)("h2",{id:"necessary-background-knowledge"},"Necessary background knowledge"),(0,i.kt)("p",null,"The Amiga brain app development meets at the intersection of three key libraries, as well as some farm-ng libraries:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://grpc.io/"},(0,i.kt)("strong",{parentName:"a"},"gRPC"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/asyncio.html"},(0,i.kt)("strong",{parentName:"a"},"asyncio"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://kivy.org/"},(0,i.kt)("strong",{parentName:"a"},"kivy"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#farm-ng-libraries"},(0,i.kt)("strong",{parentName:"a"},"farm-ng libraries")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Currently we are only supporting Python app development, but our infrastructure allows for C++ app development support in the near future.")),(0,i.kt)("h3",{id:"grpc"},"gRPC"),(0,i.kt)("p",null,"The best place to start to gain an understanding of gRPC is the ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/what-is-grpc/introduction/"},(0,i.kt)("strong",{parentName:"a"},"gRPC introduction")),", followed by the ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/what-is-grpc/core-concepts/"},(0,i.kt)("strong",{parentName:"a"},"gRPC core concepts")),"."),(0,i.kt)("p",null,"gRPC is used as our communication protocol between services (running in the background) and clients (what you link in your app).\nThe communication is through Protocol Buffers, defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"*.proto")," files in our ",(0,i.kt)("a",{parentName:"p",href:"#farm-ng-libraries"},(0,i.kt)("strong",{parentName:"a"},"farm-ng libraries")),"."),(0,i.kt)("h3",{id:"asyncio"},"asyncio"),(0,i.kt)("p",null,"The best place to start to gain an understanding of asyncio is the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,i.kt)("strong",{parentName:"a"},"asyncio docs")),"."),(0,i.kt)("p",null,"We use asyncio in order to run multiple concurrent tasks in our applications.\nThis is crucial to the system design to prevent high rate robotic control from being blocked by time consuming processes, such as image processing."),(0,i.kt)("p",null,"In the virtual joystick example, we have multiple, concurrent ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loops running that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Receive the camera stream (from the camera service)"),(0,i.kt)("li",{parentName:"ul"},"Receive the canbus stream (from the canbus service)"),(0,i.kt)("li",{parentName:"ul"},"Draw the joystick (in ",(0,i.kt)("a",{parentName:"li",href:"#kivy"},(0,i.kt)("strong",{parentName:"a"},"kivy")),")"),(0,i.kt)("li",{parentName:"ul"},"Send canbus commands (to the canbus service)")),(0,i.kt)("h3",{id:"kivy"},"kivy"),(0,i.kt)("p",null,"The best place to start to gain an understanding of kivy is the ",(0,i.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/gettingstarted/intro.html"},(0,i.kt)("strong",{parentName:"a"},"kivy Getting Started >> Introduction")),"."),(0,i.kt)("p",null,"We use kivy to draw our apps and handle touch screen interactions for our interactive apps.\nkivy can be coded in its own language (",(0,i.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/guide/lang.html"},(0,i.kt)("strong",{parentName:"a"},"the Kv language")),"), in Python, or in some combination of both!"),(0,i.kt)("p",null,"We tend to define our apps in the kv language at the top of the app files using ",(0,i.kt)("inlineCode",{parentName:"p"},'"""')," strings, and may add some interaction in Python code.\nIn this example, however, we also demonstrate creating a custom kivy ",(0,i.kt)("inlineCode",{parentName:"p"},"Widget")," in Python!"),(0,i.kt)("h3",{id:"farm-ng-libraries"},"farm-ng libraries"),(0,i.kt)("p",null,"We have some libraries that are imported by the brain infrastructure and are used in our apps.\nThey are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"defined as python packages (installed with ",(0,i.kt)("inlineCode",{parentName:"li"},"pip")," by pointing to the repo)"),(0,i.kt)("li",{parentName:"ul"},"contain the ",(0,i.kt)("inlineCode",{parentName:"li"},".proto")," definitions used in our gRPC communications"),(0,i.kt)("li",{parentName:"ul"},"contain the gRPC clients you can use to interact with the Amiga brain services")),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-core"},(0,i.kt)("strong",{parentName:"a"},"farm_ng_core"))),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga"},(0,i.kt)("strong",{parentName:"a"},"farm_ng_amiga"))),(0,i.kt)("h2",{id:"virtual-joystick-tutorial"},"Virtual Joystick tutorial"),(0,i.kt)("p",null,"The goal of this tutorial is to take you step-by-step from the template repository to the full ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/virtual-joystick"},(0,i.kt)("inlineCode",{parentName:"a"},"virtual-joystick"))," example.\nThen you can mirror what you've done here in your own custom app development!"))}d.isMDXComponent=!0}}]);