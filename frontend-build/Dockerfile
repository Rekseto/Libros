FROM node:10
# Create app directory
WORKDIR /usr/src/app

RUN npm install --global --unsafe-perm serve
# Copy app source code
COPY ./build .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application
CMD /wait

EXPOSE 80