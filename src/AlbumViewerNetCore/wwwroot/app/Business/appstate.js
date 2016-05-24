System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppState;
    return {
        setters:[],
        execute: function() {
            AppState = (function () {
                function AppState() {
                    this.activeTab = "albums";
                    this.started = new Date();
                    this.baseUrl = "http://localhost:2322/api/";
                    this.urls = null;
                    this.configureUrls();
                }
                AppState.prototype.configureUrls = function () {
                    this.urls = {
                        "albums": this.baseUrl + "albums",
                        "album": this.baseUrl + "album",
                        "artists": this.baseUrl + "artists"
                    };
                };
                return AppState;
            }());
            exports_1("AppState", AppState);
        }
    }
});
//# sourceMappingURL=AppState.js.map