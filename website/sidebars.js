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
  // "Documentation": [
  //   "getting-started",
  // ],
  "User Manual": [
    "amiga_quick_start/amiga-quick-start",
    {
      "items": [
        "dashboard/dashboard-overview",
        "dashboard/dashboard-user-guide",
        "dashboard/control-states",
        "dashboard/dashboard-fw",
        "dashboard/dashboard-debugging",
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
    {
      "items": [
        "intelligence-kit/overview-intel",
        "intelligence-kit/brain/brain-v2",
      ],
      "label": "Intelligence Kit",
      "type": "category"
    },
    {
      "App Overviews": [
        "apps/launcher/launcher",
        "apps/autoplot_app/autoplot-app",
        "apps/recorder_app/recorder-app",
        "apps/file_manager_app/file-manager-app",
        "apps/camera_app/camera-app",
      ],
    },
    {
      "Farm Tools": [
        {
          "items": [
            "farm-tools/three-point",
          ],
          "label": "Three Point Hitch",
          "type": "category"
        },
      ],
    },
    {
      "items": [
        "debug_cable/service-cable",
        "debug_cable/debug-cable",
      ],
      "label": "Service Cables",
      "type": "category"
    },
  ],
  "Developer": [
    "concepts/concepts-index",
    {
      "Getting Started": [
        "ssh/ssh",
        "brain/brain-install",
        "brain/next-steps",
      ],
    },
    {
      "Fundamental Concepts": [

        "concepts/system_overview/amiga-dev",
        "concepts/transforms_and_poses/transforms-and-poses",
        "concepts/tracks_and_waypoints/tracks-and-waypoints",
      ],

      "Custom Applications": [
        "brain/brain-apps",
        "brain/brain-apps-kivy",
        "brain/brain-apps-manifest",
        "brain/app-ownership",
        "brain/custom-troubleshooting",
      ],
    },
    "brain/sdk-barley-migration",
    "brain/ros-bridge",
    "examples/vnc_viewer/vnc-viewer",
    {
      "Service Overviews": [
        "concepts/canbus_service/canbus-overview",
        "concepts/oak_service/oak-overview",
        "concepts/gps_service/gps-overview",
        "concepts/recorder_service/recorder-overview",
        "concepts/filter_service/filter-overview",
        "concepts/track_follower_service/track-follower-overview",
      ],
    },
    "mcu_kit/microcontroller-kit",
    {
      "items": [
        "api/api-index",
        {
          "Microcontroller API": [
            require("./docs/reference/circuitpy/sidebar.json")
          ],
        },
        {
          "Brain API": [
            require("./docs/reference/brain/sidebar.json")
          ]
        }
      ],
      "label": "APIs",
      "type": "category"
    },
  ],
  "Resources/Support": [
    "hardware-tools/recommended-tools",
    "reference/faq",
    "support/github-101",
    {
      "items": [
        "brain/brain",
        "apps/filter_app/filter-app",
      ],
      "label": "Deprecated",
      "type": "category"
    },
    {
      "items": [
        "release-notes/release-022",
        "release-notes/release-021",
        "release-notes/release-02",
        "release-notes/release-01",
      ],
      "label": "Release Notes",
      "type": "category"
    },
  ],
  "examples": [
    "examples/examples-index",
    {
      "Microcontroller Examples": [
        "examples/hello_main_loop/hello-world",
        "examples/cansniffer/cansniffer",
        "examples/FPV/fpv",
      ],
      "Brain Examples": [
        {
          "items": [
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
            "examples/file_reader_headers/file-reader-headers",
          ],
          "label": "Playback Examples",
          "type": "category"
        },
        {
          "items": [
            "examples/camera_client/camera-client",
            "examples/camera_settings/camera-settings",
            "examples/camera_calibration/camera-calibration",
            "examples/camera_aruco_detector/camera-aruco-detector",
            "examples/camera_pointcloud/camera-pointcloud",
          ],
          "label": "Camera Examples",
          "type": "category"
        },
        {
          "items": [
            "examples/motor_state/motor-state",
            "examples/pendant_state/pendant-state",
            "examples/vehicle_twist/vehicle-twist",
            "examples/tool_control/tool-control",
            "examples/dashboard_settings/dashboard-settings",
            "examples/file_reader_can/file-reader-can",
          ],
          "label": "CAN Bus Examples",
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
            "examples/track_recorder/track-recorder",
            "examples/track_plotter/track-plotter",
            "examples/track_follower/track-follower",
            "examples/track_planner/track-planner",
            "examples/square_track/square-track",
          ],
          "label": "Track Follower Examples",
          "type": "category"
        },
        {
          "items": [
            "examples/multi_client_subscriber/multi-client-subscriber",
            "examples/multi_client_geoimage/multi-client-geoimage",
          ],
          "label": "Multi Client Examples",
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
            "examples/monitor_app/monitor-app",
          ],
          "label": "App Examples",
          "type": "category"
        },
      ],
      "Kivy App Examples": {
        "00 -Introduction": [
          "tutorials/introduction/tutorial-introduction",
          "tutorials/introduction/getting-started-kivy",
          "tutorials/introduction/template-overview",
        ],
        "01 - Camera Streamer Example": [
          "tutorials/camera_streamer/camera-streamer-overview",
          "tutorials/camera_streamer/kivy-definition",
          "tutorials/camera_streamer/camera-stream",
        ],
        "02 - Virtual Joystick Example": [
          "tutorials/virtual_joystick/virtual-joystick-overview",
          "tutorials/virtual_joystick/virtual-joystick-widget",
          "tutorials/virtual_joystick/device-streams",
          "tutorials/virtual_joystick/further-exercises",
        ],
      },
    }
  ],
};

module.exports = sidebars
