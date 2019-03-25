FROM node:10.15.0
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
EXPOSE 3000
CMD [ "yarn", "run", "prod" ]
