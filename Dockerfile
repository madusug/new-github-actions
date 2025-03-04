# Use a small Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source code
COPY . .

# Expose the port
EXPOSE 4000

# Start the application
CMD ["node", "src/server.js"]

