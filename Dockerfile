FROM node:9
RUN mkdir /home/skcd
RUN chmod 755 /home/skcd
COPY . /home/skcd
WORKDIR /home/skcd
RUN npm i
EXPOSE 3000
CMD ["node", "app.js"]