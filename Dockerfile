FROM node:15.5.1
RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server
COPY ./src/server /usr/src/app/server
RUN npm install
EXPOSE 3000
CMD npm start