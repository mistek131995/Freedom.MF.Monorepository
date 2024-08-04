FROM node:latest

WORKDIR ./home/source
COPY ../../. .

RUN apt update && apt -y install nginx &&  \
    npm install @originjs/vite-plugin-federation &&  \
    npm install && npm run build

RUN mv -f ./default /etc/nginx/sites-available

EXPOSE 81

CMD ["nginx", "-g", "daemon off;"]