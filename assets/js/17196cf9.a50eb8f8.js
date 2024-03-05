"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[4377],{8199:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=s(5893),r=s(1151);const a={id:"service-propagation",title:"Service Propagation"},t=void 0,o={id:"examples/service_propagation/service-propagation",title:"Service Propagation",description:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:",source:"@site/docs/examples/service_propagation/README.md",sourceDirName:"examples/service_propagation",slug:"/examples/service_propagation/",permalink:"/docs/examples/service_propagation/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/service_propagation/README.md",tags:[],version:"current",frontMatter:{id:"service-propagation",title:"Service Propagation"},sidebar:"examples",previous:{title:"Service Counter",permalink:"/docs/examples/service_counter/"},next:{title:"Monitor App",permalink:"/docs/examples/monitor_app/"}},c={},l=[{value:"Requirements",id:"requirements",level:3},{value:"Service configuration",id:"service-configuration",level:3},{value:"Run the example",id:"run-the-example",level:2},{value:"1. Run the storage service",id:"1-run-the-storage-service",level:3},{value:"2. Run the supervisor services",id:"2-run-the-supervisor-services",level:3},{value:"3. Run the agent services",id:"3-run-the-agent-services",level:3},{value:"Expected output",id:"expected-output",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,i.jsx)(n.p,{children:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Python Programming"}),": It's important to have a good grasp of Python, especially with concepts\nlike ",(0,i.jsx)(n.code,{children:"functions"}),", ",(0,i.jsx)(n.code,{children:"loops"}),", and ",(0,i.jsx)(n.code,{children:"classes"}),", since the example utilizes these fundamentals."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Asynchronous Programming with asyncio"}),": Familiarity with Python's asyncio for writing concurrent\ncode using the ",(0,i.jsx)(n.code,{children:"async/await"})," syntax."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/service_propagation",children:(0,i.jsx)(n.strong,{children:"Service Propagation"})}),"\nexample, we will show how create a subsystem of services that can be\ncomposed together to create a more complex system and leverage bidirectional\ncommunication between services to propagate information."]}),"\n",(0,i.jsxs)(n.p,{children:["In particular, we will create an ",(0,i.jsx)(n.code,{children:"Agent"})," service that will have several\ntasks running concurrently sampling data from different tasks. The ",(0,i.jsx)(n.code,{children:"Agent"}),"\nservice will publish the data from the tasks at fixed rate to a ",(0,i.jsx)(n.code,{children:"/sample"})," path\nthat will be subscribed by a ",(0,i.jsx)(n.code,{children:"Supervisor"})," service."]}),"\n",(0,i.jsxs)(n.p,{children:["At the same time, the ",(0,i.jsx)(n.code,{children:"Agent"})," service will listen to a ",(0,i.jsx)(n.code,{children:"/update_residual"})," path\nto receive the residual value from another the ",(0,i.jsx)(n.code,{children:"Supervisor"})," service."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class AgentServer:\n    def __init__(self, event_service: EventServiceGrpc) -> None:\n        """Initialize the service.\n        Args:\n            event_service: The event service to use for communication.\n        """\n        self._event_service = event_service\n        self._event_service.add_request_reply_handler(self.request_reply_handler)\n\n        args: dict[str, float] = {}\n        for arg in self._event_service.config.args:\n            key, value = arg.split("=")\n            args[key] = value\n\n        # the rate in hertz to send commands\n        self._rate = float(args["rate"])\n        self._num_tasks = int(args["num_tasks"])\n\n        self._remainder: int = 1e6\n\n    async def request_reply_handler(self, event: Event, message) -> None:\n        """The callback for handling request/reply messages."""\n        if event.uri.path == "/update_residual":\n            self._remainder = message.value\n            self._event_service.logger.info(f"Remainder: {self._remainder}")\n\n        return Empty()\n\n    async def run_task(self, task_id: int) -> None:\n        """Run the main task."""\n        while True:\n            if self._remainder <= 0:\n                await asyncio.sleep(0.01)\n                continue\n\n            message = Struct()\n            message["sample"] = random.random()\n            message["task_id"] = task_id\n\n            await self._event_service.publish("/sample", message)\n            await asyncio.sleep(1.0 / self._rate)\n            print(f"Published sample {message[\'sample\']} from task {task_id}")\n\n    async def serve(self) -> None:\n        """Run the service."""\n        tasks: list[asyncio.Task] = [asyncio.create_task(self.run_task(i)) for i in range(self._num_tasks)]\n        await asyncio.gather(self._event_service.serve(), *tasks)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In addition, we will create a ",(0,i.jsx)(n.code,{children:"SupervisorServer"})," service that will be subscribed to the ",(0,i.jsx)(n.code,{children:"/sample"}),"\npath of the ",(0,i.jsx)(n.code,{children:"Agent"})," service. The ",(0,i.jsx)(n.code,{children:"SupervisorServer"})," will listen to the samples and send a request\nupdate to the ",(0,i.jsx)(n.code,{children:"StorageServer"})," service when the sample is above a certain confidence threshold."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class SupervisorServer:\n    def __init__(self, event_service: EventServiceGrpc, config_list: EventServiceConfigList) -> None:\n        """Initialize the service.\n        Args:\n            event_service: The event service to use for communication.\n        """\n        self._event_service = event_service\n\n        self._clients: dict[str, EventClient] = {\n            config.name: EventClient(config)\n            for config in config_list.configs\n            if config.name != event_service.config.name\n        }\n\n        args: dict[str, float] = {}\n        for arg in self._event_service.config.args:\n            key, value = arg.split("=")\n            args[key] = value\n\n        # the rate in hertz to send commands\n        self._confidence = float(args["confidence"])\n\n    async def subscribe(self, subscripton) -> None:\n        """Run the main task."""\n        # create the event client\n        service_name = subscripton.uri.query.split("=")[-1]\n        client = self._clients[service_name]\n\n        async for event, message in client.subscribe(subscripton, decode=True):\n            if message["sample"] > self._confidence:\n                residual = await self._clients["storage"].request_reply("/update_storage", Empty(), decode=True)\n                self._event_service.logger.info(f"Residual: {residual}")\n                await client.request_reply("/update_residual", residual)\n\n    async def serve(self) -> None:\n        """Run the service."""\n        tasks: list[asyncio.Task] = []\n        for subscription in self._event_service.config.subscriptions:\n            tasks.append(asyncio.create_task(self.subscribe(subscription)))\n        await asyncio.gather(self._event_service.serve(), *tasks)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The last service we will create is a ",(0,i.jsx)(n.code,{children:"StorageServer"})," service that will be listening\nto the ",(0,i.jsx)(n.code,{children:"/update_storage"})," path. The ",(0,i.jsx)(n.code,{children:"StorageServer"})," will keep track of the storage\ncapacity and will remove from storage at fixed rate."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class StorageServer:\n    def __init__(self, event_service: EventServiceGrpc) -> None:\n        """Initialize the service.\n        Args:\n            event_service: The event service to use for communication.\n        """\n        self._event_service = event_service\n        self._event_service.add_request_reply_handler(self.request_reply_handler)\n\n        self._storage: int = 0\n\n        args: dict[str, float] = {}\n        for arg in self._event_service.config.args:\n            key, value = arg.split("=")\n            args[key] = value\n\n        # the maximum storage capacity\n        self._max_storage = int(args["max_storage"])\n\n        # the batch size to remove from storage\n        self._batch_size = int(args["batch_size"])\n\n    async def request_reply_handler(self, event: Event, message: Empty) -> None:\n        """The callback for handling request/reply messages."""\n        if event.uri.path == "/update_storage":\n            self._storage += 1\n            residual: int = self._max_storage - self._storage\n            self._event_service.logger.info(\n                f"Storage: {self._storage}/{self._max_storage} ({residual} remaining)")\n            return Int32Value(value=residual)\n\n        return Empty()\n\n    async def remove_from_storage(self) -> None:\n        """Remove from storage."""\n        while True:\n\n            if self._storage < self._batch_size:\n                await asyncio.sleep(0.05)\n                continue\n\n            self._storage -= self._batch_size\n\n            self._event_service.logger.info(f"Removed from storage: {self._batch_size}/{self._max_storage}")\n\n            await asyncio.sleep(0.1)\n\n    async def serve(self) -> None:\n        tasks: list[asyncio.Task] = [\n            asyncio.create_task(self._event_service.serve()),\n            asyncio.create_task(self.remove_from_storage()),\n        ]\n        await asyncio.gather(*tasks)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"This example only requires the farm-ng-core package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip3 install farm-ng-core\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We highly recommend to have some basic knowledge about\n",(0,i.jsx)(n.a,{href:"https://docs.python.org/3/library/asyncio.html",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"asyncio"})})}),",\n",(0,i.jsx)(n.a,{href:"https://grpc.io/docs/what-is-grpc/introduction/",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"gRPC"})})})," and\n",(0,i.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers/docs/pythontutorial",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"protobuf"})})}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"service-configuration",children:"Service configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The service configuration is defined in the ",(0,i.jsx)(n.code,{children:"service_config.json"})," file which describes how each service\ninstance is connected to each other and how they are configured. As an example, the ",(0,i.jsx)(n.code,{children:"agent-1"})," service\nis configured as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "agent-1",\n  "args": [\n    "rate=1.0",\n    "num_tasks=3"\n  ],\n  "subscriptions": [\n    {\n      "uri": "event://supervisor-1/sample?service=agent-1"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"run-the-example",children:"Run the example"}),"\n",(0,i.jsx)(n.h3,{id:"1-run-the-storage-service",children:"1. Run the storage service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python storage.py --service-config service_config.json --service-name storage\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-run-the-supervisor-services",children:"2. Run the supervisor services"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python supervisor.py --service-config service_config.json --service-name supervisor-1\npython supervisor.py --service-config service_config.json --service-name supervisor-2\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-run-the-agent-services",children:"3. Run the agent services"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python agent.py --service-config service_config.json --service-name agent-1\npython agent.py --service-config service_config.json --service-name agent-2\npython agent.py --service-config service_config.json --service-name agent-3\n"})}),"\n",(0,i.jsx)(n.h3,{id:"expected-output",children:"Expected output"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"storage"})," service terminal, you should see the capacity of the storage\nwhich is decreasing as the ",(0,i.jsx)(n.code,{children:"agent"})," services are publishing samples. As soon as\nthe storage capacity is full, the ",(0,i.jsx)(n.code,{children:"agent"})," services will stop publishing samples\nuntil the ",(0,i.jsx)(n.code,{children:"supervisor"})," services request the ",(0,i.jsx)(n.code,{children:"agent"})," services to update the\nresidual value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Storage: 37/500 (463 remaining)\nStorage: 38/500 (462 remaining)\nStorage: 39/500 (461 remaining)\nStorage: 40/500 (460 remaining)\nStorage: 41/500 (459 remaining)\nStorage: 42/500 (458 remaining)\nStorage: 43/500 (457 remaining)\nStorage: 44/500 (456 remaining)\nStorage: 45/500 (455 remaining)\nStorage: 46/500 (454 remaining)\nStorage: 47/500 (453 remaining)\nStorage: 48/500 (452 remaining)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"supervisor"})," service terminal, you should see the residual value\ndecreasing as the ",(0,i.jsx)(n.code,{children:"agent"})," services are publishing samples. As soon as the\nresidual value is zero, the ",(0,i.jsx)(n.code,{children:"supervisor"})," services will request the ",(0,i.jsx)(n.code,{children:"agent"}),"\nservices to update the residual value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"INFO:supervisor-1:Residual: value: 455\n\nResidual: value: 454\n\nINFO:supervisor-1:Residual: value: 454\n\nResidual: value: 453\n\nINFO:supervisor-1:Residual: value: 453\n\nResidual: value: 452\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, in the ",(0,i.jsx)(n.code,{children:"agent"})," service terminal, you should see the samples being\npublished at fixed rate. As soon as the residual value is zero, the ",(0,i.jsx)(n.code,{children:"agent"}),"\nservices will stop publishing samples until the ",(0,i.jsx)(n.code,{children:"supervisor"})," services request\nthe ",(0,i.jsx)(n.code,{children:"agent"})," services to update the residual value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Published sample 0.7213814924044664 from task 1\nPublished sample 0.19269278385883515 from task 2\nPublished sample 0.41566478402029516 from task 3\nPublished sample 0.6616156115367178 from task 4\nPublished sample 0.699833473381781 from task 5\nPublished sample 0.1892017291616711 from task 6\nPublished sample 0.6031618279156414 from task 7\nPublished sample 0.6306753264890216 from task 8\nPublished sample 0.9169593227439662 from task 9\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var i=s(7294);const r={},a=i.createContext(r);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);