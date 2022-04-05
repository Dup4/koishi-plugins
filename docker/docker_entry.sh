#! /bin/bash -e

export CHROMIUM_FLAGS="$CHROMIUM_FLAGS --no-sandbox"

if [[ -z "$*" ]]; then
  yarn start
else
  exec "$@"
fi
