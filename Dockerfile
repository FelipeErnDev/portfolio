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

# Exponha a porta correta do Vite Preview
EXPOSE 4173

# Comando para iniciar o preview do Vite
CMD ["npm", "run", "preview"]
