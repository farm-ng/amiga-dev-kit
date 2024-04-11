"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[3253],{3037:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var a=r(5893),t=r(1151),o=r(4866),s=r(5162);const i={id:"dashboard-fw",title:"Dashboard Firmware Updates"},l=void 0,d={id:"dashboard/dashboard-fw",title:"Dashboard Firmware Updates",description:"Dashboard firmware updates",source:"@site/docs/dashboard/fw_updates.md",sourceDirName:"dashboard",slug:"/dashboard/dashboard-fw",permalink:"/docs/dashboard/dashboard-fw",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/dashboard/fw_updates.md",tags:[],version:"current",frontMatter:{id:"dashboard-fw",title:"Dashboard Firmware Updates"},sidebar:"User Manual",previous:{title:"Amiga Control States",permalink:"/docs/dashboard/control-states"},next:{title:"Debugging error codes",permalink:"/docs/dashboard/dashboard-debugging"}},c={},h=[{value:"Dashboard firmware updates",id:"dashboard-firmware-updates",level:2},{value:"Where to start",id:"where-to-start",level:3},{value:"Over-the-air (OTA) Amiga application updates",id:"over-the-air-ota-amiga-application-updates",level:3},{value:"Wired Amiga application updates",id:"wired-amiga-application-updates",level:3},{value:"Access the files",id:"access-the-files",level:4},{value:"Connect to your dashboard",id:"connect-to-your-dashboard",level:4},{value:"CIRCUITPY mounted",id:"circuitpy-mounted",level:5},{value:"Update the firmware",id:"update-the-firmware",level:4},{value:"UF2 bootloader update",id:"uf2-bootloader-update",level:3},{value:"Overview",id:"overview",level:4},{value:"Access the files (UF2)",id:"access-the-files-uf2",level:4},{value:"Connect to your dashboard (UF2)",id:"connect-to-your-dashboard-uf2",level:4},{value:"Load into BOOTLOADER mode",id:"load-into-bootloader-mode",level:4},{value:"AMIGA mounted",id:"amiga-mounted",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"dashboard-firmware-updates",children:"Dashboard firmware updates"}),"\n",(0,a.jsx)(n.p,{children:"At farm-ng, we are regularly updating and improving our firmware\nas we continue to develop the Amiga platform.\nWe want to get every new feature, performance improvement, and\nreliability increase out to you as soon as we can.\nAnd we want to enable you to easily upgrade your dashboard with\nthese improvements at your convenience."}),"\n",(0,a.jsx)(n.h3,{id:"where-to-start",children:"Where to start"}),"\n",(0,a.jsxs)(n.p,{children:["To update the Amiga application layer (our frequent\n",(0,a.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases",children:(0,a.jsx)(n.strong,{children:"amiga-dash FW releases"})}),"), you can follow either:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#over-the-air-ota-amiga-application-updates",children:(0,a.jsx)(n.strong,{children:"Over-the-air (OTA) Amiga application updates"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Simpler, especially for ",(0,a.jsx)(n.code,{children:"v0.1.5+"})]}),"\n",(0,a.jsxs)(n.li,{children:["Requires ",(0,a.jsx)(n.code,{children:"v0.1.1+"})," already installed"]}),"\n",(0,a.jsx)(n.li,{children:"Requires a wifi internet connection"}),"\n",(0,a.jsxs)(n.li,{children:["Only takes a few minutes, starting with release ",(0,a.jsx)(n.code,{children:"v0.5.0"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,a.jsx)(n.strong,{children:"Wired Amiga application updates"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Faster than OTA"}),"\n",(0,a.jsx)(n.li,{children:"Not dependent upon current installed version"}),"\n",(0,a.jsxs)(n.li,{children:["Requires a ",(0,a.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,a.jsx)(n.strong,{children:"debug cable"})})," or\n",(0,a.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,a.jsx)(n.strong,{children:"service cable"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To update the (infrequent) CircuitPython build releases, please\nfollow ",(0,a.jsx)(n.a,{href:"#uf2-bootloader-update",children:(0,a.jsx)(n.strong,{children:"UF2 bootloader update"})})," instructions."]}),"\n",(0,a.jsx)(n.h3,{id:"over-the-air-ota-amiga-application-updates",children:"Over-the-air (OTA) Amiga application updates"}),"\n",(0,a.jsxs)(n.p,{children:["You can use the over-the-air (OTA) firmware update method to\nwirelessly update your amiga dashboard applications from the\ntouchscreen.\nThe ",(0,a.jsx)(n.code,{children:"Updator"})," app is installed alongside the ",(0,a.jsx)(n.code,{children:"Dashboard"})," app,\nstarting with the ",(0,a.jsx)(n.code,{children:"amiga-dash-v0.1.1"})," release."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"To begin the Over-the-air (OTA) Amiga application updates,\nnavigate to the ID page of the settings tab."})}),(0,a.jsxs)(n.p,{children:["Please follow the instructions based on the version of\n",(0,a.jsx)(n.code,{children:"Dashboard"})," and ",(0,a.jsx)(n.code,{children:"Updator"})," apps you have installed."]}),(0,a.jsxs)(n.p,{children:["You should check the versions on the ID page of the settings tab after you update.\nKeep in mind that your ",(0,a.jsx)(n.code,{children:"Updator"})," app version may not match your ",(0,a.jsx)(n.code,{children:"Dashboard"})," app version,\nand that is OK!"]})]}),"\n","\n","\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(s.Z,{value:"v0.5.0+",label:"Updator v0.5.0+",default:!0,children:[(0,a.jsxs)(n.p,{children:["You have the latest ",(0,a.jsx)(n.code,{children:"Updator"})," app installed!"]}),(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can navigate out of the ",(0,a.jsx)(n.code,{children:"Updator"})," app by power cycling the dashboard."]}),(0,a.jsx)(n.p,{children:"Just don't power cycle during the final install step!\nDuring the download is fine."})]})]}),(0,a.jsxs)(s.Z,{value:"v0.1.3+",label:"Updator v0.1.3+",default:!0,children:[(0,a.jsxs)(n.p,{children:["You can install any available update for the ",(0,a.jsx)(n.code,{children:"Dashboard"})," and ",(0,a.jsx)(n.code,{children:"Updator"})," apps.\nBut you should upgrade the ",(0,a.jsx)(n.code,{children:"Updator"})," app to ",(0,a.jsx)(n.code,{children:"v0.5.0+"})," to unlock faster updates going forward!"]}),(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["If you decide to cancel an update at any step along the\nprocess, you can always exit the ",(0,a.jsx)(n.code,{children:"Updator"})," app and return to the\n",(0,a.jsx)(n.code,{children:"Dashboard"})," app by cancelling the current operation, clicking\nback through pages, and returning to the ",(0,a.jsx)(n.code,{children:"Dashboard"})," app from the home page.\nOr you can power cycle the dashboard\nand return to the ",(0,a.jsx)(n.code,{children:"Dashboard"})," app from the home page."]}),(0,a.jsx)(n.p,{children:"Just don't power cycle during the final install step!\nDuring the download is fine."})]})]}),(0,a.jsxs)(s.Z,{value:"v0.1.1",label:"Updator v0.1.1",default:!0,children:[(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["It is important that you start by updating your ",(0,a.jsx)(n.code,{children:"Updator"})," app to ",(0,a.jsx)(n.code,{children:"v0.1.3"}),"."]})}),(0,a.jsxs)(n.p,{children:["You can then proceed to updating your ",(0,a.jsx)(n.code,{children:"Updator"})," and ",(0,a.jsx)(n.code,{children:"Dashboard"})," apps\nto the latest and greatest available firmware."]}),(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"The recommended steps would be:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Update the ",(0,a.jsx)(n.code,{children:"Updator"})," app to ",(0,a.jsx)(n.code,{children:"v0.1.3"})]}),"\n",(0,a.jsxs)(n.li,{children:["Update the ",(0,a.jsx)(n.code,{children:"Updator"})," app to ",(0,a.jsx)(n.code,{children:"v0.5.0"})," (or newer)"]}),"\n",(0,a.jsxs)(n.li,{children:["Update the ",(0,a.jsx)(n.code,{children:"Dashboard"})," to ",(0,a.jsx)(n.code,{children:"v0.5.0"})," (or newer)"]}),"\n"]}),(0,a.jsxs)(n.p,{children:["If you have trouble updating your  ",(0,a.jsx)(n.code,{children:"v0.1.1"})," ",(0,a.jsx)(n.code,{children:"Updator"})," app to ",(0,a.jsx)(n.code,{children:"v0.1.3"}),", please try again.\nIf the update fails during the download,\nit will pick up where it left off when you get back to the download stage.\nIf you are not able to complete the update, you should follow\n",(0,a.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,a.jsx)(n.strong,{children:"Wired Amiga application updates"})}),"\nto install the latest release."]})]})]}),(0,a.jsxs)(s.Z,{value:"super-old",label:"Dashboard v0.1.0 or older",default:!0,children:[(0,a.jsxs)(n.p,{children:["For dashboards with very early versions of the firmware, one\nadditional wired update is required to unlock over-the-air updates.\nGrab your ",(0,a.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,a.jsx)(n.strong,{children:"debug cable"})})," or\n",(0,a.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,a.jsx)(n.strong,{children:"service cable"})}),",\nand follow the instructions at\n",(0,a.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,a.jsx)(n.strong,{children:"Wired Amiga application updates"})}),"\nto install the latest release."]}),(0,a.jsxs)(n.p,{children:["This will install the latest ",(0,a.jsx)(n.code,{children:"Dashboard"})," and ",(0,a.jsx)(n.code,{children:"Updator"})," apps and get you fully up-to-date!"]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"wired-amiga-application-updates",children:"Wired Amiga application updates"}),"\n",(0,a.jsx)(n.p,{children:"To upgrade your Dashboard with the latest Amiga application, grab\nyour Dashboard and your debug cable and take the following steps:"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"This process is currently only supported on Windows and Mac."})}),"\n",(0,a.jsx)(n.p,{children:"To upgrade your Dashboard with the latest Amiga application,\ngrab your Dashboard and your debug cable and take the following steps:"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"It is required to have a data USB-C cable and not a charge only USB-C cable\nwhen connecting to the debug or service cable."})}),"\n",(0,a.jsx)(n.h4,{id:"access-the-files",children:"Access the files"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Download the latest application zip file\n",(0,a.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases/download/amiga-dash-v0.5.0/amiga-dash-v0.5.0.zip",children:"amiga-dash-v0.5.0.zip"})]}),"\n",(0,a.jsxs)(n.li,{children:["For more details on the git latest release navigate to\n",(0,a.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases/tag/amiga-dash-v0.5.0",children:"Release: amiga-dash-v0.5.0"})]}),"\n",(0,a.jsx)(n.li,{children:"Extract the files from the zipped folder"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Check out the\n",(0,a.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases",children:(0,a.jsx)(n.strong,{children:"amiga-dev-kit Releases"})}),"\npage, as there may be an even newer available release."]}),"\n",(0,a.jsxs)(n.li,{children:["Select the newest ",(0,a.jsx)(n.code,{children:"amiga-dash-v#.#.#"})," and download that version.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Do not select a ",(0,a.jsx)(n.code,{children:"fw-dash-v#.#.#"})," or ",(0,a.jsx)(n.code,{children:"pendant-v#.#.#"})," update!"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,a.jsx)(n.h4,{id:"connect-to-your-dashboard",children:"Connect to your dashboard"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["If you don't have a ",(0,a.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,a.jsx)(n.strong,{children:"debug cable"})}),"\nor ",(0,a.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,a.jsx)(n.strong,{children:"service cable"})}),",\nreach out to us using one of the options on our\n",(0,a.jsx)(n.a,{href:"https://farm-ng.com/pages/for-developers",children:(0,a.jsx)(n.strong,{children:"For Developers"})}),"\npage."]})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Power down your dashboard."}),"\n",(0,a.jsxs)(n.li,{children:["Connect your ",(0,a.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,a.jsx)(n.strong,{children:"debug cable"})})," or\n",(0,a.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,a.jsx)(n.strong,{children:"service cable"})})," into the\n",(0,a.jsx)(n.a,{href:"/docs/debug_cable/#how-to-connect",children:(0,a.jsx)(n.strong,{children:"Debug port"})})," on the back\nof the dashboard.","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["If using a debug cable, connect your Windows or Mac PC to\nthe ",(0,a.jsx)(n.strong,{children:"USB"})," interface:","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["On newer cables this is the side labelled ",(0,a.jsx)(n.code,{children:"USB"})]}),"\n",(0,a.jsx)(n.li,{children:"On older cables this is the larger purple board"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"If using a service cable, you only have the one port."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Reconnect your dashboard to power","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["With ",(0,a.jsx)(n.strong,{children:"very"})," early versions of firmware, a folder\nautomatically pops up under the name ",(0,a.jsx)(n.code,{children:"CIRCUITPY"})," and resembles\nthe example below."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["With versions ",(0,a.jsx)(n.code,{children:"v0.1.8"})," and higher, there is a\n",(0,a.jsx)(n.code,{children:"Mount CIRCUITPY"})," advanced user button that'll reboot the\ndashboard and mount it for Windows or Mac computers."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["With older versions, you'll need to manually bring the\n",(0,a.jsx)(n.code,{children:"CIRCUITPY"})," drive up on your Windows or Mac computer by:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open a serial console connected to the dashboard","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you are unfamiliar, see:\n",(0,a.jsx)(n.a,{href:"/docs/reference/faq#using-the-repl",children:(0,a.jsx)(n.strong,{children:"FAQ - Using the REPL"})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Interrupt the program with ",(0,a.jsx)(n.code,{children:"ctrl+C"})]}),"\n",(0,a.jsx)(n.li,{children:"Run the following commands in the REPL:"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["You can copy code blocks on this website by left clicking\nthe icon in the top right corner of the code block.\nPaste the commands in the REPL by right clicking and\nselecting ",(0,a.jsx)(n.code,{children:"Paste"}),"."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"import boot_utils\nboot_utils.mount_circuitpy()\n"})}),"\n",(0,a.jsxs)(n.p,{children:[":::caution If you receive an ",(0,a.jsx)(n.code,{children:"AtributeError:   ModuleNotFound 'mount_circuitpy'"})," error\nYou don't yet have that utility available with your\ninstalled dashboard version.\nTo mount the circuitpy drive, you can instead run:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"import os\nimport storage\nimport microcontroller\nstorage.remount(\"/\", False)\nos.remove('boot.py')\nmicrocontroller.reset()\n"})}),"\n",(0,a.jsx)(n.p,{children:":::\n4. The serial console should freeze / exit and the\nCIRCUITPY drive should now show up mounted"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h5,{id:"circuitpy-mounted",children:"CIRCUITPY mounted"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://user-images.githubusercontent.com/53625197/187532222-eabfa798-9c01-43c8-8c1e-4ecaa0b673e6.png",alt:"CIRCUITPY"})}),"\n",(0,a.jsx)(n.h4,{id:"update-the-firmware",children:"Update the firmware"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Select all files in the mounted CIRCUITPY drive and delete them"}),"\n",(0,a.jsxs)(n.li,{children:["Drag and drop all extracted files from the downloaded firmware\nupdate.","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Make sure to drop ",(0,a.jsx)(n.strong,{children:"all files"})," (",(0,a.jsx)(n.code,{children:"dashboard/"}),", ",(0,a.jsx)(n.code,{children:"updator/"}),",\n",(0,a.jsx)(n.code,{children:"node_id.txt"}),", ",(0,a.jsx)(n.code,{children:"code.py"}),", ",(0,a.jsx)(n.code,{children:"boot.py"}),", etc.) directly into the\nroot of the ",(0,a.jsx)(n.code,{children:"CIRCUITPY"})," drive (as below).","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["The firmware will ",(0,a.jsx)(n.strong,{children:"NOT"})," load if the files are nested\nin a subfolder."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Once the file transfer is complete, power cycle your dashboard\n(disconnect & reconnect power) and check the basic functionality.","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["The dashboard will no longer mount as ",(0,a.jsx)(n.code,{children:"CIRCUITPY"})," when\nconnected to a computer. If you have any issues, go through\nthe connecting / mounting process again OR see the\ntroubleshooting information below."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"If all is as expected, you're good to go. Just power down the\ndashboard, disconnect the debug cable, and enjoy your new\nfeatures!"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[Recommended]"})," Navigate to the configuration tab (gear icon)\non the dashboard, and select the pendant icon to calibrate your\npendant and confirm functionality."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[Recommended]"})," Also check the settings and ensure your\ndesired wheel track and turning speed values remain."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://user-images.githubusercontent.com/53625197/208778396-68113b71-ddb2-409c-9d0d-acdd9ad887e6.png",alt:"CIRCUITPY_updated_windows"})}),"\n",(0,a.jsx)(n.admonition,{title:"Troubleshooting",type:"caution",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If the file transfer process fails, or the behavior is not as\nexpected, just delete all files in CIRCUITPY and try it again.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If the dashboard remounts on your computer as ",(0,a.jsx)(n.code,{children:"CIRCUITPY"}),",\njust select all and delete."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If the dashboard does NOT remount on your computer as\n",(0,a.jsx)(n.code,{children:"CIRCUITPY"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Open a serial console connected to the dashboard (see:\n",(0,a.jsx)(n.a,{href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console",children:(0,a.jsx)(n.strong,{children:"Adafruit connecting to the serial console"})}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Interrupt the program with ",(0,a.jsx)(n.code,{children:"ctrl+C"})]}),"\n",(0,a.jsx)(n.li,{children:"Enter the following commands in the REPL"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Python",children:"import storage\nstorage.erase_filesystem()\n# The dashboard should reboot automatically\n# If it does not, continue with:\nimport microcontroller\nmicrocontroller.reset()\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:['This will reset the microcontroller to a "hello world"\nstate and it should remount as ',(0,a.jsx)(n.code,{children:"CIRCUITPY"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"You can now manually delete all files and try again."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Repeated hot plugging / unplugging of the dashboard can cause\nthe filesystem to go into an irregular state. Try connecting /\ndisconnecting between dashboard and your PC with the dashboard\npowered down."}),"\n",(0,a.jsx)(n.li,{children:"When in doubt, turn it off and back on again."}),"\n"]})}),"\n",(0,a.jsx)(n.h3,{id:"uf2-bootloader-update",children:"UF2 bootloader update"}),"\n",(0,a.jsx)(n.h4,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"Occasionally, it may be recommended to update the bootloader UF2\nfirmware installed on your dashboard.\nAt farm-ng, we generate a custom UF2 file for our dashboards that\nare tailored towards the dashboard's use case.\nFor example, we've increased the capacity of the receive queue\nfor the CAN module,\nwhich reduces the likelihood of dropped messages!"}),"\n",(0,a.jsx)(n.p,{children:"The farm-ng UF2 releases may come out following a CircuitPython\nstable release,\nor if we find more modifications that significantly improve\nperformance or enable new features."}),"\n",(0,a.jsxs)(n.p,{children:["To learn more about the topic of UF2 bootloader files,\n",(0,a.jsx)(n.a,{href:"https://learn.adafruit.com/adafruit-feather-m0-express-designed-for-circuit-python-circuitpython/uf2-bootloader-details",children:(0,a.jsx)(n.strong,{children:"Adafruit UF2 details"})}),"\nis a great place to start!"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"This process is currently only supported on Windows and Mac."})}),"\n",(0,a.jsx)(n.h4,{id:"access-the-files-uf2",children:"Access the files (UF2)"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Download the latest ",(0,a.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases/download/fw-dash-v1.1.0/fw-dash-v1.1.0.uf2",children:(0,a.jsx)(n.strong,{children:"fw-dash UF2 file"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["For more details on the UF2 file release see the release\npage here: ",(0,a.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/releases/tag/fw-dash-v1.1.0",children:(0,a.jsx)(n.strong,{children:"Release: fw-dash-v1.1.0"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"connect-to-your-dashboard-uf2",children:"Connect to your dashboard (UF2)"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Power down your dashboard."}),"\n",(0,a.jsxs)(n.li,{children:["Connect your ",(0,a.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,a.jsx)(n.strong,{children:"debug cable"})})," or\n",(0,a.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,a.jsx)(n.strong,{children:"service cable"})})," into the\n",(0,a.jsx)(n.a,{href:"/docs/debug_cable/#how-to-connect",children:(0,a.jsx)(n.strong,{children:"Debug port"})})," on the back\nof the dashboard.","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["If using a debug cable, connect your Windows or Mac PC to\nthe ",(0,a.jsx)(n.strong,{children:"USB"})," interface:","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["On newer cables this is the side labelled ",(0,a.jsx)(n.code,{children:"USB"})]}),"\n",(0,a.jsx)(n.li,{children:"On older cables this is the larger purple board"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"If using a service cable, you only have the one interface."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Reconnect your dashboard to power so a folder automatically\npops up under the name ",(0,a.jsx)(n.code,{children:"CIRCUITPY"}),", as with the farm-ng firmware\nupdate example above."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"load-into-bootloader-mode",children:"Load into BOOTLOADER mode"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["With the dashboard connected to your PC, load into\n",(0,a.jsx)(n.code,{children:"BOOTLOADER"})," mode so the dashboard remounts under the name\n",(0,a.jsx)(n.code,{children:"AMIGA"})," and resembles the ",(0,a.jsx)(n.strong,{children:"AMIGA mounted"})," example below:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["With versions ",(0,a.jsx)(n.code,{children:"v0.1.8"})," and higher, there is a ",(0,a.jsx)(n.code,{children:"BOOTLOADER"}),"\nadvanced user button that'll reboot the dashboard into\n",(0,a.jsx)(n.code,{children:"BOOTLOADER"})," mode."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Otherwise, if using a ",(0,a.jsx)(n.a,{href:"/docs/debug_cable/",children:(0,a.jsx)(n.strong,{children:"debug cable"})}),"\nyou can double click the reset button."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Otherwise, if using a ",(0,a.jsx)(n.a,{href:"/docs/debug_cable/service-cable",children:(0,a.jsx)(n.strong,{children:"service cable"})}),"\n(or if you can't seem to get the double click timing right):"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open a serial console connected to the dashboard","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["See: ",(0,a.jsx)(n.a,{href:"/docs/reference/faq#using-the-repl",children:(0,a.jsx)(n.strong,{children:"FAQ - Using the REPL"})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Interrupt the program with ",(0,a.jsx)(n.code,{children:"ctrl+C"})]}),"\n",(0,a.jsx)(n.li,{children:"Enter the following commands in the REPL:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Python",children:"import boot_utils\nboot_utils.reset_to_bootloader()\n"})}),"\n",(0,a.jsxs)(n.p,{children:[":::caution If you receive an\n",(0,a.jsx)(n.code,{children:"AtributeError: ModuleNotFound 'reset_to_bootloader'"}),"\nerror\nYou don't yet have that utility available with your\ninstalled dashboard version.\nTo load into ",(0,a.jsx)(n.code,{children:"BOOTLOADER"})," mode, you can instead run:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Python",children:"import microcontroller\nmicrocontroller.on_next_reset(microcontroller.RunMode.BOOTLOADER)\nmicrocontroller.reset()\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Drag and drop the newly downloaded UF2 file onto the mounted\ndrive."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["This will immediately cause the bootloader firmware to update,\nand the dashboard will automatically reboot as ",(0,a.jsx)(n.code,{children:"CIRCUITPY"})," once\ncomplete."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The\n",(0,a.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,a.jsx)(n.strong,{children:"Amiga application layer"})}),"\nshould remain untouched, so be sure to update that if it is not\nalready up to date!"]})}),"\n",(0,a.jsx)(n.h4,{id:"amiga-mounted",children:"AMIGA mounted"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://user-images.githubusercontent.com/53625197/187532028-6c93c1fe-4196-4b33-8d8e-dfa145a83001.png",alt:"AMIGA"})}),"\n",(0,a.jsxs)(n.admonition,{title:"Troubleshooting",type:"caution",children:[(0,a.jsx)(n.p,{children:"In rare cases, the board could go into an update failure mode."}),(0,a.jsxs)(n.p,{children:["In this case, the microcontroller inside the dashboard is\nrestored to the factory default ",(0,a.jsx)(n.code,{children:"Hello world"})," example.\nThis will be characterized by no display on the dash and no\nresponse.\nYou can double check this occurred by opening the file named\n",(0,a.jsx)(n.code,{children:"code.py"})," (or ",(0,a.jsx)(n.code,{children:"main.py"}),") and seeing that there is only a single\nline of code ",(0,a.jsx)(n.code,{children:"print('hello world')"}),".\nIn this case, you should go through both the ",(0,a.jsx)(n.a,{href:"#uf2-bootloader-update",children:(0,a.jsx)(n.strong,{children:"UF2 firmware"})})," and\n",(0,a.jsx)(n.a,{href:"#wired-amiga-application-updates",children:(0,a.jsx)(n.strong,{children:"Amiga application updates"})})," update steps."]})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>s});r(7294);var a=r(6010);const t={tabItem:"tabItem_Ymn6"};var o=r(5893);function s(e){let{children:n,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,s),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>w});var a=r(7294),t=r(6010),o=r(2466),s=r(6550),i=r(469),l=r(1980),d=r(7392),c=r(12);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=u(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[d,h]=x({queryString:r,groupId:t}),[j,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,c.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),g=(()=>{const e=d??j;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,o]),tabValues:o}}var b=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(5893);function f(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),t=i[r].value;t!==a&&(d(n),s(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...o,className:(0,t.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=j(e);return(0,m.jsxs)("div",{className:(0,t.Z)("tabs-container",g.tabList),children:[(0,m.jsx)(f,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,m.jsx)(y,{...e,children:h(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var a=r(7294);const t={},o=a.createContext(t);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);