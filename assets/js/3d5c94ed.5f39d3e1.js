"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[4406],{7143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(5893),s=t(1151);const r={id:"further-exercises",title:"03 - Further Exercises"},a="Further Exercises",o={id:"tutorials/virtual_joystick/further-exercises",title:"03 - Further Exercises",description:"Optionally, go beyond the tutorial and try to add features to this example.",source:"@site/docs/tutorials/virtual_joystick/03_further_exercises.md",sourceDirName:"tutorials/virtual_joystick",slug:"/tutorials/virtual_joystick/further-exercises",permalink:"/docs/tutorials/virtual_joystick/further-exercises",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/tutorials/virtual_joystick/03_further_exercises.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"further-exercises",title:"03 - Further Exercises"},sidebar:"examples",previous:{title:"02 - Main Implementation",permalink:"/docs/tutorials/virtual_joystick/device-streams"},next:{title:"Using a VNC Viewer",permalink:"/docs/examples/vnc_viewer/"}},l={},d=[{value:"Adjustable rates",id:"adjustable-rates",level:2},{value:"Toggle between Auto modes",id:"toggle-between-auto-modes",level:2},{value:"Customizing an app",id:"customizing-an-app",level:2},{value:"Development and Debug an app",id:"development-and-debug-an-app",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"further-exercises",children:"Further Exercises"}),"\n",(0,i.jsx)(n.p,{children:"Optionally, go beyond the tutorial and try to add features to this example.\nTwo options are:"}),"\n",(0,i.jsx)(n.h2,{id:"adjustable-rates",children:"Adjustable rates"}),"\n",(0,i.jsxs)(n.p,{children:["Define two kivy ",(0,i.jsx)(n.a,{href:"https://kivy.org/doc/stable/api-kivy.uix.slider.html",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Slider"})})}),"\nwidgets that allow changing ",(0,i.jsx)(n.code,{children:"max_speed"})," & ",(0,i.jsx)(n.code,{children:"max_angular_rate"}),"!\nPlay around with where you can put these and how you can link\nthem directly to the value in the ",(0,i.jsx)(n.code,{children:"VirtualJoystickApp"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Just remember, the actual rates the amiga drives at are limited\nby the vehicle control unit (VCU), so don't be surprised if the\ntrue max speed doesn't reflect the slider."}),"\n",(0,i.jsx)(n.h2,{id:"toggle-between-auto-modes",children:"Toggle between Auto modes"}),"\n",(0,i.jsxs)(n.p,{children:["Try to add a kivy ",(0,i.jsx)(n.code,{children:"Button"})," widget that toggles the requested\n",(0,i.jsx)(n.code,{children:"AmigaControlState"})," so the brain is not constantly trying to take\ncontrol of the dashboard while running."]}),"\n",(0,i.jsx)(n.h2,{id:"customizing-an-app",children:"Customizing an app"}),"\n",(0,i.jsxs)(n.p,{children:["In order to customize an app we leverage the ",(0,i.jsx)(n.code,{children:"setup.cfg"})," that contains all the metadata and package configuration.\nMore can be found ",(0,i.jsx)(n.a,{href:"https://setuptools.pypa.io/en/latest/userguide/declarative_config.html",children:"here"}),"!"]}),"\n",(0,i.jsx)(n.p,{children:"The most important first steps are to modify the metadata of the project and dependencies:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Inside the ",(0,i.jsx)(n.code,{children:"setup.cfg"})," file, adjust the fields under the tag ",(0,i.jsx)(n.code,{children:"[metadata]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For basic users, the package name (",(0,i.jsx)(n.code,{children:"project_name"})," in the project structure above)\ngoes in the ",(0,i.jsx)(n.code,{children:"name"})," field, and must match with the directory name right under the ",(0,i.jsx)(n.code,{children:"libs/"})," directory."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["I.e., change both the ",(0,i.jsx)(n.code,{children:"name"})," field and the directory name under ",(0,i.jsx)(n.code,{children:"libs/"})," to your new app name."]}),"\n",(0,i.jsxs)(n.li,{children:["VScode should prompt you to change the import\nnames in ",(0,i.jsx)(n.code,{children:"test_dummy.py"})," once you change the directory name.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If not, manually change:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-note",children:"from amiga_package import __version__\nfrom amiga_package import ops\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-note",children:"from <project_name> import __version__\nfrom <project_name> import ops\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For advanced users, you can modify as much is compliant with Python ",(0,i.jsx)(n.code,{children:"setuptools"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Adjust the package dependencies","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Include whatever extra dependency you need in the ",(0,i.jsx)(n.code,{children:"install_requires"})," field."]}),"\n",(0,i.jsxs)(n.li,{children:["Our only requirements are:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"wheel"}),": for packaging the app."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"kivy"}),": to generate the graphical user interface (GUI)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"farm-ng-amiga"}),": the Farm-ng Amiga public SDK."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"development-and-debug-an-app",children:"Development and Debug an app"}),"\n",(0,i.jsx)(n.p,{children:"The workflow for development is pretty much the same as any standard gui application."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Make changes in the code."}),"\n",(0,i.jsxs)(n.li,{children:["Run the code with the play button in vs-code.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[Optionally] Add a breakpoint to any line and use the Debug Console to interact."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Go to step 1"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);