"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[8446],{8159:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=a(5893),t=a(1151);const o={sidebar_label:"packet",title:"canbus.packet"},r=void 0,d={id:"reference/brain/canbus/packet",title:"canbus.packet",description:"AmigaControlState Objects",source:"@site/docs/reference/brain/canbus/packet.md",sourceDirName:"reference/brain/canbus",slug:"/reference/brain/canbus/packet",permalink:"/docs/reference/brain/canbus/packet",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/reference/brain/canbus/packet.md",tags:[],version:"current",frontMatter:{sidebar_label:"packet",title:"canbus.packet"}},c={},l=[{value:"AmigaControlState Objects",id:"amigacontrolstate-objects",level:2},{value:"Packet Objects",id:"packet-objects",level:2},{value:"from_can_data",id:"from_can_data",level:4},{value:"stamp_packet",id:"stamp_packet",level:4},{value:"fresh",id:"fresh",level:4},{value:"age",id:"age",level:4},{value:"make_amiga_rpdo1_proto",id:"make_amiga_rpdo1_proto",level:4},{value:"AmigaRpdo1 Objects",id:"amigarpdo1-objects",level:2},{value:"encode",id:"encode",level:4},{value:"decode",id:"decode",level:4},{value:"AmigaTpdo1 Objects",id:"amigatpdo1-objects",level:2},{value:"encode",id:"encode-1",level:4},{value:"decode",id:"decode-1",level:4},{value:"to_proto",id:"to_proto",level:4},{value:"from_proto",id:"from_proto",level:4},{value:"parse_amiga_tpdo1_proto",id:"parse_amiga_tpdo1_proto",level:4},{value:"MotorControllerStatus Objects",id:"motorcontrollerstatus-objects",level:2},{value:"PRE_OPERATIONAL",id:"pre_operational",level:4},{value:"IDLE",id:"idle",level:4},{value:"POST_OPERATIONAL",id:"post_operational",level:4},{value:"RUN",id:"run",level:4},{value:"FAULT",id:"fault",level:4},{value:"MotorState Objects",id:"motorstate-objects",level:2},{value:"to_proto",id:"to_proto-1",level:4}];function i(e){const n={code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"amigacontrolstate-objects",children:"AmigaControlState Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class AmigaControlState(IntEnum)\n"})}),"\n",(0,s.jsx)(n.p,{children:"State of the Amiga vehicle control unit (VCU)"}),"\n",(0,s.jsx)(n.h2,{id:"packet-objects",children:"Packet Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Packet()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Base class inherited by all CAN message data structures."}),"\n",(0,s.jsx)(n.h4,{id:"from_can_data",children:"from_can_data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef from_can_data(cls, data, stamp: float)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Unpack CAN data directly into CAN message data structure."}),"\n",(0,s.jsx)(n.h4,{id:"stamp_packet",children:"stamp_packet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def stamp_packet(stamp: float)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Time most recent message was received."}),"\n",(0,s.jsx)(n.h4,{id:"fresh",children:"fresh"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def fresh(thresh_s: float = 0.5)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns False if the most recent message is older than ",(0,s.jsx)(n.code,{children:"thresh_s"})," in seconds."]}),"\n",(0,s.jsx)(n.h4,{id:"age",children:"age"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def age()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Age of the most recent message."}),"\n",(0,s.jsx)(n.h4,{id:"make_amiga_rpdo1_proto",children:"make_amiga_rpdo1_proto"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def make_amiga_rpdo1_proto(\n        state_req: AmigaControlState,\n        cmd_speed: float,\n        cmd_ang_rate: float,\n        pto_bits: int = 0x0,\n        hbridge_bits: int = 0x0) -> canbus_pb2.RawCanbusMessage\n"})}),"\n",(0,s.jsx)(n.p,{children:"Creates a canbus_pb2.RawCanbusMessage."}),"\n",(0,s.jsx)(n.p,{children:"Uses the AmigaRpdo1 structure and formatting, that can be sent\ndirectly to the canbus service to be formatted and send on the CAN bus."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"state_req"})," - State of the Amiga vehicle control unit (VCU)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cmd_speed"})," - Command speed in meters per second."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cmd_ang_rate"})," - Command angular rate in radians per second."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"An instance of a canbus_pb2.RawCanbusMessage."}),"\n",(0,s.jsx)(n.h2,{id:"amigarpdo1-objects",children:"AmigaRpdo1 Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class AmigaRpdo1(Packet)\n"})}),"\n",(0,s.jsx)(n.p,{children:"State, speed, and angular rate command (request) sent to the Amiga vehicle control unit (VCU)."}),"\n",(0,s.jsx)(n.p,{children:"New in fw v0.1.9 / farm-ng-amiga v0.0.7: Add pto & hbridge control. Message data is now 8 bytes (was 5)."}),"\n",(0,s.jsx)(n.h4,{id:"encode",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."}),"\n",(0,s.jsx)(n.h2,{id:"amigatpdo1-objects",children:"AmigaTpdo1 Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class AmigaTpdo1(Packet)\n"})}),"\n",(0,s.jsx)(n.p,{children:"State, speed, and angular rate of the Amiga vehicle control unit (VCU)."}),"\n",(0,s.jsx)(n.p,{children:"New in fw v0.1.9 / farm-ng-amiga v0.0.7: Add pto & hbridge control. Message data is now 8 bytes (was 5)."}),"\n",(0,s.jsx)(n.h4,{id:"encode-1",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode-1",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."}),"\n",(0,s.jsx)(n.h4,{id:"to_proto",children:"to_proto"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def to_proto() -> amiga_v6_pb2.AmigaTpdo1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Packs the class data into an AmigaTpdo1 proto message."}),"\n",(0,s.jsx)(n.p,{children:"Returns: An instance of an AmigaTpdo1 proto."}),"\n",(0,s.jsx)(n.h4,{id:"from_proto",children:"from_proto"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef from_proto(cls, proto: amiga_v6_pb2.AmigaTpdo1) -> AmigaTpdo1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Creates an instance of the class from a proto message."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"proto"})," - The AmigaTpdo1 proto message to parse."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parse_amiga_tpdo1_proto",children:"parse_amiga_tpdo1_proto"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def parse_amiga_tpdo1_proto(\n        message: canbus_pb2.RawCanbusMessage) -> AmigaTpdo1 | None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Parses a canbus_pb2.RawCanbusMessage."}),"\n",(0,s.jsx)(n.p,{children:"IFF the message came from the dashboard and contains AmigaTpdo1 structure,\nformatting, and cobid."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"message"})," - The raw canbus message to parse."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"The parsed AmigaTpdo1 message, or None if the message is not a valid AmigaTpdo1 message."}),"\n",(0,s.jsx)(n.h2,{id:"motorcontrollerstatus-objects",children:"MotorControllerStatus Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class MotorControllerStatus(IntEnum)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Values representing the status of the motor controller."}),"\n",(0,s.jsx)(n.h4,{id:"pre_operational",children:"PRE_OPERATIONAL"}),"\n",(0,s.jsx)(n.p,{children:"the motor is not ready to run"}),"\n",(0,s.jsx)(n.h4,{id:"idle",children:"IDLE"}),"\n",(0,s.jsx)(n.p,{children:"the motor is waiting to start"}),"\n",(0,s.jsx)(n.h4,{id:"post_operational",children:"POST_OPERATIONAL"}),"\n",(0,s.jsx)(n.p,{children:"the motor already started"}),"\n",(0,s.jsx)(n.h4,{id:"run",children:"RUN"}),"\n",(0,s.jsx)(n.p,{children:"the motor is running"}),"\n",(0,s.jsx)(n.h4,{id:"fault",children:"FAULT"}),"\n",(0,s.jsx)(n.p,{children:"the motor controller is in fault mode"}),"\n",(0,s.jsx)(n.h2,{id:"motorstate-objects",children:"MotorState Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class MotorState()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Values representing the state of the motor."}),"\n",(0,s.jsx)(n.p,{children:"Amalgamates values from multiple CAN packets."}),"\n",(0,s.jsx)(n.h4,{id:"to_proto-1",children:"to_proto"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def to_proto() -> canbus_pb2.MotorState\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>r});var s=a(7294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);