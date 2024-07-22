"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[3050],{1876:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=r(5893),o=r(1151);const s={id:"recorder-app",title:"Recorder App"},i="Recorder App Guide",a={id:"apps/recorder_app/recorder-app",title:"Recorder App",description:"This guide will walk you through how to record field data and",source:"@site/docs/apps/recorder_app/README.md",sourceDirName:"apps/recorder_app",slug:"/apps/recorder_app/",permalink:"/docs/apps/recorder_app/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/apps/recorder_app/README.md",tags:[],version:"current",frontMatter:{id:"recorder-app",title:"Recorder App"},sidebar:"Resources/Support",previous:{title:"Filter App",permalink:"/docs/apps/filter_app/"},next:{title:"AmigaOS 2.3.1 Elderberry Patch Release Notes",permalink:"/docs/release-notes/release-0231"}},c={},d=[{value:"Record data with the Recorder App",id:"record-data-with-the-recorder-app",level:2},{value:"File naming convention",id:"file-naming-convention",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"recorder-app-guide",children:"Recorder App Guide"}),"\n",(0,t.jsx)(n.p,{children:"This guide will walk you through how to record field data and\ntransfer that data from the Amiga to your local machine."}),"\n",(0,t.jsx)(n.h2,{id:"record-data-with-the-recorder-app",children:"Record data with the Recorder App"}),"\n",(0,t.jsx)(n.p,{children:"The first step in this tutorial is to record some field data. To\ndo this, you are going to use the handy Recorder app on the\nAmiga."}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Recorder"})," app, select what data you want to record by checking\nthe boxes under the column ",(0,t.jsx)(n.code,{children:"Include URI"})," to indicate which topics to record.\nThe ",(0,t.jsx)(n.a,{href:"/docs/concepts/recorder_service/",children:"Recorder Service Overview"})," describes the available topics."]}),"\n",(0,t.jsxs)(n.p,{children:["Then use the ",(0,t.jsx)(n.code,{children:"Start"})," and ",(0,t.jsx)(n.code,{children:"Stop"})," buttons to start/stop collecting data."]}),"\n",(0,t.jsxs)(n.p,{children:["While recording data, a message displaying ",(0,t.jsx)(n.strong,{children:"Recording in Progress"})," will pop up\non the left-hand side of the menu."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/39603677/8464afd9-88fb-43b0-b624-1e308e13c36b",alt:"Screenshot from 2023-10-04 11-46-43"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Info",type:"info",children:[(0,t.jsxs)(n.p,{children:["Change the values on the ",(0,t.jsx)(n.code,{children:"everyN"})," column to adjust the frequency of data collection."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"everyN"})," = Max_frequency / Desired_frequency."]}),(0,t.jsxs)(n.p,{children:["For example, ",(0,t.jsx)(n.code,{children:"gps/relposned"})," messages are published at a frequency of 2 Hz.\nIf, for example, you wish to receive those messages at a frequency of 1 Hz,\nthen change the value of ",(0,t.jsx)(n.code,{children:"everyN"})," to 2.\nBe sure to use integers in the ",(0,t.jsx)(n.code,{children:"everyN"})," field."]})]}),"\n",(0,t.jsx)(n.h3,{id:"file-naming-convention",children:"File naming convention"}),"\n",(0,t.jsx)(n.p,{children:"The data will be recorded with a file naming convention that captures the precise timestamp (to the microsecond)\nat the time recording starts, the name of the robot on which the files were recorded,\nand the file number in the video sequence:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"<yyyy>_<mm>_<dd>_<hh>_<mn>_<ss>_<msmsms>_<robot_name>.0000.bin\n"})}),"\n",(0,t.jsx)(n.p,{children:"E.g.,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"  2023_01_12_16_17_52_134845_element-vegetable.0000.bin\n# yyyy_mm_dd_hh_mn_ss_msmsms_robot_name.####.bin\n"})}),"\n",(0,t.jsx)(n.h1,{id:"how-to-transfer-data-from-the-amiga-to-your-local-machine",children:"How to transfer data from the Amiga to your local machine"}),"\n",(0,t.jsx)(n.p,{children:"Right now, it is only possible to transfer files using ssh."}),"\n",(0,t.jsx)(n.p,{children:"First, let's make sure your data was properly saved.\nUsing a terminal command window:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh <robot-name>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You should replace ",(0,t.jsx)(n.code,{children:"<robot-name>"})," with your actual robot name, e.g., ",(0,t.jsx)(n.code,{children:"element-vegetable"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If having issues further instructions for how to do this are\nlisted\n",(0,t.jsx)(n.a,{href:"/docs/brain/brain-apps#ssh-configuration",children:(0,t.jsx)(n.strong,{children:"here"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Once connected: Verify the logs are present on the Amiga"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /mnt/data/ # navigate to where the logs are located\nls\n# In the output you should see the name of the logs you just\n#recorded.\n# You can see its the right log by the date in the of its name.\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Open a new local terminal window (",(0,t.jsx)(n.strong,{children:"not ssh"}),") to copy the files over"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"scp -rp <robot-name>:/mnt/data/<name-of-log-file> ~/path/in/local/directory\n\n# Replace <robot-name> with what is shown as the name in the SSH terminal\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"If you are receiving an error like: No such file or directory"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Check to see if your path is right, both on your local machine,\nand the ",(0,t.jsx)(n.strong,{children:"ssh"})," terminal"]}),"\n",(0,t.jsx)(n.li,{children:"Check to make sure you are entering this command in your local\nterminal and not the Amiga"}),"\n"]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The files should begin to download, and when it reaches 100%\nthe download is complete, and the file transfer it done!"}),"\n",(0,t.jsx)(n.li,{children:"Feel free to rename the file once it has transferred to your local PC"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Congratulations you have now completed this tutorial, and should\nnow know how to record field data and offload it!"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you want to collect data via terminal commands, check out\nthe ",(0,t.jsx)(n.a,{href:"https://amiga.farm-ng.com/docs/examples/events_recorder/",children:(0,t.jsx)(n.strong,{children:"Events Recorder"})})," tutorial."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var t=r(7294);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);