# Use the official Node.js image as base
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build TypeScript code
RUN npm run build

# Expose port 3000
EXPOSE 8000

# Command to run the application
CMD ["npm", "start"]
