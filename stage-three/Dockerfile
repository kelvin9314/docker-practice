FROM node:12-alpine

WORKDIR /usr/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

# Copy all files
COPY ./ ./ 

RUN  yarn build

EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script when container starts
CMD [ "npm", "start" ]