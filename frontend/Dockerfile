FROM node:10
# Create app directory
WORKDIR /usr/src/app

RUN npm install --global --unsafe-perm serve
# Copy app source code
COPY ./build .

#Expose port and start application
EXPOSE 80