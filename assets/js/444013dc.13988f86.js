"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[680],{6934:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));a(1839);const i={id:"people-detection",title:"People Detection"},r=void 0,l={unversionedId:"examples/people_detection/people-detection",id:"examples/people_detection/people-detection",title:"People Detection",description:"This example shows how to use the farm-ng-amiga library to detect people in a video stream.",source:"@site/docs/examples/people_detection/people_detection.md",sourceDirName:"examples/people_detection",slug:"/examples/people_detection/",permalink:"/docs/examples/people_detection/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/people_detection/people_detection.md",tags:[],version:"current",frontMatter:{id:"people-detection",title:"People Detection"},sidebar:"examples",previous:{title:"Camera Client",permalink:"/docs/examples/camera_client/"},next:{title:"00 - Introduction",permalink:"/docs/tutorials/introduction/tutorial-introduction"}},p={},s=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:3},{value:"2. Setup",id:"2-setup",level:3},{value:"3. Install Dependencies",id:"3-install-dependencies",level:3},{value:"Download the model data",id:"download-the-model-data",level:4},{value:"4. Run the service",id:"4-run-the-service",level:3},{value:"5. Run the Client",id:"5-run-the-client",level:3},{value:"6. Code overview",id:"6-code-overview",level:3},{value:"Link to <code>people_detection/main.py</code>",id:"link-to-people_detectionmainpy",level:3}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"farm-ng-amiga")," library to detect people in a video stream."),(0,o.kt)("p",null,"It also shows how to implement a service and client via grpc."),(0,o.kt)("p",null,"The requirements to run this example are to have a ",(0,o.kt)("a",{parentName:"p",href:"/docs/brain/"},(0,o.kt)("strong",{parentName:"a"},"farm-ng brain"))," running Oak cameras and that your PC is on the same local network as the brain."),(0,o.kt)("p",null,"For testing you can use your webcam as a replacement, which we will go over later in this tutorial."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/64480560/229892116-e99de4d2-577a-4c38-876f-4ba03429d52c.gif",alt:"PD gif"})),(0,o.kt)("h3",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,o.kt)("a",{parentName:"h3",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,o.kt)("h3",{id:"2-setup"},"2. Setup"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the example in the brain ADK virtual environment.")),(0,o.kt)("p",null,"Create first a virtual environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#assuming you have the farm-ng-amiga repository.\ncd farm-ng-amiga/py/examples/people_detection\n")),(0,o.kt)("h3",{id:"3-install-dependencies"},"3. Install Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,o.kt)("h4",{id:"download-the-model-data"},"Download the model data"),(0,o.kt)("p",null,"In this example we use MobileNet SSD from tensorflow to be implemented in opencv."),(0,o.kt)("p",null,"Download the model weights and architecture:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir models\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/rdeepc/ExploreOpencvDnn/raw/master/models/frozen_inference_graph.pb -O models/frozen_inference_graph.pb\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/rdeepc/ExploreOpencvDnn/raw/master/models/ssd_mobilenet_v2_coco_2018_03_29.pbtxt -O models/ssd_mobilenet_v2_coco_2018_03_29.pbtxt\n")),(0,o.kt)("h3",{id:"4-run-the-service"},"4. Run the service"),(0,o.kt)("p",null,"Open one terminal or in that same terminal run the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python service.py --port 50090 --models-dir models/\n# INFO:__main__:Loaded model: /home/edgar/software/farm-ng-amiga/py/examples/people_detection/models\n# INFO:__main__:Starting server on port 50090\n# INFO:__main__:Server started\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/64480560/229893034-7302d479-692a-4907-98e1-87a31b60fc19.png",alt:"server"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"With this command, you can run this on either your computer or your Amiga!")),(0,o.kt)("h3",{id:"5-run-the-client"},"5. Run the Client"),(0,o.kt)("p",null,"In another terminal, run the a pipeline using the client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --port-camera 50051 --port-detector 50090\n")),(0,o.kt)("p",null,"And you should see a window with the video stream and the detected people. The server is a process receives the decoded images then computes an AI model and returns the results. If you have a service on your machine and the client consume from the robot, there is the transmission overhead of grpc from the robot-camera to you laptop (service)."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also run this command from either your computer or your Amiga.")),(0,o.kt)("h3",{id:"6-code-overview"},"6. Code overview"),(0,o.kt)("p",null,"Here you can review the code and gain a closer look at how this example is done."),(0,o.kt)("h3",{id:"link-to-people_detectionmainpy"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/people_detection/main.py"},"Link to ",(0,o.kt)("inlineCode",{parentName:"a"},"people_detection/main.py"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We highgly recommend to have some basic knowledge about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"asyncio"))),".")))}d.isMDXComponent=!0}}]);