FROM node:12-alpine
WORKDIR /react-my-website
COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
CMD ["npm", "start"]