#!/bin/bash

# FTP Details
HOST=$HOSTINGER_FTP_HOST
USER=$HOSTINGER_FTP_USERNAME
PASS=$HOSTINGER_FTP_PASSWORD

# Local and Remote Directories
LOCAL_DIR="."
REMOTE_DIR="/public_html/"

# Upload Files
lftp -u $USER,$PASS $HOST <<EOF
set ssl:verify-certificate no
mirror --reverse --delete --verbose --exclude-glob .git* $LOCAL_DIR $REMOTE_DIR
bye
"
