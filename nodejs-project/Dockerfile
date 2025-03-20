# Use official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY app/package*.json ./
RUN npm install

# Copy the application code
COPY app/ .

# Expose port 3000
EXPOSE 3000

# Run the Node.js app
CMD [ "npm", "start" ]

