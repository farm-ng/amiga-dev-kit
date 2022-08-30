#!/usr/bin/env python3
from pathlib import Path

from setuptools import Command, setup
from setuptools.command.develop import develop
from setuptools.command.install import install


class BuildProtosCommand(Command):
    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        from grpc_tools import command

        command.build_package_protos(self.distribution.package_dir[""])


class CleanFilesCommand(Command):
    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        proto_files_root = Path(self.distribution.package_dir[""]) / "farm_ng"
        for proto_file in proto_files_root.rglob("*_pb2*.py"):
            assert proto_file.unlink() is None


class BuildProtosInstall(install):
    def run(self):
        # 1. Build the protobufs
        BuildProtosCommand.run(self)
        # 2. Run the installation
        install.run(self)
        # 3. Clean the generated protobufs
        CleanFilesCommand.run(self)


class BuildProtosDevelop(develop):
    def run(self):
        # 1. Build the protobufs
        BuildProtosCommand.run(self)
        # 2. Run the installation
        develop.run(self)


setup(
    cmdclass={
        "build_package_protos": BuildProtosCommand,
        "install": BuildProtosInstall,
        "develop": BuildProtosDevelop,
        "clean": CleanFilesCommand,
    }
)
