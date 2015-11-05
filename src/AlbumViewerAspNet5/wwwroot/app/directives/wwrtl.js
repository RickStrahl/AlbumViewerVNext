(function () {    
    'use strict';

    angular.module('app')
           .directive('wwRtl', wwRtl);

    wwRtl.$inject = [];    

    function wwRtl() {        
        return {
            //require: "ngModel",
            restrict: "A", // attribute
            replace: true,
            scope: {
                wwRtl: "@"
            },
            link: function($scope, $element, $attrs) {                
                var expr = $scope.wwRtl;
                $scope.$parent.$watch(expr, function(isRtl) {
                    var rtl = "";
                    if (isRtl)
                        rtl = "rtl";
                    $element.attr("dir", rtl);
                });
            }
        }
    }
})();



