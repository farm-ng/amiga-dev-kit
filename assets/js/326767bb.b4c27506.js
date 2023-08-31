"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9866],{7762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var o=a(7462),s=(a(7294),a(3905));a(1839);const r={id:"motor-state",title:"Motor State"},n="Amiga Motor State Stream",l={unversionedId:"examples/motor_state/motor-state",id:"examples/motor_state/motor-state",title:"Motor State",description:"Currently this is a very basic example showing how to access and",source:"@site/docs/examples/motor_state/motor-state.md",sourceDirName:"examples/motor_state",slug:"/examples/motor_state/motor-state",permalink:"/docs/examples/motor_state/motor-state",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/motor_state/motor-state.md",tags:[],version:"current",frontMatter:{id:"motor-state",title:"Motor State"},sidebar:"examples",previous:{title:"People Detection",permalink:"/docs/examples/people_detection/"},next:{title:"Using a VNC Viewer",permalink:"/docs/examples/vnc_viewer/"}},i={},m=[{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:2},{value:"Run example",id:"run-example",level:2},{value:"Expected output",id:"expected-output",level:2}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"amiga-motor-state-stream"},"Amiga Motor State Stream"),(0,s.kt)("p",null,"Currently this is a very basic example showing how to access and\ndecode the ",(0,s.kt)("inlineCode",{parentName:"p"},"MotorState")," values streamed by the canbus service."),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"Create first a virtual environment"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd farm-ng-amiga\npython3 -m venv venv\nsource venv/bin/activate\n")),(0,s.kt)("h2",{id:"install"},"Install"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd py/examples/motor_states_stream\npip install -r requirements.txt\n")),(0,s.kt)("h2",{id:"run-example"},"Run example"),(0,s.kt)("p",null,"Specify the file (download before)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --canbus-port 50060 # --address\n# <YOUR_AMIGA_IP_ADDRESS>\n")),(0,s.kt)("h2",{id:"expected-output"},"Expected output"),(0,s.kt)("p",null,"You should see a printed stream of the current ",(0,s.kt)("inlineCode",{parentName:"p"},"MotorState")," for\nall detected motors in your terminal."))}u.isMDXComponent=!0}}]);