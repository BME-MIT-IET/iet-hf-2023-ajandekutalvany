FROM node:18
ENV JQ_VERSION=1.6
RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
RUN cp /tmp/jq-linux64 /usr/bin/jq
RUN chmod +x /usr/bin/jq
WORKDIR /app
COPY . .
RUN jq 'to_entries | map_values({ (.key) : ("$" + .key) }) | reduce .[] as $item ({}; . + $item)' ./public/config.json > ./public/config.tmp.json && mv ./public/config.tmp.json ./public/config.json
RUN npm install && npm run build

FROM nginx:1.19

ENV CONF_FILE=/usr/share/nginx/html/config.json

COPY ./start-nginx.sh /usr/bin/start-nginx.sh
RUN chmod +x /usr/bin/start-nginx.sh

WORKDIR /usr/share/nginx/html

# Reactsrc
COPY --from=0 /app/build .
ENTRYPOINT [ "start-nginx.sh" ]


#Guide: https://developers.redhat.com/blog/2021/03/04/making-environment-variables-accessible-in-front-end-containers#inject_the_environment_variables