#! /bin/bash

# https://www.itzgeek.com/how-tos/linux/centos-how-tos/how-to-run-google-chrome-as-root-fedora-16-centos-6-rhel-6.html
# https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md

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

# https://debian.pkgs.org/11/debian-main-arm64/fonts-bpg-georgian_2012-5_all.deb.html
# fonts-bpg-georgia \

rm -rf /var/lib/apt/lists/*

yarn install --prod
