(function() {
    'use strict';

    var app = angular
        .module('app')
        .controller('artistsController', artistsController);

    var serviceName = "artistService";
    if(app.configuration.useLocalData)
        serviceName =  "artistServiceLocal";

    artistsController.$inject = ["$scope", "$http",serviceName];

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
