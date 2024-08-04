FROM node:latest

WORKDIR ./home/source
COPY /home/source/. .

RUN apt update && apt -y install nginx &&  \
    npm install @originjs/vite-plugin-federation &&  \
    npm install && npm run build_host

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]