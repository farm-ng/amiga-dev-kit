"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[6986],{3822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(5893),i=t(1151);const a={id:"release-022",title:"AmigaOS 2.2 Dragon Fruit Release Notes",authors:["mihelich","hackerman342","guilhermedemouraa"],tags:["announcement","release"]},r=void 0,o={id:"release-notes/release-022",title:"AmigaOS 2.2 Dragon Fruit Release Notes",description:"We're excited to announce the launch of AmigaOS 2.2 \u201cDragon Fruit!\u201d This is a",source:"@site/docs/release-notes/2024-01-17-version-220.md",sourceDirName:"release-notes",slug:"/release-notes/release-022",permalink:"/docs/release-notes/release-022",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/release-notes/2024-01-17-version-220.md",tags:[{label:"announcement",permalink:"/docs/tags/announcement"},{label:"release",permalink:"/docs/tags/release"}],version:"current",frontMatter:{id:"release-022",title:"AmigaOS 2.2 Dragon Fruit Release Notes",authors:["mihelich","hackerman342","guilhermedemouraa"],tags:["announcement","release"]},sidebar:"Resources/Support",previous:{title:"AmigaOS 2.3 Elderberry Release Notes",permalink:"/docs/release-notes/release-023"},next:{title:"AmigaOS 2.1 Clementine Release Notes",permalink:"/docs/release-notes/release-021"}},l={},c=[{value:"Data Collection",id:"data-collection",level:2},{value:"Developer Experience",id:"developer-experience",level:2},{value:"Autonomy",id:"autonomy",level:2},{value:"Display UX",id:"display-ux",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"We're excited to announce the launch of AmigaOS 2.2 \u201cDragon Fruit!\u201d This is a\nusability-focused release improving the experience for large-scale data collection,\ncustom application development, and teach-and-repeat autonomy using Autoplot."}),"\n",(0,s.jsx)(n.p,{children:"Note: certain bug fixes are included in the 2.2.1 patch release."}),"\n",(0,s.jsx)(n.h2,{id:"data-collection",children:"Data Collection"}),"\n",(0,s.jsx)(n.p,{children:"We've extended our suite of data collection apps with power features for large-scale\ncollections."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Camera"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Improved UX for adjusting OAK-D camera settings."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Recorder"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Store user-defined metadata (key/value pairs) in log files, such as field name, crop\ntype, or whatever else is relevant to your collection needs!"}),"\n",(0,s.jsx)(n.li,{children:"Split large logs into multiple chunks with a maximum file size for easier transfer."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"File Manager"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Preview images and inspect metadata in log files."}),"\n",(0,s.jsx)(n.li,{children:"Support multiple USB drives."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"developer-experience",children:"Developer Experience"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Expanded set of tutorials and example apps for building custom applications with Kivy\n(pure Python):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/tutorials/camera_streamer/camera-streamer-overview",children:"Camera Streamer"})," shows\nhow to access the OAK camera streams to perform real-time image processing.\n",(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/53625197/216075393-6e578a01-677e-4279-b224-70fd3f73ce5f.png",alt:"app-template"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/tutorials/virtual_joystick/virtual-joystick-overview",children:"Virtual Joystick"})," shows\nhow to make the Amiga move using the canbus API.\n",(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/53625197/200641720-c722fa9f-f6a3-4918-a4f0-d7270b73fd43.png",alt:"Virtual-joystick-template"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["New and updated documentation for\n",(0,s.jsx)(n.a,{href:"/docs/brain/brain-apps#debugging-the-app-on-the-launcher",children:"troubleshooting custom apps"}),",\nthe ",(0,s.jsx)(n.a,{href:"/docs/api/#farm-ng-microcontroller-adk",children:"microcontroller API"}),", and debugging\n",(0,s.jsx)(n.a,{href:"/docs/dashboard/dashboard-debugging",children:"dashboard error codes"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["More robust registration of custom apps with the launcher UI. ",(0,s.jsx)(n.em,{children:"(2.2.1)"})]}),"\n",(0,s.jsxs)(n.li,{children:["The custom app template now demonstrates using an app-specific virtualenv, so that\nyou can add additional Python packages without relying on system installs.","\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["As part of this change, the ",(0,s.jsx)(n.code,{children:"python"})," manifest option has been removed, and you must\nuse ",(0,s.jsx)(n.code,{children:"exec_cmd"})," to specify how to run your application. See the example\n",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-app-template/blob/main/manifest.json",children:"manifest.json"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"autonomy",children:"Autonomy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"While recording a track in Autoplot, you can now pause recording, delete the last\nwaypoint(s), and resume recording. You can quickly fix errors without starting the\nwhole track over!"}),"\n",(0,s.jsxs)(n.li,{children:["Improved reporting when autonomy is unavailable.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'If any preconditions for autonomous track following are not met, the "Start\nFollowing" button will pop up an explanation.'}),"\n",(0,s.jsxs)(n.li,{children:["For developers, if the filter diverges, the reason is recorded in the ",(0,s.jsx)(n.code,{children:"FilterState"})," proto."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/484900/b728296c-c7a1-4a64-b65b-2a72e3b76eb2",alt:"v22-dragonfruit-autoplot"})}),"\n",(0,s.jsx)(n.h2,{id:"display-ux",children:"Display UX"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When the Brain display has fallen asleep, the first touch to wake it up will no longer\ntrigger UI actions, to prevent accidental button presses. ",(0,s.jsx)(n.em,{children:"(2.2.1)"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/5157099/219821724-69dfc97d-17fc-4a08-933a-e6fb2446495e.jpg",alt:"command prompt"})}),"\n",(0,s.jsxs)(n.p,{children:["Happy coding ","\ud83d\ude0e"," from the Amiga Brain Team!"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);