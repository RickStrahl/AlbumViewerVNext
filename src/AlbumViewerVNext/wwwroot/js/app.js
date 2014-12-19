(function() {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',
        'ngRoute',
        'ngSanitize',        


        // Custom modules 

        // 3rd Party Modules
        
    ]);

    app.config([
            '$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when("/albums", {
                        templateUrl: "app/views/albums.html"
                    })
                    .when("/album/edit/:albumId", {
                        templateUrl: "app/views/editalbum.html"
                    })
                    .when("/album/:albumId", {
                        templateUrl: "app/views/album.html"
                    })
                    .when("/artists", {
                        templateUrl: "app/views/artists.html"
                    })
                    .when("/artist/:artistId", {
                        templateUrl: "app/views/artist.html"
                    })
                    .when("/about", {
                        templateUrl: "app/views/about.html"
                    })
                    .otherwise({
                        redirectTo: '/albums'
                    });
            }
        ])
        .filter('linebreakFilter', function () {        
            return function(text) {
                if (text !== undefined)
                    return text.replace(/\n/g, '<br />');
                return text;
            };
        });

})();
(function () {
    'use strict';

    angular
        .module('app')
        .controller('headerController', headerController)
        .controller('artistsController', artistsController);

    headerController.$inject = ['$scope','$route','$window','albumService'];

    function headerController($scope,$route,$window,albumService) {
        var vm = $scope;  // straight $scope controller
        
        vm.searchText = "";
        vm.searchVisible = false;

        vm.activeTab = albumService.activeTab;

        // forward the search key to other controllers
        vm.onKey = function () {        
            $scope.$emit('onsearchkey', vm.searchText);
        }
        
        $scope.searchBlur = function () {            
            vm.searchText = "";
        }
        
        vm.$on("$locationChangeSuccess", function () {            
            var path = $window.location.hash;
            vm.activeTab = path.extract("#/", "/", true);
            isSearchVisible(vm.activeTab);
            console.log(path, vm.activeTab);            
        });

        function isSearchVisible(tab) {            
            var tab = tab.toLowerCase();
            
            if (tab == "albums" ||
                tab == "artists")
                vm.searchVisible = true;
            else
                vm.searchVisible = false;
            console.log(vm.searchVisible);
        }
        return;
    }

    artistsController.$inject = ["$scope","$http"];

    function artistsController($scope, $http) {
        console.log('artists controller');

        var vm = this;  // controller as
        vm.artists = [];
        vm.searchText = "";
        vm.baseUrl = "api/";

        vm.getArtists = function () {            
            return $http.get(vm.baseUrl + "artists")
                .success(function(artists) {
                    vm.artists = artists;
                });
        }

        $scope.$root.$on('onsearchkey', function (e, searchText) {
            vm.searchText = searchText;           
        });

        vm.getArtists();

        return;
    }

})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('albumController', albumController);

    albumController.$inject = [ '$routeParams', '$window', '$animate','albumService'];

    function albumController($routeParams,$window,$animate,albumService) {        
        var vm = this;

        vm.album = null;
        vm.selectedArtist = { ArtistName: null, Description: null };
        vm.error = {
            message: null,
            icon: "warning",
            reset: function() { vm.error = { message: "", icon: "warning"} }
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
                    vm.error.message = "Album saved";
                    vm.error.icon = "info";
                    setTimeout(function() {
                        $window.location.hash = "/album/" + album.Id;
                    },1000);
                })
                .error(function() {
                    vm.error.message = "Album saved";
                    vm.error.icon = "warning";
                });
        };
        vm.addSong = function () {
            vm.isSongVisible = true;            
            vm.song = { Id: 0, AlbumId: albumService.album.Id, Name: null, Length: null };
            setTimeout(function() { $("#SongName").focus(); },300);
        };
        vm.saveSong = function (song) {
            debugger;
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
                    $location.path("#/albums");
                })
                .error(onPageError);
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
                autoselect: true
            });
            $input.keyup(function () {                
                var s = $(this).val();
                $.getJSON("../api/artistlookup?search=" + s,
                    function (data) {
                        console.log(data);
                        $input.data('typeahead').source = data;
                    });
            });
        }

        // Initialization code
        vm.getAlbum($routeParams.albumId * 1, true);

        vm.bandTypeAhead();

        // force explicit animation of the view and edit forms always
        $animate.addClass("#MainView","slide-animation");
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .factory('albumService', albumService);

    albumService.$inject = ['$http','$q'];

    function albumService($http,$q) {
        var service = {
            baseUrl: "api/",
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

        function getAlbums(noCache) {
            // if albums exist just return
            if (!noCache && service.albums && service.albums.length > 0)
                return ww.angular.$httpPromiseFromValue($q, service.albums);                
            
            return $http.get(service.baseUrl + "albums/")
                .success(function (data) {                    
                    service.albums = data;                   
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
            if (service.album && useExisting && service.album.pk == id) {
                var deferred = ww.angular.deferredExtender($q.defer());
                deferred.resolve(service.album);
                return deferred.promise;
            }

            return $http.get(service.baseUrl + "album/" + id)
                .success(function(album) {
                    service.album = album;
                })
                .error(function (http, status, fnc, httpObj) {
                    console.log(http, httpObj);
                });
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
        

    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .controller('albumsController', albumsController);

    albumsController.$inject = ['$scope','albumService'];


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

(function () {
    'use strict';

    angular
        .module('app')
        .controller('artistController', artistController);

    artistController.$inject = ["$http","$window","$routeParams","$animate","albumService"];

    function artistController($http,$window,$routeParams,$animate,albumService) {        
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

        vm.getArtist = function(pk) {
            $http.get(vm.baseUrl + "artist?id=" + pk)
                .success(function(response) {
                    vm.artist = response.Artist;
                    vm.albums = response.Albums;
                })
                .error(function() {
                    vm.error.show("Artist couldn't be loaded.", "warning");
                });
        };

        vm.saveArtist = function(artist) {
            $http.post(vm.baseUrl + "artist/", artist)
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
            albumService.album.ArtistId = vm.artist.Id;
            albumService.album.Artist.Id = vm.artist.Id;
            albumService.album.Artist.ArtistName = vm.artist.ArtistName;

            albumService.updateAlbum(albumService.album);
            $window.location.hash = "/album/edit/0";
        };

        vm.getArtist($routeParams.artistId);

        // force explicit animation of the view and edit forms always
        $animate.addClass("#MainView", "slide-animation");
    }
})();
