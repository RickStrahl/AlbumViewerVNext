(function () {
    'use strict';

    angular
        .module('app')
        .factory('albumService', albumService);

    albumService.$inject = ['$http','$q'];

    function albumService($http,$q) {
        var service = {
            baseUrl: "api/",
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
            activeTab: 'albums'
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
            
            return $http.get(service.baseUrl + "albums/")
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
            else if (id === -1 || id === '-1' || !id)
                return ww.angular.$httpPromiseFromValue($q,service.album);

            // if the album is already loaded just return it
            // and return the promise
            if (service.album && useExisting && service.album.pk == id) {
                var deferred = ww.angular.deferredExtender($q.defer());
                deferred.resolve(service.album);
                return deferred.promise;
            }

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
                return album.Id == a.Id;
            });
        }
        

    }
})();