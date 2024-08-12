"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[6404],{2815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(4848),a=t(8453);const r={id:"kivy-definition",title:"01 - Kivy Definition"},s="Kivy",o={id:"tutorials/camera_streamer/kivy-definition",title:"01 - Kivy Definition",description:"In this tutorial, we will be adding a few new elements to our app, a Tabbed Panel and Images",source:"@site/docs/tutorials/camera_streamer/02_kivy_definition.md",sourceDirName:"tutorials/camera_streamer",slug:"/tutorials/camera_streamer/kivy-definition",permalink:"/docs/tutorials/camera_streamer/kivy-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/tutorials/camera_streamer/02_kivy_definition.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"kivy-definition",title:"01 - Kivy Definition"},sidebar:"examples",previous:{title:"00 - Camera Streamer Overview",permalink:"/docs/tutorials/camera_streamer/camera-streamer-overview"},next:{title:"02 - Python Implementation",permalink:"/docs/tutorials/camera_streamer/camera-stream"}},l={},d=[{value:"Starting with the template",id:"starting-with-the-template",level:2},{value:"TabbedPanel of Image widgets",id:"tabbedpanel-of-image-widgets",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"kivy",children:"Kivy"})}),"\n",(0,i.jsx)(n.p,{children:"In this tutorial, we will be adding a few new elements to our app, a Tabbed Panel and Images\nto make an app that looks like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/53625197/216075393-6e578a01-677e-4279-b224-70fd3f73ce5f.png",alt:"camera-streamer"})}),"\n",(0,i.jsx)(n.p,{children:"This app is constructed using four tabbed panels to represent\neach of the available streams from the oak camera.\nThese are rgb (color image), disparity (depth), and left and right streams."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://kivy.org/doc/stable/api-kivy.uix.tabbedpanel.html",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"TabbedPanel"})})}),"\nfor selecting camera stream"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://kivy.org/doc/stable/api-kivy.uix.image.html",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Image"})})}),"\nwidgets for displaying the camera streams"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["And we will continue using a ",(0,i.jsx)(n.a,{href:"https://kivy.org/doc/stable/api-kivy.uix.button.html",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Button"})})}),"\nfor exiting the app."]}),"\n",(0,i.jsx)(n.h2,{id:"starting-with-the-template",children:"Starting with the template"}),"\n",(0,i.jsxs)(n.p,{children:["Right now our file, ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-app-template-kivy/blob/main/src/res/main.kv",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"src/res/main.kv"})})}),"\nfile\ndefines a root of a ",(0,i.jsx)(n.code,{children:"RelativeLayout"}),", with a\n",(0,i.jsx)(n.code,{children:"Button"}),", and a ",(0,i.jsx)(n.code,{children:"Label"}),",\nas explained in ",(0,i.jsx)(n.a,{href:"/docs/tutorials/introduction/template-overview#kivy-app-definition",children:(0,i.jsx)(n.strong,{children:"kivy app definition"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["We will keep the ",(0,i.jsx)(n.code,{children:"RelativeLayout"})," root and the ",(0,i.jsx)(n.code,{children:"Button"})," for\nexiting the app, but remove the ",(0,i.jsx)(n.code,{children:"Label"})," widget.\nInstead, we will add a ",(0,i.jsx)(n.code,{children:"TabbedPanel"})," for displaying the image\nstreams from our Oak device."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RelativeLayout"})," allows for overlapping widgets,\nwhich is nice as we can allow the image streams to take up the\nfull size of our window with the button drawn on top.\nNotice we draw the ",(0,i.jsx)(n.code,{children:"Button"})," after the ",(0,i.jsx)(n.code,{children:"TabbedPannel"})," so it is\nvisible and usable."]}),"\n",(0,i.jsx)(n.h2,{id:"tabbedpanel-of-image-widgets",children:"TabbedPanel of Image widgets"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The Python implementation of the\n",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/camera-streamer",children:(0,i.jsx)(n.strong,{children:"camera-streamer"})}),"\napp can be found at\n",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/camera-streamer/blob/main/src/res/main.kv",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"src/res/main.kv"})})}),".\nYou should open that file for reference as you follow along."]})}),"\n",(0,i.jsxs)(n.p,{children:["To conveniently package the 4 image streams from the oak camera\nin the kivy ",(0,i.jsx)(n.code,{children:"Window"}),", we will add the ",(0,i.jsx)(n.code,{children:"Image"})," widgets as a\n",(0,i.jsx)(n.code,{children:"TabbedPanel"}),".\nThe ",(0,i.jsx)(n.code,{children:"TabbedPanel"})," is used to select between different pages,\nwhich in our case is 4 ",(0,i.jsx)(n.code,{children:"Image"})," Widgets."]}),"\n",(0,i.jsxs)(n.p,{children:["For the ",(0,i.jsx)(n.code,{children:"TabbedPanel"}),", we do not need a ",(0,i.jsx)(n.code,{children:"default_tab"})," and we\nassign the ",(0,i.jsx)(n.code,{children:"text"})," each tab will display."]}),"\n",(0,i.jsxs)(n.p,{children:["We assign each ",(0,i.jsx)(n.code,{children:"Image"})," widget an ",(0,i.jsx)(n.code,{children:"id"})," so it can be easily\nreferenced in the Python ",(0,i.jsx)(n.code,{children:"App"}),".\nThis will allow us to set the correct image stream to the correct\ntab, so the ",(0,i.jsx)(n.code,{children:"rgb"})," image stream is shown on the ",(0,i.jsx)(n.code,{children:"rgb"})," panel and\nthe ",(0,i.jsx)(n.code,{children:"left"})," stereo camera stream is displayed on the ",(0,i.jsx)(n.code,{children:"left"})," tab."]}),"\n",(0,i.jsx)(n.p,{children:'Adjust "src/res/main.kv":'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'RelativeLayout:\n    TabbedPanel:\n        pos_hint: {"x": 0.0, "top": 1.0}\n        do_default_tab: False\n        id: tab_root\n        TabbedPanelItem:\n            text: "rgb"\n            Image:\n                id: rgb\n        TabbedPanelItem:\n            text: "disparity"\n            Image:\n                id: disparity\n        TabbedPanelItem:\n            text: "left"\n            Image:\n                id: left\n        TabbedPanelItem:\n            text: "right"\n            Image:\n                id: right\n    Button:\n        id: back_btn_layout\n        pos_hint: {"x": 0.0, "top": 0.925}\n        background_color: 0, 0, 0, 0\n        size_hint: 0.1, 0.1\n        background_normal: "assets/back_button.png"\n        on_release: app.on_exit_btn()\n        Image:\n            source: "assets/back_button_normal.png" if self.parent.state == "normal" else "assets/back_button_down.png"\n            pos: self.parent.pos\n            size: self.parent.size\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now, we'd like to test if the changes we made to the kivy string compile."}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["You'll see if you run ",(0,i.jsx)(n.code,{children:"./entry.sh"})," you get an error:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:" Traceback (most recent call last):\n   File \"kivy/properties.pyx\", line 961, in kivy.properties.ObservableDict.**getattr**\n KeyError: 'counter_label'\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"If we update our template_function():"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'    async def template_function(self) -> None:\n        """Placeholder forever loop."""\n        while self.root is None:\n            await asyncio.sleep(0.01)\n\n        while True:\n            print(self.root.ids["tab_root"].current_tab.text)\n            await asyncio.sleep(1.0)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["With this modification, when we run ",(0,i.jsx)(n.code,{children:"./entry.sh"})," the terminal will start printing\nthe text attribute of the current tab."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"rgb\nrgb\nrgb\nleft\nright\nright\nright\n"})}),"\n",(0,i.jsx)(n.p,{children:"Since we haven't connected to the oak service yet, each of the tabs will be blank, but\nthis test proves to us that we have created the tabbed panels and can read which one\nwe're looking at:)"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);