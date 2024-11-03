FROM node:20-slim as build

WORKDIR /app

COPY package*.json .
RUN npm ci
COPY . .

FROM node:20-alpine as main

## important when we create local node modules in the container with npm install
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /home/node/app/node_modules/.vite && chmod -R 777 /home/node/app/node_modules/.vite
RUN mkdir -p /home/node/app/node_modules/.vitest && chmod -R 777 /home/node/app/node_modules/.vitest

## set the working directory of the application to /home/node/app
WORKDIR /home/node/app

## ensure the application files are owned by the non-root node user
## switch the user to node before running npm install
USER node

COPY --from=build /app /home/node/app

# This is the default port the serverless framework will 
# listen on when it starts
EXPOSE 5173

CMD [ "npm", "run", "dev"]