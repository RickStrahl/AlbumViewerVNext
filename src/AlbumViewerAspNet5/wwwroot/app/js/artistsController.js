(function() {
    'use strict';

    var app = angular
        .module('app')
        .controller('artistsController', artistsController);
    
    artistsController.$inject = ["$scope", "$http", "$location", "$timeout","$animate",
                                 "artistService", "errorDisplayService"];

    function artistsController($scope, $http, $location, $timeout, $animate,
                               artistService, errorDisplayService) {
        console.log('artists controller');

        var vm = this; // controller as
        vm.artists = [];
        vm.searchText = "";
        vm.baseUrl = "data/";
        vm.error = errorDisplayService.newErrorModel();

        vm.getArtists = function () {
            return artistService.getArtists()
                .success(function(artists) {
                    vm.artists = artists;

                    // move the scroll pos after animation has completed (CSS Timeout)
                    $timeout(function() {
                        $("#MainView").scrollTop(artistService.listScrollPos);
                        artistService.listScrollPos = 0; //reset
                    }, 900);
                });
        }

        vm.artistClick = function (artist) {            
            artistService.listScrollPos = $("#MainView").scrollTop();
            $location.path("/artist/" + artist.Id);
        }


        $scope.$root.$on('onsearchkey', function(e, searchText) {
            vm.searchText = searchText;
        });

        vm.getArtists();

        return;
    }
})();
