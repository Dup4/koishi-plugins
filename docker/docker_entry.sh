#! /bin/sh

if [ -z "$*" ]; then
  yarn start
else
  exec "$@"
fi
