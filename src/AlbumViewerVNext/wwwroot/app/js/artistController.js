(function () {
    'use strict';

    angular
        .module('app')
        .controller('artistController', artistController);

    artistController.$inject = ["$http","$window","$routeParams","$animate","albumService"];

    function artistController($http,$window,$routeParams,$animate,albumService) {        
        var vm = this;

        vm.artist = null;
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

        vm.getArtist = function(pk) {
            $http.get("../api/artist?id=" + pk)
                .success(function(response) {
                    vm.artist = response.Artist;
                    vm.albums = response.Albums;
                })
                .error(function() {
                    vm.error.show("Artist couldn't be loaded.", "warning");
                });
        };

        vm.saveArtist = function(artist) {
            $http.post("../api/artist/", artist)
                .success(function (response) {
                    vm.artist = response.Artist;
                    vm.albums = response.Albums;
                    $("#EditModal").modal("hide");
                })
                .error(function (error) {
                    vm.error.show("Artist couldn't be saved.", "warning");
                });
        }

        vm.albumClick = function(album) {
            $window.location.hash = "/album/" + album.Id;
        };

        vm.addAlbum = function () {            
            albumService.album = albumService.newAlbum();
            albumService.album.artistPk = vm.artist.pk;
            albumService.album.artist.pk = vm.artist.pk;
            albumService.album.artist.artistname = vm.artist.artistname;

            albumService.updateAlbum(albumService.album);
            $window.location.hash = "/album/edit/0";
        };

        vm.getArtist($routeParams.artistId);

        // force explicit animation of the view and edit forms always
        $animate.addClass("#MainView", "slide-animation");
    }
})();
