/// albumService
(function () {
    'use strict';
    
    angular
        .module('app')
        .factory('albumServiceLocal', albumServiceLocal);

    albumServiceLocal.$inject = ['$http','$q'];
    

    function albumServiceLocal($http,$q) {
        var service = {
            baseUrl: "data/",
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

        /// noCache: Not passed or 0: allow cache, 
        //          1 - no cache from memory,
        //          2 - re-read from disk
        function getAlbums(noCache) {
            noCache = noCache || 0;

            // if albums exist just return
            if (!noCache && service.albums && service.albums.length > 0)
                return ww.angular.$httpPromiseFromValue($q, service.albums);

            // check localStorage first
            if (noCache != 2) {
                service.albums = localStorage.getItem("av_albums");
                if (service.albums && service.albums.length > 0)
                    return ww.angular.$httpPromiseFromValue($q, JSON.parse(service.albums));
            }

            return $http.get(service.baseUrl + "albums.js")
                .success(function (data) {
                    service.albums = data;
                    //localStorage.setItem("av_albums",JSON.serialize(service.albums));
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
            if (service.album && useExisting && service.album.pk == id)
                return ww.angular.$httpPromiseFromValue($q,service.album);

            // ensure that albums exist - if not load those first and defer
            if (service.albums && service.albums.length > 0) {
                // just look up from cached list
                var album = findAlbum(id);
                if (!album)
                    return ww.angular.$httpPromiseFromValue($q, new Error("Couldn't find album"),true);
            }

            // otherwise load albums first
            var d = ww.angular.$httpDeferredExtender($q.defer());
            service.getAlbums()
                .success(function(albums) {
                    service.album = findAlbum(id);
                    if (!service.album)
                        d.reject(new Error("Couldn't find album"));
                    else
                        d.resolve(service.album);
                })
                .error(function(err){
                    d.reject(new Error("Couldn't find album"));
                });
            return d.promise;


            return ww.angular.$httpPromiseFromValue($q, album);
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

        function findAlbum(id) {
            return _.find(service.albums, function (a) {
                return id === a.Id;
            });
        }
    }
})();