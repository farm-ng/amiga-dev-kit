"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[925],{1709:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(5893),s=i(1151);const a={id:"oak-overview",title:"Oak"},r="Oak Service Overview",o={id:"concepts/oak_service/oak-overview",title:"Oak",description:"The OAK service is a versatile component in the Amiga ecosystem, providing valuable data streams",source:"@site/docs/concepts/oak_service/README.md",sourceDirName:"concepts/oak_service",slug:"/concepts/oak_service/",permalink:"/docs/concepts/oak_service/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/concepts/oak_service/README.md",tags:[],version:"current",frontMatter:{id:"oak-overview",title:"Oak"},sidebar:"Developer",previous:{title:"Canbus",permalink:"/docs/concepts/canbus_service/"},next:{title:"GPS",permalink:"/docs/concepts/gps_service/"}},c={},l=[{value:"Multiple Instances",id:"multiple-instances",level:2},{value:"Standalone Operation",id:"standalone-operation",level:2},{value:"Message Types",id:"message-types",level:2},{value:"Data Streams",id:"data-streams",level:2},{value:"API",id:"api",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Practical Applications",id:"practical-applications",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"oak-service-overview",children:"Oak Service Overview"}),"\n",(0,t.jsx)(n.p,{children:"The OAK service is a versatile component in the Amiga ecosystem, providing valuable data streams\nfrom the onboard OAK-D device, which includes stereo vision capabilities and an Inertial Measurement\nUnit (IMU).\nThis service doesn't serve a singular purpose; instead, it offers a range of data that can be\ninstrumental for various user-defined applications, from navigation and mapping to object detection\nand data collection."}),"\n",(0,t.jsx)(n.p,{children:"The OAK service is autonomous, not relying on other services to function.\nHowever, its data, especially the IMU information, plays a significant role in the Amiga's autonomous\nnavigation capabilities, as it's fused with GPS and wheel odometry data in the Filter service\n(using an Unscented Kalman Filter)."}),"\n",(0,t.jsx)(n.h2,{id:"multiple-instances",children:"Multiple Instances"}),"\n",(0,t.jsx)(n.p,{children:"Depending on the number of OAK devices connected to the Amiga, there might be multiple instances\nof the OAK service running concurrently.\nFor example, with two OAK cameras, there will be an oak0 service and an oak1 service.\nEach instance is responsible for managing the data streams from its respective OAK-D device."}),"\n",(0,t.jsx)(n.h2,{id:"standalone-operation",children:"Standalone Operation"}),"\n",(0,t.jsx)(n.p,{children:"Unlike other services, each Oak service operates independently and is not a client of any other services."}),"\n",(0,t.jsx)(n.h2,{id:"message-types",children:"Message Types"}),"\n",(0,t.jsx)(n.p,{children:"Clients can subscribe to the OAK service to access the messages it publishes.\nThese messages can include various data types such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Stereo vision (right and left)"}),"\n",(0,t.jsx)(n.li,{children:"RGB data"}),"\n",(0,t.jsx)(n.li,{children:"Accelerometer data"}),"\n",(0,t.jsx)(n.li,{children:"Gyroscope data"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"data-streams",children:"Data Streams"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/calibration"}),": Intrinsic parameters of the cameras.\nCheck the protobuf definition for more details:\n",(0,t.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto#L139-L154",children:"oak_pb2.OakCalibration"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/disparity"}),": Disparity (depth image)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/left"}),": Left stereo image."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/right"}),": Right stereo image."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/rgb"}),": RGB image."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The disparity, left, right, and rgb images all have the same structure.\nCheck their protobuf definition for more details:\n",(0,t.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto#L38-L41",children:"oak_pb2.OakFrame"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/imu"}),": Accelerometer and Gyroscope data.\nCheck the protobuf definition for more details:\n",(0,t.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/oak/oak.proto#L43-L68",children:"oak_pb2.OakImuPackets"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.p,{children:"The OAK service offers a few API endpoints that allow users to interact with and configure the\nOAK-D device's settings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/calibration"}),": Retrieves the calibration of the device, specifically the intrinsic parameters of\nthe cameras.\nThis is typically a one-time requirement unless the device undergoes significant changes or maintenance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/camera_settings/rgb"}),": Allows users to configure the RGB camera settings.\nIf no settings are specified in the request, the service will return the current settings."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/camera_settings/mono"}),": Similar to the RGB settings endpoint, this allows users to configure\nthe mono camera settings or retrieve them if no new configurations are specified."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"While the specifics of these configurations are found in the protobuf definitions, they offer users\nthe ability to customize the camera performance as per their application requirements,\npotentially adjusting parameters like exposure, focus, and white balance."}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"For the Oak service to function, there's only a single requirement:\nthe oak camera(s) need to be powered via the POE Switch."}),"\n",(0,t.jsx)(n.h2,{id:"practical-applications",children:"Practical Applications"}),"\n",(0,t.jsx)(n.p,{children:"One of the key applications of the OAK service within the Amiga system is contributing to the robot's\nautonomous navigation.\nThe gyroscope data from the OAK service's IMU is crucial for the robot's state estimation,\nas it's fused with other data sources in the Filter service.\nThis fusion helps in achieving accurate positioning and orientation, enabling the Amiga\nto navigate effectively and autonomously."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(7294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);