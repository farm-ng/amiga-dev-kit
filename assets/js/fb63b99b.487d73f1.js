"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3943],{8432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=a(7462),n=(a(7294),a(3905));a(1839);const r={id:"kivy-definition",title:"02 - Kivy Definition"},o="Kivy Definition",l={unversionedId:"tutorials/camera_streamer/kivy-definition",id:"tutorials/camera_streamer/kivy-definition",title:"02 - Kivy Definition",description:"In the src/res/main.kv file of the camera-streamer app we define the kivy app.",source:"@site/docs/tutorials/camera_streamer/02_kivy_definition.md",sourceDirName:"tutorials/camera_streamer",slug:"/tutorials/camera_streamer/kivy-definition",permalink:"/docs/tutorials/camera_streamer/kivy-definition",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/tutorials/camera_streamer/02_kivy_definition.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"kivy-definition",title:"02 - Kivy Definition"},sidebar:"examples",previous:{title:"01 - Template Starter",permalink:"/docs/tutorials/camera_streamer/template-starter"},next:{title:"03 - Python Implementation",permalink:"/docs/tutorials/camera_streamer/camera-stream"}},p={},m=[{value:"Starting with the template",id:"starting-with-the-template",level:3},{value:"TabbedPanel of Image widgets",id:"tabbedpanel-of-image-widgets",level:3}],s={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kivy-definition"},"Kivy Definition"),(0,n.kt)("p",null,"In the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/camera-streamer/blob/main/src/res/main.kv"},(0,n.kt)("inlineCode",{parentName:"a"},"src/res/main.kv"))," file of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/camera-streamer"},(0,n.kt)("strong",{parentName:"a"},"camera-streamer"))," app we define the kivy app.\nYou should open that file for reference as you follow along."),(0,n.kt)("p",null,"Our app will have two components:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A ",(0,n.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html"},(0,n.kt)("inlineCode",{parentName:"a"},"TabbedPanel"))," of ",(0,n.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.image.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Image"))," widgets for displaying the camera streams"),(0,n.kt)("li",{parentName:"ol"},"A ",(0,n.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.button.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Button"))," for exiting the app")),(0,n.kt)("h3",{id:"starting-with-the-template"},"Starting with the template"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-app-template/blob/main/src/res/main.kv"},(0,n.kt)("inlineCode",{parentName:"a"},"src/res/main.kv"))," file of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-app-template"},(0,n.kt)("strong",{parentName:"a"},"amiga-app-template"))," defines a root of a ",(0,n.kt)("inlineCode",{parentName:"p"},"RelativeLayout"),", with a ",(0,n.kt)("inlineCode",{parentName:"p"},"Button"),", and a ",(0,n.kt)("inlineCode",{parentName:"p"},"Label"),", as explained in ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorials/introduction/template-overview#kivy-app-definition"},"kivy app definition"),"."),(0,n.kt)("p",null,"We will keep the ",(0,n.kt)("inlineCode",{parentName:"p"},"RelativeLayout")," root and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Button")," for exiting the app, but remove the ",(0,n.kt)("inlineCode",{parentName:"p"},"Label")," widget.\nInstead, we will add a ",(0,n.kt)("inlineCode",{parentName:"p"},"TabbedPanel")," for displaying the image streams from our Oak device."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"RelativeLayout")," allows for overlapping widgets,\nwhich is nice as we can allow the image streams to take up the full size of our window with the button drawn on top.\nNotice we draw the ",(0,n.kt)("inlineCode",{parentName:"p"},"Button")," after the ",(0,n.kt)("inlineCode",{parentName:"p"},"TabbedPannel")," so it is visible and usable."),(0,n.kt)("h3",{id:"tabbedpanel-of-image-widgets"},"TabbedPanel of Image widgets"),(0,n.kt)("p",null,"To conveniently package the 4 image streams from the oak camera in the kivy ",(0,n.kt)("inlineCode",{parentName:"p"},"Window"),", we will add the ",(0,n.kt)("inlineCode",{parentName:"p"},"Image")," widgets as a ",(0,n.kt)("inlineCode",{parentName:"p"},"TabbedPanel"),".\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"TabbedPanel")," is used to select between different pages, which in our case is 4 ",(0,n.kt)("inlineCode",{parentName:"p"},"Image")," Widgets."),(0,n.kt)("p",null,"For the ",(0,n.kt)("inlineCode",{parentName:"p"},"TabbedPanel"),", we do not need a ",(0,n.kt)("inlineCode",{parentName:"p"},"default_tab")," and we assign the ",(0,n.kt)("inlineCode",{parentName:"p"},"text")," each tab will display."),(0,n.kt)("p",null,"We assign each ",(0,n.kt)("inlineCode",{parentName:"p"},"Image")," widget an ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," so it can be easily referenced in the Python ",(0,n.kt)("inlineCode",{parentName:"p"},"App"),".\nThis will allow us to set the correct image stream to the correct tab, so the ",(0,n.kt)("inlineCode",{parentName:"p"},"rgb")," image stream is shown on the ",(0,n.kt)("inlineCode",{parentName:"p"},"rgb")," panel and the ",(0,n.kt)("inlineCode",{parentName:"p"},"left")," stereo camera stream is displayed on the ",(0,n.kt)("inlineCode",{parentName:"p"},"left")," tab."),(0,n.kt)("p",null,"In the Python app, we can access a ",(0,n.kt)("inlineCode",{parentName:"p"},"Widget")," directly using the widget ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," in two ways:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Python"},"# As a dictionary\nFOO_WIDGET = self.root.ids['FOO_WIDGET_ID']\n# As an attribute\nFOO_WIDGET = self.root.ids.FOO_WIDGET_ID\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reference: ",(0,n.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html"},(0,n.kt)("strong",{parentName:"a"},"TabbedPanel"))),(0,n.kt)("li",{parentName:"ul"},"Reference: ",(0,n.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.image.html"},(0,n.kt)("strong",{parentName:"a"},"Image")))))}d.isMDXComponent=!0}}]);