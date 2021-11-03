FROM node:12-slim

ENV PORT=3000

WORKDIR /app
COPY . . 

RUN yarn
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
