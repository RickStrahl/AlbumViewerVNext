(function () {
    'use strict';

    angular
        .module('app')
        .controller('albumsController', albumsController);

    albumsController.$inject = ['$scope','albumService'];


    function albumsController($scope,  albumService) {        
        var vm = this;
        vm.albums = null;

        // filled view event emit from root form
        vm.searchText = '';

        vm.artistpk = 0;

        vm.albumClick = function(album) {
            window.location = "#/album/" + album.Id;
        };
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
        if (albumService.albums && albumService.albums.length > 0)
            vm.albums = albumService.albums;
        else {
            albumService.getAlbums()
                .success(function(data) {
                    vm.albums = data;
                })
                .error(function() { alert('failed to get albums');  });
        }

        return;
    }
})();
