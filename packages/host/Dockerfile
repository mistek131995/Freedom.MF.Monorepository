FROM node:latest

WORKDIR ./home/source
COPY /home/source .

RUN apt update && apt -y install nginx
RUN npm install && npm run build

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]