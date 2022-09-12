"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||s[f]||i;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"api",title:"APIs Index"},o=void 0,c={unversionedId:"api",id:"api",title:"APIs Index",description:"There are two distinct, yet compatible, APIs.",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/amiga-dev-kit/docs/api",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/api.md",tags:[],version:"current",frontMatter:{id:"api",title:"APIs Index"},sidebar:"api",next:{title:"can",permalink:"/amiga-dev-kit/docs/reference/circuitpy/utils/can"}},l={},p=[{value:"Farm-ng microcontroller ADK",id:"farm-ng-microcontroller-adk",level:2},{value:"Farm-ng Brain ADK",id:"farm-ng-brain-adk",level:2}],m={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two distinct, yet compatible, APIs."),(0,a.kt)("h2",{id:"farm-ng-microcontroller-adk"},"Farm-ng microcontroller ADK"),(0,a.kt)("p",null,"The API of the farm-ng microcontroller development kit.\nThis is ",(0,a.kt)("a",{parentName:"p",href:"https://circuitpython.org/"},"CircuitPython")," and is for running directly on microcontrollers,\nlike the ",(0,a.kt)("a",{parentName:"p",href:"/amiga-dev-kit/docs/mcu_kit/"},(0,a.kt)("strong",{parentName:"a"},"farm-ng microcontroller kit")),"."),(0,a.kt)("h2",{id:"farm-ng-brain-adk"},"Farm-ng Brain ADK"),(0,a.kt)("p",null,"The API of the farm-ng Brain development kit.\nThis is for running directly on the ",(0,a.kt)("a",{parentName:"p",href:"/amiga-dev-kit/docs/brain/"},(0,a.kt)("strong",{parentName:"a"},"farm-ng Brain")),"."))}s.isMDXComponent=!0}}]);