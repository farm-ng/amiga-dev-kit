"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6193],{4480:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));t(1839);const i={id:"file-converter",title:"File Converter"},o="File Converter Example",r={unversionedId:"examples/file_converter/file-converter",id:"examples/file_converter/file-converter",title:"File Converter",description:"This will take the *.bin log file for a given Oak Camera Stream or snapshot",source:"@site/docs/examples/file_converter/README.md",sourceDirName:"examples/file_converter",slug:"/examples/file_converter/",permalink:"/docs/examples/file_converter/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/file_converter/README.md",tags:[],version:"current",frontMatter:{id:"file-converter",title:"File Converter"},sidebar:"examples",previous:{title:"File Reader",permalink:"/docs/examples/file_reader/"},next:{title:"File Reader Can",permalink:"/docs/examples/file_reader_can/"}},s={},p=[{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:2},{value:"Run example",id:"run-example",level:2},{value:"Additional args",id:"additional-args",level:3}],m={toc:p};function d(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file-converter-example"},"File Converter Example"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This will take the ",(0,l.kt)("inlineCode",{parentName:"p"},"*.bin")," log file for a given Oak Camera Stream or snapshot\ncaptured by the Recorder app on an Amiga brain and convert it to either\n",(0,l.kt)("inlineCode",{parentName:"p"},"*.mp4")," videos or ",(0,l.kt)("inlineCode",{parentName:"p"},"*.jpg")," images for each view stream.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},'You should typically expect 4 view streams per Oak Device ("rgb", "disparity", "left, "right").')),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Create first a virtual environment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/file_converter\npip install -r requirements.txt\n")),(0,l.kt)("h2",{id:"run-example"},"Run example"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Specify the file (download before)"))),(0,l.kt)("p",null,"See ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/docs/examples/import_log_file/"},"How to Record and Access data on the Amiga")),"\nfor instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --file-name events_09162022160753_000000.bin\n")),(0,l.kt)("h3",{id:"additional-args"},"Additional args"),(0,l.kt)("p",null," Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--help")," flag to see all possible arguments for using this tool."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ python main.py --help\n\nusage: Event file converter example. [-h] --file-name FILE_NAME [--output-path OUTPUT_PATH]\n[--camera-name CAMERA_NAME] [--disparity-scale DISPARITY_SCALE] [--video-to-jpg] [--snapshot]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --file-name FILE_NAME\n                        Path to the `events.bin` file.\n  --output-path OUTPUT_PATH\n                        Path to the folder where converted data will be written.\n                        Default: /home/kyle/farm-ng/farm-ng-amiga/py/examples/file_converter\n  --camera-name CAMERA_NAME\n                        The name of the camera to visualize. Default: oak0.\n  --disparity-scale DISPARITY_SCALE\n                        Scale for amplifying disparity color mapping. Default: 1.\n  --video-to-jpg        Use this flag to convert video .bin files to a series of jpg images.\n                        Default for videos is mp4.\n  --snapshot            Use this flag if the .bin file is a single snapshot. Output will be jpg images.\n")),(0,l.kt)("p",null," For instance, you can change the camera that is played back from the default of ",(0,l.kt)("inlineCode",{parentName:"p"},"oak0"),". E.g.,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --file-name events_09162022160753_000000.bin --camera-name oak1\n")),(0,l.kt)("p",null,"You can convert video logs to a stream of jpg images, rather than the default mp4 videos."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --file-name events_09162022160753_000000.bin --camera-name oak1 --video-to-jpg\n")),(0,l.kt)("p",null,'Or you can convert a "snapshot" log to one jpg per view.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --file-name cpy_data/farm_ng/2023_01_06_13_24_33_445932_snapshot_b42d218.bin --snapshot\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: video logs will not convert if the ",(0,l.kt)("inlineCode",{parentName:"p"},"--snapshot")," flag is used.\nSimilarly, snapshot logs will not convert if the ",(0,l.kt)("inlineCode",{parentName:"p"},"--snapshot")," flag is not used.")))}d.isMDXComponent=!0}}]);