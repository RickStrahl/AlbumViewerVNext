System.register(['angular2/core', './AppState', 'rxjs/Observable', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, AppState_1, Observable_1, http_1;
    var ArtistService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AppState_1_1) {
                AppState_1 = AppState_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ArtistService = (function () {
                function ArtistService(appState, http) {
                    this.appState = appState;
                    this.http = http;
                    this.artists = [];
                    console.log("artist service");
                }
                ArtistService.prototype.getArtists = function () {
                    return this.http.get(this.appState.urls.artists)
                        .map(function (res) { return res.json(); })
                        .catch(this.errorHandler);
                };
                ArtistService.prototype.getArtist = function (id) {
                    return this.http.get(this.appState.urls.artist + "/" + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.errorHandler);
                };
                ArtistService.prototype.errorHandler = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ArtistService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [AppState_1.AppState, http_1.Http])
                ], ArtistService);
                return ArtistService;
            }());
            exports_1("ArtistService", ArtistService);
        }
    }
});
//# sourceMappingURL=ArtistService.js.map