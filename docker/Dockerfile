FROM node:lts-bullseye

USER root
WORKDIR /app/

COPY package.json yarn.lock ./docker/docker_entry.sh ./docker/install.sh ./

ENV DEBIAN_FRONTEND=noninteractive \
  CONTAINER_TIMEZONE=Asia/Shanghai

RUN bash install.sh \
  && rm install.sh

EXPOSE 8080

ENTRYPOINT ["/app/docker_entry.sh"]
CMD [""]
