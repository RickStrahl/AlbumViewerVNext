# Shut down running container
docker rm nginxalbumviewer -f

# Have to copy files from wwwroot in order to be part of context
robocopy ./src/albumviewernetcore/wwwroot ./nginx/wwwroot /MIR

# Build the image
docker build -t nginxalbumviewer:nginxalbumviewer ./nginx

# Run it
docker run -p 5003:80 --name nginxalbumviewer nginxalbumviewer:nginxalbumviewer


#docker stop nginxalbumviewer
#docker rm nginxalbumviewer

# docker exec -it nginxalbumviewer  /bin/bash

# # if above doesn't work
# docker exec -it nginxalbumviewer  /bin/sh