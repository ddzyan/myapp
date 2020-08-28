FROM node:12.18.0-alpine3.10

WORKDIR /app

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]