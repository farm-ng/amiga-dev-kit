"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[5647],{90042:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=a(74848),r=a(28453);const i={sidebar_label:"general",title:"utils.general"},l=void 0,s={id:"reference/circuitpy/utils/general",title:"utils.general",description:"path\\_dirname",source:"@site/docs/reference/circuitpy/utils/general.md",sourceDirName:"reference/circuitpy/utils",slug:"/reference/circuitpy/utils/general",permalink:"/docs/reference/circuitpy/utils/general",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/reference/circuitpy/utils/general.md",tags:[],version:"current",frontMatter:{sidebar_label:"general",title:"utils.general"},sidebar:"Developer",previous:{title:"farmng_sdo",permalink:"/docs/reference/circuitpy/utils/farmng_sdo"},next:{title:"io",permalink:"/docs/reference/circuitpy/utils/io"}},c={},d=[{value:"path_dirname",id:"path_dirname",level:4},{value:"path_split",id:"path_split",level:4},{value:"path_exists",id:"path_exists",level:4},{value:"path_join",id:"path_join",level:4},{value:"path_basename",id:"path_basename",level:4},{value:"makedirs",id:"makedirs",level:4},{value:"remove_all",id:"remove_all",level:4},{value:"clip",id:"clip",level:4},{value:"rescale01",id:"rescale01",level:4},{value:"rescale",id:"rescale",level:4},{value:"avg",id:"avg",level:4},{value:"avg_min_max",id:"avg_min_max",level:4},{value:"current_write_state",id:"current_write_state",level:4}];function h(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h4,{id:"path_dirname",children:"path_dirname"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def path_dirname(p: str)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the directory component of a pathname."}),"\n",(0,t.jsx)(n.h4,{id:"path_split",children:"path_split"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def path_split(p)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Split a pathname."}),"\n",(0,t.jsx)(n.p,{children:'Returns tuple "(head, tail)" where "tail" is everything after the final slash.  Either part may be empty.'}),"\n",(0,t.jsx)(n.h4,{id:"path_exists",children:"path_exists"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def path_exists(p)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return True if path exists."}),"\n",(0,t.jsx)(n.h4,{id:"path_join",children:"path_join"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def path_join(parent: str, child: str)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Joins parent and child path."}),"\n",(0,t.jsx)(n.h4,{id:"path_basename",children:"path_basename"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def path_basename(p: str)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the final component of a pathname."}),"\n",(0,t.jsx)(n.h4,{id:"makedirs",children:"makedirs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def makedirs(name, exist_ok=False)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Wraps makedirs(name [, mode=0o777][, exist_ok=False])."}),"\n",(0,t.jsx)(n.p,{children:"Super-mkdir; create a leaf directory and all intermediate ones.  Works like mkdir, except that any intermediate path\nsegment (not just the rightmost) will be created if it does not exist. If the target directory already exists, raise\nan OSError if exist_ok is False. Otherwise no exception is raised.  This is recursive."}),"\n",(0,t.jsx)(n.h4,{id:"remove_all",children:"remove_all"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def remove_all(name)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Recursively remove paths."}),"\n",(0,t.jsx)(n.h4,{id:"clip",children:"clip"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def clip(x, min_value=0, max_value=1)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return value, within bounds [min,max]"}),"\n",(0,t.jsx)(n.h4,{id:"rescale01",children:"rescale01"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def rescale01(x: float, x0: float, x1: float)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Rescale x from (x0, x1) to (0, 1), with clipping."}),"\n",(0,t.jsx)(n.h4,{id:"rescale",children:"rescale"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def rescale(x: float, x0: float, x1: float, y0: float, y1: float)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Rescale x from (x0, x1) to (y0, y1), with clipping."}),"\n",(0,t.jsx)(n.h4,{id:"avg",children:"avg"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def avg(iterable)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the average of a list or tuple."}),"\n",(0,t.jsx)(n.p,{children:"Returns 0 if empty."}),"\n",(0,t.jsx)(n.h4,{id:"avg_min_max",children:"avg_min_max"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def avg_min_max(iterable)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns a tuple with the (average, min, max) of a list or tuple."}),"\n",(0,t.jsx)(n.p,{children:"Returns (0, 0, 0) if empty."}),"\n",(0,t.jsx)(n.h4,{id:"current_write_state",children:"current_write_state"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def current_write_state() -> bool\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns True if the microcontroller is currently booted into a writeable state."}),"\n",(0,t.jsx)(n.p,{children:"Returns False otherwise."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>s});var t=a(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);