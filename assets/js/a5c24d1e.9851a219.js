"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2390],{4762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));a(1839);const i={id:"device-streams",title:"02 - Device Streams"},o="Device Streams",s={unversionedId:"tutorials/virtual_joystick/device-streams",id:"tutorials/virtual_joystick/device-streams",title:"02 - Device Streams",description:"In the",source:"@site/docs/tutorials/virtual_joystick/02_device_streams.md",sourceDirName:"tutorials/virtual_joystick",slug:"/tutorials/virtual_joystick/device-streams",permalink:"/docs/tutorials/virtual_joystick/device-streams",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/tutorials/virtual_joystick/02_device_streams.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"device-streams",title:"02 - Device Streams"},sidebar:"examples",previous:{title:"01 - Template Starter",permalink:"/docs/tutorials/virtual_joystick/template-starter"},next:{title:"03 - Virtual Joystick Widget",permalink:"/docs/tutorials/virtual_joystick/virtual-joystick-widget"}},p={},m=[{value:"Camera stream",id:"camera-stream",level:2},{value:"Canbus stream",id:"canbus-stream",level:2},{value:"Kivy definition",id:"kivy-definition",level:3},{value:"Python canbus stream",id:"python-canbus-stream",level:3},{value:"Setup",id:"setup",level:4},{value:"Connection logic",id:"connection-logic",level:4},{value:"Read the stream",id:"read-the-stream",level:4},{value:"Decode and display",id:"decode-and-display",level:4},{value:"Other notes",id:"other-notes",level:3},{value:"<code>farm_ng</code> Imports",id:"farm_ng-imports",level:4},{value:"Command line Arguments",id:"command-line-arguments",level:4},{value:"entry.sh",id:"entrysh",level:4},{value:"App icon",id:"app-icon",level:4},{value:"<code>app_func()</code>",id:"app_func",level:4},{value:"Run it",id:"run-it",level:3},{value:"References",id:"references",level:3}],l={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"device-streams"},"Device Streams"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/virtual-joystick/blob/main/src/res/main.kv"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"src/res/main.kv"))),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/virtual-joystick/blob/main/src/main.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"src/main.py"))),"\nfiles of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/virtual-joystick"},(0,r.kt)("strong",{parentName:"a"},"virtual-joystick")),"\napp we define the kivy app and Python implementation of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualJoystickApp"),"."),(0,r.kt)("p",{parentName:"admonition"},"You should open these files for reference as you follow along.")),(0,r.kt)("h2",{id:"camera-stream"},"Camera stream"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You should have already gone through the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/camera_streamer/camera-streamer-overview"},(0,r.kt)("strong",{parentName:"a"},"Camera Streamer Tutorial")),"\nbased on the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/camera-streamer"},(0,r.kt)("strong",{parentName:"a"},"camera-streamer")),"\nexample app.\nUnderstanding these instructions will rely on understanding those!")),(0,r.kt)("p",null,"You can see we define the camera stream in the same as in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/camera_streamer/camera-streamer-overview"},(0,r.kt)("strong",{parentName:"a"},"Camera Streamer Tutorial")),".\nThis time however, we nest the ",(0,r.kt)("inlineCode",{parentName:"p"},"TabbedPanel")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," widgets\nin a\n",(0,r.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/api-kivy.uix.boxlayout.html"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"BoxLayout"))),"\n(with  ",(0,r.kt)("inlineCode",{parentName:"p"},"orientation: horizontal"),") so we can arrange some other\nwidgets next to our ",(0,r.kt)("inlineCode",{parentName:"p"},"TabbedPanel"),"."),(0,r.kt)("h2",{id:"canbus-stream"},"Canbus stream"),(0,r.kt)("h3",{id:"kivy-definition"},"Kivy definition"),(0,r.kt)("p",null,"The first ",(0,r.kt)("inlineCode",{parentName:"p"},"Widget")," we will arrange next to the ",(0,r.kt)("inlineCode",{parentName:"p"},"TabbedPanel")," is\nanother ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout")," (with  ",(0,r.kt)("inlineCode",{parentName:"p"},"orientation: vertical"),"), used for\ndisplaying real time data streamed by the canbus client."),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout")," will contain multiple widgets displaying\ninformation streamed from the canbus service, through the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/canbus_client.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"CanbusClient"))),".\nOne of the easiest widgets to add for conveying information is\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/api-kivy.uix.label.html"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Label"))),"\nwidget, so we arrange a few of these (and potentially some empty\nplaceholder widgets) in the box layout.\nUnlike with a ",(0,r.kt)("inlineCode",{parentName:"p"},"RelativeLayout"),", where you can position each\nwidget precisely, a ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout")," requires empty widgets if you\nwant to leave some blank space."),(0,r.kt)("p",null,"You can see the use of\n",(0,r.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_x"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"size_hint_x"))),"\n&\n",(0,r.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_y"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"size_hint_y"))),"\nto adjust the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"relative"))," size of the widgets to their parent.\nFor us, this means shrinking the relative size of the ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayout"),"\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"Label")," widgets displaying the streamed canbus values (in the\nx direction)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reference:\n",(0,r.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.boxlayout.html"},(0,r.kt)("strong",{parentName:"a"},"Box Layout"))),(0,r.kt)("li",{parentName:"ul"},"Reference:\n",(0,r.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.label.html"},(0,r.kt)("strong",{parentName:"a"},"Label")))),(0,r.kt)("h3",{id:"python-canbus-stream"},"Python canbus stream"),(0,r.kt)("p",null,"You will notice in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/virtual-joystick/blob/main/src/main.py"},(0,r.kt)("inlineCode",{parentName:"a"},"src/main.py")),"\nthat there is a lot of similarity between the ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_camera")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"stream_canbus")," methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualJoystickApp"),"."),(0,r.kt)("p",null,'Both methods handle connecting to a "server streaming" RPC, as\ndescribed in ',(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/docs/what-is-grpc/core-concepts/"},(0,r.kt)("strong",{parentName:"a"},"gRPC core concepts")),".\nThey only differ in the client used to connect\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/oak/camera_client.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"OakCameraClient"))),"\nvs\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/canbus_client.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"CanbusClient"))),")\nand what is done with the received message."),(0,r.kt)("h4",{id:"setup"},"Setup"),(0,r.kt)("p",null,"This is just like\n",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/camera_streamer/camera-stream#setup"},(0,r.kt)("strong",{parentName:"a"},"Camera Streamer - Camera Stream - Setup")),"\nsection, except we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanbusClient"),"  to connect to the\ncanbus service rather than the ",(0,r.kt)("inlineCode",{parentName:"p"},"OakCameraClient")," connecting to\nthe oak camera service."),(0,r.kt)("h4",{id:"connection-logic"},"Connection logic"),(0,r.kt)("p",null,"This is just like\n",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/camera_streamer/camera-stream#connection-logic"},(0,r.kt)("strong",{parentName:"a"},"Camera Streamer - Camera Stream - Connection Logic")),"\nsection, except we use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/canbus_client.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"stream"))),"\nmethod of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanbusClient")," to read the response stream.\nThis wraps the GRPC service stub ",(0,r.kt)("inlineCode",{parentName:"p"},"streamCanbusMessages"),"."),(0,r.kt)("h4",{id:"read-the-stream"},"Read the stream"),(0,r.kt)("p",null,"This is just like\n",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/camera_streamer/camera-stream#read-the-stream"},(0,r.kt)("strong",{parentName:"a"},"Camera Streamer - Camera Stream - Read the Stream")),"\nsection, except we receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamCanbusReply")," proto message,\ndefined in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto"},(0,r.kt)("strong",{parentName:"a"},"canbus.proto")),",\nfrom our canbus service."),(0,r.kt)("p",null,"This ultimately contains (in a nested proto definition) an\niterable container where each message is a proto defined\n",(0,r.kt)("inlineCode",{parentName:"p"},"RawCanbusMessage"),", also defined in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto"},(0,r.kt)("strong",{parentName:"a"},"canbus.proto"))),(0,r.kt)("h4",{id:"decode-and-display"},"Decode and display"),(0,r.kt)("p",null,"We parse every proto defined ",(0,r.kt)("inlineCode",{parentName:"p"},"RawCanbusMessage")," to extract the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"AmigaTpdo1"))),"\n(Amiga state) message, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"RawCanbusMessage")," contains an\n",(0,r.kt)("inlineCode",{parentName:"p"},"AmigaTpdo1")," message."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"AmigaTpdo1"))),"\nmessage comes from the dashboard and contains the:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"state of the Amiga (AmigaControlState)"),(0,r.kt)("li",{parentName:"ul"},"measured speed (forward positive)"),(0,r.kt)("li",{parentName:"ul"},"measured angular rate (left positive)")),(0,r.kt)("p",{parentName:"admonition"},"This is the information you'll use for closed loop control!")),(0,r.kt)("p",null,"The canbus service reformats and forwards all CAN messages to the\ncanbus client, so there are a lot of messages to filter out.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"parse_amiga_tpdo1_proto"))),"\nreturns ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," if the ",(0,r.kt)("inlineCode",{parentName:"p"},"RawCanbusMessage")," does not contain an ",(0,r.kt)("inlineCode",{parentName:"p"},"AmigaTpdo1")," message."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you're curious to learn more about CAN bus in general, see\n",(0,r.kt)("a",{parentName:"p",href:"https://www.csselectronics.com/pages/can-bus-simple-intro-tutorial"},(0,r.kt)("strong",{parentName:"a"},"CSS Electronics - CAN Bus Explained")),".\nIn this virtual joystick tutorial, we are only teaching you to\ninteract with the canbus client through Amiga state messages.")),(0,r.kt)("p",null,"To display the values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Label")," widgets we use a kivy\n",(0,r.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/api-kivy.properties.html#kivy.properties.StringProperty"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"StringProperty"))),"\nfor each value.\nThese are bound to the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"Label")," widget text fields,\nso we only need to update the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"StringProperty")," and\nwe do not need to update the text field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Label")," explicitly."),(0,r.kt)("h3",{id:"other-notes"},"Other notes"),(0,r.kt)("h4",{id:"farm_ng-imports"},(0,r.kt)("inlineCode",{parentName:"h4"},"farm_ng")," Imports"),(0,r.kt)("p",null,"We import the necessary ",(0,r.kt)("inlineCode",{parentName:"p"},"farm_ng")," libraries for creating the\ncamera and canbus clients and interacting with both services."),(0,r.kt)("h4",{id:"command-line-arguments"},"Command line Arguments"),(0,r.kt)("p",null,"We now have two device services to connect to, an oak camera and\nthe canbus, running on different ports.\nWe name them accordingly and set them both as required."),(0,r.kt)("p",null,"Similar to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/camera_streamer/camera-stream#command-line-arguments"},(0,r.kt)("strong",{parentName:"a"},"Camera Streamer - Camera Stream - Command line Arguments")),",\nwe add a few command line arguments used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"OakCameraClient"),"\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanbusClient")," at the bottom of the app and pass these to\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualJoystickApp")," class through the constructor."),(0,r.kt)("p",null,"These include the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," of the brain (common to all devices)\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," of both devices we will stream, as well as the\n",(0,r.kt)("inlineCode",{parentName:"p"},"stream_every_n")," argument for the oak device."),(0,r.kt)("h4",{id:"entrysh"},"entry.sh"),(0,r.kt)("p",null,"As in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/camera_streamer/camera-stream#entrysh"},(0,r.kt)("strong",{parentName:"a"},"Camera Streamer - Camera Stream - entry.sh")),",\nthe required arguments are added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"entry.sh")," file.\nSince ",(0,r.kt)("inlineCode",{parentName:"p"},"camera_port")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"canbus_port")," are required, we add\n",(0,r.kt)("inlineCode",{parentName:"p"},"--camera-port 50051")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--canbus-port 50060")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"python"),"\ncall in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/virtual-joystick/blob/main/entry.sh"},(0,r.kt)("inlineCode",{parentName:"a"},"entry.sh")),"\nto set the script to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Oak0")," device and the canbus."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use a different oak device than ",(0,r.kt)("inlineCode",{parentName:"p"},"Oak0"),", hard code\nthe corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"camera-port")," value.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Oak1")," would be on ",(0,r.kt)("inlineCode",{parentName:"p"},"50052"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Oak2")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"50053"),", and so on...")),(0,r.kt)("p",null,"When launching your app on the Brain with the button, any\nrequired args being passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," must already be specified\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"entry.sh"),"."),(0,r.kt)("p",null,"When launching your app on your computer, or on the brain but\nfrom an SSH terminal, you can add additional arguments to change\nthe default value of the optional arguments.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"$@")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," call in ",(0,r.kt)("inlineCode",{parentName:"p"},"entry.sh")," is what allows for this."),(0,r.kt)("p",null,"For example, to run the app from your computer, while the camera\nruns on the brain nearby:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"cd joystick_tutorial/\n./entry.sh --address <amiga ip address>\n")),(0,r.kt)("p",null,"To run the app on the amiga, with changing a default command line\narg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"ssh amiga\n    # Password : amiga\n# Now in an ssh terminal\ncd ~/apps/\n./joystick_tutorial/entry.sh --stream-every-n 2\n")),(0,r.kt)("h4",{id:"app-icon"},"App icon"),(0,r.kt)("p",null,"We replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"app_logo.png")," with an icon from ",(0,r.kt)("a",{parentName:"p",href:"https://fonts.google.com/icons"},"https://fonts.google.com/icons"),".\nWhen developing your own app, you can:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Choose a suitable symbol or icon for your app"),(0,r.kt)("li",{parentName:"ol"},"Tweak the appearance parameters, including moving to the\nlargest 'Optical Size' available"),(0,r.kt)("li",{parentName:"ol"},"Export it as a ",(0,r.kt)("inlineCode",{parentName:"li"},".png")," file")),(0,r.kt)("p",null,"For following along with this tutorial, feel free to download the\nimage from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/virtual-joystick/blob/main/src/assets/app_logo.png"},"src/assets/app_logo.png"),"."),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The brain may not display the app icon immediately when it is\ncloned onto your machine.\nYou can trigger a ",(0,r.kt)("inlineCode",{parentName:"p"},"Refresh App Buttons")," on the settings screen to\napply the newly downloaded app icon.\nThis also is applicable if you change the app icon and want to\ndisplay the new icon.")),(0,r.kt)("h4",{id:"app_func"},(0,r.kt)("inlineCode",{parentName:"h4"},"app_func()")),(0,r.kt)("p",null,"Here we create the ",(0,r.kt)("inlineCode",{parentName:"p"},"OakCameraClient")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CanbusClient")," and add\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_camera")," ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_canbus")," asyncio tasks to our tasks\nlist."),(0,r.kt)("h3",{id:"run-it"},"Run it"),(0,r.kt)("p",null,"Run the app on the brain by launching with the app button or run\nit through a terminal as described in\n",(0,r.kt)("a",{parentName:"p",href:"#command-line-arguments"},"Command line arguments"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure all of your cables are disconnected from the Amiga\nbefore driving around!")),(0,r.kt)("p",null,"You should see the ",(0,r.kt)("inlineCode",{parentName:"p"},"AmigaTpdo1")," values update in realtime as you\ndrive the amiga and change between various command states. See\n",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/control-states"},(0,r.kt)("strong",{parentName:"a"},"Amiga Control States")),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"AmigaControlState"))),"\nfor more information on the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," parameter."),(0,r.kt)("p",null,"You should also see camera stream to the right of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"AmigaTpdo1")," values from the canbus.\nCheck all four tabs to investigate the different camera streams\nprovided by the oak camera."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/200481937-5fc317bc-614d-4446-89f5-9df70471c3f6.png",alt:"camera_stream"})),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/canbus_client.py"},(0,r.kt)("strong",{parentName:"a"},"farm_ng.canbus.canbus_client"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/farm_ng/canbus/packet.py"},(0,r.kt)("strong",{parentName:"a"},"farm_ng.canbus.packet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto"},(0,r.kt)("strong",{parentName:"a"},"canbus.proto")))))}d.isMDXComponent=!0}}]);