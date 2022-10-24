"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,g=s["".concat(u,".").concat(m)]||s[m]||p[m]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={id:"debug-cable",title:"Debug Cable Overview"},i="farm-ng Debug Cable",o={unversionedId:"debug_cable/debug-cable",id:"debug_cable/debug-cable",title:"Debug Cable Overview",description:"debug_cable",source:"@site/docs/debug_cable/README.md",sourceDirName:"debug_cable",slug:"/debug_cable/",permalink:"/docs/debug_cable/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/debug_cable/README.md",tags:[],version:"current",frontMatter:{id:"debug-cable",title:"Debug Cable Overview"},sidebar:"docs",previous:{title:"Amiga Control States",permalink:"/docs/dashboard/control-states"},next:{title:"Microcontroller Kit Overview",permalink:"/docs/mcu_kit/"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Product specific uses",id:"product-specific-uses",level:3},{value:"Dash",id:"dash",level:4},{value:"Brain",id:"brain",level:4},{value:"Pinout",id:"pinout",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"farm-ng-debug-cable"},"farm-ng Debug Cable"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187536591-042b7f19-c587-45d3-9079-74ec05d77b6e.jpeg",alt:"debug_cable"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Cable used to update and debug farm-ng products. It includes rest functionality along with USB and serial communication."),(0,a.kt)("p",null,"The larger circuit board on the left is the USB / debug breakout, and the smaller board on the right is the serial interface."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187536636-64878c45-0d4e-4275-b8b1-7c0b9dd9254f.jpeg",alt:"debug_notes"})),(0,a.kt)("h3",{id:"product-specific-uses"},"Product specific uses"),(0,a.kt)("h4",{id:"dash"},"Dash"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USB interface is for REPL, filesystem access as well as updating firmware and applications,"),(0,a.kt)("li",{parentName:"ul"},"Serial interface is not used at the moment"),(0,a.kt)("li",{parentName:"ul"},"Reset is connected to the Microcontroller reset and used for hard reset. It also can be double pressed to force bootloader mode.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See update process documentation for more information")),(0,a.kt)("h4",{id:"brain"},"Brain"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USB interface is used for connecting for lashing images"),(0,a.kt)("li",{parentName:"ul"},"Serial interface is used for operating system terminal"),(0,a.kt)("li",{parentName:"ul"},"Reset / Flash button is used for enabling the firmware update mode (press on boot)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See flashing and operating system documentation for more information")),(0,a.kt)("h2",{id:"pinout"},"Pinout"),(0,a.kt)("p",null,"Connector M12-8 A code female used to connect to farm-ng products. The debug cable connects the IO to two MicroUSB connectors and a reset button."),(0,a.kt)("p",null,"Debug wire colors based on common cable with flying leads used on farm-ng built debug kits."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PIN"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical Wire Color"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"RESET"),(0,a.kt)("td",{parentName:"tr",align:null},"White"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"TTL RX (3.3v)"),(0,a.kt)("td",{parentName:"tr",align:null},"Brown"),(0,a.kt)("td",{parentName:"tr",align:null},"Connect to TX of interface")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"TTL TX (3.3v)"),(0,a.kt)("td",{parentName:"tr",align:null},"Green"),(0,a.kt)("td",{parentName:"tr",align:null},"Connect to RX of interface")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"USB D-"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"UDB D+"),(0,a.kt)("td",{parentName:"tr",align:null},"Gray"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"USB VBUS"),(0,a.kt)("td",{parentName:"tr",align:null},"Pink"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"NC"),(0,a.kt)("td",{parentName:"tr",align:null},"Blue"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black"),(0,a.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);