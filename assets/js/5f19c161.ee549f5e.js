"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:m,values:b,groupId:h,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[O,T]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=h){const e=w[h];null!=e&&e!==O&&g.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==O&&(I(t),T(a),null!=h&&N(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:D,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},3262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={id:"contribute-website",title:"Documentation"},s="Build website",u={unversionedId:"contribute/contribute-website",id:"contribute/contribute-website",title:"Documentation",description:"Installation",source:"@site/docs/contribute/website.mdx",sourceDirName:"contribute",slug:"/contribute/contribute-website",permalink:"/amiga-dev-kit/docs/contribute/contribute-website",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/contribute/website.mdx",tags:[],version:"current",frontMatter:{id:"contribute-website",title:"Documentation"},sidebar:"contribute"},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Adding images to the website",id:"adding-images-to-the-website",level:2},{value:"Local Development",id:"local-development",level:2},{value:"Build",id:"build",level:3},{value:"Start yarn",id:"start-yarn",level:3},{value:"<strong>*</strong> The documentation website is built using Docusaurus 2.",id:"-the-documentation-website-is-built-using-docusaurus-2",level:6}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-website"},"Build website"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"In order to use docusaurus you'll need to install a couple libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node.js version 16.14 or above (which can be checked by running ",(0,r.kt)("inlineCode",{parentName:"li"},"node -v"),")"),(0,r.kt)("li",{parentName:"ul"},"Yarn >= 1.22.19")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},"Install NVM / nodejs",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash\nsource ~/.bashrc\n\n# Verify install\nnvm --version\n\n# Install node\nnvm install node\n")),(0,r.kt)("p",null,"Install python dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -e .[dev]\n")),(0,r.kt)("p",null,"Install yarn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install npm\nsudo npm install -g yarn\n\n# Check version\nyarn --version\n"))),(0,r.kt)(o.Z,{value:"macos",label:"MacOs",mdxType:"TabItem"},"Install npm",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install npm\n")),(0,r.kt)("p",null,"Install yarn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install yarn\n# yes, use a package manager to install a package manager... ;)\n")))),(0,r.kt)("h2",{id:"adding-images-to-the-website"},"Adding images to the website"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are already working in an active branch, this process works for branched versions of markdown files.\nIf you are not, you will be prompted to create a new branch with your edits (to open a pull request) or commit the edits directly.")),(0,r.kt)("p",null,"We want to keep this repository as lightweight as possible.\nFor this reason, please do not add any images to the filesystem of this repository.\nIf you'd like to add an image, you should edit the README\nonline through Github by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Press the edit button in the top right corner of the markdown file"),(0,r.kt)("li",{parentName:"ol"},"Drag & drop an image into the markdown file you are editing."),(0,r.kt)("li",{parentName:"ol"},"A link to the image should be automatically generated and formattedin the markdown file.")),(0,r.kt)("p",null,"The generated link should look something like: ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/11846963/185976402-ff8c4c77-5a08-42b0-865f-d2840fc0b960.jpg"},"https://user-images.githubusercontent.com/11846963/185976402-ff8c4c77-5a08-42b0-865f-d2840fc0b960.jpg")),(0,r.kt)("admonition",{title:"farm-ng employees",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please back up the images you add to the website in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Website/Assets/")," directory of our shared drive.")),(0,r.kt)("h2",{id:"local-development"},"Local Development"),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd website/\nyarn\n./run_pydoc-markdown.sh\nyarn build\n")),(0,r.kt)("p",null,"This command generates static content into the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory and can be served using any static contents hosting service."),(0,r.kt)("h3",{id:"start-yarn"},"Start yarn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This command starts a local development server and opens up a browser window.\nMost changes are reflected live without having to restart the server.")),(0,r.kt)("h6",{id:"-the-documentation-website-is-built-using-docusaurus-2"},(0,r.kt)("strong",{parentName:"h6"},"*")," The documentation website is built using ",(0,r.kt)("a",{parentName:"h6",href:"https://docusaurus.io/"},"Docusaurus 2"),"."))}m.isMDXComponent=!0}}]);