(function() {
    'use strict';

    var app = angular
        .module('app')
        .controller('artistsController', artistsController);

    if(app.configuration.useLocalData)
        artistsController.$inject = ["$scope", "$http", "artistServiceLocal"];
    else
        artistsController.$inject = ["$scope", "$http", "artistService"];



    function artistsController($scope, $http, artistService) {
        console.log('artists controller');

        var vm = this; // controller as
        vm.artists = [];
        vm.searchText = "";
        vm.baseUrl = "data/";

        vm.getArtists = function () {
            return artistService.getArtists()
                .success(function(artists) {
                    vm.artists = artists;
                });
        }

        $scope.$root.$on('onsearchkey', function(e, searchText) {
            vm.searchText = searchText;
        });

        vm.getArtists();

        return;
    }
})();
