/// <reference path="../../bower_components/lodash/lodash.js" />
(function () {
    'use strict';

    var app = angular
        .module('app')
        .factory('albumService', albumService);

    albumService.$inject = ['$http','$q'];

    function albumService($http,$q) {
        var service = {
            baseUrl: app.configuration.baseUrl,
            localAlbumFile: "data/albums.js",
            //baseUrl: "api/",
            //baseUrl: "http://localhost/albumviewer/"
            albums: [],
            artists: [],
            album: newAlbum(),
            getAlbums: getAlbums,
            getAlbum: getAlbum,
            updateAlbum: updateAlbum,
            saveAlbum: saveAlbum,
            deleteAlbum: deleteAlbum,
            addSongToAlbum: addSongToAlbum,
            removeSong: removeSong,
            newAlbum: newAlbum,
            newSong: newSong,
            activeTab: 'albums',
            listScrollPos: 0            
        };               
        return service;       

        function newAlbum() {
            return {
                Id: 0,
                ArtistId: 0,
                Tracks: [],
                Artist: {
                    Id: 0,
                    ArtistName: null,
                },
                Title: null,
                AmazonUrl: null,
                ImageUrl: null
            };
        }

        function newSong() {
            return {
                Id: 0,
                SongName: null,
                Length: null
            };
        }

        function getAlbums(noCache) {
            // if albums exist just return
            if (!noCache && service.albums && service.albums.length > 0)
                return ww.angular.$httpPromiseFromValue($q, service.albums);

            
            var url = service.baseUrl + "albums";
            if (app.configuration.useLocalData)
                url = service.localAlbumFile;

            return $http.get(url)
                .success(function (data) {                    
                    service.albums = data;                   
                })
                .error(onPageError);
        }

        function getAlbum(id, useExisting) {            
            if (id === 0 || id === '0') {
                service.album = service.newAlbum();
                return ww.angular.$httpPromiseFromValue($q,service.album);
            }                
            // -1 - use the album previously set
            else if (id === -1 || id === '-1' || !id)
                return ww.angular.$httpPromiseFromValue($q,service.album);

            // if the album is already loaded just return it
            // and return the promise
            if (service.album && useExisting && service.album.Id == id) 
                return ww.angular.$httpPromiseFromValue($q,service.album);
            

            // handle local data differently
            if (app.configuration.useLocalData) {
                if (service.albums && service.albums.length > 0) {                                                 
                    var album = findAlbumFromId(id);
                    service.album = album;
                    return ww.angular.$httpPromiseFromValue($q,album);
                }
                // otherwise load albums first with custom promise
                var d = ww.angular.$httpDeferredExtender($q.defer());
                service.getAlbums()
                    .success(function(albums) {                               
                        service.albums = albums;
                        service.album = findAlbumFromId(id);
                        if (!service.album)
                            d.reject(new Error("Couldn't find album"));
                        else
                            d.resolve(service.album);
                    })
                    .error(function(err) {
                        d.reject(new Error("Couldn't find album"));
                    });
                return d.promise;
            }

            // otherwise load from HTTP
            return $http.get(service.baseUrl + "album/" + id)
                .success(function(album) {
                    service.album = album;
                })
                .error(function (http, status, fnc, httpObj) {
                    console.log(http, httpObj);
                });
        }
        function addSongToAlbum(album, song) {            
            album.Tracks.push(song);
            service.album = album;
        };

        function removeSong(album, song) {            
            var i = findAlbumIndex(album);
            if (i == -1)
                return;

            var alb = service.albums[i];
            
            alb.Tracks = _.remove(alb.Tracks, function (t) {
                return t.Id != song.Id;
            });
            
            service.album = alb;            
        };


        function updateAlbum(album) {            
            var i = findAlbumIndex(album);
            if (i > -1)
                service.albums[i] = album;
            else {
                service.albums.push(album);

                // remove pk of 0 from list if any
                service.albums = _.remove(service.albums, function (alb) {
                    return album.Id == 0;
                });
            }

            service.album = album;
        }

        function saveAlbum(album) {            
            return $http.post(service.baseUrl + "album", album)
                .success(function (alb) {                    
                    service.updateAlbum(alb);
                    service.album = alb;                    
            });
        }

        function deleteAlbum(album){
            return $http.get(service.baseUrl + "deletealbum/" + album.Id)
                .success(function() {
                    service.albums = _.remove(service.albums, function(alb){
                        return album.Id != alb.Id;
                    });                    
                });
        }

        
        function findAlbumIndex(album){
            return  _.findIndex(service.albums, function (a) {
                return album.Id === a.Id;
            });
        }
        function findAlbumFromId(id) {
            return _.find(service.albums, function (a) {
                return id === a.Id;
            });
        }

    }
})();