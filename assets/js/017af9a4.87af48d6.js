"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9380],{1220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=t(7462),a=(t(7294),t(3905));t(1839);const s={id:"multi-client-subscriber",title:"Multi Client Subscriber"},r=void 0,l={unversionedId:"examples/multi_client_subscriber/multi-client-subscriber",id:"examples/multi_client_subscriber/multi-client-subscriber",title:"Multi Client Subscriber",description:"Link to multiclientsubscriber/main.py",source:"@site/docs/examples/multi_client_subscriber/README.md",sourceDirName:"examples/multi_client_subscriber",slug:"/examples/multi_client_subscriber/",permalink:"/docs/examples/multi_client_subscriber/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/multi_client_subscriber/README.md",tags:[],version:"current",frontMatter:{id:"multi-client-subscriber",title:"Multi Client Subscriber"}},c={},o=[{value:"Link to <code>multi_client_subscriber/main.py</code>",id:"link-to-multi_client_subscribermainpy",level:3},{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:3},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:3},{value:"3. Create a client wrapper",id:"3-create-a-client-wrapper",level:3},{value:"4. Run the client",id:"4-run-the-client",level:2}],u={toc:o};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"link-to-multi_client_subscribermainpy"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/multi_client_subscriber/main.py"},"Link to ",(0,a.kt)("inlineCode",{parentName:"a"},"multi_client_subscriber/main.py"))),(0,a.kt)("p",null,"This is example shows how to create a multi client application that can be subscribed concurrently\nto different services."),(0,a.kt)("p",null,"You can either run this example directly on a brain by ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh"),"'ing in, or use your local PC.\nTo successfully run this example, ensure that a ",(0,a.kt)("a",{parentName:"p",href:"/docs/brain/"},(0,a.kt)("strong",{parentName:"a"},"farm-ng brain"))," running\nthe Canbus and Filter services. Your local PC should be either connected to the same local\nnetwork as the brain or linked to it through tailscale."),(0,a.kt)("h3",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,a.kt)("a",{parentName:"h3",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,a.kt)("h3",{id:"2-install-the-examples-dependencies"},"2. Install the example's dependencies"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# assuming you're already in the amiga-dev-kit/ directory\ncd farm-ng-amiga/py/examples/multi_client_subscriber\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,a.kt)("h3",{id:"3-create-a-client-wrapper"},"3. Create a client wrapper"),(0,a.kt)("p",null,"The first step is to create a client wrapper that will allow us to easily interact with\nthe services. We create a ",(0,a.kt)("inlineCode",{parentName:"p"},"MultiClientSubscriber")," class that will encapsulate a\n",(0,a.kt)("inlineCode",{parentName:"p"},"EventClient")," classes corresponding to each service. The ",(0,a.kt)("inlineCode",{parentName:"p"},"MultiClientSubscriber")," class\nwill have a method called ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," that will allow us to subscribe to the particular\nservice given a ",(0,a.kt)("inlineCode",{parentName:"p"},"SubscribeRequest"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"SubscribeRequest")," contains the URI of the\nservice to subscribe to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class MultiClientSubscriber:\n    """Example of subscribing to events from multiple clients."""\n\n    def __init__(self, service_config: EventServiceConfigList) -> None:\n        """Initialize the multi-client subscriber.\n\n        Args:\n            service_config: The service config.\n        """\n        self.service_config = service_config\n        self.clients: dict[str, EventClient] = {}\n\n        # populate the clients\n        config: EventServiceConfig\n        for config in self.service_config.configs:\n            if not config.port:\n                self.subscriptions = config.subscriptions\n                continue\n            self.clients[config.name] = EventClient(config)\n\n    async def _subscribe(self, subscription: SubscribeRequest) -> None:\n        # the client name is the last part of the query\n        client_name: str = subscription.uri.query.split("=")[-1]\n        client: EventClient = self.clients[client_name]\n        # subscribe to the event\n        # NOTE: set decode to True to decode the message\n        async for event, message in client.subscribe(subscription, decode=False):\n            # decode the message type\n            message_type = event.uri.query.split("&")[0].split("=")[-1]\n            print(f"Received event from {client_name}{event.uri.path}: {message_type}")\n\n    async def run(self) -> None:\n        # start the subscribe routines\n        tasks: list[asyncio.Task] = []\n        for subscription in self.subscriptions:\n            tasks.append(asyncio.create_task(self._subscribe(subscription)))\n        # wait for the subscribe routines to finish\n        await asyncio.gather(*tasks)\n')),(0,a.kt)("p",null,"In addition, we provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file example that contains the configuration of the\nservice. The ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file contains the following fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configs": [\n    {\n      "name": "canbus",\n      "port": 6001,\n      "host": "localhost"\n    },\n    {\n      "name": "filter",\n      "port": 20001,\n      "host": "localhost"\n    },\n    {\n      "name": "multi_subscriber",\n      "subscriptions": [\n        {\n          "uri": {\n            "path": "*",\n            "query": "service_name=canbus"\n          },\n          "every_n": 1\n        },\n        {\n          "uri": {\n            "path": "*",\n            "query": "service_name=filter"\n          },\n          "every_n": 1\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"4-run-the-client"},"4. Run the client"),(0,a.kt)("p",null,"In a terminal, run the client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --config config.json\n")),(0,a.kt)("p",null,"you should see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Received event from filter/state: farm_ng.filter.proto.FilterState\nReceived event from canbus/twist: farm_ng.canbus.proto.Twist2d\nReceived event from canbus/raw_messages: farm_ng.canbus.proto.RawCanbusMessages\nReceived event from canbus/motor_states: farm_ng.canbus.proto.MotorStates\nReceived event from canbus/raw_messages: farm_ng.canbus.proto.RawCanbusMessages\nReceived event from canbus/motor_states: farm_ng.canbus.proto.MotorStates\nReceived event from filter/state: farm_ng.filter.proto.FilterState\nReceived event from filter/state: farm_ng.filter.proto.FilterState\nReceived event from canbus/raw_messages: farm_ng.canbus.proto.RawCanbusMessages\nReceived event from filter/state: farm_ng.filter.proto.FilterState\nReceived event from canbus/health: google.protobuf.Struct\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We highly recommend to have some basic knowledge about\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"asyncio"))),".")))}p.isMDXComponent=!0}}]);