FROM node:18.15.0

# Install Yarn
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y yarn && \
    apt-get clean

RUN useradd -m bot

USER bot

RUN mkdir /home/bot/app

WORKDIR /home/bot/app

COPY package*.json ./

RUN yarn install

COPY . .