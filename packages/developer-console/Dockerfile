FROM node:latest

WORKDIR ./home/source
COPY . .

RUN apt update && apt -y install nginx && apt -y install nano
RUN npm install && npm run build
RUN mv -f ./default /etc/nginx/sites-available

EXPOSE 83

CMD ["nginx", "-g", "daemon off;"]