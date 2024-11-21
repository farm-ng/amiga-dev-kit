"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[1726],{86619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=t(74848),i=t(28453);const r={id:"github-101",title:"GitHub 101"},s=void 0,c={id:"support/github-101",title:"GitHub 101",description:"Welcome to GitHub 101!",source:"@site/docs/support/github-101.md",sourceDirName:"support",slug:"/support/github-101",permalink:"/docs/support/github-101",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/support/github-101.md",tags:[],version:"current",frontMatter:{id:"github-101",title:"GitHub 101"},sidebar:"Resources/Support",previous:{title:"Frequently Asked Questions",permalink:"/docs/reference/faq"},next:{title:"Brain v1.0",permalink:"/docs/brain/"}},l={},a=[{value:"Create an account",id:"create-an-account",level:2},{value:"Git clone",id:"git-clone",level:2},{value:"Cloning with <code>https</code>",id:"cloning-with-https",level:3},{value:"Cloning with <code>ssh</code>",id:"cloning-with-ssh",level:3},{value:"Set up an ssh key",id:"set-up-an-ssh-key",level:2},{value:"Your Identity",id:"your-identity",level:2},{value:"Editing and Contributing",id:"editing-and-contributing",level:2},{value:"[recommended] Format your code",id:"recommended-format-your-code",level:3},{value:"Pull-Requests (PR)",id:"pull-requests-pr",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Welcome to GitHub 101!"}),"\n",(0,o.jsxs)(n.p,{children:["This will be the guide to all the steps you need to follow\nin order to be able to participate in the ",(0,o.jsx)(n.a,{href:"https://farmroboticschallenge.ai/",children:"Farm Robotics Challenge"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"We use GitHub for all of our repositories and it is where you can access the files and code\n(hosted in repositories) you need to begin working on your project developing with the Amiga."}),"\n",(0,o.jsx)(n.h2,{id:"create-an-account",children:"Create an account"}),"\n",(0,o.jsx)(n.p,{children:"First you will need to have an Github account"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To create one, just go to ",(0,o.jsx)(n.a,{href:"https://www.github.com",children:"github.com"})," and sign up!"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"git-clone",children:"Git clone"}),"\n",(0,o.jsxs)(n.p,{children:["There are two primary options for cloning a git repository, ",(0,o.jsx)(n.code,{children:"https"})," & ",(0,o.jsx)(n.code,{children:"ssh"}),".\nYou can find these by clicking on the green ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"<> Code"})})," button on a repository's home page."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/farm-ng/farm-ng-amiga/assets/53625197/511020f2-c9c0-4aec-8f39-5cbff2c13d25",alt:"image"})}),"\n",(0,o.jsxs)(n.h3,{id:"cloning-with-https",children:["Cloning with ",(0,o.jsx)(n.code,{children:"https"})]}),"\n",(0,o.jsxs)(n.p,{children:["The easiest way to get started with using a public repository is to clone with ",(0,o.jsx)(n.code,{children:"https"}),".\nFor this approach, you do not need to create an ssh key and you can just clone with e.g.:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/farm-ng/farm-ng-amiga.git\n"})}),"\n",(0,o.jsxs)(n.p,{children:['However, you should only use this approach if you plan on treating the repository as "read only".\nThis is because you will not be able to push to a repository cloned with ',(0,o.jsx)(n.code,{children:"https"})," as of August 2021.\nSee ",(0,o.jsx)(n.a,{href:"https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/",children:"Git password authentication is shutting down"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"cloning-with-ssh",children:["Cloning with ",(0,o.jsx)(n.code,{children:"ssh"})]}),"\n",(0,o.jsxs)(n.p,{children:["If you are cloning a repository that you plan to create branches off of and push to,\nyou should clone with ",(0,o.jsx)(n.code,{children:"ssh"}),"."]}),"\n",(0,o.jsx)(n.admonition,{title:"hint",type:"info",children:(0,o.jsx)(n.p,{children:"This will be the case for your project!"})}),"\n",(0,o.jsxs)(n.p,{children:["After you've followed the ",(0,o.jsx)(n.a,{href:"#set-up-an-ssh-key",children:"Set up an ssh key"})," instructions,\nyou can clone with e.g.:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/farm-ng/farm-ng-amiga.git\n"})}),"\n",(0,o.jsx)(n.h2,{id:"set-up-an-ssh-key",children:"Set up an ssh key"}),"\n",(0,o.jsx)(n.p,{children:"To set up an ssh key, follow the instructions from GitHub:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh",children:"Connect to GitHub with SSH"})}),"\n",(0,o.jsxs)(n.li,{children:["Clone with e.g.: ",(0,o.jsx)(n.code,{children:"git clone git@github.com:farm-ng/farm-ng-amiga.git"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This will allow you to ",(0,o.jsx)(n.code,{children:"pull"}),", ",(0,o.jsx)(n.code,{children:"branch"}),", ",(0,o.jsx)(n.code,{children:"push"}),", etc. to your heart's content on public\nand your personal and team's private repos.\nYou should only need to do this once per device,\nunless you delete the key or remove it from your GitHub account."]}),"\n",(0,o.jsx)(n.h2,{id:"your-identity",children:"Your Identity"}),"\n",(0,o.jsxs)(n.p,{children:["You'll also need to set your identity so github knows who to give credit for a commit to.\nTypically this is done with the ",(0,o.jsx)(n.code,{children:"--global"})," flag so you only have to\ndo it a single time for your PC."]}),"\n",(0,o.jsx)(n.p,{children:"From within a cloned git repository, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'git config --global user.name "John Doe"\ngit config --global user.email johndoe@example.com\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["For more information, see: ",(0,o.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup",children:"First-Time Git Setup"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"editing-and-contributing",children:"Editing and Contributing"}),"\n",(0,o.jsx)(n.p,{children:"Here you will learn about a good workflow to have when contributing to code."}),"\n",(0,o.jsx)(n.p,{children:"Before anything be sure to clone the respective repository.\nYou can do this following the listed commands below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd ~ # home directory\ngit clone <RESPECTIVE REPOSITORY>\ncd <RESPECTIVE REPOSITORY>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once you have cloned into that repository, you will need to create your own branch.\nThis can be done with these commands:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd <RESPECTIVE REPOSITORY>\ngit checkout -b your-branch-name\n"})}),"\n",(0,o.jsx)(n.p,{children:"From there begin coding!"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["It is not recommended to edit directly on the main branch.\nIt is recommended for you to start your own branch before committing any changes.\nSome GitHub repositories will have built-in protections that prevent you from pushing directly to ",(0,o.jsx)(n.code,{children:"main"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"Now that you have completed your code, you are ready to make a push.\nIt is recommended that you follow this workflow."}),"\n",(0,o.jsx)(n.h3,{id:"recommended-format-your-code",children:"[recommended] Format your code"}),"\n",(0,o.jsxs)(n.p,{children:["We recommend using ",(0,o.jsx)(n.code,{children:"pre-commit"})," to automatically format your code for readability."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"It is always a great and healthy practice to pre-commit your code before attempting any push."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'pre-commit install\ngit add -p # Add the changes I want\npre-commit run --all-files\ngit add -p # Add the formatting changes the check just fixed\npre-commit run --all-files # check for any formatting issues not resolved automatically (e.g., spellcheck)\ngit commit -m "insert brief comment for the changes"\ngit push\n'})}),"\n",(0,o.jsxs)(n.p,{children:["See the ",(0,o.jsxs)(n.a,{href:"https://pre-commit.com/",children:[(0,o.jsx)(n.code,{children:"pre-commit"})," documentation"]})," for more details."]}),"\n",(0,o.jsx)(n.h2,{id:"pull-requests-pr",children:"Pull-Requests (PR)"}),"\n",(0,o.jsx)(n.p,{children:'After you commit and push your changes,\nyou will notice that a "compare and create pull request" button has appeared\non your repository\'s page on GitHub.com.'}),"\n",(0,o.jsx)(n.p,{children:'If that option hasn\'t appeared then you can go to "pull request"\nin the above bar then click on \u201cnew pull request\u201d.'}),"\n",(0,o.jsx)(n.p,{children:"From that screen you will select your branch, then select create pull request."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If your pull request is to a ",(0,o.jsx)(n.code,{children:"farm-ng"})," repository,\nit will need to go under review by a team member of the ",(0,o.jsx)(n.code,{children:"farm-ng"})," team."]}),"\n",(0,o.jsxs)(n.li,{children:["If your pull request is to your own repository,\nyou can merge it into ",(0,o.jsx)(n.code,{children:"main"})," whenever you are ready."]}),"\n",(0,o.jsx)(n.li,{children:"If you are working as part of a team,\nwe recommend implementing the practice of reviewing each other's code before merging."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If you need any help from the Farm-ng support please see our\n",(0,o.jsx)(n.a,{href:"/docs/support/",children:"Support page"})," for instructions on starting a conversation on our\n",(0,o.jsx)(n.a,{href:"https://discourse.farm-ng.com/",children:"Discourse Channel"})," and posting your question there."]})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);