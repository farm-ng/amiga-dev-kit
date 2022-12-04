from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DATA: UriSchemeType
DESCRIPTOR: _descriptor.FileDescriptor
DEVICE: UriSchemeType
FILE: UriSchemeType
OTHER: UriSchemeType
UNKNOWN: UriSchemeType

class Event(_message.Message):
    __slots__ = ["length_next", "module", "name", "uri"]
    LENGTH_NEXT_FIELD_NUMBER: _ClassVar[int]
    MODULE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    length_next: int
    module: str
    name: str
    uri: Uri
    def __init__(
        self,
        module: _Optional[str] = ...,
        name: _Optional[str] = ...,
        length_next: _Optional[int] = ...,
        uri: _Optional[_Union[Uri, _Mapping]] = ...,
    ) -> None: ...

class EventHeader(_message.Message):
    __slots__ = ["robot_name"]
    ROBOT_NAME_FIELD_NUMBER: _ClassVar[int]
    robot_name: str
    def __init__(self, robot_name: _Optional[str] = ...) -> None: ...

class Uri(_message.Message):
    __slots__ = ["authority", "path", "query", "scheme"]
    AUTHORITY_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    QUERY_FIELD_NUMBER: _ClassVar[int]
    SCHEME_FIELD_NUMBER: _ClassVar[int]
    authority: str
    path: str
    query: str
    scheme: UriSchemeType
    def __init__(
        self,
        scheme: _Optional[_Union[UriSchemeType, str]] = ...,
        authority: _Optional[str] = ...,
        path: _Optional[str] = ...,
        query: _Optional[str] = ...,
    ) -> None: ...

class UriSchemeType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
