#! /bin/bash

apt update

apt install -y \
  chromium \
  chromium-driver \
  fonts-ipafont-gothic \
  fonts-wqy-zenhei \
  fonts-thai-tlwg \
  fonts-kacst \
  fonts-freefont-ttf \
  libxss1 \
  --no-install-recommends

# fonts-bpg-georgia \

rm -rf /var/lib/apt/lists/*

yarn install --prod
