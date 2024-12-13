FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn next telemetry disable
RUN yarn run build

FROM node:20-alpine AS production
WORKDIR /app

COPY --from=builder ./app/package*.json ./
COPY --from=builder ./app/yarn*.lock ./
COPY --from=builder ./app/next.config.mjs ./
COPY --from=builder ./app/.next/standalone ./
COPY --from=builder ./app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]

