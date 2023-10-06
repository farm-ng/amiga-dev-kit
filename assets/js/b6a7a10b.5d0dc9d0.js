"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7124],{5984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));a(1839);const l={id:"file-reader-gps",title:"File Reader GPS"},r="File Reader GPS Example",o={unversionedId:"examples/file_reader_gps/file-reader-gps",id:"examples/file_reader_gps/file-reader-gps",title:"File Reader GPS",description:"This file_reader_gps_example",source:"@site/docs/examples/file_reader_gps/README.md",sourceDirName:"examples/file_reader_gps",slug:"/examples/file_reader_gps/",permalink:"/docs/examples/file_reader_gps/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/file_reader_gps/README.md",tags:[],version:"current",frontMatter:{id:"file-reader-gps",title:"File Reader GPS"},sidebar:"examples",previous:{title:"File Reader CAN",permalink:"/docs/examples/file_reader_can/"},next:{title:"File Converter",permalink:"/docs/examples/file_converter/"}},p={},s=[{value:"Install the farm-ng Brain ADK package",id:"install-the-farm-ng-brain-adk-package",level:2},{value:"Download the example log file",id:"download-the-example-log-file",level:2},{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:2},{value:"Run example",id:"run-example",level:2}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-reader-gps-example"},"File Reader GPS Example"),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/file_reader_gps/main.py"},(0,i.kt)("strong",{parentName:"a"},"file_reader_gps_example")),"\nprovides a utility for reading and parsing GPS messages from the event file.\nIt can process two types of GPS messages: ",(0,i.kt)("inlineCode",{parentName:"p"},"relposned")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pvt"),".\nThe user specifies the type of GPS message to parse, and the script reads the corresponding data,\nunpacks it, and prints it to the console."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are two types of GPS messages: ",(0,i.kt)("strong",{parentName:"p"},"PVT")," and ",(0,i.kt)("strong",{parentName:"p"},"RELPOSNED"),"."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"PVT")," (Position, Velocity, and Time) messages provide the all-in-one solution: position, velocity,\nand time.\nIt contains details like longitude, latitude, altitude, speed, and UTC time."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"RELPOSNED"),' (Relative Positioning) messages provide relative position\ninformation in a North, East, Down (N-E-D) frame. It\'s mainly used for applications requiring relative\npositioning between two receivers, often as a part of Real Time Kinematics (RTK) solutions.\nIt shows the difference in position between a "moving" receiver and a "fixed" reference receiver.')),(0,i.kt)("h2",{id:"install-the-farm-ng-brain-adk-package"},"Install the ",(0,i.kt)("a",{parentName:"h2",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,i.kt)("h2",{id:"download-the-example-log-file"},"Download the example log file"),(0,i.kt)("p",null,"Now you are going to download the log file that you will use in\nthis example."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/examples_log_file/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin"},(0,i.kt)("strong",{parentName:"a"},"Click here to download"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you want to use your own log file, there is another tutorial\nthat walks you through getting data directly from the Amiga\n",(0,i.kt)("a",{parentName:"p",href:"/docs/examples/import_log_file/"},(0,i.kt)("strong",{parentName:"a"},"here")))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"First, let's create a virtual environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Let's install the dependencies required to run this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd py/examples/file_reader_gps\npip install -r requirements.txt\n")),(0,i.kt)("h2",{id:"run-example"},"Run example"),(0,i.kt)("p",null,"Specify the file (download before)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --file-name <path-to-your-file>\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You should replace ","<","path-to-your-file",">"," with the path to your events binary file (",(0,i.kt)("strong",{parentName:"p"},".bin"),").")),(0,i.kt)("admonition",{title:"Tip",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can also specify a gps interface to read by adding the flag ",(0,i.kt)("strong",{parentName:"p"},"--topic-name"))),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --file-name <path-to-your-file> --topic-name relposned\npython main.py --file-name <path-to-your-file> --topic-name pvt\n")),(0,i.kt)("p",null,"If everything worked correctly you should now see a large stream\nof text come up in your terminal!"),(0,i.kt)("p",null,"The output should look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"All available topics: ['/gps/pvt', '/gps/relposned']\nFound 11 packets of gps/relposned\n\nMessage stamp: 92614.926564468\nGPS time: 1695861128.4\nRelative pose north: 2680.3909000000003\nRelative pose east: -4297.41093\nRelative pose down: -4.00042\nRelative pose length: 506481.000063\nAccuracy north: 0.0010000000474974513\nAccuracy east: 0.0010000000474974513\nAccuracy down: 0.0011399999493733048\nCarrier solution: 2\nGNSS fix ok: True\n--------------------------------------------------\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congrats you are done!")))}d.isMDXComponent=!0}}]);