# dotnet publish -c Release
# robocopy ./src/albumviewernetcore/wwwroot ./nginx/wwwroot /MIR

docker rm westwind/albumviewer -f
docker rm nginxalbumviewer -f

docker-compose build

# docker-compose up
# docker-compose down

# docker network inspect albumviewervnext_app-network