# Use the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /backend

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
RUN ls -l /backend

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["node", "app.cjs"]

