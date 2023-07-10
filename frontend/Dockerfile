# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json .

# Install dependencies
RUN npm i

# Copy the entire frontend directory to the container
COPY . .

EXPOSE 3000

# Set the command to start the app when the container is run
CMD ["npm", "run", "dev"]
