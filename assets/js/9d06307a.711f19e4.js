"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[5779],{934:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=i(4848),r=i(8453);const s={id:"filter-overview",title:"Filter"},a="Filter Service Overview",o={id:"concepts/filter_service/filter-overview",title:"Filter",description:"The Filter service is the state estimation core of the Amiga, crucial for understanding the robot's",source:"@site/docs/concepts/filter_service/README.md",sourceDirName:"concepts/filter_service",slug:"/concepts/filter_service/",permalink:"/docs/concepts/filter_service/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/concepts/filter_service/README.md",tags:[],version:"current",frontMatter:{id:"filter-overview",title:"Filter"},sidebar:"Developer",previous:{title:"Canbus",permalink:"/docs/concepts/canbus_service/"},next:{title:"Track Follower",permalink:"/docs/concepts/track_follower_service/"}},c={},l=[{value:"Subscriptions",id:"subscriptions",level:2},{value:"Data Streams",id:"data-streams",level:2},{value:"API",id:"api",level:2},{value:"Convergence Requirements",id:"convergence-requirements",level:2},{value:"Filter Service in Practice",id:"filter-service-in-practice",level:2},{value:"Features",id:"features",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"filter-service-overview",children:"Filter Service Overview"})}),"\n",(0,n.jsxs)(t.p,{children:["The Filter service is the state estimation core of the Amiga, crucial for understanding the robot's\nposition, orientation, and movement within its environment.\nUtilizing an ",(0,n.jsx)(t.strong,{children:"Unscented Kalman Filter"}),", it seamlessly fuses data from various sources like wheel odometry,\nGPS, and the IMU to provide a consistent and accurate representation of the robot's current state."]}),"\n",(0,n.jsx)(t.p,{children:"The primary goal of the Filter service is to abstract the complexity involved in state estimation,\nproviding users with clear, reliable information about the robot's pose, heading, and movement trajectory.\nThis allows users to interact with and direct the Amiga effectively, without getting immersed in the\ntechnical depths of data fusion or sensor calibration."}),"\n",(0,n.jsx)(t.p,{children:"In essence, the Filter does the intricate work of synthesizing sensor data, enabling users to\nconfidently interpret and utilize the Amiga's spatial information without needing extensive expertise\nin robotics or state estimation."}),"\n",(0,n.jsx)(t.h2,{id:"subscriptions",children:"Subscriptions"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Filter"})," is a client from the following services:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Canbus (for wheel odometry)"}),"\n",(0,n.jsx)(t.li,{children:"GPS"}),"\n",(0,n.jsx)(t.li,{children:"Oak0 (for IMU data)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For the Filter service to function correctly, these services must be operational and communicating\nrelevant sensor data.\nSince the Filter relies on GPS data, the Amiga must have a GPS connected to an RTK base station."}),"\n",(0,n.jsx)(t.h2,{id:"data-streams",children:"Data Streams"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/state"}),": A filter's state detailing pose, convergence, calibration, uncertainty, innovation, and heading.\nCheck the protobuf definition for more details:\n",(0,n.jsx)(t.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/filter/filter.proto#L26-L37",children:"filter_pb2.FilterState"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.p,{children:"Users can interact with the filter service using these commands through an EventClient of\nthe filter service:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/calibrate"}),": Triggers the calibration process, adjusting the IMU orientation relative to the robot\nand calculating gyroscope biases."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/get_state"}),": Retrieves a protobuf message of type FilterState, containing the robot\u2019s pose,\nheading (in radians), convergence status, and pose uncertainty."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/get_track"}),": Returns the current track of the robot, essentially the path that the robot has traveled."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/clear_track"}),": Clears the current track, useful when initiating a new tracking sequence or\nrecalibrating the system."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/pause_track"}),": Pause adding waypoints to a track."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/resume_track"}),": Resume adding waypoints to a track."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/pop_track_end"}),": Removes the last waypoint added to the track.\nTrack must be paused first (",(0,n.jsx)(t.code,{children:"/pause_track"}),")."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"convergence-requirements",children:"Convergence Requirements"}),"\n",(0,n.jsx)(t.p,{children:"For the state estimation to be considered valid and the results to be reliable, certain criteria\nneed to be met, including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The robot is connected to Wi-Fi, ensuring communication continuity."}),"\n",(0,n.jsxs)(t.li,{children:["The GPS service is receiving messages, with ",(0,n.jsx)(t.code,{children:"accuracyNorth"})," and ",(0,n.jsx)(t.code,{children:"accuracyEast"})," values smaller\nthan 0.01, indicating high precision."]}),"\n",(0,n.jsx)(t.li,{children:"The oak/0 sub-service is active and transmitting IMU data."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Upon startup or recalibration, the robot needs to be moved slightly to allow the filter to converge\n(indicated by ",(0,n.jsx)(t.code,{children:"has_converged"})," = true)."]}),"\n",(0,n.jsx)(t.admonition,{title:"Remember",type:"info",children:(0,n.jsx)(t.p,{children:"State estimation is a dynamic process, and environmental factors or sensor issues can affect convergence.\nRegular calibration and adherence to the recommended workflows are essential for maintaining accurate\nstate estimation."})}),"\n",(0,n.jsx)(t.h2,{id:"filter-service-in-practice",children:"Filter Service in Practice"}),"\n",(0,n.jsx)(t.p,{children:"When planning to record a new track, the recommended workflow is as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Start with ",(0,n.jsx)(t.code,{children:"/clear_track"}),'. This will clear the current track on memory and allow the user to\n"start fresh"']}),"\n",(0,n.jsx)(t.li,{children:"User drives the robot to generate the desired track"}),"\n",(0,n.jsx)(t.li,{children:"Once satisfied, the user stops the robot"}),"\n",(0,n.jsxs)(t.li,{children:["Get the track with the API ",(0,n.jsx)(t.code,{children:"/get_track"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"TIP",type:"tip",children:(0,n.jsxs)(t.p,{children:["For a comprehensive understanding of the list of variables available in the filter state messages,\nmake sure to check its ",(0,n.jsx)(t.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/filter/filter.proto",children:"protobuf definition"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,n.jsx)(t.p,{children:"The Filter service, while sophisticated, is designed with user-friendliness in mind.\nIt not only provides essential information on the robot's current state but also empowers users to:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Track Creation and Retrieval"}),":\nThe system automatically logs the robot's path, creating tracks that can be reviewed and utilized for\nfuture tasks. This feature is invaluable for repeated navigation tasks or analyzing the robot's\ncoverage over a workspace."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Real-time State Estimation"}),":\nBy continuously synthesizing data from multiple sensors, the Filter offers real-time insights into\nthe robot's position, orientation, and trajectory.\nThis is crucial for tasks that require precise navigation or environment mapping."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Calibration on Demand"}),":\nEnvironmental changes or operational demands may necessitate recalibration.\nThe /calibrate command simplifies this, enabling users to quickly recalibrate the IMU, ensuring\ncontinued accuracy in state estimation."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(6540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);