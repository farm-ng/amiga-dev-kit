"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3068],{386:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=i(7462),n=(i(7294),i(3905));i(1839);const l={id:"vehicle-twist",title:"Vehicle Twist"},s="Amiga Vehicle Twist example",p={unversionedId:"examples/vehicle_twist/vehicle-twist",id:"examples/vehicle_twist/vehicle-twist",title:"Vehicle Twist",description:"Currently this is a very basic example",source:"@site/docs/examples/vehicle_twist/README.md",sourceDirName:"examples/vehicle_twist",slug:"/examples/vehicle_twist/",permalink:"/docs/examples/vehicle_twist/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/vehicle_twist/README.md",tags:[],version:"current",frontMatter:{id:"vehicle-twist",title:"Vehicle Twist"},sidebar:"examples",previous:{title:"Motor State",permalink:"/docs/examples/motor_state/"},next:{title:"GPS Client",permalink:"/docs/examples/gps_client/"}},r={},o=[{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:2},{value:"Run example",id:"run-example",level:2},{value:"Drive the amiga",id:"drive-the-amiga",level:3},{value:"Expected output",id:"expected-output",level:2}],m={toc:o};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"amiga-vehicle-twist-example"},"Amiga Vehicle Twist example"),(0,n.kt)("p",null,"Currently this is a very basic ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/vehicle_twist/main.py"},"example"),"\nshowing how to send ",(0,n.kt)("inlineCode",{parentName:"p"},"Twist2d")," proto messages\nto the canbus service to control the amiga."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"Create first a virtual environment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd farm-ng-amiga\npython3 -m venv venv\nsource venv/bin/activate\n")),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd py/examples/vehicle_twist\npip install -r requirements.txt\n")),(0,n.kt)("h2",{id:"run-example"},"Run example"),(0,n.kt)("p",null,"Specify the ",(0,n.kt)("inlineCode",{parentName:"p"},"host")," field with the IP address of your amiga\nin the ",(0,n.kt)("inlineCode",{parentName:"p"},"service_config.json")," file.\nAs a debugging step, ensure you can ping the amiga at that IP address."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --service-config service_config.json\n")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"WARNING: When the dashboard is in auto mode, this will cause the Amiga to drive.\nMake sure the area is clear before using this."),(0,n.kt)("p",{parentName:"admonition"},"You can also test this by sending the commands when the Amiga dashboard is\nnot in ",(0,n.kt)("inlineCode",{parentName:"p"},"AUTO READY")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"AUTO ACTIVE")," and see the commands being sent\nwith the red needle on the auto page.")),(0,n.kt)("h3",{id:"drive-the-amiga"},"Drive the amiga"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"WASD")," keys to drive the amiga in the window that pops up after when run the script."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"w")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"s")," will increment the linear velocity up / down respectively."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"a")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"d")," will increment the angular velocity left / right respectively."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The commanded speed will persist!")),(0,n.kt)("p",null,"Use space bar to set all velocities back to 0."),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"q")," to quit the application."),(0,n.kt)("h2",{id:"expected-output"},"Expected output"),(0,n.kt)("p",null,"You should see a printed stream of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Twist2d")," messages you are sending to the canbus service."))}d.isMDXComponent=!0}}]);