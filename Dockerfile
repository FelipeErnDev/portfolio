# Use uma imagem Node oficial
FROM node:18-alpine

# Crie o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Build (para projetos React/Next.js)
RUN npm run build

# Exponha a porta (ajuste conforme seu framework)
EXPOSE 3000

# Comando para iniciar (ajuste conforme seu framework)
CMD ["npm", "start"]
