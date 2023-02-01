"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7470],{1515:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));t(1839);const i={id:"camera-client",title:"Camera Client"},s=void 0,m={unversionedId:"examples/camera_client/camera-client",id:"examples/camera_client/camera-client",title:"Camera Client",description:"Link to cameraclient/main.py",source:"@site/docs/examples/camera_client/README.md",sourceDirName:"examples/camera_client",slug:"/examples/camera_client/",permalink:"/docs/examples/camera_client/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/camera_client/README.md",tags:[],version:"current",frontMatter:{id:"camera-client",title:"Camera Client"},sidebar:"examples",previous:{title:"File Reader Can",permalink:"/docs/examples/file_reader_can/"},next:{title:"00 - Introduction",permalink:"/docs/tutorials/introduction/tutorial-introduction"}},o={},l=[{value:"Link to <code>camera_client/main.py</code>",id:"link-to-camera_clientmainpy",level:3},{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:3},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:3},{value:"3. Execute the Python script",id:"3-execute-the-python-script",level:3},{value:"4. Customize the run",id:"4-customize-the-run",level:3},{value:"5. Code overview",id:"5-code-overview",level:3}],p={toc:l};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"link-to-camera_clientmainpy"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_client/main.py"},"Link to ",(0,r.kt)("inlineCode",{parentName:"a"},"camera_client/main.py"))),(0,r.kt)("p",null,"This example acts as an ",(0,r.kt)("inlineCode",{parentName:"p"},"OakCameraClient")," in a standalone Python script."),(0,r.kt)("p",null,"The requirements to run this example are to have a ",(0,r.kt)("a",{parentName:"p",href:"/docs/brain/"},(0,r.kt)("strong",{parentName:"a"},"farm-ng brain"))," running Oak cameras and that your PC is on the same local network as the brain."),(0,r.kt)("h3",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,r.kt)("a",{parentName:"h3",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,r.kt)("h3",{id:"2-install-the-examples-dependencies"},"2. Install the example's dependencies"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the example in the brain ADK virtual environment.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# assuming you're already in the amiga-dev-kit/ directory\ncd farm-ng-amiga/py/examples/camera_client\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,r.kt)("h3",{id:"3-execute-the-python-script"},"3. Execute the Python script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 main.py --port 50051\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By default, the camera address is assumed top be ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),".")),(0,r.kt)("h3",{id:"4-customize-the-run"},"4. Customize the run"),(0,r.kt)("p",null,"Let's have some fun and stream the camera to your laptop over the Wifi."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You need to discover the WiFi address of your Amiga Brain using the ",(0,r.kt)("inlineCode",{parentName:"p"},"WifiClient")," (coming soon)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 main.py --help\n\n# usage: amiga-camera-app [-h] --port PORT [--address ADDRESS] [--stream-every-n STREAM_EVERY_N]\n\n# optional arguments:\n#   -h, --help            show this help message and exit\n#   --port PORT           The camera port.\n#   --address ADDRESS     The camera address\n#   --stream-every-n STREAM_EVERY_N\n#                         Streaming frequency\n")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 main.py --address 192.168.1.93 --port 50051\n")),(0,r.kt)("h3",{id:"5-code-overview"},"5. Code overview"),(0,r.kt)("p",null,"Basic structure to consume from the camera client in an async fashion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from farm_ng.oak.client import OakCameraClient, OakCameraClientConfig\nfrom farm_ng.oak import oak_pb2\n\nasync def main(address: str, port: int, stream_every_n: int) -> None:\n\n    # configure the camera client\n    config = OakCameraClientConfig(address=address, port=port)\n    client = OakCameraClient(config)\n\n    # get the streaming object\n    response_stream = client.stream_frames(every_n=stream_every_n)\n\n    # start the streaming service\n    await client.connect_to_service()\n\n    while True:\n        # query the service state\n        state: oak_pb2.OakServiceState = await client.get_state()\n\n        if state.value != oak_pb2.OakServiceState.RUNNING:\n            print("Camera is not streaming!")\n            continue\n\n        response: oak_pb2.StreamFramesReply = await response_stream.read()\n        if response and response.status == oak_pb2.ReplyStatus.OK:\n            # get the sync frame\n            frame: oak_pb2.OakSyncFrame = response.frame\n            print(f"Got frame: {frame.sequence_num}")\n            print(f"Device info: {frame.device_info}")\n            print("#################################\\n")\n\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="amiga-camera-app")\n    parser.add_argument("--port", type=int, required=True, help="The camera port.")\n    parser.add_argument("--address", type=str, default="localhost", help="The camera address")\n    parser.add_argument("--stream-every-n", type=int, default=4, help="Streaming frequency")\n    args = parser.parse_args()\n\n    asyncio.run(main(args.address, args.port, args.stream_every_n))\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We highgly recommend to have some basic knowledge about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"asyncio"))),".")))}c.isMDXComponent=!0}}]);