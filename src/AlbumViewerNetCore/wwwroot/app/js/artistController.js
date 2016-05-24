(function () {
    'use strict';

    var app = angular
        .module('app')
        .controller('artistController', artistController);

    artistController.$inject = ["$http", "$window", "$routeParams",
                                "$animate", "$location",
                                "artistService", "albumService",
                                "errorDisplayService"];

    function artistController($http, $window, $routeParams,
        $animate, $location,artistService, albumService,
        errorDisplayService) {
        var vm = this;

        vm.artist = null;
        vm.baseUrl = "api/";
        vm.albums = [];
        vm.error = errorDisplayService.newErrorModel();

        vm.getArtist = function (pk) {            
            artistService.getArtist(pk)
                .success(function (response) {                     
                    if (response.hasOwnProperty("Albums")) { // service
                        vm.artist = response.Artist;
                        vm.albums = response.Albums;
                    } else {   // local                        
                        vm.artist = response;
                        vm.albums = [];
                    }
                })
                .error(function() {
                    vm.error.message = "Artist couldn't be loaded.";
                    vm.error.message = "warning";
                });
        };
        vm.editArtist = function() {
            if (!app.configuration.user.isAuthenticated) {
                window.location = "#/login";
                return;
            }

            $("#EditModal").modal();
        };

        vm.saveArtist = function (artist) {
            artistService.saveArtist(artist)
                .success(function (response) {
                    vm.artist = response.Artist;
                    vm.albums = response.Albums;
                    $("#EditModal").modal("hide");

                    vm.error.message = "Artist saved.";
                    vm.error.icon = "success";
                })
                .error(function (error) {
                    vm.error.message = "Artist couldn't be saved.";
                    vm.error.icon = "warning";
                });
        }

        vm.deleteArtist = function (artist) {            
            artistService.deleteArtist(artist)
                .success(function (result) {                    
                    if (result) {
                        vm.artists = artistService.artists;
                        $location.path("/artists");
                    }
                })
                .error(function (args) {                    
                    var err = ww.angular.parseHttpError(args);
                    vm.error.message = "Failed to delete artist: " + err.message;
                    vm.error.icon = "warning";
                });
        }

        vm.albumClick = function(album) {
            $window.location.hash = "/album/" + album.Id;
        };

        vm.addAlbum = function () {            
            var alb = albumService.newAlbum();
            alb.Id = -1;  // flags that we should use this record
            alb.ArtistId = vm.artist.Id;
            alb.Artist.Id = vm.artist.Id;
            alb.Artist.Id = vm.artist.Id;
            alb.Artist.ArtistName = vm.artist.ArtistName;
            albumService.album = alb;

            albumService.updateAlbum(albumService.album);
            $window.location.hash = "/album/edit/-1";
        };
        
        vm.getArtist($routeParams.artistId);
    }
})();
