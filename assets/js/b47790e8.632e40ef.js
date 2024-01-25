"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[8624],{7565:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var r=n(5893),s=n(1151);const d={id:"dashboard-debugging",title:"Debugging error codes"},c="Debugging Error Codes",l={id:"dashboard/dashboard-debugging",title:"Debugging error codes",description:"This section is intended for the dashboard firmware v0.3.0 and older.",source:"@site/docs/dashboard/debugging.md",sourceDirName:"dashboard",slug:"/dashboard/dashboard-debugging",permalink:"/docs/dashboard/dashboard-debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/dashboard/debugging.md",tags:[],version:"current",frontMatter:{id:"dashboard-debugging",title:"Debugging error codes"},sidebar:"Documentation",previous:{title:"Dashboard Firmware Updates",permalink:"/docs/dashboard/dashboard-fw"},next:{title:"Pendant Overview",permalink:"/docs/pendant/"}},o={},h=[{value:"Pendant Error",id:"pendant-error",level:2},{value:"Guide to Decode Pendant Error Codes",id:"guide-to-decode-pendant-error-codes",level:3},{value:"Motor Error",id:"motor-error",level:2},{value:"Decoding Process",id:"decoding-process",level:3},{value:"Faults1 Bits (0-15)",id:"faults1-bits-0-15",level:3},{value:"Faults2 Bits (0-7)",id:"faults2-bits-0-7",level:3},{value:"Error Register Bits (0-7)",id:"error-register-bits-0-7",level:3},{value:"Warnings Bits (0-15)",id:"warnings-bits-0-15",level:3},{value:"Converting Hexadecimal to Binary",id:"converting-hexadecimal-to-binary",level:2},{value:"1. Understand the Hexadecimal System",id:"1-understand-the-hexadecimal-system",level:3},{value:"2. Identify Each Hexadecimal Digit",id:"2-identify-each-hexadecimal-digit",level:3},{value:"3. Convert Each Digit to Binary",id:"3-convert-each-digit-to-binary",level:3},{value:"4. Combine the Binary Sequences",id:"4-combine-the-binary-sequences",level:3},{value:"5. Result",id:"5-result",level:3},{value:"Examples",id:"examples",level:2},{value:"Pendant error example",id:"pendant-error-example",level:3},{value:"Motor error example",id:"motor-error-example",level:3}];function t(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"debugging-error-codes",children:"Debugging Error Codes"}),"\n",(0,r.jsx)(i.admonition,{title:"Deprecation Warning",type:"warning",children:(0,r.jsx)(i.p,{children:"This section is intended for the dashboard firmware v0.3.0 and older.\nThe error codes are human-readable in the dashboard firmware v0.4.0+."})}),"\n",(0,r.jsx)(i.h2,{id:"pendant-error",children:"Pendant Error"}),"\n",(0,r.jsxs)(i.p,{children:["Pendant error codes are formatted as: ",(0,r.jsx)(i.code,{children:"0x00"})]}),"\n",(0,r.jsx)(i.h3,{id:"guide-to-decode-pendant-error-codes",children:"Guide to Decode Pendant Error Codes"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"WAITING_PENDANT_HEARTBEAT (2**0 or 1)"}),": System is awaiting a heartbeat signal from the pendant."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"WAITING_PENDANT_STATE (2**1 or 2)"}),": System is waiting for a state update from the pendant."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"PENDANT_HEARTBEAT_TIMEOUT (2**2 or 4)"}),": Triggered by a timeout in receiving the pendant's heartbeat."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"PENDANT_STATE_TIMEOUT (2**3 or 8)"}),": Triggered by a timeout in receiving the pendant's state."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"AUTO_MODE_ESTOP_REQUEST (2**4 or 16)"}),": Indicates an emergency stop request in auto mode from the pendant."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"motor-error",children:"Motor Error"}),"\n",(0,r.jsxs)(i.p,{children:["Motor error messages are formatted as: ",(0,r.jsx)(i.code,{children:"motor_10_codes = (0x00, 0x0000, 0x00, 0x00, 0x0000, 0x0000)"})]}),"\n",(0,r.jsxs)(i.p,{children:["The different fields are: ",(0,r.jsx)(i.strong,{children:"Error_code, EMCY code, Error registry, faults 2, faults 1, warning"})]}),"\n",(0,r.jsx)(i.h3,{id:"decoding-process",children:"Decoding Process"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Identify the error category (Faults1, Faults2, Error Register, or Warnings)."}),"\n",(0,r.jsx)(i.li,{children:"Check the bit positions in the error code."}),"\n",(0,r.jsx)(i.li,{children:"Refer to the respective section for the error description."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"faults1-bits-0-15",children:"Faults1 Bits (0-15)"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"0"}),": CONTROLLER_OVER_VOLTAGE"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"1"}),": PHASE_OVER_CURRENT"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"2"}),": CURRENT_SENSOR_CALIBRATION"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"3"}),": CURRENT_SENSOR_OVER_CURRENT"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"4"}),": CONTROLLER_OVER_TEMPERATURE"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"5"}),": MOTOR_HALL_SENSOR_FAULT"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"6"}),": CONTROLLER_UNDER_VOLTAGE"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"7"}),": POST_STATIC_GATING_TEST"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"8"}),": NETWORK_COMMUNICATION_TIMEOUT"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"9"}),": INSTANTANEOUS_PHASE_OVER_CURRENT"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"10"}),": MOTOR_OVER_TEMPERATURE"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"11"}),": THROTTLE_VOLTAGE_OUTSIDE_RANGE"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"12"}),": INSTANT_CONTROLLER_OVER_VOLTAGE"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"13"}),": INTERNAL_ERROR"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"14"}),": POST_DYNAMIC_GATING_TEST"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"15"}),": INSTANTANEOUS_UNDER_VOLTAGE"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"faults2-bits-0-7",children:"Faults2 Bits (0-7)"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"0"}),": PARAMETER_CRC"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"1"}),": CURRENT_SCALING"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"2"}),": VOLTAGE_SCALING"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"3"}),": HEADLIGHT_UNDER_VOLTAGE"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"4"}),": TORQUE_SENSOR"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"5"}),": CAN_BUS"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"6"}),": HALL_STALL"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"7"}),": BOOTLOADER"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"error-register-bits-0-7",children:"Error Register Bits (0-7)"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"0"}),": GENERIC_ERROR"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"1"}),": CURRENT"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"2"}),": VOLTAGE"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"3"}),": TEMPERATURE"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"4"}),": COMS_ERROR"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"5"}),": DEV_PROFILE_SPECIFIC"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"6"}),": RESERVED (ALWAYS 0)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"7"}),": MANU_SPECIFIC"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"warnings-bits-0-15",children:"Warnings Bits (0-15)"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"0"}),": COMMUNICATION_TIMEOUT"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"1"}),": HALL_SENSOR"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"2"}),": HALL_STALL"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"3"}),": WHEEL_SPEED_SENSOR"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"4"}),": CAN_BUS"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"5"}),": HALL_ILLEGAL_SECTOR"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"6"}),": HALL_ILLEGAL_TRANSITION"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"7"}),": VDC_LOW_FOLDBACK"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"8"}),": VDC_HIGH_FOLDBACK"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"9"}),": MOTOR_TEMPERATURE_FOLDBACK"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"10"}),": CONTROL_TEMPERATURE_FOLDBACK"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"11"}),": LOW_SOC_FOLDBACK"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"12"}),": HI_SOC_FOLDBACK"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"13"}),": I2T_FOLDBACK"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"14"}),": RESERVED"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"15"}),": BMS_TIMEOUT"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"converting-hexadecimal-to-binary",children:"Converting Hexadecimal to Binary"}),"\n",(0,r.jsx)(i.p,{children:"For the Amiga dashboard, the errors are reported in hexadecimal values.\nHere's a quick summary on how to convert hexadecimals to binary:"}),"\n",(0,r.jsx)(i.h3,{id:"1-understand-the-hexadecimal-system",children:"1. Understand the Hexadecimal System"}),"\n",(0,r.jsx)(i.p,{children:"Hexadecimal is a base-16 number system.\nIt uses 16 symbols: 0-9 represent values zero to nine, and A-F (or a-f) represent values ten to fifteen."}),"\n",(0,r.jsx)(i.h3,{id:"2-identify-each-hexadecimal-digit",children:"2. Identify Each Hexadecimal Digit"}),"\n",(0,r.jsxs)(i.p,{children:["Break down the hexadecimal number into its individual digits. For example, in ",(0,r.jsx)(i.code,{children:"0x0020"}),",\nthe digits are ",(0,r.jsx)(i.code,{children:"0"}),", ",(0,r.jsx)(i.code,{children:"0"}),", ",(0,r.jsx)(i.code,{children:"2"}),", and ",(0,r.jsx)(i.code,{children:"0"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"3-convert-each-digit-to-binary",children:"3. Convert Each Digit to Binary"}),"\n",(0,r.jsx)(i.p,{children:"Convert each hexadecimal digit to its four-bit binary equivalent using this mapping:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"0"})," in hex is ",(0,r.jsx)(i.code,{children:"0000"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"1"})," in hex is ",(0,r.jsx)(i.code,{children:"0001"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"2"})," in hex is ",(0,r.jsx)(i.code,{children:"0010"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"3"})," in hex is ",(0,r.jsx)(i.code,{children:"0011"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"4"})," in hex is ",(0,r.jsx)(i.code,{children:"0100"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"5"})," in hex is ",(0,r.jsx)(i.code,{children:"0101"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"6"})," in hex is ",(0,r.jsx)(i.code,{children:"0110"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"7"})," in hex is ",(0,r.jsx)(i.code,{children:"0111"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"8"})," in hex is ",(0,r.jsx)(i.code,{children:"1000"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"9"})," in hex is ",(0,r.jsx)(i.code,{children:"1001"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"A"})," or ",(0,r.jsx)(i.code,{children:"a"})," in hex is ",(0,r.jsx)(i.code,{children:"1010"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"B"})," or ",(0,r.jsx)(i.code,{children:"b"})," in hex is ",(0,r.jsx)(i.code,{children:"1011"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"C"})," or ",(0,r.jsx)(i.code,{children:"c"})," in hex is ",(0,r.jsx)(i.code,{children:"1100"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"D"})," or ",(0,r.jsx)(i.code,{children:"d"})," in hex is ",(0,r.jsx)(i.code,{children:"1101"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"E"})," or ",(0,r.jsx)(i.code,{children:"e"})," in hex is ",(0,r.jsx)(i.code,{children:"1110"})," in binary"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"F"})," or ",(0,r.jsx)(i.code,{children:"f"})," in hex is ",(0,r.jsx)(i.code,{children:"1111"})," in binary"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"4-combine-the-binary-sequences",children:"4. Combine the Binary Sequences"}),"\n",(0,r.jsxs)(i.p,{children:["Write down the binary sequences of each digit next to each other, in the same order as the\nhexadecimal digits.\nFor ",(0,r.jsx)(i.code,{children:"0x0020"}),", convert each digit to binary:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"0"})," \u2192 ",(0,r.jsx)(i.code,{children:"0000"})]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"0"})," \u2192 ",(0,r.jsx)(i.code,{children:"0000"})]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"2"})," \u2192 ",(0,r.jsx)(i.code,{children:"0010"})]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"0"})," \u2192 ",(0,r.jsx)(i.code,{children:"0000"}),"\nCombined, the binary representation is ",(0,r.jsx)(i.code,{children:"0000 0000 0010 0000"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"5-result",children:"5. Result"}),"\n",(0,r.jsx)(i.p,{children:"The final binary number is the direct representation of the hexadecimal number in binary form."}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.h3,{id:"pendant-error-example",children:"Pendant error example"}),"\n",(0,r.jsxs)(i.p,{children:["Consider ",(0,r.jsx)(i.code,{children:"03"}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/39603677/3a9b63de-7c0a-48c8-970a-fbdfdacf3b12",alt:"pendant error-2"})}),"\n",(0,r.jsx)(i.p,{children:"Convert Hexadecimal to Binary:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The hexadecimal code 03 needs to be converted to binary."}),"\n",(0,r.jsx)(i.li,{children:"In hexadecimal, 0 is 0000 and 3 is 0011 in binary."}),"\n",(0,r.jsx)(i.li,{children:"Therefore, 03 in hexadecimal is 0000 0011 in binary."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Decode Based on Binary Position:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"In binary, 0000 0011, we check which bits are set to 1."}),"\n",(0,r.jsx)(i.li,{children:"Reading from right to left (least significant bit to most significant bit),\nthe first and second bits are set (positions 0 and 1)."}),"\n",(0,r.jsxs)(i.li,{children:["These positions correspond to ",(0,r.jsx)(i.code,{children:"2**0 or 1"}),", and ",(0,r.jsx)(i.code,{children:"2**1 or 2"})," in decimal, respectively."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Match with Pendant Error Descriptions:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"2**0 or 1 corresponds to WAITING_PENDANT_HEARTBEAT."}),"\n",(0,r.jsx)(i.li,{children:"2**1 or 2 corresponds to WAITING_PENDANT_STATE."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"motor-error-example",children:"Motor error example"}),"\n",(0,r.jsxs)(i.p,{children:["Consider ",(0,r.jsx)(i.code,{children:"Motor 12: 13 (1000 r 21 f 00.0020 w 0022)"}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/39603677/b04b5319-7b7f-410a-8dbe-51c06c15a3ec",alt:"motor error"})}),"\n",(0,r.jsx)(i.p,{children:"Breaking Down the Error Message:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"1000: This is the EMCY code indicating a specific error or emergency condition."}),"\n",(0,r.jsx)(i.li,{children:"r 21: This is the error registry or status code."}),"\n",(0,r.jsx)(i.li,{children:"f 00 and 0020: These are the Faults error code in hexadecimal."}),"\n",(0,r.jsx)(i.li,{children:"w 0022: This is a Warnings code in hexadecimal."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Let's convert 00.0020 from hexadecimal to binary and match it against the Faults1 Bits guide."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Hexadecimal 0020 converts to binary 0000 0000 0010 0000."}),"\n",(0,r.jsx)(i.li,{children:"The bit set is in position 5, counting from 0 (sixth bit)."}),"\n",(0,r.jsx)(i.li,{children:"Referring to the Faults1 guide, position 5 corresponds to MOTOR_HALL_SENSOR_FAULT."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Interpreting Warnings (0022):"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Hexadecimal 0022 converts to binary 0000 0000 0010 0010."}),"\n",(0,r.jsx)(i.li,{children:"The bits set are in positions 1 and 5, counting from 0 (second and sixth bits)."}),"\n",(0,r.jsxs)(i.li,{children:["Referring to the Warnings Bits list:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Bit position 1 corresponds to HALL_SENSOR."}),"\n",(0,r.jsx)(i.li,{children:"Bit position 5 corresponds to HALL_ILLEGAL_SECTOR."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"The guide should help in quickly identifying and understanding specific errors based on their categories\nand bit positions."})]})}function a(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>c});var r=n(7294);const s={},d=r.createContext(s);function c(e){const i=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:i},e.children)}}}]);