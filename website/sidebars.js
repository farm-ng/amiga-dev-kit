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
    ],
    "Getting Started": [
      "amiga_quick_start/amiga-quick-start",
      "ssh/ssh",
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
      "support/github-101",
    ],
  },
  "Concepts": [
    "concepts/concepts-index",
    {
      "Fundamental Concepts": [
        "concepts/transforms_and_poses/transforms-and-poses",
        "concepts/controller_101/create-and-propagate-poses",
      ],
        "Service Overviews": [
        "concepts/canbus_service/canbus-overview",
        "concepts/oak_service/oak-overview",
        "concepts/recorder_service/recorder-overview",
        "concepts/gps_service/gps-overview",
        "concepts/filter_service/filter-overview",
        "concepts/controller_service/controller-overview",
      ],
    },
  ],
  "api": [
    "api/api-index",
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
  "examples": [
    "examples/examples-index",
    {
    "CircuitPython Examples" : [
        "examples/hello_main_loop/hello-world",
        "examples/cansniffer/cansniffer",
        "examples/FPV/fpv",
    ],
    "Brain Examples" : [
      {
        "items": [
            "examples/import_log_file/import-log-file",
            "examples/events_recorder/events-recorder",
        ],
        "label": "Data Recording Examples",
        "type": "category"
      },
      {
        "items": [
        "examples/file_reader/file-reader",
        "examples/file_converter/file-converter",
        "examples/file_reader_can/file-reader-can",
        "examples/file_reader_gps/file-reader-gps",
        ],
        "label": "Playback Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/camera_client/camera-client",
          "examples/camera_settings/camera-settings",
          "examples/camera_calibration/camera-calibration",
          "examples/camera_pointcloud/camera-pointcloud",
          "examples/camera_aruco_detector/camera-aruco-detector",
        ],
        "label": "Camera Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/motor_state/motor-state",
          "examples/vehicle_twist/vehicle-twist",
          "examples/file_reader_can/file-reader-can",
        ],
        "label": "CAN bus Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/gps_client/gps-client",
          "examples/file_reader_gps/file-reader-gps",
        ],
        "label": "GPS Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/filter_client/filter-client",
        ],
        "label": "State Estimation Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/record_track/record-track",
          "examples/controller_track/controller-track",
          "examples/controller_square/controller-square",
        ],
        "label": "Controller Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/service_client/service-client",
          "examples/service_counter/service-counter",
          "examples/service_propagation/service-propagation",
        ],
      "label": "Custom Service Examples",
      "type": "category"
      },
      {
      "items": [
        "examples/vnc_viewer/vnc-viewer",
        "examples/monitor_app/monitor-app",
      ],
      "label": "Miscellaneous Examples",
      "type": "category"
      },
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
    }
  ],
  "contribute": [
    "contribute/contribute-website"
  ],

};

module.exports = sidebars
