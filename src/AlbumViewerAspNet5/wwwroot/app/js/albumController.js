(function () {
    'use strict';

    var app = angular
        .module('app')
        .controller('albumController', albumController);

    var serviceName = "albumService";

    albumController.$inject = ['$routeParams', '$window', '$animate', '$location',serviceName];
    
    function albumController($routeParams,$window,$animate,$location, albumService) {        
        var vm = this;
        
        vm.album = null;
        vm.selectedArtist = { ArtistName: null, Description: null };
        vm.error = {
            message: null,
            icon: "warning",
            dismissable: true,
            reset: function () { vm.error.message = ""; vm.error.icon = "warning" },
            show: function(msg,icon) { vm.error.message = msg; vm.error.icon = icon } 
        };

        vm.isSongVisible = false;
        vm.song = {
            Id: 0,
            AlbumId: 0,
            Name: null,
            Length: null
        };
 
        vm.saveAlbum = function (album) {
            console.log(album);
            albumService.saveAlbum(album)
                .success(function(album) {
                    vm.error.message = "Album has been saved.";
                    vm.error.icon = "success";
                    setTimeout(function() {
                        $window.location.hash = "/album/" + album.Id;
                    },3000);
                })
                .error(function (args) {
                    var err = ww.angular.parseHttpError(args);
                    vm.error.message = "Couldn't save: " + err.message;
                    vm.error.icon = "warning";
                });
        };
        vm.addSong = function () {
            vm.isSongVisible = true;            
            vm.song = { Id: 0, AlbumId: albumService.album.Id, Name: null, Length: null };
            setTimeout(function() { $("#SongName").focus(); },300);
        };
        vm.saveSong = function (song) {            
            albumService.addSongToAlbum(vm.album, song);
            vm.albums = albumService.albums;
            vm.album = albumService.album;
            
            vm.isSongVisible = false;
        };
        vm.cancelSong = function() {
            vm.isSongVisible = false;
        };
        vm.removeSong = function (song) {
            console.log(song);
            albumService.removeSong(vm.album, song);            
            vm.album = albumService.album;            
        };
        vm.deleteAlbum = function (album) {
            // on purpose! - to minimize vandalization by requiring popup
            if (!confirm("Are you sure you want to delete this album?"))
                return;

            albumService.deleteAlbum(album)
                .success(function() {
                    vm.albums = albumService.albums;
                    window.location = ("#/albums");
                })
                .error(function (args) {
                    var err = ww.angular.parseHttpError(args);
                    vm.error.message = err.message;
                    vm.error.icon = "warning";
                });
        };

        vm.editAlbum = function (id) {            
            if (app.configuration.useLocalData) {
                vm.error.message = "Data can't be edited when using local data.";
                vm.error.icon = "warning";
                return;
            }
                
            if (!app.configuration.user.isAuthenticated) {                
                window.location = "#/login";
                return;
            }
             window.location = "#/album/edit/" + id;
        };

        vm.getAlbum = function(id) {            
            albumService.getAlbum(id, true)
            .success(function (album) {                
                vm.album = album;
            });
            
        }
        vm.bandTypeAhead = function() {
            var $input = $('#BandName');

            $input.typeahead({
                source: [],
                autoselect: true,
                minLength: 0
        });
            $input.keyup(function () {                
                var s = $(this).val();
                $.getJSON(albumService.baseUrl + "artistlookup?search=" + s,
                    function (data) {
                        console.log(data);
                        $input.data('typeahead').source = data;                        
                    });
            });
        }
                
        console.log($routeParams);

        // Initialization code                  
        vm.getAlbum($routeParams.albumId * 1, true);

        vm.bandTypeAhead();

        // force explicit animation of the view and edit forms always
        //$animate.addClass("#MainView","slide-animation");
    }
})();
