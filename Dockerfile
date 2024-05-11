FROM node:21-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install pnpm -g

COPY . .
RUN pnpm build

# Step 2: Set up the production environment
FROM nginx:latest AS production
WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html
#COPY ./dist /usr/share/nginx/html
# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]