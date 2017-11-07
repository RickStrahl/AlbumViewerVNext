dotnet publish -c Release

docker stop albumviewer
docker rm albumviewer -f
docker rmi westwind/albumviewer:albumviewer

docker build -t westwind/albumviewer:albumviewer .
docker run  -d -p 5004:80 --name albumviewer westwind/albumviewer:albumviewer 

#docker stop albumviewer
#docker rm albumviewer

# docker exec -it albumviewer  /bin/bash

# # if above doesn't work
# docker exec -it albumviewer  /bin/sh