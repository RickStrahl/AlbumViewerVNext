webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Options/options.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\">\r\n  \r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div class=\"list-group\" style=\"margin-top: 20px;\">\r\n      <style>\r\n          .list-group .fa { color: steelblue; font-size: 1.3em;padding-right: 15px;}\r\n      </style>\r\n    <a  href=\"javascript:{}\" (click)=\"reloadData()\" class=\"list-group-item\">\r\n      <h4 class=\"list-group-item-heading\">\r\n        <i class=\"fa fa-fw fa-refresh\"></i>\r\n        Reset Data\r\n      </h4>\r\n      <p class=\"list-group-item-text\">Reset data to original sample data.</p>\r\n    </a>\r\n    <a routerLink=\"/about\" class=\"list-group-item\">\r\n      <h4 class=\"list-group-item-heading\">\r\n        <i class=\"fa fa-fw fa-info-circle\"></i>\r\n        About Album Viewer\r\n      </h4>\r\n      <p>\r\n        <small *ngIf=\"config.applicationStats.OsPlatform\">Server Platform: {{config.applicationStats.OsPlatform}}</small><br/>\r\n        <small *ngIf=\"config.applicationStats.OsPlatform\">ASP.NET Version: {{config.applicationStats.AspDotnetVersion}}</small><br/>\r\n        <small *ngIf=\"config.applicationStats.OsPlatform\">Angular Version: {{config.applicationStats.AngularVersion}}</small>        \r\n      </p>\r\n    </a>\r\n    <a href=\"default.htm\" class=\"list-group-item\">\r\n      <h4>\r\n        <i class=\"fa fa-fw fa-home\"></i>\r\n        Back to Album List\r\n      </h4>\r\n    </a>\r\n    <a href=\"https://github.com/RickStrahl/AlbumViewerVNext\" class=\"list-group-item\">\r\n        <h4>\r\n          <i class=\"fa fa-fw fa-git\"></i>\r\n          GitHub \r\n        </h4>\r\n      </a>\r\n      \r\n    <div class=\"list-group-item\">\r\n      <h4><i class=\"fa fa-fw fa-gears\"></i> Settings</h4>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"httpBaseUrl\">Data Http Base URL:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"httpBaseUrl\"\r\n               placeholder=\"Data Http BaseUrl\" [(ngModel)]=\"config.urls.baseUrl\">\r\n      </div>\r\n    </div>\r\n\r\n    <a *ngIf=\"!user.isAuthenticated\" routerLink=\"/login\" class=\"list-group-item\">\r\n      <h4 class=\"list-group-item-heading\">\r\n        <i class=\"fa fa-unlock-alt\"></i>\r\n        Sign in\r\n      </h4>\r\n    </a>\r\n    <a *ngIf=\"user.isAuthenticated\" routerLink=\"/logout\" class=\"list-group-item\">\r\n      <h4 class=\"list-group-item-heading\">\r\n        <i class=\"fa fa-lock\"></i>\r\n        Sign out\r\n      </h4>\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Options/options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_userInfo__ = __webpack_require__("../../../../../src/app/business/userInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OptionsComponent = (function () {
    function OptionsComponent(config, user, http) {
        this.config = config;
        this.user = user;
        this.http = http;
        this.error = new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]();
    }
    OptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config.isSearchAllowed = false;
        if (this.config.applicationStats.OsPlatform == null) {
            this.http.get(this.config.urls.url("applicationStats"))
                .subscribe(function (stats) {
                _this.config.applicationStats = stats;
                var $ngv = $("[ng-version]");
                if ($ngv.length > 0)
                    _this.config.applicationStats.AngularVersion = $ngv.attr("ng-version");
            }, function (response) {
                var obsErr = new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]().parseObservableResponseError(response);
                var msg = obsErr.error.message;
                toastr.error("Get Application Stats failed: " + msg);
            });
        }
    };
    OptionsComponent.prototype.reloadData = function () {
        if (!this.user.isAuthenticated)
            window.location.hash = "login";
        this.http.get(this.config.urls.url("reloadData"))
            .subscribe(function (success) {
            if (success)
                toastr.success("Data has been reloaded.");
            else
                toastr.error("Unable to reload data");
        }, function (response) {
            var obsErr = new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]().parseObservableResponseError(response);
            var msg = obsErr.error.message;
            toastr.error("Data reload failed: " + msg);
            return obsErr;
        });
    };
    OptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'options',
            template: __webpack_require__("../../../../../src/app/Options/options.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__business_appConfiguration__["a" /* AppConfiguration */],
            __WEBPACK_IMPORTED_MODULE_2__business_userInfo__["a" /* UserInfo */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/albums/albumDisplay.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\" >\r\n\r\n  <div class=\"btn-group\" style=\"margin-bottom: 10px;\">\r\n    <a routerLink=\"/albums\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-list\"></i> Albums</a>\r\n    <a [routerLink]=\"['/album/edit',album.Id]\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-edit\"></i> Edit</a>\r\n    <a [href]=\"album.AmazonUrl\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-dollar\"></i> Buy</a>\r\n\r\n    <a [href]=\"album.SpotifyUrl\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-volume-up\"></i> Listen</a>\r\n    <button (click)=\"deleteAlbum(album)\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-remove\"></i> Delete</button>\r\n  </div>\r\n\r\n  <div class=\"separator\"></div>\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div class=\"row\" [@slideIn]=\"'in'\">\r\n    <div class=\"col-sm-3\">\r\n      <img [src]=\"album.ImageUrl\" *ngIf=\"album.ImageUrl\" class=\"album-image-big\" />\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"album-title-big\">\r\n        {{album.Title}}\r\n      </h2>\r\n\r\n      <div class=\"album-artist\">\r\n\r\n        by <a [routerLink]=\"['/artist',album.ArtistId]\">{{album.Artist.ArtistName}}</a>\r\n        {{(album.Year ? 'in ' + album.Year : '')}}\r\n      </div>\r\n      <div [innerHTML]=\"album.Description\" class=\"line-breaks\"></div>\r\n\r\n      <div style=\"margin: 10px 0\" class=\"pull-right\">\r\n        &nbsp;\r\n        <a *ngIf=\"album.AmazonUrl\" [href]=\"album.AmazonUrl\" class=\"btn btn-link btn-sm\" target=\"_amazon\"><i class=\"fa fa-dollar\"></i> Buy</a> &nbsp;&nbsp;\r\n        <a *ngIf=\"album.SpotifyUrl\" [href]=\"album.SpotifyUrl\" class=\"btn btn-link btn-sm\" target=\"_spotify\"><i class=\"fa fa-volume-up\"></i> Play</a>\r\n      </div>\r\n\r\n\r\n      <album-songlist [tracks]=\"album.Tracks\"></album-songlist>\r\n\r\n      <!--<table class=\" table table-striped small\">-->\r\n        <!--<tr *ngFor=\"let song of album.Tracks\">-->\r\n          <!--<td>{{song.SongName}}</td>-->\r\n          <!--<td>{{song.Length}}</td>-->\r\n        <!--</tr>-->\r\n      <!--</table>-->\r\n\r\n      <hr />\r\n      More from\r\n      <a [routerLink]=\"['/artist',album.ArtistId]\">\r\n        {{album.Artist.ArtistName}}<br />\r\n        <img *ngIf=\"album.Artist.ImageUrl\" [src]=\"album.Artist.ImageUrl\"\r\n             style=\"height: 100px; border-radius: 5px;box-shadow: 2px 2px 3px #535353\" />\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/albums/albumDisplay.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumDisplay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business_entities__ = __webpack_require__("../../../../../src/app/business/entities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albumService__ = __webpack_require__("../../../../../src/app/albums/albumService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_animations__ = __webpack_require__("../../../../../src/app/common/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlbumDisplay = (function () {
    function AlbumDisplay(route, router, config, albumService) {
        this.route = route;
        this.router = router;
        this.config = config;
        this.albumService = albumService;
        this.album = new __WEBPACK_IMPORTED_MODULE_0__business_entities__["a" /* Album */]();
        this.error = new __WEBPACK_IMPORTED_MODULE_4__common_errorDisplay__["b" /* ErrorInfo */]();
        this.aniFrame = 'in';
    }
    AlbumDisplay.prototype.ngOnInit = function () {
        var _this = this;
        this.config.isSearchAllowed = false;
        this.config.activeTab = "albums";
        this.aniFrame = 'in';
        //console.log("AlbumDisplay");
        if (!this.album.Title) {
            var id = this.route.snapshot.params["id"];
            if (id < 1)
                return;
            this.albumService.getAlbum(id)
                .subscribe(function (result) {
                _this.album = result;
            }, function (err) { return _this.error.error(err); });
        }
    };
    AlbumDisplay.prototype.ngOnDestroy = function () {
        this.aniFrame = 'out';
        console.log("ngDestroy");
    };
    AlbumDisplay.prototype.deleteAlbum = function (album) {
        var _this = this;
        this.albumService.deleteAlbum(album)
            .subscribe(function (result) {
            _this.error.info("Album '" + album.Title + "' has been deleted.");
            setTimeout(function () { return _this.router.navigate(["/albums"]); }, 1500);
        }, function (err) { return _this.error.error(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__business_entities__["a" /* Album */])
    ], AlbumDisplay.prototype, "album", void 0);
    AlbumDisplay = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'album-display',
            template: __webpack_require__("../../../../../src/app/albums/albumDisplay.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_6__common_animations__["a" /* slideIn */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__business_appConfiguration__["a" /* AppConfiguration */],
            __WEBPACK_IMPORTED_MODULE_2__albumService__["a" /* AlbumService */]])
    ], AlbumDisplay);
    return AlbumDisplay;
}());



/***/ }),

/***/ "../../../../../src/app/albums/albumEditor.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  >\r\n\r\n  <div *ngIf=\"album.Id !== 0\" class=\"btn-group\" style=\"margin-bottom: 10px;\">\r\n    <a routerLink=\"/albums\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-list\"></i> List</a>\r\n    <a [routerLink]=\"['/album',album.Id]\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-eye\"></i> View</a>\r\n    <a [href]=\"album.AmazonUrl\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-dollar\"></i> Buy</a>\r\n  </div>\r\n\r\n  <div class=\"separator\"></div>\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div class=\"row\"  [ngClass]=\"{ 'hidden': !loaded}\" [@slideIn]=\"'in'\">\r\n\r\n    <div class=\"col-sm-5\">\r\n      <form name=\"form1\" action=\"javascript:{}\" #form1=\"ngForm\" novalidate>\r\n        <div class=\"form-group\">\r\n          <label for=\"AlbumName\">Album Name:</label>\r\n          <input id=\"AlbumName\" type=\"text\" class=\"form-control input-sm\"\r\n                 placeholder=\"Album Name\"\r\n                 name=\"Title\" required\r\n                 [(ngModel)]=\"album.Title\" autofocus />\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"BandName\">Band Name:</label>\r\n          <input type=\"text\" class=\"form-control input-sm typeahead\" id=\"BandName\"\r\n                 required\r\n                 autocomplete=\"off\"\r\n                 data-provide=\"typeahead\"\r\n                 placeholder=\"Band Name\"\r\n                 name=\"ArtistName\"\r\n                 [(ngModel)]=\"album.Artist.ArtistName\" />\r\n\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"Description\">Album Description:</label>\r\n          <textarea class=\"form-control input-sm\" id=\"Description\"\r\n                    placeholder=\"Album description or review\"\r\n                    required\r\n                    [(ngModel)]=\"album.Description\"\r\n                    name=\"Description\"\r\n                    style=\"height: 115px\"></textarea>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\" title=\"Image Url\"><i class=\"fa fa-image fa-fw\"></i></span>\r\n            <input type=\"text\" class=\"form-control input-sm\" id=\"ImageUrl\"\r\n                   required\r\n                   name=\"ImageUrl\"\r\n                   placeholder=\"Image Url\" [(ngModel)]=\"album.ImageUrl\" />\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\" title=\"Url where to buy\"><i class=\"fa fa-dollar fa-fw\"></i></span>\r\n            <input type=\"text\" class=\"form-control input-sm\" id=\"AmazonUrl\"\r\n                   placeholder=\"Purchase Url\"\r\n                   name=\"AmazonUrl\"\r\n                   [(ngModel)]=\"album.AmazonUrl\"/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\" title=\"Url where to buy\"><i class=\"fa fa-spotify fa-fw\"></i></span>\r\n            <input type=\"text\" class=\"form-control input-sm\" id=\"SpotifyUrl\"\r\n                   placeholder=\"Listen Url\"\r\n                   name=\"SpotifyUrl\"\r\n                   [(ngModel)]=\"album.SpotifyUrl\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"YearReleased\">Year released:</label>\r\n          <input type=\"number\" class=\"form-control input-sm\" id=\"YearReleased\"\r\n                 required\r\n                 name=\"Year\"\r\n                 placeholder=\"Year of album release\"\r\n                 [(ngModel)]=\"album.Year\"/>\r\n        </div>\r\n\r\n        <hr/>\r\n\r\n        <album-songlist [tracks]=\"album.Tracks\" [allowEditing]=\"true\"></album-songlist>\r\n\r\n        <div class=\"well well-sm\">\r\n          <button type=\"submit\" (click)=\"saveAlbum(album)\"\r\n                  class=\"btn btn-success\"\r\n                  [disabled]=\"form1.invalid\" accesskey=\"S\">\r\n            <i class=\"fa fa-check\"></i> Save\r\n          </button>\r\n          <a [routerLink]=\"['/album',album.Id]\" class=\"btn btn-default\">\r\n            <i class=\"fa fa-remove\"></i> Cancel\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"separator\"></div>\r\n\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"col-sm-7\">\r\n      <h3>Preview</h3>\r\n      <img [src]=\"album.ImageUrl\" onerror=\"this.src=''\" class=\"album-image-big\"/>\r\n      <div style=\"margin-top: 10px;\">\r\n        <h2 class=\"album-title-big\">{{album.Title}}</h2>\r\n        <div class=\"album-artist\">by {{album.Artist.ArtistName}} {{(album.Year ? 'in ' + album.Year : '')}}\r\n          - <a [href]=\"album.AmazonUrl\" *ngIf=\"album.AmazonUrl\"><i class=\"fa fa-dollar\"></i> Buy on Amazon</a>\r\n        </div>\r\n        <div class=\"album-descript line-breaks\" [innerHTML]=\"album.Description\"></div>\r\n\r\n        <hr/>\r\n\r\n        <album-songlist [tracks]=\"album.Tracks\"></album-songlist>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/albums/albumEditor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_entities__ = __webpack_require__("../../../../../src/app/business/entities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albumService__ = __webpack_require__("../../../../../src/app/albums/albumService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__business_userInfo__ = __webpack_require__("../../../../../src/app/business/userInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_animations__ = __webpack_require__("../../../../../src/app/common/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlbumEditor = (function () {
    function AlbumEditor(route, router, albumService, config, user) {
        this.route = route;
        this.router = router;
        this.albumService = albumService;
        this.config = config;
        this.user = user;
        this.album = new __WEBPACK_IMPORTED_MODULE_1__business_entities__["a" /* Album */]();
        this.error = new __WEBPACK_IMPORTED_MODULE_4__common_errorDisplay__["b" /* ErrorInfo */]();
        this.loaded = false;
        this.aniFrame = 'in';
    }
    AlbumEditor.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.user.isAuthenticated) {
            this.router.navigate(['/login']);
            return;
        }
        this.config.isSearchAllowed = false;
        this.bandTypeAhead();
        var id = this.route.snapshot.params["id"];
        if (id < 1) {
            this.loaded = true;
            this.album = this.albumService.newAlbum();
            return;
        }
        this.albumService.getAlbum(id)
            .subscribe(function (result) {
            _this.album = result;
            _this.loaded = true;
        }, function (err) {
            _this.error.error(err);
        });
    };
    AlbumEditor.prototype.saveAlbum = function (album) {
        var _this = this;
        return this.albumService.saveAlbum(album)
            .subscribe(function (album) {
            var msg = album.Title + " has been saved.";
            _this.error.info(msg);
            toastr.success(msg);
            window.document.getElementById("MainView").scrollTop = 0;
            setTimeout(function () {
                this.router.navigate(["/album", album.Id]);
            }, 1500);
        }, function (err) {
            var msg = "Unable to save album: " + err.message;
            _this.error.error(msg);
            toastr.error(msg);
            if (err.response && err.response.status == 401) {
                _this.user.isAuthenticated = false;
                _this.router.navigate(["login"]);
            }
        });
    };
    ;
    AlbumEditor.prototype.bandTypeAhead = function () {
        var $input = $("#BandName");
        var config = this.config;
        // delay slightly to ensure that the
        // typeahead component is loaded when
        // doing a full browser refresh
        setTimeout(function () {
            $input.typeahead({
                source: [],
                autoselect: true,
                minLength: 0
            });
            $input.keyup(function () {
                var s = $(this).val();
                var url = config.urls.url("artistLookup") + s;
                $.getJSON(url, function (data) {
                    $input.data('typeahead').source = data;
                });
            });
        }, 1000);
    };
    AlbumEditor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'album-editor',
            template: __webpack_require__("../../../../../src/app/albums/albumEditor.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_7__common_animations__["a" /* slideIn */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__albumService__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_5__business_appConfiguration__["a" /* AppConfiguration */],
            __WEBPACK_IMPORTED_MODULE_6__business_userInfo__["a" /* UserInfo */]])
    ], AlbumEditor);
    return AlbumEditor;
}());



/***/ }),

/***/ "../../../../../src/app/albums/albumList.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid slide-animation\" [@slideIn]=\"'in'\">\r\n\r\n    <error-display [error]=\"error\"></error-display>\r\n\r\n    <a routerLink=\"/album/edit/0\" class=\"btn btn-sm btn-success pull-right\" (sclick)=\"addAlbum()\"><i class=\"fa fa-plus\"></i> Add Album</a>\r\n    <div class=\"page-header-text\">\r\n        <i class=\"fa fa-list\">\r\n        </i> Albums <span class=\"badge\">{{filteredAlbumList.length}}</span>\r\n    </div>\r\n\r\n    <div class=\"container\" *ngIf=\"busy\">\r\n        <i class=\"fa fa-circle-o-notch fa-spin fa-5x\"\r\n           style=\"display: block; text-align: center; margin-top: 70px;\"></i>\r\n    </div>\r\n\r\n\r\n    <a class=\"album\" role=\"button\" style=\"text-decoration: none; color: inherit\"\r\n         *ngFor=\"let album of filteredAlbumList\"\r\n         (click)=\"albumClick(album)\" >\r\n\r\n        <div class=\"album-overlay\">\r\n            <a routerLink=\"['/album/edit',{{album.Id}}]\">\r\n              <i class=\"fa fa-edit\" title=\"Edit\"></i>\r\n            </a>\r\n            &nbsp;\r\n            <a (click)=\"deleteAlbum(album)\">\r\n              <i class=\"fa fa-remove\" title=\"Delete\"></i>\r\n            </a>\r\n        </div>\r\n\r\n        <div>\r\n            <img [src]=\"album.ImageUrl\" class=\"album-image\" />\r\n            <div style=\"padding-left: 80px;\">\r\n                <div class=\"album-title\">{{album.Title}}</div>\r\n                <div class=\"album-artist\">by <b>{{album.Artist.ArtistName}}</b> {{(album.Year ? 'in ' + album.Year : '')}}</div>\r\n                <div class=\"album-descript\">{{album.Description}}</div>\r\n            </div>\r\n        </div>\r\n    </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/albums/albumList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albumService__ = __webpack_require__("../../../../../src/app/albums/albumService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_animations__ = __webpack_require__("../../../../../src/app/common/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlbumList = (function () {
    function AlbumList(router, albumService, config) {
        this.router = router;
        this.albumService = albumService;
        this.config = config;
        this.albumList = [];
        this.busy = true;
        this.error = new __WEBPACK_IMPORTED_MODULE_4__common_errorDisplay__["b" /* ErrorInfo */]();
    }
    AlbumList.prototype.ngOnInit = function () {
        this.getAlbums();
        this.config.isSearchAllowed = true;
        this.config.activeTab = "albums";
        this.config.searchText = "";
        // ??? Non-DOM way to do this?
        setTimeout(function () {
            $("#SearchBox").focus();
        }, 200);
    };
    Object.defineProperty(AlbumList.prototype, "filteredAlbumList", {
        get: function () {
            if (this.config.searchText && this.config.searchText.length > 1) {
                var lsearchText = this.config.searchText.toLowerCase();
                return this.albumList.filter(function (a) {
                    return a.Title.toLowerCase().includes(lsearchText) ||
                        a.Artist.ArtistName.toLowerCase().includes(lsearchText);
                });
            }
            return this.albumList;
        },
        enumerable: true,
        configurable: true
    });
    AlbumList.prototype.getAlbums = function () {
        var _this = this;
        this.busy = true;
        this.albumList = [];
        this.albumService.getAlbums()
            .subscribe(function (albums) {
            _this.albumList = albums;
            _this.busy = false;
            // reset scroll position of the list
            setTimeout(function () { return $("#MainView").scrollTop(_this.albumService.listScrollPos); }, 100);
        }, function (err) {
            if (!err.message)
                _this.error.error("Unable to load albums right now. Most likely the server is not responding.");
            else
                _this.error.error(err);
            _this.busy = false;
        });
    };
    AlbumList.prototype.albumClick = function (album) {
        this.albumService.listScrollPos = $("#MainView").scrollTop();
        this.router.navigate(['/album', album.Id]);
    };
    AlbumList.prototype.addAlbum = function () {
    };
    AlbumList.prototype.deleteAlbum = function (album) {
    };
    AlbumList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'album-list',
            template: __webpack_require__("../../../../../src/app/albums/albumList.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_5__common_animations__["a" /* slideIn */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__albumService__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_2__business_appConfiguration__["a" /* AppConfiguration */]])
    ], AlbumList);
    return AlbumList;
}());



/***/ }),

/***/ "../../../../../src/app/albums/albumService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_entities__ = __webpack_require__("../../../../../src/app/business/entities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumService = (function () {
    function AlbumService(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
        this.albumList = [];
        this.album = new __WEBPACK_IMPORTED_MODULE_1__business_entities__["a" /* Album */]();
        //artistList: Artist[] = [];
        this.listScrollPos = 0;
    }
    AlbumService.prototype.getAlbums = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("albums"))
            .map(function (albumList) { return _this.albumList = albumList; })
            .catch(new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]().parseObservableResponseError);
    };
    AlbumService.prototype.getAlbum = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("album", id))
            .map(function (album) {
            _this.album = album;
            if (!_this.albumList || _this.albumList.length < 1)
                _this.getAlbums(); // load up albums in background
            return _this.album;
        })
            .catch(new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]().parseObservableResponseError);
    };
    AlbumService.prototype.newAlbum = function () {
        this.album = new __WEBPACK_IMPORTED_MODULE_1__business_entities__["a" /* Album */]();
        return this.album;
    };
    AlbumService.prototype.saveAlbum = function (album) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url("album"), album, { withCredentials: true })
            .map(function (album) {
            _this.album = album;
            // explicitly update the list with the updated data
            _this.updateAlbum(_this.album);
            return _this.album;
        })
            .catch(new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]().parseObservableResponseError);
    };
    AlbumService.prototype.deleteAlbum = function (album) {
        var _this = this;
        return this.httpClient.delete(this.config.urls.url("album", album.Id), this.config.requestHeaders)
            .map(function (result) {
            if (result)
                _this.removeAlbum(album); // client side remove
        })
            .catch(new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]().parsePromiseResponseError);
    };
    /**
     * Updates the .albumList property by updating the actual
     * index entry in the existing list, adding new entries and
     * removing 0 entries.
     * @param album  - the album to update
     */
    AlbumService.prototype.updateAlbum = function (album) {
        var i = this.albumList.findIndex(function (a) { return (a.Id == album.Id); });
        if (i > -1)
            this.albumList[i] = album;
        else {
            this.albumList.push(album);
            this.albumList.sort(function (a, b) {
                var aTitle = a.Title.toLocaleLowerCase();
                var bTitle = b.Title.toLocaleLowerCase();
                if (aTitle > bTitle)
                    return 1;
                if (aTitle < bTitle)
                    return -1;
                return 0;
            });
        }
        this.albumList = this.albumList.filter(function (a) { return a.Id != 0; });
    };
    AlbumService.prototype.removeAlbum = function (album) {
        this.albumList = this.albumList.filter(function (a) { return a.Id != album.Id; });
    };
    AlbumService.prototype.addSong = function (track) {
        this.album.Tracks.push(track);
    };
    AlbumService.prototype.removeSong = function (track) {
        var idx = this.album.Tracks.findIndex(function (t) { return track.Id == t.Id; });
        if (idx > -1)
            this.album.Tracks.splice(idx, 1);
    };
    AlbumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__business_appConfiguration__["a" /* AppConfiguration */]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "../../../../../src/app/albums/albumSongList.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allowEditing\">\r\n  <button (click)=\"addTrack(track)\" accesskey=\"a\"\r\n          *ngIf=\"!isSongVisible\" title=\"Add Song (alt-a)\"\r\n          class=\"btn btn-info btn-xs\" style=\"margin-bottom: 10px;\">\r\n    <i class=\"fa fa-plus-circle\"></i> Add Song\r\n  </button>\r\n\r\n  <div *ngIf=\"isSongVisible\" class=\"well well-sm\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\" col-sm-9\">\r\n        <input class=\"form-control input-sm\" id=\"songSongName\"\r\n               placeholder=\"Name of the song\"\r\n               name=\"songSongName\"\r\n               [(ngModel)]=\"track.SongName\"/>\r\n\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <input class=\"form-control input-sm\" id=\"Length\"\r\n               name=\"Length\"\r\n               [(ngModel)]=\"track.Length\"\r\n               placeholder=\"0:00\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-success btn-xs\"\r\n            (click)=\"saveTrack(track)\"\r\n            [disabled]=\"!track.SongName\"\r\n            style=\"margin-top: 8px;\" accesskey=\"\">\r\n      <i class=\"fa fa-plus-circle\"></i> Save Track\r\n    </button>\r\n    <button class=\"btn btn-default btn-xs\"\r\n            (click)=\"cancelTrack()\"\r\n            style=\"margin-top: 8px;\">\r\n      <i class=\"fa fa-times\"></i> Cancel\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<table class=\" table table-striped small\">\r\n  <tr *ngFor=\"let track of tracks\">\r\n    <td>{{track.SongName}}</td>\r\n    <td>{{track.Length}}</td>\r\n    <td>\r\n      <button *ngIf=\"allowEditing\" (click)=\"removeTrack(track)\"\r\n              class=\"btn btn-xs btn-danger\">\r\n        <i class=\"fa fa-remove\"></i> Remove\r\n      </button>\r\n    </td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/albums/albumSongList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumSongList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_entities__ = __webpack_require__("../../../../../src/app/business/entities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albumService__ = __webpack_require__("../../../../../src/app/albums/albumService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumSongList = (function () {
    function AlbumSongList(albumService) {
        this.albumService = albumService;
        this.tracks = [];
        this.allowEditing = false;
        this.isSongVisible = false;
        this.track = new __WEBPACK_IMPORTED_MODULE_1__business_entities__["d" /* Track */]();
    }
    AlbumSongList.prototype.ngOnInit = function () {
    };
    AlbumSongList.prototype.addTrack = function (track) {
        this.track = new __WEBPACK_IMPORTED_MODULE_1__business_entities__["d" /* Track */]();
        this.isSongVisible = true;
    };
    AlbumSongList.prototype.cancelTrack = function () {
        this.track = new __WEBPACK_IMPORTED_MODULE_1__business_entities__["d" /* Track */]();
        this.isSongVisible = false;
    };
    AlbumSongList.prototype.saveTrack = function (track) {
        this.albumService.addSong(track);
        this.isSongVisible = false;
    };
    AlbumSongList.prototype.removeTrack = function (track) {
        this.albumService.removeSong(track);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AlbumSongList.prototype, "tracks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AlbumSongList.prototype, "allowEditing", void 0);
    AlbumSongList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //moduleId: module.id,
            selector: 'album-songlist',
            template: __webpack_require__("../../../../../src/app/albums/albumSongList.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__albumService__["a" /* AlbumService */]])
    ], AlbumSongList);
    return AlbumSongList;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albums_albumList__ = __webpack_require__("../../../../../src/app/albums/albumList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__albums_albumDisplay__ = __webpack_require__("../../../../../src/app/albums/albumDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__albums_albumEditor__ = __webpack_require__("../../../../../src/app/albums/albumEditor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__artists_artistList__ = __webpack_require__("../../../../../src/app/artists/artistList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__artists_artistDisplay__ = __webpack_require__("../../../../../src/app/artists/artistDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Options_options__ = __webpack_require__("../../../../../src/app/Options/options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_login__ = __webpack_require__("../../../../../src/app/common/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__options_about__ = __webpack_require__("../../../../../src/app/options/about.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: 'albums', pathMatch: 'full' },
    { path: 'albums', component: __WEBPACK_IMPORTED_MODULE_2__albums_albumList__["a" /* AlbumList */] },
    { path: 'album/:id', component: __WEBPACK_IMPORTED_MODULE_3__albums_albumDisplay__["a" /* AlbumDisplay */] },
    { path: 'album/edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__albums_albumEditor__["a" /* AlbumEditor */] },
    { path: 'artists', component: __WEBPACK_IMPORTED_MODULE_5__artists_artistList__["a" /* ArtistList */] },
    { path: 'artist/:id', component: __WEBPACK_IMPORTED_MODULE_6__artists_artistDisplay__["a" /* ArtistDisplay */] },
    { path: 'options', component: __WEBPACK_IMPORTED_MODULE_7__Options_options__["a" /* OptionsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__common_login__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_8__common_login__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__options_about__["a" /* AboutComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div style=\"margin-top: 72px; padding: 1px;\">\r\n\r\n        <div id=\"MainView\" >\r\n            <router-outlet autoscroll=\"true\"></router-outlet>\r\n        </div>\r\n        <app-footer></app-footer>\r\n\r\n</div>\r\n\r\n<body>\r\n</body>\r\n\r\n<footer>\r\n  <hr/>\r\n  &copy West Wind Technologies\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_userInfo__ = __webpack_require__("../../../../../src/app/business/userInfo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(user) {
        var _this = this;
        this.user = user;
        this.title = 'Test Application';
        // check authentication when the page is loaded
        // fire and forget - service updates the auth
        // status model
        this.user.checkAuthentication()
            .subscribe();
        // re-check infrequently - once every 2 minutes
        setInterval(function () {
            var previousStatus = user.isAuthenticated;
            _this.user.checkAuthentication()
                .subscribe(function (isAuthenticated) {
                if (!isAuthenticated && previousStatus)
                    toastr.warning("Your session has expired. Please log in again.");
            });
        }, 120000);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__business_userInfo__["a" /* UserInfo */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_appHeader__ = __webpack_require__("../../../../../src/app/common/appHeader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_appFooter__ = __webpack_require__("../../../../../src/app/common/appFooter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__albums_albumList__ = __webpack_require__("../../../../../src/app/albums/albumList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__albums_albumDisplay__ = __webpack_require__("../../../../../src/app/albums/albumDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__albums_albumEditor__ = __webpack_require__("../../../../../src/app/albums/albumEditor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__artists_artistList__ = __webpack_require__("../../../../../src/app/artists/artistList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__artists_artistDisplay__ = __webpack_require__("../../../../../src/app/artists/artistDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__business_entities__ = __webpack_require__("../../../../../src/app/business/entities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__albums_albumService__ = __webpack_require__("../../../../../src/app/albums/albumService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__artists_artistService__ = __webpack_require__("../../../../../src/app/artists/artistService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__business_userInfo__ = __webpack_require__("../../../../../src/app/business/userInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__albums_albumSongList__ = __webpack_require__("../../../../../src/app/albums/albumSongList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__artists_artistEditor__ = __webpack_require__("../../../../../src/app/artists/artistEditor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Options_options__ = __webpack_require__("../../../../../src/app/Options/options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_login__ = __webpack_require__("../../../../../src/app/common/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__options_about__ = __webpack_require__("../../../../../src/app/options/about.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 // legacy
 // use this
// components







// services






// directives and shared components




//import {HttpClient} from "./business/HttpClient";

//declare var $:any;
//declare var toastr:any;
// Enable production mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__app_routing_module__["a" /* AppRoutingModule */]
            ],
            // components
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__common_appHeader__["a" /* AppHeader */],
                __WEBPACK_IMPORTED_MODULE_9__common_appFooter__["a" /* AppFooter */],
                __WEBPACK_IMPORTED_MODULE_25__options_about__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__albums_albumList__["a" /* AlbumList */],
                __WEBPACK_IMPORTED_MODULE_11__albums_albumDisplay__["a" /* AlbumDisplay */],
                __WEBPACK_IMPORTED_MODULE_12__albums_albumEditor__["a" /* AlbumEditor */],
                __WEBPACK_IMPORTED_MODULE_20__albums_albumSongList__["a" /* AlbumSongList */],
                __WEBPACK_IMPORTED_MODULE_13__artists_artistList__["a" /* ArtistList */],
                __WEBPACK_IMPORTED_MODULE_14__artists_artistDisplay__["a" /* ArtistDisplay */],
                __WEBPACK_IMPORTED_MODULE_22__artists_artistEditor__["a" /* ArtistEditor */],
                __WEBPACK_IMPORTED_MODULE_21__common_errorDisplay__["a" /* ErrorDisplay */],
                __WEBPACK_IMPORTED_MODULE_24__common_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__Options_options__["a" /* OptionsComponent */]
            ],
            // services, pipes and providers
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__albums_albumService__["a" /* AlbumService */],
                __WEBPACK_IMPORTED_MODULE_17__artists_artistService__["a" /* ArtistService */],
                __WEBPACK_IMPORTED_MODULE_18__business_appConfiguration__["a" /* AppConfiguration */],
                __WEBPACK_IMPORTED_MODULE_19__business_userInfo__["a" /* UserInfo */],
                __WEBPACK_IMPORTED_MODULE_21__common_errorDisplay__["b" /* ErrorInfo */],
                __WEBPACK_IMPORTED_MODULE_15__business_entities__["a" /* Album */], __WEBPACK_IMPORTED_MODULE_15__business_entities__["c" /* Artist */], __WEBPACK_IMPORTED_MODULE_15__business_entities__["d" /* Track */]
                // make sure you use this for Hash Urls rather than HTML 5 routing
                //{ provide: LocationStrategy, useClass: HashLocationStrategy },
                // {
                //   provide: XHRBackend,
                //   useFactory: (xhr, opts, strategy, user) => {
                //     return new CoreXHRBackend(xhr, opts, strategy, user);
                //   },
                //   deps: [BrowserXhr, ResponseOptions, XSRFStrategy, UserInfo],
                // }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artistDisplay.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\" [@slideIn]=\"'in'\">\r\n\r\n  <div class=\"btn-group\" style=\"margin-bottom: 10px;\">\r\n    <a routerLink=\"/artists\" class=\"btn btn-sm btn-default\">\r\n      <i class=\"fa fa-list\"></i>\r\n      Artists</a>\r\n    <a (click)=\"editArtist()\"\r\n       class=\"btn btn-sm btn-default\">\r\n      <i class=\"fa fa-edit\"></i>\r\n      Edit\r\n    </a>\r\n\r\n    <button (click)=\"deleteArtist(artist)\"\r\n            class=\"btn btn-sm btn-default\">\r\n      <i class=\"fa fa-remove\"></i>\r\n      Delete\r\n    </button>\r\n  </div>\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n\r\n  <h2>{{artist.ArtistName}}</h2>\r\n\r\n  <div class=\"separator\"></div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <img [src]=\"artist.ImageUrl\"\r\n           style=\"width: 97%; margin-bottom: 8px; border-radius: 4px; box-shadow: 2px 2px 4px #535353\" />\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"line-breaks\">{{artist.Description }}</div>\r\n\r\n      <a class=\"small\" *ngIf=\"artist.AmazonUrl\" href=\"{{artist.AmazonUrl}}\">{{artist.ArtistName}} on Amazon</a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <h3>Albums</h3>\r\n  <div class=\"separator\"></div>\r\n\r\n  <div class=\"album\" *ngFor=\"let album of artist.Albums\" style=\"text-decorataion: none;\"\r\n       (click)=\"albumClick(album)\">\r\n    <div class=\"album-overlay\">\r\n      <a [routerLink]=\"['/album/edit',album.Id]\">\r\n        <i class=\"fa fa-edit\" title=\"Edit\"></i></a> &nbsp;\r\n      <a (click)=\"deleteAlbum(album)\">\r\n        <i class=\"fa fa-remove\" title=\"Delete\"></i></a>\r\n    </div>\r\n\r\n    <div>\r\n      <img [src]=\"album.ImageUrl\"  class=\"album-image\" *ngIf=\"album.ImageUrl\"  />\r\n      <div style=\"padding-left: 80px;\">\r\n        <div class=\"album-title\">{{album.Title}}</div>\r\n        <div class=\"album-artist\">\r\n          {{(album.Year ? 'in ' + album.Year : '')}}\r\n        </div>\r\n        <div class=\"album-descript\">{{album.Description}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <a class=\"btn btn-sm btn-success\" routerLink=\"/album/edit/0\">\r\n    <i class=\"fa fa-plus\"></i>\r\n    Add Album\r\n  </a>\r\n\r\n\r\n\r\n</div>\r\n\r\n<!-- modal edit dialog -->\r\n<artist-editor [artist]=\"artist\"></artist-editor>\r\n"

/***/ }),

/***/ "../../../../../src/app/artists/artistDisplay.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDisplay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artistService__ = __webpack_require__("../../../../../src/app/artists/artistService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_entities__ = __webpack_require__("../../../../../src/app/business/entities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__business_userInfo__ = __webpack_require__("../../../../../src/app/business/userInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__artistEditor__ = __webpack_require__("../../../../../src/app/artists/artistEditor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_animations__ = __webpack_require__("../../../../../src/app/common/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ArtistDisplay = (function () {
    function ArtistDisplay(route, artistService, config, router, user) {
        this.route = route;
        this.artistService = artistService;
        this.config = config;
        this.router = router;
        this.user = user;
        this.artist = new __WEBPACK_IMPORTED_MODULE_2__business_entities__["c" /* Artist */]();
        this.albums = [];
        this.artistId = null;
        this.formActive = true;
        this.error = new __WEBPACK_IMPORTED_MODULE_6__common_errorDisplay__["b" /* ErrorInfo */]();
    }
    ArtistDisplay.prototype.ngOnInit = function () {
        var _this = this;
        this.config.isSearchAllowed = false;
        var id = this.route.snapshot.params["id"];
        if (id < 1)
            return;
        this.artistService.getArtist(id)
            .subscribe(function (result) {
            _this.artist = result.Artist;
            _this.albums = result.Albums;
        }, function (err) {
            _this.error.error(err);
        });
    };
    ArtistDisplay.prototype.editArtist = function () {
        if (!this.user.isAuthenticated) {
            this.router.navigate(["login"]);
            return;
        }
        this.editor.showEditor();
    };
    ;
    ArtistDisplay.prototype.albumClick = function (album) {
        //window.location.hash = "album/" + album.Id;
        this.router.navigate(['/album', album.Id]);
    };
    ArtistDisplay.prototype.addAlbum = function () {
    };
    ArtistDisplay.prototype.deleteArtist = function (artist) {
        var _this = this;
        this.artistService.deleteArtist(artist)
            .subscribe(function (result) {
            _this.error.info("Album deleted.");
            setTimeout(function () {
                _this.router.navigate(["/artists"]);
                _this.artistService.artistList =
                    _this.artistService.artistList.filter(function (art) { return art.Id != artist.Id; });
            }, 1200);
        }, function (err) { console.log(err); _this.error.error(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7__artistEditor__["a" /* ArtistEditor */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__artistEditor__["a" /* ArtistEditor */])
    ], ArtistDisplay.prototype, "editor", void 0);
    ArtistDisplay = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //moduleId: module.id,
            selector: 'artist-display',
            template: __webpack_require__("../../../../../src/app/artists/artistDisplay.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_8__common_animations__["a" /* slideIn */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__artistService__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_3__business_appConfiguration__["a" /* AppConfiguration */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__business_userInfo__["a" /* UserInfo */]])
    ], ArtistDisplay);
    return ArtistDisplay;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artistEditor.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"EditModal\"\r\n     tabindex=\"-1\" role=\"dialog\">\r\n\r\n  <div class=\"modal-dialog\" role=\"document\" >\r\n    <div class=\"modal-content\" >\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n        <h3 class=\"modal-title\" id=\"myModalLabel\">Artist Info</h3>\r\n      </div>\r\n\r\n      <form name=\"form1\"\r\n            action=\"javascript:{}\" novalidate\r\n            #form1=\"ngForm\"  >\r\n\r\n      <div class=\"modal-body\">\r\n         <div class=\"form-group\">\r\n            <label for=\"ArtistName\">Artist Name:</label>\r\n            <input name=\"ArtistName\" id=\"ArtistName\" type=\"text\"\r\n                   class=\"form-control input-sm\"\r\n                   placeholder=\"Artist Name\" required\r\n                   [(ngModel)]=\"artist.ArtistName\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"Description\">Bio:</label>\r\n            <textarea type=\"text\" class=\"form-control input-sm\"\r\n                      name=\"Description\" id=\"Description\"\r\n                      required\r\n                      style=\"height: 80px;\"\r\n                      minlength=\"20\"\r\n                      placeholder=\"Band Bio\" [(ngModel)]=\"artist.Description\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"ImageUrl\">Image Url:</label>\r\n            <input type=\"text\" class=\"form-control input-sm\"\r\n                   id=\"ImageUrl\" name=\"ImageUrl\"\r\n                   placeholder=\"Image Url\" [(ngModel)]=\"artist.ImageUrl\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"AmazonUrl\">Amazon Url:</label>\r\n            <input type=\"text\" class=\"form-control input-sm\"\r\n                   name=\"AmazonUrl\" id=\"AmazonUrl\"\r\n                   placeholder=\"Link to Artist Amazon Page\" [(ngModel)]=\"artist.AmazonUrl\" />\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n          <i class=\"fa fa-remove\"></i> Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\"\r\n                [disabled]=\"form1.pristine || form1.invalid\" accesskey=\"S\"\r\n                (click)=\"saveArtist(artist)\">\r\n          <i class=\"fa fa-check\"></i>\r\n          Save changes\r\n        </button>\r\n      </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/artists/artistEditor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artistService__ = __webpack_require__("../../../../../src/app/artists/artistService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_entities__ = __webpack_require__("../../../../../src/app/business/entities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__business_userInfo__ = __webpack_require__("../../../../../src/app/business/userInfo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistEditor = (function () {
    function ArtistEditor(artistService, config, user) {
        this.artistService = artistService;
        this.config = config;
        this.user = user;
        this.artist = new __WEBPACK_IMPORTED_MODULE_2__business_entities__["c" /* Artist */]();
        this.albums = [];
        this.formActive = false;
        this.error = new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]();
        console.log("ArtistEditor ctor");
    }
    ArtistEditor.prototype.ngOnInit = function () {
        this.config.isSearchAllowed = false;
    };
    ArtistEditor.prototype.showEditor = function () {
        $("#EditModal").modal("show");
    };
    ArtistEditor.prototype.saveArtist = function (artist) {
        var _this = this;
        this.artistService.saveArtist(artist)
            .subscribe(function (result) {
            _this.artist = result.Artist;
            _this.albums = result.Albums;
            $("#EditModal").modal("hide");
            _this.formActive = false;
            setTimeout(function () {
                _this.formActive = true;
            }, 0);
            _this.error.info("Artist has been saved");
        }, function (err) {
            _this.error.error(err);
            if (err.response && err.response.status == 401) {
                window.location.hash = "login";
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__business_entities__["c" /* Artist */])
    ], ArtistEditor.prototype, "artist", void 0);
    ArtistEditor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //moduleId: module.id,
            selector: 'artist-editor',
            template: __webpack_require__("../../../../../src/app/artists/artistEditor.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artistService__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_4__business_appConfiguration__["a" /* AppConfiguration */],
            __WEBPACK_IMPORTED_MODULE_5__business_userInfo__["a" /* UserInfo */]])
    ], ArtistEditor);
    return ArtistEditor;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artistList.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\" [@slideInLeft]=\"'in'\" >\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div class=\"list-group\">\r\n    <a routerLink=\"/artists\" class=\"list-group-item active\">\r\n      <i class=\"fa fa-list\"></i> Artists\r\n      <span class=\"badge\">{{artistList.length}}</span>\r\n    </a>\r\n\r\n    <a class=\"list-group-item\"\r\n       *ngFor=\"let artist of filteredArtistList\"\r\n       (click)=\"artistClick(artist)\" role=\"button\">\r\n      <i class=\"fa fa-users\" style=\"color: steelblue;\"></i> &nbsp;\r\n      <span class=\"badge\">{{artist.AlbumCount}}</span>\r\n      {{artist.ArtistName}}\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/artists/artistList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artistService__ = __webpack_require__("../../../../../src/app/artists/artistService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_animations__ = __webpack_require__("../../../../../src/app/common/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistList = (function () {
    function ArtistList(router, artistService, config) {
        this.router = router;
        this.artistService = artistService;
        this.config = config;
        this.artistList = [];
        this.error = new __WEBPACK_IMPORTED_MODULE_4__common_errorDisplay__["b" /* ErrorInfo */]();
    }
    ArtistList.prototype.ngOnInit = function () {
        this.getArtists();
        this.config.searchText = "";
        this.config.isSearchAllowed = true;
        this.config.activeTab = "artists";
        setTimeout(function () {
            $("#SearchBox").focus();
        }, 200);
    };
    Object.defineProperty(ArtistList.prototype, "filteredArtistList", {
        get: function () {
            if (this.config.searchText && this.config.searchText.length > 1) {
                var lsearchText = this.config.searchText.toLowerCase();
                return this.artistList.filter(function (a) {
                    return a.ArtistName.toLowerCase().includes(lsearchText);
                });
            }
            return this.artistList;
        },
        enumerable: true,
        configurable: true
    });
    ArtistList.prototype.getArtists = function () {
        var _this = this;
        this.artistService.getArtists()
            .subscribe(function (artists) {
            _this.artistList = artists;
            setTimeout(function () {
                $("#MainView").scrollTop(_this.artistService.listScrollPos);
                _this.artistService.listScrollPos = 0;
            }, 20);
            return _this.artistList;
        }, function (err) {
            if (!err.message)
                _this.error.error("Unable to load artists right now. Most likely the server is not responding.");
            else
                _this.error.error(err);
        });
    };
    ArtistList.prototype.artistClick = function (artist) {
        // Manual Navigation
        this.router.navigate(['/artist', artist.Id]);
        this.artistService.listScrollPos = $("#MainView").scrollTop();
    };
    ArtistList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'artist-list',
            template: __webpack_require__("../../../../../src/app/artists/artistList.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_5__common_animations__["b" /* slideInLeft */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__artistService__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_1__business_appConfiguration__["a" /* AppConfiguration */]])
    ], ArtistList);
    return ArtistList;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artistService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistService = (function () {
    function ArtistService(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
        this.artistList = [];
        this.artist = null;
        this.albums = [];
        this.error = "";
        this.listScrollPos = 0;
        console.log("ArtistService ctor");
    }
    ArtistService.prototype.getArtists = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        // use locally cached version
        if (force !== true && (this.artistList && this.artistList.length > 0))
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(this.artistList);
        return this.httpClient.get(this.config.urls.url("artists"))
            .map(function (artistList) {
            _this.artistList = artistList;
            return _this.artistList;
        })
            .catch(new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]().parseObservableResponseError);
    };
    ArtistService.prototype.getArtist = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("artist", id), this.config.requestHeaders)
            .map(function (artistResult) {
            _this.artist = artistResult.Artist;
            _this.artist.Albums = artistResult.Albums;
            if (!_this.artistList || _this.artistList.length < 1)
                _this.getArtists();
            return artistResult;
        })
            .catch(new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]().parseObservableResponseError);
    };
    ArtistService.prototype.saveArtist = function (artist) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url("saveArtist"), artist, this.config.requestHeaders)
            .map(function (artistResult) {
            _this.artist = artistResult.Artist;
            _this.artist.Albums = artistResult.Albums;
            _this.updateArtist(artistResult.Artist);
            return artistResult;
        })
            .catch(new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]().parseObservableResponseError);
    };
    // Update the artistList with an artist
    ArtistService.prototype.updateArtist = function (artist) {
        var idx = this.artistList.findIndex(function (art) { return art.Id == artist.Id; });
        if (idx < 0)
            this.artistList.push(artist);
        else {
            this.artistList[idx] = artist;
        }
    };
    ArtistService.prototype.deleteArtist = function (artist) {
        return this.httpClient.delete(this.config.urls.url("artist", artist.Id), this.config.requestHeaders)
            .catch(new __WEBPACK_IMPORTED_MODULE_3__common_errorDisplay__["b" /* ErrorInfo */]().parseObservableResponseError);
    };
    ArtistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__business_appConfiguration__["a" /* AppConfiguration */]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "../../../../../src/app/business/appConfiguration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfiguration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities__ = __webpack_require__("../../../../../src/app/business/entities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppConfiguration = (function () {
    function AppConfiguration() {
        var _this = this;
        // top level search text
        this.searchText = "";
        this.activeTab = "albums";
        this.isSearchAllowed = true;
        this.applicationStats = new __WEBPACK_IMPORTED_MODULE_1__entities__["b" /* ApplicationStats */]();
        this.urls = {
            baseUrl: "./",
            //baseUrl: "http://localhost/albumviewer/",
            //baseUrl: "http://localhost:5000/",
            //baseUrl: "https://albumviewer2swf.west-wind.com/",
            albums: "api/albums",
            album: "api/album",
            artists: "api/artists",
            artist: "api/artist",
            artistLookup: "api/artistlookup?search=",
            saveArtist: "api/artist",
            login: "api/login",
            logout: "api/logout",
            isAuthenticated: "api/isAuthenticated",
            reloadData: "api/reloadData",
            applicationStats: "api/applicationstats",
            url: function (name, parm1, parm2, parm3) {
                var url = _this.urls.baseUrl + _this.urls[name];
                if (parm1)
                    url += "/" + parm1;
                if (parm2)
                    url += "/" + parm2;
                if (parm3)
                    url += "/" + parm3;
                return url;
            }
        };
        /**
         * Http Request options to for requests
         * @type {RequestOptions}
         */
        this.requestHeaders = { withCredentials: true };
        console.log("AppConfiguration ctor");
        this.setToastrOptions();
        if (location.port && (location.port == "3000") || (location.port == "4200"))
            this.urls.baseUrl = "http://localhost:5000/"; // kestrel
        //this.urls.baseUrl = "http://localhost:26448/"; // iis Express
        //this.urls.baseUrl = "http://localhost/albumviewer/"; // iis          
        //this.urls.baseUrl = "https://albumviewer.west-wind.com/";  // online
    }
    AppConfiguration.prototype.setToastrOptions = function () {
        toastr.options.closeButton = true;
        toastr.options.positionClass = "toast-bottom-right";
    };
    AppConfiguration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppConfiguration);
    return AppConfiguration;
}());



/***/ }),

/***/ "../../../../../src/app/business/entities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Artist; });
/* unused harmony export ArtistResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApplicationStats; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Album = (function () {
    function Album() {
        this.Id = 0;
        this.ArtistId = 0;
        this.Title = null;
        this.Description = null;
        this.Year = 0;
        this.ImageUrl = null;
        this.AmazonUrl = null;
        this.SpotifyUrl = null;
        this.Artist = new Artist();
        this.Tracks = [];
    }
    Album = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Album);
    return Album;
}());

var Artist = (function () {
    function Artist() {
        this.Id = 0;
        this.ArtistName = null;
        this.Description = null;
        this.ImageUrl = null;
        this.AmazonUrl = null;
        this.AlbumCount = 0;
        this.Albums = [];
    }
    Artist = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Artist);
    return Artist;
}());

var ArtistResult = (function () {
    function ArtistResult() {
        this.Artist = null;
        this.Albums = [];
    }
    ArtistResult = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ArtistResult);
    return ArtistResult;
}());

var Track = (function () {
    function Track() {
        this.Id = 0;
        this.AlbumId = 0;
        this.SongName = null;
        this.Length = null;
        this.Bytes = 0;
        this.UnitPrice = 0;
    }
    Track = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Track);
    return Track;
}());

var ApplicationStats = (function () {
    function ApplicationStats() {
        this.OsPlatform = null;
        this.AngularVersion = "Unknown";
        this.AspDotnetVersion = "Unknown";
    }
    ApplicationStats = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ApplicationStats);
    return ApplicationStats;
}());



/***/ }),

/***/ "../../../../../src/app/business/userInfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserInfo = (function () {
    function UserInfo(http, config) {
        this.http = http;
        this.config = config;
        this.isAdmin = false;
        this.userName = null;
        this.sessionStarted = new Date();
        this._isAuthenticated = false;
        // initialize isAuthenticate from localstorage
        var isAuthenticated = localStorage.getItem("av_isAuthenticated");
        this._isAuthenticated = !isAuthenticated || isAuthenticated === 'false' ? false : true;
    }
    Object.defineProperty(UserInfo.prototype, "isAuthenticated", {
        get: function () {
            return this._isAuthenticated;
        },
        set: function (val) {
            this._isAuthenticated = val || false;
            // cache authentication
            localStorage.setItem('av_isAuthenticated', this._isAuthenticated.toString());
        },
        enumerable: true,
        configurable: true
    });
    ;
    UserInfo.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.config.urls.url("login"), {
            username: username,
            password: password
        })
            .catch(function (response) {
            if (response.status === 401)
                _this.isAuthenticated = false;
            return new __WEBPACK_IMPORTED_MODULE_7__common_errorDisplay__["b" /* ErrorInfo */]().parseObservableResponseError(response);
        });
    };
    UserInfo.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.config.urls.url("logout"))
            .map(function (success) {
            _this.isAuthenticated = false;
            return true;
        });
    };
    /**
     * Calls to the server to check authentication and then
     * updates the local isAuthenticated flag
     * @returns {Observable<t>}
     */
    UserInfo.prototype.checkAuthentication = function () {
        var _this = this;
        var url = this.config.urls.url("isAuthenticated");
        console.log(url);
        return this.http.get(url)
            .map(function (result) {
            _this.isAuthenticated = result;
            return result;
        })
            .catch(function (response) {
            _this.isAuthenticated = false;
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(response);
        });
    };
    UserInfo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__appConfiguration__["a" /* AppConfiguration */]])
    ], UserInfo);
    return UserInfo;
}());



/***/ }),

/***/ "../../../../../src/app/common/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slideInLeft; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var slideIn = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('slideIn', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
        transform: 'translateX(100%)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
        transform: 'translateX(0)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
        transform: 'translateX(-100%)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('* => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms ease-in')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms ease-out'))
]);
var slideInLeft = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('slideInLeft', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
        transform: 'translateX(-100%)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
        transform: 'translateX(0)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
        transform: 'translateX(100%)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('* => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('300ms ease-in')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('300ms ease-out'))
]);


/***/ }),

/***/ "../../../../../src/app/common/appFooter.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner banner-bottom\">\r\n  <nav id=\"Toolbar\">\r\n    <a routerLink=\"/albums\" [ngClass]=\"{ selected: config.activeTab == 'albums'}\" >\r\n      <img src=\"images/record.png\" title=\"Albums\" /> <span>Albums</span>\r\n    </a>\r\n    <a routerLink=\"/artists\" [ngClass]=\"{ selected: config.activeTab == 'artists'}\">\r\n      <img src=\"images/artists32.png\" title=\"Artists\" /> <span>Artists</span>\r\n    </a>\r\n    <a routerLink=\"/options\" [ngClass]=\"{ selected: config.activeTab == 'options'}\">\r\n      <img src=\"images/gear.png\" title=\"Options\" /> <span>Options</span>\r\n    </a>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/appFooter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppFooter = (function () {
    function AppFooter(config) {
        this.config = config;
    }
    AppFooter.prototype.ngOnInit = function () {
    };
    AppFooter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //moduleId: module.id,
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/common/appFooter.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__business_appConfiguration__["a" /* AppConfiguration */]])
    ], AppFooter);
    return AppFooter;
}());



/***/ }),

/***/ "../../../../../src/app/common/appHeader.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"TitleBar\" class=\"statusbar-push\">\r\n        <a routerLink=\"/albums\">\r\n            <img src=\"images/headphone-head.png\"\r\n                 style=\"height: 35px; float: left\" />\r\n            <div style=\"float: left; margin-left: 5px; line-height: 1.2\">\r\n                <i style=\"color: steelblue; font-size: 0.8em; font-weight: bold;\">West Wind</i><br />\r\n                <i style=\"color: whitesmoke; font-size: 1.25em; font-weight: bold;\">AlbumViewer</i>\r\n            </div>\r\n        </a>\r\n    </div>\r\n\r\n    \r\n    <div style=\"margin: 0; padding: 0; border: none;\">\r\n        <div class=\"banner statusbar-push\">\r\n            <nav id=\"Toolbar-Top\" class=\"pull-right\">\r\n\r\n                <a  routerLink=\"/albums\" [ngClass]=\"{ selected: config.activeTab == 'albums'}\">\r\n                    <img src=\"images/record.png\" title=\"Albums\" /> <span>Albums</span>\r\n                </a>\r\n                <a routerLink=\"/artists\" [ngClass]=\"{ selected: config.activeTab == 'artists'}\">\r\n                    <img src=\"images/artists32.png\" title=\"Artists\" /> <span>Artists</span>\r\n                </a>\r\n                <a routerLink=\"/options\" [ngClass]=\"{ selected: config.activeTab == 'options'}\">\r\n                    <img src=\"images/gear.png\" title=\"Options\" /> <span>Options</span>\r\n                </a>\r\n            </nav>\r\n\r\n\r\n            <nav id=\"TopMenu\" class=\"pull-right\">\r\n                <form style=\"float: left; width: 140px; padding-top: 2px;\">\r\n                    <input id=\"SearchBox\" type=\"text\"\r\n                           class=\"form-control\" placeholder=\"Search...\"\r\n                           name=\"searchText\"\r\n                           [(ngModel)]=\"config.searchText\"\r\n                           *ngIf=\"config.isSearchAllowed\">\r\n                </form>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/appHeader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_appConfiguration__ = __webpack_require__("../../../../../src/app/business/appConfiguration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeader = (function () {
    function AppHeader(config) {
        this.config = config;
    }
    AppHeader.prototype.ngOnInit = function () {
    };
    AppHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //moduleId: module.id,
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/common/appHeader.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__business_appConfiguration__["a" /* AppConfiguration */]])
    ], AppHeader);
    return AppHeader;
}());



/***/ }),

/***/ "../../../../../src/app/common/errorDisplay.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ErrorInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 *   A Bootstrap based alert display
 */
var ErrorDisplay = (function () {
    function ErrorDisplay() {
        /**
         * Error object that is bound to the component.
         * @type {ErrorInfo}
         */
        this.error = new ErrorInfo();
    }
    ErrorDisplay.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", ErrorInfo)
    ], ErrorDisplay.prototype, "error", void 0);
    ErrorDisplay = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //moduleId: module.id,
            selector: 'error-display',
            //templateUrl: 'errorDisplay.html'
            template: "\n        <div *ngIf=\"error.message\"\n             class=\"alert alert-{{error.icon}} alert-dismissable\">\n            <button *ngIf=\"error.dismissable\" type=\"button\" class=\"close\"\n                    data-dismiss=\"alert\" aria-hidden=\"true\">\n                <i class=\"fa fa-remove\"></i>\n            </button>\n\n            <div *ngIf=\"error.header\" style=\"font-size: 1.5em; font-weight: bold\">\n                <i class=\"fa fa-{{error.imageIcon}}\" style=\"color: {{error.iconColor}}\"></i>\n                {{error.header}}\n            </div>\n            <i *ngIf=\"!error.header\"\n               class=\"fa fa-{{error.imageIcon}}\"\n               style=\"color: {{error.iconColor}}\"></i>\n\n            <strong>{{error.message}}</strong>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], ErrorDisplay);
    return ErrorDisplay;
}());

var ErrorInfo = (function () {
    function ErrorInfo() {
        this.response = null;
        this.reset();
    }
    ErrorInfo.prototype.reset = function () {
        this.message = "";
        this.header = "";
        this.dismissable = false;
        this.icon = "warning";
        this.imageIcon = "warning";
        this.iconColor = "inherit";
    };
    /**
     * Low level method to set message properties
     * @param msg - the message to set to
     * @param icon? - sets the icon property (warning*)
     * @param iconColor? - sets the icon color (left as is)
     */
    ErrorInfo.prototype.show = function (msg, icon, iconColor) {
        this.message = msg;
        this.icon = icon ? icon : "warning";
        if (iconColor)
            this.iconColor = iconColor;
        this.fixupIcons();
        // if(this.icon == "warning")
        //   toastr.warning(this.message);
        // if(this.icon == "info")
        //   toastr.info(this.message);
        // if (this.icon == "success")
        //   toastr.success(this.message);
    };
    /**
     * Displays an error alert
     * @param msg  - Either a message string or error object with .message property
     */
    ErrorInfo.prototype.error = function (msg) {
        if (typeof (msg) === 'object' && msg.message)
            this.message = msg.message;
        else
            this.message = msg;
        this.show(this.message, "warning");
    };
    /**
     * DIsplays an info style alert
     * @param msg - message to display
     */
    ErrorInfo.prototype.info = function (msg) {
        this.show(msg, "info");
    };
    /**
     * Fixes up icons and colors based on standard icon settings
     * this method is called in internally after any of the helper
     * methods are called. You can call this when setting any icon
     * related properties manually.
     */
    ErrorInfo.prototype.fixupIcons = function () {
        var err = this;
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
    };
    /**
     * Parse a toPromise() .catch() clause error
     * from a response object and returns an errorInfo object
     * @param response
     * @returns {Promise<void>|Promise<T>}
     */
    ErrorInfo.prototype.parsePromiseResponseError = function (response) {
        if (response.hasOwnProperty("message"))
            return Promise.reject(response);
        if (response.hasOwnProperty("Message")) {
            response.message = response.Message;
            return Promise.reject(response);
        }
        var err = new ErrorInfo();
        err.response = response;
        err.message = response.statusText;
        try {
            var data = response.json();
            if (data && data.message)
                err.message = data.message;
        }
        catch (ex) {
        }
        return Promise.reject(err);
    };
    ErrorInfo.prototype.parseObservableResponseError = function (response) {
        var err = new ErrorInfo();
        // HttpClient has an `error` property for raw JSON response
        if (response.hasOwnProperty("error")) {
            try {
                err = JSON.parse(response.error);
            }
            catch (ex) { }
            if (err.hasOwnProperty("message"))
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
            if (err.hasOwnProperty("Message")) {
                err.message = err["Message"];
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
            }
        }
        if (response.hasOwnProperty("message"))
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(response);
        if (response.hasOwnProperty("Message")) {
            response.message = response.Message;
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(response);
        }
        err.response = response;
        err.message = response.statusText;
        try {
            var data = response.json();
            if (data && data.message)
                err.message = data.message;
        }
        catch (ex) {
        }
        if (!err.message)
            err.message = "Unknown server failure.";
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
    };
    return ErrorInfo;
}());



/***/ }),

/***/ "../../../../../src/app/common/login.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"page-header-text\">\r\n    AlbumViewer Login\r\n  </div>\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div id=\"WebLogin\" class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      Please sign in\r\n    </div>\r\n\r\n\r\n    <form class=\"panel-body\" name=\"form1\" #form1=\"ngForm\">\r\n      <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n              <div class=\"input-group-addon\">\r\n                <i class=\"fa fa-fw fa-user\"></i>\r\n              </div>\r\n              <input type=\"text\" name=\"WebLogin_txtUsername\"\r\n                   id=\"WebLogin_txtUsername\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Enter your user name\"\r\n                   [(ngModel)]=\"username\"\r\n                   autocapitalize=\"off\"\r\n                   autocomplete=\"off\"\r\n                   spellcheck=\"false\"\r\n                   autocorrect=\"off\" required />\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">\r\n            <i class=\"fa fa-fw fa-unlock-alt\"></i>\r\n          </div>\r\n          <input type=\"password\" name=\"password\"\r\n                 id=\"password\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Enter your password\"\r\n                 [(ngModel)]=\"password\"\r\n                 autocapitalize=\"off\"\r\n                 autocomplete=\"off\"\r\n                 spellcheck=\"false\"\r\n                 autocorrect=\"off\"\r\n                 required />\r\n        </div>\r\n      </div>\r\n      <div class=\"small \" >You can use: uid: test / pwd: test</div>\r\n      <hr />\r\n\r\n      <button class=\"btn btn-primary\"\r\n              type=\"button\"\r\n              (click)=\"login()\"\r\n              [disabled]=\"form1.invalid || form1.pristine\" >\r\n        <i class=\"fa fa-unlock-alt\"></i>\r\n        Login\r\n      </button>\r\n\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn btn-default btn-sm pull-right\" style=\"display:block\"\r\n                type=\"button\"\r\n                (click)=\"logout()\" [disabled]=\"!user.isAuthenticated\">\r\n          <i class=\"fa fa-unlock-alt\"></i>\r\n          Logout\r\n        </button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_userInfo__ = __webpack_require__("../../../../../src/app/business/userInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errorDisplay__ = __webpack_require__("../../../../../src/app/common/errorDisplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(user, route, router) {
        this.user = user;
        this.route = route;
        this.router = router;
        this.username = "";
        this.password = "";
        this.error = new __WEBPACK_IMPORTED_MODULE_2__errorDisplay__["b" /* ErrorInfo */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.url[0].path == "logout")
            this.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.user.login(this.username, this.password)
            .subscribe(function () {
            _this.user.isAuthenticated = true;
            toastr.success("You are logged in.");
            _this.router.navigate(["/albums"]);
        }, function (err) {
            _this.error.error(err);
            _this.password = "";
            toastr.warning("Login failed: " + err.message);
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.user.logout()
            .subscribe(function (success) {
            toastr.success("Logged out.");
            _this.router.navigate(["/albums"]);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //moduleId: module.id,
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/common/login.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__business_userInfo__["a" /* UserInfo */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/options/about.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <style>\r\n    h4 {\r\n      color: steelblue;\r\n      font-weight: bold;\r\n    }\r\n  </style>\r\n  <div class=\"page-header-text\">\r\n    <i class=\"fa fa-info-circle\"></i>  About the AlbumViewer Sample\r\n  </div>\r\n\r\n  <div class=\"well well-sm\">\r\n    <h4>ASP.NET Core API backend</h4>\r\n    <p>\r\n      This application runs an ASP.NET Core 2.0 API server with a\r\n      JSON Service backend . \r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"well well-sm\">\r\n    <h4>Angular (5.x) Front End</h4>\r\n    <p>\r\n      The client interface uses Angular 5.x to provide the front end logic and\r\n      UI management features. There are album and artist services that\r\n      talk to the backend interface and page level components and child\r\n      components that handle individual view pages of the application.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"well well-sm\">\r\n    <h4>Mobile enabled based on modified Bootstrap Interface</h4>\r\n    <p>\r\n      The base Bootstrap framework is used for the core UI features\r\n      of the interface. The base template has been customized for\r\n      this application.\r\n    </p>\r\n    <p>\r\n      The application is mobile focused and uses custom resizing\r\n      and toolbar relocation based on the screen/device size used.\r\n      The application should be comfortably usable from phone up to full screen\r\n      desktop applications.\r\n    </p>\r\n  </div>\r\n\r\n  <hr />\r\n  <a routerLink=\"/albums\">Back to Application</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/options/about.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'about',
            template: __webpack_require__("../../../../../src/app/options/about.html")
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map