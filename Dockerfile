FROM nginx:1.11.13-alpine
MAINTAINER jllado

COPY ./build /usr/share/nginx/html

