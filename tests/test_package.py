import farm_ng

# NOTE: needs to installs deps [er module]
# import farm_ng.adk


def test_smoke():
    assert farm_ng.__version__ is not None
