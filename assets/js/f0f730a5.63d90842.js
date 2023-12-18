"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[5586],{9186:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var t=s(5893),r=s(1151);const c={sidebar_label:"canbus_client",title:"canbus.canbus_client"},a=void 0,i={id:"reference/brain/canbus/canbus_client",title:"canbus.canbus_client",description:"CanbusClient Objects",source:"@site/docs/reference/brain/canbus/canbus_client.md",sourceDirName:"reference/brain/canbus",slug:"/reference/brain/canbus/canbus_client",permalink:"/docs/reference/brain/canbus/canbus_client",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/reference/brain/canbus/canbus_client.md",tags:[],version:"current",frontMatter:{sidebar_label:"canbus_client",title:"canbus.canbus_client"},sidebar:"api",previous:{title:"version",permalink:"/docs/reference/circuitpy/utils/version"},next:{title:"packet",permalink:"/docs/reference/brain/canbus/packet"}},l={},o=[{value:"CanbusClient Objects",id:"canbusclient-objects",level:2},{value:"stream_raw",id:"stream_raw",level:4},{value:"stream_motors",id:"stream_motors",level:4},{value:"stream",id:"stream",level:4}];function u(e){const n={code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"canbusclient-objects",children:"CanbusClient Objects"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class CanbusClient(ServiceClient)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Amiga canbus client."}),"\n",(0,t.jsx)(n.p,{children:"Client class to connect with the Amiga brain canbus service.\nInherits from ServiceClient."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config"})," ",(0,t.jsx)(n.em,{children:"ClientConfig"})," - the grpc configuration data structure."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"stream_raw",children:"stream_raw"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def stream_raw()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return the async streaming object of raw canbus messages."}),"\n",(0,t.jsx)(n.h4,{id:"stream_motors",children:"stream_motors"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def stream_motors()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return the async streaming object of motor states."}),"\n",(0,t.jsx)(n.h4,{id:"stream",children:"stream"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def stream()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["DEPRECATED: Use ",(0,t.jsx)(n.code,{children:"stream_raw"})," with v0.0.6+.\nThis will be phased out in v0.1.0"]}),"\n",(0,t.jsx)(n.p,{children:"Return the async streaming object of raw canbus messages."})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>a});var t=s(7294);const r={},c=t.createContext(r);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);