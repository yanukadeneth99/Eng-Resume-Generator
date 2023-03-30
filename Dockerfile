FROM node:18

WORKDIR /app

COPY /frontend/package.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3000

CMD [ "pnpm" , "dev" ]