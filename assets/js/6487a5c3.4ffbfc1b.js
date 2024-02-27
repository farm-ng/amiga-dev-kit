"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[4731],{8627:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=i(5893),s=i(1151);const a={id:"multi-client-geoimage",title:"Multi Client GeoImage"},o=void 0,c={id:"examples/multi_client_geoimage/multi-client-geoimage",title:"Multi Client GeoImage",description:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:",source:"@site/docs/examples/multi_client_geoimage/README.md",sourceDirName:"examples/multi_client_geoimage",slug:"/examples/multi_client_geoimage/",permalink:"/docs/examples/multi_client_geoimage/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/multi_client_geoimage/README.md",tags:[],version:"current",frontMatter:{id:"multi-client-geoimage",title:"Multi Client GeoImage"},sidebar:"examples",previous:{title:"Multi Client Subscriber",permalink:"/docs/examples/multi_client_subscriber/"},next:{title:"Service Client",permalink:"/docs/examples/service_client/"}},r={},l=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:3},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:3},{value:"3. Create a client wrapper",id:"3-create-a-client-wrapper",level:3},{value:"4. [Optional] Customize the run",id:"4-optional-customize-the-run",level:2},{value:"5. Run the client",id:"5-run-the-client",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,t.jsx)(n.p,{children:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Python Programming"}),": It's important to have a good grasp of Python, especially with concepts\nlike ",(0,t.jsx)(n.code,{children:"functions"}),", ",(0,t.jsx)(n.code,{children:"loops"}),", and ",(0,t.jsx)(n.code,{children:"classes"}),", since the example utilizes these fundamentals."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Asynchronous Programming with asyncio"}),": Familiarity with Python's asyncio for writing concurrent\ncode using the ",(0,t.jsx)(n.code,{children:"async/await"})," syntax."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/multi_client_geoimage/main.py",children:(0,t.jsx)(n.strong,{children:"Multi Client Geoimage"})}),"\nexample shows how to leverage a multi client application to create a geoimage\nfrom the ",(0,t.jsx)(n.code,{children:"oak"})," and ",(0,t.jsx)(n.code,{children:"gps"})," services. We show how to implement a simple technique to\nsynchronize the images and the gps data."]}),"\n",(0,t.jsxs)(n.p,{children:["You can either run this example directly on a brain by ",(0,t.jsx)(n.code,{children:"ssh"}),"'ing in, or use your local PC.\nTo successfully run this example, ensure that a ",(0,t.jsx)(n.a,{href:"/docs/brain/",children:(0,t.jsx)(n.strong,{children:"farm-ng brain"})})," running\nOak cameras and GPS is active. Your local PC should be either connected to the same local\nnetwork as the brain or linked to it through tailscale."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["We recommend to read first the\n",(0,t.jsx)(n.a,{href:"/docs/examples/multi_client_subscriber",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Multi Client Subscriber"})})})," tutorial."]})}),"\n",(0,t.jsxs)(n.h3,{id:"1-install-the-farm-ng-brain-adk-package",children:["1. Install the ",(0,t.jsx)(n.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,t.jsx)(n.h3,{id:"2-install-the-examples-dependencies",children:"2. Install the example's dependencies"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# assuming you're already in the amiga-dev-kit/ directory\ncd farm-ng-amiga/py/examples/multi_client_geoimage\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip3 install -r requirements.txt\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-create-a-client-wrapper",children:"3. Create a client wrapper"}),"\n",(0,t.jsxs)(n.p,{children:["We first create a ",(0,t.jsx)(n.code,{children:"GeoTaggedImageSubscriber"})," class that will encapsulate\nthe needed clients and the subscriptions. In order to showcase the synchronization\ntechnique, we will also create a queue to store the images since they come\nin faster than we can process them."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class GeoTaggedImageSubscriber:\n    """Example of subscribing to events from multiple clients."""\n\n    def __init__(self, service_config: EventServiceConfigList) -> None:\n        """Initialize the multi-client subscriber.\n\n        Args:\n            service_config: The service config.\n        """\n        self.service_config = service_config\n        self.clients: dict[str, EventClient] = {}\n\n        # populate the clients\n        config: EventServiceConfig\n        for config in self.service_config.configs:\n            if not config.port:\n                self.subscriptions = config.subscriptions\n                continue\n            self.clients[config.name] = EventClient(config)\n\n        # create a queue to store the images since they come in faster than we can process them\n        self.image_queue: asyncio.Queue = asyncio.Queue()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This class will also have a method called ",(0,t.jsx)(n.code,{children:"_subscribe"})," that will allow us to\nsubscribe to the particular service. In the first place, we show how to filter the message type and\nif the message is of type ",(0,t.jsx)(n.code,{children:"farm_ng.oak.proto.OakFrame"})," we store it in the queue.\nIf the message is of type ",(0,t.jsx)(n.code,{children:"farm_ng.gps.proto.GpsFrame"})," we try to find the closest image in the queue."]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we use the ",(0,t.jsx)(n.code,{children:"get_stamp_by_semantics_and_clock_type"})," function to get\nthe timestamp of the event. This function is used to get the timestamp of the event\nbased on the semantics and the clock type. The semantics is the type of event and\nthe clock type is the type of clock used to timestamp the event."]}),"\n",(0,t.jsxs)(n.p,{children:["The threshold used to synchronize the images and the gps data is defined by\nthe ",(0,t.jsx)(n.code,{children:"stamp_diff"})," variable. This threshold depends on the precision of your application."]}),"\n",(0,t.jsxs)(n.p,{children:["For educational purposes, we left a lot of ",(0,t.jsx)(n.code,{children:"print"})," statements in the code to\nvisualize the flow of the program. We recommend to remove them later in your application."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'async def _subscribe(self, subscription: SubscribeRequest) -> None:\n  # the client name is the last part of the query\n  client_name: str = subscription.uri.query.split("=")[-1]\n  client: EventClient = self.clients[client_name]\n  # subscribe to the event\n  async for event, message in client.subscribe(subscription, decode=True):\n      print(f"Received event from {client_name}{event.uri.path}")\n      if isinstance(message, oak_pb2.OakFrame):\n          await self.image_queue.put((event, message))\n      elif isinstance(message, gps_pb2.GpsFrame):\n          stamp_gps = get_stamp_by_semantics_and_clock_type(\n              event, semantics="service/send", clock_type="monotonic"\n          )\n          if stamp_gps is None:\n              continue\n\n          geo_image = None\n\n          while self.image_queue.qsize() > 0:\n              event_image, image = await self.image_queue.get()\n              stamp_image = get_stamp_by_semantics_and_clock_type(\n                  event_image, semantics="service/send", clock_type="monotonic"\n              )\n              if stamp_image is None:\n                  continue\n              stamp_diff = abs(stamp_gps - stamp_image)\n\n              # NOTE: define this threshold depending on the precision of your application\n              if stamp_diff > 0.05:\n                  print(f"Skipping image because stamp_diff is too large: {stamp_diff}")\n                  continue\n              else:\n                  print(f"Synced image and gps data with stamp_diff: {stamp_diff}")\n                  geo_image = ((event_image, image), (event, message))\n                  break\n\n          if geo_image is None:\n              print("Could not sync image and gps data")\n              continue\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In addition, we provide a ",(0,t.jsx)(n.code,{children:"config.json"})," file example that contains the configuration of the\nservice. Notice that we subscribe to the ",(0,t.jsx)(n.code,{children:"oak0"})," and ",(0,t.jsx)(n.code,{children:"gps"})," services,\nin particular to the ",(0,t.jsx)(n.code,{children:"/left"})," and ",(0,t.jsx)(n.code,{children:"/pvt"})," paths respectively."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you want to better understand the different GPS message types,\nmake sure to check this ",(0,t.jsx)(n.a,{href:"/docs/examples/file_reader_gps/",children:"link"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "configs": [\n    {\n      "name": "gps",\n      "port": 3001,\n      "host": "localhost"\n    },\n    {\n      "name": "oak0",\n      "port": 50010,\n      "host": "localhost"\n    },\n    {\n      "name": "multi_subscriber",\n      "subscriptions": [\n        {\n          "uri": {\n            "path": "/left",\n            "query": "service_name=oak0"\n          },\n          "every_n": 2\n        },\n        {\n          "uri": {\n            "path": "/pvt",\n            "query": "service_name=gps"\n          },\n          "every_n": 1\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"4-optional-customize-the-run",children:"4. [Optional] Customize the run"}),"\n",(0,t.jsxs)(n.p,{children:["To run this script from your PC, you need to update the ",(0,t.jsx)(n.code,{children:"service_config.json"}),"\nby modifying the ",(0,t.jsx)(n.code,{children:"host"})," field with your Amiga brain name.\nPlease check out ",(0,t.jsx)(n.a,{href:"/docs/concepts/system_overview/#where-to-run-the-examples",children:"Amiga Development 101"}),"\nfor more details."]}),"\n",(0,t.jsx)(n.h2,{id:"5-run-the-client",children:"5. Run the client"}),"\n",(0,t.jsx)(n.p,{children:"In a terminal, run the client:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python main.py --config config.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"you should see the following output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Received event from gps/pvt\nCould not sync image and gps data\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from gps/pvt\nSkipping image because stamp_diff is too large: 0.3942121310028597\nSkipping image because stamp_diff is too large: 0.2926876120036468\nSkipping image because stamp_diff is too large: 0.1811352020013146\nSynced image and gps data with stamp_diff: 0.07548795500042615\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from gps/pvt\nSkipping image because stamp_diff is too large: 0.3935612499990384\nSkipping image because stamp_diff is too large: 0.3073112889978802\nSkipping image because stamp_diff is too large: 0.20796539900038624\nSkipping image because stamp_diff is too large: 0.10631262399692787\nSynced image and gps data with stamp_diff: 0.00445908099936787\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["We highly recommend to have some basic knowledge about\n",(0,t.jsx)(n.a,{href:"https://docs.python.org/3/library/asyncio.html",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"asyncio"})})}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>o});var t=i(7294);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);