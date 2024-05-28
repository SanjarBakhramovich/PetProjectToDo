FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install -g tailwindcss

RUN tailwindcss build styles.css -o output.css

EXPOSE 3000

CMD ["npx", "serve", "."]
