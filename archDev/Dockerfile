# base image
FROM node:8.9.4-alpine as node

# main directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2

FROM nginx:1.15.8-alpine as nginx

COPY --from=node /usr/src/app/dist/archDev /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/xonf.d/default.conf
