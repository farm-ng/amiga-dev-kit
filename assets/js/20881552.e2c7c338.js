"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[136],{5902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(5893),i=t(1151);const o={id:"track-follower-overview",title:"Track Follower"},s="Track Follower Service Overview",a={id:"concepts/track_follower_service/track-follower-overview",title:"Track Follower",description:"The Track Follower is the autonomy hub of the Amiga.",source:"@site/docs/concepts/track_follower_service/README.md",sourceDirName:"concepts/track_follower_service",slug:"/concepts/track_follower_service/",permalink:"/docs/concepts/track_follower_service/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/concepts/track_follower_service/README.md",tags:[],version:"current",frontMatter:{id:"track-follower-overview",title:"Track Follower"},sidebar:"Developer",previous:{title:"Filter",permalink:"/docs/concepts/filter_service/"},next:{title:"Microcontroller Kit Overview",permalink:"/docs/mcu_kit/"}},l={},c=[{value:"Subscriptions",id:"subscriptions",level:2},{value:"API",id:"api",level:2},{value:"Requirements",id:"requirements",level:2},{value:"The Track Follower in practice",id:"the-track-follower-in-practice",level:2},{value:"Features",id:"features",level:3},{value:"Requirements for Following a Track",id:"requirements-for-following-a-track",level:3},{value:"Tracks",id:"tracks",level:2},{value:"Define a Track",id:"define-a-track",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"track-follower-service-overview",children:"Track Follower Service Overview"}),"\n",(0,r.jsx)(n.p,{children:"The Track Follower is the autonomy hub of the Amiga.\nIt takes in user commands and turns them into actions the robot can perform."}),"\n",(0,r.jsx)(n.p,{children:"The main goal of the Track Follower is to act as a bridge between what you want the Amiga to\ndo and how the robot actually does it. It hides the complicated details, letting users focus\non their main tasks without needing to know the complex workings underneath."}),"\n",(0,r.jsx)(n.p,{children:"In short, the Track Follower does the heavy lifting, allowing users to easily command the Amiga without\ndeep technical knowledge."}),"\n",(0,r.jsx)(n.h2,{id:"subscriptions",children:"Subscriptions"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"track_follower"})," is a client of the following services:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/concepts/canbus_service/",children:(0,r.jsx)(n.strong,{children:"Canbus"})})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/concepts/filter_service/",children:(0,r.jsx)(n.strong,{children:"Filter"})})," (state estimation)"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{title:"remember",type:"tip",children:[(0,r.jsx)(n.p,{children:"The State estimation filter service is also client of the following services:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/concepts/canbus_service/",children:(0,r.jsx)(n.strong,{children:"Canbus"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/concepts/gps_service/",children:(0,r.jsx)(n.strong,{children:"GPS"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/concepts/oak_service/",children:(0,r.jsx)(n.strong,{children:"Oak (oak0)"})})}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["For this reason, all of the above-mentioned services must be up and running for the ",(0,r.jsx)(n.code,{children:"track_follower"}),"\nto work."]}),"\n",(0,r.jsx)(n.h1,{id:"data-streams",children:"Data Streams"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/state"}),": The ",(0,r.jsx)(n.code,{children:"TrackFollowerState"})," is a combination of information from the various tasks\nperformed by the Track Follower.\nIt cannot be defined by a single protobuf definition, but instead, a combination of them.\nCheck out the protobuf definitions for the Track Follower service for more details at\n",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/track/track.proto",children:(0,r.jsx)(n.strong,{children:"track.proto"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsxs)(n.p,{children:["These are the commands you can use to interact with the track follower service with\nan ",(0,r.jsx)(n.code,{children:"EventClient"})," of the track follower service."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/set_track"})}),": Provide a specific ",(0,r.jsx)(n.code,{children:"Track"})," (series of waypoints) for the Amiga to follow."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/start"})}),": Instruct the Amiga to start following the recently set `Track``."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/pause"})}),": Pause following the track, but maintain knowledge of the progress along the ",(0,r.jsx)(n.code,{children:"Track"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/resume"})}),": Continue following the track from where a ",(0,r.jsx)(n.code,{children:"/pause"})," was called."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/cancel"})}),": Instruct the Amiga to halt all movements immediately and clear the set Track."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/get_track"})}),": Return the ",(0,r.jsx)(n.code,{children:"Track"})," that was set with ",(0,r.jsx)(n.code,{children:"/set_track"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/get_state"})}),": Return a single instance of the ",(0,r.jsx)(n.code,{children:"TrackFollowerState"})," streamed on the ",(0,r.jsx)(n.code,{children:"/state"})," topic."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/go_to_goal"})}),": Send a single ",(0,r.jsx)(n.code,{children:"Pose"})," as a waypoint for the Track Follower to drive to.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Must be within a few meters and 180 degrees of the robot's current pose and orientation."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.p,{children:["There are a few requirements on the ",(0,r.jsx)(n.code,{children:"/state"})," output of the state estimation filter\n(see ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/filter/filter.proto",children:(0,r.jsx)(n.code,{children:"FilterState"})}),")\nfor the track follower service to consider the results valid and allow for following a track.\nThese include:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GPS service is connected to an RTK base station"}),"\n",(0,r.jsx)(n.li,{children:"State estimation is receiving all required sensor data"}),"\n",(0,r.jsxs)(n.li,{children:["State estimation results have converged","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Requires a few seconds of driving around after starting the filter service"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"the-track-follower-in-practice",children:"The Track Follower in practice"}),"\n",(0,r.jsxs)(n.p,{children:["Before the track follower can drive the Amiga autonomously, users must set a predefined track\nfor the robot to follow using the ",(0,r.jsx)(n.code,{children:"/set_track"})," API."]}),"\n",(0,r.jsxs)(n.p,{children:["Once a track is set, the next step is to command the track follower to make the robot follow it.\nThis is done using the ",(0,r.jsx)(n.code,{children:"/start"})," request.\nThe track follower will then navigate the robot through each waypoint in the sequence, ensuring it follows\nthe predefined path."]}),"\n",(0,r.jsx)(n.admonition,{title:"Remember",type:"info",children:(0,r.jsx)(n.p,{children:"It's crucial first to set the track before asking the robot to follow it.\nThe track follower expects the sequence of waypoints in the order they should be traversed.\nWithout a set track, the track follower wouldn't know where to direct the robot."})}),"\n",(0,r.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,r.jsx)(n.p,{children:"The track follower offers a level of flexibility and intelligence that goes beyond simply following\na predefined path.\nOnce a track is set, the robot can also traverse it in a few unique ways:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Reversing the Track"}),":\nAfter the Amiga has learned a track, it's not restricted to following it in just the direction\nit was taught.\nThe end point of the learned track can seamlessly become the starting point, provided the robot is\noriented towards its recorded initial position.\nThis allows the robot to navigate environments bidirectionally, offering greater autonomy and\nadaptability in dynamic settings."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Initiating from Intermediate Points"}),":\nYou don't always have to start the robot from the beginning of a track.\nThe track follower is smart enough to allow track following from any intermediate point within the path.\nThis is especially useful if the robot needs to start its journey from a point that's not the\ntraditional beginning or end."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"requirements-for-following-a-track",children:"Requirements for Following a Track"}),"\n",(0,r.jsx)(n.p,{children:"For the track follower to begin guiding the robot along a track, certain conditions must be met to\nensure accurate and safe navigation:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Proximity to the Track"}),": The robot must be situated closely to an existing point on the track.\nThis ensures it's close enough to align itself correctly and follow the track."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Orientation or Heading"}),": The robot's heading needs to align closely with the heading of the nearest\npoint on the track.\nSpecifically, it should be within 30 degrees of the track point's heading.\nThis condition ensures the robot is oriented correctly and can safely navigate along the desired\npath without sudden, unexpected maneuvers."]}),"\n",(0,r.jsx)(n.h2,{id:"tracks",children:"Tracks"}),"\n",(0,r.jsx)(n.p,{children:"A track is essentially a sequence of waypoints, guiding the robot from its starting point,\nthrough various intermediary points, to its destination.\nEach waypoint in this track provides specific spatial information about where the robot should\nbe and how it should be oriented at that point."}),"\n",(0,r.jsx)(n.h3,{id:"define-a-track",children:"Define a Track"}),"\n",(0,r.jsx)(n.p,{children:"A track is represented as a JSON file, where each waypoint is defined by a pose.\nA pose captures the robot's position and orientation in the world.\nHere's an example of what a single pose looks like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "pose": {\n    "aFromB": {\n      "rotation": {\n        "unitQuaternion": {\n          "imag": {\n            "z": -0.9932486190247055\n          },\n          "real": 0.11600508956729176\n        }\n      },\n      "translation": {\n        "x": 2674.593868581748,\n        "y": 4297.325262829638\n      }\n    },\n    "frameA": "world",\n    "frameB": "robot",\n    "tangentOfBInA": {\n      "linearVelocity": {\n        "x": 0.4467579546503179\n      },\n      "angularVelocity": {\n        "z": 0.00475509022854358\n      }\n    }\n  },\n  "heading": -2.909058930621276\n},\n'})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Now that you have a good understanding of how the track follower works, try some of the\ntrack follower examples:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/examples/track_recorder",children:"Record a Track"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/examples/track_follower",children:"Follow a Track"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/examples/square_track",children:"Drive a Square"})}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{title:"Warning",type:"caution",children:[(0,r.jsx)(n.p,{children:"The track follower examples will cause the Amiga to drive when the dashboard is in auto mode.\nMake sure the area is clear before running examples."}),(0,r.jsxs)(n.p,{children:["You can also run the examples when the Amiga dashboard is not in ",(0,r.jsx)(n.code,{children:"AUTO READY"})," or ",(0,r.jsx)(n.code,{children:"AUTO ACTIVE"}),"\nand see the commands being sent with the red needle on the auto page without the Amiga actually moving."]})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(7294);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);