FROM arm32v7/node
WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "server.js" ]