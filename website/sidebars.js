/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  "docs": {
    "Introduction": [
      "getting-started",
    ],
    "Dashboard": [
      "dashboard/dashboard",
      "dashboard/dashboard-fw",
      "dashboard/control-states",
    ],
    "Debug Cable": [
      "debug_cable/debug-cable",
    ],
    "Microcontroller Kit": [
      "mcu_kit/microcontroller-kit",
    ],
    "Brain": [
      "brain/brain",
      "brain/brain-install",
      "brain/brain-apps"
    ],
    // "Pendant": [
    //   "pendant/pendant",
    // ],
    "Resources": [
      "hardware-tools/etools",
    ],
  },
  "api": [
    "api",
    {
      "CircuitPython ADK": [
        require("./docs/reference/circuitpy/sidebar.json")
      ],
    },
    {
      "Brain ADK": [
        "brain/brain-install",
        require("./docs/reference/brain/sidebar.json")
      ],
    }
  ],
  "examples": {
    "Index": ["examples/examples-index"],
    "CircuitPython" : [
        "examples/hello_main_loop/hello-world",
        "examples/cansniffer/cansniffer",
        "examples/FPV/fpv",
    ],
    "Brain" : [
        "examples/camera_client/camera-client",
        "examples/camera_client_gui/camera-client-gui",
    ],
    "Brain Tutorial" :[
        "examples/virtual_joystick/virtual-joystick-overview",
        "examples/virtual_joystick/template-overview",
        "examples/virtual_joystick/template-starter",
        "examples/virtual_joystick/canbus-stream",
        "examples/virtual_joystick/camera-stream",
        "examples/virtual_joystick/virtual-joystick-widget",
        "examples/virtual_joystick/auto-control",
    ]
},
  "contribute": [
    "contribute/contribute-website"
  ]
};

module.exports = sidebars;
