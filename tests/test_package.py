import farm_ng


def test_import() -> None:
    assert farm_ng.__version__ is not None
    assert farm_ng.oak is not None
    # NOTE: needs to installs deps [er module]
    # assert farm_ng.adk is not None
