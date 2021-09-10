FROM node:14.17-slim

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

# because we still require devDependencies (at least `tsc`) to run it
RUN yarn install --production=false

COPY . .

CMD [ "yarn", "start" ]
