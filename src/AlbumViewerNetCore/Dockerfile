FROM microsoft/dotnet:1.1.1-sdk

MAINTAINER Rick Strahl

ENV ASPNETCORE_URLS=http://*:5000
ENV ASPNETCORE_ENVIRONMENT=Development

# Allow 1433 for SQL Server Access
EXPOSE 1433

# copy publish folder contents to web root
COPY ./bin/Release/netcoreapp1.1/publish /var/www/albumviewer

WORKDIR /var/www/albumviewer

# Run out of Publish Folder
CMD ["/bin/sh", "-c", "dotnet 'AlbumViewerNetCore.dll'"]