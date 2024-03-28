"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[4884],{7456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var i=t(5893),s=t(1151),r=t(4866),a=t(5162);const o={id:"contribute-website",title:"Documentation"},l="Getting started",d={id:"contribute/contribute-website",title:"Documentation",description:"This page contains instructions for developers who want to contribute to the Amiga Development Kit documentation.",source:"@site/docs/contribute/website.mdx",sourceDirName:"contribute",slug:"/contribute/contribute-website",permalink:"/docs/contribute/contribute-website",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/contribute/website.mdx",tags:[],version:"current",frontMatter:{id:"contribute-website",title:"Documentation"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Local Development",id:"local-development",level:2},{value:"Building the docs",id:"building-the-docs",level:3},{value:"Start yarn",id:"start-yarn",level:3},{value:"Re-enter",id:"re-enter",level:3},{value:"Best practices / tips",id:"best-practices--tips",level:2},{value:"Pre-commit formatting workflow",id:"pre-commit-formatting-workflow",level:3},{value:"Adding to the website",id:"adding-to-the-website",level:2},{value:"Adding pages",id:"adding-pages",level:3},{value:"Adding images",id:"adding-images",level:3},{value:"<strong>Thank you for your help building this community!</strong>",id:"thank-you-for-your-help-building-this-community",level:3},{value:"The documentation website is built using <strong>Docusaurus 2</strong>.",id:"the-documentation-website-is-built-using-docusaurus-2",level:6}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h6:"h6",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(n.p,{children:"This page contains instructions for developers who want to contribute to the Amiga Development Kit documentation."}),"\n",(0,i.jsxs)(n.p,{children:["We build our website with ",(0,i.jsx)(n.a,{href:"https://docusaurus.io/",children:(0,i.jsx)(n.strong,{children:"Docusaurus 2"})})," with Markdown syntax.\nTo get started:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Clone the ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/amiga-dev-kit",children:(0,i.jsx)(n.strong,{children:"Amiga Development Kit repo"})})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:farm-ng/amiga-dev-kit.git\ncd amiga-dev-kit\ngit submodule update --init\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Create a branch based on ",(0,i.jsx)(n.code,{children:"main"})," and open a pull request with your proposed improvements."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Reach out to us on the ",(0,i.jsx)(n.a,{href:"https://discourse.farm-ng.com/c/support/5",children:(0,i.jsx)(n.strong,{children:"farm-ng Discourse #support"})})," if you need help or support on this."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout main\ngit pull\ngit checkout -b <your-new-branch>\n# make your changes; then\ngit push -u origin <your-new-branch>\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Follow the instructions below for building the docs locally so you can see your changes in real time!"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you aren't familiar with Markdown syntax, check out one of the many getting started guides available free online.\nSuch as ",(0,i.jsx)(n.a,{href:"https://www.markdownguide.org/",children:(0,i.jsx)(n.strong,{children:"Markdown Guide"})}),"."]})}),"\n",(0,i.jsx)(n.h1,{id:"building-these-docs",children:"Building these Docs"}),"\n",(0,i.jsx)(n.p,{children:"In order to work locally on your machine and contribute to these docs, you will need to install the build infrastructure."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"You can edit the documentation directly on github and do not need to fuss with things here!\nFollow instructions below for adding images to the website, it's the same for text."})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Docusaurus allows you to build the docs locally and inspect how the website will appear, before actually deploying."}),"\n",(0,i.jsx)(n.p,{children:"In order to use docusaurus locally you'll need to install a couple libraries:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Node.js version 16.14 or above (which can be checked by running ",(0,i.jsx)(n.code,{children:"node -v"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Yarn >= 1.22.19"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We recommend doing so in a virtual environment to avoid conflicts with other packages / versions installed on your system.\nThough this is not a requirement and you are welcome to decide how / where to install."}),"\n",(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(n.code,{children:"pip3"})," & ",(0,i.jsx)(n.code,{children:"virtualenv"})," (system level):"]}),"\n","\n","\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(a.Z,{value:"linux",label:"Linux",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install python3-pip\nsudo pip3 install virtualenv\n"})})}),(0,i.jsx)(a.Z,{value:"macos",label:"MacOs",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew install python3\nsudo pip3 install virtualenv\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Start a virtual environment:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# assuming you're already in the amiga-dev-kit/ directory\n# or wherever you want your `venv` to exist\npython3 -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(a.Z,{value:"linux",label:"Linux",default:!0,children:[(0,i.jsx)(n.p,{children:"Install NVM / nodejs"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash\n# source ~/.bashrc # if not using a venv\n\n# Verify install\nnvm --version\n\n# Install node\nnvm install node\n"})}),(0,i.jsx)(n.p,{children:"Install yarn"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install npm\nsudo npm install -g yarn\n\n# Check version\nyarn --version\n"})})]}),(0,i.jsxs)(a.Z,{value:"macos",label:"MacOs",children:[(0,i.jsx)(n.p,{children:"Install npm"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew install npm\n"})}),(0,i.jsx)(n.p,{children:"Install yarn"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew install yarn\n# yes, use a package manager to install a package manager... ;)\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"local-development",children:"Local Development"}),"\n",(0,i.jsx)(n.p,{children:"After successful installation and working in the amiga-dev-kit github repo, you'll be able to pull down the latest, create a branch, and send pull requests just as you would editing any repo."}),"\n",(0,i.jsx)(n.p,{children:"After making your edits, you will build the docs locally in order to preview them before committing and pushing.  Following the steps below,\nyou would be able to start a local development server that opens a browser window and gives you a live preview of the page you are editing!  It will automatically update every time you save."}),"\n",(0,i.jsx)(n.h3,{id:"building-the-docs",children:"Building the docs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd website/  # /farm-ng/amiga-dev-kit/website\npip install -r requirements.txt\nyarn\n./run_pydoc-markdown.sh\nyarn build\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This command generates static content into the ",(0,i.jsx)(n.code,{children:"build"})," directory and can be served using any static contents hosting service."]}),"\n",(0,i.jsx)(n.h3,{id:"start-yarn",children:"Start yarn"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This command starts a local development server and opens up a browser window.\nMost changes are reflected live without having to restart the server."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn start\n"})}),"\n",(0,i.jsx)(n.p,{children:"Later, you can exit your virtualenv with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"deactivate\n"})}),"\n",(0,i.jsx)(n.h3,{id:"re-enter",children:"Re-enter"}),"\n",(0,i.jsxs)(n.p,{children:["When you come back you can re-enter from the root where the venv was created (e.g., ",(0,i.jsx)(n.code,{children:"amiga-dev-kit/"}),") with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# assuming you're already in the amiga-dev-kit/ directory\n# or wherever your `venv` exists\nsource venv/bin/activate\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"You may find issues with the node, npm, or yarn version.\nIf so, re-install these packages in your venv with:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nvm install node\n# sudo apt install npm\nnpm install -g yarn\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"Then rebuild the yarn server;"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd website\nyarn\nyarn start\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices--tips",children:"Best practices / tips"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add command line instructions where possible, rather than just posting link to an external website","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Links can be broken without us knowing!"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[".mdx allows for cool extensions included in the file","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Like the tab for different installation instructions(e.g. Mac, Linux, Windows)"}),"\n",(0,i.jsxs)(n.li,{children:["Use .mdx plugins to write JSX within your Markdown files and render them as React components.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/react",children:(0,i.jsx)(n.strong,{children:"See link here"})})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.a,{href:"#pre-commit-formatting-workflow",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"pre-commit"})})})," checks before committing / pushing","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"pre-commit run --all-files"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Test your links!"}),"\n",(0,i.jsxs)(n.li,{children:["Use the following VS Code extensions:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Code Spell Checker"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Trailing Spaces"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Markdown All in One"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Gussy up your Markdown"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can make your work more legible using ",(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/admonitions",children:(0,i.jsx)(n.strong,{children:"admonitions"})})," like this TIP box!\nMore markdown features can be found in the docusaurus documentation ",(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features",children:(0,i.jsx)(n.strong,{children:"here"})}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"pre-commit-formatting-workflow",children:"Pre-commit formatting workflow"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["You may need to install pre-commit, instructions can be found ",(0,i.jsx)(n.a,{href:"https://pre-commit.com/",children:(0,i.jsx)(n.strong,{children:"here"})})]})}),"\n",(0,i.jsx)(n.p,{children:"A typical workflow for committing your code changes may look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git add -p # Add the changes I want\npre-commit run --all-files\ngit add -p # Add the formatting changes the check just fixed\npre-commit run --all-files # double check for any formatting issues not resolved automatically (e.g., spellcheck)\ngit commit -m "foo bar baz"\ngit push\n'})}),"\n",(0,i.jsx)(n.h2,{id:"adding-to-the-website",children:"Adding to the website"}),"\n",(0,i.jsx)(n.h3,{id:"adding-pages",children:"Adding pages"}),"\n",(0,i.jsxs)(n.p,{children:["The pages are defined in a file called ",(0,i.jsx)(n.code,{children:"website/sidebars.js"}),".\nDepending on what you are adding you can choose to add it into the docs section or examples/ wherever would be most appropriate.\nThe pattern and structure in ",(0,i.jsx)(n.code,{children:"sidebars.js"})," should be clear."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For example :"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to add another section in between ",(0,i.jsx)(n.code,{children:"Dashboard"})," and ",(0,i.jsx)(n.code,{children:"Debug Cable"})," it will be something like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"docs": {\n  "Introduction": [\n    "getting-started",\n  ],\n  "Dashboard": [\n    "dashboard/dashboard",\n    "dashboard/dashboard-fw",\n    "dashboard/control-states",\n  ],\n  "Debug Cable": [\n    "debug_cable/debug-cable",\n  ],\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can change it to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"docs": {\n  "Introduction": [\n    "getting-started",\n  ],\n  "Dashboard": [\n    "dashboard/dashboard",\n    "dashboard/dashboard-fw",\n    "dashboard/control-states",\n  ],\n  "My New Section": [\n    "my_new_section/my-new-page",\n  ],\n  "Debug Cable": [\n    "debug_cable/debug-cable",\n  ],\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Add a new directory ",(0,i.jsx)(n.code,{children:"website/docs/my_new_section/"}),".\nThen you can add a markdown (",(0,i.jsx)(n.code,{children:"*.md"}),") file in that directory called ",(0,i.jsx)(n.code,{children:"my-new-page.md"}),".\nThe top of ",(0,i.jsx)(n.code,{children:"my-new-page.md"})," should be:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"---\nid: my-new-page\ntitle: My New Page\n---\n\n# Header of my new page\n\n## Subheader 1\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now with your locally build docs you should see a new tab called ",(0,i.jsx)(n.strong,{children:'"My New Section"'})," with a page called ",(0,i.jsx)(n.strong,{children:'"My New Page"'}),".\nIf you open that page you should see it has the header of ",(0,i.jsx)(n.strong,{children:'"Header of my new page"'}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"adding-images",children:"Adding images"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If you are already working in an active branch, this process works for branched versions of markdown files.\nIf you are not, you will be prompted to create a new branch with your edits (to open a pull request) or commit the edits directly."})}),"\n",(0,i.jsx)(n.p,{children:"We want to keep this repository as lightweight as possible.\nFor this reason, please do not add any images to the filesystem of this repository.\nIf you'd like to add an image, you should edit the README\nonline through Github by:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Press the edit button in the top right corner of the markdown file"}),"\n",(0,i.jsx)(n.li,{children:"Drag & drop an image into the markdown file you are editing."}),"\n",(0,i.jsx)(n.li,{children:"A link to the image should be automatically generated and formatted in the markdown file."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The generated link should look something like: ",(0,i.jsx)(n.a,{href:"https://user-images.githubusercontent.com/11846963/185976402-ff8c4c77-5a08-42b0-865f-d2840fc0b960.jpg",children:"https://user-images.githubusercontent.com/11846963/185976402-ff8c4c77-5a08-42b0-865f-d2840fc0b960.jpg"})]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["If you are also editing the file locally, you should add the image to the branch you are actively editing.\nRecommend committing your changes before adding the image to avoid merge conflicts, and using ",(0,i.jsx)(n.code,{children:"git pull"})," to pull in the changes to your local branch before continuing to edit."]})}),"\n",(0,i.jsx)(n.admonition,{title:"farm-ng employees",type:"tip",children:(0,i.jsxs)(n.p,{children:["Please back up the images you add to the website in the ",(0,i.jsx)(n.code,{children:"Website/Assets/"})," directory of our shared drive (linked from Media Bin)."]})}),"\n",(0,i.jsx)(n.p,{children:"&nbsp\n&nbsp\n&nbsp"}),"\n",(0,i.jsx)(n.h3,{id:"thank-you-for-your-help-building-this-community",children:(0,i.jsx)(n.strong,{children:"Thank you for your help building this community!"})}),"\n",(0,i.jsxs)(n.h6,{id:"the-documentation-website-is-built-using-docusaurus-2",children:["The documentation website is built using ",(0,i.jsx)(n.a,{href:"https://docusaurus.io/",children:(0,i.jsx)(n.strong,{children:"Docusaurus 2"})}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var i=t(6010);const s={tabItem:"tabItem_Ymn6"};var r=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>v});var i=t(7294),s=t(6010),r=t(2466),a=t(6550),o=t(469),l=t(1980),d=t(7392),c=t(12);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:t,groupId:s}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Nk)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),x=(()=>{const e=d??g;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function f(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==i&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,s.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(y,{...e,...n})]})}function v(e){const n=(0,b.Z)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);