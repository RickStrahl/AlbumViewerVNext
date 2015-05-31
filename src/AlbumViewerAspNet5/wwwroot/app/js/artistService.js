(function () {
    'use strict';

    angular
        .module('app')
        .factory('artistService', artistService);

    artistService.$inject = ['$http','$q','$location'];



    function artistService($http,$q,$location) {
        var service = {
            baseUrl: "api/",
            artist: newArtist(),
            artists: [],
            albums: [],
            getArtists: getArtists,
            getArtist: getArtist,
            // saves to server
            saveArtist: saveArtist,
            // updates the artist list 
            updateArtist: updateArtist,
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

            return $http.get(service.baseUrl + "artists")
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


            return $http.get(service.baseUrl + "artist/" + id)
                .success(function(response) {
                    service.artist = response.Artist;
                    service.albums = response.Albums;
            });
        }


        function updateArtist(artist) {            
            var i = findArtistIndex(artist);
            
            if (i > -1)
                service.artists[i] = artist;
            else {
                service.artists.push(artist);

                // remove pk of 0 from list if any
                service.artists = _.remove(service.artists, function (art) {
                    return art.Id === 0;
                });
            }

            service.artist = artist;
        }

        function saveArtist(artist) {            
            $http.post(service.baseUrl + "artist/", artist)
               .success(function (art) {                    
                   service.artist = art.Artist;
                   service.albums = art.Albums;
                    
                   updateArtist(art.Artist);
               })
               .error(function (error) {
                service.error = "Artist couldn't be saved.";
            });

            return $http.post(service.baseUrl + "artist", artist)
                .success(function (art) {
                    service.updateArtist(art);
                    service.artist = art;
                });
        }

        function deleteArtist(artist) {
            return $http.delete(service.baseUrl + "deleteartist/" + artist.Id)
                .success(function () {                    
                    _.remove(service.artists, function (art) {
                        return artist.Id == art.Id;
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
