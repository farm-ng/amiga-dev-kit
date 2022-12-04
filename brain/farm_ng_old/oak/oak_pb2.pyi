from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import (
    ClassVar as _ClassVar,
    Iterable as _Iterable,
    Mapping as _Mapping,
    Optional as _Optional,
    Union as _Union,
)

DESCRIPTOR: _descriptor.FileDescriptor
FAILED: ReplyStatus
IDLE: OakServiceState
OK: ReplyStatus
RUNNING: OakServiceState
STOPPED: OakServiceState
UNAVAILABLE: OakServiceState
UNKNOWN: OakServiceState

class CameraSettings(_message.Message):
    __slots__ = ["auto_exposure", "exposure_time", "iso_value", "lens_pos"]
    AUTO_EXPOSURE_FIELD_NUMBER: _ClassVar[int]
    EXPOSURE_TIME_FIELD_NUMBER: _ClassVar[int]
    ISO_VALUE_FIELD_NUMBER: _ClassVar[int]
    LENS_POS_FIELD_NUMBER: _ClassVar[int]
    auto_exposure: bool
    exposure_time: int
    iso_value: int
    lens_pos: int
    def __init__(
        self,
        auto_exposure: bool = ...,
        exposure_time: _Optional[int] = ...,
        iso_value: _Optional[int] = ...,
        lens_pos: _Optional[int] = ...,
    ) -> None: ...

class GetServiceStateRequest(_message.Message):
    __slots__ = ["message"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...

class GetServiceStateResult(_message.Message):
    __slots__ = ["state", "state_name", "status"]
    STATE_FIELD_NUMBER: _ClassVar[int]
    STATE_NAME_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    state: OakServiceState
    state_name: str
    status: ReplyStatus
    def __init__(
        self,
        state_name: _Optional[str] = ...,
        state: _Optional[_Union[OakServiceState, str]] = ...,
        status: _Optional[_Union[ReplyStatus, str]] = ...,
    ) -> None: ...

class Metadata(_message.Message):
    __slots__ = ["pairs"]
    PAIRS_FIELD_NUMBER: _ClassVar[int]
    pairs: _containers.RepeatedCompositeFieldContainer[Pair]
    def __init__(self, pairs: _Optional[_Iterable[_Union[Pair, _Mapping]]] = ...) -> None: ...

class OakAccelero(_message.Message):
    __slots__ = ["accelero", "accuracy", "sequence_num", "timestamp", "timestamp_device"]
    ACCELERO_FIELD_NUMBER: _ClassVar[int]
    ACCURACY_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_NUM_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_DEVICE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    accelero: Vec3F32
    accuracy: str
    sequence_num: int
    timestamp: float
    timestamp_device: float
    def __init__(
        self,
        accelero: _Optional[_Union[Vec3F32, _Mapping]] = ...,
        sequence_num: _Optional[int] = ...,
        accuracy: _Optional[str] = ...,
        timestamp: _Optional[float] = ...,
        timestamp_device: _Optional[float] = ...,
    ) -> None: ...

class OakDataSample(_message.Message):
    __slots__ = ["frame", "metadata"]
    FRAME_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    frame: OakSyncFrame
    metadata: Metadata
    def __init__(
        self,
        frame: _Optional[_Union[OakSyncFrame, _Mapping]] = ...,
        metadata: _Optional[_Union[Metadata, _Mapping]] = ...,
    ) -> None: ...

class OakDeviceInfo(_message.Message):
    __slots__ = ["ip", "mxid", "name"]
    IP_FIELD_NUMBER: _ClassVar[int]
    MXID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ip: str
    mxid: str
    name: str
    def __init__(self, name: _Optional[str] = ..., mxid: _Optional[str] = ..., ip: _Optional[str] = ...) -> None: ...

class OakFrame(_message.Message):
    __slots__ = ["image_data", "meta"]
    IMAGE_DATA_FIELD_NUMBER: _ClassVar[int]
    META_FIELD_NUMBER: _ClassVar[int]
    image_data: bytes
    meta: OakImageMeta
    def __init__(
        self, meta: _Optional[_Union[OakImageMeta, _Mapping]] = ..., image_data: _Optional[bytes] = ...
    ) -> None: ...

class OakGyro(_message.Message):
    __slots__ = ["accuracy", "gyro", "sequence_num", "timestamp", "timestamp_device"]
    ACCURACY_FIELD_NUMBER: _ClassVar[int]
    GYRO_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_NUM_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_DEVICE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    accuracy: str
    gyro: Vec3F32
    sequence_num: int
    timestamp: float
    timestamp_device: float
    def __init__(
        self,
        gyro: _Optional[_Union[Vec3F32, _Mapping]] = ...,
        sequence_num: _Optional[int] = ...,
        accuracy: _Optional[str] = ...,
        timestamp: _Optional[float] = ...,
        timestamp_device: _Optional[float] = ...,
    ) -> None: ...

class OakImageMeta(_message.Message):
    __slots__ = ["category", "instance_num", "sequence_num", "settings", "timestamp", "timestamp_device"]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    INSTANCE_NUM_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_NUM_FIELD_NUMBER: _ClassVar[int]
    SETTINGS_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_DEVICE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    category: int
    instance_num: int
    sequence_num: int
    settings: CameraSettings
    timestamp: float
    timestamp_device: float
    def __init__(
        self,
        category: _Optional[int] = ...,
        instance_num: _Optional[int] = ...,
        sequence_num: _Optional[int] = ...,
        timestamp: _Optional[float] = ...,
        timestamp_device: _Optional[float] = ...,
        settings: _Optional[_Union[CameraSettings, _Mapping]] = ...,
    ) -> None: ...

class OakImuPacket(_message.Message):
    __slots__ = ["accelero_packet", "gyro_packet"]
    ACCELERO_PACKET_FIELD_NUMBER: _ClassVar[int]
    GYRO_PACKET_FIELD_NUMBER: _ClassVar[int]
    accelero_packet: OakAccelero
    gyro_packet: OakGyro
    def __init__(
        self,
        gyro_packet: _Optional[_Union[OakGyro, _Mapping]] = ...,
        accelero_packet: _Optional[_Union[OakAccelero, _Mapping]] = ...,
    ) -> None: ...

class OakImuPackets(_message.Message):
    __slots__ = ["packets"]
    PACKETS_FIELD_NUMBER: _ClassVar[int]
    packets: _containers.RepeatedCompositeFieldContainer[OakImuPacket]
    def __init__(self, packets: _Optional[_Iterable[_Union[OakImuPacket, _Mapping]]] = ...) -> None: ...

class OakNNData(_message.Message):
    __slots__ = ["data", "height", "meta", "num_channels", "width"]
    DATA_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    META_FIELD_NUMBER: _ClassVar[int]
    NUM_CHANNELS_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    data: bytes
    height: int
    meta: OakImageMeta
    num_channels: int
    width: int
    def __init__(
        self,
        meta: _Optional[_Union[OakImageMeta, _Mapping]] = ...,
        num_channels: _Optional[int] = ...,
        height: _Optional[int] = ...,
        width: _Optional[int] = ...,
        data: _Optional[bytes] = ...,
    ) -> None: ...

class OakSyncFrame(_message.Message):
    __slots__ = ["device_info", "disparity", "imu_packets", "left", "nn", "rgb", "right", "sequence_num"]
    DEVICE_INFO_FIELD_NUMBER: _ClassVar[int]
    DISPARITY_FIELD_NUMBER: _ClassVar[int]
    IMU_PACKETS_FIELD_NUMBER: _ClassVar[int]
    LEFT_FIELD_NUMBER: _ClassVar[int]
    NN_FIELD_NUMBER: _ClassVar[int]
    RGB_FIELD_NUMBER: _ClassVar[int]
    RIGHT_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_NUM_FIELD_NUMBER: _ClassVar[int]
    device_info: OakDeviceInfo
    disparity: OakFrame
    imu_packets: OakImuPackets
    left: OakFrame
    nn: OakNNData
    rgb: OakFrame
    right: OakFrame
    sequence_num: int
    def __init__(
        self,
        left: _Optional[_Union[OakFrame, _Mapping]] = ...,
        right: _Optional[_Union[OakFrame, _Mapping]] = ...,
        rgb: _Optional[_Union[OakFrame, _Mapping]] = ...,
        disparity: _Optional[_Union[OakFrame, _Mapping]] = ...,
        nn: _Optional[_Union[OakNNData, _Mapping]] = ...,
        imu_packets: _Optional[_Union[OakImuPackets, _Mapping]] = ...,
        sequence_num: _Optional[int] = ...,
        device_info: _Optional[_Union[OakDeviceInfo, _Mapping]] = ...,
    ) -> None: ...

class Pair(_message.Message):
    __slots__ = ["key", "value"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    key: str
    value: str
    def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class PauseServiceRequest(_message.Message):
    __slots__ = ["message"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...

class PauseServiceResult(_message.Message):
    __slots__ = ["message", "status"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    message: str
    status: ReplyStatus
    def __init__(self, message: _Optional[str] = ..., status: _Optional[_Union[ReplyStatus, str]] = ...) -> None: ...

class StartServiceRequest(_message.Message):
    __slots__ = ["message"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...

class StartServiceResult(_message.Message):
    __slots__ = ["message", "status"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    message: str
    status: ReplyStatus
    def __init__(self, message: _Optional[str] = ..., status: _Optional[_Union[ReplyStatus, str]] = ...) -> None: ...

class StopServiceRequest(_message.Message):
    __slots__ = ["message"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...

class StopServiceResult(_message.Message):
    __slots__ = ["message", "status"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    message: str
    status: ReplyStatus
    def __init__(self, message: _Optional[str] = ..., status: _Optional[_Union[ReplyStatus, str]] = ...) -> None: ...

class StreamFramesReply(_message.Message):
    __slots__ = ["frame", "status"]
    FRAME_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    frame: OakSyncFrame
    status: ReplyStatus
    def __init__(
        self, status: _Optional[_Union[ReplyStatus, str]] = ..., frame: _Optional[_Union[OakSyncFrame, _Mapping]] = ...
    ) -> None: ...

class StreamFramesRequest(_message.Message):
    __slots__ = ["every_n"]
    EVERY_N_FIELD_NUMBER: _ClassVar[int]
    every_n: int
    def __init__(self, every_n: _Optional[int] = ...) -> None: ...

class Vec3F32(_message.Message):
    __slots__ = ["x", "y", "z"]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    Z_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    z: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ..., z: _Optional[float] = ...) -> None: ...

class ReplyStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []

class OakServiceState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
