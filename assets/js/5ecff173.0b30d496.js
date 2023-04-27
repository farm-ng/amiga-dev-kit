"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2989],{2879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));a(1839);const r={id:"camera-stream",title:"03 - Python Implementation"},o="Python Implementation",s={unversionedId:"tutorials/camera_streamer/camera-stream",id:"tutorials/camera_streamer/camera-stream",title:"03 - Python Implementation",description:"The Python implementation of the",source:"@site/docs/tutorials/camera_streamer/03_camera_stream.md",sourceDirName:"tutorials/camera_streamer",slug:"/tutorials/camera_streamer/camera-stream",permalink:"/docs/tutorials/camera_streamer/camera-stream",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/tutorials/camera_streamer/03_camera_stream.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"camera-stream",title:"03 - Python Implementation"},sidebar:"examples",previous:{title:"02 - Kivy Definition",permalink:"/docs/tutorials/camera_streamer/kivy-definition"},next:{title:"00 - Virtual Joystick Overview",permalink:"/docs/tutorials/virtual_joystick/virtual-joystick-overview"}},l={},m=[{value:"Add a camera stream",id:"add-a-camera-stream",level:2},{value:"Setup",id:"setup",level:3},{value:"Connection logic",id:"connection-logic",level:3},{value:"Read the stream",id:"read-the-stream",level:3},{value:"Decode and display",id:"decode-and-display",level:3},{value:"Other notes",id:"other-notes",level:2},{value:"<code>farm_ng</code> Imports",id:"farm_ng-imports",level:3},{value:"Image decoding",id:"image-decoding",level:3},{value:"Command line Arguments",id:"command-line-arguments",level:3},{value:"entry.sh",id:"entrysh",level:3},{value:"App icon",id:"app-icon",level:3},{value:"<code>app_func()</code>",id:"app_func",level:3},{value:"Run it",id:"run-it",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python-implementation"},"Python Implementation"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The Python implementation of the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/camera-streamer"},(0,i.kt)("strong",{parentName:"a"},"camera-streamer")),"\napp can be found at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/camera-streamer/blob/main/src/main.py"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"src/main.py"))),".\nYou should open that file for reference as you follow along.")),(0,i.kt)("h2",{id:"add-a-camera-stream"},"Add a camera stream"),(0,i.kt)("p",null,"The main method we'll add to our app is a camera stream.\nThis will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"OakCameraClient")))),(0,i.kt)("li",{parentName:"ul"},"Display images as kivy ",(0,i.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.label.html"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Image"))),"\nwidgets in our ",(0,i.kt)("inlineCode",{parentName:"li"},"TabbedPanel"),".")),(0,i.kt)("p",null,'This task listens to the camera client\'s stream and populates the\ntabbed panel with all 4 image streams from the oak camera.\nIn this task we connect to a "server streaming" RPC, as described\nin ',(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/what-is-grpc/core-concepts/"},(0,i.kt)("strong",{parentName:"a"},"gRPC core concepts")),"."),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," of the kivy ",(0,i.kt)("inlineCode",{parentName:"p"},"App"),' is created, we loop "forever"\n(until the app is closed).'),(0,i.kt)("p",null,"First we check the state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"OakCameraClient"),", which forwards\nthe state of the Oak camera service.\nWhen the service is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"IDLE")," state it is available, but no\nclient has yet connected to it.\nWhen the service is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"RUNNING")," state it is available and\nhas a client connected to it.\nIn this case, that's your ",(0,i.kt)("inlineCode",{parentName:"p"},"OakCameraClient"),"!"),(0,i.kt)("h3",{id:"connection-logic"},"Connection logic"),(0,i.kt)("p",null,"If the service is in one of these available states (",(0,i.kt)("inlineCode",{parentName:"p"},"IDLE")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"RUNNING"),"), you want to create a stream with your client."),(0,i.kt)("p",null,"If the service is not in one of these available states (",(0,i.kt)("inlineCode",{parentName:"p"},"IDLE")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"RUNNING"),"), you want to cancel the stream (if it exists) and\nre-create it once it is again available."),(0,i.kt)("p",null,"When creating the ",(0,i.kt)("inlineCode",{parentName:"p"},"response_stream")," we use the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"stream_frames()"))),"\ncall.\nThis wraps the GRPC service stub ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamFramesRequest"),", which\ntakes the ",(0,i.kt)("inlineCode",{parentName:"p"},"every_n")," argument used to throttle the rate of images\nin the stream."),(0,i.kt)("h3",{id:"read-the-stream"},"Read the stream"),(0,i.kt)("p",null,"The asyncio grpc stream allows your client to wait, in a\nnon-blocking way, for a new message from the service to be put on\nthe stream queue."),(0,i.kt)("p",null,"If a service crashes unexpectedly, it is ideal to handle this\ngracefully with the client."),(0,i.kt)("p",null,"We receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamFramesReply")," and access the ",(0,i.kt)("inlineCode",{parentName:"p"},"OakSyncFrame"),"\nproto message it contains, both defined in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto"},(0,i.kt)("strong",{parentName:"a"},"oak.proto")),",\nfrom the response.\nThis contains all of the available camera streams from the Oak\ndevice you are connected to.\nRemember, the Oak camera devices have 3 cameras and, in this\ncase, send 4 image streams (rgb, left, right, & disparity)."),(0,i.kt)("h3",{id:"decode-and-display"},"Decode and display"),(0,i.kt)("p",null,"Finally, we can decode and display the images received from the\nstream."),(0,i.kt)("p",null,"For each of the image streams, we update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," widget\n",(0,i.kt)("inlineCode",{parentName:"p"},"Texture")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TabbedPanel")," with the corresponding decoded\nimage.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," widgets in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TabbedPanel")," accessed by their kivy\nid."),(0,i.kt)("h2",{id:"other-notes"},"Other notes"),(0,i.kt)("h3",{id:"farm_ng-imports"},(0,i.kt)("inlineCode",{parentName:"h3"},"farm_ng")," Imports"),(0,i.kt)("p",null,"We import the necessary ",(0,i.kt)("inlineCode",{parentName:"p"},"farm_ng")," libraries for creating the\ncamera client and interacting with the camera service."),(0,i.kt)("h3",{id:"image-decoding"},"Image decoding"),(0,i.kt)("p",null,"We will use ",(0,i.kt)("inlineCode",{parentName:"p"},"TurboJPEG")," as the image decoder (it is much faster\nthan kivy's default image decoder), so we add that as an import\nin our ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," file."),(0,i.kt)("p",null,"In order to import this, we must add the library ",(0,i.kt)("inlineCode",{parentName:"p"},"PyTurboJPEG")," to\nthe\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/camera-streamer/blob/main/setup.cfg"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"setup.cfg"))),"\nfile so the dependency installs."),(0,i.kt)("p",null,"We also construct an instance of this image decoder and assign it\nas a class variable of our ",(0,i.kt)("inlineCode",{parentName:"p"},"CameraApp")," so it is not created every\ntime we decode an image."),(0,i.kt)("h3",{id:"command-line-arguments"},"Command line Arguments"),(0,i.kt)("p",null,"We add a few command line arguments used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"OakCameraClient"),"\nat the bottom of the app and pass these to the ",(0,i.kt)("inlineCode",{parentName:"p"},"CameraApp")," class\nthrough the constructor."),(0,i.kt)("p",null,"These include the ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," of the oak device we will\nstream and the ",(0,i.kt)("inlineCode",{parentName:"p"},"stream_every_n")," argument that allows you to\nthrottle the stream rate of your camera, if you wish to save\ncomputational resources."),(0,i.kt)("h3",{id:"entrysh"},"entry.sh"),(0,i.kt)("p",null,"There are ",(0,i.kt)("strong",{parentName:"p"},"required arguments")," that must be set in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/camera-streamer/blob/main/entry.sh"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"entry.sh"))),"\nfile and ",(0,i.kt)("strong",{parentName:"p"},"optional arguments")," that take on a default value,\nunless overridden in the command line."),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," is required, we add ",(0,i.kt)("inlineCode",{parentName:"p"},"--port 50051")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"python"),"\ncall in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/camera-streamer/blob/main/entry.sh"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"entry.sh"))),"\nto set the script to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Oak0")," device (",(0,i.kt)("inlineCode",{parentName:"p"},"Oak1")," would be on ",(0,i.kt)("inlineCode",{parentName:"p"},"50052"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Oak2")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"50053"),",\nand so on)."),(0,i.kt)("p",null,"When launching your app on the Brain with the button, any\nrequired args being passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," must already be specified\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"entry.sh"),"."),(0,i.kt)("p",null,"When launching your app on your computer, or on the brain but\nfrom an SSH terminal, you can add additional arguments to change\nthe default value of the optional arguments.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"$@")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," call in ",(0,i.kt)("inlineCode",{parentName:"p"},"entry.sh")," is what allows for this."),(0,i.kt)("p",null,"For example, to run the app from your computer, while the camera\nruns on the brain nearby:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"cd camera_tutorial/\n./entry.sh --address <amiga ip address>\n")),(0,i.kt)("p",null,"To run the app on the amiga, with changing a default command line\narg:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"ssh amiga\n    # Password: amiga\n# Now in an ssh terminal\ncd ~/apps/\n./camera_tutorial/entry.sh --stream-every-n 2\n")),(0,i.kt)("h3",{id:"app-icon"},"App icon"),(0,i.kt)("p",null,"We replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"app_logo.png")," with an icon from\n",(0,i.kt)("a",{parentName:"p",href:"https://fonts.google.com/icons"},"https://fonts.google.com/icons"),".\nWhen developing your own app, you can:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose a suitable symbol or icon for your app"),(0,i.kt)("li",{parentName:"ol"},"Tweak the appearance parameters, including moving to the\nlargest 'Optical Size' available"),(0,i.kt)("li",{parentName:"ol"},"Export it as a ",(0,i.kt)("inlineCode",{parentName:"li"},".png")," file")),(0,i.kt)("p",null,"For following along with this tutorial, feel free to download the\nimage from\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/camera-streamer/blob/main/src/assets/app_logo.png"},(0,i.kt)("strong",{parentName:"a"},"src/assets/app_logo.png")),"."),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The brain may not display the app icon immediately when it is\ncloned onto your machine.\nYou can trigger a ",(0,i.kt)("inlineCode",{parentName:"p"},"Refresh App Buttons")," on the settings screen to\napply the newly downloaded app icon.\nThis also is applicable if you change the app icon and want to\ndisplay the new icon.")),(0,i.kt)("h3",{id:"app_func"},(0,i.kt)("inlineCode",{parentName:"h3"},"app_func()")),(0,i.kt)("p",null,"Here we create the ",(0,i.kt)("inlineCode",{parentName:"p"},"OakCameraClient")," and add the ",(0,i.kt)("inlineCode",{parentName:"p"},"stream_camera"),"\nasyncio task to our tasks list."),(0,i.kt)("h2",{id:"run-it"},"Run it"),(0,i.kt)("p",null,"Run the app on the brain by launching with the app button or run\nit through a terminal as described in\n",(0,i.kt)("a",{parentName:"p",href:"#command-line-arguments"},(0,i.kt)("strong",{parentName:"a"},"Command line arguments")),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/216075393-6e578a01-677e-4279-b224-70fd3f73ce5f.png",alt:"camera-streamer"})))}d.isMDXComponent=!0}}]);