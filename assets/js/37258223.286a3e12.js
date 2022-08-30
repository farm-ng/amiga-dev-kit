"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={id:"examples",title:"Examples Index"},l="Amiga SDK Examples",i={unversionedId:"examples/examples",id:"examples/examples",title:"Examples Index",description:"Hello World Auto-mode (hellomainloop)",source:"@site/docs/examples/README.md",sourceDirName:"examples",slug:"/examples/",permalink:"/amiga-dev-kit/docs/examples/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/README.md",tags:[],version:"current",frontMatter:{id:"examples",title:"Examples Index"},sidebar:"docs",previous:{title:"Brain Overview",permalink:"/amiga-dev-kit/docs/brain/"},next:{title:"Hello Main Loop Example",permalink:"/amiga-dev-kit/docs/examples/hello_main_loop/"}},p={},m=[{value:"Hello World Auto-mode (hello_main_loop)",id:"hello-world-auto-mode-hello_main_loop",level:2},{value:"Cansniffer",id:"cansniffer",level:2},{value:"FPV",id:"fpv",level:2}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"amiga-sdk-examples"},"Amiga SDK Examples"),(0,a.kt)("h2",{id:"hello-world-auto-mode-hello_main_loop"},(0,a.kt)("a",{parentName:"h2",href:"./hello_main_loop/"},"Hello World Auto-mode (hello_main_loop)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/examples/hello_main_loop/code.py"},"Link to ",(0,a.kt)("inlineCode",{parentName:"a"},"hello_main_loop/code.py"))),(0,a.kt)("p",null,"This introductory example covers getting set up, interacting with the Amiga, and\nusing auto-control mode to drive your Amiga from a computer\nusing the ",(0,a.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/microcontroller-kit"},"farm-ng microcontroller Kit"),"."),(0,a.kt)("p",null,"This example enables driving the Amiga by entering simple fwd / rev / left / right keyboard commands the serial port, which the app sends over the CAN bus."),(0,a.kt)("p",null,"Topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Serial port 101"),(0,a.kt)("li",{parentName:"ul"},"Auto-mode control")),(0,a.kt)("h2",{id:"cansniffer"},(0,a.kt)("a",{parentName:"h2",href:"./cansniffer/"},"Cansniffer")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/examples/cansniffer/code.py"},"Link to ",(0,a.kt)("inlineCode",{parentName:"a"},"cansniffer/code.py"))),(0,a.kt)("p",null,"This basic example covers a simple tool for listening to all CAN Id's streaming on the bus\nand measuring simple statistics about the streamed messages.\nThe example is inspired by the\n",(0,a.kt)("a",{parentName:"p",href:"https://manpages.debian.org/testing/can-utils/cansniffer.1.en.html"},"cansniffer command line tool from can-utils"),"."),(0,a.kt)("p",null,"Topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CAN introduction")),(0,a.kt)("h2",{id:"fpv"},(0,a.kt)("a",{parentName:"h2",href:"./FPV/"},"FPV")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/examples/FPV/code.py"},"Link to ",(0,a.kt)("inlineCode",{parentName:"a"},"FPV/code.py"))),(0,a.kt)("p",null,"This example shows how to connect off the shelf FPV equipment to your Amiga to enable realtime video streaming and teleoperation through remote control.  This makes the Amiga remotely operable from the comfort of your office (or cab of your truck) and we're pretty psyched by how low cost and practical FPV control of the Amiga is."),(0,a.kt)("p",null,"Topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hardware integration"),(0,a.kt)("li",{parentName:"ul"},"Auto-mode control")))}c.isMDXComponent=!0}}]);