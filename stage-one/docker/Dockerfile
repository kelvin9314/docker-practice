# FROM node:12-alpine
# WORKDIR /usr/src/app

## nginx
# FROM nginx:latest
# COPY ./build /usr/share/nginx/html

## apache 
FROM httpd:2.4-alpine
RUN apk update
RUN apk upgrade
RUN apk add bash
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i 's#AllowOverride [Nn]one#AllowOverride All#' /usr/local/apache2/conf/httpd.conf
