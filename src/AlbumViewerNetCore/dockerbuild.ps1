# publish the application first
dotnet publish -c Release

# clean up old image and any containers (running or not)
docker stop albumviewer
docker rm albumviewer -f 
docker rmi rickstrahl/albumviewer:albumviewer

# create new image
docker build -t rickstrahl/albumviewer:albumviewer .

# immediately start running the container in the background (-d) (no console)
docker run  -it -p 5004:80 --name albumviewer  rickstrahl/albumviewer:albumviewer 

# Map host IP to a domain - so we can access local SQL server
# $localIpAddress=((ipconfig | findstr [0-9].\.)[0]).Split()[-1]
#--add-host dev.west-wind.com:$localIpAddress

#docker stop albumviewer
#docker rm albumviewer

# docker exec -it albumviewer  /bin/bash

# # if above doesn't work
# docker exec -it albumviewer  /bin/sh

#docker push 
