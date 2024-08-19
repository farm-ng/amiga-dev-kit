"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[9800],{6026:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=s(74848),t=s(28453);const a={id:"release-0231",title:"AmigaOS 2.3.1 Elderberry Patch Release Notes",authors:["mihelich","hackerman342","guilhermedemouraa"],tags:["announcement","release"]},i="AmigaOS 2.3.1 - Patch Release Notes",l={id:"release-notes/release-0231",title:"AmigaOS 2.3.1 Elderberry Patch Release Notes",description:"Bug Fixes",source:"@site/docs/release-notes/2024-07-17.md",sourceDirName:"release-notes",slug:"/release-notes/release-0231",permalink:"/docs/release-notes/release-0231",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/release-notes/2024-07-17.md",tags:[{inline:!0,label:"announcement",permalink:"/docs/tags/announcement"},{inline:!0,label:"release",permalink:"/docs/tags/release"}],version:"current",frontMatter:{id:"release-0231",title:"AmigaOS 2.3.1 Elderberry Patch Release Notes",authors:["mihelich","hackerman342","guilhermedemouraa"],tags:["announcement","release"]},sidebar:"Resources/Support",previous:{title:"Recorder App",permalink:"/docs/apps/recorder_app/"},next:{title:"AmigaOS 2.3 Elderberry Release Notes",permalink:"/docs/release-notes/release-023"}},o={},c=[{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"New Features",id:"new-features",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"amigaos-231---patch-release-notes",children:"AmigaOS 2.3.1 - Patch Release Notes"})}),"\n",(0,r.jsx)(n.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"JPEG Stream Quality"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Restored image quality of recording JPEG streams to parity with version 2.2.1.\nThis fixes a regression in 2.3.0 that could cause noticeable compression artifacts."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Multiple Camera Recording"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed the ability to record all topics from up to 4 OAK cameras simultaneously,\nensuring comprehensive data capture."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Date/Time Tracking"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Brain now accurately tracks the correct date and time across power-offs,\neven when it does not have access to Wi-Fi for NTP updates."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"new-features",children:"New Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Recorder Profiles"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Users can now create and edit profiles for recording data streams from the robot.\nThis feature is particularly useful for customized data collection needs, allowing for\ngreater flexibility in recording configurations.\nCheck out more in ",(0,r.jsx)(n.a,{href:"/docs/apps/launcher/#recorder",children:"Launcher - Recorder"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/user-attachments/assets/68cabb56-1b16-4c45-a047-202910879873",alt:"recorder"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CAN Status and Error States"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The app bar now displays CAN status and error states, providing users with real-time\ndiagnostics and improving overall system transparency and troubleshooting capabilities."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/user-attachments/assets/8364b94b-46ab-4e6b-89d9-e222af7d8e0a",alt:"can-status-app-bar"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Timestamps"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Some events have additional timestamps. Note which one to use for backwards compatibility.\nWhile it is possible to retrieve event stamps by indexing them by order, we strongly recommend\nyou to do so by ",(0,r.jsx)(n.code,{children:"semantics"})," and ",(0,r.jsx)(n.code,{children:"clock type"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For context, the available semantics can be found in ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-core/blob/main/py/farm_ng/core/stamp.py",children:"farm-ng-core: stamp.py"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The available clock times are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Monotonic"}),": A clock that cannot go backwards and is not affected by changes to the system clock.\nIt is used to measure intervals with a constant rate, making it ideal for timing events and ensuring\nthat elapsed time measurements are reliable."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"System Clock/UTC"}),": The system clock, also known as the UTC clock, represents the current time\nas per the system\u2019s calendar.\nIt is subject to adjustments and changes (e.g., daylight saving time), and it is used to track\nreal-world date and time."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["While we have multiple semantics, not every event will have all semantics or clock types.\nWe tend to use the ",(0,r.jsx)(n.code,{children:"monotonic"})," clock for ",(0,r.jsx)(n.code,{children:"driver/receive"})," events, as it is the one consistently available."]})}),"\n",(0,r.jsxs)(n.p,{children:["Check out our ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_client/main.py",children:"Camera Client Brain Example"}),"\nto see how to retrieve event stamps like a pro!"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Stay tuned for more updates and improvements! As always, we welcome your feedback to continue\nrefining the AmigaOS experience."}),"\n",(0,r.jsxs)(n.p,{children:["Happy coding ","\ud83d\ude0e"," from the Amiga Brain Team!"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(96540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);