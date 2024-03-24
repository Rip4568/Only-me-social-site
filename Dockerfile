FROM node:21.7

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Gerar o cliente Prisma
RUN npx prisma generate

# Expor a porta que o aplicativo usará
EXPOSE 3000

CMD ["npm", "run", "dev"]