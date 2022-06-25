FROM node:16.15.1

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run migrate
RUN npm run seed:all

EXPOSE ${PORT}

CMD ["npm", "run", "start"]