#!/bin/bash

# FTP Details
HOST=$HOSTINGER_FTP_HOST
USER=$HOSTINGER_FTP_USERNAME
PASS=$HOSTINGER_FTP_PASSWORD

# Local and Remote Directories
LOCAL_DIR="."
REMOTE_DIR="/public_html/"

# Upload Files
lftp -f "
open $HOST
user $USER $PASS
mirror --reverse --delete --verbose --exclude-glob .git* $LOCAL_DIR $REMOTE_DIR
bye
"
