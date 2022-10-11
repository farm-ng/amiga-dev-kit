from kivy.app import App
from kivy.config import Config
from kivy.lang import Builder
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.button import Button
from kivy.uix.image import Image

Config.set("graphics", "width", "1280")
Config.set("graphics", "height", "800")
Config.set("graphics", "resizable", False)
Config.set("graphics", "fullscreen", False)
Config.set("input", "mouse", "mouse,disable_on_activity")
Config.set("kivy", "keyboard_mode", "systemanddock")
Config.set("kivy", "exit_on_escape", "0")

from kivy.core.window import Window

YOUR_NAME="changeme"

KIVY_STRING = """
<HelloApp>:
    BoxLayout:
        orientation: "vertical"
        size: self.size
        Label:
            id: lbl_hello
            text: "Hello YOUR_NAME :)"
            font_size: 100
            size_hint: 1, .8
            color: 1, .5, 0, 1
            canvas.before:
                Rectangle:
                    pos: self.pos
                    size: self.size
                    source: "wheat.png"
        Button:
            id: btnExit
            text: "exit"
            size_hint: .1, .1
            pos_hint: {'center_x':.5, 'center_y':.5}
            on_release: app.on_exit_btn()
""".replace("YOUR_NAME", YOUR_NAME)

Builder.load_string(KIVY_STRING)

class HelloApp(App, BoxLayout):
    def build(self):
        return self

    def on_exit_btn(self):
        App.get_running_app().stop()
        Window.close()

if __name__ == "__main__":
    HelloApp().run()