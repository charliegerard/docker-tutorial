FROM node:10-alpine
ADD . /var/app
WORKDIR /var/app

ENV PATH="/var/app/node_modules/.bin/:${PATH}"

RUN npm install
RUN npm run build
# CMD serve -s build
CMD npm start
EXPOSE 3000
