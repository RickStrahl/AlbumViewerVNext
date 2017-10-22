FROM microsoft/aspnetcore:2.0.0

MAINTAINER Rick Strahl

ENV ASPNETCORE_URLS=http://*:5000
ENV ASPNETCORE_ENVIRONMENT=Development

# Allow 1433 for SQL Server Access
EXPOSE 1433

WORKDIR /var/www/albumviewer

# copy publish folder contents to web root
COPY ./bin/Release/netcoreapp2.0/publish .

# Run out of Publish Folder
CMD ["/bin/sh", "-c", "dotnet 'AlbumViewerNetCore.dll'"]

#docker ENTRYPOINT ["dotnet", "AlbumViewerNetCode.dll"]