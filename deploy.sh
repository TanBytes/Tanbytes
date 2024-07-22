#!/bin/bash

# FTP Details
HOST=$HOSTINGER_FTP_HOST
USER=$HOSTINGER_FTP_USERNAME
PASS=$HOSTINGER_FTP_PASSWORD

# Local and Remote Directories
LOCAL_DIR="."
REMOTE_DIR="/public_html/"

# Get list of staged files
STAGED_FILES=$(git diff --name-only --cached)

# Upload Staged Files
lftp -u $USER,$PASS $HOST <<EOF
set ssl:verify-certificate no
$(for file in $STAGED_FILES; do
  echo "put -O $REMOTE_DIR $LOCAL_DIR/$file"
done)
bye
EOF
