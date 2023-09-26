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
  "Documentation": {
    "Introduction": [
      "getting-started",
      "index",
    ],
    "Getting Started": [
      "amiga_quick_start/amiga-quick-start",
      "brain/brain-install",
      "brain/next-steps",
    ],


    "Amiga Rover": [
      {
        "items": [
        "dashboard/dashboard",
        "dashboard/dashboard-user-guide",
        "dashboard/control-states",
        "dashboard/dashboard-fw",
      ],
      "label": "Dashboard",
      "type": "category"
    },
    {
      "items": [
        "pendant/pendant"

      ],
      "label": "Pendant",
      "type": "category"
    },

    ],
    "Intelligence Kit": [
      "intelligence-kit/overview-intel",
{
        "items": [
          "brain/brain",
          "intelligence-kit/brain/brain-v2",
        ],
        "label": "Brain",
        "type": "category"

      },
{
  "items": [
    "release-notes/release-01",
  ],
  "label": "Release Notes",
  "type": "category"
},
    ],
    "Farm Tools":[
      {
        "items": [
          "farm-tools/three-point",
        ],
        "label": "Three Point",
        "type": "category"
      },
  ],
    "Development Tools": [
      {
        "items": [
            "debug_cable/debug-cable",
            "debug_cable/service-cable"
      ],
      "label": "Cables",
      "type": "category"
    },
    {
      "items": [
        "mcu_kit/microcontroller-kit",
      ],
      "label": "Microcontroller Kit",
      "type": "category"
    },
  ],

    "Resources/Support": [
      "hardware-tools/recommended-tools",
      "reference/faq",
      "support/support",
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
        require("./docs/reference/brain/sidebar.json")
      ],
    }
  ],
  "examples": {
    "Index": ["examples/examples-index"],
    "CircuitPython Examples" : [
        "examples/hello_main_loop/hello-world",
        "examples/cansniffer/cansniffer",
        "examples/FPV/fpv",
    ],
    "Brain Examples" : [
        "examples/import_log_file/import-log-file",
        "examples/file_reader/file-reader",
        "examples/file_reader_can/file-reader-can",
        "examples/file_converter/file-converter",
        "examples/camera_client/camera-client",
        "examples/camera_calibration/camera-calibration",
        "examples/camera_settings/camera-settings",
        "examples/camera_pointcloud/camera-pointcloud",
        "examples/motor_state/motor-state",
        "examples/vehicle_twist/vehicle-twist",
        "examples/vnc_viewer/vnc-viewer",
        "examples/service_client/service-client",
        "examples/service_counter/service-counter",
        "examples/service_propagation/service-propagation",
    ],
    "Brain App Tutorials" : {
        "00 - Tutorial Introduction" :[
            "tutorials/introduction/tutorial-introduction",
            "tutorials/introduction/background-knowledge",
            "tutorials/introduction/template-overview",
        ],
        "01 - Camera Streamer Tutorial" :[
            "tutorials/camera_streamer/camera-streamer-overview",
            "tutorials/camera_streamer/template-starter",
            "tutorials/camera_streamer/kivy-definition",
            "tutorials/camera_streamer/camera-stream",
        ],
        "02 - Virtual Joystick Tutorial" :[
            "tutorials/virtual_joystick/virtual-joystick-overview",
            "tutorials/virtual_joystick/template-starter",
            "tutorials/virtual_joystick/device-streams",
            "tutorials/virtual_joystick/virtual-joystick-widget",
            "tutorials/virtual_joystick/auto-control",
            "tutorials/virtual_joystick/further-exercises",
        ],
    },
      "Amiga Brain Development": [
      "brain/brain-apps",
      "brain/ros-bridge"
    ]
},
  "contribute": [
    "contribute/contribute-website"
  ],

};

module.exports = sidebars
