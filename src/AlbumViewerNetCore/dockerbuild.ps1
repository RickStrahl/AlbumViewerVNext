# publish the application first
dotnet publish -c Release

# clean up old image and any containers (running or not)
docker stop albumviewer
docker rm albumviewer -f 
docker rmi westwind/albumviewer:albumviewer

# create new image
docker build -t westwind/albumviewer:albumviewer .

# immediately start running the container in the background (-d)
docker run -p 5004:5000 --name albumviewer westwind/albumviewer:albumviewer

#docker stop albumviewer
#docker rm albumviewer

# docker exec -it albumviewer  /bin/bash

# # if above doesn't work
# docker exec -it albumviewer  /bin/sh