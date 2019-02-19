FROM node:10.15.0

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN yarn install --production

COPY . /app

EXPOSE 3000

CMD [ "yarn", "run", "prod" ]
