# Use uma imagem oficial do Node.js como base
FROM node:latest

# Crie um diretório de trabalho
WORKDIR /app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Compile o TypeScript
RUN node ace build

# Exponha a porta da aplicação
EXPOSE 3333

# Comando para iniciar a aplicação
CMD ["node", "build/server.js"]