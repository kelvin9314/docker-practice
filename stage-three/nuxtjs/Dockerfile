FROM node:12-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/nuxt-app/
RUN npm install

RUN npm run build

EXPOSE 5000

ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=5000

USER node

CMD [ "npm", "start" ]
