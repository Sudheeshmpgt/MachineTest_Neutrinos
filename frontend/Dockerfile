FROM node:16.14.2
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install  -g npm@8.14.0
RUN npm install -g @angular/cli
COPY . /usr/src/app/
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]