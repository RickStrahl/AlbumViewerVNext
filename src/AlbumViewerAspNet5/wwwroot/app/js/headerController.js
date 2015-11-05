// the funky name is on purpose:
// For some reason Cordova chokes on headercontroller.js 
// and fails to compile it into the output. So renamed to headerXController.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('headerController', headerController);

    headerController.$inject = ['$scope', '$route', '$window', 'albumService'];

    
    function headerController($scope, $route, $window, albumService) {
        console.log('header controller');
        var vm = $scope; // straight $scope controller

        vm.searchText = "";
        vm.searchAllowed = false;
        vm.searchVisible = false;

        vm.activeTab = albumService.activeTab;

        // forward the search key to other controllers
        vm.onKey = function() {
            $scope.$emit('onsearchkey', vm.searchText);
        }
        vm.showSearch = function() {
            vm.searchVisible = true;
            // angular's binding is too slow - explicitly set this
            $("#SearchBox").show();
            setTimeout(function() { $("#SearchBox").focus(); },5 );
        }
        vm.hideSearch = function() {
            vm.searchVisible = false;
            // angular's binding is too slow - explicitly set this
            $("#SearchBox").hide();
        }

        $scope.searchBlur = function() {
            vm.searchText = "";
            vm.hideSearch();
        }

        vm.$on("$locationChangeSuccess", function() {
            var path = $window.location.hash;            
            vm.activeTab = path.extract("#/", "/", true);
            isSearchVisible(vm.activeTab);
            console.log(path, vm.activeTab);
        });

        function isSearchVisible(tab) {
            var tab = tab.toLowerCase();

            if (tab == "albums" ||
                tab == "artists")
                vm.searchAllowed = true;
            else
                vm.searchAllowed = false;
            console.log(vm.searchAllowed);
        }

        return;
    }

})();

