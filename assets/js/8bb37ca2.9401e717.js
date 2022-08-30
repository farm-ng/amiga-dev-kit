"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[703],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||n;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=a(7462),r=(a(7294),a(3905));const n={id:"dashboard-fw",title:"Dashboard Firmware Updates"},i="farm-ng Dash",l={unversionedId:"dashboard/dashboard-fw",id:"dashboard/dashboard-fw",title:"Dashboard Firmware Updates",description:"DSCF6570-2-16x9-aspect-reduced",source:"@site/docs/dashboard/fw_updates.md",sourceDirName:"dashboard",slug:"/dashboard/dashboard-fw",permalink:"/amiga-dev-kit/docs/dashboard/dashboard-fw",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/dashboard/fw_updates.md",tags:[],version:"current",frontMatter:{id:"dashboard-fw",title:"Dashboard Firmware Updates"},sidebar:"docs",previous:{title:"Dashboard Introduction",permalink:"/amiga-dev-kit/docs/dashboard/"},next:{title:"Debug Cable Introduction",permalink:"/amiga-dev-kit/docs/debug_cable/"}},d={},s=[{value:"Firmware updates",id:"firmware-updates",level:2},{value:"farm-ng Amiga application update",id:"farm-ng-amiga-application-update",level:3},{value:"UF2 bootloader update",id:"uf2-bootloader-update",level:3},{value:"Overview",id:"overview",level:4},{value:"Bootloader update instructions",id:"bootloader-update-instructions",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"farm-ng-dash"},"farm-ng Dash"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11846963/186734463-aa149b3a-7510-4d5a-99ea-f9a8a96775d2.jpg",alt:"DSCF6570-2-16x9-aspect-reduced"})),(0,r.kt)("h2",{id:"firmware-updates"},"Firmware updates"),(0,r.kt)("p",null,"At farm-ng, we are regularly updating and improving our firmware as we continue to develop the Amiga platform.\nWe want to get every new feature, performance improvement, and reliability increase out to you as soon as we can.\nAnd we want to enable you to easily upgrade your dashboard with these improvements at your convenience."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We're actively working on over-the-air (OTA) firmware updates for our dashboard.\nOnce we've stabilized the wifi interface on the dashboard and ensured the\nOTA updater is robust, we'll make this available to you."),(0,r.kt)("p",{parentName:"blockquote"},"In the meantime, make sure you have your ",(0,r.kt)("a",{parentName:"p",href:"./../debug_cable/"},"debug cable")," handy before proceeding with any firmware or UF2 updates.\nIf you don't have one, check out the options on our ",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng.com/pages/for-developers"},"For Developers")," page.")),(0,r.kt)("h3",{id:"farm-ng-amiga-application-update"},"farm-ng Amiga application update"),(0,r.kt)("p",null,"To upgrade your Dashboard with the latest Amiga application, grab your Dashboard and your debug cable and take the following steps:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," This process is currently only supported on Windows and Mac.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access the files:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the application zip file ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/amiga-dev-kit/releases/download/amiga-dash-v0.0.3/amiga-dash-v0.0.3.zip"},"amiga-dash-v0.0.3.zip")),(0,r.kt)("li",{parentName:"ol"},"For more details on the release navigate to the release page (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.0.3)%5Bhttps://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.0.3%5D"},"https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.0.3)[https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.0.3]"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connect to your dashboard:")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Power down your dashboard."),(0,r.kt)("li",{parentName:"ol"},"Connect the debug cable into the back of the dashboard. See ",(0,r.kt)("a",{parentName:"li",href:"./../debug_cable/"},"debug cable")," for details."),(0,r.kt)("li",{parentName:"ol"},"Connect your Windows or Mac PC to the USB / debug breakout micro-USB port (not the smaller, serial breakout)."),(0,r.kt)("li",{parentName:"ol"},"Reconnect your dashboard to power so a folder automatically pops up under the name ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," and resembles the example below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CIRCUITPY mounted")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CIRCUITPY",src:a(4455).Z,width:"879",height:"414"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update the firmware:")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Select all files in the mounted CIRCUITPY drive and delete them"),(0,r.kt)("li",{parentName:"ol"},"This ",(0,r.kt)("em",{parentName:"li"},"may")," freeze the dash on the screen it was displaying."),(0,r.kt)("li",{parentName:"ol"},"Drag and drop all extracted files from the downloaded firmware update."),(0,r.kt)("li",{parentName:"ol"},"Make sure to drop the ",(0,r.kt)("inlineCode",{parentName:"li"},"node_id.txt"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"main.py"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"boot.py"),", & ",(0,r.kt)("inlineCode",{parentName:"li"},"app/")," files directly into the root of the ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," drive (as below)."),(0,r.kt)("li",{parentName:"ol"},"The firmware will ",(0,r.kt)("strong",{parentName:"li"},"NOT")," load if the files are nested in a subfolder."),(0,r.kt)("li",{parentName:"ol"},"Once the file transfer is complete, power cycle your dashboard (disconnect & reconnect power) and check the basic functionality."),(0,r.kt)("li",{parentName:"ol"},"If all is as expected, you're good to go. Just power down the dashboard, disconnect the debug cable, and enjoy your new features!"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[Recommended]")," Navigate to the configuration tab (gear icon) on the dashboard, and select the pendant icon to calibrate your pendant and confirm functionality."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[Recommended]")," Also check the settings and ensure your desired wheel track and turning speed values remain.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CIRCUITPY updated")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CIRCUITPY updated",src:a(9623).Z,width:"904",height:"331"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If the file transfer process fails, just delete all files in CIRCUITPY and try it again."),(0,r.kt)("li",{parentName:"ul"},"Repeated hot plugging / unplugging of the dashboard can cause the filesystem to go into an irregular state. Try connecting / disconnecting between dashboard and your PC with the dashboard powered down."),(0,r.kt)("li",{parentName:"ul"},"When in doubt, turn it off and back on again."))),(0,r.kt)("h3",{id:"uf2-bootloader-update"},"UF2 bootloader update"),(0,r.kt)("h4",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Occasionally, it may be recommended to update the bootloader UF2 firmware installed on your dashboard.\nAt farm-ng, we generate a custom UF2 file for our dashboards that are tailored towards the dashboard's use case.\nFor example, we've increased the capacity of the receive queue for the CAN module,\nwhich reduces the likelihood of dropped messages!"),(0,r.kt)("p",null,"The farm-ng UF2 releases may come out following a CircuitPython stable release,\nor if we find more modifications that significantly improve performance or enable new features."),(0,r.kt)("p",null,"To learn more about the topic of UF2 bootloader files,\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/adafruit-feather-m0-express-designed-for-circuit-python-circuitpython/uf2-bootloader-details"},"Adafruit UF2 details"),"\nis a great place to start!"),(0,r.kt)("h4",{id:"bootloader-update-instructions"},"Bootloader update instructions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," This process is currently only supported on Windows and Mac.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access the files:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/amiga-dev-kit/releases/download/fw-dash-v1.0.0/fw-dash-v1.0.0.uf2"},"UF2 file")),(0,r.kt)("li",{parentName:"ol"},"For more details on the UF2 file release see the release page here: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/farm-ng/amiga-dev-kit/releases/tag/fw-dash-v1.0.0"},"https://github.com/farm-ng/amiga-dev-kit/releases/tag/fw-dash-v1.0.0"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connect to your dashboard:")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Power down your dashboard."),(0,r.kt)("li",{parentName:"ol"},"Connect the debug cable into the back of the dashboard. See ",(0,r.kt)("a",{parentName:"li",href:"./../debug_cable/"},"debug cable")," for details."),(0,r.kt)("li",{parentName:"ol"},"Connect your Windows or Mac PC to the USB / debug breakout micro-USB port (not the smaller, serial breakout)."),(0,r.kt)("li",{parentName:"ol"},"Reconnect your dashboard to power so a folder automatically pops up under the name ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY"),", as with the farm-ng firmware update example above.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Load into BOOTLOADER mode")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"With the dashboard connected to your PC, double click the reset button on the USB / debug breakout."),(0,r.kt)("li",{parentName:"ol"},"This should remount the dashboard under the name ",(0,r.kt)("inlineCode",{parentName:"li"},"AMIGA")," and resemble the example below.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"NOTE:")," The timing of the double click can be a little tricky, so if it mounts as ",(0,r.kt)("inlineCode",{parentName:"p"},"CIRCUITPY"),", just try again until it mounts as ",(0,r.kt)("inlineCode",{parentName:"p"},"AMIGA"),".\nIf you cannot get the double click timing correct, you can enter BOOTLOADER mode with the following advanced user steps:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Open a serial console connected to the dashboard (see: ",(0,r.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console"},"Adafruit connecting to the serial console"),")"),(0,r.kt)("li",{parentName:"ol"},"Pause the program with ",(0,r.kt)("inlineCode",{parentName:"li"},"ctrl+C")),(0,r.kt)("li",{parentName:"ol"},"Enter the following commands in the REPL")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"import microcontroller\nmicrocontroller.on_next_reset(microcontroller.RunMode.BOOTLOADER)\nmicrocontroller.reset()\n")))),(0,r.kt)("li",{parentName:"ol"},"Drag and drop the newly downloaded UF2 file onto the mounted drive."),(0,r.kt)("li",{parentName:"ol"},"This will immediately cause the bootloader firmware to update, and the dashboard will automatically reboot as ",(0,r.kt)("inlineCode",{parentName:"li"},"CIRCUITPY")," once complete.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," The farm-ng firmware you may have just updated should remain untouched, so the order is not important if you are updating both types of firmware.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AMIGA mounted")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AMIGA",src:a(8316).Z,width:"910",height:"309"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,r.kt)("p",{parentName:"blockquote"},"In rare cases, the board could go into an update failure mode.\nIn this case, the microcontroller inside the dashboard is restored to factory default ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello world")," example.\nThis will be characterized by no display on the dash and no response.\nYou can double check this occurred by opening the file named ",(0,r.kt)("inlineCode",{parentName:"p"},"code.py")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py"),") and seeing that there is only a single line of code ",(0,r.kt)("inlineCode",{parentName:"p"},"print('hello world')"),".\nIn this case, you should go through both the UF2 and farm-ng firmware update steps.")))}u.isMDXComponent=!0},8316:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/AMIGA_mounted_windows-b427b59dc37d5c0e80ef94eadad54738.png"},4455:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/CIRCUITPY_mounted_windows-40403ea75c87af4bd1a5f7b8388e95ad.png"},9623:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/CIRCUITPY_updated_windows-d9a36ce8c33cea2c9a2058c71914a82b.png"}}]);