# Koishi Bot

## Docker

### Build

```bash
docker build -t koishi-bot -f docker/Dockerfile ./

# dev
docker build -t koishi-bot -f docker/Dockerfile.dev ./
```

### Start

```bash
docker run \
  -it \
  -d \
  -p 8080:8080 \
  --name=koishi-bot \
  -v "${PWD}/data":/app/data \
  -v "${PWD}/koishi.yml":/app/koishi.yml \
  koishi-bot
```
