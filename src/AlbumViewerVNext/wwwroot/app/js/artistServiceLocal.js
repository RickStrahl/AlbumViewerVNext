(function () {
    'use strict';

    angular
        .module('app')
        .factory('artistServiceLocal', artistServiceLocal);

    artistServiceLocal.$inject = ['$http','$q'];



    function artistServiceLocal($http,$q) {
        var service = {
            baseUrl: "data/",
            artist: newArtist(),
            artists: [],
            getArtists: getArtists,
            getArtist: getArtist,
            updateAlbum: updateArtist,
            saveAlbum: saveArtist,
            deleteArtist: deleteArtist,
            newArtist: newArtist
        };
        return service;

        function newArtist() {
            return {
                Id: 0,
                ArtistName: null,
                AmazonUrl: null,
                AlbumCount: 0
            };
        }

        function getArtists(noCache) {
            // if albums exist just return
            if (!noCache && service.artists && service.artists.length > 0)
                return ww.angular.$httpPromiseFromValue($q, service.artists);

            return $http.get(service.baseUrl + "artists.js")
                .success(function (data) {
                    service.artists = data;
                })
                .error(onPageError);
        }

        function getArtist(id, useExisting) {
            if (id === 0 || id === '0') {
                service.artist = service.newArtist();
                return ww.angular.$httpPromiseFromValue($q, service.album);
            }
            else if (id === -1 || id === '-1' || !id)
                return ww.angular.$httpPromiseFromValue($q, service.album);

            // if the album is already loaded just return it
            // and return the promise
            if (service.artist && useExisting && service.artist.id == id)
                return ww.angular.$httpPromiseFromValue($q, service.artist);

            // ensure that albums exist - if not load those first and defer
            if (service.artists && service.artists.length > 0) {
                // just look up from cached list
                var artist = findArtist(id);
                if (!artist)
                    return ww.angular.$httpPromiseFromValue($q, new Error("Couldn't find artist"), true);
            }

            // otherwise load albums first
            var d = ww.angular.$httpDeferredExtender($q.defer());
            service.getArtists()
                .success(function (artists) {                    
                    service.artist = findArtist(id);
                    if (!service.artist)
                        d.reject(new Error("Couldn't find artist"));
                    else
                        d.resolve(service.artist);
                })
                .error(function (err) {
                    d.reject(new Error("Couldn't find artist"));
                });
            return d.promise;


            return ww.angular.$httpPromiseFromValue($q, service.artist);
        }


        function updateArtist(artist) {
            var i = findAlbumIndex(artist);
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

        function saveArtist(artist) {
            return $http.post(service.baseUrl + "album", album)
                .success(function (art) {
                    service.updateAlbum(art);
                    service.album = art;
                });
        }

        function deleteArtist(artist) {
            return $http.get(service.baseUrl + "deletealbum/" + artist.Id)
                .success(function () {
                    service.albums = _.remove(service.albums, function (alb) {
                        return artist.Id != alb.Id;
                    });
                });
        }

        function findArtistIndex(artist) {
            return _.findIndex(service.artists, function (a) {
                if (typeof artist == "Object")
                    return artist.Id == a.Id;
                else
                   return artist == a.Id;
            });
        }

        function findArtist(id) {
            id = id * 1;
            var a = _.find(service.artists, function (a) {
                console.log(id, a.Id);
                return id === a.Id;
            });            
            return a;
        }
    }
})();
