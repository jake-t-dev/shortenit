FROM node:20.18.1

ENV ROOT=/app
WORKDIR ${ROOT}

COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 
COPY . .
 
CMD [ "npm", "run", "dev" ]