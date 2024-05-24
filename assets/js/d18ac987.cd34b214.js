"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[4735],{2427:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=s(5893),i=s(1151);const o={id:"ros-bridge",title:"Amiga ROS Bridge"},t="Amiga ROS Bridge",a={id:"brain/ros-bridge",title:"Amiga ROS Bridge",description:"This is out-of-date for brains running v2.x Amiga OS software.",source:"@site/docs/brain/ros-bridge.md",sourceDirName:"brain",slug:"/brain/ros-bridge",permalink:"/docs/brain/ros-bridge",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/brain/ros-bridge.md",tags:[],version:"current",frontMatter:{id:"ros-bridge",title:"Amiga ROS Bridge"},sidebar:"Developer",previous:{title:"Migration Guide to Amiga OS 2.0",permalink:"/docs/brain/sdk-barley-migration"},next:{title:"Using a VNC Viewer",permalink:"/docs/examples/vnc_viewer/"}},c={},d=[{value:"Link to <code>farm-ng/amiga-ros-bridge</code>",id:"link-to-farm-ngamiga-ros-bridge",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage options",id:"usage-options",level:3},{value:"Topics",id:"topics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Gain access to the ROS bridge container",id:"gain-access-to-the-ros-bridge-container",level:3},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"<code>amiga_ros_bridge</code> installation",id:"amiga_ros_bridge-installation",level:3},{value:"Catkin workspace",id:"catkin-workspace",level:4},{value:"Clone this repository",id:"clone-this-repository",level:4},{value:"Source your catkin workspace",id:"source-your-catkin-workspace",level:4},{value:"Compile the package <code>amiga_ros_bridge</code>",id:"compile-the-package-amiga_ros_bridge",level:4},{value:"Run the <code>amiga_ros_bridge</code>",id:"run-the-amiga_ros_bridge",level:2},{value:"Specifying the ROS Master",id:"specifying-the-ros-master",level:3},{value:"ROS bridge on the Amiga",id:"ros-bridge-on-the-amiga",level:3},{value:"ROS bridge on your PC",id:"ros-bridge-on-your-pc",level:3},{value:"ROS bridge with mock server",id:"ros-bridge-with-mock-server",level:3},{value:"Start the mock server",id:"start-the-mock-server",level:4},{value:"Start the ros bridge",id:"start-the-ros-bridge",level:4},{value:"Test the <code>amiga_ros_bridge</code>",id:"test-the-amiga_ros_bridge",level:2},{value:"Control the Amiga",id:"control-the-amiga",level:2},{value:"Experimental Amiga Joystick",id:"experimental-amiga-joystick",level:3},{value:"Stable ROS packages",id:"stable-ros-packages",level:3},{value:"Try the examples",id:"try-the-examples",level:2},{value:"Python",id:"python",level:3},{value:"Rust",id:"rust",level:3},{value:"Use <code>depthai-ros</code> for Oak camera streaming",id:"use-depthai-ros-for-oak-camera-streaming",level:2},{value:"Example <code>depthai-ros</code> usage",id:"example-depthai-ros-usage",level:3},{value:"Terminal 1: ssh into the ros container on your amiga",id:"terminal-1-ssh-into-the-ros-container-on-your-amiga",level:4},{value:"Terminal 2: A PC on the same network",id:"terminal-2-a-pc-on-the-same-network",level:4},{value:"Do you want to know more?",id:"do-you-want-to-know-more",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"amiga-ros-bridge",children:"Amiga ROS Bridge"}),"\n",(0,r.jsx)(n.admonition,{title:"deprecation warning",type:"caution",children:(0,r.jsxs)(n.p,{children:["This is out-of-date for brains running ",(0,r.jsx)(n.code,{children:"v2.x"})," Amiga OS software.",(0,r.jsx)("br",{}),"\nThis tutorial only applies to brains running Amiga OS ",(0,r.jsx)(n.code,{children:"v1.x"})," versions.",(0,r.jsx)("br",{}),"\nPlease check back for an updated tutorial for brains running ",(0,r.jsx)(n.code,{children:"v2.x"})," Amiga OS software."]})}),"\n",(0,r.jsx)(n.h2,{id:"link-to-farm-ngamiga-ros-bridge",children:(0,r.jsxs)(n.a,{href:"https://github.com/farm-ng/amiga-ros-bridge",children:["Link to ",(0,r.jsx)(n.code,{children:"farm-ng/amiga-ros-bridge"})]})}),"\n",(0,r.jsxs)(n.p,{children:["This repository contains a ROS bridge for the Farm-ng Amiga platform written in ",(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/",children:"Rust"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Disclaimer:"})," the Amiga stack does not leverage ROS for control,\nbut rather uses a gRPC service for control. This bridge is provided as a convenience\nfor users who wish to use ROS for control. For performance critical applications,\nwe recommend using the gRPC service directly."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["The ROS bridge, currently supported for ROS Noetic, interfaces with the\n",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga",children:"Amiga gRPC services"})," for control with ROS\n",(0,r.jsx)(n.a,{href:"http://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Twist.html",children:(0,r.jsx)(n.code,{children:"Twist"})})," messages."]}),"\n",(0,r.jsxs)(n.p,{children:["Using the ROS bridge with the amiga requires an Amiga OS ",(0,r.jsx)(n.code,{children:">= v1.2.0"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ROS bridge allows you to publish\n",(0,r.jsx)(n.a,{href:"http://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Twist.html",children:(0,r.jsx)(n.code,{children:"Twist"})})," commands on the\n",(0,r.jsx)(n.code,{children:"/amiga/cmd_vel"})," topic to drive the Amiga and subscribe to\n",(0,r.jsx)(n.a,{href:"http://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html",children:(0,r.jsx)(n.code,{children:"TwistStamped"})}),"\nmeasured rates on the  ",(0,r.jsx)(n.code,{children:"/amiga/vel"})," topic."]}),"\n",(0,r.jsx)(n.h3,{id:"usage-options",children:"Usage options"}),"\n",(0,r.jsxs)(n.p,{children:["There are currently 3 methods for using the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Running the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," (and ROS master) on the Amiga,\nwith other ROS nodes on your PC connected to the Amiga ROS master","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Look for sections tagged as ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 1]"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Running the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," (and ROS master) on your PC,\nconnected to the Amiga canbus service over gRPC","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Look for sections tagged as ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 2]"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Running the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," (and ROS master) on your PC, using the mock server","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Look for sections tagged as ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 3]"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"topics",children:"Topics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Control"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Subscribed to by ROS bridge"}),"\n",(0,r.jsxs)(n.li,{children:["Topic: ",(0,r.jsx)(n.code,{children:"/amiga/cmd_vel"})]}),"\n",(0,r.jsxs)(n.li,{children:["Format: ",(0,r.jsx)(n.a,{href:"http://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Twist.html",children:(0,r.jsx)(n.code,{children:"geometry_msgs/Twist"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Measured"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Published by ROS bridge"}),"\n",(0,r.jsxs)(n.li,{children:["Topic: ",(0,r.jsx)(n.code,{children:"/amiga/vel"})]}),"\n",(0,r.jsxs)(n.li,{children:["Format: ",(0,r.jsx)(n.a,{href:"http://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html",children:(0,r.jsx)(n.code,{children:"geometry_msgs/TwistStamped"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.h3,{id:"gain-access-to-the-ros-bridge-container",children:"Gain access to the ROS bridge container"}),"\n",(0,r.jsxs)(n.p,{children:["For: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 1]"})})]}),"\n",(0,r.jsxs)(n.p,{children:["If you would like run the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," on the Amiga,\nyou will need to gain access to the ROS bridge docker container."]}),"\n",(0,r.jsxs)(n.p,{children:["Please contact ",(0,r.jsx)(n.code,{children:"support@farm-ng.com"})," for instructions and credentials."]}),"\n",(0,r.jsx)(n.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["For: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 2]"})}),", ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 3]"})})]}),"\n",(0,r.jsxs)(n.p,{children:["To run the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," on your PC, you will need:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://wiki.ros.org/noetic/Installation/Ubuntu",children:"ROS Noetic install instructions"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/learn/get-started",children:"Rust install instructions"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Rust is only needed if you will run the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," or any Rust examples on your PC."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"NOTE: Using ROS on your PC means you're either running some flavor of\nLinux or know how to run ROS in a VM on your other OS."}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"amiga_ros_bridge-installation",children:[(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," installation"]}),"\n",(0,r.jsxs)(n.p,{children:["For: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 1]"})}),", ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 2]"})}),", ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 3]"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["We hope to soon package a pre-compiled ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," in the ros bridge docker container\ninstalled on your Amiga for running with  ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 1]"})}),".\nIn the meantime, you will need to manually install the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," as you would on your PC."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"catkin-workspace",children:"Catkin workspace"}),"\n",(0,r.jsxs)(n.p,{children:["Create a catkin workspace, if you don't already have one, following the instructions at\n",(0,r.jsx)(n.a,{href:"http://wiki.ros.org/catkin/Tutorials/create_a_workspace",children:"ROS Tutorials - create_a_workspace"}),".\nIf this is a new project, it is recommended to create a new, separate catkin workspace."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The remaining instructions will assume you're using a catkin ws at ",(0,r.jsx)(n.code,{children:"~/catkin_ws"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"clone-this-repository",children:"Clone this repository"}),"\n",(0,r.jsxs)(n.p,{children:["Clone the repository and initialize the ",(0,r.jsx)(n.code,{children:"farm-ng-amiga"})," submodule."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/catkin_ws/src\ngit clone https://github.com/farm-ng/amiga-ros-bridge.git\ncd amiga-ros-bridge\ngit submodule update --init\ncd ~/catkin_ws\n"})}),"\n",(0,r.jsx)(n.h4,{id:"source-your-catkin-workspace",children:"Source your catkin workspace"}),"\n",(0,r.jsx)(n.p,{children:"Go to your ROS workspace and source the setup.bash file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/catkin_ws\nsource ~/catkin_ws/devel/setup.bash\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"compile-the-package-amiga_ros_bridge",children:["Compile the package ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: this may take ~25 minutes on the first install on the Amiga brain.\nIt should be much faster on your PC."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/catkin_ws\ncatkin_make clean # optionally, clean the workspace\ncatkin_make\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"run-the-amiga_ros_bridge",children:["Run the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})]}),"\n",(0,r.jsx)(n.h3,{id:"specifying-the-ros-master",children:"Specifying the ROS Master"}),"\n",(0,r.jsxs)(n.p,{children:["For: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 1]"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["NOTE: These instructions cover connecting multiple ROS devices to a single ROS master.\nThis is only relevant if you are running the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," on the Amiga,\nand connecting other ROS nodes running on your PC to the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In order to connect to the same ROS Master when running ROS nodes on multiple devices,\nyou must specify all nodes to be on the same ",(0,r.jsx)(n.code,{children:"ROS_MASTER_URI"}),", but with their own ",(0,r.jsx)(n.code,{children:"ROS_IP"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to connect to the ",(0,r.jsx)(n.code,{children:"roscore"})," and ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," running on your Amiga,\nyou must export the ",(0,r.jsx)(n.code,{children:"ROS_MASTER_URI"})," and ",(0,r.jsx)(n.code,{children:"ROS_IP"})," before starting a ",(0,r.jsx)(n.code,{children:"roscore"}),"\nand/or before launching or running any node that will connect to that ROS Master.\nThis would be:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export ROS_MASTER_URI=http://<AMIGA_IP>:11311\nexport ROS_IP=<AMIGA_IP>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<AMIGA_IP>"})," corresponds to the IP address seen on the\nbottom right hand corner of your Amiga brain home screen.\nSo this command would become, e.g.:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export ROS_MASTER_URI=http://192.168.1.98:11311\nexport ROS_IP=192.168.1.98\n"})}),"\n",(0,r.jsx)(n.p,{children:"Meanwhile, your dev station should be set up to connect to that ROS master."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export ROS_MASTER_URI=http://<AMIGA_IP>:11311\nexport ROS_IP=<DEV_STATION_IP>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<DEV_STATION_IP>"})," corresponds to the IP address on your PC running ROS,\nconnected to the same network as the Amiga."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Hint: ",(0,r.jsx)(n.code,{children:"<DEV_STATION_IP>"})," can be found with ",(0,r.jsx)(n.code,{children:"ifconfig"})," or other basic tools."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"So this command would become, e.g.:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export ROS_MASTER_URI=http://192.168.1.98:11311\nexport ROS_IP=192.168.1.123\n"})}),"\n",(0,r.jsx)(n.p,{children:"For more information see:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://wiki.ros.org/ROS/Tutorials/MultipleMachines",children:"Running ROS across multiple machines"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://answers.ros.org/question/349095/ros-on-multiple-machine-not-working-properly/?answer=398784#post-id-398784",children:["Specify ",(0,r.jsx)(n.code,{children:"ROS_IP"})," for running on multiple machines"]})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ros-bridge-on-the-amiga",children:"ROS bridge on the Amiga"}),"\n",(0,r.jsxs)(n.p,{children:["For: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 1]"})})]}),"\n",(0,r.jsxs)(n.p,{children:["The first method is with the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," running on the Amiga,\nand you connecting other ROS nodes running on your computer to the Amiga's\nROS Master."]}),"\n",(0,r.jsx)(n.p,{children:"Make sure that the Amiga is connected to the same network as your computer\nand that you know both the IP address of the Amiga and of your PC."}),"\n",(0,r.jsxs)(n.p,{children:["Launch the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," on the Amiga by ",(0,r.jsx)(n.code,{children:"ssh"}),"-ing into the ros bridge docker container on the Amiga."]}),"\n",(0,r.jsxs)(n.p,{children:["Please contact ",(0,r.jsx)(n.code,{children:"support@farm-ng.com"})," for instructions and credentials."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source ~/catkin_ws/devel/setup.bash\nexport ROS_MASTER_URI=http://<AMIGA_IP>:11311\nexport ROS_IP=<AMIGA_IP>\nroslaunch amiga_ros_bridge amiga_ros_bridge.launch\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<AMIGA_IP>"})," corresponds to the IP address seen on the\nbottom right hand corner of your Amiga brain home screen."]}),"\n",(0,r.jsx)(n.h3,{id:"ros-bridge-on-your-pc",children:"ROS bridge on your PC"}),"\n",(0,r.jsxs)(n.p,{children:["For: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 2]"})})]}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can run the package in your computer as follows.\nMake sure that the Amiga is connected to the same network as your computer\nand that you know the IP address of the Amiga."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"roslaunch amiga_ros_bridge amiga_ros_bridge.launch host:=<AMIGA_IP>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<AMIGA_IP>"})," corresponds to the IP address seen on the\nbottom right hand corner of your Amiga brain home screen."]}),"\n",(0,r.jsx)(n.h3,{id:"ros-bridge-with-mock-server",children:"ROS bridge with mock server"}),"\n",(0,r.jsxs)(n.p,{children:["For: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 3]"})})]}),"\n",(0,r.jsx)(n.p,{children:"Finally, you can run the package in your computer with a\nmock Amiga canbus server that just echos velocity commands back.\nTo run this, you must first start the mock server in a separate terminal:"}),"\n",(0,r.jsx)(n.h4,{id:"start-the-mock-server",children:"Start the mock server"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This is experimental and is not guaranteed to work."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This is a stand-in for the actual Amiga gRPC canbus service that echos back the received commands."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"In a separate terminal"})}),", start the Amiga mock server:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source ~/catkin_ws/devel/setup.bash\ncd ~/catkin_ws/src/amiga-ros-bridge/\ncargo run --example amiga-mock-server\n"})}),"\n",(0,r.jsx)(n.h4,{id:"start-the-ros-bridge",children:"Start the ros bridge"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source ~/catkin_ws/devel/setup.bash\nroslaunch amiga_ros_bridge amiga_ros_bridge.launch\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"test-the-amiga_ros_bridge",children:["Test the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})]}),"\n",(0,r.jsxs)(n.p,{children:["Now you will be able to connect to the ROS topics used by the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"}),".\nConfirm this in another terminal on your PC with:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source ~/catkin_ws/devel/setup.bash\nrostopic list\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["NOTE: If running the ",(0,r.jsx)(n.code,{children:"amiga_ros_bridge"})," on the Amiga (as in ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Method 1]"})}),")\nand connecting with ROS over the network,\nmake sure to follow the ",(0,r.jsx)(n.a,{href:"#specifying-the-ros-master",children:"Specifying the ROS Master"})," instructions.\nRemember to set your ",(0,r.jsx)(n.code,{children:"ROS_MASTER_URI"})," & ",(0,r.jsx)(n.code,{children:"ROS_IP"})," before running. E.g.,"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source ~/catkin_ws/devel/setup.bash\nexport ROS_MASTER_URI=http://<AMIGA_IP>:11311\nexport ROS_IP=<DEV_STATION_IP>\nrostopic list\n"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"And you should see:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"/amiga/cmd_vel\n/amiga/vel\n/rosout\n/rosout_agg\n"})}),"\n",(0,r.jsx)(n.h2,{id:"control-the-amiga",children:"Control the Amiga"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["NOTE: If controlling the robot with a ROS connection over the network,\nmake sure to follow the ",(0,r.jsx)(n.a,{href:"#specifying-the-ros-master",children:"Specifying the ROS Master"})," instructions."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"experimental-amiga-joystick",children:"Experimental Amiga Joystick"}),"\n",(0,r.jsxs)(n.p,{children:["You can start the ",(0,r.jsx)(n.strong,{children:"experimental"})," amiga-joystick app to command velocities\nto the Amiga (e.g. the mock server) and print received velocity states:"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This is not stable and may require multiple attempts at launching for this to come up."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source ~/catkin_ws/devel/setup.bash\ncd ~/catkin_ws/src/amiga-ros-bridge/\ncargo run --example amiga-joystick\n"})}),"\n",(0,r.jsx)(n.p,{children:"Use arrow keys (left, right, up, down) to command velocities to the Amiga."}),"\n",(0,r.jsx)(n.h3,{id:"stable-ros-packages",children:"Stable ROS packages"}),"\n",(0,r.jsxs)(n.p,{children:["You can publish ",(0,r.jsx)(n.code,{children:"Twist"})," commands to the ROS bridge on the ",(0,r.jsx)(n.code,{children:"/amiga/cmd_vel"})," topic with the\n",(0,r.jsx)(n.a,{href:"http://wiki.ros.org/rqt_robot_steering",children:(0,r.jsx)(n.code,{children:"rqt_robot_steering"})})," package."]}),"\n",(0,r.jsxs)(n.p,{children:["Install ",(0,r.jsx)(n.code,{children:"rqt_robot_steering"}),", if needed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt-get install ros-noetic-rqt-robot-steering\n"})}),"\n",(0,r.jsx)(n.p,{children:"Run from your terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source ~/catkin_ws/devel/setup.bash\nrosrun rqt_robot_steering rqt_robot_steering\n# Then change the topic to `/amiga/cmd_vel`\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can subscribe to measured ",(0,r.jsx)(n.code,{children:"TwistStamped"})," states of the amiga with ROS command line tools."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source ~/catkin_ws/devel/setup.bash\nrostopic echo /amiga/vel\n"})}),"\n",(0,r.jsx)(n.h2,{id:"try-the-examples",children:"Try the examples"}),"\n",(0,r.jsxs)(n.p,{children:["We have provided some examples to help you get started. You will find the examples in the\n",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-ros-bridge/tree/main/examples",children:(0,r.jsx)(n.code,{children:"examples"})})," directory."]}),"\n",(0,r.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-ros-bridge/tree/main/examples/amiga_cmd_vel_publisher.py",children:(0,r.jsx)(n.code,{children:"amiga_cmd_vel_publisher.py"})}),":\nPublishes a ",(0,r.jsx)(n.code,{children:"TwistStamped"})," message on the ",(0,r.jsx)(n.code,{children:"/amiga/cmd_vel"})," topic."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-ros-bridge/tree/main/examples/amiga_vel_subscriber.py",children:(0,r.jsx)(n.code,{children:"amiga_vel_subscriber.py"})}),":\nSubscribes to the ",(0,r.jsx)(n.code,{children:"/amiga/vel"})," topic and prints the received ",(0,r.jsx)(n.code,{children:"TwistStamped"})," messages."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"rust",children:"Rust"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-ros-bridge/tree/main/examples/amiga_cmd_vel_publisher.rs",children:(0,r.jsx)(n.code,{children:"amiga_cmd_vel_publisher.rs"})}),":\nPublishes a ",(0,r.jsx)(n.code,{children:"TwistStamped"})," message on the ",(0,r.jsx)(n.code,{children:"/amiga/cmd_vel"})," topic."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-ros-bridge/tree/main/examples/amiga_vel_subscriber.rs",children:(0,r.jsx)(n.code,{children:"amiga_vel_subscriber.rs"})}),":\nSubscribes to the ",(0,r.jsx)(n.code,{children:"/amiga/vel"})," topic and prints the received ",(0,r.jsx)(n.code,{children:"TwistStamped"})," messages."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-ros-bridge/tree/main/examples/amiga-joystick.rs",children:(0,r.jsx)(n.code,{children:"amiga-joystick.rs"})}),":\nA simple joystick to command velocities to the Amiga and print received velocity states."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"use-depthai-ros-for-oak-camera-streaming",children:["Use ",(0,r.jsx)(n.code,{children:"depthai-ros"})," for Oak camera streaming"]}),"\n",(0,r.jsxs)(n.p,{children:["As of March 29, 2023 - the ROS docker container for the Amiga has a built in installation of ",(0,r.jsx)(n.a,{href:"https://github.com/luxonis/depthai-ros",children:(0,r.jsx)(n.code,{children:"depthai-ros"})}),".\nThis is installed as the ",(0,r.jsx)(n.code,{children:"ros-noetic-depthai-ros"})," apt package."]}),"\n",(0,r.jsx)(n.p,{children:"You can install the March 29, 2023 ROS docker container for the Amiga with the same command\nyou used to install the original ROS docker container for the Amiga."}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"https://github.com/luxonis/depthai-ros",children:(0,r.jsx)(n.code,{children:"depthai-ros"})})," on full usage of their ROS package."]}),"\n",(0,r.jsxs)(n.p,{children:["As of March 29, 2023 - there is no support for visualization in the ROS docker container for the Amiga.\nThis means you can use the ",(0,r.jsx)(n.code,{children:"depthai-ros"})," library to connect to the Oak cameras on your amiga,\nuse other ROS nodes running on the Amiga for image processing,\nbut you will need to stream them over a network to a PC to visualize them.\nThis is done by properly setting ",(0,r.jsx)(n.code,{children:"ROS_MASTER_URI"})," & ",(0,r.jsx)(n.code,{children:"ROS_IP"})," on all devices, as explained in\n",(0,r.jsx)(n.a,{href:"#specifying-the-ros-master",children:"Specifying the ROS Master"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["NOTE: You must stop the oak camera service(s) in your apps launcher setting page so the\n",(0,r.jsx)(n.code,{children:"depthai-ros"})," package can access the Oak camera device(s)."]}),"\n",(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/53625197/228701415-89fb6d36-dce5-4b42-808d-2dd486db91a5.png",width:"35%"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tips:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["We provide a quick example of using the ",(0,r.jsx)(n.code,{children:"depthai-ros"})," to stream images below"]}),"\n",(0,r.jsx)(n.li,{children:"It is up to you to read their docs to decide which of their\nlaunch files / nodes / examples you want to use"}),"\n",(0,r.jsxs)(n.li,{children:["It is up to you to read their docs to configure / interact with the cameras how you want. E.g.,","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Specify ",(0,r.jsx)(n.code,{children:"MxId"})," of the camera you want to stream"]}),"\n",(0,r.jsxs)(n.li,{children:["Configure for PoE cameras to reduce expected throughput compared to USB (See: ",(0,r.jsx)(n.a,{href:"https://github.com/luxonis/depthai-ros#poe-cameras",children:"https://github.com/luxonis/depthai-ros#poe-cameras"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Get camera calibrations"}),"\n",(0,r.jsx)(n.li,{children:"Pass a Neural Network to run on the Oak"}),"\n",(0,r.jsx)(n.li,{children:"Etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"example-depthai-ros-usage",children:["Example ",(0,r.jsx)(n.code,{children:"depthai-ros"})," usage"]}),"\n",(0,r.jsx)(n.h4,{id:"terminal-1-ssh-into-the-ros-container-on-your-amiga",children:"Terminal 1: ssh into the ros container on your amiga"}),"\n",(0,r.jsxs)(n.p,{children:["Use an example from ",(0,r.jsx)(n.a,{href:"https://github.com/luxonis/depthai-ros",children:(0,r.jsx)(n.code,{children:"depthai-ros"})})," to stream an oak device."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source /opt/ros/noetic/setup.bash # Or source your catkin_ws\nexport ROS_MASTER_URI=http://<AMIGA_IP>:11311\nexport ROS_IP=<AMIGA_IP>\nroslaunch depthai_examples stereo_inertial_node.launch\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<AMIGA_IP>"})," corresponds to the IP address seen on the\nbottom right hand corner of your Amiga brain home screen."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["You will see an error that rviz cannot be launched because there is no support for visualization\nin this docker container.\nBut, if the Oak camera is available, the ",(0,r.jsx)(n.code,{children:"depthai-ros"})," node will start and a camera will be streaming."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ERROR: cannot launch node of type [rviz/rviz]: rviz\nROS path [0]=/opt/ros/noetic/share/ros\nROS path [1]=/data/home/ros/catkin_ws/src\nROS path [2]=/opt/ros/noetic/share\n"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"terminal-2-a-pc-on-the-same-network",children:"Terminal 2: A PC on the same network"}),"\n",(0,r.jsx)(n.p,{children:"Watch the the stream from a computer on the same network."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source /opt/ros/noetic/setup.bash # Or source your catkin_ws\nexport ROS_MASTER_URI=http://<AMIGA_IP>:11311\nexport ROS_IP=<DEV_STATION_IP>\nrqt_image_view\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<AMIGA_IP>"})," corresponds to the IP address seen on the\nbottom right hand corner of your Amiga brain home screen.\nAnd ",(0,r.jsx)(n.code,{children:"<DEV_STATION_IP>"})," corresponds to the IP address on your PC running ROS,\nconnected to the same network as the Amiga."]}),"\n",(0,r.jsxs)(n.p,{children:["Now select the image you want to view based on topic,\ne.g. ",(0,r.jsx)(n.code,{children:"/stereo_inertial_publisher/color/image"})," or  ",(0,r.jsx)(n.code,{children:"/stereo_inertial_publisher/stereo/depth"}),"."]}),"\n",(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/53625197/228702256-d5ef02d9-98a6-476d-b636-56f66f84822d.png",width:"50%"}),"\n",(0,r.jsx)(n.h2,{id:"do-you-want-to-know-more",children:"Do you want to know more?"}),"\n",(0,r.jsxs)(n.p,{children:["Inspect ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-ros-bridge/blob/main/ci_test.sh",children:(0,r.jsx)(n.code,{children:"ci_test.sh"})}),"\nfor a full example of how to run the bridge in a CI environment."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>t});var r=s(7294);const i={},o=r.createContext(i);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);