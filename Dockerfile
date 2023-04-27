FROM node:18-bullseye

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --no-save

COPY src ./src
COPY tsconfig.json .

COPY .env .

RUN npm run build

EXPOSE 4000

CMD [ "node", "--require","./dist/index.js" ]
