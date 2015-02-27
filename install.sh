#!/bin/bash
set -e

# check git
if ! hash git 2>/dev/null; then
  echo "git not installed"
  exit 1
fi

# check scss-lint
if ! hash scss-lint 2>/dev/null; then
  echo "scss-lint not installed"
  exit 1
fi

# check jshint
if ! hash jshint 2>/dev/null; then
  echo "jshint not installed"
  exit 1
fi

# check already installed
if [ -d "~/.cinderblock" ]; then
  echo "cinderblock already exists"
  echo "if you want to reinstall run rm -r ~/.cinderblock && rm /usr/local/bin/cinderblock"
  exit 1
fi

# install cinderblock
git clone https://github.com/jaxgeller/cinderblock.git ~/.cinderblock
chmod +x ~/.cinderblock/cinderblock
ln -s ~/.cinderblock/cinderblock /usr/local/bin/cinderblock
echo "cinderblock installed"
exit
