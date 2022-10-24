#!/bin/bash -ex
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

/farm_ng/bootstrap.sh $DIR $DIR/venv

$DIR/venv/bin/python $DIR/main.py

exit 0
