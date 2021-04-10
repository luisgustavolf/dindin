FROM mhart/alpine-node:14

RUN mkdir /app

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
