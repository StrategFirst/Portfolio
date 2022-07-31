FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g http-server

RUN npm install

COPY . .

RUN npm i

RUN npm run-script build

CMD [ "http-server", "dist" ]
