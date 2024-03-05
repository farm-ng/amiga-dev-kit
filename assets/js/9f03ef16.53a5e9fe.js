"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[7085],{3443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(5893),i=t(1151);const r={id:"monitor-app",title:"Monitor App"},a=void 0,o={id:"examples/monitor_app/monitor-app",title:"Monitor App",description:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:",source:"@site/docs/examples/monitor_app/README.md",sourceDirName:"examples/monitor_app",slug:"/examples/monitor_app/",permalink:"/docs/examples/monitor_app/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/monitor_app/README.md",tags:[],version:"current",frontMatter:{id:"monitor-app",title:"Monitor App"},sidebar:"examples",previous:{title:"Service Propagation",permalink:"/docs/examples/service_propagation/"},next:{title:"00 - Introduction",permalink:"/docs/tutorials/introduction/tutorial-introduction"}},c={},l=[{value:"Building an App: Understanding the Basics",id:"building-an-app-understanding-the-basics",level:2},{value:"How They Work Together",id:"how-they-work-together",level:3},{value:"Backend",id:"backend",level:2},{value:"Topics discoverability",id:"topics-discoverability",level:3},{value:"Subscribing to the events",id:"subscribing-to-the-events",level:3},{value:"Frontend",id:"frontend",level:2},{value:"Components",id:"components",level:3},{value:"Setup",id:"setup",level:2},{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:3},{value:"2. Install the backend dependencies",id:"2-install-the-backend-dependencies",level:3},{value:"3. Install the frontend dependencies",id:"3-install-the-frontend-dependencies",level:3},{value:"4. Run the backend",id:"4-run-the-backend",level:3},{value:"5. Run the frontend",id:"5-run-the-frontend",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,s.jsx)(n.p,{children:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Python Programming"}),": It's important to have a good grasp of Python, especially with concepts\nlike ",(0,s.jsx)(n.code,{children:"functions"}),", ",(0,s.jsx)(n.code,{children:"loops"}),", and ",(0,s.jsx)(n.code,{children:"classes"}),", since the example utilizes these fundamentals."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Asynchronous Programming with asyncio"}),": Familiarity with Python's asyncio for writing concurrent\ncode using the ",(0,s.jsx)(n.code,{children:"async/await"})," syntax."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"HTML/CSS"}),": Knowledge of HTML and CSS for creating and styling web pages."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JavaScript/TypeScript"}),": Understanding of JavaScript and TypeScript for writing type-safe code."]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"building-an-app-understanding-the-basics",children:"Building an App: Understanding the Basics"}),"\n",(0,s.jsx)(n.p,{children:"Every modern app typically consists of two main parts: the backend and the frontend.\nLet's dive into what each of these components does and how they interact with each other."}),"\n",(0,s.jsx)(n.p,{children:"Backend:"}),"\n",(0,s.jsx)(n.p,{children:'The backend is like the brain of your app. It processes data, makes calculations,\ncommunicates with databases, and performs all the logical operations.\nWhen you hear terms like "server," "API," or "database," they\'re usually related to the backend.'}),"\n",(0,s.jsx)(n.p,{children:"In our example, we're using FastAPI to build our backend. FastAPI is a modern, high-performance\nweb framework for building APIs. Coupled with the farm-ng brain services, our backend will\nfetch and serve data efficiently and securely to the frontend."}),"\n",(0,s.jsx)(n.p,{children:"Key Points:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Handles data processing, storage, and retrieval."}),"\n",(0,s.jsx)(n.li,{children:"Communicates with other services and databases."}),"\n",(0,s.jsx)(n.li,{children:"Secures data and ensures only authorized users can access it."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Frontend:"}),"\n",(0,s.jsx)(n.p,{children:"The frontend is the part of the app users see and interact with. Think of it as the face of your app.\nIt includes everything that you can touch, click, or interact with:\nbuttons, images, text inputs, animations, and more."}),"\n",(0,s.jsx)(n.p,{children:"For our frontend, we're using React. React is a popular JavaScript library for building\nuser interfaces. It allows developers to create responsive and interactive UI components easily."}),"\n",(0,s.jsx)(n.p,{children:"Key Points:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Displays data fetched from the backend."}),"\n",(0,s.jsx)(n.li,{children:"Interacts with users, capturing their inputs and preferences."}),"\n",(0,s.jsx)(n.li,{children:"Updates in real-time, ensuring users always see the latest data."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-they-work-together",children:"How They Work Together"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A user interacts with the frontend (e.g., clicks a button to fetch information)."}),"\n",(0,s.jsx)(n.li,{children:"The frontend sends a request to the backend, asking for specific data."}),"\n",(0,s.jsx)(n.li,{children:"The backend processes the request, fetches the data (from databases, other services,\nor the farm-ng brain services in our case)."}),"\n",(0,s.jsx)(n.li,{children:"Once the data is retrieved, the backend sends it back to the frontend."}),"\n",(0,s.jsx)(n.li,{children:"The frontend then displays this data to the user in a readable and interactive manner."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/monitor_app/",children:(0,s.jsx)(n.strong,{children:"Monitor App"})}),"\nexample we will show how to create a simple web application to stream and monitor\nthe data from the ",(0,s.jsx)(n.a,{href:"/docs/brain/",children:(0,s.jsx)(n.strong,{children:"farm-ng brain"})})," services."]}),"\n",(0,s.jsx)(n.p,{children:"The tutorial is divided in two parts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#backend",children:(0,s.jsx)(n.strong,{children:"Backend"})}),": we will create a backend using ",(0,s.jsx)(n.a,{href:"https://fastapi.tiangolo.com/",children:(0,s.jsx)(n.strong,{children:"FastAPI"})}),"\nto serve the data from the ",(0,s.jsx)(n.a,{href:"/docs/brain/",children:(0,s.jsx)(n.strong,{children:"farm-ng brain"})})," services to a frontend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#frontend",children:(0,s.jsx)(n.strong,{children:"Frontend"})}),": we will create a frontend app using ",(0,s.jsx)(n.a,{href:"https://reactjs.org/",children:(0,s.jsx)(n.strong,{children:"React"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"backend",children:"Backend"}),"\n",(0,s.jsxs)(n.p,{children:["To create the backend we will use ",(0,s.jsx)(n.a,{href:"https://fastapi.tiangolo.com/",children:(0,s.jsx)(n.strong,{children:"FastAPI"})}),"\nto serve the data from the ",(0,s.jsx)(n.a,{href:"/docs/brain/",children:(0,s.jsx)(n.strong,{children:"farm-ng brain"})})," services leveraging\nWebSockets to stream the data to the frontend."]}),"\n",(0,s.jsx)(n.p,{children:"In particular, in this part we will show how to create a couple of endpoints to discover the different\nservices running in the brain and to subscribe to the events of a particular service\nand stream the data to the frontend using WebSockets."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We strongly recommend go through the FastAPI tutorials to get familiar with the framework.\nYou can start here ",(0,s.jsx)(n.a,{href:"https://fastapi.tiangolo.com/tutorial/",children:(0,s.jsx)(n.strong,{children:"FastAPI Tutorial"})}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"topics-discoverability",children:"Topics discoverability"}),"\n",(0,s.jsxs)(n.p,{children:["The first thing we need to do is to be able to discover the different topics, for this we will\ncreate the following endpoint ",(0,s.jsx)(n.code,{children:"/list_uris"})," that will return a list of the available topics."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@app.get("/list_uris")\nasync def list_uris() -> JSONResponse:\n\n    all_uris = {}\n\n    for service_name, client in clients.items():\n        # get the list of uris from the event service\n        uris: list[Uri] = []\n        try:\n            # NOTE: some services may not be available, so we need to handle the timeout\n            uris = await asyncio.wait_for(client.list_uris(), timeout=0.1)\n        except asyncio.TimeoutError:\n            continue\n\n        # convert the uris to a dict, where the key is the uri full path\n        # and the value is the uri proto as a json string\n        for uri in uris:\n            all_uris[f"{service_name}{uri.path}"] = json.loads(MessageToJson(uri))\n\n    return JSONResponse(content=all_uris, status_code=200)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"subscribing-to-the-events",children:"Subscribing to the events"}),"\n",(0,s.jsxs)(n.p,{children:["The next end point we want to create is the one to subscribe to the events of a particular service.\nFor this, we will create the following endpoint ",(0,s.jsx)(n.code,{children:"/subscribe/{service_name}/{uri_path}"})," that will\ntake the ",(0,s.jsx)(n.code,{children:"service_name"})," and the ",(0,s.jsx)(n.code,{children:"uri_path"})," as parameters and with an async generator we will\nstream the data to the frontend using WebSockets."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@app.websocket("/subscribe/{service_name}/{uri_path}")\nasync def subscribe(websocket: WebSocket, service_name: str, uri_path: str, every_n: int = 1):\n\n    client: EventClient = clients[service_name]\n\n    await websocket.accept()\n\n    async for event, message in client.subscribe(\n        request=SubscribeRequest(uri=Uri(path=f"/{uri_path}"), every_n=every_n), decode=True\n    ):\n        await websocket.send_json(MessageToJson(message))\n\n    await websocket.close()\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In this example we use the ",(0,s.jsx)(n.code,{children:"every_n"})," parameter to reduce the number of messages sent to the frontend.\nWe also send the message as a json string, but we could also send the message as a binary string\nand decode the protobuf message in the frontend."]})}),"\n",(0,s.jsx)(n.h2,{id:"frontend",children:"Frontend"}),"\n",(0,s.jsxs)(n.p,{children:["In this part we will create a simple frontend using ",(0,s.jsx)(n.a,{href:"https://reactjs.org/",children:(0,s.jsx)(n.strong,{children:"React"})}),"\nwith ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:(0,s.jsx)(n.strong,{children:"TypeScript"})})," and ",(0,s.jsx)(n.a,{href:"https://vitejs.dev/",children:(0,s.jsx)(n.strong,{children:"Vite"})})," as a bundler.\nThe code for the frontend is located in the ",(0,s.jsx)(n.code,{children:"monitor_app/ts"})," directory."]}),"\n",(0,s.jsx)(n.p,{children:"The structure of the frontend is the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.tsx\n\u2502\xa0\xa0 \u2514\u2500\u2500 components/\n\u2502\xa0\xa0     \u251c\u2500\u2500 App.tsx\n\u2502\xa0\xa0     \u2514\u2500\u2500 TopicMonitor.tsx\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 vite.config.js\n"})}),"\n",(0,s.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,s.jsxs)(n.p,{children:["For simplicity we will explain only the ",(0,s.jsx)(n.code,{children:"TopicMonitor"})," component, since the other components are\njust boilerplate code."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For this example we recommend to get familiar with React Hooks, in particular ",(0,s.jsx)(n.code,{children:"useEffect"})," and ",(0,s.jsx)(n.code,{children:"useState"}),".\nYou can find more information here ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/hooks-intro.html",children:(0,s.jsx)(n.strong,{children:"React Hooks"})}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["We designed the ",(0,s.jsx)(n.code,{children:"TopicMonitor"})," component to be as simple as possible to have a selector to choose\nthe service and the uri to subscribe to and we will use a third party library called ",(0,s.jsx)(n.code,{children:"react-json-view-lite"}),"\nto render the received data."]}),"\n",(0,s.jsx)(n.p,{children:"First we declare the shared variables and their associated hooks to be used across the component."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function TopicMonitor() {\n    const [uris, setUris] = useState<string[]>([]);\n    const [selectedUri, setSelectedUri] = useState<string>('');\n    const [details, setDetails] = useState<any>(null);\n    ...\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, we implement the function to fetch the available topics from the backend.\nThis is done using the ",(0,s.jsx)(n.code,{children:"fetch"})," function and the ",(0,s.jsx)(n.code,{children:"useEffect"})," hook against the ",(0,s.jsx)(n.code,{children:"/list_uris"})," endpoint.\nThe result is stored in the ",(0,s.jsx)(n.code,{children:"uris"})," variable:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"useEffect(() => {\n    const fetchData = async () => {\n        try {\n            // Replace with your backend URL\n            const response = await fetch(\n                `${window.location.protocol}//${window.location.hostname}:8002/list_uris`\n            );\n            // Check if the request was successful\n            if (!response.ok) {\n                throw new Error('Network response was not ok ' + response.statusText);\n            }\n            const rawData = await response.json();\n            setUris(Object.keys(rawData));\n            // Select the first URI by default\n            setSelectedUri(Object.keys(rawData)[0]);\n        } catch (error) {\n            console.error('Error fetching data:', error);\n        }\n    };\n\n    fetchData();\n  }, []);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The next step is to implement the event function to subscribe to the events using the\n",(0,s.jsx)(n.code,{children:"WebSocket"})," API and the ",(0,s.jsx)(n.code,{children:"useEffect"})," hook that will be triggered every time we select\na new uri. The result is stored in the ",(0,s.jsx)(n.code,{children:"details"})," variable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"useEffect(() => {\n  if (!selectedUri) return;\n\n  const detailSocket = new WebSocket(\n      `ws://${window.location.hostname}:8002/subscribe/${selectedUri}`\n  );\n\n  detailSocket.onopen = (event) => {\n      console.log('Detail WebSocket connection opened:', event);\n  };\n\n  detailSocket.onmessage = (event) => {\n      const receivedDetails = JSON.parse(event.data);\n      setDetails(receivedDetails);\n  }\n\n  detailSocket.onclose = (event) => {\n      console.log('Detail WebSocket connection closed:', event);\n  };\n\n  return () => {\n      detailSocket.close();\n  };\n}, [selectedUri]);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We finally put all together in the ",(0,s.jsx)(n.code,{children:"TopicMonitor"})," component as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"return (\n  <div>\n      <select value={selectedUri} onChange={(e) => setSelectedUri(e.target.value)}>\n          {uris.map((uri, index) =>\n              <option key={index} value={uri}>\n                  {uri}\n              </option>\n          )}\n      </select>\n\n      <div>\n          {selectedUri && (\n              <JsonView data={details} shouldExpandNode={allExpanded} style={defaultStyles} />\n          )}\n      </div>\n  </div>\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.p,{children:"First, we need to install the dependencies of the backend and the frontend."}),"\n",(0,s.jsxs)(n.h3,{id:"1-install-the-farm-ng-brain-adk-package",children:["1. Install the ",(0,s.jsx)(n.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,s.jsx)(n.h3,{id:"2-install-the-backend-dependencies",children:"2. Install the backend dependencies"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# assuming you're already in the amiga-dev-kit/ directory\ncd farm-ng-amiga/py/examples/monitor_app\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip3 install -r requirements.txt\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-install-the-frontend-dependencies",children:"3. Install the frontend dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["Recommendation: Use ",(0,s.jsx)(n.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-3-installing-node-using-the-node-version-manager",children:(0,s.jsx)(n.strong,{children:"Node Version Manager"})}),"\nto install Node.js 18.x."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ts/\n\n# Install dependencies\nnpm install\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-run-the-backend",children:"4. Run the backend"}),"\n",(0,s.jsx)(n.p,{children:"In a terminal in your robot, run the server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python main.py --config config.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"you should see the following output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"INFO:     Started server process [348298]\nINFO:     Waiting for application startup.\nINFO:     Application startup complete.\nINFO:     Uvicorn running on http://0.0.0.0:8002 (Press CTRL+C to quit)\n"})}),"\n",(0,s.jsx)(n.p,{children:"To debug the backend you could use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:8002/list_uris\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "gps/health":\n    {\n      "scheme":"protobuf",\n      "authority":"element-vegetable",\n      "path":"/health",\n      "query":"type=google.protobuf.Struct&pb=google/protobuf/struct.proto&service_name=gps"\n    },\n  "gps/pvt":\n    {\n      "scheme":"protobuf",\n      "authority":"element-vegetable",\n      "path":"/pvt",\n      "query":"type=farm_ng.gps.proto.GpsFrame&pb=farm_ng/gps/gps.proto&service_name=gps"\n    },\n  "gps/relposned":\n    {\n      "scheme":"protobuf",\n      "authority":"element-vegetable",\n      "path":"/relposned",\n      "query":"type=farm_ng.gps.proto.RelativePositionFrame&pb=farm_ng/gps/gps.proto&service_name=gps"\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Optionally, you can subscribe to the events of a particular service, you can use the following url:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:8002/subscribe/gps/pvt\n# or with the every_n parameter\ncurl http://localhost:8002/subscribe/gps/pvt?every_n=5\n"})}),"\n",(0,s.jsx)(n.p,{children:"and you should see the following output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "stamp": {\n    "stamp": 64291.767745599,\n    "clockName": "element-vegetable/monotonic",\n    "semantics": "driver/receive"\n  },\n  "longitude": -121.7905902,\n  "latitude": 36.9292526,\n  "altitude": 40.258,\n  "headingMotion": 4.182266164042437e-06,\n  "headingAccuracy": 3.1415926e-05,\n  "groundSpeed": 0.016,\n  "speedAccuracy": 0.083,\n  "velNorth": -0.008,\n  "velEast": 0.014,\n  "velDown": -0.002,\n  "status": {\n    "timeFullyResolved": true,\n    "gnssFixOk": true,\n    "diffSoln": true\n  },\n  "gpsTime": {\n    "stamp": 1696346260.0,\n    "clockName": "gps/POSIX",\n    "semantics": "device/sample"\n  },\n  "horizontalAccuracy": 0.014,\n  "verticalAccuracy": 0.01,\n  "positionMode": 3,\n  "pDop": 0.0217,\n  "height": 9.796\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"5-run-the-frontend",children:"5. Run the frontend"}),"\n",(0,s.jsx)(n.p,{children:"In a separated terminal in your robot (or in your computer), run the frontend:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ts/\n\n# Run the frontend\nnpm run dev\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see the following output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\n  VITE v4.4.10  ready in 1381 ms\n\n  \u279c  Local:   http://localhost:5173/\n  \u279c  Network: use --host to expose\n  \u279c  press h to show help\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now you can open the browser and go to ",(0,s.jsx)(n.code,{children:"http://localhost:5173/"})," and you should see the following:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/farm-ng/amiga-dev-kit/assets/5157099/ff25d6c5-aa51-49a4-b8e0-398e12d5f00a",alt:"Screenshot from 2023-10-04 15-40-28"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Switch between the different topics to see the data from the different services."})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);