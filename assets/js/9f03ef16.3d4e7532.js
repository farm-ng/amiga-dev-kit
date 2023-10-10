"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7085],{2014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));n(1839);const r={id:"monitor-app",title:"Monitor App"},i=void 0,s={unversionedId:"examples/monitor_app/monitor-app",id:"examples/monitor_app/monitor-app",title:"Monitor App",description:"Building an App: Understanding the Basics",source:"@site/docs/examples/monitor_app/README.md",sourceDirName:"examples/monitor_app",slug:"/examples/monitor_app/",permalink:"/docs/examples/monitor_app/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/monitor_app/README.md",tags:[],version:"current",frontMatter:{id:"monitor-app",title:"Monitor App"},sidebar:"examples",previous:{title:"Using a VNC Viewer",permalink:"/docs/examples/vnc_viewer/"},next:{title:"00 - Introduction",permalink:"/docs/tutorials/introduction/tutorial-introduction"}},l={},p=[{value:"Building an App: Understanding the Basics",id:"building-an-app-understanding-the-basics",level:2},{value:"How They Work Together",id:"how-they-work-together",level:3},{value:"Link to <code>monitor_app/</code>",id:"link-to-monitor_app",level:3},{value:"Backend",id:"backend",level:2},{value:"Link to <code>monitor_app/main.py</code>",id:"link-to-monitor_appmainpy",level:3},{value:"Topics discoverability",id:"topics-discoverability",level:3},{value:"Subscribing to the events",id:"subscribing-to-the-events",level:3},{value:"Frontend",id:"frontend",level:2},{value:"Components",id:"components",level:3},{value:"Setup",id:"setup",level:2},{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:3},{value:"2. Install the backend dependencies",id:"2-install-the-backend-dependencies",level:3},{value:"3. Install the frontend dependencies",id:"3-install-the-frontend-dependencies",level:3},{value:"4. Run the backend",id:"4-run-the-backend",level:3},{value:"5. Run the frontend",id:"5-run-the-frontend",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"building-an-app-understanding-the-basics"},"Building an App: Understanding the Basics"),(0,o.kt)("p",null,"Every modern app typically consists of two main parts: the backend and the frontend.\nLet's dive into what each of these components does and how they interact with each other."),(0,o.kt)("p",null,"Backend:"),(0,o.kt)("p",null,'The backend is like the brain of your app. It processes data, makes calculations,\ncommunicates with databases, and performs all the logical operations.\nWhen you hear terms like "server," "API," or "database," they\'re usually related to the backend.'),(0,o.kt)("p",null,"In our example, we're using FastAPI to build our backend. FastAPI is a modern, high-performance\nweb framework for building APIs. Coupled with the farm-ng brain services, our backend will\nfetch and serve data efficiently and securely to the frontend."),(0,o.kt)("p",null,"Key Points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Handles data processing, storage, and retrieval."),(0,o.kt)("li",{parentName:"ul"},"Communicates with other services and databases."),(0,o.kt)("li",{parentName:"ul"},"Secures data and ensures only authorized users can access it.")),(0,o.kt)("p",null,"Frontend:"),(0,o.kt)("p",null,"The frontend is the part of the app users see and interact with. Think of it as the face of your app.\nIt includes everything that you can touch, click, or interact with:\nbuttons, images, text inputs, animations, and more."),(0,o.kt)("p",null,"For our frontend, we're using React. React is a popular JavaScript library for building\nuser interfaces. It allows developers to create responsive and interactive UI components easily."),(0,o.kt)("p",null,"Key Points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Displays data fetched from the backend."),(0,o.kt)("li",{parentName:"ul"},"Interacts with users, capturing their inputs and preferences."),(0,o.kt)("li",{parentName:"ul"},"Updates in real-time, ensuring users always see the latest data.")),(0,o.kt)("h3",{id:"how-they-work-together"},"How They Work Together"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A user interacts with the frontend (e.g., clicks a button to fetch information)."),(0,o.kt)("li",{parentName:"ul"},"The frontend sends a request to the backend, asking for specific data."),(0,o.kt)("li",{parentName:"ul"},"The backend processes the request, fetches the data (from databases, other services,\nor the farm-ng brain services in our case)."),(0,o.kt)("li",{parentName:"ul"},"Once the data is retrieved, the backend sends it back to the frontend."),(0,o.kt)("li",{parentName:"ul"},"The frontend then displays this data to the user in a readable and interactive manner.")),(0,o.kt)("h3",{id:"link-to-monitor_app"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/monitor_app/"},"Link to ",(0,o.kt)("inlineCode",{parentName:"a"},"monitor_app/"))),(0,o.kt)("p",null,"In this example we will show how to create a simple web application to stream and monitor\nthe data from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/brain/"},(0,o.kt)("strong",{parentName:"a"},"farm-ng brain"))," services."),(0,o.kt)("p",null,"The tutorial is divided in two parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#backend"},(0,o.kt)("strong",{parentName:"a"},"Backend")),": we will create a backend using ",(0,o.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/"},(0,o.kt)("strong",{parentName:"a"},"FastAPI")),"\nto serve the data from the ",(0,o.kt)("a",{parentName:"li",href:"/docs/brain/"},(0,o.kt)("strong",{parentName:"a"},"farm-ng brain"))," services to a frontend."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#frontend"},(0,o.kt)("strong",{parentName:"a"},"Frontend")),": we will create a frontend app using ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/"},(0,o.kt)("strong",{parentName:"a"},"React")),".")),(0,o.kt)("h2",{id:"backend"},"Backend"),(0,o.kt)("p",null,"To create the backend we will use ",(0,o.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/"},(0,o.kt)("strong",{parentName:"a"},"FastAPI")),"\nto serve the data from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/brain/"},(0,o.kt)("strong",{parentName:"a"},"farm-ng brain"))," services leveraging\nWebSockets to stream the data to the frontend."),(0,o.kt)("p",null,"In particular, in this part we will show how to create a couple of endpoints to discover the different\nservices running in the brain and to subscribe to the events of a particular service\nand stream the data to the frontend using WebSockets."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We strongly recommend go through the FastAPI tutorials to get familiar with the framework.\nYou can start here ",(0,o.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/tutorial/"},(0,o.kt)("strong",{parentName:"a"},"FastAPI Tutorial")),".")),(0,o.kt)("h3",{id:"link-to-monitor_appmainpy"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/monitor_app/main.py"},"Link to ",(0,o.kt)("inlineCode",{parentName:"a"},"monitor_app/main.py"))),(0,o.kt)("h3",{id:"topics-discoverability"},"Topics discoverability"),(0,o.kt)("p",null,"The first thing we need to do is to be able to discover the different topics, for this we will\ncreate the following endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/list_uris")," that will return a list of the available topics."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@app.get("/list_uris")\nasync def list_uris() -> JSONResponse:\n\n    all_uris = {}\n\n    for service_name, client in clients.items():\n        # get the list of uris from the event service\n        uris: list[Uri] = []\n        try:\n            # NOTE: some services may not be available, so we need to handle the timeout\n            uris = await asyncio.wait_for(client.list_uris(), timeout=0.1)\n        except asyncio.TimeoutError:\n            continue\n\n        # convert the uris to a dict, where the key is the uri full path\n        # and the value is the uri proto as a json string\n        for uri in uris:\n            all_uris[f"{service_name}{uri.path}"] = json.loads(MessageToJson(uri))\n\n    return JSONResponse(content=all_uris, status_code=200)\n')),(0,o.kt)("h3",{id:"subscribing-to-the-events"},"Subscribing to the events"),(0,o.kt)("p",null,"The next end point we want to create is the one to subscribe to the events of a particular service.\nFor this, we will create the following endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/subscribe/{service_name}/{uri_path}")," that will\ntake the ",(0,o.kt)("inlineCode",{parentName:"p"},"service_name")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"uri_path")," as parameters and with an async generator we will\nstream the data to the frontend using WebSockets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@app.websocket("/subscribe/{service_name}/{uri_path}")\nasync def subscribe(websocket: WebSocket, service_name: str, uri_path: str, every_n: int = 1):\n\n    client: EventClient = clients[service_name]\n\n    await websocket.accept()\n\n    async for event, message in client.subscribe(\n        request=SubscribeRequest(uri=Uri(path=f"/{uri_path}"), every_n=every_n), decode=True\n    ):\n        await websocket.send_json(MessageToJson(message))\n\n    await websocket.close()\n')),(0,o.kt)("p",null,"::: note"),(0,o.kt)("p",null,"In this example we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"every_n")," parameter to reduce the number of messages sent to the frontend.\nWe also send the message as a json string, but we could also send the message as a binary string\nand decode the protobuf message in the frontend."),(0,o.kt)("p",null,":::"),(0,o.kt)("h2",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"In this part we will create a simple frontend using ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},(0,o.kt)("strong",{parentName:"a"},"React")),"\nwith ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,o.kt)("strong",{parentName:"a"},"TypeScript"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},(0,o.kt)("strong",{parentName:"a"},"Vite"))," as a bundler.\nThe code for the frontend is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"monitor_app/ts")," directory."),(0,o.kt)("p",null,"The structure of the frontend is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.tsx\n\u2502\xa0\xa0 \u2514\u2500\u2500 components/\n\u2502\xa0\xa0     \u251c\u2500\u2500 App.tsx\n\u2502\xa0\xa0     \u2514\u2500\u2500 TopicMonitor.tsx\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 vite.config.js\n")),(0,o.kt)("h3",{id:"components"},"Components"),(0,o.kt)("p",null,"For simplicity we will explain only the ",(0,o.kt)("inlineCode",{parentName:"p"},"TopicMonitor")," component, since the other components are\njust boilerplate code."),(0,o.kt)("p",null,"::: tip"),(0,o.kt)("p",null,"For this example we recommend to get familiar with React Hooks, in particular ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),".\nYou can find more information here ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},(0,o.kt)("strong",{parentName:"a"},"React Hooks")),"."),(0,o.kt)("p",null,":::"),(0,o.kt)("p",null,"We designed the ",(0,o.kt)("inlineCode",{parentName:"p"},"TopicMonitor")," component to be as simple as possible to have a selector to choose\nthe service and the uri to subscribe to and we will use a third party library called ",(0,o.kt)("inlineCode",{parentName:"p"},"react-json-view-lite"),"\nto render the received data."),(0,o.kt)("p",null,"First we declare the shared variables and their associated hooks to be used across the component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function TopicMonitor() {\n    const [uris, setUris] = useState<string[]>([]);\n    const [selectedUri, setSelectedUri] = useState<string>('');\n    const [details, setDetails] = useState<any>(null);\n    ...\n}\n")),(0,o.kt)("p",null,"Next, we implement the function to fetch the available topics from the backend.\nThis is done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," function and the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook against the ",(0,o.kt)("inlineCode",{parentName:"p"},"/list_uris")," endpoint.\nThe result is stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"uris")," variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"useEffect(() => {\n    const fetchData = async () => {\n        try {\n            // Replace with your backend URL\n            const response = await fetch(\n                `${window.location.protocol}//${window.location.hostname}:8002/list_uris`\n            );\n            // Check if the request was successful\n            if (!response.ok) {\n                throw new Error('Network response was not ok ' + response.statusText);\n            }\n            const rawData = await response.json();\n            setUris(Object.keys(rawData));\n            // Select the first URI by default\n            setSelectedUri(Object.keys(rawData)[0]);\n        } catch (error) {\n            console.error('Error fetching data:', error);\n        }\n    };\n\n    fetchData();\n  }, []);\n")),(0,o.kt)("p",null,"The next step is to implement the event function to subscribe to the events using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocket")," API and the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook that will be triggered every time we select\na new uri. The result is stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"details")," variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"useEffect(() => {\n  if (!selectedUri) return;\n\n  const detailSocket = new WebSocket(\n      `ws://${window.location.hostname}:8002/subscribe/${selectedUri}`\n  );\n\n  detailSocket.onopen = (event) => {\n      console.log('Detail WebSocket connection opened:', event);\n  };\n\n  detailSocket.onmessage = (event) => {\n      const receivedDetails = JSON.parse(event.data);\n      setDetails(receivedDetails);\n  }\n\n  detailSocket.onclose = (event) => {\n      console.log('Detail WebSocket connection closed:', event);\n  };\n\n  return () => {\n      detailSocket.close();\n  };\n}, [selectedUri]);\n")),(0,o.kt)("p",null,"We finally put all together in the ",(0,o.kt)("inlineCode",{parentName:"p"},"TopicMonitor")," component as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"return (\n  <div>\n      <select value={selectedUri} onChange={(e) => setSelectedUri(e.target.value)}>\n          {uris.map((uri, index) =>\n              <option key={index} value={uri}>\n                  {uri}\n              </option>\n          )}\n      </select>\n\n      <div>\n          {selectedUri && (\n              <JsonView data={details} shouldExpandNode={allExpanded} style={defaultStyles} />\n          )}\n      </div>\n  </div>\n);\n")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"First, we need to install the dependencies of the backend and the frontend."),(0,o.kt)("h3",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,o.kt)("a",{parentName:"h3",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,o.kt)("h3",{id:"2-install-the-backend-dependencies"},"2. Install the backend dependencies"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# assuming you're already in the amiga-dev-kit/ directory\ncd farm-ng-amiga/py/examples/monitor_app\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,o.kt)("h3",{id:"3-install-the-frontend-dependencies"},"3. Install the frontend dependencies"),(0,o.kt)("p",null,"Recommendation: Use ","[",(0,o.kt)("strong",{parentName:"p"},"Node Version Manager"),"]","(\n",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04"},"https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04"),"\n#option-3-installing-node-using-the-node-version-manager) to install Node.js 18.x."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ts/\n\n# Install dependencies\nnpm install\n")),(0,o.kt)("h3",{id:"4-run-the-backend"},"4. Run the backend"),(0,o.kt)("p",null,"In a terminal in your robot, run the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --config config.json\n")),(0,o.kt)("p",null,"you should see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"INFO:     Started server process [348298]\nINFO:     Waiting for application startup.\nINFO:     Application startup complete.\nINFO:     Uvicorn running on http://0.0.0.0:8002 (Press CTRL+C to quit)\n")),(0,o.kt)("p",null,"To debug the backend you could use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8002/list_uris\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "gps/health":\n    {\n      "scheme":"protobuf",\n      "authority":"element-vegetable",\n      "path":"/health",\n      "query":"type=google.protobuf.Struct&pb=google/protobuf/struct.proto&service_name=gps"\n    },\n  "gps/pvt":\n    {\n      "scheme":"protobuf",\n      "authority":"element-vegetable",\n      "path":"/pvt",\n      "query":"type=farm_ng.gps.proto.GpsFrame&pb=farm_ng/gps/gps.proto&service_name=gps"\n    },\n  "gps/relposned":\n    {\n      "scheme":"protobuf",\n      "authority":"element-vegetable",\n      "path":"/relposned",\n      "query":"type=farm_ng.gps.proto.RelativePositionFrame&pb=farm_ng/gps/gps.proto&service_name=gps"\n    }\n}\n')),(0,o.kt)("p",null,"Optionally, you can subscribe to the events of a particular service, you can use the following url:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8002/subscribe/gps/pvt\n# or with the every_n parameter\ncurl http://localhost:8002/subscribe/gps/pvt?every_n=5\n")),(0,o.kt)("p",null,"and you should see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stamp": {\n    "stamp": 64291.767745599,\n    "clockName": "element-vegetable/monotonic",\n    "semantics": "driver/receive"\n  },\n  "longitude": -121.7905902,\n  "latitude": 36.9292526,\n  "altitude": 40.258,\n  "headingMotion": 4.182266164042437e-06,\n  "headingAccuracy": 3.1415926e-05,\n  "groundSpeed": 0.016,\n  "speedAccuracy": 0.083,\n  "velNorth": -0.008,\n  "velEast": 0.014,\n  "velDown": -0.002,\n  "status": {\n    "timeFullyResolved": true,\n    "gnssFixOk": true,\n    "diffSoln": true\n  },\n  "gpsTime": {\n    "stamp": 1696346260.0,\n    "clockName": "gps/POSIX",\n    "semantics": "device/sample"\n  },\n  "horizontalAccuracy": 0.014,\n  "verticalAccuracy": 0.01,\n  "positionMode": 3,\n  "pDop": 0.0217,\n  "height": 9.796\n}\n')),(0,o.kt)("h3",{id:"5-run-the-frontend"},"5. Run the frontend"),(0,o.kt)("p",null,"In a separated terminal in your robot (or in your computer), run the frontend:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ts/\n\n# Run the frontend\nnpm run dev\n")),(0,o.kt)("p",null,"you should see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n  VITE v4.4.10  ready in 1381 ms\n\n  \u279c  Local:   http://localhost:5173/\n  \u279c  Network: use --host to expose\n  \u279c  press h to show help\n")),(0,o.kt)("p",null,"Now you can open the browser and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5173/")," and you should see the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/farm-ng/amiga-dev-kit/assets/5157099/ff25d6c5-aa51-49a4-b8e0-398e12d5f00a",alt:"Screenshot from 2023-10-04 15-40-28"})),(0,o.kt)("p",null,"::: tip"),(0,o.kt)("p",null,"Switch between the different topics to see the data from the different services."),(0,o.kt)("p",null,":::"))}d.isMDXComponent=!0}}]);