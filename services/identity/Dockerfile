# Set the node version
FROM node:12

# Create app directory
WORKDIR /usr/src/service

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY ./build .

EXPOSE 8080

CMD [ "npm run start", "" ]