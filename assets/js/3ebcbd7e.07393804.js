"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[2292],{50955:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=i(74848),t=i(28453);const a={id:"brain-apps-manifest",title:"Custom Applications Manifest"},r="Custom Applications Manifest",l={id:"brain/brain-apps-manifest",title:"Custom Applications Manifest",description:"As explained in the brain apps section, the brain apps and services are a way to extend the functionality of the brain.",source:"@site/docs/brain/custom-applications-manifest.mdx",sourceDirName:"brain",slug:"/brain/brain-apps-manifest",permalink:"/docs/brain/brain-apps-manifest",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/brain/custom-applications-manifest.mdx",tags:[],version:"current",frontMatter:{id:"brain-apps-manifest",title:"Custom Applications Manifest"},sidebar:"Developer",previous:{title:"Custom Applications (Kivy)",permalink:"/docs/brain/brain-apps-kivy"},next:{title:"Custom Apps / Services Ownership",permalink:"/docs/brain/app-ownership"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Manifest file format",id:"manifest-file-format",level:2},{value:"Supported fields",id:"supported-fields",level:3},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"custom-applications-manifest",children:"Custom Applications Manifest"})}),"\n",(0,s.jsxs)(n.p,{children:["As explained in the ",(0,s.jsx)(n.a,{href:"/docs/brain/brain-apps",children:"brain apps"})," section, the brain apps and services are a way to extend the functionality of the brain."]}),"\n",(0,s.jsx)(n.p,{children:"In this section we will learn how to register the apps in the system into the launcher."}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Each application can be defined in what we call a manifest file. This file contains the metadata of the app and is used by the launcher to display the app in the UI.\nThe manifest file is a JSON which in internally parsed by the launcher and automatically register each app and service as a ",(0,s.jsx)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html",children:"systemd service"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The manifest file is located in the root directory of the ",(0,s.jsx)(n.code,{children:"farm-ng-user-[<your_username>]"})," and is called ",(0,s.jsx)(n.code,{children:"manifest.json"})," with the following\nbasic structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "services": {\n        "example-service": {\n            "name": "example-service",\n            "type": "service",\n            "exec_cmd": "/farm_ng_image/venv/bin/python3 example_service.py",\n            "autostart": true\n        },\n   }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"See next sections for a detailed description of each field and advanced usage to include multiple services and apps in the same manifest file."}),"\n",(0,s.jsx)(n.h2,{id:"manifest-file-format",children:"Manifest file format"}),"\n",(0,s.jsxs)(n.p,{children:["The manifest file must be a valid JSON file that contains a ",(0,s.jsx)(n.code,{children:"services"})," field with a list of services and apps to register in the system."]}),"\n",(0,s.jsx)(n.p,{children:"Each service or app is defined by a unique name and a set of fields that describe the service or app. For educational purposes, we will use the following example showing\nall the supported fields and values:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "services": {\n        "example-service": {\n            "name": "example-service",\n            "type": "service",\n            "exec_cmd": "/farm_ng_image/venv/bin/python3 example_service.py",\n            "args": [\n                "--config",\n                "/opt/farmng/config.json",\n                "--port",\n                "8042"\n            ],\n            "autostart": true,\n            "app_route": "8042",\n            "display_name": "Example Service"\n        },\n   }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"supported-fields",children:"Supported fields"}),"\n",(0,s.jsx)(n.p,{children:"The following fields are supported for services:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": The name of the service. This name must be unique and cannot be repeated in the same manifest file. It will be used as the name of the systemd service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": The type of the service. This field must be set to either:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app"}),": An application which can be launched from the launcher."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"service"}),": A background service."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exec_cmd"}),": The command to execute to start the service. Usually the absolute path to the executable and could include your own virtual environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"args"}),": Optional, list of arguments to pass to the executable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"autostart"}),": Optional, whether the service should be restarted automatically when it exits. Default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app_route"}),": Optional, port where the service will serve the GUI when launching a web app."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"display_name"}),": Optional, name of the service to display in the launcher."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"deps"}),": Optional, a list of background services in the same manifest that must be started first."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,s.jsx)(n.p,{children:"The manifest file can support multiple services and apps in the same file. This is useful to group related services and apps together with a list of dependencies."}),"\n",(0,s.jsxs)(n.p,{children:["One example is the ",(0,s.jsx)(n.code,{children:"farm-ng-user-[<your_username>]"})," manifest file which contains all the services and apps that are installed by default in the brain."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "services": {\n    "example-service": {\n      "name": "example-service",\n      "type": "service",\n      "exec_cmd": "/farm_ng_image/venv/bin/python3 example_service.py",\n      "autostart": true\n    },\n    "example-app": {\n      "name": "example-app",\n      "type": "app",\n      "exec_cmd": "/farm_ng_image/venv/bin/python3 example_app.py",\n      "deps": [\n        "example-service"\n      ],\n      "app_route": "8042",\n      "display_name": "Example App"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"A correctly formatted manifest.json is crucial for the successful loading of your application/service\nin the launcher backend.\nWhile adhering to best practices and thoroughly checking your manifest file is recommended to prevent errors,\nthere are occasions when you might encounter issues with a malformed manifest file."}),"\n",(0,s.jsx)(n.p,{children:"If your application does not appear on the launcher screen, you can utilize journalctl to debug potential\nissues with manifest.json. This approach helps in identifying specific error messages related to the manifest file processing."}),"\n",(0,s.jsx)(n.p,{children:"To begin debugging, open a terminal window on the robot and execute the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -su adminfarmng journalctl -f --user-unit farmng-launcher-backend | grep -v INFO\n"})}),"\n",(0,s.jsx)(n.p,{children:"This command filters the system logs in real-time, highlighting key phrases that typically indicate issues related to\nmanifest.json. By examining the output, you can pinpoint the exact nature of the problem, such as type mismatches,\nJSON parsing errors, or invalid service types.\nThis targeted approach significantly reduces the time and effort required for troubleshooting."}),"\n",(0,s.jsx)(n.p,{children:"Remember, the correct structure and content of manifest.json are vital for the seamless operation of your application\nwithin the launcher environment. Regularly reviewing and validating your manifest file can prevent many common issues."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);