# Node js base image
FROM node:14

# Set working directory on container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose PORT 3000
EXPOSE 3000

# Start server
CMD ["npm", "start"]
