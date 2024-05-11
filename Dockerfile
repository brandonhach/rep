FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN apk --no-cache add --virtual builds-dependencies build-base python3 make && npm i bcrypt && npm rebuild bcrypt --build-from-source  
RUN npm install

COPY . . 
EXPOSE 3000
CMD npm run dev
