"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[9945],{459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(5893),s=t(1151);const a={id:"brain-apps",title:"Custom Applications (ReactJS)"},i="Developing Custom Applications",o={id:"brain/brain-apps",title:"Custom Applications (ReactJS)",description:"Create an app",source:"@site/docs/brain/custom-applications.mdx",sourceDirName:"brain",slug:"/brain/brain-apps",permalink:"/docs/brain/brain-apps",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/brain/custom-applications.mdx",tags:[],version:"current",frontMatter:{id:"brain-apps",title:"Custom Applications (ReactJS)"},sidebar:"Developer",previous:{title:"Track Follower",permalink:"/docs/concepts/track_follower_service/"},next:{title:"Custom Applications (Kivy)",permalink:"/docs/brain/brain-apps-kivy"}},l={},c=[{value:"Create an app",id:"create-an-app",level:3},{value:"Create a repository from the template",id:"create-a-repository-from-the-template",level:4},{value:"Project structure",id:"project-structure",level:2},{value:"Understand the structure of an app",id:"understand-the-structure-of-an-app",level:3},{value:"Backend:",id:"backend",level:4},{value:"Frontend:",id:"frontend",level:4},{value:"Repository structure",id:"repository-structure",level:3},{value:"The <code>manifest.json</code> file",id:"the-manifestjson-file",level:4},{value:"How to setup the project",id:"how-to-setup-the-project",level:2},{value:"How to run the project",id:"how-to-run-the-project",level:2},{value:"Run the backend in a terminal",id:"run-the-backend-in-a-terminal",level:3},{value:"Run the app in the launcher",id:"run-the-app-in-the-launcher",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"developing-custom-applications",children:"Developing Custom Applications"}),"\n",(0,r.jsx)(n.h3,{id:"create-an-app",children:"Create an app"}),"\n",(0,r.jsx)(n.h4,{id:"create-a-repository-from-the-template",children:"Create a repository from the template"}),"\n",(0,r.jsxs)(n.p,{children:["To create your own custom application navigate to the ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-app-template",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"amiga-app-template"})})})," repository on GitHub."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You need to be signed into your GitHub account to see the option to ",(0,r.jsx)(n.code,{children:"Use this template"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/5157099/205272492-356c1540-948e-43dc-8f60-8992caa8d511.gif",alt:"Create a new templated repository"})}),"\n",(0,r.jsx)(n.p,{children:"Written instructions (same as video above):"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Click on green ",(0,r.jsx)(n.em,{children:"Use this template"})," button (top right) to create a new repository based on this repo"]}),"\n",(0,r.jsxs)(n.li,{children:["Fill out:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Owner: (your_username)"}),"\n",(0,r.jsxs)(n.li,{children:["Repository Name: whatever-you-want","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Should be between between 4-17 characters, and"}),"\n",(0,r.jsx)(n.li,{children:"Use underscores (_) or dashes (-) for separating words (no spaces!)\n-Select Public box\n-Click [Create repository from template]\nDone!"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Now that you have created a new git repository, you have two options:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Work in your local workspace (for development)"}),"\n",(0,r.jsx)(n.li,{children:"Work in a Remote-SSH session on your robot (deployment on a brain)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you have not yet established a Remote-SSH connection, refer to this documentation:\n",(0,r.jsx)(n.a,{href:"https://amiga.farm-ng.com/docs/ssh/",children:"https://amiga.farm-ng.com/docs/ssh/"})]}),"\n",(0,r.jsx)(n.p,{children:"For this example, we recommend option 2 and clone the repository directly onto the brain."}),"\n",(0,r.jsx)(n.p,{children:"After you have established connection:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd <to-your-base-directory>\ngit clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git\n"})}),"\n",(0,r.jsx)(n.h2,{id:"project-structure",children:"Project structure"}),"\n",(0,r.jsx)(n.h3,{id:"understand-the-structure-of-an-app",children:"Understand the structure of an app"}),"\n",(0,r.jsx)(n.p,{children:"Every modern app typically consists of two main parts: the backend and the frontend.\nLet's dive into what each of these components does and how they interact with each other."}),"\n",(0,r.jsx)(n.h4,{id:"backend",children:"Backend:"}),"\n",(0,r.jsx)(n.p,{children:'The backend is like the brain of your app. It processes data, makes calculations,\ncommunicates with databases, and performs all the logical operations. When you hear\nterms like "server," "API," or "database," they\'re usually related to the backend.'}),"\n",(0,r.jsx)(n.p,{children:"In our example, we're using FastAPI to build our backend. FastAPI is a modern,\nhigh-performance web framework for building APIs. Coupled with the farm-ng brain services,\nour backend will fetch and serve data efficiently and securely to the frontend."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Key Points:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Handles data processing, storage, and retrieval."}),"\n",(0,r.jsx)(n.li,{children:"Communicates with other services and databases."}),"\n",(0,r.jsx)(n.li,{children:"Secures data and ensures only authorized users can access it."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"frontend",children:"Frontend:"}),"\n",(0,r.jsx)(n.p,{children:"The frontend is the part of the app users see and interact with.\nThink of it as the face of your app which includes everything that you can touch, click,\nor interact with: buttons, images, text inputs, animations, and more."}),"\n",(0,r.jsx)(n.p,{children:"For our frontend, we're using ReactJS. ReactJS is a popular JavaScript library for building user interfaces.\nIt allows developers to create responsive and interactive UI components easily."}),"\n",(0,r.jsx)(n.h3,{id:"repository-structure",children:"Repository structure"}),"\n",(0,r.jsxs)(n.p,{children:["In vs-code, you can see the project structure on the left side in the ",(0,r.jsx)(n.code,{children:"EXPLORER"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"Below are listed the most important components:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"repository-name/  # Root level of the project.\n\u251c\u2500\u2500 ts/ # Contains ReactJS frontend code.\n|   \u251c\u2500\u2500 index.html  # The HTML template of the app frontend.\n|   \u251c\u2500\u2500 package.json  # The file containing the dependencies of the project frontend.\n|   \u2514\u2500\u2500 src/\n|       \u251c\u2500\u2500 components/  # Contains ReactJS components.\n|       |   \u251c\u2500\u2500 TopicMonitor.tsx  # The component that displays the topic monitor.\n|       |   \u2514\u2500\u2500 App.tsx  # The main entry point of the app frontend.\n|       \u2514\u2500\u2500 main.tsx  # The main entry point of the app frontend.\n\u251c\u2500\u2500 main.py\n|   # The main entry point of the app backend.\n\u251c\u2500\u2500 manifest.json\n|   # The file containing the metadata of the project.\n\u251c\u2500\u2500 install.sh\n|   # The script to register the app in the launcher.\n\u251c\u2500\u2500 uninstall.sh\n|   # The script to unregister the app from the launcher.\n\u2514\u2500\u2500 requirements.txt\n    # The file containing the dependencies of the project backend.\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"the-manifestjson-file",children:["The ",(0,r.jsx)(n.code,{children:"manifest.json"})," file"]}),"\n",(0,r.jsx)(n.p,{children:"In this file, you can find the metadata of the app. This file is used by the launcher\nand has the following structure:"}),"\n",(0,r.jsx)(n.p,{children:"In order to run the application, you will need to update YOUR_USER_HERE to reflect your user from fleet manager."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "services": {\n    "example-app": {\n      "name": "example-app",\n      "type": "app",\n      "exec_cmd": "/mnt/managed_home/farm-ng-user-YOUR_USER_HERE/amiga-app-template/venv/bin/python3\n                   /mnt/managed_home/farm-ng-user-YOUR_USER_HERE/amiga-app-template/main.py",\n      "args": [\n        "--config /opt/farmng/config.json", "--port 8042"\n      ],\n      "autostart": true,\n      "http_gui_port": 8042,\n      "display_name": "Monitor App"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This might look something like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/mnt/managed_home/farm-ng-user-jane/...\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Learn more about the manifest file ",(0,r.jsx)(n.a,{href:"/docs/brain/brain-apps-manifest",children:"here"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-setup-the-project",children:"How to setup the project"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Begin by installing node version manager (nvm) in the /ts directory."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ts/\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once this has finished running, you should see the following message:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'=> Close and reopen your terminal to start using nvm or run the following to use it now:\n\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Verify installation by closing and re-opening the terminal and running:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nvm --version\n    0.34.0\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should see a version >= 0.34.0."}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Prepare the frontend and compile the typescript code to javascript within the ts/ folder of your custom app"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ts/\nnvm install --lts\nnpm install\nnpm run build  # build the frontend\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Prepare the backend"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Install the dependencies of the backend"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ..\npython3 -m venv venv  # create a virtual environment\nsource venv/bin/activate  # activate the virtual environment\npython -m pip install --upgrade pip # make sure pip is updated\npip install -r requirements.txt  # install dependencies\n"})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-run-the-project",children:"How to run the project"}),"\n",(0,r.jsx)(n.h3,{id:"run-the-backend-in-a-terminal",children:"Run the backend in a terminal"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python main.py --config /opt/farmng/config.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"Optionally, you can run into debug mode to use the local frontend instead of\nthe one served by the launcher."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python main.py --config /opt/farmng/config.json --debug\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"If when running main.py, a port error occurs:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[Errno 98] error while attempting to bind on address ('0.0.0.0', 8042): address already in use\n"})}),(0,r.jsx)(n.p,{children:"This can occur while developing and can be resolved with:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo reboot\n"})})]}),"\n",(0,r.jsxs)(n.p,{children:["To visualize the app in your browser, go to ",(0,r.jsx)(n.a,{href:"http://localhost:8042",children:"http://localhost:8042"})]}),"\n",(0,r.jsx)(n.h3,{id:"run-the-app-in-the-launcher",children:"Run the app in the launcher"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Register the app in the launcher"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./install.sh\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Now you should be able to see the app in the launcher and run it."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/5157099/279948050-31df3a3f-59f4-47ed-bc6a-cb39d95b07da.png",alt:"app view"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"If for some reason you need to remove your app from the launcher"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./uninstall.sh\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(7294);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);