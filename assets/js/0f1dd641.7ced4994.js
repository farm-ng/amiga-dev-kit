"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6287],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,y=f["".concat(u,".").concat(d)]||f[d]||s[d]||c;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const c={sidebar_label:"can",title:"utils.can"},i=void 0,o={unversionedId:"reference/circuitpy/utils/can",id:"reference/circuitpy/utils/can",title:"utils.can",description:"setup\\can\\default",source:"@site/docs/reference/circuitpy/utils/can.md",sourceDirName:"reference/circuitpy/utils",slug:"/reference/circuitpy/utils/can",permalink:"/docs/reference/circuitpy/utils/can",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/reference/circuitpy/utils/can.md",tags:[],version:"current",frontMatter:{sidebar_label:"can",title:"utils.can"},sidebar:"api",previous:{title:"APIs Index",permalink:"/docs/api"},next:{title:"cobid",permalink:"/docs/reference/circuitpy/utils/cobid"}},u={},l=[{value:"setup_can_default",id:"setup_can_default",level:4},{value:"setup_can",id:"setup_can",level:4}],p={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"setup_can_default"},"setup","_","can","_","default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def setup_can_default()\n")),(0,a.kt)("p",null,"Sets up the default canio.CAN connection, for your board type Uses baud_rate of 250K (default bus speed for\nthe Amiga)"),(0,a.kt)("h4",{id:"setup_can"},"setup","_","can"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def setup_can(rx, tx, baudrate, auto_restart)\n")),(0,a.kt)("p",null,"Sets up the canio.CAN connection. Essentially just wraps:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.circuitpython.org/en/latest/shared-bindings/canio/index.html#canio.CAN"},"canio.CAN()")))}s.isMDXComponent=!0}}]);