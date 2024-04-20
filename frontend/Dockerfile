FROM node:20 as build

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install typescript -g
RUN npm install

COPY . /app

RUN npm run build
RUN rm -rf ./node_modules

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
COPY /nginx.conf /etc/nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
