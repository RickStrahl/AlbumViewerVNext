FROM nginx:alpine

MAINTAINER Rick Strahl

# Copy custom nginx config
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY src/AlbumViewerNetCore/wwwroot /usr/share/nginx/html

EXPOSE 80 443

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]