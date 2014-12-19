(function () {
    'use strict';

    var app = angular
        .module('app')
        .controller('albumsController', albumsController);

    if (!app.configuration.useLocalData)
        albumsController.$inject = ['$scope', 'albumService'];
    else
        albumsController.$inject = ['$scope','albumServiceLocal'];

    function albumsController($scope,  albumService) {        
        var vm = this;
        vm.albums = null;

        vm.error = {
            message: null,
            icon: "warning",
            reset: function () { vm.error = { message: "", icon: "warning" } }
        };


        // filled view event emit from root form
        vm.searchText = '';

        vm.artistpk = 0;

        vm.albumClick = function(album) {
            window.location = "#/album/" + album.Id;
        };
        vm.getAlbums = function() {
            albumService.getAlbums() 
                .success(function(data) {
                    vm.albums = data;
                })
                .error(function(err) {
                    alert('failed to get albums');
                });            
        }
        vm.addAlbum = function () {            
            albumService.album = albumService.newAlbum();
            albumService.updateAlbum(albumService.album);
            window.location = "#/album/edit/" + albumService.album.Id;
        };
        vm.deleteAlbum = function (album) {
            // on purpose! - force explicit prompt to minimize vandalization of demo
            if(!confirm("Are you sure you want to delete this album?"))
                return;

            albumService.deleteAlbum(album)
                .success(function(){
                    vm.albums = albumService.albums;
                })
                .error(onPageError);
        };
        vm.albumsFilter = function (alb) {
            var search = vm.searchText.toLowerCase();
            if (!alb || !alb.Title)
                return false;

            if ( alb.Title.toLowerCase().indexOf(search) > -1 ||
                alb.Artist.ArtistName.toLowerCase().indexOf(search) > -1)
                return true;

            return false;
        };

        // forwarded from Header controller
        $scope.$root.$on('onsearchkey', function (e,searchText) {
            vm.searchText = searchText;            
        });

        // controller initialization
        vm.getAlbums();
        

        return;
    }
})();
