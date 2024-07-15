"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[9680],{3722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(5893),i=n(1151);const o={id:"dashboard-user-guide",title:"Dashboard User Guide"},r=void 0,a={id:"dashboard/dashboard-user-guide",title:"Dashboard User Guide",description:"This guide is subject to change with each new update to the Dashboard.",source:"@site/docs/dashboard/dashboard_user_guide.md",sourceDirName:"dashboard",slug:"/dashboard/dashboard-user-guide",permalink:"/docs/dashboard/dashboard-user-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/dashboard/dashboard_user_guide.md",tags:[],version:"current",frontMatter:{id:"dashboard-user-guide",title:"Dashboard User Guide"},sidebar:"User Manual",previous:{title:"Dashboard Overview",permalink:"/docs/dashboard/dashboard-overview"},next:{title:"Amiga Control States",permalink:"/docs/dashboard/control-states"}},d={},c=[{value:"Dashboard overview video",id:"dashboard-overview-video",level:2},{value:"Start Page",id:"start-page",level:2},{value:"Home Screen",id:"home-screen",level:2},{value:"Motor Status Screen",id:"motor-status-screen",level:2},{value:"Auto Control Screen",id:"auto-control-screen",level:2},{value:"General Settings",id:"general-settings",level:2},{value:"Configuration Settings",id:"configuration-settings",level:3},{value:"The Pendant Settings",id:"the-pendant-settings",level:3},{value:"H-bridge settings",id:"h-bridge-settings",level:3},{value:"ID settings",id:"id-settings",level:3},{value:"Updator App",id:"updator-app",level:4},{value:"PTO settings",id:"pto-settings",level:3},{value:"Advanced settings",id:"advanced-settings",level:3},{value:"State Indicators",id:"state-indicators",level:3},{value:"E-Stopped",id:"e-stopped",level:4},{value:"Cruise Control",id:"cruise-control",level:4},{value:"Auto Control",id:"auto-control",level:4}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:"This guide is subject to change with each new update to the Dashboard."}),(0,s.jsxs)(t.p,{children:["The latest version is Dashboard Firmware release ",(0,s.jsx)(t.code,{children:"v0.6.0"}),"."]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/6d3b25ee-cd16-4878-adbc-0e23ffd8d84b",alt:"IMG6570-2-16x9-aspect-rediced"})}),"\n",(0,s.jsx)(t.h2,{id:"dashboard-overview-video",children:"Dashboard overview video"}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PKOhI4hbGUs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(t.h2,{id:"start-page",children:"Start Page"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/fccbf6aa-95ae-41cb-bb65-fb816451c011"}),"\n",(0,s.jsx)(t.p,{children:"This is the start page on the dashboard.\nIt will appear when you first turn on your Amiga.\nHere is where you can change the display's language.\nYou may choose between English, Spanish, and French.\nPressing the START button will take you to the home screen."}),"\n",(0,s.jsx)(t.h2,{id:"home-screen",children:"Home Screen"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/954a66d5-2155-48f1-9830-25428374fa2a"}),"\n",(0,s.jsx)(t.p,{children:"This is the home screen of the dashboard. In the center sits the speedometer,\nwhere you can switch between metric and standard units and adjust to the travel speed of your Amiga."}),"\n",(0,s.jsx)(t.p,{children:"On the right side of the screen you will see several icons displaying:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Battery Level"}),"\n",(0,s.jsx)(t.li,{children:"Average motor temperature"}),"\n",(0,s.jsx)(t.li,{children:"Connection to Pendant"}),"\n",(0,s.jsx)(t.li,{children:"Preview of each motor's health"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can always come back to this screen by pressing the upper left icon on the dashboard."}),"\n",(0,s.jsx)(t.h2,{id:"motor-status-screen",children:"Motor Status Screen"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/d0cc17f2-3cdf-49c5-ab02-e412cbec56bd"}),"\n",(0,s.jsx)(t.p,{children:"In this screen you can see the control state of your Amiga:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Active"}),"\n",(0,s.jsx)(t.li,{children:"Cruise"}),"\n",(0,s.jsx)(t.li,{children:"Auto Ready/Active"}),"\n",(0,s.jsx)(t.li,{children:"E-Stopped"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You will also see details on each motor / motor controller's:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Voltage"}),"\n",(0,s.jsx)(t.li,{children:"RPM"}),"\n",(0,s.jsx)(t.li,{children:"Temperature"}),"\n",(0,s.jsx)(t.li,{children:"Current draw"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Lastly, CAN bus states will appear on the right side of the display."}),"\n",(0,s.jsx)(t.h2,{id:"auto-control-screen",children:"Auto Control Screen"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/9a8dcddf-cb5d-4e3c-95e0-0224f521ae6d"}),"\n",(0,s.jsxs)(t.p,{children:["If you have an ",(0,s.jsx)(t.a,{href:"/docs/intelligence-kit/overview-intel",children:"Intelligence Kit"}),"\nmounted on your Amiga and have some tracks recorded in\n",(0,s.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/apps/autoplot_app/",children:"Autoplot"}),", activating the\nauto mode on this screen is what brings autonomous control into action."]}),"\n",(0,s.jsx)(t.p,{children:"From this screen, you will be able to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Enable and disable Auto Control"}),"\n",(0,s.jsx)(t.li,{children:"Monitor the Auto Control state"}),"\n",(0,s.jsx)(t.li,{children:"Monitor the commanded & measured speed of your Amiga"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can also use micro-controllers to command your Amiga.\nFor an example of how to do so, please follow the instructions in this ",(0,s.jsx)(t.a,{href:"/docs/examples/FPV/",children:"FPV example"})]}),"\n",(0,s.jsx)(t.admonition,{title:"Tool Control when AUTO CONTROL is ON",type:"info",children:(0,s.jsxs)(t.p,{children:["Starting on Dashboard Firmware ",(0,s.jsx)(t.code,{children:"v0.5.0"})," and AmigaOS ",(0,s.jsx)(t.code,{children:"v2.3.0"})," the Brain has tool control\ncapabilities.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"\nTherefore, when Auto Control is ENABLED, a blue outline will appear around the Dashboard and the\npendant commands will be bypassed. Tool control is thus carried out in the Autoplot app, a browser\nwindow, or your custom application.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"\nIf manual control is needed, disable Auto Control on E-STOP your Amiga using the physical button."]})}),"\n",(0,s.jsx)(t.h2,{id:"general-settings",children:"General Settings"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/6dbb13d1-679b-4b7a-8c8c-8c97f6c5b585"}),"\n",(0,s.jsx)(t.p,{children:"In this screen, you can make configuration changes to your Amiga's:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Settings"}),"\n",(0,s.jsx)(t.li,{children:"Pendant"}),"\n",(0,s.jsx)(t.li,{children:"H Bridge"}),"\n",(0,s.jsx)(t.li,{children:"ID"}),"\n",(0,s.jsx)(t.li,{children:"PTO"}),"\n",(0,s.jsx)(t.li,{children:"Advanced"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"configuration-settings",children:"Configuration Settings"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/a6ed5324-11fa-4c39-9fcd-6d3c974f9062"}),"\n",(0,s.jsx)(t.p,{children:"General configuration settings are located in this tab.\nThe configuration changes you can make on this page are:"}),"\n",(0,s.jsx)(t.admonition,{title:"Engineering units",type:"note",children:(0,s.jsxs)(t.p,{children:["Unless stated otherwise, linear engineering units will be determined by your settings, or by\npressing the digital speed on your main screen.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"\nSimilarly, angular units refer to counterclockwise rotation around the Z axis of the\n",(0,s.jsx)(t.a,{href:"../concepts/transforms_and_poses/#frames-of-reference",children:"Robot Frame"})," (origin at the ground level\nat the center of the robot)."]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"wheel_track"}),": width of your Amiga, from center of A motor to center of B motor."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"wheel_front_track"}),": width of front wheels, from center of C motor to center of D motor.\n",(0,s.jsxs)(t.strong,{children:["Use ",(0,s.jsx)(t.code,{children:"0"})," if equal to ",(0,s.jsx)(t.code,{children:"wheel_track"})]})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"wheel_back_reverse"}),": reverse B and C motors rotation. Used only in the very specific case you\nhave all 4 wheels in line."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"v_max_default"}),": default max speed setting when your dashboard reboots."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"max_turn_rate"}),": maximum angular speed (in RPM) when rotating the robot on its center (zero turn)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"min_turn_rate"}),": minimum angular speed (in RPM) when rotating the robot on its center (zero turn)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"turtle_v"}),": maximum linear speed the robot will drive when battery is lower than ",(0,s.jsx)(t.code,{children:"batt_hi"}),"\nthreshold."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"turtle_turn_rate"}),": maximum angular speed (in RPM) the robot will turn on its axis when battery\nis lower than ",(0,s.jsx)(t.code,{children:"batt_hi"})," threshold."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"max_accel"}),": maximum angular acceleration (in ",(0,s.jsx)(t.code,{children:"rad/s**2"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"flip_joystick"}),": reverse joystick controls (useful when user operates facing robots back, for\nexample)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"pendant_deadband"}),": sensitivity of the pendant's joystick. Reduce it if you want your pendant to\nrespond to smaller movements. ",(0,s.jsx)(t.strong,{children:"Too small values may cause unstable behavior."})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"steering_gamma"}),": responsiveness of the pendant's joystick to steering. Larger values lead to\nsteeper curves."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"batt_lo"}),": threshold in VDC where the robot will switch to turtle mode and be limited to ",(0,s.jsx)(t.code,{children:"turtle_v"}),"\nspeed. Used to allow user to drive to a safe location before complete shutdown.\nDefault value is 40 VDC."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"batt_hi"}),": threshold where the display will show full battery. Default value is 50 VDC."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"pto0_gear_ratio"}),": gear ratio of your first PTO attachment."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"pto1_gear_ratio"}),": gear ratio of your second PTO attachment."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"default_pto_rpm"}),": default PTO rotation for both PTOs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"min_pto_rpm"}),": minimum limit for both PTO attachments."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"max_pto_rpm"}),": maximum limit for both PTO attachments."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"m10_on"}),": boolean to turn motor A on"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"m11_on"}),": boolean to turn motor B on"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"m12_on"}),": boolean to turn motor C on"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"m13_on"}),": boolean to turn motor D on"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"auto_hold_mode"}),": when ON, increase motor torque on stops, increasing precision when stopped on\nslopes. ",(0,s.jsxs)(t.strong,{children:["This setting increase power consumption considerably and should be used only in very\nspecific cases. Contact ",(0,s.jsx)(t.a,{href:"mailto:support@farm-ng.com",children:"support@farm-ng.com"})," to explore other options."]})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"lang"}),": 0 for English, 1 for Spanish, 2 for French. Can be changed in Setup page directly."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"units_dst"}),": speed units on your main gauge. Press your digital speedometer for verbose options."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"units_temp"}),": temperature units on your dashboard. Press the thermometer on you main display for\nverbose options."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["You should press the E-stop button prior to turning the motors on / off\n(with ",(0,s.jsx)(t.code,{children:"m10_on"}),", ",(0,s.jsx)(t.code,{children:"m11_on"}),", ",(0,s.jsx)(t.code,{children:"m12_on"}),", ",(0,s.jsx)(t.code,{children:"m13_on"}),").\nFailure to do so will brake the wheels until it is pressed -> released."]})}),"\n",(0,s.jsx)(t.admonition,{title:"pro tip",type:"tip",children:(0,s.jsx)(t.p,{children:"When in question of your Dashboard settings, go to Advanced Settings > Factory Settings Reset, and\nget the default values set all at once."})}),"\n",(0,s.jsx)(t.h3,{id:"the-pendant-settings",children:"The Pendant Settings"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/b458227f-3422-4c43-8602-58c56b1c0dba"}),"\n",(0,s.jsx)(t.p,{children:"This is the hub for the pendant. Here is where you can confirm data reception and overall\nfunctionality. Pressing on the icon will take you to the calibration screen."}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/a73710af-f00e-4c34-a492-c487f7380e22"}),"\n",(0,s.jsx)(t.p,{children:"A green square around the center dot indicates that the your pendant is properly calibrated."}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/b0232548-6f36-480c-900f-0faeeb236b65"}),"\n",(0,s.jsx)(t.p,{children:"A purple square indicates the need to re-calibrate your pendant."}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"If your Amiga begins to move on its own at start up, chances are that your pendant needs to be\ncalibrated. With the above image in mind (purple square around the white dot), your Amiga would\nmove forwards and towards the right at start up."})}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/8bc4980b-d6f4-445b-b772-0b7e46b7eb1a"}),"\n",(0,s.jsx)(t.p,{children:"Pressing the Pendant image on the right will show the latest button configurations."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"The arrows (up/down/left/right) in the center of the pendant are used to select and engage with the\nH-Bridge(s)."})}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/0f880f2a-3958-4066-989d-d68b68547665"}),"\n",(0,s.jsx)(t.p,{children:"These are the button configurations for those of you who purchased a Kar-Tech controller."}),"\n",(0,s.jsx)(t.h3,{id:"h-bridge-settings",children:"H-bridge settings"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/bd24caf0-01c7-4647-b6ba-9ce6c55c47aa"}),"\n",(0,s.jsxs)(t.p,{children:["An H bridge circuit allows you to apply a voltage across a load (i.e. a linear actuator)\nin either direction. We currently support up to four h bridge modules on the Amiga.\nThey can be engaged momentarily or latched.\nThe ",(0,s.jsx)(t.code,{children:"up"})," - ",(0,s.jsx)(t.code,{children:"down"})," arrows are used to control the selected H bridge device(s)\nand the ",(0,s.jsx)(t.code,{children:"left"})," - ",(0,s.jsx)(t.code,{children:"right"})," arrow keys are used to select between H-bridge devices.\nTwo H-bridge devices (0 & 1 or 2 & 3) can be coupled with the ",(0,s.jsx)(t.strong,{children:"coupler"})," button and actuated together."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Our ",(0,s.jsx)(t.a,{href:"https://farm-ng.com/products/cat-zero-3-point-lift-kit",children:"3 point hitch"}),"\nis temporarily engaged by the ",(0,s.jsx)(t.a,{href:"https://farm-ng.com/products/h-bridge-for-canbus-accessory-control",children:"H bridge"}),"\nto lift and lower the ",(0,s.jsx)(t.a,{href:"https://farm-ng.com/products/cat-0-a-frame-kit",children:"A frame"}),"\nwhich you can use to engage a ",(0,s.jsx)(t.a,{href:"https://farm-ng.com/products/mounted-6-line-seeder",children:"seeder"}),".\nAlternatively, you can use the latching function in a sprayer system."]})}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/93f1e736-9796-4959-a32c-fdd7bd7457b8"}),"\n",(0,s.jsx)(t.p,{children:"By default, the first H-bridge that is connected will fill the 0 position in green.\nYou can switch between MOMENTARY and LATCHING states by tapping on the desired state on the Dashboard."}),"\n",(0,s.jsxs)(t.p,{children:["If you expect a H-bridge device but it is not showing up,\nplease reach out to us via farm-ng's\n",(0,s.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/support/",children:"Support"})," page."]}),"\n",(0,s.jsx)(t.h3,{id:"id-settings",children:"ID settings"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/4ea758d8-5a1e-47fc-ae93-567306267af1"}),"\n",(0,s.jsxs)(t.p,{children:["This page displays your ",(0,s.jsx)(t.code,{children:"Tractor Hardware ID"}),", ",(0,s.jsx)(t.code,{children:"Dashboard Firmware"})," version,\nand enables you to launch the ",(0,s.jsx)(t.code,{children:"Updator App"})," where you can carry out Over-the-Air updates."]}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/e01028c1-cccd-4cff-b2db-62fef69cd9d5"}),"\n",(0,s.jsx)(t.h4,{id:"updator-app",children:"Updator App"}),"\n",(0,s.jsxs)(t.p,{children:["On the ",(0,s.jsx)(t.code,{children:"Updator App"}),", you will be able to update your Amiga dashboard and Updator app itself\nthrough here. You can use the ",(0,s.jsx)(t.code,{children:"Updator App"})," to perform an Over-the-air update."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["For more information about Firmware Updates or how to perform an update,\nplease visit ",(0,s.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/dashboard/dashboard-fw",children:"Dashboard Firmware Update"})]})}),"\n",(0,s.jsx)(t.h3,{id:"pto-settings",children:"PTO settings"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/40511d77-a07a-4344-a532-2118d0e61b62"}),"\n",(0,s.jsx)(t.p,{children:"The PTO (power take-off) screen allows you to select between devices (PTO0 &PTO1), fine tune their\nsettings and monitor their performance.\nWe currently support up to two PTO's running at the same time."}),"\n",(0,s.jsx)(t.p,{children:"When you connect a PTO device, you will have access to the following features:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A slider control that enables you to increase or decrease the PTO's RPM."}),"\n",(0,s.jsx)(t.li,{children:"Directional control by means of a toggle switch on the touchscreen."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"On the left side of the screen you will see a graph displaying the current PTO set-point &\nmeasured rpm values."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"The default, min, & max values for the RPM slider can be configured on the settings page.\nThe PTO gear ratio can also be configured on the settings page."})}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/e08dd594-e229-4820-904c-9e4f9aeb2bc1"}),"\n",(0,s.jsx)(t.p,{children:"Occasionally a message stating that no PTO device has been detected will be accompanied by the\nfollowing image.\nInspect all cables and make sure they are properly connected."}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/bf3d2a67-d10b-41ca-b35b-89fc0f3a1199"}),"\n",(0,s.jsxs)(t.p,{children:["If you expect a PTO device but it is not showing up,\nplease reach out to us via farm-ng's\n",(0,s.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/support/",children:"Support"})," page."]}),"\n",(0,s.jsx)(t.h3,{id:"advanced-settings",children:"Advanced settings"}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/33a4aa3c-ac1f-436b-89c7-b5ef84a66004"}),"\n",(0,s.jsx)(t.p,{children:"This page allows you to deep dive into the dashboard's firmware"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Reboot Dashboard"}),": This will give a soft reboot to the dashboard\nwithout having to power cycle your Amiga."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Factory Setting Reset"}),": This setting will revert the general settings such as\n",(0,s.jsx)(t.code,{children:"wheel_track"}),", ",(0,s.jsx)(t.code,{children:"max_turn_rate"}),", and more, back to the factory default values.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"NOTE: These may not match the values when you first received your Amiga\nif you do not have the standard configuration."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Mount CIRCUITPY"}),": When you would like to Mount CIRCUITPY to update the Dashboard Firmware,\nhere is where you will do that in order for your computer to communicate with your Dashboard."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Bootloader Mode"}),": Similar to ",(0,s.jsx)(t.code,{children:"Mount CIRCUITPY"}),",\nwhen you would like to update the UF2 file on the dashboard you will need to\nplace it in a ",(0,s.jsx)(t.code,{children:"Bootloader"})," state. With this button you can perform that action."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:"https://github.com/farm-ng/amiga-dev-kit/assets/133177230/55e969d6-1a83-4e4d-a5cc-135f27475af0"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["For more information about Firmware Updates or how to perform an update,\nplease visit ",(0,s.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/dashboard/dashboard-fw",children:"Dashboard Firmware Update"})]})}),"\n",(0,s.jsx)(t.h3,{id:"state-indicators",children:"State Indicators"}),"\n",(0,s.jsxs)(t.p,{children:["The state indicators are for defining and understanding which control state your Amiga is in.\nThese states include, but are not limited to, ",(0,s.jsx)(t.code,{children:"E-stopped"}),", ",(0,s.jsx)(t.code,{children:"Auto_ready"}),", and ",(0,s.jsx)(t.code,{children:"Cruise Control"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"e-stopped",children:"E-Stopped"}),"\n",(0,s.jsx)("img",{src:"https://user-images.githubusercontent.com/64480560/232072807-af5208a0-786f-4ae8-8204-a5eef1999d02.jpg",width:"320",height:"300"}),"\n",(0,s.jsx)("img",{src:"https://user-images.githubusercontent.com/64480560/232072818-d87e312f-88a2-4a6a-8f42-d8682aecd6c5.jpg",width:"315",height:"300"}),"\n",(0,s.jsx)(t.p,{children:"When your Amiga is E-stopped, a red border will display around the edges of your dashboard screen.\nWhen your Amiga is in this state, your motor controller will be un able to move on command."}),"\n",(0,s.jsx)(t.h4,{id:"cruise-control",children:"Cruise Control"}),"\n",(0,s.jsx)("img",{src:"https://user-images.githubusercontent.com/64480560/232084662-8b3dcd53-06ac-4479-946a-97471815cb60.gif",width:"315",height:"300"}),"\n",(0,s.jsxs)(t.p,{children:["This state will enable you to place your Amiga at a given speed and allow your Amiga to ",(0,s.jsx)(t.code,{children:"cruise"}),"\nat that speed. When this control state is activated,\na green border will be at the edge of your dashboard screen."]}),"\n",(0,s.jsx)(t.h4,{id:"auto-control",children:"Auto Control"}),"\n",(0,s.jsx)("img",{src:"https://user-images.githubusercontent.com/64480560/232085022-4a475981-e7fa-4e8f-967b-06827ca8924c.gif",width:"315",height:"300"}),"\n",(0,s.jsxs)(t.p,{children:["This state will enable you to control your Amiga via external controls and through remote source.\nSome of these sources include the ",(0,s.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/tutorials/virtual_joystick/virtual-joystick-overview",children:(0,s.jsx)(t.code,{children:"virtual_joy_stick"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["When you activate the ",(0,s.jsx)(t.code,{children:"auto_control"})," feature on your dashboard.\nYou will see a yellow border appear around the edge of your dashboard.\nThis yellow border means your Amiga in the ",(0,s.jsx)(t.code,{children:"auto_ready"})," state and once the connection is secure\nit will then gain a green border meaning it is in the ",(0,s.jsx)(t.code,{children:"auto_active"})," state."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["For more information about Amiga Control States , please visit ",(0,s.jsx)(t.a,{href:"https://amiga.farm-ng.com/docs/dashboard/control-states",children:"Amiga Control States"})]})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);