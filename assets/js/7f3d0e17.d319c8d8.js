"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"dashboard",title:"Introduction"},o="farm-ng Dash",i={unversionedId:"dashboard",id:"dashboard",title:"Introduction",description:"Description",source:"@site/docs/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/amiga-dev-kit/docs/dashboard",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/dashboard.md",tags:[],version:"current",frontMatter:{id:"dashboard",title:"Introduction"},sidebar:"docs",previous:{title:"Introduction",permalink:"/amiga-dev-kit/docs/brain"},next:{title:"Microntroller Kit",permalink:"/amiga-dev-kit/docs/microcontroller-kit"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Features overview",id:"features-overview",level:2},{value:"Firmware updates",id:"firmware-updates",level:2},{value:"farm-ng Amiga application update",id:"farm-ng-amiga-application-update",level:3},{value:"UF2 bootloader update",id:"uf2-bootloader-update",level:3},{value:"Overview",id:"overview",level:4},{value:"Bootloader update instructions",id:"bootloader-update-instructions",level:4},{value:"Mechanical",id:"mechanical",level:2},{value:"Connections",id:"connections",level:2},{value:"Pinouts",id:"pinouts",level:3},{value:"CAN/Power input",id:"canpower-input",level:3},{value:"CAN/Power output (accessories)",id:"canpower-output-accessories",level:3},{value:"Debug",id:"debug",level:3}],u={toc:p};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"farm-ng-dash"},"farm-ng Dash"),(0,r.kt)("img",{src:"./assets/DSCF6570-2-16x9-aspect-reduced.jpg",alt:"Dash_Iso",width:"600;"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Farm-ng's Dashboard is a ruggedized, waterproof, outdoor-visible touch-screen display and machine controller - customizable through our ADK (Amiga-Dev-Kit) toolset!"),(0,r.kt)("p",null,"Under the hood is a simple yet powerful embedded microcontroller based on Adafruit's Feather M4 CAN, which runs CircuitPython and makes building your own custom interfaces as simple as connecting a USB cable and writing a few lines of code.  If you've been looking for a microcontroller and display that can handle harsh environments, look no further!"),(0,r.kt)("p",null,"The Dashboard comes with a Wifi modem and CANbus transceiver on board, and is powered over an industrial M12 connector compatible with the Amiga.  Includes debug cable."),(0,r.kt)("h2",{id:"features-overview"},"Features overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The farm-ng Dash display is a Beta early release product, specification and rating are subject to change")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specifications"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input Power"),(0,r.kt)("td",{parentName:"tr",align:null},"12/24 volts (9-28vdc)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power consumption"),(0,r.kt)("td",{parentName:"tr",align:null},"~2.5 watts, <5watts (depending usage, wifi, and brightness)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Screen"),(0,r.kt)("td",{parentName:"tr",align:null},'4.3" High brightness (850cd/m2) optically bonded IPS display, 480x272 resolution')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Touch"),(0,r.kt)("td",{parentName:"tr",align:null},"Industrial capacitive touch screen controller, tunable for gloves and wet environment (Tuning requires customization)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,r.kt)("td",{parentName:"tr",align:null},"Microchip SAM ATSAME51 32-Bit Arm Cortex M4 running at 120MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ecosystem"),(0,r.kt)("td",{parentName:"tr",align:null},"Circuitpython based development, compatible with Adafruit Feather M4 CAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Environmental rating"),(0,r.kt)("td",{parentName:"tr",align:null},"IP65 (Validation pending)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Temp rating"),(0,r.kt)("td",{parentName:"tr",align:null},"-20c to -70c ambient")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vibration and Shock"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Basic dimensions"),(0,r.kt)("td",{parentName:"tr",align:null},"xxx (Not including shroud)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Weight"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD")))),(0,r.kt)("h2",{id:"firmware-updates"},"Firmware updates"),(0,r.kt)("p",null,"At farm-ng, we are regularly updating and improving our firmware as we continue to develop the Amiga platform.\nWe want to get every new feature, performance improvement, and reliability increase out to you as soon as we can.\nAnd we want to enable you to easily upgrade your dashboard with these improvements at your convenience."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We're actively working on over-the-air (OTA) firmware updates for our dashboard.\nOnce we've stabilized the wifi interface on the dashboard and ensured the\nOTA updater is robust, we'll make this available to you."),(0,r.kt)("p",{parentName:"blockquote"},"In the meantime, make sure you have your ",(0,r.kt)("a",{parentName:"p",href:"debug_cable/"},"debug cable")," handy before proceeding with any firmware or UF2 updates.\nIf you don't have one, check out the options on our ",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/pages/for-developers"},"For Developers")," page.")),(0,r.kt)("h3",{id:"farm-ng-amiga-application-update"},"farm-ng Amiga application update"),(0,r.kt)("p",null,"To upgrade your Dashboard with the latest Amiga application, grab your Dashboard and your debug cable and take the following steps:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," This process is currently only supported on Windows and Mac.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access the files:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the application zip file ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/amiga-dev-kit/releases/download/amiga-dash-v0.0.3/amiga-dash-v0.0.3.zip"},"amiga-dash-v0.0.3.zip")),(0,r.kt)("li",{parentName:"ol"},"For more details on the release navigate to the release page (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.0.3)%5Bhttps://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.0.3%5D"},"https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.0.3)[https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.0.3]"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connect to your dashboard:")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Power down your dashboard."),(0,r.kt)("li",{parentName:"ol"},"Connect the debug cable into the back of the dashboard. See ",(0,r.kt)("a",{parentName:"li",href:"debug_cable/"},"debug cable")," for details."),(0,r.kt)("li",{parentName:"ol"},"Connect your Windows or Mac PC to the USB / debug breakout micro-USB port (not the smaller, serial breakout)."),(0,r.kt)("li",{parentName:"ol"},"Reconnect your dashboard to power so a folder automatically pops up under the name ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," and resembles the example below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CIRCUITPY mounted")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CIRCUITPY",src:a(5368).Z,width:"879",height:"414"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update the firmware:")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Select all files in the mounted CIRCUITPY drive and delete them"),(0,r.kt)("li",{parentName:"ol"},"This ",(0,r.kt)("em",{parentName:"li"},"may")," freeze the dash on the screen it was displaying."),(0,r.kt)("li",{parentName:"ol"},"Drag and drop all extracted files from the downloaded firmware update."),(0,r.kt)("li",{parentName:"ol"},"Make sure to drop the ",(0,r.kt)("inlineCode",{parentName:"li"},"node_id.txt"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"main.py"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"boot.py"),", & ",(0,r.kt)("inlineCode",{parentName:"li"},"app/")," files directly into the root of the ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," drive (as below)."),(0,r.kt)("li",{parentName:"ol"},"The firmware will ",(0,r.kt)("strong",{parentName:"li"},"NOT")," load if the files are nested in a subfolder."),(0,r.kt)("li",{parentName:"ol"},"Once the file transfer is complete, power cycle your dashboard (disconnect & reconnect power) and check the basic functionality."),(0,r.kt)("li",{parentName:"ol"},"If all is as expected, you're good to go. Just power down the dashboard, disconnect the debug cable, and enjoy your new features!"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[Recommended]")," Navigate to the configuration tab (gear icon) on the dashboard, and select the pendant icon to calibrate your pendant and confirm functionality."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[Recommended]")," Also check the settings and ensure your desired wheel track and turning speed values remain.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CIRCUITPY updated")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CIRCUITPY updated",src:a(5241).Z,width:"904",height:"331"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If the file transfer process fails, just delete all files in CIRCUITPY and try it again."),(0,r.kt)("li",{parentName:"ul"},"Repeated hot plugging / unplugging of the dashboard can cause the filesystem to go into an irregular state. Try connecting / disconnecting between dashboard and your PC with the dashboard powered down."),(0,r.kt)("li",{parentName:"ul"},"When in doubt, turn it off and back on again."))),(0,r.kt)("h3",{id:"uf2-bootloader-update"},"UF2 bootloader update"),(0,r.kt)("h4",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Occasionally, it may be recommended to update the bootloader UF2 firmware installed on your dashboard.\nAt farm-ng, we generate a custom UF2 file for our dashboards that are tailored towards the dashboard's use case.\nFor example, we've increased the capacity of the receive queue for the CAN module,\nwhich reduces the likelihood of dropped messages!"),(0,r.kt)("p",null,"The farm-ng UF2 releases may come out following a CircuitPython stable release,\nor if we find more modifications that significantly improve performance or enable new features."),(0,r.kt)("p",null,"To learn more about the topic of UF2 bootloader files,\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/adafruit-feather-m0-express-designed-for-circuit-python-circuitpython/uf2-bootloader-details"},"Adafruit UF2 details"),"\nis a great place to start!"),(0,r.kt)("h4",{id:"bootloader-update-instructions"},"Bootloader update instructions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," This process is currently only supported on Windows and Mac.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access the files:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/amiga-dev-kit/releases/download/fw-dash-v1.0.0/fw-dash-v1.0.0.uf2"},"UF2 file")),(0,r.kt)("li",{parentName:"ol"},"For more details on the UF2 file release see the release page here: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/amiga-dev-kit/releases/tag/fw-dash-v1.0.0"},"https://github.com/farm-ng/amiga-dev-kit/releases/tag/fw-dash-v1.0.0"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connect to your dashboard:")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Power down your dashboard."),(0,r.kt)("li",{parentName:"ol"},"Connect the debug cable into the back of the dashboard. See ",(0,r.kt)("a",{parentName:"li",href:"./debug_cable/"},"debug cable")," for details."),(0,r.kt)("li",{parentName:"ol"},"Connect your Windows or Mac PC to the USB / debug breakout micro-USB port (not the smaller, serial breakout)."),(0,r.kt)("li",{parentName:"ol"},"Reconnect your dashboard to power so a folder automatically pops up under the name ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY"),", as with the farm-ng firmware update example above.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Load into BOOTLOADER mode")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"With the dashboard connected to your PC, double click the reset button on the USB / debug breakout."),(0,r.kt)("li",{parentName:"ol"},"This should remount the dashboard under the name ",(0,r.kt)("inlineCode",{parentName:"li"},"AMIGA")," and resemble the example below."),(0,r.kt)("li",{parentName:"ol"},"The timing of the double click can be a little tricky, so if it mounts as ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY"),", just try again until it mounts as ",(0,r.kt)("inlineCode",{parentName:"li"},"AMIGA"),"."),(0,r.kt)("li",{parentName:"ol"},"Drag and drop the newly downloaded UF2 file onto the mounted drive."),(0,r.kt)("li",{parentName:"ol"},"This will immediately cause the bootloader firmware to update, and the dashboard will automatically reboot as ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," once complete.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," The farm-ng firmware you may have just updated should remain untouched, so the order is not important if you are updating both types of firmware.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AMIGA mounted")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AMIGA",src:a(4285).Z,width:"910",height:"309"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,r.kt)("p",{parentName:"blockquote"},"In rare cases, the board could go into an update failure mode.\nIn this case, the microcontroller inside the dashboard is restored to factory default ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello world")," example.\nThis will be characterized by no display on the dash and no response.\nYou can double check this occurred by opening the file named ",(0,r.kt)("inlineCode",{parentName:"p"},"code.py")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py"),") and seeing that there is only a single line of code ",(0,r.kt)("inlineCode",{parentName:"p"},"print('hello world')"),".\nIn this case, you should go through both the UF2 and farm-ng firmware update steps.")),(0,r.kt)("h2",{id:"mechanical"},"Mechanical"),(0,r.kt)("h2",{id:"connections"},"Connections"),(0,r.kt)("img",{src:"./assets/Dash_Connectors.png",alt:"Dash_Connectors",width:"600;"}),(0,r.kt)("h3",{id:"pinouts"},"Pinouts"),(0,r.kt)("img",{src:"./assets/Dash_Pinout.png",alt:"Dash_Pinout",width:"600;"}),(0,r.kt)("h3",{id:"canpower-input"},"CAN/Power input"),(0,r.kt)("p",null,"Mating connector M12-5 A code female"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PIN"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Typical Wire Color"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Shield"),(0,r.kt)("td",{parentName:"tr",align:null},"Bare/Green"),(0,r.kt)("td",{parentName:"tr",align:null},"Should only be grounded at one end")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Supply +24vdc"),(0,r.kt)("td",{parentName:"tr",align:null},"Red"),(0,r.kt)("td",{parentName:"tr",align:null},"farm-ng uses 24v")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Black"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"CAN_High"),(0,r.kt)("td",{parentName:"tr",align:null},"White"),(0,r.kt)("td",{parentName:"tr",align:null},"Needs at least one termination, and two devices to function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"CAN_Low"),(0,r.kt)("td",{parentName:"tr",align:null},"Blue"),(0,r.kt)("td",{parentName:"tr",align:null},"Needs at least one termination, and two devices to function.")))),(0,r.kt)("h3",{id:"canpower-output-accessories"},"CAN/Power output (accessories)"),(0,r.kt)("p",null,"Mating connector M12-5 A code male"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PIN"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Typical Wire Color"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Shield"),(0,r.kt)("td",{parentName:"tr",align:null},"Bare/Green"),(0,r.kt)("td",{parentName:"tr",align:null},"Should only be grounded at one end")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Supply +24vdc"),(0,r.kt)("td",{parentName:"tr",align:null},"Red"),(0,r.kt)("td",{parentName:"tr",align:null},"farm-ng uses 24v")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Black"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"CAN_High"),(0,r.kt)("td",{parentName:"tr",align:null},"White"),(0,r.kt)("td",{parentName:"tr",align:null},"Needs at least one termination, and two devices to function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"CAN_Low"),(0,r.kt)("td",{parentName:"tr",align:null},"Blue"),(0,r.kt)("td",{parentName:"tr",align:null},"Needs at least one termination, and two devices to function.")))),(0,r.kt)("h3",{id:"debug"},"Debug"),(0,r.kt)("p",null,"Mating connector M12-8 A code female"),(0,r.kt)("p",null,"Debug wire colors based on common cable with flying leads used on farm-ng built debug kits. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PIN"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Typical Wire Color"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"RESET"),(0,r.kt)("td",{parentName:"tr",align:null},"White"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"TTL RX (3.3v)"),(0,r.kt)("td",{parentName:"tr",align:null},"Brown"),(0,r.kt)("td",{parentName:"tr",align:null},"Connect to TX of interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"TTL TX (3.3v)"),(0,r.kt)("td",{parentName:"tr",align:null},"Green"),(0,r.kt)("td",{parentName:"tr",align:null},"Connect to RX of interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"USB D-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"UDB D+"),(0,r.kt)("td",{parentName:"tr",align:null},"Gray"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"USB VBUS"),(0,r.kt)("td",{parentName:"tr",align:null},"Pink"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"NC"),(0,r.kt)("td",{parentName:"tr",align:null},"Blue"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Black"),(0,r.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0},4285:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/AMIGA_mounted_windows-b427b59dc37d5c0e80ef94eadad54738.png"},5368:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CIRCUITPY_mounted_windows-40403ea75c87af4bd1a5f7b8388e95ad.png"},5241:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CIRCUITPY_updated_windows-d9a36ce8c33cea2c9a2058c71914a82b.png"}}]);