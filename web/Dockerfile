# Use Node for building
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Use a lightweight server image for serving static files
FROM node:18-alpine

# Install `serve` to serve the built app
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/dist /app/dist

# Set working directory
WORKDIR /app

EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "dist"]
