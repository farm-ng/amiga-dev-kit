"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[3253],{3037:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});var i=r(5893),o=r(1151);const a={id:"dashboard-fw",title:"Dashboard Firmware Updates"},s=void 0,t={id:"dashboard/dashboard-fw",title:"Dashboard Firmware Updates",description:"Dashboard firmware updates",source:"@site/docs/dashboard/fw_updates.md",sourceDirName:"dashboard",slug:"/dashboard/dashboard-fw",permalink:"/docs/dashboard/dashboard-fw",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/dashboard/fw_updates.md",tags:[],version:"current",frontMatter:{id:"dashboard-fw",title:"Dashboard Firmware Updates"},sidebar:"User Manual",previous:{title:"Amiga Control States",permalink:"/docs/dashboard/control-states"},next:{title:"Debugging error codes",permalink:"/docs/dashboard/dashboard-debugging"}},d={},l=[{value:"Dashboard firmware updates",id:"dashboard-firmware-updates",level:2},{value:"Where to start",id:"where-to-start",level:3},{value:"Over-the-air (OTA) Amiga application updates",id:"over-the-air-ota-amiga-application-updates",level:3},{value:"Tips",id:"tips",level:4},{value:"Wired Amiga application updates",id:"wired-amiga-application-updates",level:3},{value:"Access the files",id:"access-the-files",level:4},{value:"Connect to your dashboard",id:"connect-to-your-dashboard",level:4},{value:"CIRCUITPY mounted",id:"circuitpy-mounted",level:5},{value:"Update the firmware",id:"update-the-firmware",level:4},{value:"UF2 bootloader update",id:"uf2-bootloader-update",level:3},{value:"Overview",id:"overview",level:4},{value:"Access the files (UF2)",id:"access-the-files-uf2",level:4},{value:"Connect to your dashboard (UF2)",id:"connect-to-your-dashboard-uf2",level:4},{value:"Load into BOOTLOADER mode",id:"load-into-bootloader-mode",level:4},{value:"AMIGA mounted",id:"amiga-mounted",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"dashboard-firmware-updates",children:"Dashboard firmware updates"}),"\n",(0,i.jsx)(n.p,{children:"At farm-ng, we are regularly updating and improving our firmware\nas we continue to develop the Amiga platform.\nWe want to get every new feature, performance improvement, and\nreliability increase out to you as soon as we can.\nAnd we want to enable you to easily upgrade your dashboard with\nthese improvements at your convenience."}),"\n",(0,i.jsx)(n.h3,{id:"where-to-start",children:"Where to start"}),"\n",(0,i.jsxs)(n.p,{children:["To update the Amiga application layer (our frequent\n",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases",children:(0,i.jsx)(n.strong,{children:"amiga-dash FW releases"})}),"), you can follow either:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#over-the-air-ota-amiga-application-updates",children:(0,i.jsx)(n.strong,{children:"Over-the-air (OTA) Amiga application updates"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Simpler, especially for v0.1.5+"}),"\n",(0,i.jsx)(n.li,{children:"Requires v0.1.1+ already installed"}),"\n",(0,i.jsx)(n.li,{children:"No required materials"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,i.jsx)(n.strong,{children:"Wired Amiga application updates"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Faster"}),"\n",(0,i.jsx)(n.li,{children:"Not dependent upon current installed version"}),"\n",(0,i.jsxs)(n.li,{children:["Requires a ",(0,i.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,i.jsx)(n.strong,{children:"debug cable"})})," or\n",(0,i.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,i.jsx)(n.strong,{children:"service cable"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To update the (infrequent) CircuitPython build releases, please\nfollow ",(0,i.jsx)(n.a,{href:"#uf2-bootloader-update",children:(0,i.jsx)(n.strong,{children:"UF2 bootloader update"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"over-the-air-ota-amiga-application-updates",children:"Over-the-air (OTA) Amiga application updates"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the over-the-air (OTA) firmware update method to\nwirelessly update your amiga dashboard applications from the\ntouchscreen.\nThe updator app is installed alongside the dashboard app,\nstarting with the ",(0,i.jsx)(n.code,{children:"amiga-dash-v0.1.1"})," release."]}),"\n",(0,i.jsxs)(n.p,{children:["For dashboards with earlier versions of the firmware, one\nadditional wired update is required to get to ",(0,i.jsx)(n.code,{children:"v0.1.1"})," or later.\nGrab your ",(0,i.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,i.jsx)(n.strong,{children:"debug cable"})})," or\n",(0,i.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,i.jsx)(n.strong,{children:"service cable"})}),",\nand follow the instructions at\n",(0,i.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,i.jsx)(n.strong,{children:"Wired Amiga application updates"})}),"\nto install the latest release."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For dashboards with the ",(0,i.jsx)(n.code,{children:"v0.1.3"})," ",(0,i.jsx)(n.code,{children:"Updator"})," app installed, you"]}),"\n",(0,i.jsx)(n.li,{children:"will be able to install any available update."}),"\n",(0,i.jsxs)(n.li,{children:["For dashboards with the ",(0,i.jsx)(n.code,{children:"v0.1.1"})," ",(0,i.jsx)(n.code,{children:"Updator"})," app installed, it is\nimportant that you start by updating your\n",(0,i.jsx)(n.code,{children:"Updator"})," app to ",(0,i.jsx)(n.code,{children:"v0.1.3"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can then proceed to updating your ",(0,i.jsx)(n.code,{children:"Dashboard"})," app to\n",(0,i.jsx)(n.code,{children:"v0.1.3"})," (or later) and your ",(0,i.jsx)(n.code,{children:"Updator"})," app to versions later than\n",(0,i.jsx)(n.code,{children:"v0.1.3"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If you have trouble updating your  ",(0,i.jsx)(n.code,{children:"v0.1.1"})," ",(0,i.jsx)(n.code,{children:"Updator"})," app to\n",(0,i.jsx)(n.code,{children:"v0.1.3"}),", please try again.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the update fails during the download, it will pick up\nwhere it left off when you get back to the download stage."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If you are not able to complete the update, you should follow"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,i.jsx)(n.strong,{children:"Wired Amiga application updates"})}),"\nto install the latest release."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["For dashboards without any ",(0,i.jsx)(n.code,{children:"Updator"})," app, you should follow\n",(0,i.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,i.jsx)(n.strong,{children:"Wired Amiga application updates"})})," to install the latest release."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"tips",children:"Tips"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To begin the Over-the-air (OTA) Amiga application updates,\nnavigate to the ID page of the settings tab."}),"\n",(0,i.jsx)(n.li,{children:"If you decide to cancel and update at any step along the\nprocess, you can always exit the Updator app and return to the\ndashboard app by cancelling the current operation, and clicking\nback through the home page."}),"\n",(0,i.jsx)(n.li,{children:"Check the versions on the ID page of the settings tab after you\nupdate"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"wired-amiga-application-updates",children:"Wired Amiga application updates"}),"\n",(0,i.jsx)(n.p,{children:"To upgrade your Dashboard with the latest Amiga application, grab\nyour Dashboard and your debug cable and take the following steps:"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This process is currently only supported on Windows and Mac."})}),"\n",(0,i.jsx)(n.p,{children:"To upgrade your Dashboard with the latest Amiga application,\ngrab your Dashboard and your debug cable and take the following steps:"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"It is required to have a data USB-C cable and not a charge only USB-C cable\nwhen connecting to the debug or service cable."})}),"\n",(0,i.jsx)(n.h4,{id:"access-the-files",children:"Access the files"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the latest application zip file\n",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases/download/amiga-dash-v0.4.0/amiga-dash-v0.4.0.zip",children:"amiga-dash-v0.4.0.zip"})]}),"\n",(0,i.jsxs)(n.li,{children:["For more details on the git latest release navigate to\n",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.4.0",children:"Release: amiga-dash-v0.4.0"})]}),"\n",(0,i.jsx)(n.li,{children:"Extract the files from the zipped folder"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Check out the\n",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases",children:(0,i.jsx)(n.strong,{children:"amiga-dev-kit Releases"})}),"\npage, as there may be an even newer available release."]}),"\n",(0,i.jsxs)(n.li,{children:["Select the newest ",(0,i.jsx)(n.code,{children:"amiga-dash-v#.#.#"})," and download that version.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Do not select a ",(0,i.jsx)(n.code,{children:"fw-dash-v#.#.#"})," or ",(0,i.jsx)(n.code,{children:"pendant-v#.#.#"})," update!"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h4,{id:"connect-to-your-dashboard",children:"Connect to your dashboard"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you don't have a ",(0,i.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,i.jsx)(n.strong,{children:"debug cable"})}),"\nor ",(0,i.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,i.jsx)(n.strong,{children:"service cable"})}),",\nreach out to us using one of the options on our\n",(0,i.jsx)(n.a,{href:"https://farm-ng.com/pages/for-developers",children:(0,i.jsx)(n.strong,{children:"For Developers"})}),"\npage."]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Power down your dashboard."}),"\n",(0,i.jsxs)(n.li,{children:["Connect your ",(0,i.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,i.jsx)(n.strong,{children:"debug cable"})})," or\n",(0,i.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,i.jsx)(n.strong,{children:"service cable"})})," into the\n",(0,i.jsx)(n.a,{href:"/docs/debug_cable/#how-to-connect",children:(0,i.jsx)(n.strong,{children:"Debug port"})})," on the back\nof the dashboard.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["If using a debug cable, connect your Windows or Mac PC to\nthe ",(0,i.jsx)(n.strong,{children:"USB"})," interface:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On newer cables this is the side labelled ",(0,i.jsx)(n.code,{children:"USB"})]}),"\n",(0,i.jsx)(n.li,{children:"On older cables this is the larger purple board"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If using a service cable, you only have the one port."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Reconnect your dashboard to power","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["With ",(0,i.jsx)(n.strong,{children:"very"})," early versions of firmware, a folder\nautomatically pops up under the name ",(0,i.jsx)(n.code,{children:"CIRCUITPY"})," and resembles\nthe example below."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["With versions ",(0,i.jsx)(n.code,{children:"v0.1.8"})," and higher, there is a\n",(0,i.jsx)(n.code,{children:"Mount CIRCUITPY"})," advanced user button that'll reboot the\ndashboard and mount it for Windows or Mac computers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["With older versions, you'll need to manually bring the\n",(0,i.jsx)(n.code,{children:"CIRCUITPY"})," drive up on your Windows or Mac computer by:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open a serial console connected to the dashboard","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you are unfamiliar, see:\n",(0,i.jsx)(n.a,{href:"/docs/reference/faq#using-the-repl",children:(0,i.jsx)(n.strong,{children:"FAQ - Using the REPL"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Interrupt the program with ",(0,i.jsx)(n.code,{children:"ctrl+C"})]}),"\n",(0,i.jsx)(n.li,{children:"Run the following commands in the REPL:"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can copy code blocks on this website by left clicking\nthe icon in the top right corner of the code block.\nPaste the commands in the REPL by right clicking and\nselecting ",(0,i.jsx)(n.code,{children:"Paste"}),"."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"import boot_utils\nboot_utils.mount_circuitpy()\n"})}),"\n",(0,i.jsxs)(n.p,{children:[":::caution If you receive an ",(0,i.jsx)(n.code,{children:"AtributeError:   ModuleNotFound 'mount_circuitpy'"})," error\nYou don't yet have that utility available with your\ninstalled dashboard version.\nTo mount the circuitpy drive, you can instead run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"import os\nimport storage\nimport microcontroller\nstorage.remount(\"/\", False)\nos.remove('boot.py')\nmicrocontroller.reset()\n"})}),"\n",(0,i.jsx)(n.p,{children:":::\n4. The serial console should freeze / exit and the\nCIRCUITPY drive should now show up mounted"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"circuitpy-mounted",children:"CIRCUITPY mounted"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/53625197/187532222-eabfa798-9c01-43c8-8c1e-4ecaa0b673e6.png",alt:"CIRCUITPY"})}),"\n",(0,i.jsx)(n.h4,{id:"update-the-firmware",children:"Update the firmware"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Select all files in the mounted CIRCUITPY drive and delete them"}),"\n",(0,i.jsxs)(n.li,{children:["Drag and drop all extracted files from the downloaded firmware\nupdate.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure to drop ",(0,i.jsx)(n.strong,{children:"all files"})," (",(0,i.jsx)(n.code,{children:"dashboard/"}),", ",(0,i.jsx)(n.code,{children:"updator/"}),",\n",(0,i.jsx)(n.code,{children:"node_id.txt"}),", ",(0,i.jsx)(n.code,{children:"code.py"}),", ",(0,i.jsx)(n.code,{children:"boot.py"}),", etc.) directly into the\nroot of the ",(0,i.jsx)(n.code,{children:"CIRCUITPY"})," drive (as below).","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The firmware will ",(0,i.jsx)(n.strong,{children:"NOT"})," load if the files are nested\nin a subfolder."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Once the file transfer is complete, power cycle your dashboard\n(disconnect & reconnect power) and check the basic functionality.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The dashboard will no longer mount as ",(0,i.jsx)(n.code,{children:"CIRCUITPY"})," when\nconnected to a computer. If you have any issues, go through\nthe connecting / mounting process again OR see the\ntroubleshooting information below."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If all is as expected, you're good to go. Just power down the\ndashboard, disconnect the debug cable, and enjoy your new\nfeatures!"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[Recommended]"})," Navigate to the configuration tab (gear icon)\non the dashboard, and select the pendant icon to calibrate your\npendant and confirm functionality."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[Recommended]"})," Also check the settings and ensure your\ndesired wheel track and turning speed values remain."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/53625197/208778396-68113b71-ddb2-409c-9d0d-acdd9ad887e6.png",alt:"CIRCUITPY_updated_windows"})}),"\n",(0,i.jsx)(n.admonition,{title:"Troubleshooting",type:"caution",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the file transfer process fails, or the behavior is not as\nexpected, just delete all files in CIRCUITPY and try it again.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the dashboard remounts on your computer as ",(0,i.jsx)(n.code,{children:"CIRCUITPY"}),",\njust select all and delete."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the dashboard does NOT remount on your computer as\n",(0,i.jsx)(n.code,{children:"CIRCUITPY"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open a serial console connected to the dashboard (see:\n",(0,i.jsx)(n.a,{href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console",children:(0,i.jsx)(n.strong,{children:"Adafruit connecting to the serial console"})}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Interrupt the program with ",(0,i.jsx)(n.code,{children:"ctrl+C"})]}),"\n",(0,i.jsx)(n.li,{children:"Enter the following commands in the REPL"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"import storage\nstorage.erase_filesystem()\n# The dashboard should reboot automatically\n# If it does not, continue with:\nimport microcontroller\nmicrocontroller.reset()\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['This will reset the microcontroller to a "hello world"\nstate and it should remount as ',(0,i.jsx)(n.code,{children:"CIRCUITPY"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"You can now manually delete all files and try again."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Repeated hot plugging / unplugging of the dashboard can cause\nthe filesystem to go into an irregular state. Try connecting /\ndisconnecting between dashboard and your PC with the dashboard\npowered down."}),"\n",(0,i.jsx)(n.li,{children:"When in doubt, turn it off and back on again."}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"uf2-bootloader-update",children:"UF2 bootloader update"}),"\n",(0,i.jsx)(n.h4,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Occasionally, it may be recommended to update the bootloader UF2\nfirmware installed on your dashboard.\nAt farm-ng, we generate a custom UF2 file for our dashboards that\nare tailored towards the dashboard's use case.\nFor example, we've increased the capacity of the receive queue\nfor the CAN module,\nwhich reduces the likelihood of dropped messages!"}),"\n",(0,i.jsx)(n.p,{children:"The farm-ng UF2 releases may come out following a CircuitPython\nstable release,\nor if we find more modifications that significantly improve\nperformance or enable new features."}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about the topic of UF2 bootloader files,\n",(0,i.jsx)(n.a,{href:"https://learn.adafruit.com/adafruit-feather-m0-express-designed-for-circuit-python-circuitpython/uf2-bootloader-details",children:(0,i.jsx)(n.strong,{children:"Adafruit UF2 details"})}),"\nis a great place to start!"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This process is currently only supported on Windows and Mac."})}),"\n",(0,i.jsx)(n.h4,{id:"access-the-files-uf2",children:"Access the files (UF2)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the latest ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases/download/fw-dash-v1.1.0/fw-dash-v1.1.0.uf2",children:(0,i.jsx)(n.strong,{children:"fw-dash UF2 file"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["For more details on the UF2 file release see the release\npage here: ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases/tag/fw-dash-v1.1.0",children:(0,i.jsx)(n.strong,{children:"Release: fw-dash-v1.1.0"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"connect-to-your-dashboard-uf2",children:"Connect to your dashboard (UF2)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Power down your dashboard."}),"\n",(0,i.jsxs)(n.li,{children:["Connect your ",(0,i.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,i.jsx)(n.strong,{children:"debug cable"})})," or\n",(0,i.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,i.jsx)(n.strong,{children:"service cable"})})," into the\n",(0,i.jsx)(n.a,{href:"/docs/debug_cable/#how-to-connect",children:(0,i.jsx)(n.strong,{children:"Debug port"})})," on the back\nof the dashboard.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["If using a debug cable, connect your Windows or Mac PC to\nthe ",(0,i.jsx)(n.strong,{children:"USB"})," interface:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On newer cables this is the side labelled ",(0,i.jsx)(n.code,{children:"USB"})]}),"\n",(0,i.jsx)(n.li,{children:"On older cables this is the larger purple board"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If using a service cable, you only have the one interface."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Reconnect your dashboard to power so a folder automatically\npops up under the name ",(0,i.jsx)(n.code,{children:"CIRCUITPY"}),", as with the farm-ng firmware\nupdate example above."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"load-into-bootloader-mode",children:"Load into BOOTLOADER mode"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["With the dashboard connected to your PC, load into\n",(0,i.jsx)(n.code,{children:"BOOTLOADER"})," mode so the dashboard remounts under the name\n",(0,i.jsx)(n.code,{children:"AMIGA"})," and resembles the ",(0,i.jsx)(n.strong,{children:"AMIGA mounted"})," example below:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["With versions ",(0,i.jsx)(n.code,{children:"v0.1.8"})," and higher, there is a ",(0,i.jsx)(n.code,{children:"BOOTLOADER"}),"\nadvanced user button that'll reboot the dashboard into\n",(0,i.jsx)(n.code,{children:"BOOTLOADER"})," mode."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Otherwise, if using a ",(0,i.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,i.jsx)(n.strong,{children:"debug cable"})}),"\nyou can double click the reset button."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Otherwise, if using a ",(0,i.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,i.jsx)(n.strong,{children:"service cable"})}),"\n(or if you can't seem to get the double click timing right):"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open a serial console connected to the dashboard","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["See: ",(0,i.jsx)(n.a,{href:"/docs/reference/faq#using-the-repl",children:(0,i.jsx)(n.strong,{children:"FAQ - Using the REPL"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Interrupt the program with ",(0,i.jsx)(n.code,{children:"ctrl+C"})]}),"\n",(0,i.jsx)(n.li,{children:"Enter the following commands in the REPL:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"import boot_utils\nboot_utils.reset_to_bootloader()\n"})}),"\n",(0,i.jsxs)(n.p,{children:[":::caution If you receive an\n",(0,i.jsx)(n.code,{children:"AtributeError: ModuleNotFound 'reset_to_bootloader'"}),"\nerror\nYou don't yet have that utility available with your\ninstalled dashboard version.\nTo load into ",(0,i.jsx)(n.code,{children:"BOOTLOADER"})," mode, you can instead run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"import microcontroller\nmicrocontroller.on_next_reset(microcontroller.RunMode.BOOTLOADER)\nmicrocontroller.reset()\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Drag and drop the newly downloaded UF2 file onto the mounted\ndrive."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This will immediately cause the bootloader firmware to update,\nand the dashboard will automatically reboot as ",(0,i.jsx)(n.code,{children:"CIRCUITPY"})," once\ncomplete."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The\n",(0,i.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,i.jsx)(n.strong,{children:"Amiga application layer"})}),"\nshould remain untouched, so be sure to update that if it is not\nalready up to date!"]})}),"\n",(0,i.jsx)(n.h4,{id:"amiga-mounted",children:"AMIGA mounted"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/53625197/187532028-6c93c1fe-4196-4b33-8d8e-dfa145a83001.png",alt:"AMIGA"})}),"\n",(0,i.jsxs)(n.admonition,{title:"Troubleshooting",type:"caution",children:[(0,i.jsx)(n.p,{children:"In rare cases, the board could go into an update failure mode."}),(0,i.jsxs)(n.p,{children:["In this case, the microcontroller inside the dashboard is\nrestored to the factory default ",(0,i.jsx)(n.code,{children:"Hello world"})," example.\nThis will be characterized by no display on the dash and no\nresponse.\nYou can double check this occurred by opening the file named\n",(0,i.jsx)(n.code,{children:"code.py"})," (or ",(0,i.jsx)(n.code,{children:"main.py"}),") and seeing that there is only a single\nline of code ",(0,i.jsx)(n.code,{children:"print('hello world')"}),".\nIn this case, you should go through both the ",(0,i.jsx)(n.a,{href:"#uf2-bootloader-update",children:(0,i.jsx)(n.strong,{children:"UF2 firmware"})})," and\n",(0,i.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,i.jsx)(n.strong,{children:"Amiga application updates"})})," update steps."]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>s});var i=r(7294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);