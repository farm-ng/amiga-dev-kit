"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4962],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),l=a(7294),o=a(6010),i=a(2466),r=a(6775),s=a(1980),u=a(7392),d=a(12);function h(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=null!=t?t:h(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,r]=(0,l.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const l=null!=(t=n.find((e=>e.default)))?t:n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:o}))),[s,u]=c({queryString:a,groupId:n}),[h,f]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=null!=s?s:h;return p({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{k&&r(k)}),[k]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);r(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=a(2389);const b="tabList__CuJ",g="tabItem_LNqP";function _(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==r&&(h(t),s(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var n;const t=d.indexOf(e.currentTarget)+1;a=null!=(n=d[t])?n:d[0];break}case"ArrowLeft":{var l;const t=d.indexOf(e.currentTarget)-1;a=null!=(l=d[t])?l:d[d.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":r===t})}),null!=a?a:t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",b)},l.createElement(_,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>h});var n=a(7462),l=(a(7294),a(3905)),o=(a(1839),a(4866)),i=a(5162);const r={id:"import-log-file",title:"Record and Access data"},s="How to Record and Access data on the Amiga",u={unversionedId:"examples/import_log_file/import-log-file",id:"examples/import_log_file/import-log-file",title:"Record and Access data",description:"This tutorial will walk you through how to record field data and",source:"@site/docs/examples/import_log_file/README.md",sourceDirName:"examples/import_log_file",slug:"/examples/import_log_file/",permalink:"/docs/examples/import_log_file/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/import_log_file/README.md",tags:[],version:"current",frontMatter:{id:"import-log-file",title:"Record and Access data"},sidebar:"examples",previous:{title:"FPV Example",permalink:"/docs/examples/FPV/"},next:{title:"File Reader",permalink:"/docs/examples/file_reader/"}},d={},h=[{value:"Record data with the Recorder App",id:"record-data-with-the-recorder-app",level:2},{value:"File naming convention",id:"file-naming-convention",level:3},{value:"Snapshots",id:"snapshots",level:4},{value:"Sequence number",id:"sequence-number",level:4},{value:"Transfer data with a USB flash drive",id:"transfer-data-with-a-usb-flash-drive",level:2},{value:"Format your USB drive",id:"format-your-usb-drive",level:3},{value:"Use the <code>File Mover</code> app",id:"use-the-file-mover-app",level:3},{value:"Transfer data with SSH",id:"transfer-data-with-ssh",level:2}],m={toc:h};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-record-and-access-data-on-the-amiga"},"How to Record and Access data on the Amiga"),(0,l.kt)("p",null,"This tutorial will walk you through how to record field data and\ntransfer that data from the Amiga to your local machine."),(0,l.kt)("h2",{id:"record-data-with-the-recorder-app"},"Record data with the Recorder App"),(0,l.kt)("p",null,"The first step in this tutorial is to record some field data. To\ndo this, you are going to use the handy Recorder app on the\nAmiga. To learn how to use it, watch the video below (watch until 5:03)"),(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/_p0I11p4QF4?start=169",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,l.kt)("h3",{id:"file-naming-convention"},"File naming convention"),(0,l.kt)("p",null,"The data will be recorded with a file naming convention that captures the precise timestamp (to the microsecond)\nat the time recording starts, the name of the robot on which the files were recorded,\nand the file number in the video sequence:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"<yyyy>_<mm>_<dd>_<hh>_<mn>_<ss>_<msmsms>_events_<robot_name>.<####>.bin\n")),(0,l.kt)("p",null,"E.g.,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  2023_01_12_16_17_52_134845_events_banana_bot.0000.bin\n# yyyy_mm_dd_hh_mn_ss_msmsms_events_robot_name.####.bin\n")),(0,l.kt)("h4",{id:"snapshots"},"Snapshots"),(0,l.kt)("p",null,"For individual snapshots, the ",(0,l.kt)("inlineCode",{parentName:"p"},"events")," keyword is replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"snapshot"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"<yyyy>_<mm>_<dd>_<hh>_<mn>_<ss>_<msmsms>_snapshot_<robot_name>.<####>.bin\n")),(0,l.kt)("h4",{id:"sequence-number"},"Sequence number"),(0,l.kt)("p",null,"The first file suffix (",(0,l.kt)("inlineCode",{parentName:"p"},".<####>"),") reflects the file number in the recorded sequence,\nso you can easily determine the order in which the files in a single video sequence were recorded.\nThe order starts with ",(0,l.kt)("inlineCode",{parentName:"p"},".0000")," and increases by 1 per file split."),(0,l.kt)("p",null,"This is applicable when the ",(0,l.kt)("inlineCode",{parentName:"p"},"Max. file size (Mb)")," value in the Recorder App settings is non-zero.\nWhen this value is non-zero (and positive), the recorded logs will be split when the recording reaches\na multiple of the specified max file size value, in megabytes."),(0,l.kt)("p",null,"For example, if you record a 3.3 gigabyte log with a max file size of 500 Mb,\nyou will get six logs of ~500 Mb and one of ~300 Mb.\nThis will look something like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"2023_01_12_16_17_52_134845_events_banana_bot.0000.bin # ~500 Mb\n2023_01_12_16_17_52_134845_events_banana_bot.0001.bin # ~500 Mb\n2023_01_12_16_17_52_134845_events_banana_bot.0002.bin # ~500 Mb\n2023_01_12_16_17_52_134845_events_banana_bot.0003.bin # ~500 Mb\n2023_01_12_16_17_52_134845_events_banana_bot.0004.bin # ~500 Mb\n2023_01_12_16_17_52_134845_events_banana_bot.0005.bin # ~500 Mb\n2023_01_12_16_17_52_134845_events_banana_bot.0006.bin # ~500 Mb\n2023_01_12_16_17_52_134845_events_banana_bot.0007.bin # ~300 Mb\n")),(0,l.kt)("p",null,"When the max file size is set to zero, or is much larger than the size of the recorded log,\nthe file will not be split and the entire recorded log will be in a single log\nwith sequence number of ",(0,l.kt)("inlineCode",{parentName:"p"},".0000")),(0,l.kt)("p",null,"In our example above that would yield:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"2023_01_12_16_17_52_134845_events_banana_bot.0000.bin # ~ 3.3 Gb\n")),(0,l.kt)("h1",{id:"how-to-transfer-data-from-the-amiga-to-your-local-machine"},"How to transfer data from the Amiga to your local machine"),(0,l.kt)("p",null,"There are two different methods you can use to transfer the log\nfiles from the Amiga to your local machine.\nThe first way is to use a USB flash drive, and the second way is\nto SSH into the Amiga."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Make sure you have done the first step of having data recorded\notherwise you will have nothing to transfer.")),(0,l.kt)("h2",{id:"transfer-data-with-a-usb-flash-drive"},"Transfer data with a USB flash drive"),(0,l.kt)("p",null,"The very first thing you are going to need is a USB drive"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"In order to transfer data with this USB drive it will need to either be in the ",(0,l.kt)("inlineCode",{parentName:"p"},"exFAT")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"ext4")," format."),(0,l.kt)("p",{parentName:"admonition"},"If your USB drive is not appearing in the ",(0,l.kt)("inlineCode",{parentName:"p"},"File Mover")," app when you plug it in,\nit is likely not formatted as one of these.")),(0,l.kt)("h3",{id:"format-your-usb-drive"},"Format your USB drive"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Plug your USB drive into your computer"),(0,l.kt)("li",{parentName:"ol"},"Backup any files you don't want to to lose"),(0,l.kt)("li",{parentName:"ol"},"Navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"files")," then right click on your USB name"),(0,l.kt)("li",{parentName:"ol"},"Next, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"properties"),", then ",(0,l.kt)("inlineCode",{parentName:"li"},"Open in Discs")),(0,l.kt)("li",{parentName:"ol"},"Under the Volumes click on the setting icon"),(0,l.kt)("li",{parentName:"ol"},"Then click ",(0,l.kt)("inlineCode",{parentName:"li"},"Format Partition...")),(0,l.kt)("li",{parentName:"ol"},"Name the file what you want and select\n",(0,l.kt)("inlineCode",{parentName:"li"},"Internal disk for use with Linux systems only (Ext4)"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/66448234/233509945-08e8ff77-83fc-4ef3-b51a-3cd39d6f8a17.png",alt:"image_480-1"})))),(0,l.kt)("li",{parentName:"ol"},"Then select ",(0,l.kt)("inlineCode",{parentName:"li"},"Next")," and then select ",(0,l.kt)("inlineCode",{parentName:"li"},"Format"))),(0,l.kt)("p",null,"Congrats you successfully formatted your USB drive!")),(0,l.kt)(i.Z,{value:"macos",label:"MacOs",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Plug your USB drive into your computer"),(0,l.kt)("li",{parentName:"ol"},"Backup any files you don't want to to lose"),(0,l.kt)("li",{parentName:"ol"},"Launch Disk Utility (from Applications > Utilities > Disk Utility)"),(0,l.kt)("li",{parentName:"ol"},"Select the drive in the left-hand sidebar"),(0,l.kt)("li",{parentName:"ol"},"Click Erase"),(0,l.kt)("li",{parentName:"ol"},"From the Format menu, select ExFAT"),(0,l.kt)("li",{parentName:"ol"},"From the Scheme menu, select Master Boot Record"),(0,l.kt)("li",{parentName:"ol"},"Click Erase and follow prompts to confirm")),(0,l.kt)("p",null,"You have now formatted your flash drive on a Mac!"))),(0,l.kt)("h3",{id:"use-the-file-mover-app"},"Use the ",(0,l.kt)("inlineCode",{parentName:"h3"},"File Mover")," app"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Right now you have to first open the file mover app then plug in the USB.\nDo not plug in the USB before you open the File Mover App or it may not behave as expected.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the File Mover App"),(0,l.kt)("li",{parentName:"ol"},"Plug in the USB drive into the back of the brain.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Watch for the top left to go from red, ",(0,l.kt)("inlineCode",{parentName:"li"},"Disk Status: No Disk")," to green ",(0,l.kt)("inlineCode",{parentName:"li"},"Disk Status: Available")),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Select All")," button and the list of files on the left should light up, meaning they are active."))),(0,l.kt)("li",{parentName:"ol"},"Select the files you want to transfer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The list of files on the left contains files available to transfer"),(0,l.kt)("li",{parentName:"ul"},"The list of files on the right contains files already on the USB drive"),(0,l.kt)("li",{parentName:"ul"},"Each file is a ",(0,l.kt)("inlineCode",{parentName:"li"},"ToggleButton")," that highlights blue when selected"),(0,l.kt)("li",{parentName:"ul"},"You can choose to transfer all files, in which case click the ",(0,l.kt)("inlineCode",{parentName:"li"},"Select All")," button\nand all the buttons should highlight blue."),(0,l.kt)("li",{parentName:"ul"},"You can undo this action by pressing ",(0,l.kt)("inlineCode",{parentName:"li"},"De-select All")))),(0,l.kt)("li",{parentName:"ol"},"Press ",(0,l.kt)("inlineCode",{parentName:"li"},"Start Transfer")," to begin the transfer onto the USB drive",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If you decide you no longer want to transfer the files click ",(0,l.kt)("inlineCode",{parentName:"li"},"Cancel Transfer")),(0,l.kt)("li",{parentName:"ul"},"There is a blue progress bar at the bottom of the page to track the progress"))),(0,l.kt)("li",{parentName:"ol"},"After the transfer is complete you will be notified and you can now dismount you drive")),(0,l.kt)("h2",{id:"transfer-data-with-ssh"},"Transfer data with SSH"),(0,l.kt)("p",null,"To transfer files using ssh you will first need to ssh into the\nAmiga."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh amiga\n    # Password: amiga\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If having issues further instructions for how to do this are\nlisted\n",(0,l.kt)("a",{parentName:"p",href:"/docs/brain/brain-apps#ssh-configuration"},(0,l.kt)("strong",{parentName:"a"},"here")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Once connected: Verify the logs are present on the Amiga"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~ # to go to home directory\ncd /data/farm_ng/ # navigate to where the logs are located\nls\n# In the output you should see the name of the logs you just\n#recorded.\n# You can see its the right log by the date in the of its name.\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In a local terminal (",(0,l.kt)("strong",{parentName:"li"},"not ssh"),") copy the files over")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scp -rp amiga@10.0.4.110:/data/farm_ng/<name-of-log-file> ~/path/in/local/directory\n# Replace amiga@... with what is shown as the name in the SSH\n#terminal, and your Amiga's ip address\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When prompted enter the password for the Amiga.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you are receiving an error like: No such file or directory"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Check to see if your path is right, both on your local machine,\nand the ssh terminal"),(0,l.kt)("li",{parentName:"ul"},"Check to make sure you are entering this command in your local\nterminal and not the Amiga"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The files should begin to download, and when it reaches 100%\nthe download is complete, and the file transfer it done!"),(0,l.kt)("li",{parentName:"ul"},"We recommend adding meaningful names to your field data so that\nyou will know what it is later down the road. An example of this\nis\nyyyy_mm_dd_hh_mm_ss_msmsms_type_hostname.xxxx.bin")),(0,l.kt)("p",null,"Congratulations you have now completed this tutorial, and should\nnow know how to record field data and offload it!"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you want to go through an example that will use this data, at\nthe bottom of this page click the next button to arrive at\nthe File Reader example and the page after that is the File\nReader Can example.")))}p.isMDXComponent=!0}}]);