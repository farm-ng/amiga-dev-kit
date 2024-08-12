"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[5509],{3238:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(4848),i=t(8453),o=t(1470),a=t(9365);const s={id:"microcontroller-kit",title:"Microcontroller Kit"},c="Microcontroller Kit Overview",l={id:"mcu_kit/microcontroller-kit",title:"Microcontroller Kit",description:"We sell a complete kit containing all necessary components on the Amiga shop website: farm-ng microcontroller kit",source:"@site/docs/mcu_kit/README.mdx",sourceDirName:"mcu_kit",slug:"/mcu_kit/",permalink:"/docs/mcu_kit/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/mcu_kit/README.mdx",tags:[],version:"current",frontMatter:{id:"microcontroller-kit",title:"Microcontroller Kit"},sidebar:"Developer",previous:{title:"Using a VNC Viewer",permalink:"/docs/examples/vnc_viewer/"},next:{title:"API Index",permalink:"/docs/api/"}},h={},d=[{value:"Feather M4 Can device setup",id:"feather-m4-can-device-setup",level:2},{value:"Flashing the UF2 firmware on the M4 device",id:"flashing-the-uf2-firmware-on-the-m4-device",level:2},{value:"On first connection",id:"on-first-connection",level:3},{value:"Flash by drag &amp; drop",id:"flash-by-drag--drop",level:4},{value:"Flash UF2 by command line",id:"flash-uf2-by-command-line",level:4},{value:"On subsequent connection",id:"on-subsequent-connection",level:3},{value:"Loading code on the Feather",id:"loading-code-on-the-feather",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"microcontroller-kit-overview",children:"Microcontroller Kit Overview"})}),"\n","\n",(0,r.jsxs)(n.p,{children:["We sell a complete kit containing all necessary components on the Amiga shop website: ",(0,r.jsx)(n.a,{href:"https://farm-ng.com/products/microcontroller-kit",children:(0,r.jsx)(n.strong,{children:"farm-ng microcontroller kit"})})]}),"\n",(0,r.jsx)(n.h2,{id:"feather-m4-can-device-setup",children:"Feather M4 Can device setup"}),"\n",(0,r.jsx)(n.p,{children:"This device can be used for rapid prototyping of applications that interact with farm-ng's Amiga platform."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The Feather M4 board front and back, where to solder the connector, and the resistor that must be cut:"})}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{width:"773",title:"Feather M4 board front and back",alt:"Screen Shot 2022-08-16 at 7 34 34 PM",src:"https://user-images.githubusercontent.com/810997/185022043-bf6f20b6-f332-4e63-a050-be5f4248462c.png"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The connected Feather M4 and which wire to screw into high and low sides and where the reset button is:"})}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{width:"702",title:"Connected Feather M4",alt:"Screen Shot 2022-08-16 at 7 24 54 PM",src:"https://user-images.githubusercontent.com/810997/185021388-b290fd2b-f721-4e59-843b-c30ee245c51b.png"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The male M12 CAN bus connector whose white (high) and blue (low) connectors are screwed into the Feather M4 and the male CAN bus connector is attached to the CAN bus:"})}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{width:"650",title:"Male M12 CAN bus connector",alt:"Screen Shot 2022-08-16 at 7 41 38 PM",src:"https://user-images.githubusercontent.com/810997/185022824-593e543f-7899-4a65-93b0-9f07e97f8572.png"})}),"\n",(0,r.jsx)(n.h2,{id:"flashing-the-uf2-firmware-on-the-m4-device",children:"Flashing the UF2 firmware on the M4 device"}),"\n",(0,r.jsxs)(n.p,{children:["We run ",(0,r.jsx)(n.a,{href:"https://circuitpython.org/",children:(0,r.jsx)(n.strong,{children:"CircuitPython"})})," on the microcontrollers,\nas it is well supported, well documented, and recommended by Adafruit for their microcontrollers."]}),"\n",(0,r.jsxs)(n.p,{children:["CircuitPython is installed by flashing the microcontroller with the correct UF2 file, and you can tell if CircuitPython is installed if the microcontroller is mounted as a directory called ",(0,r.jsx)(n.code,{children:"CIRCUITPY"})," whenever you connect it."]}),"\n",(0,r.jsx)(n.h3,{id:"on-first-connection",children:"On first connection"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The following instructions summarize the\n",(0,r.jsx)(n.a,{href:"https://learn.adafruit.com/adafruit-feather-m4-can-express/circuitpython-on-feather-m4-can",children:(0,r.jsx)(n.strong,{children:"CircuitPython on Feather M4 CAN"})}),"\ninstructions.\nYou can also check out the more generic\n",(0,r.jsx)(n.a,{href:"https://learn.adafruit.com/welcome-to-circuitpython/installing-circuitpython",children:(0,r.jsx)(n.strong,{children:"Adafruit Installing CircuitPython"})})," instructions."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Connect your feather to your computer through the USB-C port on the feather"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Check that the large LED is green or randomly varying colored. If it is red, you are most likely using a charge only USB-C cable."})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Double click the reset button to enter ",(0,r.jsx)(n.code,{children:"BOOTLOADER"})," mode, allowing you to flash the microcontroller with a Microsoft standard flash format uf2 file. The Feather should automatically remount and show up as ",(0,r.jsx)(n.code,{children:"FTHRCANBOOT"})," or ",(0,r.jsx)(n.code,{children:"FEATHERBOOT"})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["The timing of the double click can be a little tricky, so if it mounts as ",(0,r.jsx)(n.code,{children:"CIRCUITPY"}),", just try again until it mounts as ",(0,r.jsx)(n.code,{children:"AMIGA"}),".\nIf you cannot get the double click timing correct, you can enter BOOTLOADER mode with the following advanced user steps:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open a serial console connected to the dashboard (see: ",(0,r.jsx)(n.a,{href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console",children:(0,r.jsx)(n.strong,{children:"Adafruit connecting to the serial console"})}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Pause the program with ",(0,r.jsx)(n.code,{children:"ctrl+C"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter the following commands in the REPL"}),"\n"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import microcontroller\nmicrocontroller.on_next_reset(microcontroller.RunMode.BOOTLOADER)\nmicrocontroller.reset()\n"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"You can now flash the drive with the correct CircuitPython version, with either the drag & drop or the command line method."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After the flashing, feather should automatically update, reboot with the newly loaded firmware, and remount as ",(0,r.jsx)(n.code,{children:"CIRCUITPY"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"flash-by-drag--drop",children:"Flash by drag & drop"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Download the correct UF2 file"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["From our repo: ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/raw/main/circuitpy/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2",children:(0,r.jsx)(n.strong,{children:"Download CircuitPython 7.3.2 - Feather M4 CAN"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Directly from Adafruit: ",(0,r.jsx)(n.a,{href:"https://downloads.circuitpython.org/bin/feather_m4_can/en_US/adafruit-circuitpython-feather_m4_can-en_US-7.3.3.uf2",children:(0,r.jsx)(n.strong,{children:"Download CircuitPython 7.3.3 - Feather M4 CAN"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy (drag & drop) the UF2 file onto the feather mounted in ",(0,r.jsx)(n.code,{children:"BOOTLOADER"})," mode."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["It should automatically update and remount as ",(0,r.jsx)(n.code,{children:"CIRCUITPY"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"flash-uf2-by-command-line",children:"Flash UF2 by command line"}),"\n",(0,r.jsxs)(n.p,{children:["These instructions show how to copy (flash) the UF2 file onto the Feather\nfrom the cloned ",(0,r.jsx)(n.code,{children:"amiga-dev-kit"})," repo, for each OS."]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(a.A,{value:"linux",label:"Linux",default:!0,children:[(0,r.jsx)(n.p,{children:"From a terminal, use the command line:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/<to_your_base_directory>/amiga-dev-kit\ncp circuitpy/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 \\\n/media/$USERNAME/FTHRCANBOOT/\n"})})]}),(0,r.jsxs)(a.A,{value:"macos",label:"MacOs",children:[(0,r.jsx)(n.p,{children:"In your system (or PyCharm) terminal, use the command line:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/<to_your_base_directory>/amiga-dev-kit\ncp circuitpy/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 \\\n/Volumes/FTHRCANBOOT\n"})})]}),(0,r.jsxs)(a.A,{value:"wsl",label:"WSL",children:[(0,r.jsx)(n.p,{children:"From a terminal, use the command line:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/<to_your_base_directory>/amiga-dev-kit\n# mount the feather in wsl with 'd', assuming the feather is presenting as the D: drive on windows.\n# Use the corresponding letter to the mounted drive.\nsudo ./mnt_feather_wsl.sh d\ncp circuitpy/feather_m4_can/uf2s/adafruit-circuitpython-feather_m4_can-en_US-7.3.2.uf2 /mnt/d/\n"})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"on-subsequent-connection",children:"On subsequent connection"}),"\n",(0,r.jsxs)(n.p,{children:["When attaching a previously flashed Feather M4 device, it should automatically mount as ",(0,r.jsx)(n.code,{children:"CIRCUITPY"}),".\nYou can always check the our ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/tree/main/circuitpy/feather_m4_can/uf2s",children:(0,r.jsx)(n.strong,{children:"farm-ng adk uf2 dir"})})," or the ",(0,r.jsx)(n.a,{href:"https://circuitpython.org/board/feather_m4_can/",children:"Feather M4 CAN UF2 page"})," for future stable & experimental releases."]}),"\n",(0,r.jsx)(n.h2,{id:"loading-code-on-the-feather",children:"Loading code on the Feather"}),"\n",(0,r.jsx)(n.p,{children:"Now that you have a flashed Feather, time to load some code:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the ",(0,r.jsx)(n.code,{children:"lib/"})," folder from ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit/tree/main/circuitpy",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"amiga-dev-kit/circuitpy/"})})})," to the root of the Feather. The contents of ",(0,r.jsx)(n.code,{children:"lib/"})," are automatically added to your python path on the microcontroller."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Attach a serial terminal to the feather, so you can see std out."}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(a.A,{value:"linux",label:"Linux",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"screen /dev/ttyACM0\n"})})}),(0,r.jsxs)(a.A,{value:"macos",label:"MacOs",children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Use autocomplete to get the correct usb modem ",(0,r.jsx)(n.code,{children:".../tty.usb[tab_for_autocomplete]"})]})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"screen /dev/tty./dev/tty.usbmodem14201\n"})})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Mu is the recommended serial console program by adafruit on their ",(0,r.jsx)(n.a,{href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console",children:(0,r.jsx)(n.strong,{children:"CircuitPython serial console page"})}),".\nMu has a built in plotter for tuples printed to the serial console (print statements in the python code on your microcontroller)."]}),(0,r.jsx)(n.p,{children:"However, we've found that Mu can be a little unstable and freezes occasionally,\nso we'd recommend checking out their links for the \"advanced\" serial console:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-windows",children:(0,r.jsx)(n.strong,{children:"Windows serial console"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-linux",children:(0,r.jsx)(n.strong,{children:"Linux serial console"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-mac-and-linux",children:(0,r.jsx)(n.strong,{children:"Mac serial console"})})}),"\n"]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Now add a ",(0,r.jsx)(n.code,{children:"code.py"})," file to the root of the Feather drive. Try one of the examples found in the ",(0,r.jsx)(n.a,{href:"/docs/examples/examples-index",children:(0,r.jsx)(n.strong,{children:"Examples index"})}),", such as the ",(0,r.jsx)(n.a,{href:"./../examples/hello_main_loop/",children:(0,r.jsx)(n.strong,{children:"Hello Main Loop example"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"The feather should automatically reload when you drop any new code onto it."}),(0,r.jsxs)(n.p,{children:["The feather automatically runs the file named ",(0,r.jsx)(n.code,{children:"code.py"}),"\nand adds the contents of the ",(0,r.jsx)(n.code,{children:"lib/"})," directory to the python path."]})]}),"\n",(0,r.jsx)(n.p,{children:"You can also reload through the serial console by:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cancelling the current execution with ",(0,r.jsx)(n.code,{children:"crtl+C"})]}),"\n",(0,r.jsxs)(n.li,{children:["Reloading with ",(0,r.jsx)(n.code,{children:"ctrl+D"})]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"feather-m4-references",children:"Feather M4 references"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials",children:(0,r.jsx)(n.strong,{children:"Adafruit CircuitPython programming guide"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.adafruit.com/adafruit-feather-m4-can-express",children:(0,r.jsx)(n.strong,{children:"Adafruit Feather M4 CAN Express"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.adafruit.com/adafruit-feather-m4-can-express/circuitpython-on-feather-m4-can",children:(0,r.jsx)(n.strong,{children:"CircuitPython on Feather M4 CAN"})})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(8215);const i={tabItem:"tabItem_Ymn6"};var o=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),i=t(8215),o=t(3104),a=t(6347),s=t(205),c=t(7485),l=t(1682),h=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=u(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,d]=p({queryString:t,groupId:i}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,h.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),j=(()=>{const e=l??f;return m({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),i=s[t].value;i!==r&&(l(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:h,...o,className:(0,i.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);