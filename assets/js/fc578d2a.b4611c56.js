"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[9245],{65173:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=s(74848),r=s(28453);const a={id:"sdk-barley-migration",title:"Migration Guide to Amiga OS 2.0"},t="Migration Guide to Amiga OS 2.0",c={id:"brain/sdk-barley-migration",title:"Migration Guide to Amiga OS 2.0",description:"Preamble",source:"@site/docs/brain/sdk-barley-migration.mdx",sourceDirName:"brain",slug:"/brain/sdk-barley-migration",permalink:"/docs/brain/sdk-barley-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/brain/sdk-barley-migration.mdx",tags:[],version:"current",frontMatter:{id:"sdk-barley-migration",title:"Migration Guide to Amiga OS 2.0"},sidebar:"Developer",previous:{title:"Custom Apps / Services Troubleshooting",permalink:"/docs/brain/custom-troubleshooting"},next:{title:"Amiga ROS Bridge",permalink:"/docs/brain/ros-bridge"}},o={},l=[{value:"Preamble",id:"preamble",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Migration Steps",id:"migration-steps",level:2},{value:"Update the Amiga Brain SDK",id:"update-the-amiga-brain-sdk",level:3},{value:"Service API",id:"service-api",level:3},{value:"Example: Kivy camera streamer api",id:"example-kivy-camera-streamer-api",level:2},{value:"Update the package",id:"update-the-package",level:3},{value:"Update the dependencies",id:"update-the-dependencies",level:3},{value:"Update the code",id:"update-the-code",level:3},{value:"Porting Virtual Joystick",id:"porting-virtual-joystick",level:2},{value:"farm-ng Imports",id:"farm-ng-imports",level:3},{value:"Defining Clients",id:"defining-clients",level:3},{value:"Creating Clients",id:"creating-clients",level:3},{value:"asyncio Tasks",id:"asyncio-tasks",level:3},{value:"Streaming Cameras",id:"streaming-cameras",level:3},{value:"Sending CAN Messages",id:"sending-can-messages",level:3},{value:"Running the program",id:"running-the-program",level:3},{value:"service_config.json",id:"service_configjson",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"migration-guide-to-amiga-os-20",children:"Migration Guide to Amiga OS 2.0"})}),"\n",(0,i.jsx)(n.h2,{id:"preamble",children:"Preamble"}),"\n",(0,i.jsxs)(n.p,{children:["On November 2023, we released ",(0,i.jsx)(n.strong,{children:"Amiga OS 2.0 Barley"}),", which is a major update to the Amiga OS 1.0 Artichoke. This update includes a number of breaking changes to the Amiga OS 1.0 Artichoke API."]}),"\n",(0,i.jsxs)(n.p,{children:["This guide will help you migrate your code from Amiga OS 1.0 Artichoke to Amiga OS 2.0 Barley. For more information about the Amiga OS 2.0 Barley release, please see the ",(0,i.jsx)(n.a,{href:"/docs/release-notes/release-02",children:(0,i.jsx)(n.strong,{children:"release notes"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"This guide assumes that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You have knowledge of the Amiga OS 1.0 Artichoke API."}),"\n",(0,i.jsx)(n.li,{children:"You have an Amiga Brain running Amiga OS 2.0 Barley."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"migration-steps",children:"Migration Steps"}),"\n",(0,i.jsx)(n.h3,{id:"update-the-amiga-brain-sdk",children:"Update the Amiga Brain SDK"}),"\n",(0,i.jsx)(n.p,{children:"With the release of Amiga OS 2.0 Barley, we have also released a new version of the Amiga Brain SDK. This new version of the SDK contains the new Amiga OS 2.0 Barley API including new features and breaking changes for the following python packages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-core/releases/tag/v2.0.0",children:(0,i.jsx)(n.code,{children:"farm_ng_core"})}),"  latest version is ",(0,i.jsx)(n.code,{children:"2.0.0"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/releases/tag/v2.0.0",children:(0,i.jsx)(n.code,{children:"farm_ng_amiga"})})," latest version is ",(0,i.jsx)(n.code,{children:"2.0.0"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"service-api",children:"Service API"}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.code,{children:"farm-ng-core"})," we have introduced a new service API. This API is used to communicate with the Amiga Brain services. The service API is a framework that allows you to create service clients and service servers and share protobuf messages between them."]}),"\n",(0,i.jsx)(n.p,{children:"In particular, we have introduced the new main classes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-core/blob/75c13325a156613f6c60b9c517f1ef8b87e8cace/py/farm_ng/core/event_service.py#L67",children:(0,i.jsx)(n.code,{children:"EventServiceGrpc"})})," This class is used to publish events to the Amiga Brain network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-core/blob/75c13325a156613f6c60b9c517f1ef8b87e8cace/py/farm_ng/core/event_client.py#L66",children:(0,i.jsx)(n.code,{children:"EventClient"})})," This class is used to subscribe to events from the Amiga Brain network."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We recommend to visit the following tutorials to learn more about the new service API:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/examples/service_client",children:(0,i.jsx)(n.strong,{children:"Service Client"})}),": This tutorial will show you how to create a service client to communicate with the Amiga Brain services."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/examples/service_counter",children:(0,i.jsx)(n.strong,{children:"Service Counter"})}),": A bit more advanced tutorial that will show you how to create a service client to create a service that counts the number of times it has been called."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-kivy-camera-streamer-api",children:"Example: Kivy camera streamer api"}),"\n",(0,i.jsxs)(n.p,{children:["In this example we will show you how to migrate the ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/camera-streamer-kivy",children:(0,i.jsx)(n.strong,{children:"Kivy camera streamer"})})," example using the new service API."]}),"\n",(0,i.jsx)(n.h3,{id:"update-the-package",children:"Update the package"}),"\n",(0,i.jsxs)(n.p,{children:["In order to use the new application within the brain, we have to include\nthe ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/camera-streamer-kivy/blob/2d701d8e79ca331e1afe0c9838a562a43371e2f4/install.sh",children:(0,i.jsx)(n.code,{children:"install.sh"})}),", ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/camera-streamer-kivy/blob/main/uninstall.sh",children:(0,i.jsx)(n.code,{children:"uninstall.sh"})})," and ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/camera-streamer-kivy/blob/main/manifest.json",children:(0,i.jsx)(n.code,{children:"manifest.json"})})," files in the root of the package."]}),"\n",(0,i.jsxs)(n.p,{children:["We suggest to follow the ",(0,i.jsx)(n.a,{href:"/docs/brain/brain-apps-kivy",children:(0,i.jsx)(n.strong,{children:"Amiga Brain SDK"})})," guide to learn more about how to create a package for the Amiga Brain."]}),"\n",(0,i.jsx)(n.h3,{id:"update-the-dependencies",children:"Update the dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["As mentioned before, we have to update the dependencies to use the new version of the ",(0,i.jsx)(n.code,{children:"farm_ng_core"})," and ",(0,i.jsx)(n.code,{children:"farm_ng_amiga"})," packages:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install -U farm_ng_core farm_ng_amiga\n"})}),"\n",(0,i.jsx)(n.p,{children:"check the version of the packages:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip list | grep -E 'farm-ng|farm_ng'\n# farm-ng-amiga 2.0.0\n# farm-ng-core 2.0.0\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, make sure that in the ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/camera-streamer-kivy/blob/2d701d8e79ca331e1afe0c9838a562a43371e2f4/setup.cfg",children:(0,i.jsx)(n.code,{children:"setup.cfg"})}),", the ",(0,i.jsx)(n.code,{children:"farm_ng_core"})," and ",(0,i.jsx)(n.code,{children:"farm_ng_amiga"})," packages are pointing to the latest version:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"install_requires =\n    wheel\n    kivy\n    farm_ng_amiga>=2.0.0\n    farm_ng_core>=2.0.0\n    kornia-rs\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-the-code",children:"Update the code"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/camera-streamer-kivy/blob/2d701d8e79ca331e1afe0c9838a562a43371e2f4/src/main.py",children:(0,i.jsx)(n.code,{children:"main.py"})})," file we have to import the new service API:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from farm_ng.core.event_client import EventClient\nfrom farm_ng.core.event_service_pb2 import EventServiceConfig\nfrom farm_ng.core.event_service_pb2 import EventServiceConfigList\nfrom farm_ng.core.event_service_pb2 import SubscribeRequest\nfrom farm_ng.core.events_file_reader import proto_from_json_file\nfrom farm_ng.core.uri_pb2 import Uri\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Later, in the implementation of the coroutine ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/camera-streamer-kivy/blob/2d701d8e79ca331e1afe0c9838a562a43371e2f4/src/main.py#L85C3-L102C25",children:(0,i.jsx)(n.code,{children:"stream_camera"})}),", we have to create a new ",(0,i.jsx)(n.code,{children:"EventClient"})," to leverage the new ",(0,i.jsx)(n.code,{children:"subscribe"})," API to subscribe to the camera events in an asynchronous fashion."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that we can configure the subscription via the ",(0,i.jsx)(n.code,{children:"SubscribeRequest"})," message. In this case, we are subscribing to the ",(0,i.jsx)(n.code,{children:"/rgb"})," topic and we are requesting to receive every ",(0,i.jsx)(n.code,{children:"n"})," messages."]}),"\n",(0,i.jsxs)(n.p,{children:["The block below should reflect how to use the new ",(0,i.jsx)(n.code,{children:"EventClient"})," API:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'  async def stream_camera(\n        self, view_name: Literal["rgb", "disparity", "left", "right"] = "rgb"\n    ) -> None:\n        while self.root is None:\n            await asyncio.sleep(0.01)\n\n        async for _, message in EventClient(self.service_config).subscribe(\n            SubscribeRequest(\n                uri=Uri(path=f"/{view_name}"), every_n=self.stream_every_n\n            ),\n            decode=True,\n        ):\n            try:\n                img = self.image_decoder.decode(message.image_data)\n            except Exception as e:\n                logger.exception(f"Error decoding image: {e}")\n                continue\n'})}),"\n",(0,i.jsx)(n.p,{children:"Once you are done and launch the app, you should see the following:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/5157099/16ae3485-66c2-4b28-8f44-e8457f235689",alt:"Screenshot from 2023-12-01 17-50-01"})}),"\n",(0,i.jsx)(n.h2,{id:"porting-virtual-joystick",children:"Porting Virtual Joystick"}),"\n",(0,i.jsx)(n.p,{children:"This tutorial will walk you though porting form Amiga OS 1.0 Artichoke to Amiga OS 2.0 Barley"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we will walk through porting the ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/virtual-joystick-v2",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"virtual-joystick"})})}),"\nfrom the OS 1.0 to OS 2.0."]}),"\n",(0,i.jsxs)(n.p,{children:["This functions as an example for changes you should make in your custom application to port them from 1.0 to 2.0.\nNot all changes will be identical, however, we have many examples for new service structure here:\n",(0,i.jsx)(n.a,{href:"/docs/examples/examples-index#brain-adk-examples",children:(0,i.jsx)(n.strong,{children:"Brain Examples"})})]}),"\n",(0,i.jsx)(n.h3,{id:"farm-ng-imports",children:"farm-ng Imports"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 1.0"})}),(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 2.0"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import grpc\nfrom farm_ng.canbus import canbus_pb2\nfrom farm_ng.canbus.canbus_client import CanbusClient\nfrom farm_ng.canbus.packet import AmigaControlState\nfrom farm_ng.canbus.packet import AmigaTpdo1\nfrom farm_ng.canbus.packet import make_amiga_rpdo1_proto\nfrom farm_ng.canbus.packet import parse_amiga_tpdo1_proto\nfrom farm_ng.oak import oak_pb2\nfrom farm_ng.oak.camera_client import OakCameraClient\nfrom farm_ng.service import service_pb2\nfrom farm_ng.service.service_client import ClientConfig\n"})})})}),(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from farm_ng.canbus.canbus_pb2 import Twist2d\nfrom farm_ng.canbus.packet import AmigaControlState\nfrom farm_ng.canbus.packet import AmigaTpdo1\nfrom farm_ng.core.event_client import EventClient\nfrom farm_ng.core.event_service_pb2 import EventServiceConfig\nfrom farm_ng.core.event_service_pb2 import EventServiceConfigList\nfrom farm_ng.core.event_service_pb2 import SubscribeRequest\nfrom farm_ng.core.events_file_reader import payload_to_protobuf\nfrom farm_ng.core.events_file_reader import proto_from_json_file\nfrom farm_ng.core.uri_pb2 import Uri\n"})})})})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["With this update, ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-core",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"farm-ng-core"})})})," was largely\nrefactored to make subscribing to services more simple."]}),"\n",(0,i.jsx)(n.h3,{id:"defining-clients",children:"Defining Clients"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 1.0"})}),(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 2.0"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"  def __init__(\n      self,\n        address: str,\n        camera_port: int,\n        canbus_port: int,\n        stream_every_n: int\n  ) -> None:\n      super().__init__()\n      self.address: str = address\n\n      self.camera_port: int = camera_port\n      self.canbus_port: int = canbus_port\n      self.stream_every_n: int = stream_every_n\n"})})})}),(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"  def __init__(\n      self,\n      service_config: EventServiceConfig,\n  ) -> None:\n      super().__init__()\n\n      self.counter: int = 0\n      self.service_config = service_config\n"})})})})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["Now, rather than specifying the ports for the camera and canbus through command line arguments,\nthey are included in a file called ",(0,i.jsx)(n.code,{children:"service_config.json"}),". This file contains all the metadata for\nthe individual services. The ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/virtual-joystick-v2/blob/main/service_config.json",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"service_config.json"})})}),"\nencapsulates all of the services used by your custom application."]}),"\n",(0,i.jsx)(n.h3,{id:"creating-clients",children:"Creating Clients"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 1.0"})}),(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 2.0"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"camera_config: ClientConfig = ClientConfig(\n    address=self.address, port=self.camera_port\n)\ncamera_client: OakCameraClient = OakCameraClient(camera_config)\n\n# configure the canbus client\ncanbus_config: ClientConfig = ClientConfig(\n    address=self.address, port=self.canbus_port\n)\ncanbus_client: CanbusClient = CanbusClient(canbus_config)\n"})})})}),(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'config_list = proto_from_json_file(\n    self.service_config, EventServiceConfigList()\n)\n\noak0_client: EventClient | None = None\ncanbus_client: EventClient | None = None\n\nfor config in config_list.configs:\n    if config.name == "oak0":\n        oak0_client = EventClient(config)\n    elif config.name == "canbus":\n        canbus_client = EventClient(config)\n'})})})})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["Rather than accepting metadata for each service as parameters to the class, all of the clients are\ndefined by the config file. Additionally, all of the clients use the generic ",(0,i.jsx)(n.code,{children:"EventClient"})," class\nrather than service specific client classes (eg. ",(0,i.jsx)(n.code,{children:"OakCameraClient"})," and ",(0,i.jsx)(n.code,{children:"CanbusClient"})," no longer exist)"]}),"\n",(0,i.jsx)(n.h3,{id:"asyncio-tasks",children:"asyncio Tasks"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 1.0"})}),(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 2.0"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"self.async_tasks.append(\n    asyncio.ensure_future(self.stream_camera(camera_client))\n)\n\n# Canbus task(s)\nself.async_tasks.append(\n    asyncio.ensure_future(self.stream_canbus(canbus_client))\n)\nself.async_tasks.append(\n    asyncio.ensure_future(self.send_can_msgs(canbus_client))\n)\n"})})})}),(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"self.tasks: list[asyncio.Task] = [\n    asyncio.create_task(self.stream_camera(oak0_client, view_name))\n    for view_name in self.STREAM_NAMES\n]\n\nself.tasks.append(asyncio.create_task(self.pose_generator(canbus_client)))\n\n"})})})})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we subscribe to each of the camera streams, however, if you only need one,\nthe for loop ",(0,i.jsx)(n.code,{children:"for view_name om self.STREAM_NAMES"})," is not required."]}),"\n",(0,i.jsx)(n.h3,{id:"streaming-cameras",children:"Streaming Cameras"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 1.0"})}),(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 2.0"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'async def stream_camera(self, client: OakCameraClient) -> None:\n    """This task listens to the camera client\'s stream and\n    populates the tabbed panel with all 4 image streams\n    from the oak camera."""\n    while self.root is None:\n        await asyncio.sleep(0.01)\n\n    response_stream = None\n\n    while True:\n        # check the state of the service\n        state = await client.get_state()\n\n        if state.value not in [\n            service_pb2.ServiceState.IDLE,\n            service_pb2.ServiceState.RUNNING,\n        ]:\n            # Cancel existing stream, if it exists\n            if response_stream is not None:\n                response_stream.cancel()\n                response_stream = None\n            print("Camera service is not streaming or ready to stream")\n            await asyncio.sleep(0.1)\n            continue\n\n        # Create the stream\n        if response_stream is None:\n            response_stream = client.stream_frames(every_n=1)\n\n        try:\n            # try/except so app doesn\'t crash on killed service\n            response: oak_pb2.StreamFramesReply = await response_stream.read()\n            assert response and response != grpc.aio.EOF, "End of stream"\n        except Exception as e:\n            print(e)\n            response_stream.cancel()\n            response_stream = None\n            continue\n\n        # get the sync frame\n        frame: oak_pb2.OakSyncFrame = response.frame\n\n        # get image and show\n        for view_name in ["rgb", "disparity", "left", "right"]:\n            # Skip if view_name was not included in frame\n            try:\n                # Decode the image and render it in the correct kivy texture\n                img = self.image_decoder.decode(\n                    getattr(frame, view_name).image_data\n                )\n'})})})}),(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'async def stream_camera(\n    self,\n    oak_client: EventClient,\n    view_name: Literal["rgb", "disparity", "left", "right"] = "rgb",\n) -> None:\n\n    while self.root is None:\n        await asyncio.sleep(0.01)\n\n    rate = oak_client.config.subscriptions[0].every_n\n\n    async for event, payload in oak_client.subscribe(\n        SubscribeRequest(\n            uri=Uri(path=f"/{view_name}"), every_n=rate\n        ),\n        decode=False,\n    ):\n        if view_name == self.view_name:\n            message = payload_to_protobuf(event, payload)\n            try:\n                img = self.image_decoder.decode(message.image_data)\n            except Exception as e:\n                logger.exception(f"Error decoding image: {e}")\n                continue\n'})})})})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["In OS 2.0, the method .subscribe() from the\n",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-core/blob/main/py/farm_ng/core/event_client.py#L68",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"EventClient"})})}),"\nclass to subscribe to various services."]}),"\n",(0,i.jsx)(n.h3,{id:"sending-can-messages",children:"Sending CAN Messages"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 1.0"})}),(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 2.0"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'async def stream_canbus(self, client: CanbusClient) -> None:\n    """This task:\n    - listens to the canbus client\'s stream\n    - filters for AmigaTpdo1 messages\n    - extracts useful values from AmigaTpdo1 messages\n    """\n    while self.root is None:\n        await asyncio.sleep(0.01)\n\n    response_stream = None\n\n    while True:\n        # check the state of the service\n        state = await client.get_state()\n\n        if state.value not in [\n            service_pb2.ServiceState.IDLE,\n            service_pb2.ServiceState.RUNNING,\n        ]:\n            if response_stream is not None:\n                response_stream.cancel()\n                response_stream = None\n\n            print("Canbus service is not streaming or ready to stream")\n            await asyncio.sleep(0.1)\n            continue\n\n        if (\n            response_stream is None\n            and state.value != service_pb2.ServiceState.UNAVAILABLE\n        ):\n            # get the streaming object\n            response_stream = client.stream()\n\n        try:\n            # try/except so app doesn\'t crash on killed service\n            response: canbus_pb2.StreamCanbusReply = await response_stream.read()\n            assert response and response != grpc.aio.EOF, "End of stream"\n        except Exception as e:\n            print(e)\n            response_stream.cancel()\n            response_stream = None\n            continue\n\n        for proto in response.messages.messages:\n            amiga_tpdo1: Optional[AmigaTpdo1] = parse_amiga_tpdo1_proto(proto)\n            if amiga_tpdo1:\n                # Store the value for possible other uses\n                self.amiga_tpdo1 = amiga_tpdo1\n\n                # Update the Label values as they are received\n                self.amiga_state = AmigaControlState(amiga_tpdo1.state).name[6:]\n                self.amiga_speed = str(amiga_tpdo1.meas_speed)\n                self.amiga_rate = str(amiga_tpdo1.meas_ang_rate)\n\nasync def send_can_msgs(self, client: CanbusClient) -> None:\n    """This task ensures the canbus client sendCanbusMessage\n    method has the pose_generator it will use to send\n    messages on the CAN bus to control the Amiga robot."""\n    while self.root is None:\n        await asyncio.sleep(0.01)\n\n    response_stream = None\n    while True:\n        # check the state of the service\n        state = await client.get_state()\n\n        # Wait for a running CAN bus service\n        if state.value != service_pb2.ServiceState.RUNNING:\n            # Cancel existing stream, if it exists\n            if response_stream is not None:\n                response_stream.cancel()\n                response_stream = None\n            print("Waiting for running canbus service...")\n            await asyncio.sleep(0.1)\n            continue\n\n        if response_stream is None:\n            print("Start sending CAN messages")\n            response_stream = client.stub.sendCanbusMessage(self.pose_generator())\n\n        try:\n            async for response in response_stream:\n                # Sit in this loop and wait until canbus service reports back it is not sending\n                assert response.success\n        except Exception as e:\n            print(e)\n            response_stream.cancel()\n            response_stream = None\n            continue\n\n        await asyncio.sleep(0.1)\n\nasync def pose_generator(self, period: float = 0.02):\n    """The pose generator yields an AmigaRpdo1\n    (auto control command) for the canbus client\n    to send on the bus at the specified period\n    (recommended 50hz) based on the onscreen joystick\n    position."""\n    while self.root is None:\n        await asyncio.sleep(0.01)\n\n    joystick: VirtualJoystickWidget = self.root.ids["joystick"]\n    while True:\n        msg: canbus_pb2.RawCanbusMessage = make_amiga_rpdo1_proto(\n            state_req=AmigaControlState.STATE_AUTO_ACTIVE,\n            cmd_speed=self.max_speed * joystick.joystick_pose.y,\n            cmd_ang_rate=self.max_angular_rate * -joystick.joystick_pose.x,\n        )\n        yield canbus_pb2.SendCanbusMessageRequest(message=msg)\n        await asyncio.sleep(period)\n'})})})}),(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'async def pose_generator(self, canbus_client: EventClient):\n    """The pose generator yields an AmigaRpdo1 (auto control command)\n    for the canbus client to send on the bus\n    at the specified period (recommended 50hz)\n    based on the onscreen joystick position."""\n    while self.root is None:\n        await asyncio.sleep(0.01)\n\n    twist = Twist2d()\n\n    joystick: VirtualJoystickWidget = self.root.ids["joystick"]\n\n    rate = canbus_client.config.subscriptions[0].every_n\n\n    async for event, payload in canbus_client.subscribe(\n        SubscribeRequest(uri=Uri(path="/state"), every_n=rate),\n        decode=False,\n    ):\n        message = payload_to_protobuf(event, payload)\n        tpdo1 = AmigaTpdo1.from_proto(message.amiga_tpdo1)\n\n        twist.linear_velocity_x = self.max_speed * joystick.joystick_pose.y\n        twist.angular_velocity = self.max_angular_rate * -joystick.joystick_pose.x\n\n        self.amiga_state = tpdo1.state.name\n        self.amiga_speed = "{:.4f}".format(twist.linear_velocity_x)\n        self.amiga_rate = "{:.4f}".format(twist.angular_velocity)\n\n        await canbus_client.request_reply("/twist", twist)\n'})})})})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["In OS 2.0, receiving and sending CAN messages might have the biggest simplification.\nRather than using the two methods, stream_canbus() and send_can_msgs() in OS 1.0,\nin OS 2.0, we use request_reply() method to send twist2d() messages. More info\nabout the new canbus service can be found here: ",(0,i.jsx)(n.a,{href:"/docs/concepts/canbus_service/",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"canbus service"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"running-the-program",children:"Running the program"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 1.0"})}),(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"OS 2.0"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'if __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="virtual-joystick")\n    parser.add_argument(\n        "--address", type=str, default="localhost", help="The server address"\n    )\n    parser.add_argument(\n        "--camera-port",\n        type=int,\n        required=True,\n        help="The grpc port where the camera service is running.",\n    )\n    parser.add_argument(\n        "--canbus-port",\n        type=int,\n        required=True,\n        help="The grpc port where the canbus service is running.",\n    )\n    parser.add_argument(\n        "--stream-every-n",\n        type=int,\n        default=1,\n        help="Streaming frequency (used to skip frames)",\n    )\n\n    args = parser.parse_args()\n\n    loop = asyncio.get_event_loop()\n    try:\n        loop.run_until_complete(\n            VirtualJoystickApp(\n                args.address, args.camera_port, args.canbus_port, args.stream_every_n\n            ).app_func()\n        )\n    except asyncio.CancelledError:\n        pass\n    loop.close()\n'})})})}),(0,i.jsx)("td",{children:(0,i.jsx)("div",{align:"left",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'if __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="template-app")\n\n    # Add additional command line arguments here\n    parser.add_argument("--service-config", type=Path, default="service_config.json")\n\n    args = parser.parse_args()\n\n    loop = asyncio.get_event_loop()\n\n    try:\n        loop.run_until_complete(KivyVirtualJoystick(args.service_config).app_func())\n    except asyncio.CancelledError:\n        pass\n    loop.close()\n'})})})})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["Using the ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/virtual-joystick-v2/blob/main/service_config.json",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"service_config.json"})})}),"\nfile allows us to specify all of the service metadata within the .json file rather than from the command line."]}),"\n",(0,i.jsx)(n.h3,{id:"service_configjson",children:(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/virtual-joystick-v2/blob/main/service_config.json",children:"service_config.json"})}),"\n",(0,i.jsxs)(n.p,{children:["By editing the this .json file to include the ",(0,i.jsx)(n.a,{href:"/docs/concepts/",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"services"})})})," required by your application."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(96540);const r={},a=i.createContext(r);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);