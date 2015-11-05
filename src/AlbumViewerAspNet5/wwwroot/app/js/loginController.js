(function () {
    'use strict';

    var app = angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['errorDisplayService','$http','$scope']; 

    function loginController(errorDisplayService,$http) {
        /* jshint validthis:true */
        var vm = this;
        vm.user = {
            username: "",
            password: "",
            isAuthenticated: app.configuration.user.isAuthenticated
        };
        
        vm.error = errorDisplayService.newErrorModel();
        
        vm.signin = function () {
            console.log(app.configuration.baseUrl);
            $http.post(app.configuration.baseUrl + "login", vm.user)
                .success(function(success) {
                    vm.error.message = "Logged in";
                    vm.error.icon = "success";
                    app.configuration.user.isAuthenticated = true;
                    vm.user.isAuthenticated = true;
                    app.configuration.userName = vm.user.username;
                })
                .error(function(args) {
                    var err = ww.angular.parseHttpError(args);
                    vm.error.message = "Invalid login credentials: " + err.message;
                    vm.error.icon = "warning";
                    vm.user.isAuthenticated = false;
                    app.configuration.user.isAuthenticated = false;
                });
        };
        vm.signout = function () {
            $http.get(app.configuration.baseUrl + "logout")
                .success(function (success) {
                    window.location.hash = "/albums";
                    app.configuration.user.isAuthenticated = false;
                    vm.user.isAuthenticated = false;
                })
                .error(function (args) {
                    var err = ww.angular.parseHttpError(args);
                    vm.error.message = "Couldn't log out: " + err.message;
                    vm.error.icon = "warning";
                    app.configuration.user.isAuthenticated = false;
                    vm.user.isAuthenticated = false;
                });
        };
        
        initialize();

        function initialize() { }
    }
})();
