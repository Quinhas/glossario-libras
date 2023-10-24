# Stage 1: Development
FROM node:alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN chown -R node:node /app
USER node

EXPOSE 3000
CMD npm start
