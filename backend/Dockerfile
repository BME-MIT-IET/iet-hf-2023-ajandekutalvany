# ⚒ Build the builder image
FROM node:18-bullseye AS prodbuild

# 🤫 Silence npm
ENV NPM_CONFIG_LOGLEVEL=error

# 👇 Create working directory and assign ownership
WORKDIR /code

# 👇 Copy config files and source
COPY package*.json tsconfig.json ./
COPY prisma ./prisma/

# 👇 Install deps and build source
RUN yarn install --frozen-lockfile

COPY src ./src
RUN yarn build

# 🚀 Build the runner image
FROM node:18-bullseye-slim AS runner

# Add openssl and tini
RUN apt-get -qy update && apt-get -qy install openssl tini

# Tini is now available at /sbin/tini
ENTRYPOINT ["/usr/bin/tini", "--"]

# 👇 Create working directory and assign ownership
WORKDIR /code

# 👇 Copy the built app from the prodbuild image
COPY --from=prodbuild /code ./

# ⚙️ Configure the default command
CMD ["npm", "run", "start:prod"]