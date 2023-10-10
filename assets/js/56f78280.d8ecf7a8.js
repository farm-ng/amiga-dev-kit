"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4962],{175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));a(1839);const r={id:"import-log-file",title:"Record and Access data"},i="How to Record and Access data on the Amiga",l={unversionedId:"examples/import_log_file/import-log-file",id:"examples/import_log_file/import-log-file",title:"Record and Access data",description:"This tutorial will walk you through how to record field data and",source:"@site/docs/examples/import_log_file/README.md",sourceDirName:"examples/import_log_file",slug:"/examples/import_log_file/",permalink:"/docs/examples/import_log_file/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/import_log_file/README.md",tags:[],version:"current",frontMatter:{id:"import-log-file",title:"Record and Access data"},sidebar:"examples",previous:{title:"FPV Example",permalink:"/docs/examples/FPV/"},next:{title:"Events Recorder",permalink:"/docs/examples/events_recorder/"}},s={},d=[{value:"Record data with the Recorder App",id:"record-data-with-the-recorder-app",level:2},{value:"File naming convention",id:"file-naming-convention",level:3}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-record-and-access-data-on-the-amiga"},"How to Record and Access data on the Amiga"),(0,o.kt)("p",null,"This tutorial will walk you through how to record field data and\ntransfer that data from the Amiga to your local machine."),(0,o.kt)("h2",{id:"record-data-with-the-recorder-app"},"Record data with the Recorder App"),(0,o.kt)("p",null,"The first step in this tutorial is to record some field data. To\ndo this, you are going to use the handy Recorder app on the\nAmiga."),(0,o.kt)("admonition",{title:"deprecation warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"There are two recorder apps, one of them is deprecated and will soon be removed.\nMake sure you select the ",(0,o.kt)("strong",{parentName:"p"},"Recorder")," app as seen on the picture below.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/farm-ng/amiga-dev-kit/assets/39603677/f26485f5-d71b-4aa6-adc8-986216b5b761",alt:"Screenshot from 2023-10-04 11-46-02"})),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Recorder")," app, select what data you want to record by checking\nthe boxes under the column ",(0,o.kt)("inlineCode",{parentName:"p"},"Include URI")," to indicate which topics to record."),(0,o.kt)("p",null,"Then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Stop")," buttons to start/stop collecting data."),(0,o.kt)("p",null,"While recording data, a message displaying ",(0,o.kt)("strong",{parentName:"p"},"Recording in Progress")," will pop up\non the left-hand side of the menu."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/farm-ng/amiga-dev-kit/assets/39603677/8464afd9-88fb-43b0-b624-1e308e13c36b",alt:"Screenshot from 2023-10-04 11-46-43"})),(0,o.kt)("admonition",{title:"Info",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Change the values on the ",(0,o.kt)("inlineCode",{parentName:"p"},"everyN")," column to adjust the frequency of data collection."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"everyN")," = Max_frequency / Desired_frequency."),(0,o.kt)("p",{parentName:"admonition"},"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"gps/relposned")," messages are published at a frequency of 2 Hz.\nIf, for example, you wish to receive those messages at a frequency of 1 Hz,\nthen change the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"everyN")," to 2.\nBe sure to use integers in the ",(0,o.kt)("inlineCode",{parentName:"p"},"everyN")," field.")),(0,o.kt)("h3",{id:"file-naming-convention"},"File naming convention"),(0,o.kt)("p",null,"The data will be recorded with a file naming convention that captures the precise timestamp (to the microsecond)\nat the time recording starts, the name of the robot on which the files were recorded,\nand the file number in the video sequence:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"<yyyy>_<mm>_<dd>_<hh>_<mn>_<ss>_<msmsms>_<robot_name>.0000.bin\n")),(0,o.kt)("p",null,"E.g.,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  2023_01_12_16_17_52_134845_element-vegetable.0000.bin\n# yyyy_mm_dd_hh_mn_ss_msmsms_robot_name.####.bin\n")),(0,o.kt)("h1",{id:"how-to-transfer-data-from-the-amiga-to-your-local-machine"},"How to transfer data from the Amiga to your local machine"),(0,o.kt)("p",null,"Right now, it is only possible to transfer files using ssh."),(0,o.kt)("p",null,"First, let's make sure your data was properly saved.\nUsing a terminal command window:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh <robot-name>\n")),(0,o.kt)("p",null,"You should replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<robot-name>")," with your actual robot name, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"element-vegetable"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If having issues further instructions for how to do this are\nlisted\n",(0,o.kt)("a",{parentName:"p",href:"/docs/brain/brain-apps#ssh-configuration"},(0,o.kt)("strong",{parentName:"a"},"here")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once connected: Verify the logs are present on the Amiga"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /mnt/data/ # navigate to where the logs are located\nls\n# In the output you should see the name of the logs you just\n#recorded.\n# You can see its the right log by the date in the of its name.\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open a new local terminal window (",(0,o.kt)("strong",{parentName:"li"},"not ssh"),") to copy the files over")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scp -rp <robot-name>:/mnt/data/<name-of-log-file> ~/path/in/local/directory\n\n# Replace <robot-name> with what is shown as the name in the SSH terminal\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are receiving an error like: No such file or directory"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Check to see if your path is right, both on your local machine,\nand the ",(0,o.kt)("strong",{parentName:"li"},"ssh")," terminal"),(0,o.kt)("li",{parentName:"ul"},"Check to make sure you are entering this command in your local\nterminal and not the Amiga"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The files should begin to download, and when it reaches 100%\nthe download is complete, and the file transfer it done!"),(0,o.kt)("li",{parentName:"ul"},"Feel free to rename the file once it has transferred to your local PC")),(0,o.kt)("p",null,"Congratulations you have now completed this tutorial, and should\nnow know how to record field data and offload it!"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to collect data via terminal commands, check out\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://amiga.farm-ng.com/docs/examples/events_recorder/"},(0,o.kt)("strong",{parentName:"a"},"Events Recorder"))," tutorial.")))}p.isMDXComponent=!0}}]);