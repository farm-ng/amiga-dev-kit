#!/bin/bash

Help()
{
    echo "options:"
    echo "start    Start syncing to an Amiga"
    echo "stop     Stop syncing to an Amiga"
    echo "status   Display current sync sessions"
}

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

SYNC_DIR=$DIR
shopt -s extglob
SYNC_DIR=${SYNC_DIR%%+(/)}    # trim however many trailing slashes exist
SYNC_DIR=${SYNC_DIR##*/}       # remove everything before the last / that still remains
SYNC_DIR=${SYNC_DIR:-/} 

Help

echo $SYNC_DIR

state=""

while getopts s: flag
do
    case "${flag}" in
        s) state=${OPTARG};;
    esac
done

if [ ! -f /usr/local/bin/mutagen ]
then
    mkdir -p /tmp/mutagen
    cd /tmp/mutagen
    wget -c https://github.com/mutagen-io/mutagen/releases/download/v0.15.4/mutagen_linux_amd64_v0.15.4.tar.gz -O /tmp/mutagen/current.tar.gz
    tar xzf current.tar.gz
    sudo cp -f mutagen /usr/local/bin/
    sudo mkdir -p /usr/local/libexec
    sudo cp -f mutagen-agents.tar.gz /usr/local/libexec/
    rm -rf /tmp/mutagen
fi

ssh amiga 'mkdir -p /data/apps/${SYNC_DIR}'

if [[ $state == "start" ]]; then
    mutagen sync create --name=amiga \
        -i "**/build*" \
        -i "Dockerfile" \
        -i "sync.sh" \
        -i ".*" \
        -i "!.vscode" \
        -i "**/*venv*" \
        $DIR \
        amiga:/farm_ng/apps/${SYNC_DIR}
elif [[ $state == "stop" ]]; then
    mutagen sync terminate amiga
elif [[ $state == "status" ]]; then
    mutagen sync list
else
    echo "state must be either 'start or stop"
fi
