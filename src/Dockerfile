
#  Construire l'application React avec Node.js

FROM node:14 AS builder

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build
# Déployer l'application dans un serveur NGINX
FROM nginx:alpine

# Supprimer la configuration par défaut de NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers construits à partir de l'étape précédente dans le répertoire de déploiement de NGINX
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application depuis l'extérieur
EXPOSE 80

# Démarrer le serveur NGINX
CMD ["nginx", "-g", "daemon off;"]