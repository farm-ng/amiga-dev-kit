"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[925],{5750:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=i(7462),n=(i(7294),i(3905));i(1839);const s={id:"oak-overview",title:"OAK"},o="Oak Service Overview",r={unversionedId:"concepts/oak_service/oak-overview",id:"concepts/oak_service/oak-overview",title:"OAK",description:"The OAK service is a versatile component in the Amiga ecosystem, providing valuable data streams",source:"@site/docs/concepts/oak_service/README.md",sourceDirName:"concepts/oak_service",slug:"/concepts/oak_service/",permalink:"/docs/concepts/oak_service/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/concepts/oak_service/README.md",tags:[],version:"current",frontMatter:{id:"oak-overview",title:"OAK"},sidebar:"Conepts",previous:{title:"CANBUS",permalink:"/docs/concepts/canbus_service/"},next:{title:"GPS",permalink:"/docs/concepts/gps_service/"}},c={},l=[{value:"Standalone Operation",id:"standalone-operation",level:2},{value:"Message Types",id:"message-types",level:2},{value:"Requirements",id:"requirements",level:2},{value:"API",id:"api",level:2},{value:"Practical Applications",id:"practical-applications",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"oak-service-overview"},"Oak Service Overview"),(0,n.kt)("p",null,"The OAK service is a versatile component in the Amiga ecosystem, providing valuable data streams\nfrom the onboard OAK-D device, which includes stereo vision capabilities and an Inertial Measurement\nUnit (IMU).\nThis service doesn't serve a singular purpose; instead, it offers a range of data that can be\ninstrumental for various user-defined applications, from navigation and mapping to object detection\nand data collection."),(0,n.kt)("p",null,"The OAK service is autonomous, not relying on other services to function.\nHowever, its data, especially the IMU information, plays a significant role in the Amiga's autonomous\nnavigation capabilities, as it's fused with GPS and wheel odometry data in the Filter service\n(using an Unscented Kalman Filter)."),(0,n.kt)("h1",{id:"multiple-instances"},"Multiple Instances"),(0,n.kt)("p",null,"Depending on the number of OAK devices connected to the Amiga, there might be multiple instances\nof the OAK service running concurrently.\nFor example, with two OAK cameras, there will be an oak0 service and an oak1 service.\nEach instance is responsible for managing the data streams from its respective OAK-D device."),(0,n.kt)("h2",{id:"standalone-operation"},"Standalone Operation"),(0,n.kt)("p",null,"Unlike other services, each Oak service operates independently and is not a client of any other services."),(0,n.kt)("h2",{id:"message-types"},"Message Types"),(0,n.kt)("p",null,"Clients can subscribe to the OAK service to access the messages it publishes.\nThese messages can include various data types such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stereo vision (right and left)"),(0,n.kt)("li",{parentName:"ul"},"RGB data"),(0,n.kt)("li",{parentName:"ul"},"Accelerometer data"),(0,n.kt)("li",{parentName:"ul"},"Gyroscope data")),(0,n.kt)("p",null,"The specifics of these messages, including their data structures and formats, are defined in the\nservice's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/protos/farm_ng/oak/oak.proto"},"protobuf definitions"),",\nwhich users can refer to for detailed information."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"For the Oak service to function, there's only a single requirement:\nthe oak camera(s) need to be powered via the POE Switch."),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("p",null,"The OAK service offers a few API endpoints that allow users to interact with and configure the\nOAK-D device's settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"/calibration"),": Retrieves the calibration of the device, specifically the intrinsic parameters of\nthe cameras.\nThis is typically a one-time requirement unless the device undergoes significant changes or maintenance.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"/camera_settings/rgb"),": Allows users to configure the RGB camera settings.\nIf no settings are specified in the request, the service will return the current settings.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"/camera_settings/mono"),": Similar to the RGB settings endpoint, this allows users to configure\nthe mono camera settings or retrieve them if no new configurations are specified."))),(0,n.kt)("p",null,"While the specifics of these configurations are found in the protobuf definitions, they offer users\nthe ability to customize the camera performance as per their application requirements,\npotentially adjusting parameters like exposure, focus, and white balance."),(0,n.kt)("h2",{id:"practical-applications"},"Practical Applications"),(0,n.kt)("p",null,"One of the key applications of the OAK service within the Amiga system is contributing to the robot's\nautonomous navigation.\nThe gyroscope data from the OAK service's IMU is crucial for the robot's state estimation,\nas it's fused with other data sources in the Filter service.\nThis fusion helps in achieving accurate positioning and orientation, enabling the Amiga\nto navigate effectively and autonomously."))}u.isMDXComponent=!0}}]);