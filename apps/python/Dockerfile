# python

FROM node:16.15.1

RUN apt-get update || : && apt-get install python -y

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["python3","-u", "index.py"]