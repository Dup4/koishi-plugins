FROM node:lts-alpine

USER root
WORKDIR /app

COPY package.json yarn.lock docker/docker_entry.sh ./

RUN npm i -g yarn \
  yarn \
  apk add chromium

EXPOSE 8080

ENTRYPOINT ["/root/docker_entry.sh"]
CMD [""]
