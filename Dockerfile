FROM node:14.17-alpine as build

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

RUN yarn build
RUN rm -rf node_modules

FROM node:14.17-alpine

ENV NODE_ENV=production
WORKDIR /app

COPY --from=build /app /app
RUN yarn install

CMD [ "yarn", "run:dist" ]
