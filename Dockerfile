FROM node:12.19.0-alpine3.12 as build

RUN apk add --no-cache tzdata
ENV TZ America/Sao_Paulo
