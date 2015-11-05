(function () {
    var app = angular.module('app')
        .directive('errorDisplay', errorDisplay);

    errorDisplay.$inject = [];

    function errorDisplay() {
        // Usage:
        // <error-display message="" icon="" />
        // Creates:
        // Bootstrap Alert dialog
        var directive = {
            link: link,
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/errorDisplay.html',
            //template: '<div>...</div>',
            scope: {
                message: "@message",
                icon: "@icon",
                dismissable: "@dismissable",
                header: "@header",
                imageIcon: "@imageIcon",
                iconColor: "@iconColor",

                // an error object with the above properties
                error: "=error"
            }
        };
        return directive;

        function link(scope, element, attrs) {            
            var vm = scope;

            if (!vm.error) {
                // create the object and pull from attrtibutes
                vm.error = {
                    message: vm.message,
                    header: vm.header,
                    icon: vm.icon,
                    imageIcon: vm.imageIcon ? vm.imageIcon : "warning",
                    iconColor: vm.iconColor ? vm.iconColor : "inherit",
                    dismissable: vm.dismissable && vm.dismissable.toLowerCase() === "true" ? true : false
                }
            } else {
                // merge properties with passed error object
                vm.error = $.extend({
                    message: null,
                    header: null,
                    icon: "warning",
                    imageIcon: "warning",
                    iconColor: "inherit",
                    dismissable: false
                }, vm.error);
            }

            fixupIcons(vm.error);

            // watch the error.icon changes
            // and update image and color accordingly
            scope.$watch('error.icon', function () {                
                fixupIcons(vm.error);
            });      
        }

        function fixupIcons(err) {
            if (err.icon === "info")
                err.imageIcon = "info-circle";
            if (err.icon === "error" || err.icon === "danger" || err.icon === "warning") {
                err.imageIcon = "warning";
                err.iconColor = "firebrick";
            }
            if (err.icon === "success") {
                err.imageIcon = "check";
                err.iconColor = "green";
            }
        }
    };


    (function () {
        'use strict';

        angular
          .module('app')
          .factory('errorDisplayService', errorDisplayService);

        errorDisplayService.$inject = [];

        function errorDisplayService() {
            var service = {
                newErrorModel: function (message, icon) {
                    var error = new ErrorModel();
                    if (message)
                        error.message = message;
                    if (icon)
                        error.icon = icon;                   
                    return error;
                }
            }

            return service;
            ////////////////

            function ErrorModel() {
                var self = this;

                this.message = null;
                this.icon = "warning";
                this.imageIcon = "warning";
                this.iconColor = "inherit";
                this.dismissable = true;
                this.reset = function () {                    
                    self.message="";
                    self.icon = "warning";
                    self.imageIcon = "warning";
                    self.iconColor = "inherit";                    
                },
                this.show = function (msg, icon) {                    
                    self.message = msg;
                    self.icon = icon ? icon : "warning";                    
                }
            };

        }
    })();

})();
