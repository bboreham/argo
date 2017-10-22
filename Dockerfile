FROM node:8.4.0
COPY . .
RUN npm install --production
CMD npm start
