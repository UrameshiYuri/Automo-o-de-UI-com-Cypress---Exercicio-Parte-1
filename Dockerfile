FROM cypress/base:latest

WORKDIR /home/cypress

RUN apt-get update && apt-get install -y default-jre

COPY package*.json ./

RUN npm install
RUN npx cypress install
RUN npx cypress verify

COPY . .

VOLUME ["/home/cypress/allure-report"]

CMD ["npm", "run", "test:allure"]