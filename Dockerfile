FROM node:erbium-alpine3.14

WORKDIR /app

COPY package.json .

RUN npm

COPY . .

RUN npm build

EXPOSE 3000
CMD [ "npm", "start:prod" ]