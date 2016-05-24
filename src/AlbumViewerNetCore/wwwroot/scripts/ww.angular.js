/// <reference path="jquery.js" />
/// <reference path="ww.jquery.js" />
/*
ww.angular.js
Version 1.14 - 3/31/2015
West Wind Angular utilities

(c) 2008-2015 Rick Strahl, West Wind Technologies 
www.west-wind.com

Licensed under MIT License
http://en.wikipedia.org/wiki/MIT_License
*/
(function(undefined) {
    ww = {};
    var self;
    ww.angular = {
        parseHttpError: function (args) {
            // error/message object passed
            if (args.hasOwnProperty("message"))
                return args;
            if (args.hasOwnProperty("Message")) {
                args.message = args.Message;
                return args;
            }

            var data = args[0];
            var status = args[1];
            var msg = args[2];
            var errorMsg = "";
            if (data) 
            {                      
                if(data.hasOwnProperty("message"))
                   return data;
                if (msg.hasOwnProperty("Message")) {
                    data.message = data.Message;
                    return data;
                }

                // assume JSON   
                try {
                    var msg = JSON.parse(data);

                    if (msg && msg.hasOwnProperty("message") || msg.hasOwnProperty("Message"))
                        return msg;
                } catch (exception) {
                    return new CallbackException("Unknown error.");
                }
            }

            return new CallbackException(errorMsg);
        },
        // extends deferred with $http compatible .success and .error functions
        $httpDeferredExtender: function(deferred) {
            deferred.promise.success = function(fn) {
                deferred.promise.then(fn, null);
                return deferred.promise;
            }
            deferred.promise.error = function(fn) {
                deferred.promise.then(null, fn);
                return deferred.promise;
            }
            return deferred;
        },
        // creates a resolved/rejected promise from a value
        $httpPromiseFromValue: function($q, val, reject) {
            var def = $q.defer();
            if (reject)
                def.reject(val);
            else
                def.resolve(val);
            self.$httpDeferredExtender(def);
            return def.promise;
        },
        promiseFrom$http: function($q, $http) {
            var d = $q.defer();
            d.then($http.success, $http.error);
            return d.promise;
        }
    };
    self = ww.angular;
})();