"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[3064],{5101:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=s(4848),r=s(8453);const t={id:"release-023",title:"AmigaOS 2.3 Elderberry Release Notes",authors:["mihelich","hackerman342","guilhermedemouraa"],tags:["announcement","release"]},o=void 0,a={id:"release-notes/release-023",title:"AmigaOS 2.3 Elderberry Release Notes",description:"We are thrilled to announce the launch of AmigaOS 2.3 Elderberry",source:"@site/docs/release-notes/2024-05-10.md",sourceDirName:"release-notes",slug:"/release-notes/release-023",permalink:"/docs/release-notes/release-023",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/release-notes/2024-05-10.md",tags:[{inline:!0,label:"announcement",permalink:"/docs/tags/announcement"},{inline:!0,label:"release",permalink:"/docs/tags/release"}],version:"current",frontMatter:{id:"release-023",title:"AmigaOS 2.3 Elderberry Release Notes",authors:["mihelich","hackerman342","guilhermedemouraa"],tags:["announcement","release"]},sidebar:"Resources/Support",previous:{title:"AmigaOS 2.3.1 Elderberry Patch Release Notes",permalink:"/docs/release-notes/release-0231"},next:{title:"AmigaOS 2.2 Dragon Fruit Release Notes",permalink:"/docs/release-notes/release-022"}},l={},c=[{value:"Core Updates",id:"core-updates",level:2},{value:"Autonomy &amp; Teleoperation",id:"autonomy--teleoperation",level:2},{value:"Enhanced User Experience",id:"enhanced-user-experience",level:2},{value:"Enhanced GPS",id:"enhanced-gps",level:2},{value:"Lots of new open source examples",id:"lots-of-new-open-source-examples",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["We are thrilled to announce the launch of AmigaOS 2.3 Elderberry\n",(0,i.jsx)("span",{style:{display:"inline"},children:(0,i.jsx)("img",{src:"https://emoji.slack-edge.com/TVC7D3Y9Z/elderberry/3aa0c9d737e7f8cf.gif",alt:"Elderberry emoji",style:{height:"20px",verticalAlign:"top"}})}),"!\nThis release marks a significant evolution in our software, with major updates aimed\nat enhancing performance, user interaction, and integration capabilities.\nFrom a robust Rust backbone to advanced teleoperation features,\nevery update brings you closer to seamless automation."]}),"\n",(0,i.jsx)(n.h2,{id:"core-updates",children:"Core Updates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Rust Implementation"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We've transitioned many of our core services from Python to Rust,\nsignificantly improving resource utilization, CPU performance and logging robustness.\nThis foundational upgrade ensures a faster, more reliable system."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/39603677/68bff7a0-08df-48d2-b6ae-5155cf7ff1eb",alt:"amiga-services-diagram"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Improved boot up time"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We've significantly reduced the time it takes to boot up the brain."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"autonomy--teleoperation",children:"Autonomy & Teleoperation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Real-time video streaming"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Introducing real-time streaming capabilities with WebRTC! Enjoy high-quality,\nlow-latency video streams directly from your Amiga,\nenhancing both user experience and operational efficiency."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Colorful images"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Introducing both RGB and mono images.\nGet vivid details and sharp definition of the RGB images on the oak devices.\nUse the night-mode (mono images) for an extended view of the robot's surroundings\nand better visualization in low-light environments."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/4e338205-6f07-42a7-8131-5ee6522d597b",alt:"rgb-image"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To activate the night mode, you must use the web-app version of Autoplot.\nSimply press ",(0,i.jsx)(n.code,{children:"N"})," on the keyboard."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Tool Control"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Take control of h-bridges and PTOs directly through the Autoplot app.\nOur new ",(0,i.jsx)(n.a,{href:"/docs/apps/autoplot_app/#tool-control",children:"Tool Control panel"}),",\naccessible via a dedicated button,\ndisplays all connected tools and provides user-friendly controls for operation."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/7ea61bf7-d90f-4c06-b98e-bc7f76133213",alt:"tool-control"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Teleoperation"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Enhanced teleoperation capabilities allow you to ",(0,i.jsx)(n.a,{href:"/docs/apps/autoplot_app/#how-to-control-your-amiga",children:(0,i.jsx)(n.strong,{children:"control"})}),"\nyour Amiga and its tools using a a keyboard, a kartech, or an 8-BitDo controller.\nThis update brings precision and ease to your hands, making operations smoother than ever."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enhanced-user-experience",children:"Enhanced User Experience"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Digital Twin"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Access a digital twin of your Amiga through any web browser.\nSimply enter ",(0,i.jsx)(n.code,{children:"<robot-name/ip-address>/"})," in the address bar of your web browser to interact with your\nrobot in real-time. The digital twin provides a seamless interface for monitoring and control."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If accessing the digital twin of your Amiga using the robot's name,\nmake sure to use the ",(0,i.jsx)(n.strong,{children:"tailscale name"}),'. For example,if your brain\'s name is "aluminum-pineapple",\nyou would access it by typing ',(0,i.jsx)(n.code,{children:"http://aluminum-pineapple.tail0be07.ts.net/"})," on the web browser\naddress bar."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"App Bar everywhere"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enjoy a more functional and interactive app bar from everywhere."}),"\n",(0,i.jsx)(n.li,{children:"Both the GPS and Filter icons are now clickable, and will provide important\nlogs that are helpful for troubleshooting your robot."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/9e6ab78d-dd52-4d86-9688-53b7ee9bff66",alt:"filter-interactive"}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/c026d6fb-c86e-43d9-b8ca-928bd2ed5515",alt:"gps-interactive"})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Make sure to check the possible ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/filter/filter.proto#L25-L41",children:(0,i.jsx)(n.strong,{children:"reasons"})}),"\nthat will cause the filter to diverge."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Enjoy the new ",(0,i.jsx)(n.code,{children:"RECORD"})," button on the app bar.\nUse it to start/stop recording logs from anywhere in the brain."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fast app switching"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enjoy improved times for opening and closing apps."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Revamped Launcher"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We have created a ",(0,i.jsx)(n.code,{children:"Settings"})," menu to allow users to make in depth adjustments to\nthe various systems of the Amiga."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"Filter"}),", ",(0,i.jsx)(n.code,{children:"GPS"}),", and ",(0,i.jsx)(n.code,{children:"Recorder"})," apps were moved into Settings to keep the launcher apps\nmore concise."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/7cc6cd85-0f9f-47d7-bea8-2d68a3bb9649",alt:"revamped-launcher"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Moreover, users can now control parameters of the filter and track follower services.\nTune them to your specific needs!"}),"\n",(0,i.jsx)(n.li,{children:"New PoE Switch Manager, useful for network diagnostic capabilities, including the ability to\ndetect potential cabling issues with the cameras of your robot."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/3046a543-0888-4827-b4e8-c9c9483ef393",alt:"settings"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Preview images on log files"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We have added a preview functionality to the ",(0,i.jsx)(n.code,{children:"File Manager"})," app."]}),"\n",(0,i.jsxs)(n.li,{children:["If an image is part of your log, you can now ",(0,i.jsx)(n.a,{href:"/docs/apps/file_manager_app/#visualize-log-files",children:"preview"}),"\nit directly on the brain\nbefore saving it to a USB flash drive."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/35ae5327-d744-48d5-a981-c9c026c52eb7",alt:"image-preview"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Enhanced Wifi Manager"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Forget networks"}),"\n",(0,i.jsx)(n.li,{children:"Turn wifi on/off for troubleshooting"}),"\n",(0,i.jsx)(n.li,{children:"Quickly connect to known networks without typing in a password"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enhanced-gps",children:"Enhanced GPS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NMEA GGA Message Integration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Our GPS service now streams NMEA GGA messages back to the base station,\nallowing for seamless integration with third-party service providers and enhancing\nyour geo-location capabilities."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"lots-of-new-open-source-examples",children:"Lots of new open source examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Enjoy lots of new open-source examples.\nFrom ",(0,i.jsx)(n.a,{href:"https://amiga.farm-ng.com/docs/examples/tool_control/",children:(0,i.jsx)(n.strong,{children:"tool control"})}),"\nto ",(0,i.jsx)(n.a,{href:"https://amiga.farm-ng.com/docs/examples/track_planner/",children:(0,i.jsx)(n.strong,{children:"track planning"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Custom Apps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The template for custom apps (",(0,i.jsx)(n.code,{children:"manifest.json"}),") had a minor change on its ",(0,i.jsx)(n.code,{children:"http_gui_port"})," field.\nIt has been renamed to ",(0,i.jsx)(n.code,{children:"app_route"}),".\nMoreover, its corresponding value, has to be formatted as a string.\nPlease note the ",(0,i.jsx)(n.code,{children:'""'})," around its corresponding value (",(0,i.jsx)(n.code,{children:'"8042"'}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "services": {\n        "example-service": {\n            "name": "example-service",\n            "type": "service",\n            "exec_cmd": "/farm_ng_image/venv/bin/python3 example_service.py",\n            "args": [\n                "--config",\n                "/opt/farmng/config.json",\n                "--port",\n                "8042"\n            ],\n            "autostart": true,\n            "app_route": "8042",\n            "display_name": "Example Service"\n        },\n   }\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Exit Button"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The launcher no longer provides an exit button for custom apps.\nUsers need to manually add an ExitButton component.\nFollow these steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create the ExitButton.tsx file in amiga-app-template/ts/src/components\nusing the code from provided in the\n",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-app-template/blob/main/ts/src/components/ExitButton.tsx",children:"amiga-app-template repository"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.code,{children:"App.tsx"})," to include the ",(0,i.jsx)(n.code,{children:"ExitButton"})," componenet:"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import TopicMonitor from "./TopicMonitor";\nimport ExitButton from "./ExitButton";\n\nfunction App() {\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>Farm-ng Monitor</h1>\n        <TopicMonitor />\n      </header>\n      <ExitButton />\n    </div>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Rebuilt your project:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ts/\nnpm install\nnpm run build\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Stay tuned for more updates as we continue to refine and expand the capabilities of the AmigaOS!"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/5157099/219821724-69dfc97d-17fc-4a08-933a-e6fb2446495e.jpg",alt:"command prompt"})}),"\n",(0,i.jsxs)(n.p,{children:["Happy coding ","\ud83d\ude0e"," from the Amiga Brain Team!"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(6540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);