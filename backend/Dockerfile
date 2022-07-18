FROM node:16.14.2
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install  -g npm@8.14.0
COPY . /usr/src/app/
EXPOSE 9000
CMD ["npm", "start"]