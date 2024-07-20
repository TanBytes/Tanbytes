name: FTP Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Install lftp
      run: sudo apt-get update && sudo apt-get install -y lftp

    - name: Deploy to FTP
      env:
        HOSTINGER_FTP_HOST: ${{ secrets.HOSTINGER_FTP_HOST }}
        HOSTINGER_FTP_USERNAME: ${{ secrets.HOSTINGER_FTP_USERNAME }}
        HOSTINGER_FTP_PASSWORD: ${{ secrets.HOSTINGER_FTP_PASSWORD }}
      run: |
        #!/bin/bash
        HOST=$HOSTINGER_FTP_HOST
        USER=$HOSTINGER_FTP_USERNAME
        PASS=$HOSTINGER_FTP_PASSWORD
        LOCAL_DIR="."
        REMOTE_DIR="/public_html/"

        lftp -u $USER,$PASS $HOST <<EOF
        set ssl:verify-certificate no
        mirror --reverse --delete --verbose --exclude-glob .git* $LOCAL_DIR $REMOTE_DIR
        bye
        EOF
