"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[384],{567:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));r(1839);const i={id:"events-recorder",title:"Events Recorder"},o=void 0,s={unversionedId:"examples/events_recorder/events-recorder",id:"examples/events_recorder/events-recorder",title:"Events Recorder",description:"Events Recorder",source:"@site/docs/examples/events_recorder/README.md",sourceDirName:"examples/events_recorder",slug:"/examples/events_recorder/",permalink:"/docs/examples/events_recorder/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/events_recorder/README.md",tags:[],version:"current",frontMatter:{id:"events-recorder",title:"Events Recorder"},sidebar:"examples",previous:{title:"File Converter",permalink:"/docs/examples/file_converter/"},next:{title:"Camera Client",permalink:"/docs/examples/camera_client/"}},c={},l=[{value:"Events Recorder",id:"events-recorder",level:2},{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:3},{value:"2. Setup",id:"2-setup",level:3},{value:"3. Install the example&#39;s dependencies",id:"3-install-the-examples-dependencies",level:3},{value:"4. Execute the Python script",id:"4-execute-the-python-script",level:3}],p={toc:l};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"events-recorder"},"Events Recorder"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/event_recorder/main.py"},"this example"),"\nwe show how to record events from farm-ng-brain using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"EventClient")," class."),(0,a.kt)("h3",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,a.kt)("a",{parentName:"h3",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,a.kt)("h3",{id:"2-setup"},"2. Setup"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment.")),(0,a.kt)("p",null,"Create first a virtual environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# assuming you're already in the amiga-dev-kit/ directory\ncd farm-ng-amiga/py/examples/events_recorder\n")),(0,a.kt)("h3",{id:"3-install-the-examples-dependencies"},"3. Install the example's dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,a.kt)("h3",{id:"4-execute-the-python-script"},"4. Execute the Python script"),(0,a.kt)("p",null,"In the provided example, we show how to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"/start")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/stop"),"\nrequests to start and stop the recording of events. We also provide two example profiles\n",(0,a.kt)("inlineCode",{parentName:"p"},"record_camera_config.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"record_fiter_config.json")," that can be used to record the\ncamera and filter events."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def start_recording(\n    service_config: EventServiceConfig, recording_profile: EventServiceConfigList\n) -> None:\n    reply = await EventClient(service_config).request_reply(\n        "/start", recording_profile, decode=True\n    )\n    print(reply)\n\n\nasync def stop_recording(service_config: EventServiceConfig) -> None:\n    reply = await EventClient(service_config).request_reply(\n        "/stop", Empty(), decode=True\n    )\n    print(reply)\n\n\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="amiga-camera-calibration")\n    parser.add_argument(\n        "--service-config", type=Path, required=True, help="The camera config.")\n\n    subparsers = parser.add_subparsers(dest="command")\n\n    start_command = subparsers.add_parser("start_recording", help="Start recording.")\n    start_command.add_argument(\n        "--recording-profile", type=Path, required=True, help="The recording profile.")\n\n    stop_command = subparsers.add_parser("stop_recording", help="Stop recording.")\n\n    args = parser.parse_args()\n\n    # create a client to the camera service\n    service_config: EventServiceConfig = proto_from_json_file(\n        args.service_config, EventServiceConfig()\n    )\n\n    if args.command == "start_recording":\n        recording_profile = proto_from_json_file(\n            args.recording_profile, EventServiceConfigList()\n        )\n        asyncio.run(start_recording(service_config, recording_profile))\n\n    if args.command == "stop_recording":\n        asyncio.run(stop_recording(service_config))\n')),(0,a.kt)("p",null,"To start recording the camera events, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --service-config service_config.json start_recording --recording-profile record_camera_config.json\n")),(0,a.kt)("p",null,"You should see a similar output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'value: "/mnt/data/2023_09_28_10_24_07_212687_lead-mango"\n')),(0,a.kt)("p",null,"In order to stop the recording, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --service-config service_config.json stop_recording\n")),(0,a.kt)("p",null,"Finally, to validate that the events have been recorded, you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python -m farm_ng.core.events_file_reader playback /mnt/data/2023_09_28_10_24_07_212687_lead-mango.0000.bin\n")))}d.isMDXComponent=!0}}]);