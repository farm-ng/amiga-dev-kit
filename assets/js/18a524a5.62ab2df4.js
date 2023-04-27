"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3425],{1042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));n(1839);const i={id:"hello-world",title:"Hello Main Loop Example"},r="Hello Main Loop Example",l={unversionedId:"examples/hello_main_loop/hello-world",id:"examples/hello_main_loop/hello-world",title:"Hello Main Loop Example",description:"Link to hellomainloop/code.py",source:"@site/docs/examples/hello_main_loop/README.md",sourceDirName:"examples/hello_main_loop",slug:"/examples/hello_main_loop/",permalink:"/docs/examples/hello_main_loop/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/hello_main_loop/README.md",tags:[],version:"current",frontMatter:{id:"hello-world",title:"Hello Main Loop Example"},sidebar:"examples",previous:{title:"Examples Index",permalink:"/docs/examples/examples-index"},next:{title:"Cansniffer Example",permalink:"/docs/examples/cansniffer/"}},s={},p=[{value:"Link to <code>hello_main_loop/code.py</code>",id:"link-to-hello_main_loopcodepy",level:2},{value:"Parts required",id:"parts-required",level:2},{value:"Code Breakdown",id:"code-breakdown",level:2},{value:"Imports from <code>lib/</code>",id:"imports-from-lib",level:3},{value:"<code>MainLoop</code>",id:"mainloop",level:4},{value:"<code>TickRepeater</code>",id:"tickrepeater",level:4},{value:"AmigaRpdo1",id:"amigarpdo1",level:4},{value:"AmigaTpdo1",id:"amigatpdo1",level:4},{value:"AmigaControlState",id:"amigacontrolstate",level:4},{value:"CanOpenObject / DASHBOARD_NODE_ID",id:"canopenobject--dashboard_node_id",level:4},{value:"code.py",id:"codepy",level:3},{value:"HelloMainLoopApp",id:"hellomainloopapp",level:4},{value:"Instructions",id:"instructions",level:2},{value:"1. Connection",id:"1-connection",level:3},{value:"2. Load the code",id:"2-load-the-code",level:3},{value:"3. Open the Serial Console",id:"3-open-the-serial-console",level:3},{value:"4. Enable AUTO",id:"4-enable-auto",level:3},{value:"On the dashboard",id:"on-the-dashboard",level:4},{value:"In the serial console",id:"in-the-serial-console",level:4},{value:"5. Drive the robot",id:"5-drive-the-robot",level:3},{value:"6. Release AUTO",id:"6-release-auto",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hello-main-loop-example"},"Hello Main Loop Example"),(0,o.kt)("h2",{id:"link-to-hello_main_loopcodepy"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/hello_main_loop/code.py"},"Link to ",(0,o.kt)("inlineCode",{parentName:"a"},"hello_main_loop/code.py"))),(0,o.kt)("p",null,"This introductory example covers getting set up, interacting with\nthe Amiga, and\nusing auto-control mode to drive your Amiga from a computer\nusing the ",(0,o.kt)("a",{parentName:"p",href:"https://farm-ng.com/products/microcontroller-kit"},(0,o.kt)("strong",{parentName:"a"},"farm-ng microcontroller kit")),"."),(0,o.kt)("p",null,"This example enables driving the Amiga by entering simple fwd /\nrev / left / right keyboard commands the serial port, which the\napp sends over the CAN bus."),(0,o.kt)("h2",{id:"parts-required"},"Parts required"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://farm-ng.com/products/microcontroller-kit"},(0,o.kt)("strong",{parentName:"a"},"farm-ng microcontroller kit"))," (w/ USB-C cable)")),(0,o.kt)("h2",{id:"code-breakdown"},"Code Breakdown"),(0,o.kt)("h3",{id:"imports-from-lib"},"Imports from ",(0,o.kt)("inlineCode",{parentName:"h3"},"lib/")),(0,o.kt)("h4",{id:"mainloop"},(0,o.kt)("inlineCode",{parentName:"h4"},"MainLoop")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MainLoop")," class is used throughout the application layer of\nthe farm-ng firmware.\n",(0,o.kt)("inlineCode",{parentName:"p"},"MainLoop")," contains generic functionality we use on our pendant,\ndashboard, and auxiliary components for constant looping,\nreceiving of CAN messages, sending of regular status updates\ncalled ",(0,o.kt)("inlineCode",{parentName:"p"},"Heartbeats"),", and more.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"MainLoop")," takes an ",(0,o.kt)("inlineCode",{parentName:"p"},"AppClass")," in the constructor, and the\n",(0,o.kt)("inlineCode",{parentName:"p"},"AppClass")," is expected to contain a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"iter")," that is\ncalled every in every iteration (also called ",(0,o.kt)("inlineCode",{parentName:"p"},"iter"),") of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"MainLoop"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"_register_message_handlers()")," method is an important feature\nto note.\nThis method adds parsing directly into the MainLoop so the App\nonly receives the desired CAN messages.\nBecause messages sent on the CAN bus are seen by all other\ncomponents\nit is important to efficiently filter out irrelevant messages\non the resource constrained microcontrollers."),(0,o.kt)("admonition",{title:"Take it further:",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Try to add an additional message parser for one of the other\nmessages on the CAN bus.\nFor instance, if you have a pendant connected to your CAN bus you\ncould add something like:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-Python"},"from farm_ng.utils.packet import  PENDANT_NODE_ID, PendantState\n\ndef _register_message_handlers(self):\n   self.main_loop.command_handlers[CanOpenObject.TPDO1 |\n   DASHBOARD_NODE_ID] = self._handle_amiga_tpdo1\n   self.main_loop.command_handlers[CanOpenObject.TPDO1 | PENDANT_NODE_ID] = self._handle_pendant_state\n\ndef _handle_pendant_state(self, message):\n   pendant_state = PendantState.from_can_data(message.data)\n   print(pendant_state)\n")),(0,o.kt)("p",{parentName:"admonition"},"All messages on the bus can be found by using the\n",(0,o.kt)("a",{parentName:"p",href:"./../cansniffer/"},(0,o.kt)("strong",{parentName:"a"},"cansniffer example app")),".\nYou can compare the detected CAN ID's to those in\n",(0,o.kt)("inlineCode",{parentName:"p"},"CanOpenObject"),". But keep in mind, node id is added\nto the function code for the full CAN Id, as you'll see below in\n",(0,o.kt)("a",{parentName:"p",href:"#canopenobject--dashboard_node_id"},(0,o.kt)("strong",{parentName:"a"},"CanOpenObject / DASHBOARD_NODE_ID")),".")),(0,o.kt)("h4",{id:"tickrepeater"},(0,o.kt)("inlineCode",{parentName:"h4"},"TickRepeater")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TickRepeater"),' class is a useful utility that we recommend\ntaking advantage of throughout your custom implementations.\nWe use "repeaters" to limit the frequency of certain actions, by\nonly performing the action once the ',(0,o.kt)("inlineCode",{parentName:"p"},"period")," of the repeater has\npast, when compared to the last time the action was performed.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"check()")," method returns ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," until the checkpoint has\npast, and ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," once the checkpoint is past.\nWhen ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," is returned, the repeater is updated to the next\ncheckpoint, so you really only need the ",(0,o.kt)("inlineCode",{parentName:"p"},"check()")," method in most\napplications."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TickRepeater"),' is what we call a "catch-up" repeater, in\nwhich the the next checkpoint is the\n',(0,o.kt)("inlineCode",{parentName:"p"},"ticks_period_ms")," (period in ms) added to the last checkpoint\n(rather than the next checkpoint being the ",(0,o.kt)("inlineCode",{parentName:"p"},"ticks_period_ms"),"\nadded to the time of last execution).\nAs you can infer, there's no reason to use one of these catch-up\nrepeaters if the ",(0,o.kt)("inlineCode",{parentName:"p"},"check()")," will be called less frequently than\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"ticks_period_ms")," used in the constructor."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"ticks_ms")),(0,o.kt)("p",{parentName:"admonition"},"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"ticks_ms"),"\nwhich wraps every ",(0,o.kt)("inlineCode",{parentName:"p"},"2^29")," ms (~6.2 days).\nOur logic handles a single wrap, but we do not detect two wraps\nas we use this in periods more on the ",(0,o.kt)("inlineCode",{parentName:"p"},"100 ms")," timescale.\nIf you are creating a long duration application,\njust make sure your period is less than 6 days and that the check\nis called at least that often."),(0,o.kt)("p",{parentName:"admonition"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.circuitpython.org/en/latest/shared-bindings/supervisor/#supervisor.ticks_ms"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"supervisor.ticks_ms()")," docs")),"\nfor more details about ",(0,o.kt)("inlineCode",{parentName:"p"},"ticks_ms"),".")),(0,o.kt)("h4",{id:"amigarpdo1"},"AmigaRpdo1"),(0,o.kt)("p",null,"Wrapper for CAN packet used for auto mode controls of the Amiga.\nProvide the",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaRpdo1")," object with a requested\n",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaControlState"),", speed, and angular rate.\nThen pack this into a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.circuitpython.org/en/latest/shared-bindings/canio/index.html#canio.Message"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"canio.Message"))),"\nand send this message over the bus."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"request"))," for a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaControlState"),",\nangular rate, and linear velocity sent to the dashboard.\nThe dashboard, operating as the vehicle control unit (VCU), has\nbuilt-in logic to prevent unsafe speeds, accelerations, control\nstate transitions, etc.")),(0,o.kt)("h4",{id:"amigatpdo1"},"AmigaTpdo1"),(0,o.kt)("p",null,"Wrapper for CAN packet used for sending state of the Amiga,\nincluding ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaControlState"),".\nUnpack the message to see the current ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaControlState"),", speed,\nand angular rate of the robot."),(0,o.kt)("p",null,"There is a convenient util function ",(0,o.kt)("inlineCode",{parentName:"p"},"from_can_data")," that unpacks\nthe message directly into an ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaTpdo1")," object."),(0,o.kt)("h4",{id:"amigacontrolstate"},"AmigaControlState"),(0,o.kt)("p",null,"Control state of the Amiga."),(0,o.kt)("h4",{id:"canopenobject--dashboard_node_id"},"CanOpenObject / DASHBOARD_NODE_ID"),(0,o.kt)("p",null,"We ",(0,o.kt)("em",{parentName:"p"},"mostly")," follow the CANopen standards.\nA recommended reading is the ",(0,o.kt)("a",{parentName:"p",href:"https://www.csselectronics.com/pages/canopen-tutorial-simple-intro"},(0,o.kt)("strong",{parentName:"a"},"CSS Electronics CANopen tutorial")),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some of the third-party, auxiliary components we have integrated\ninto the system do not allow for strict adherence to the CANopen\nstandards.\nFor our core system, we adhere closely to the standards.")),(0,o.kt)("p",null,"In this standard, messages are passed using function codes based\non their use.\nEach component has a node ID identifier used to identify either\nthe intended recipient or the source component of each message\nsent on the CAN bus.\nIn the current example, we send requested commands to the Amiga\non the ",(0,o.kt)("inlineCode",{parentName:"p"},"RPDO1")," channel, and receive responses streamed from the\nAmiga on the ",(0,o.kt)("inlineCode",{parentName:"p"},"TPDO1")," channel.\nThese are differentiated from pendant or motor controller RPDO/\nTPDO command sets by sending them with the dashboard node ID."),(0,o.kt)("h3",{id:"codepy"},"code.py"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"code.py (or main.py) is the default name for the executable\nPython file on microcontrollers flashed with CircuitPython.\nYou'll see we stick to the code.py convention with our files.")),(0,o.kt)("h4",{id:"hellomainloopapp"},"HelloMainLoopApp"),(0,o.kt)("p",null,"Here we create ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloMainLoopApp")," as a simple example of the\ntypes of ",(0,o.kt)("inlineCode",{parentName:"p"},"AppClass")," you can create."),(0,o.kt)("p",null,"In our ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloMainLoopApp")," constructor, we create a ",(0,o.kt)("inlineCode",{parentName:"p"},"TickRepeater"),"\nthat will stream the automatic control command to the dashboard\nevery 50 ms (at a 20hz rate)."),(0,o.kt)("p",null,"In our ",(0,o.kt)("inlineCode",{parentName:"p"},"iter()")," call, we:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check for control keys entered into the serial console\n[",(0,o.kt)("inlineCode",{parentName:"li"},"<space bar>")," for toggling auto mode, & ",(0,o.kt)("inlineCode",{parentName:"li"},"w")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"s")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"d"),"[fwd / left / rev / right]"," for adjusting velocities]."),(0,o.kt)("li",{parentName:"ul"},"Parse through all received CAN messages, sorting only for the\n",(0,o.kt)("inlineCode",{parentName:"li"},"AmigaTpdo1")," responses coming from the dashboard."),(0,o.kt)("li",{parentName:"ul"},"Send the most up-to-date auto control commands, based on serial\nconsole entries, in an ",(0,o.kt)("inlineCode",{parentName:"li"},"AmigaRpdo1")," formatted packet.")),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("h3",{id:"1-connection"},"1. Connection"),(0,o.kt)("p",null,"Connect your microcontroller as in the following diagram:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187538323-f70bb5d5-8c9a-40c2-ab75-25fd6c80acfb.png",alt:"connection"})),(0,o.kt)("h3",{id:"2-load-the-code"},"2. Load the code"),(0,o.kt)("p",null,"From ",(0,o.kt)("inlineCode",{parentName:"p"},"amiga-dev-kit/circuitpy/"),", drop the ",(0,o.kt)("inlineCode",{parentName:"p"},"code.py")," file and\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/")," folder directly into the root of the mounted\n",(0,o.kt)("inlineCode",{parentName:"p"},"CIRCUITPY")," drive, as seen below."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This assumes you have already cloned the amiga-dev-kit repo."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <to_your_base_directory>\ngit clone git@github.com:farm-ng/amiga-dev-kit.git\n"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187538475-9d301b0f-f303-4ead-a1e7-b55c6b449b9f.png",alt:"hello_main_loop_filesystem"})),(0,o.kt)("h3",{id:"3-open-the-serial-console"},"3. Open the Serial Console"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Mu is the recommended serial console program by adafruit on\ntheir ",(0,o.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console"},(0,o.kt)("strong",{parentName:"a"},"CircuitPython serial console page")),".\nMu has a built in plotter for tuples printed to the serial\nconsole (print statements in the python code on your\nmicrocontroller)."),(0,o.kt)("p",{parentName:"admonition"},"We've found that Mu can be a little unstable and freezes\noccasionally,\nso we'd recommend checking out their links for the \"advanced\"\nserial console:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-windows"},(0,o.kt)("strong",{parentName:"a"},"Windows serial console"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-linux"},(0,o.kt)("strong",{parentName:"a"},"Linux serial console"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-mac-and-linux"},(0,o.kt)("strong",{parentName:"a"},"Mac serial console"))))),(0,o.kt)("p",null,"You should see an output of the current state of the robot,\nsimilar to the screenshot below, and you should see the values\nupdate as the robot drives around."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/187538512-90d53da9-8588-4d15-9973-49cca16bff72.png",alt:"hello_main_loop_console"})),(0,o.kt)("h3",{id:"4-enable-auto"},"4. Enable AUTO"),(0,o.kt)("h4",{id:"on-the-dashboard"},"On the dashboard"),(0,o.kt)("p",null,"Navigate to the Auto mode tab on your dashboard, and click the ",(0,o.kt)("inlineCode",{parentName:"p"},"[AUTO CONTROL]")," button.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"[AUTO READY]")," icon should turn yellow,\nindicating the dashboard is ready for a component to take ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto Control"),"."),(0,o.kt)("h4",{id:"in-the-serial-console"},"In the serial console"),(0,o.kt)("p",null,"Hit the space bar in your serial console to request auto\ncontrol, and you should see the ",(0,o.kt)("inlineCode",{parentName:"p"},"[AUTO READY]")," turn green,\nindicating the dashboard is in ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto Control")," mode."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: The space bar may not register every press, so use the dash indicators!")),(0,o.kt)("h3",{id:"5-drive-the-robot"},"5. Drive the robot"),(0,o.kt)("p",null,"In the serial console, increase / decrease the robot forward /\nreverse speed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"w")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," keys, and increase / decrease\nthe robot angular rate with the ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"d")," keys."),(0,o.kt)("h3",{id:"6-release-auto"},"6. Release AUTO"),(0,o.kt)("p",null,"Hit the space bar in the serial console to release auto\ncontrol and return to the ",(0,o.kt)("inlineCode",{parentName:"p"},"[AUTO READY]")," state. Or hit the E-Stop\non your Amiga!"))}m.isMDXComponent=!0}}]);