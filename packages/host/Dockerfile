FROM node:latest

WORKDIR ./home/source
COPY ../../. .

RUN ls
RUN apt update && apt -y install nginx
RUN npm install @originjs/vite-plugin-federation && npm install && npm run build

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]