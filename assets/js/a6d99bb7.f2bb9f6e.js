"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[9462],{6777:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=i(5893),t=i(1151);const r={id:"gps-overview",title:"GPS"},o="GPS Service Overview",a={id:"concepts/gps_service/gps-overview",title:"GPS",description:"The GPS sub-service is an integral component of the Amiga's navigation system, utilizing a",source:"@site/docs/concepts/gps_service/README.md",sourceDirName:"concepts/gps_service",slug:"/concepts/gps_service/",permalink:"/docs/concepts/gps_service/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/concepts/gps_service/README.md",tags:[],version:"current",frontMatter:{id:"gps-overview",title:"GPS"},sidebar:"Developer",previous:{title:"Oak",permalink:"/docs/concepts/oak_service/"},next:{title:"Recorder",permalink:"/docs/concepts/recorder_service/"}},c={},l=[{value:"Standalone Operation",id:"standalone-operation",level:2},{value:"Message Types",id:"message-types",level:2},{value:"Data Streams",id:"data-streams",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Utilizing GPS Data",id:"utilizing-gps-data",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"gps-service-overview",children:"GPS Service Overview"}),"\n",(0,s.jsx)(n.p,{children:"The GPS sub-service is an integral component of the Amiga's navigation system, utilizing a\nhigh-precision Ublox module to determine the robot's exact position on Earth.\nThis service is indispensable for tasks that require geo-location, from simple\nnavigation to complex tasks like field mapping or precision agriculture."}),"\n",(0,s.jsx)(n.p,{children:"The primary role of the GPS service is to continuously capture and broadcast detailed\npositional data, which other components and services within the Amiga's system can utilize.\nIt simplifies the intricacies of satellite-based positioning, offering users straightforward\naccess to precise, real-time location data."}),"\n",(0,s.jsx)(n.p,{children:"In short, the GPS service continuously decodes and transmits location data, allowing users\nand systems to tap into accurate geospatial information without dealing with the\ncomplexities of GPS data interpretation."}),"\n",(0,s.jsx)(n.h2,{id:"standalone-operation",children:"Standalone Operation"}),"\n",(0,s.jsx)(n.p,{children:"Unlike other services, the GPS service operates independently and is not a client of any other services.\nIts sole responsibility is to interpret and publish the data received from the GPS module."}),"\n",(0,s.jsx)(n.h2,{id:"message-types",children:"Message Types"}),"\n",(0,s.jsxs)(n.p,{children:["Clients can subscribe to the GPS service to receive messages, which are typically of type ",(0,s.jsx)(n.code,{children:"pvt"})," or ",(0,s.jsx)(n.code,{children:"relposned"}),".\nThese messages contain rich data sets that include the robot's current geospatial coordinates,\nvelocity, time, and other relevant GPS data."]}),"\n",(0,s.jsxs)(n.admonition,{title:"INFO",type:"info",children:[(0,s.jsxs)(n.p,{children:["There are three types of GPS messages: ",(0,s.jsx)(n.strong,{children:"PVT"}),", ",(0,s.jsx)(n.strong,{children:"RELPOSNED"}),", and ",(0,s.jsx)(n.strong,{children:"ECEF"}),"."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PVT"})," (Position, Velocity, and Time) messages provide the all-in-one solution: position, velocity,\nand time.\nIt contains details like longitude, latitude, altitude, speed, and UTC time."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RELPOSNED"}),' (Relative Positioning) messages provide relative position information in a\nNorth, East, Down (N-E-D) frame. It\'s mainly used for applications requiring relative positioning\nbetween two receivers, often as a part of Real Time Kinematics (RTK) solutions.\nIt shows the difference in position between a "moving" receiver and a "fixed" reference receiver.']}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ECEF"})," (Earth-Centered, Earth-Fixed) messages provide coordinates that represent positions\nrelative to the earth's center, but fixed to the earth as it rotates.\nECEF coordinates are expressed in meters in a 3D Cartesian coordinate system.\nThese messages are particularly useful for applications\nthat require a global reference frame, such as satellite operations and global mapping projects."]})]}),"\n",(0,s.jsx)(n.h2,{id:"data-streams",children:"Data Streams"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/pvt"}),": PVT message.\nCheck the protobuf definition for more details:\n",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/gps/gps.proto#L50-L71",children:"gps_pb2.GpsFrame"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/relposned"}),":RELPOSNED"," message.\nCheck the protobuf definition for more details:\n",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/gps/gps.proto#L73-L97",children:"gps_pb2.RelativePositionFrame"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/ecef"}),":ECEF"," message.\nCheck the protobuf definition for more details:\n",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/gps/gps.proto#L109-L117",children:"gps_pb2.EcefCoordinates"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"For the GPS service to function optimally, certain conditions must be met:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The robot ",(0,s.jsx)(n.strong,{children:"must"})," be connected to an RTK base station."]}),"\n",(0,s.jsxs)(n.li,{children:["To connect to an RTK base station, users need to input credentials using our GPS app.\nThe required credentials include:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NTRIP ID: The server address of the base station."}),"\n",(0,s.jsx)(n.li,{children:"NTRIP PORT: The port used by the NTRIP server."}),"\n",(0,s.jsx)(n.li,{children:"NTRIP MOUNTPOINT: Specific mount point on the NTRIP server."}),"\n",(0,s.jsx)(n.li,{children:"USER: Username for accessing the base station."}),"\n",(0,s.jsx)(n.li,{children:"PASSWORD: Corresponding password for the above username."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The robot must have an active Wi-Fi connection, ensuring real-time data communication.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NOTE"}),": The robot needs to be connected to Wi-Fi for ",(0,s.jsx)(n.code,{children:"relposned"})," messages.\nHowever, an internet connection is not required for ",(0,s.jsx)(n.code,{children:"pvt"})," messages."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"NTRIP (Network Transport of RTCM via Internet Protocol)",type:"info",children:(0,s.jsx)(n.p,{children:"NTRIP is a protocol for streaming differential GPS (DGPS) data over the internet, enabling RTK\ncorrections in areas with cellular coverage.\nConnecting to an NTRIP service enhances the GPS accuracy, crucial for tasks requiring precision navigation."})}),"\n",(0,s.jsx)(n.admonition,{title:"Pro Tip for California Users",type:"tip",children:(0,s.jsxs)(n.p,{children:["If you're operating in California, consider ",(0,s.jsx)(n.a,{href:"https://www.surveymonkey.com/survey-taken?sm=8oRYqrBI74rDSaBAdtcV5GY0_2FRs585_2FD4c_2BTVJDw_2Be9msUlD1XrZDpZ1Rvu0DLWBo8bsPAjLG8jj8DbutXMqryiezNdZiuVvgEb0osp55QY_3D",children:(0,s.jsx)(n.strong,{children:"signing up"})}),"\nfor a free CRTN\n(California Real Time Network) account.\nManaged by UC San Diego, ",(0,s.jsx)(n.a,{href:"http://sopac-csrc.ucsd.edu/index.php/crtn/",children:"CRTN"})," provides access\nto multiple base stations across the state, offering enhanced GPS accuracy.\nOther states or regions may have similar services available.\nAlways check local resources for the best positioning support in your area."]})}),"\n",(0,s.jsx)(n.h2,{id:"utilizing-gps-data",children:"Utilizing GPS Data"}),"\n",(0,s.jsx)(n.p,{children:"The GPS data, while technical, is immensely valuable.\nWith high-precision location information, users can:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Enhance Navigation"}),":\nUse the precise geospatial data in navigation tasks, allowing the Amiga to traverse pre-defined\nroutes with minimal deviation."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Inform Decision-Making"}),":\nAnalyze the GPS data to make informed decisions about resource allocation, route optimization,\nand task planning."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Improve Operational Efficiency"}),":\nLeverage the accuracy of real-time GPS data to enhance the reliability and efficiency of automated tasks,\nreducing the need for human intervention and potential for error."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);