(function () {
    'use strict';

    var app = angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['errorDisplayService','$http','$route']; 

    function loginController(errorDisplayService,$http,$route) {
        var vm = this;
        vm.user = {
            username: "",
            password: "",
            isAuthenticated: app.configuration.user.isAuthenticated
        };
        
        vm.error = errorDisplayService.newErrorModel();
        
        function initialize() {
            if ($route.current.originalPath == "/logout")                        
                vm.signout(true);
        }

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
        vm.signout = function (noRedirect) {
            $http.get(app.configuration.baseUrl + "logout")
                .success(function (success) {
                    if (!noRedirect)
                        window.location.hash = "/albums";
                    else {
                        vm.error.message = "Logged out";
                        vm.error.icon = "success";
                    }
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
    }
})();
