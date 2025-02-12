# Stage 1: Build the React app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the build with Nginx
FROM nginx:stable-alpine
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Copy the React build from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
