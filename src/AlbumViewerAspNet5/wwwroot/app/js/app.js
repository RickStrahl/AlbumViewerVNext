(function() {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'ngAria'
        // Custom modules 

        // 3rd Party Modules
        
    ]);

    
    // config settings
    app.configuration = { 
        useLocalData: false,
        //baseUrl: "",
        baseUrl: "api/",
        //baseUrl: "https://albumviewerswf.west-wind.com/api/",
        //baseUrl: "http://localhost/albumviewer/api/",
        //baseUrl: "http://dev.west-wind.com/albumviewer/api/",
        //baseUrl: "http://localhost:5000/api/",
        user: {            
            _isAuthenticated: false,
            set isAuthenticated(val) {
                // cache authentication
                localStorage.setItem('av_isAuthenticated',val);
                this._isAuthenticated = val;
            },
            get isAuthenticated() {
                return this._isAuthenticated;
            },
            username: null
        }

    };
    // initialize isAuthenticate from localstorage
    var aval = localStorage.getItem("av_isAuthenticated");
    app.configuration.user._isAuthenticated = !aval || aval === 'false' ? false : true;
    
    app.config(['$routeProvider','$httpProvider',
            function($routeProvider, $httpProvider) {
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
                    .when("/options", {
                        templateUrl: "app/views/options.html"
                    })
                    .when("/login",
                    {
                        templateUrl: "app/views/login.html"
                    })
                    .otherwise({
                        redirectTo: '/albums'
                    });

                // handle server authentication requests by redirecting
                $httpProvider.interceptors.push(function ($q) {
                    return {                        
                        'request': function (config) {
                            // allow client cookies / auth headers
                            config.withCredentials = true;
                            return config;
                        },                        
                        //'response': function (response) {                                                
                        //    return response;
                        //},
                        'responseError': function (rejection) {
                            if (rejection.status === 401) {
                                app.configuration.isAuthenticated = false;
                                window.location.hash = "/login";
                            }
                            return $q.reject(rejection);
                        }
                    };
                });
            }
        ])
        .filter('linebreakFilter', function () {        
            return function(text) {
                if (text)
                    return text.replace(/\n/g, '<br />');
                return text;
            };
        });
    
})();