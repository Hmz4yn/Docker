# Use the official Nginx image
FROM nginx:alpine

# Copy the static files to Nginx's default folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
