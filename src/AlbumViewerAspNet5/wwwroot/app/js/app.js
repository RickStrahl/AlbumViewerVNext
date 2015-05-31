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
        useLocalData: false
    };

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
                    .when("/options", {
                        templateUrl: "app/views/options.html"
                    })
                    .otherwise({
                        redirectTo: '/albums'
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