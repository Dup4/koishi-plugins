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
  fonts-bpg-georgia \
  libxss1 \
  --no-install-recommends

rm -rf /var/lib/apt/lists/*

yarn install --prod
