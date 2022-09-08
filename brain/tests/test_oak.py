import pytest
from farm_ng.oak import oak_pb2
from farm_ng.oak.client import OakCameraClient
from farm_ng.oak.client import OakCameraClientConfig
from farm_ng.oak.client import OakCameraServiceState


@pytest.fixture
def config() -> OakCameraClientConfig:
    return OakCameraClientConfig(port=50051)


class TestOakClient:
    def test_smoke_config(self, config: OakCameraClientConfig) -> None:
        assert config.port == 50051
        assert config.address == "localhost"

    def test_smoke(self, config: OakCameraClientConfig) -> None:
        client = OakCameraClient(config)
        assert client is not None
        assert client.server_address == "localhost:50051"

    @pytest.mark.asyncio
    async def test_state(self, config: OakCameraClientConfig) -> None:
        client = OakCameraClient(config)
        state: OakCameraServiceState = await client.get_state()
        assert state.value == oak_pb2.OakServiceState.UNAVAILABLE
