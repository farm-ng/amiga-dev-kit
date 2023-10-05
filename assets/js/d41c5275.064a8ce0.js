"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2083],{1636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));n(1839);const o={id:"template-overview",title:"02 - Template Overview"},r="Template Overview",p={unversionedId:"tutorials/introduction/template-overview",id:"tutorials/introduction/template-overview",title:"02 - Template Overview",description:"This is out-of-date for brains running v2.x Amiga OS software.",source:"@site/docs/tutorials/introduction/02_template_overview.md",sourceDirName:"tutorials/introduction",slug:"/tutorials/introduction/template-overview",permalink:"/docs/tutorials/introduction/template-overview",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/tutorials/introduction/02_template_overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"template-overview",title:"02 - Template Overview"},sidebar:"examples",previous:{title:"01 - Background Knowledge",permalink:"/docs/tutorials/introduction/background-knowledge"},next:{title:"00 - Camera Streamer Overview",permalink:"/docs/tutorials/camera_streamer/camera-streamer-overview"}},l={},s=[{value:"Imports",id:"imports",level:2},{value:"kivy app definition",id:"kivy-app-definition",level:2},{value:"RelativeLayout",id:"relativelayout",level:3},{value:"Back button",id:"back-button",level:3},{value:"TemplateApp",id:"templateapp",level:2},{value:"build",id:"build",level:3},{value:"on_exit_button",id:"on_exit_button",level:3},{value:"app_func",id:"app_func",level:3},{value:"template_function",id:"template_function",level:3},{value:"Command line args and execution",id:"command-line-args-and-execution",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"template-overview"},"Template Overview"),(0,i.kt)("admonition",{title:"deprecation warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is out-of-date for brains running ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.x")," Amiga OS software.",(0,i.kt)("br",null),"\nThis tutorial only applies to brains running Amiga OS ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.x")," versions.",(0,i.kt)("br",null),"\nPlease check back for an updated tutorial for brains running ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.x")," Amiga OS software.")),(0,i.kt)("p",null,"This section explains all of the Python and kivy code in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-app-template"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"amiga-app-template"))),",\nto help understand the base before you add anything custom."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This corresponds to the state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"amiga-app-template")," on\nJanuary 31, 2023.\nSome details of the implementation may have changed slightly by\nthe time you are reading.")),(0,i.kt)("h2",{id:"imports"},"Imports"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'# Copyright (c) farm-ng, inc. Amiga Development Kit License,\n# Version 0.1\nimport argparse\nimport asyncio\nimport os\nfrom typing import List\n\nfrom amiga_package import ops\n\n# Must come before kivy imports\nos.environ["KIVY_NO_ARGS"] = "1"\n\n# gui configs must go before any other kivy import\nfrom kivy.config import Config  # noreorder # noqa: E402\n\nConfig.set("graphics", "resizable", False)\nConfig.set("graphics", "width", "1280")\nConfig.set("graphics", "height", "800")\nConfig.set("graphics", "fullscreen", "false")\nConfig.set("input", "mouse", "mouse,disable_on_activity")\nConfig.set("kivy", "keyboard_mode", "systemanddock")\n\n# kivy imports\nfrom kivy.app import App  # noqa: E402\nfrom kivy.lang.builder import Builder  # noqa: E402\n')),(0,i.kt)("p",null,"The template starts with generic Python imports that are used in\nthe app, followed by the custom lib imports, then kivy imports\nand configuration."),(0,i.kt)("p",null,"Before any kivy imports, we must explicitly state that the\ncommand line args for the app are to be used, rather than the\ndefault kivy command line args, with\n",(0,i.kt)("inlineCode",{parentName:"p"},'os.environ["KIVY_NO_ARGS"] = "1"'),"."),(0,i.kt)("p",null,"Notice we import kivy ",(0,i.kt)("inlineCode",{parentName:"p"},"Config")," and define the config parameters\nwe recommend for running kivy applications on the brain.\nThis should come before importing any other Kivy modules, as\nstated in\n",(0,i.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/api-kivy.config.html"},(0,i.kt)("strong",{parentName:"a"},"kivy - Configuration object")),"."),(0,i.kt)("p",null,"Finally we import the remaining kivy modules with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"# noqa: E402")," flag, so any ",(0,i.kt)("inlineCode",{parentName:"p"},"pre-commit")," formatters don't move\nthese imports above the kivy configuration setting."),(0,i.kt)("h2",{id:"kivy-app-definition"},"kivy app definition"),(0,i.kt)("p",null,"Contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"res/main.kv")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'RelativeLayout:\n    Button:\n        id: back_btn_layout\n        pos_hint: {"x": 0.0, "top": 1.0}\n        background_color: 0, 0, 0, 0\n        size_hint: 0.1, 0.1\n        background_normal: "assets/back_button.png"\n        on_release: app.on_exit_btn()\n        Image:\n            source: "assets/back_button_normal.png" if self.\n            parent.state == "normal" else "assets/\n            back_button_down.png"\n            pos: self.parent.pos\n            size: self.parent.size\n    Label:\n        id: counter_label\n        text: "Tic: 0"\n        font_size: 40\n')),(0,i.kt)("p",null,"Next we define our application in the Kv language.\nThis definition can be a ",(0,i.kt)("inlineCode",{parentName:"p"},'"""')," string at the top of a ",(0,i.kt)("inlineCode",{parentName:"p"},".py")," file\nor can be defined in a separate ",(0,i.kt)("inlineCode",{parentName:"p"},".kv")," file.\nEither can be imported by the\n",(0,i.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/api-kivy.lang.builder.html"},(0,i.kt)("strong",{parentName:"a"},"kivy Builder")),".\nHere we use a separate .kv file\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-app-template/blob/main/src/res/main.kv"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"res/main.py"))),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Throughout this tutorial we'll explain the kivy app created in\nthis example, but this is not intended as a thorough introduction\nto using kivy. Try the ",(0,i.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/tutorials-index.html"},(0,i.kt)("strong",{parentName:"a"},"kivy tutorials")),"\nand use the ",(0,i.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/api-index.html"},(0,i.kt)("strong",{parentName:"a"},"kivy API")),"\nfor more information on creating custom applications with kivy.")),(0,i.kt)("h3",{id:"relativelayout"},"RelativeLayout"),(0,i.kt)("p",null,"Two key components of kivy are\n",(0,i.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/gettingstarted/layouts.html#"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Layouts")))," and\n",(0,i.kt)("a",{parentName:"p",href:"https://kivy.org/doc/stable/api-kivy.uix.html"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Widgets"))),".\nThe root of our template app is a ",(0,i.kt)("inlineCode",{parentName:"p"},"RelativeLayout"),", which\ncontains a ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Label")," widget.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"RelativeLayout")," allows us to position the\n",(0,i.kt)("a",{parentName:"p",href:"#back-button"},(0,i.kt)("strong",{parentName:"a"},"Back button"))," (and any widgets or nested\nlayouts we may add in the future) in relative coordinates."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.relativelayout.html"},(0,i.kt)("strong",{parentName:"a"},"Relative Layout")))),(0,i.kt)("h3",{id:"back-button"},"Back button"),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," is used to exit the app when it is pressed, by\ncalling the ",(0,i.kt)("a",{parentName:"p",href:"#on_exit_button"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"TemplateApp.on_exit_btn()"))),"\nmethod."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To be precise it's actually when the button is released due to\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_release:")," keyword.")),(0,i.kt)("p",null,"Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"TemplateApp")," inherits from the kivy ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," class,\nmethods and variables of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TemplateApp")," can be linked with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"app.foo_variable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"app.bar_method()"),"\nWe define the ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," with two images, one that shows most of\nthe time, and another that shows while the button is pressed down.\nYou can also define a button with a string, if you want to\nquickly add buttons without finding an icon."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/material-design-icons"},(0,i.kt)("strong",{parentName:"a"},"Material Icons")),"\nis a nice place to find symbols to use for app buttons / UI\nfeatures.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://kivy.org/doc/stable/api-kivy.uix.button.html"},(0,i.kt)("strong",{parentName:"a"},"Button")))),(0,i.kt)("h2",{id:"templateapp"},"TemplateApp"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'class TemplateApp(App):\n    """Base class for the main Kivy app."""\n\n    def __init__(self) -> None:\n        super().__init__()\n\n        self.counter: int = 0\n\n        self.async_tasks: List[asyncio.Task] = []\n')),(0,i.kt)("p",null,"We define the ",(0,i.kt)("inlineCode",{parentName:"p"},"TemplateApp")," to inherit from the kivy ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," class,\nso it has all the features of a generic ",(0,i.kt)("inlineCode",{parentName:"p"},"App"),", plus anything we\nadd to it."),(0,i.kt)("p",null,"All we add here is a placeholder for the ",(0,i.kt)("inlineCode",{parentName:"p"},"TemplateApp")," class\nmethods that will each be added as an ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncio.Task"),"."),(0,i.kt)("h3",{id:"build"},"build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'def build(self):\n    return Builder.load_file("res/main.kv")\n\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"build")," is a default kivy ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," method that we must overwrite\nwith our app's details."),(0,i.kt)("p",null,"To load the ",(0,i.kt)("inlineCode",{parentName:"p"},".kv")," definition of our app, we use the built-in\nmethod:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"Builder.load_file(KV_FILE)\n")),(0,i.kt)("h3",{id:"on_exit_button"},"on_exit_button"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'def on_exit_btn(self) -> None:\n    """Kills the running kivy application."""\n    App.get_running_app().stop()\n')),(0,i.kt)("p",null,"This simple method stops the running kivy app.\nWhen an app was launched on the Amiga Brain through the Launcher\napp, this will return the Brain state to the Launcher app."),(0,i.kt)("h3",{id:"app_func"},"app_func"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"async def app_func(self):\n    async def run_wrapper() -> None:\n        # we don't actually need to set asyncio as the lib\n        # because it is\n        # the default, but it doesn't hurt to be explicit\n        await self.async_run(async_lib=\"asyncio\")\n        for task in self.async_tasks:\n            task.cancel()\n\n    # Placeholder task\n    self.async_tasks.append(asyncio.ensure_future(self.\n    template_function()))\n\n    return await asyncio.gather(run_wrapper(), *self.async_tasks)\n")),(0,i.kt)("p",null,"We use the ",(0,i.kt)("inlineCode",{parentName:"p"},"app_func")," pattern, with the nested ",(0,i.kt)("inlineCode",{parentName:"p"},"run_wrapper"),", to\nbuild, run, and manage the list of long duration, asynchronous\ntasks required by the app."),(0,i.kt)("p",null,"Here we build the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," methods that will run\nsimultaneously for the life of our app.\nCurrently this list only consists of a placeholder method called\n",(0,i.kt)("a",{parentName:"p",href:"#template_function"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"template_function()")))," that we will\nlater replace with tasks that actually do something."),(0,i.kt)("p",null,"Each method is added as an ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncio.Task")," following the pattern\nused to add ",(0,i.kt)("inlineCode",{parentName:"p"},"self.template_function()"),"."),(0,i.kt)("h3",{id:"template_function"},"template_function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'async def template_function(self) -> None:\n    """Placeholder forever loop."""\n    while self.root is None:\n        await asyncio.sleep(0.01)\n\n    while True:\n        await asyncio.sleep(1.0)\n\n        # increment the counter using internal libs and update\n        # the gui\n        self.counter = ops.add(self.counter, 1)\n        self.root.ids.counter_label.text = (\n            f"{\'Tic\' if self.counter % 2 == 0 else \'Tac\'}: {self.\n            counter}"\n        )\n')),(0,i.kt)("p",null,"In all of our ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," functions, we should wait for the root of\nthe kivy App to be initialized before doing anything in the\nfunction.\nOften these functions will rely on the kivy app, so this prevents\nunexpected crashes."),(0,i.kt)("p",null,"In this placeholder, the ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop doesn't do anything besides\nupdate the text of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Label")," widget to alternate between\n",(0,i.kt)("inlineCode",{parentName:"p"},"Tic")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Tac")," every second."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The custom defined async functions must be defined with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"async")," decorator and any blocking tasks with the ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword.")),(0,i.kt)("h2",{id:"command-line-args-and-execution"},"Command line args and execution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'if __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="template-app")\n\n    # Add additional command line arguments here\n\n    args = parser.parse_args()\n\n    loop = asyncio.get_event_loop()\n    try:\n        loop.run_until_complete(TemplateApp().app_func())\n    except asyncio.CancelledError:\n        pass\n    loop.close()\n')),(0,i.kt)("p",null,"Finally we run the app!\nThere is infrastructure in place for defining command line args,\nwhich you'll likely want in your apps so you don't have to hard\ncode configurations.\nThe last six lines are a useful pattern for cleanly running your\napp with ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncio"),"."))}m.isMDXComponent=!0}}]);