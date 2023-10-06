"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2881],{8550:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));t(1839);const r={id:"camera-pointcloud",title:"Camera Pointcloud"},o=void 0,s={unversionedId:"examples/camera_pointcloud/camera-pointcloud",id:"examples/camera_pointcloud/camera-pointcloud",title:"Camera Pointcloud",description:"Camera Pointcloud",source:"@site/docs/examples/camera_pointcloud/README.md",sourceDirName:"examples/camera_pointcloud",slug:"/examples/camera_pointcloud/",permalink:"/docs/examples/camera_pointcloud/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/camera_pointcloud/README.md",tags:[],version:"current",frontMatter:{id:"camera-pointcloud",title:"Camera Pointcloud"},sidebar:"examples",previous:{title:"Camera Client",permalink:"/docs/examples/camera_client/"},next:{title:"Camera Settings",permalink:"/docs/examples/camera_settings/"}},m={},p=[{value:"Camera Pointcloud",id:"camera-pointcloud",level:2},{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:3},{value:"2. Setup",id:"2-setup",level:3},{value:"3. Install the example&#39;s dependencies",id:"3-install-the-examples-dependencies",level:3},{value:"4. Execute the Python script",id:"4-execute-the-python-script",level:3},{value:"5. Customize run",id:"5-customize-run",level:3},{value:"6. Code overview",id:"6-code-overview",level:3}],l={toc:p};function c(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"camera-pointcloud"},"Camera Pointcloud"),(0,i.kt)("p",null,"The requirements to run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/camera_pointcloud/main.py"},"this example"),"\nare to have a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/brain/"},(0,i.kt)("strong",{parentName:"a"},"farm-ng brain"))," running Oak cameras and that\nyour PC is on the same local network as the brain."),(0,i.kt)("h3",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,i.kt)("a",{parentName:"h3",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,i.kt)("h3",{id:"2-setup"},"2. Setup"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment.")),(0,i.kt)("p",null,"Create first a virtual environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# assuming you're already in the amiga-dev-kit/ directory\ncd farm-ng-amiga/py/examples/pointcloud\n")),(0,i.kt)("h3",{id:"3-install-the-examples-dependencies"},"3. Install the example's dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,i.kt)("h3",{id:"4-execute-the-python-script"},"4. Execute the Python script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 main.py --service-config service_config.json\n")),(0,i.kt)("h3",{id:"5-customize-run"},"5. Customize run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# usage: amiga-camera-pointcloud [-h] --service-config SERVICE_CONFIG [--save-disparity] [--save-pointcloud]\n#\n# optional arguments:\n#   -h, --help            show this help message and exit\n#   --service-config SERVICE_CONFIG\n#                         The camera config.\n#   --save-disparity      Save the disparity image.\n#   --save-pointcloud     Save the depth image.\n")),(0,i.kt)("h3",{id:"6-code-overview"},"6. Code overview"),(0,i.kt)("p",null,"In this example we get the camera calibration from the camera service and use it jointly\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"disparity")," image to generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"pointcloud"),"."),(0,i.kt)("p",null,"Firstly, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"EventClient")," to request the camera calibration from the camera service.\nThe camera calibration is an ",(0,i.kt)("inlineCode",{parentName:"p"},"oak_pb2.CameraCalibration")," message that\ncontains the camera intrinsic and extrinsic parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# create a client to the camera service\nconfig: EventServiceConfig = proto_from_json_file(args.service_config, EventServiceConfig())\n\ncamera_client = EventClient(config)\n\n# get the calibration message\ncalibration_proto: oak_pb2.OakCalibration =\n                    await camera_client.request_reply("/calibration", Empty(), decode=True)\n\n# NOTE: The OakCalibration message contains the camera calibration data for all the cameras.\n# Since we are interested in the disparity image, we will use the calibration data for the right camera\n# which is the first camera in the list.\ncamera_data: oak_pb2.CameraData = calibration_proto.camera_data[0]\n\n# compute the camera matrix from the calibration data\ncamera_matrix: Tensor = get_camera_matrix(camera_data)\n')),(0,i.kt)("p",null,"Below is the code to compute the camera matrix from the calibration data.\nNotice that we cast the ",(0,i.kt)("inlineCode",{parentName:"p"},"intrinsic_matrix")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tensor")," and reshape it to\na 3x3 matrix.\nThis will allow an easy integration with the kornia library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def get_camera_matrix(camera_data: oak_pb2.CameraData) -> Tensor:\n    """Compute the camera matrix from the camera calibration data.\n\n    Args:\n        camera_data (oak_pb2.CameraData): The camera calibration data.\n\n    Returns:\n        Tensor: The camera matrix with shape 3x3.\n    """\n    fx = camera_data.intrinsic_matrix[0]\n    fy = camera_data.intrinsic_matrix[4]\n    cx = camera_data.intrinsic_matrix[2]\n    cy = camera_data.intrinsic_matrix[5]\n\n    return tensor([[fx, 0, cx], [0, fy, cy], [0, 0, 1]])\n')),(0,i.kt)("p",null,"Next, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"EventClient")," to subscribe to the ",(0,i.kt)("inlineCode",{parentName:"p"},"disparity")," path from the camera service.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"disparity")," image is an ",(0,i.kt)("inlineCode",{parentName:"p"},"oak_pb2.OakImage")," message that contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"disparity")," image data."),(0,i.kt)("p",null,"To compute the ",(0,i.kt)("inlineCode",{parentName:"p"},"pointcloud")," we first need to decode the ",(0,i.kt)("inlineCode",{parentName:"p"},"disparity")," image data to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tensor"),"\nand then compute the ",(0,i.kt)("inlineCode",{parentName:"p"},"pointcloud")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"disparity")," image\nusing the kornia method ",(0,i.kt)("inlineCode",{parentName:"p"},"depth_from_disparity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"depth_to_3d_v2"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'async for event, message in camera_client.subscribe(\n    SubscribeRequest(uri=uri_pb2.Uri(path="/disparity"), every_n=5), decode=True\n):\n    # cast image data bytes to a tensor and decode\n    disparity_t = decode_disparity(message, image_decoder)  # HxW\n\n    # compute the depth image from the disparity image\n    calibration_baseline: float = 0.075  # m\n    calibration_focal: float = float(camera_matrix[0, 0])\n\n    depth_t = K.geometry.depth.depth_from_disparity(\n        disparity_t, baseline=calibration_baseline, focal=calibration_focal\n    )  # HxW\n\n    # compute the point cloud from the depth image\n    points_xyz = K.geometry.depth.depth_to_3d_v2(depth_t, camera_matrix)  # HxWx3\n\n    # filter out points that are in the range of the camera\n    valid_mask = (points_xyz[..., -1:] >= 0.2) & (points_xyz[..., -1:] <= 7.5)  # HxWx1\n    valid_mask = valid_mask.repeat(1, 1, 3)  # HxWx3\n\n    points_xyz = points_xyz[valid_mask].reshape(-1, 3)  # Nx3\n')),(0,i.kt)("p",null,"Below is the code to decode the ",(0,i.kt)("inlineCode",{parentName:"p"},"disparity")," image data to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tensor"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def decode_disparity(message: oak_pb2.OakFrame, decoder: ImageDecoder) -> Tensor:\n    """Decode the disparity image from the message.\n\n    Args:\n        message (oak_pb2.OakFrame): The camera frame message.\n        decoder (ImageDecoder): The image decoder.\n\n    Returns:\n        Tensor: The disparity image tensor (HxW).\n    """\n    # decode the disparity image from the message into a dlpack tensor for zero-copy\n    disparity_dl = decoder.decode(message.image_data)\n\n    # cast the dlpack tensor to a torch tensor\n    disparity_t = torch.from_dlpack(disparity_dl)\n\n    return disparity_t[..., 0].float()  # HxW\n')),(0,i.kt)("p",null,"Additionally, we can save the ",(0,i.kt)("inlineCode",{parentName:"p"},"disparity")," image and the ",(0,i.kt)("inlineCode",{parentName:"p"},"pointcloud")," to disk by\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--save-disparity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--save-pointcloud")," flags respectively."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We highly recommend to have some basic knowledge about\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"asyncio"))),".")))}c.isMDXComponent=!0}}]);