
(function () {
    'use strict';

    var app = angular
      .module('app')
      .factory('userService', [userService]);

    function userService(config) {
        var service = {
            user: newUser(),
            login: login
        };

        return service;

        function newUser()
        {
            return {   
                username: null,
                password: null,
                isAuthenticated: false
            };
        }

        function login(user) {
            return $http.post(app.configuration.baseUrl + "login", user)
               .success(function (success) {
                   service.user = user;
                   app.configuration.user.isAuthenticated = true;
                   app.configuration.userName = user.username;
               });               
        }

        function logout() {
            return $http.get(app.configuration.baseUrl + "logout")
               .success(function (success) {
                   service.user = newUser(),
                   app.configuration.user.isAuthenticated = false;
                   app.configuration.userName = null;
               });
        }

        
    }
})();
