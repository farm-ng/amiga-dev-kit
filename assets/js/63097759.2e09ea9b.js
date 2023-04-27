"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1455],{2592:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));t(1839);const o={id:"file-reader",title:"File Reader"},i="File Reader Example",r={unversionedId:"examples/file_reader/file-reader",id:"examples/file_reader/file-reader",title:"File Reader",description:"In this example you will learn how to upload a given log file and",source:"@site/docs/examples/file_reader/README.md",sourceDirName:"examples/file_reader",slug:"/examples/file_reader/",permalink:"/docs/examples/file_reader/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/file_reader/README.md",tags:[],version:"current",frontMatter:{id:"file-reader",title:"File Reader"},sidebar:"examples",previous:{title:"Record and Access data",permalink:"/docs/examples/import_log_file/"},next:{title:"File Converter",permalink:"/docs/examples/file_converter/"}},d={},p=[{value:"Download the log file",id:"download-the-log-file",level:2},{value:"Optional Make a Data folder",id:"optional-make-a-data-folder",level:2},{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:2},{value:"Run example",id:"run-example",level:2}],s={toc:p};function m(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file-reader-example"},"File Reader Example"),(0,l.kt)("p",null,"In this example you will learn how to upload a given log file and\nuse it to run the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader"},(0,l.kt)("strong",{parentName:"a"},"file_reader example")),"."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you haven't already cloned the ",(0,l.kt)("inlineCode",{parentName:"p"},"farm-ng-amiga")," repository, do\nso ",(0,l.kt)("a",{parentName:"p",href:"/docs/brain/brain-install#clone-the-repository"},(0,l.kt)("strong",{parentName:"a"},"here")),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you already have the log file you want to run with this\nexample you can skip to ",(0,l.kt)("a",{parentName:"p",href:"#setup"},(0,l.kt)("strong",{parentName:"a"},"set up")))),(0,l.kt)("h2",{id:"download-the-log-file"},"Download the log file"),(0,l.kt)("p",null,"Now you are going to download the log file that you will use in\nthis example.\n",(0,l.kt)("a",{parentName:"p",href:"https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/western-growers-2022-12-05/events_12052022115852.bin"},(0,l.kt)("strong",{parentName:"a"},"Click here to download"))),(0,l.kt)("h2",{id:"optional-make-a-data-folder"},"[Optional]"," Make a Data folder"),(0,l.kt)("p",null,"We are going to make a folder that will store all of our log\nfiles, including the one you just downloaded."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd <to-your-base-directory>\nmkdir <data-file>\ncd <data-file>\npwd # the output of this is your <path>\n\n# Now that the file is downloaded you will do the following\n\ncd ~ # navigate to home directory\ncd Downloads\nmv events_12052022115852.bin <path-to-where-data-file-is-above> # moving the data to to data-folder\n")),(0,l.kt)("p",null," Now that you have your log file in the correct place, in your\nterminal navigate to where the repository ",(0,l.kt)("inlineCode",{parentName:"p"},"farm-ng-amiga")," is and\nopen Visual Studio Code."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Create first a virtual environment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd py/examples/file_reader\npip install -r requirements.txt\n")),(0,l.kt)("h2",{id:"run-example"},"Run example"),(0,l.kt)("p",null,"Specify the file (download before)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --file-name <path-from-above>/events_12052022115852.bin\n")),(0,l.kt)("p",null,"Optionally, you can change the camera that is played back from\nthe default of ",(0,l.kt)("inlineCode",{parentName:"p"},"oak0"),". E.g.,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --file-name <path-from-above>/events_12052022115852.bin --camera-name oak1\n")),(0,l.kt)("p",null,"Congratulations two videos should now pop up and play! One should\nbe RGB and one should be disparity (it might be hidden behind the\nRGB window so try moving the RGB window). You have now finished\nrunning this example!"),(0,l.kt)("p",null,"If you want another log file to run here is an example of Amiga\ndriving in a field\n",(0,l.kt)("a",{parentName:"p",href:"https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/jacobs_freedom_1013/events_10132022112259.bin"},"(click to download)")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"There is another tutorial that walks you through getting data\ndirectly from the Amiga\n",(0,l.kt)("a",{parentName:"p",href:"/docs/examples/import_log_file/"},(0,l.kt)("strong",{parentName:"a"},"here")),".")))}m.isMDXComponent=!0}}]);