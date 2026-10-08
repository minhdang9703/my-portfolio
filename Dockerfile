# ==========================================
# Stage 1: Build stage
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package manifests for Docker layer caching
COPY package*.json ./

# Install exact dependencies
RUN npm ci

# Copy source code
COPY . .

# Build production bundle
RUN npm run build

# ==========================================
# Stage 2: Production serve stage with Nginx
# ==========================================
FROM nginx:alpine AS runner

# Remove default nginx static html files
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration for SPA routing & gzip
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port 80
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
