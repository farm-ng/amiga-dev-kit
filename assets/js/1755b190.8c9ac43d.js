"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[1520],{7048:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var s=d(5893),a=d(1151);const c={sidebar_label:"packet",title:"utils.packet"},t=void 0,i={id:"reference/circuitpy/utils/packet",title:"utils.packet",description:"PendantButtons Objects",source:"@site/docs/reference/circuitpy/utils/packet.md",sourceDirName:"reference/circuitpy/utils",slug:"/reference/circuitpy/utils/packet",permalink:"/docs/reference/circuitpy/utils/packet",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/reference/circuitpy/utils/packet.md",tags:[],version:"current",frontMatter:{sidebar_label:"packet",title:"utils.packet"},sidebar:"api",previous:{title:"nvm",permalink:"/docs/reference/circuitpy/utils/nvm"},next:{title:"ticks",permalink:"/docs/reference/circuitpy/utils/ticks"}},l={},o=[{value:"PendantButtons Objects",id:"pendantbuttons-objects",level:2},{value:"AmigaControlState Objects",id:"amigacontrolstate-objects",level:2},{value:"NodeState Objects",id:"nodestate-objects",level:2},{value:"BOOTUP",id:"bootup",level:4},{value:"STOPPED",id:"stopped",level:4},{value:"OPERATIONAL",id:"operational",level:4},{value:"PRE_OPERATIONAL",id:"pre_operational",level:4},{value:"ActuatorCommands Objects",id:"actuatorcommands-objects",level:2},{value:"actuator_bits_cmd",id:"actuator_bits_cmd",level:4},{value:"actuator_bits_read",id:"actuator_bits_read",level:4},{value:"Packet Objects",id:"packet-objects",level:2},{value:"from_can_data",id:"from_can_data",level:4},{value:"stamp",id:"stamp",level:4},{value:"fresh",id:"fresh",level:4},{value:"age",id:"age",level:4},{value:"encode",id:"encode",level:4},{value:"decode",id:"decode",level:4},{value:"PendantState Objects",id:"pendantstate-objects",level:2},{value:"encode",id:"encode-1",level:4},{value:"decode",id:"decode-1",level:4},{value:"PendantLEDs Objects",id:"pendantleds-objects",level:2},{value:"encode",id:"encode-2",level:4},{value:"decode",id:"decode-2",level:4},{value:"AmigaRpdo1 Objects",id:"amigarpdo1-objects",level:2},{value:"encode",id:"encode-3",level:4},{value:"decode",id:"decode-3",level:4},{value:"AmigaTpdo1 Objects",id:"amigatpdo1-objects",level:2},{value:"encode",id:"encode-4",level:4},{value:"decode",id:"decode-4",level:4},{value:"AmigaPdo2 Objects",id:"amigapdo2-objects",level:2},{value:"AmigaPdo2",id:"amigapdo2",level:3},{value:"Usage",id:"usage",level:4},{value:"Tip",id:"tip",level:4},{value:"cob_id_req",id:"cob_id_req",level:4},{value:"cob_id_rep",id:"cob_id_rep",level:4},{value:"encode",id:"encode-5",level:4},{value:"decode",id:"decode-5",level:4},{value:"FarmngHeartbeat Objects",id:"farmngheartbeat-objects",level:2},{value:"encode",id:"encode-6",level:4},{value:"decode",id:"decode-6",level:4},{value:"EstopRequest Objects",id:"estoprequest-objects",level:2},{value:"cob_id",id:"cob_id",level:4},{value:"encode",id:"encode-7",level:4},{value:"decode",id:"decode-7",level:4},{value:"make_message",id:"make_message",level:4},{value:"EstopReply Objects",id:"estopreply-objects",level:2},{value:"cob_id",id:"cob_id-1",level:4},{value:"encode",id:"encode-8",level:4},{value:"decode",id:"decode-8",level:4},{value:"BumperState Objects",id:"bumperstate-objects",level:2},{value:"cob_id",id:"cob_id-2",level:4},{value:"encode",id:"encode-9",level:4},{value:"decode",id:"decode-9",level:4}];function r(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"pendantbuttons-objects",children:"PendantButtons Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class PendantButtons()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Bit field for pendant buttons."}),"\n",(0,s.jsx)(n.h2,{id:"amigacontrolstate-objects",children:"AmigaControlState Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class AmigaControlState()\n"})}),"\n",(0,s.jsx)(n.p,{children:"State of the Amiga vehicle control unit (VCU)."}),"\n",(0,s.jsx)(n.h2,{id:"nodestate-objects",children:"NodeState Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class NodeState()\n"})}),"\n",(0,s.jsx)(n.p,{children:"State of the MainLoop."}),"\n",(0,s.jsx)(n.h4,{id:"bootup",children:"BOOTUP"}),"\n",(0,s.jsx)(n.p,{children:"Boot up / Initializing"}),"\n",(0,s.jsx)(n.h4,{id:"stopped",children:"STOPPED"}),"\n",(0,s.jsx)(n.p,{children:"Stopped"}),"\n",(0,s.jsx)(n.h4,{id:"operational",children:"OPERATIONAL"}),"\n",(0,s.jsx)(n.p,{children:"Operational"}),"\n",(0,s.jsx)(n.h4,{id:"pre_operational",children:"PRE_OPERATIONAL"}),"\n",(0,s.jsx)(n.p,{children:"Pre-Operational"}),"\n",(0,s.jsx)(n.h2,{id:"actuatorcommands-objects",children:"ActuatorCommands Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class ActuatorCommands()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Defines commands for actuators."}),"\n",(0,s.jsx)(n.h4,{id:"actuator_bits_cmd",children:"actuator_bits_cmd"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def actuator_bits_cmd(a0=ActuatorCommands.passive,\n                      a1=ActuatorCommands.passive,\n                      a2=ActuatorCommands.passive,\n                      a3=ActuatorCommands.passive)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Performs bit shifting to return a single byte representing command of 4 actuators."}),"\n",(0,s.jsx)(n.h4,{id:"actuator_bits_read",children:"actuator_bits_read"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def actuator_bits_read(bits)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Reads and returns individual actuator states from a bit pattern."}),"\n",(0,s.jsx)(n.h2,{id:"packet-objects",children:"Packet Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Packet()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Base class inherited by all CAN message data structures."}),"\n",(0,s.jsx)(n.h4,{id:"from_can_data",children:"from_can_data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef from_can_data(cls, data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Unpack CAN data directly into CAN message data structure."}),"\n",(0,s.jsx)(n.h4,{id:"stamp",children:"stamp"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def stamp()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Time most recent message was received."}),"\n",(0,s.jsx)(n.h4,{id:"fresh",children:"fresh"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def fresh(thresh_ms=500)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns False if the most recent message is older than ",(0,s.jsx)(n.code,{children:"thresh_ms"})]}),"\n",(0,s.jsx)(n.h4,{id:"age",children:"age"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def age()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Age of the most recent message."}),"\n",(0,s.jsx)(n.h4,{id:"encode",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Encodes the packet data for transmission."}),"\n",(0,s.jsx)(n.p,{children:"Must be implemented by subclasses."}),"\n",(0,s.jsx)(n.h4,{id:"decode",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes the packet data from transmission."}),"\n",(0,s.jsx)(n.p,{children:"Must be implemented by subclasses."}),"\n",(0,s.jsx)(n.h2,{id:"pendantstate-objects",children:"PendantState Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class PendantState(Packet)\n"})}),"\n",(0,s.jsx)(n.p,{children:"State of the Pendant (joystick position & pressed buttons)"}),"\n",(0,s.jsx)(n.h4,{id:"encode-1",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode-1",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."}),"\n",(0,s.jsx)(n.h2,{id:"pendantleds-objects",children:"PendantLEDs Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class PendantLEDs(Packet)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Command to the pendant on LEDs / backlight to illuminate."}),"\n",(0,s.jsx)(n.h4,{id:"encode-2",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode-2",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."}),"\n",(0,s.jsx)(n.h2,{id:"amigarpdo1-objects",children:"AmigaRpdo1 Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class AmigaRpdo1(Packet)\n"})}),"\n",(0,s.jsx)(n.p,{children:"State, speed, and angular rate command (request) sent to the Amiga vehicle control unit (VCU)."}),"\n",(0,s.jsx)(n.p,{children:"New in fw v0.1.9 / farm-ng-amiga v0.0.7: Add pto & hbridge control. Message data is now 8 bytes (was 5)."}),"\n",(0,s.jsx)(n.h4,{id:"encode-3",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode-3",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."}),"\n",(0,s.jsx)(n.h2,{id:"amigatpdo1-objects",children:"AmigaTpdo1 Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class AmigaTpdo1(Packet)\n"})}),"\n",(0,s.jsx)(n.p,{children:"State, speed, and angular rate of the Amiga vehicle control unit (VCU)."}),"\n",(0,s.jsx)(n.p,{children:"New in fw v0.1.9 / farm-ng-amiga v0.0.7: Add pto & hbridge control. Message data is now 8 bytes (was 5)."}),"\n",(0,s.jsx)(n.h4,{id:"encode-4",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode-4",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."}),"\n",(0,s.jsx)(n.h2,{id:"amigapdo2-objects",children:"AmigaPdo2 Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class AmigaPdo2(Packet)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"amigapdo2",children:"AmigaPdo2"}),"\n",(0,s.jsx)(n.p,{children:"Contains a request or reply of RPM for each in individual motor (0xA - 0xD)."}),"\n",(0,s.jsxs)(n.p,{children:["Identical packet for RPDO (request) & TPDO (reply/measured).\nShould be used in conjunction with ",(0,s.jsx)(n.code,{children:"AmigaRpdo1"})," / ",(0,s.jsx)(n.code,{children:"AmigaTpdo1"})," for auto control."]}),"\n",(0,s.jsx)(n.p,{children:"Introduced in fw version v0.2.0."}),"\n",(0,s.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"To send individual motor rpm commands:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Send an ",(0,s.jsx)(n.code,{children:"AmigaRpdo1"})," with:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"state_req"})," = ",(0,s.jsx)(n.code,{children:"STATE_AUTO_ACTIVE"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cmd_speed"})," = 0.0"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cmd_ang_rate"})," = 0.0"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Send an ",(0,s.jsx)(n.code,{children:"AmigaPdo2"})," on ",(0,s.jsx)(n.code,{children:"cob_id_req"})," with:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a_rpm"}),", ",(0,s.jsx)(n.code,{children:"AmigaTpdo1"}),"0, ",(0,s.jsx)(n.code,{children:"AmigaTpdo1"}),"1, ",(0,s.jsx)(n.code,{children:"AmigaTpdo1"}),"2 = desired rpm for each motor"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning"}),": If you send any ",(0,s.jsx)(n.code,{children:"cmd_speed"})," or ",(0,s.jsx)(n.code,{children:"cmd_ang_rate"})," in your ",(0,s.jsx)(n.code,{children:"AmigaRpdo1"}),"\nwhile sending individual motor rpm commands, the Amiga may go into an error state."]}),"\n",(0,s.jsxs)(n.p,{children:["To switch back to ",(0,s.jsx)(n.code,{children:"AmigaRpdo1"})," only control, stop sending ",(0,s.jsx)(n.code,{children:"AmigaPdo2"})," messages and wait ~1 second."]}),"\n",(0,s.jsx)(n.h4,{id:"tip",children:"Tip"}),"\n",(0,s.jsx)(n.p,{children:"RPM is signed based on the direction of your motors.\nCheck your dashboard to see which direction each of your motors spin for forward/reverse motion."}),"\n",(0,s.jsx)(n.h4,{id:"cob_id_req",children:"cob_id_req"}),"\n",(0,s.jsx)(n.p,{children:"RPDO2"}),"\n",(0,s.jsx)(n.h4,{id:"cob_id_rep",children:"cob_id_rep"}),"\n",(0,s.jsx)(n.p,{children:"TPDO2"}),"\n",(0,s.jsx)(n.h4,{id:"encode-5",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode-5",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."}),"\n",(0,s.jsx)(n.h2,{id:"farmngheartbeat-objects",children:"FarmngHeartbeat Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class FarmngHeartbeat(Packet)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Custom Heartbeat message = status sent regularly by farm-ng components"}),"\n",(0,s.jsx)(n.h4,{id:"encode-6",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode-6",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."}),"\n",(0,s.jsx)(n.h2,{id:"estoprequest-objects",children:"EstopRequest Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class EstopRequest(Packet)\n"})}),"\n",(0,s.jsx)(n.p,{children:"An 8 byte packet that requests an e-stop."}),"\n",(0,s.jsx)(n.p,{children:"We only care about the first byte and ignore the rest for now. The other bytes can be used as a message state unique\nto the device requesting the e-stop."}),"\n",(0,s.jsx)(n.h4,{id:"cob_id",children:"cob_id"}),"\n",(0,s.jsx)(n.p,{children:"TPDO1"}),"\n",(0,s.jsx)(n.h4,{id:"encode-7",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode-7",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."}),"\n",(0,s.jsx)(n.h4,{id:"make_message",children:"make_message"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef make_message(cls, node_id, request_estop)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns a CAN message with the e-stop request encoded."}),"\n",(0,s.jsx)(n.h2,{id:"estopreply-objects",children:"EstopReply Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class EstopReply(Packet)\n"})}),"\n",(0,s.jsx)(n.p,{children:"An 8 byte packet that responds with registered e-stop devices."}),"\n",(0,s.jsx)(n.p,{children:"We only care about the first 4 bytes and ignore the rest for now."}),"\n",(0,s.jsx)(n.h4,{id:"cob_id-1",children:"cob_id"}),"\n",(0,s.jsx)(n.p,{children:"RPDO1"}),"\n",(0,s.jsx)(n.h4,{id:"encode-8",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode-8",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."}),"\n",(0,s.jsx)(n.h2,{id:"bumperstate-objects",children:"BumperState Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class BumperState(Packet)\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is an expansion of the EstopRequest packet that also includes the state of the 4 Bumpers. This is so\nthe dashboard can treat the BumperState as a generic EstopRequest, ignoring the contents of any byte besides\nthe estop_request bool in the first signed char. While other components could look for more insight from the\nBumperState encoded data."}),"\n",(0,s.jsx)(n.p,{children:"Encoding:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"b: signed char used as bool for true/false estop-request"}),"\n",(0,s.jsx)(n.li,{children:"h: signed short encoding pressed bumpers"}),"\n",(0,s.jsx)(n.li,{children:"5x: pad bytes"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For the circuitpy/examples/bumpers/main.py:\n(True => corresponding pin is pressed) button states are packed as follows:\n(0x1 * board.D10) + (0x2 * board.D11) + (0x4 * board.12) + (0x8 * board.b13)\nIn other words, pins are bit coded in the first 4 bits\nbit 0 => pin D10, bit 1 => pin D11, bit 2 => pin D12, bit 3 => pin D13"}),"\n",(0,s.jsx)(n.h4,{id:"cob_id-2",children:"cob_id"}),"\n",(0,s.jsx)(n.p,{children:"TPDO1"}),"\n",(0,s.jsx)(n.h4,{id:"encode-9",children:"encode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def encode()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the data contained by the class encoded as CAN message data."}),"\n",(0,s.jsx)(n.h4,{id:"decode-9",children:"decode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def decode(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Decodes CAN message data and populates the values of the class."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},1151:(e,n,d)=>{d.d(n,{Z:()=>i,a:()=>t});var s=d(7294);const a={},c=s.createContext(a);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);