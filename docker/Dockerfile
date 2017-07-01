FROM node:latest

WORKDIR /workspace
RUN npm install -g gulp

COPY ./entrypoint.sh /
CMD [ "bash", "/entrypoint.sh"]
