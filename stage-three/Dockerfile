FROM node:12-alpine

WORKDIR /usr/app

RUN npm install --global pm2

COPY ./package-lock.json ./
# COPY ./package.json ./
# COPY ./yarn.lock ./

RUN npm install --production

# Copy all files
COPY ./ ./ 

RUN npm run build

EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]