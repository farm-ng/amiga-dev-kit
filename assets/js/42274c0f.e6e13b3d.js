"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[6493],{2907:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>o});var i=n(5893),r=n(1151);const s={id:"file-reader-headers",title:"File Reader Headers"},l="File Reader Headers Example",t={id:"examples/file_reader_headers/file-reader-headers",title:"File Reader Headers",description:"Before diving into this example, here's a quick overview of what you'll need to be familiar with:",source:"@site/docs/examples/file_reader_headers/README.md",sourceDirName:"examples/file_reader_headers",slug:"/examples/file_reader_headers/",permalink:"/docs/examples/file_reader_headers/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/file_reader_headers/README.md",tags:[],version:"current",frontMatter:{id:"file-reader-headers",title:"File Reader Headers"},sidebar:"examples",previous:{title:"File Reader GPS",permalink:"/docs/examples/file_reader_gps/"},next:{title:"Camera Client",permalink:"/docs/examples/camera_client/"}},d={},o=[{value:"Install the farm-ng Brain ADK package",id:"install-the-farm-ng-brain-adk-package",level:2},{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:2},{value:"Select your log file",id:"select-your-log-file",level:2},{value:"Run example",id:"run-example",level:2},{value:"Additional args",id:"additional-args",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"file-reader-headers-example",children:"File Reader Headers Example"}),"\n",(0,i.jsxs)(a.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,i.jsx)(a.p,{children:"Before diving into this example, here's a quick overview of what you'll need to be familiar with:"}),(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Python Programming"}),": This code is written in Python.\nBasic constructs such as functions, conditional statements, loops, and more are utilized."]}),"\n"]})]}),"\n",(0,i.jsxs)(a.p,{children:["This ",(0,i.jsx)(a.a,{href:"https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_headers/main.py",children:(0,i.jsx)(a.strong,{children:"File Reader Headers"})}),"\nexample:"]}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["Parses a recorded ",(0,i.jsx)(a.code,{children:"*.bin"})," log file and prints all topics, with a count of that topic's logged messages"]}),"\n",(0,i.jsxs)(a.li,{children:["Prints all messages with ",(0,i.jsx)(a.code,{children:"/header"})," in the uri path","\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Typically you would expect to see metadata & oak camera calibrations here"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.h2,{id:"install-the-farm-ng-brain-adk-package",children:["Install the ",(0,i.jsx)(a.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,i.jsx)(a.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(a.p,{children:"Create first a virtual environment"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"python3 -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,i.jsx)(a.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"cd examples/file_reader_headers\npip install -r requirements.txt\n"})}),"\n",(0,i.jsx)(a.h2,{id:"select-your-log-file",children:"Select your log file"}),"\n",(0,i.jsxs)(a.p,{children:["See the ",(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"/docs/apps/recorder_app/",children:"Recorder App Guide"})})," for instructions."]}),"\n",(0,i.jsx)(a.h2,{id:"run-example",children:"Run example"}),"\n",(0,i.jsx)(a.p,{children:"E.g.,"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"python main.py --file-name <path-to-file>/2023_01_23_45_54_32_101010_element-vegetable.0000.bin\n"})}),"\n",(0,i.jsx)(a.h3,{id:"additional-args",children:"Additional args"}),"\n",(0,i.jsxs)(a.p,{children:["Use the ",(0,i.jsx)(a.code,{children:"--help"})," flag to see all possible arguments for using this tool."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"# usage: Event file reader example for parsing header messages. [-h] --file-name FILE_NAME [--skip-calibrations]\n\n# optional arguments:\n#   -h, --help            show this help message and exit\n#   --file-name FILE_NAME\n#                         Path to the `events.bin` file.\n#   --skip-calibrations   Skip camera calibration header messages.\n"})}),"\n",(0,i.jsxs)(a.p,{children:["For instance, you can skip printing the camera calibrations if you only want to\nsee the other headers (e.g. ",(0,i.jsx)(a.code,{children:"metadata"})," you specified when recording)."]})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>t,a:()=>l});var i=n(7294);const r={},s=i.createContext(r);function l(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);