FROM node:16-alpine

WORKDIR /fine-wine-dist

COPY . /fine-wine-dist

RUN npm install

EXPOSE 4000

CMD node server.js
