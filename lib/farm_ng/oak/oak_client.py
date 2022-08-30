import logging
from dataclasses import dataclass

import grpc
from farm_ng.oak import oak_pb2, oak_pb2_grpc

__all__ = ["OakCameraClientConfig", "OakCameraClient"]


logging.basicConfig(level=logging.DEBUG)


@dataclass
class OakCameraClientConfig:
    port: int  # the port of the server address
    address: str = "localhost"  # the address name of the server
    update_state_frequency: int = 2  # the frequency in floating secondd to ping the service and update the state


# TODO: explore using inheritance
class OakCameraServiceState:
    def __init__(self, proto: oak_pb2.OakServiceState = None) -> None:
        self._proto = proto or oak_pb2.OakServiceState.UNAVAILABLE

    @property
    def value(self) -> int:
        return self._proto

    @property
    def name(self) -> str:
        return oak_pb2.OakServiceState.DESCRIPTOR.values[self.value].name

    def __repr__(self) -> str:
        return f"{self.__class__.__name__}: ({self.value}, {self.name})"


class OakCameraClient:
    def __init__(self, config: OakCameraClientConfig) -> None:
        self.config = config

        self.logger = logging.getLogger(self.__class__.__name__)

        # create a async connection with the server
        self.channel = grpc.aio.insecure_channel(self.server_address)
        self.stub = oak_pb2_grpc.OakServiceStub(self.channel)

    @property
    def server_address(self) -> str:
        return f"{self.config.address}:{self.config.port}"

    async def get_state(self) -> OakCameraServiceState:
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
        state: OakCameraServiceState = await self.get_state()
        if state.value == oak_pb2.OakServiceState.UNAVAILABLE:
            return
        await self.stub.startService(oak_pb2.StartServiceRequest())

    async def pause_service(self) -> None:
        state: OakCameraServiceState = await self.get_state()
        if state.value == oak_pb2.OakServiceState.UNAVAILABLE:
            return
        await self.stub.pauseService(oak_pb2.PauseServiceRequest())

    def stream_frames(self, every_n: int):
        return self.stub.streamFrames(oak_pb2.StreamFramesRequest(every_n=every_n))
