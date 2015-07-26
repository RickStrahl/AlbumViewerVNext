(function () {
    'use strict';

    var app = angular
        .module('app')
        .controller('artistController', artistController);

    var service = "artistService";
    if (app.configuration.useLocalData)
        service = "artistServiceLocal";

    artistController.$inject = ["$http", "$window", "$routeParams", "$animate","$location",artistService];
    
    function artistController($http,$window,$routeParams,$animate,$location, artistService) {        
        var vm = this;

        vm.artist = null;
        vm.baseUrl = "api/";
        vm.albums = [];
        vm.error = {
            message: null,
            icon: "warning",
            reset: function() { vm.error = { message: "", icon: "warning" } },
            show: function(msg, icon) {
                vm.error.message = msg;
                vm.error.icon = icon ? icon : "warning";
            }
        };

        vm.getArtist = function (pk) {
            artistService.getArtist(pk)
                .success(function (response) {                    
                    vm.artist = response.Artist;
                    vm.albums = response.Albums;
                })
                .error(function() {
                    vm.error.show("Artist couldn't be loaded.", "warning");
                });
        };

        vm.saveArtist = function (artist) {
            artistService.saveArtist(artist)
                .success(function (response) {
                    vm.artist = response.Artist;
                    vm.albums = response.Albums;
                    $("#EditModal").modal("hide");
                })
                .error(function (error) {
                    vm.error.show("Artist couldn't be saved.", "warning");
                });
        }

        vm.deleteArtist = function (artist) {            
            artistService.deleteArtist(artist)
                .success(function (result) {
                    debugger;
                    if (result) {
                        vm.artists = artistService.artists;
                        $location.path("/artists");
                    }
                })
                .error(function () {                    
                    vm.error.message = "Failed to delete artist: ";
                    vm.error.icon = "warning";
                });
        }

        vm.albumClick = function(album) {
            $window.location.hash = "/album/" + album.Id;
        };

        vm.addAlbum = function () {            
            albumService.album = albumService.newAlbum();
            albumService.album.ArtistId = vm.artist.Id;
            albumService.album.Artist.Id = vm.artist.Id;
            albumService.album.Artist.ArtistName = vm.artist.ArtistName;

            albumService.updateAlbum(albumService.album);
            $window.location.hash = "/album/edit/0";
        };

        vm.getArtist($routeParams.artistId);

    }
})();
