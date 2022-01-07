<<<<<<< HEAD
FROM microsoft/dotnet:2.0.0-sdk
=======
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
>>>>>>> 49f88b0731aad6d29045658532e5f475296e7084

MAINTAINER Rick Strahl

ENV ASPNETCORE_URLS=http://*:80
ENV ASPNETCORE_ENVIRONMENT=Production

# Allow 1433 for SQL Server Access
EXPOSE 1433

<<<<<<< HEAD
# copy publish folder contents to web root
COPY ./bin/Release/netcoreapp2.0/publish /var/www/albumviewer

=======
>>>>>>> 49f88b0731aad6d29045658532e5f475296e7084
WORKDIR /var/www/albumviewer

# copy publish folder contents to web root
COPY ./bin/Release/netcoreapp3.1/publish .

# Run out of Publish Folder
CMD ["/bin/sh", "-c", "dotnet 'AlbumViewerNetCore.dll'"]
