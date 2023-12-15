"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[1455],{5528:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=a(5893),l=a(1151);const t={id:"file-reader",title:"File Reader"},o="File Reader Example",r={id:"examples/file_reader/file-reader",title:"File Reader",description:"Before diving into this example, here's a quick overview of what you'll need to be familiar with:",source:"@site/docs/examples/file_reader/README.md",sourceDirName:"examples/file_reader",slug:"/examples/file_reader/",permalink:"/docs/examples/file_reader/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/file_reader/README.md",tags:[],version:"current",frontMatter:{id:"file-reader",title:"File Reader"},sidebar:"examples",previous:{title:"Events Recorder",permalink:"/docs/examples/events_recorder/"},next:{title:"File Converter",permalink:"/docs/examples/file_converter/"}},s={},d=[{value:"Install the farm-ng Brain ADK package",id:"install-the-farm-ng-brain-adk-package",level:2},{value:"Download the log file",id:"download-the-log-file",level:2},{value:"[Optional] Make a Data folder",id:"optional-make-a-data-folder",level:2},{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:2},{value:"Run example",id:"run-example",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"file-reader-example",children:"File Reader Example"}),"\n",(0,i.jsxs)(n.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,i.jsx)(n.p,{children:"Before diving into this example, here's a quick overview of what you'll need to be familiar with:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Python Programming"}),": Mastery of Python is essential, as the example employs foundational\nconcepts such as functions, conditional statements, and working with third-party libraries."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OpenCV"}),": A foundational understanding of the OpenCV library, particularly functions related to\nimage decoding and display, as the example showcases how to visualize camera images from the log file."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["In this example you will learn how to upload a given log file and\nuse it to run the\n",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader/main.py",children:(0,i.jsx)(n.strong,{children:"File Reader Example"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To successfully run this example, you must use your local PC, as the example won't\nwork if executed directly from a brain (because of the popup window)."}),"\n",(0,i.jsxs)(n.h2,{id:"install-the-farm-ng-brain-adk-package",children:["Install the ",(0,i.jsx)(n.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,i.jsx)(n.h2,{id:"download-the-log-file",children:"Download the log file"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you already have the log file you want to run with this\nexample you can skip to ",(0,i.jsx)(n.a,{href:"#setup",children:(0,i.jsx)(n.strong,{children:"set up"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["Now you are going to download the log file that you will use in\nthis example.\n",(0,i.jsx)(n.a,{href:"https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/examples_log_file/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin",children:(0,i.jsx)(n.strong,{children:"Click here to download"})})]}),"\n",(0,i.jsx)(n.h2,{id:"optional-make-a-data-folder",children:"[Optional] Make a Data folder"}),"\n",(0,i.jsx)(n.p,{children:"We are going to make a folder that will store all of our log\nfiles, including the one you just downloaded."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd <to-your-base-directory>\nmkdir <data-file>\ncd <data-file>\npwd # the output of this is your <path>\n\n# Now that the file is downloaded you will do the following\n\ncd ~ # navigate to home directory\ncd Downloads\n# Move the data to to data-folder\nmv 2023_09_29_17_52_35_070804_dubnium-durian.0000.bin <path-to-where-data-file-is-above>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now that you have your log file in the correct place, in your\nterminal navigate to where the repository ",(0,i.jsx)(n.code,{children:"farm-ng-amiga"})," is and\nopen Visual Studio Code."]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.p,{children:"Create first a virtual environment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd py/examples/file_reader\npip install -r requirements.txt\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-example",children:"Run example"}),"\n",(0,i.jsx)(n.p,{children:"Specify the file (download before)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python main.py --file-name <path-from-above>/events_12052022115852.bin\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Optionally, you can change the camera that is played back from\nthe default of ",(0,i.jsx)(n.code,{children:"oak0"}),". E.g., and the view ",(0,i.jsx)(n.code,{children:"rgb"}),". E.g."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python main.py --file-name <path-from-above>/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin \\\n               --camera-name oak1 --view-name rgb\n"})}),"\n",(0,i.jsx)(n.p,{children:"Congratulations two videos should now pop up and play! One should\nbe RGB and one should be disparity (it might be hidden behind the\nRGB window so try moving the RGB window). You have now finished\nrunning this example!"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/docs/apps/recorder_app/",children:"Recorder App Guide"})})," walks you through how to record data on your\nown Brain."]})})]})}function c(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>o});var i=a(7294);const l={},t=i.createContext(l);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);