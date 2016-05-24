System.register(['angular2/core', './Entities', './AppState', 'rxjs/Observable', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, Entities_1, AppState_1, Observable_1, http_1;
    var AlbumService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
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
            AlbumService = (function () {
                function AlbumService(appState, http) {
                    this.appState = appState;
                    this.http = http;
                    this.artists = [];
                    this.albums = [];
                    this.album = new Entities_1.Album();
                    //console.log(http);
                    console.log("album service");
                }
                AlbumService.prototype.getAlbums = function () {
                    return this.http.get(this.appState.urls.albums)
                        .map(function (res) { return res.json(); })
                        .catch(this.errorHandler);
                };
                AlbumService.prototype.getAlbum = function (id) {
                    return this.http.get(this.appState.urls.album + "/" + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.errorHandler);
                };
                AlbumService.prototype.errorHandler = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                AlbumService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [AppState_1.AppState, http_1.Http])
                ], AlbumService);
                return AlbumService;
            }());
            exports_1("AlbumService", AlbumService);
        }
    }
});
//# sourceMappingURL=AlbumService.js.map