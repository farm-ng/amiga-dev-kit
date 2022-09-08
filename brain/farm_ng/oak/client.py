import logging
from dataclasses import dataclass

import grpc
from farm_ng.oak import oak_pb2
from farm_ng.oak import oak_pb2_grpc

__all__ = ["OakCameraClientConfig", "OakCameraClient", "OakCameraServiceState"]


logging.basicConfig(level=logging.DEBUG)


@dataclass
class OakCameraClientConfig:
    """Camera client configuration.

    Attributes:
        port (int): the port to connect to the server.
        address (str): the address to connect to the server.
    """

    port: int  # the port of the server address
    address: str = "localhost"  # the address name of the server


class OakCameraServiceState:
    """Camera service state.

    Possible state values:
        - UNKNOWN: undefined state.
        - RUNNING: the service is up AND streaming.
        - IDLE: the service is up AND NOT streaming.
        - UNAVAILABLE: the service is not available.

    Args:
        proto (oak_pb2.OakServiceState): protobuf message containing the camera state.
    """

    def __init__(self, proto: oak_pb2.OakServiceState = None) -> None:
        self._proto = proto or oak_pb2.OakServiceState.UNAVAILABLE

    @property
    def value(self) -> int:
        """Returns the state enum value."""
        return self._proto

    @property
    def name(self) -> str:
        """Return the state name."""
        return oak_pb2.OakServiceState.DESCRIPTOR.values[self.value].name

    def __repr__(self) -> str:
        return f"{self.__class__.__name__}: ({self.value}, {self.name})"


class OakCameraClient:
    """Oak-D camera client.

    Client class to connect with the Amiga brain camera services.
    Internally implements an `asyncio` gRPC channel.

    Args:
        config (OakCameraClientConfig): the camera configuration data structure.
    """

    def __init__(self, config: OakCameraClientConfig) -> None:
        self.config = config

        self.logger = logging.getLogger(self.__class__.__name__)

        # create a async connection with the server
        self.channel = grpc.aio.insecure_channel(self.server_address)
        self.stub = oak_pb2_grpc.OakServiceStub(self.channel)

    @property
    def server_address(self) -> str:
        """Returns the composed address and port."""
        return f"{self.config.address}:{self.config.port}"

    async def get_state(self) -> OakCameraServiceState:
        """Async call to retrieve the state of the connected service."""
        state: OakCameraServiceState
        try:
            response: oak_pb2.GetServiceStateResponse = await self.stub.getServiceState(
                oak_pb2.GetServiceStateRequest()
            )
            state = OakCameraServiceState(response.state)
        except grpc.RpcError:
            state = OakCameraServiceState()
        self.logger.debug(f"OakServiceStub: port -> {self.config.port} state is: {state.name}")
        return state

    async def start_service(self) -> None:
        """Start the camera streaming.

        The service state will go from `IDLE` to `RUNNING`.
        """
        state: OakCameraServiceState = await self.get_state()
        if state.value == oak_pb2.OakServiceState.UNAVAILABLE:
            return
        await self.stub.startService(oak_pb2.StartServiceRequest())

    async def pause_service(self) -> None:
        """Pauses the camera streaming.

        The service state will go from `RUNNING` to `IDLE`.
        """
        state: OakCameraServiceState = await self.get_state()
        if state.value == oak_pb2.OakServiceState.UNAVAILABLE:
            return
        await self.stub.pauseService(oak_pb2.PauseServiceRequest())

    def stream_frames(self, every_n: int):
        """Return the async streaming object.

        Args:
            every_n: the streaming frequency. In practice, drops `n` frames.
        """
        return self.stub.streamFrames(oak_pb2.StreamFramesRequest(every_n=every_n))
