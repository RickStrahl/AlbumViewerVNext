(function () {
    'use strict';

    var app = angular
        .module('app')
        .factory('artistService', artistService);

    artistService.$inject = ['$http','$q','$location'];



    function artistService($http,$q,$location) {
        var service = {
            baseUrl: app.configuration.baseUrl,
            localArtistFile: "data/artists.js",
            artist: newArtist(),
            artists: [],
            albums: [],
            listScrollPos: 0,
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
                Description: null,
                AmazonUrl: null,
                ImageUrl: null,
                AlbumCount: 0
            };
        }

        function getArtists(noCache) {
            // if albums exist just return
            if (!noCache && service.artists && service.artists.length > 0)
                return ww.angular.$httpPromiseFromValue($q, service.artists);
            var url = service.baseUrl + "artists";

            if (app.configuration.useLocalData)
                url = "data/artists.js";

            return $http.get(url)
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
            // -1 just returns the currently loaded artist
            else if (id === -1 || id === '-1' || !id)
                return ww.angular.$httpPromiseFromValue($q, service.album);

            // if the album is already loaded just return it            
            if (service.artist && useExisting && service.artist.id == id)
                return ww.angular.$httpPromiseFromValue($q, service.artist);

            // ensure that albums exist - if not load those first and defer
            if (service.artists && service.artists.length > 0) {
                // just look up from cached list
                var artist = findArtist(id);
                if (!artist)
                    return ww.angular.$httpPromiseFromValue($q, new Error("Couldn't find artist"), true);
            }

            
            // if we have a service just retrieve the record from the service
            if (!app.configuration.useLocalData) {
                return $http.get(service.baseUrl + "artist/" + id)
                    .success(function(response) {
                        service.artist = response.Artist;
                        service.albums = response.Albums;
                    });
            }


            // local data - load from the data list

            // if albums exist find from index and return
            if (service.artists && service.artists.length > 0) {
                // just look up from cached list
                var artist = findArtist(id);
                if (!artist)
                    return ww.angular.$httpPromiseFromValue($q, new Error("Couldn't find artist"), true);
            }

            // no albums - force loading albums first then 
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
                return id === a.Id;
            });            
            return a;
        }
    }
})();
