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
        vm.searchVisible = true;

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
        });

        function isSearchVisible(tab) {            
            var tab = tab.toLowerCase();
            
            if (tab == "albums" ||
                tab == "artists")
                vm.searchVisible = true;
            else
                vm.searchVisible = false;
        }

        isSearchVisible(vm.activeTab);

        return;
    }

    artistsController.$inject = ["$scope","$http"];

    function artistsController($scope, $http) {
        console.log('artists controller');

        var vm = this;  // controller as
        vm.artists = [];
        vm.searchText = "";

        vm.getArtists = function() {
            return $http.get("../api/artists")
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
