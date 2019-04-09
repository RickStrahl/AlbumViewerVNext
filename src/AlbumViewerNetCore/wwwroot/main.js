(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/albums/albumDisplay.html":
/*!******************************************!*\
  !*** ./src/app/albums/albumDisplay.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\" >\r\n    \r\n    <div class=\"btn-group\" role=\"group\" style=\"margin-bottom: 10px;\" aria-label=\"Album Navigation\">\r\n    <a routerLink=\"/albums\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-list\"></i> Albums</a>\r\n    <a [routerLink]=\"['/album/edit',album.Id]\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-edit\"></i> Edit</a>\r\n    <a [href]=\"album.AmazonUrl\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dollar\"></i> Buy</a>\r\n\r\n    <a [href]=\"album.SpotifyUrl\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-volume-up\"></i> Listen</a>\r\n    <button (click)=\"deleteAlbum(album)\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-remove\"></i> Delete</button>\r\n  </div>\r\n\r\n  <div class=\"separator\"></div>\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div class=\"row\" [@slideIn]=\"'in'\">\r\n    <div class=\"col-sm-3\">\r\n      <img [src]=\"album.ImageUrl\" *ngIf=\"album.ImageUrl\" class=\"album-image-big\" />\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"album-title-big\">\r\n        {{album.Title}}\r\n      </h2>\r\n\r\n      <div class=\"album-artist\">\r\n\r\n        by <a [routerLink]=\"['/artist',album.ArtistId]\">{{album.Artist.ArtistName}}</a>\r\n        {{(album.Year ? 'in ' + album.Year : '')}}\r\n      </div>\r\n      <div [innerHTML]=\"album.Description\" class=\"line-breaks\"></div>\r\n\r\n      <div style=\"margin: 10px 0\" class=\"pull-right\">\r\n        &nbsp;\r\n        <a *ngIf=\"album.AmazonUrl\" [href]=\"album.AmazonUrl\" class=\"btn btn-link btn-sm\" target=\"_amazon\"><i class=\"fa fa-dollar\"></i> Buy</a> &nbsp;&nbsp;\r\n        <a *ngIf=\"album.SpotifyUrl\" [href]=\"album.SpotifyUrl\" class=\"btn btn-link btn-sm\" target=\"_spotify\"><i class=\"fa fa-volume-up\"></i> Play</a>\r\n      </div>\r\n\r\n\r\n      <album-songlist [tracks]=\"album.Tracks\"></album-songlist>\r\n\r\n      <!--<table class=\" table table-striped small\">-->\r\n        <!--<tr *ngFor=\"let song of album.Tracks\">-->\r\n          <!--<td>{{song.SongName}}</td>-->\r\n          <!--<td>{{song.Length}}</td>-->\r\n        <!--</tr>-->\r\n      <!--</table>-->\r\n\r\n      <hr />\r\n      More from\r\n      <a [routerLink]=\"['/artist',album.ArtistId]\">\r\n        {{album.Artist.ArtistName}}<br />\r\n        <img *ngIf=\"album.Artist.ImageUrl\" [src]=\"album.Artist.ImageUrl\"\r\n             style=\"height: 100px; border-radius: 5px;box-shadow: 2px 2px 3px #535353\" />\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/albums/albumDisplay.ts":
/*!****************************************!*\
  !*** ./src/app/albums/albumDisplay.ts ***!
  \****************************************/
/*! exports provided: AlbumDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumDisplay", function() { return AlbumDisplay; });
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../business/entities */ "./src/app/business/entities.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albumService */ "./src/app/albums/albumService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/animations */ "./src/app/common/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlbumDisplay = /** @class */ (function () {
    function AlbumDisplay(route, router, config, albumService) {
        this.route = route;
        this.router = router;
        this.config = config;
        this.albumService = albumService;
        this.album = new _business_entities__WEBPACK_IMPORTED_MODULE_0__["Album"]();
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _business_entities__WEBPACK_IMPORTED_MODULE_0__["Album"])
    ], AlbumDisplay.prototype, "album", void 0);
    AlbumDisplay = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'album-display',
            template: __webpack_require__(/*! ./albumDisplay.html */ "./src/app/albums/albumDisplay.html"),
            animations: [_common_animations__WEBPACK_IMPORTED_MODULE_6__["slideIn"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_5__["AppConfiguration"],
            _albumService__WEBPACK_IMPORTED_MODULE_2__["AlbumService"]])
    ], AlbumDisplay);
    return AlbumDisplay;
}());



/***/ }),

/***/ "./src/app/albums/albumEditor.html":
/*!*****************************************!*\
  !*** ./src/app/albums/albumEditor.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  >\r\n\r\n  <div *ngIf=\"album.Id !== 0\" class=\"btn-group\" role=\"group\" style=\"margin-bottom: 10px;\">\r\n    <a routerLink=\"/albums\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-list\"></i> List</a>\r\n    <a [routerLink]=\"['/album',album.Id]\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-eye\"></i> View</a>\r\n    <a [href]=\"album.AmazonUrl\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dollar\"></i> Buy</a>\r\n  </div>\r\n\r\n  <div class=\"separator\"></div>\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div class=\"row\"  [ngClass]=\"{ 'hidden': !loaded}\" [@slideIn]=\"'in'\">\r\n\r\n    <div class=\"col-sm-5\">\r\n      <form name=\"form1\" action=\"javascript:{}\" #form1=\"ngForm\" novalidate>\r\n        <div class=\"form-group\">\r\n          <label for=\"AlbumName\">Album Name:</label>\r\n          <input id=\"AlbumName\" type=\"text\" class=\"form-control input-sm\"\r\n                 placeholder=\"Album Name\"\r\n                 [focus]=\"true\"\r\n                 name=\"Title\" required\r\n                 [(ngModel)]=\"album.Title\" autofocus />\r\n\r\n        </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n              <label for=\"typeahead-basic\">Band Name (Auto):</label>\r\n              <input id=\"typeahead-basic\" type=\"text\"\r\n                     name=\"SearchText\"\r\n                     class=\"form-control\"                     \r\n                     [(ngModel)]=\"album.Artist.ArtistName\"\r\n                     [ngbTypeahead]=\"search\"                     \r\n                     [resultFormatter]=\"resultFormatBandListValue\"\r\n                     [inputFormatter]=\"inputFormatBandListValue\"\r\n                     #instance=\"ngbTypeahead\"                     \r\n                     />\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n          <label for=\"Description\">Album Description:</label>\r\n          <textarea class=\"form-control input-sm\" id=\"Description\"\r\n                    placeholder=\"Album description or review\"\r\n                    required\r\n                    [(ngModel)]=\"album.Description\"\r\n                    name=\"Description\"\r\n                    style=\"height: 115px\"></textarea>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n              <span class=\"input-group-prepend\" title=\"Image Url\">\r\n                  <span class=\"input-group-text\">\r\n                      <i class=\"fa fa-image fa-fw\"></i>\r\n                  </span>\r\n              </span>\r\n            <input type=\"text\" class=\"form-control input-sm\" id=\"ImageUrl\"\r\n                   required\r\n                   name=\"ImageUrl\"\r\n                   placeholder=\"Image Url\" [(ngModel)]=\"album.ImageUrl\" />\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n              <span class=\"input-group-prepend\" title=\"Url where to buy\">\r\n                  <span class=\"input-group-text\">\r\n                      <i class=\"fa fa-dollar fa-fw\"></i>\r\n                  </span>\r\n              </span>\r\n            <input type=\"text\" class=\"form-control input-sm\" id=\"AmazonUrl\"\r\n                   placeholder=\"Purchase Url\"\r\n                   name=\"AmazonUrl\"\r\n                   [(ngModel)]=\"album.AmazonUrl\"/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\" title=\"Url where to buy\">\r\n                  <span class=\"input-group-text\">\r\n                      <i class=\"fa fa-spotify fa-fw\"></i>\r\n                  </span>\r\n              </div>\r\n            <input type=\"text\" class=\"form-control input-sm\" id=\"SpotifyUrl\"\r\n                   placeholder=\"Listen Url\"\r\n                   name=\"SpotifyUrl\"\r\n                   [(ngModel)]=\"album.SpotifyUrl\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"YearReleased\">Year released:</label>\r\n          <input type=\"number\" class=\"form-control input-sm\" id=\"YearReleased\"\r\n                 required\r\n                 name=\"Year\"\r\n                 placeholder=\"Year of album release\"\r\n                 [(ngModel)]=\"album.Year\"/>\r\n        </div>\r\n\r\n        <hr/>\r\n\r\n        <album-songlist [tracks]=\"album.Tracks\" [allowEditing]=\"true\"></album-songlist>\r\n\r\n        <div class=\"well well-sm\">\r\n          <button type=\"submit\" (click)=\"saveAlbum(album)\"\r\n                  class=\"btn btn-success\"\r\n                  [disabled]=\"form1.invalid\" accesskey=\"S\">\r\n            <i class=\"fa fa-check\"></i> Save\r\n          </button>\r\n          <a [routerLink]=\"['/album',album.Id]\" class=\"btn btn-default\">\r\n            <i class=\"fa fa-remove\"></i> Cancel\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"separator\"></div>\r\n\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"col-sm-7\">\r\n      <h3>Preview</h3>\r\n      <img [src]=\"album.ImageUrl\" onerror=\"this.src=''\" class=\"album-image-big\"/>\r\n      <div style=\"margin-top: 10px;\">\r\n        <h2 class=\"album-title-big\">{{album.Title}}</h2>\r\n        <div class=\"album-artist\">by {{album.Artist.ArtistName}} {{(album.Year ? 'in ' + album.Year : '')}}\r\n          - <a [href]=\"album.AmazonUrl\" *ngIf=\"album.AmazonUrl\"><i class=\"fa fa-dollar\"></i> Buy on Amazon</a>\r\n        </div>\r\n        <div class=\"album-descript line-breaks\" [innerHTML]=\"album.Description\"></div>\r\n\r\n        <hr/>\r\n\r\n        <album-songlist [tracks]=\"album.Tracks\"></album-songlist>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/albums/albumEditor.ts":
/*!***************************************!*\
  !*** ./src/app/albums/albumEditor.ts ***!
  \***************************************/
/*! exports provided: AlbumEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumEditor", function() { return AlbumEditor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/entities */ "./src/app/business/entities.ts");
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albumService */ "./src/app/albums/albumService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../business/userInfo */ "./src/app/business/userInfo.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/animations */ "./src/app/common/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AlbumEditor = /** @class */ (function () {
    function AlbumEditor(route, router, albumService, config, user) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.albumService = albumService;
        this.config = config;
        this.user = user;
        this.album = new _business_entities__WEBPACK_IMPORTED_MODULE_1__["Album"]();
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]();
        this.loaded = false;
        this.aniFrame = 'in';
        this.searchData = {};
        /**
         * Returns a list of Artist Lookup items and pipes them
         * into the look up list. Result format is:
         * [ {name: "band", id: "band"}]
         *
         * Called from ngb-TypeAhead with the search term observable
         */
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), 
            // switchMap allows returning an observable rather than maps array
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (searchText) { return _this.albumService.artistLookup(searchText); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]().parseObservableResponseError));
        };
    }
    AlbumEditor.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.user.isAuthenticated) {
            this.router.navigate(['/login']);
            return;
        }
        this.config.isSearchAllowed = false;
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
                _this.router.navigate(["/album", album.Id]);
            }, 1500);
        }, function (err) {
            var msg = "Unable to save album: " + err.message;
            _this.error.error(msg);
            toastr.error(msg);
            if (err.response && err.response.status == 401) {
                _this.user.isAuthenticated = false;
                _this.router.navigate(["/login"]);
            }
        });
    };
    ;
    /**
     * Used to format the result data from the lookup into the
     * display and list values
     * @param value For
     */
    AlbumEditor.prototype.resultFormatBandListValue = function (value) {
        return value.name;
    };
    AlbumEditor.prototype.inputFormatBandListValue = function (value) {
        if (value.name)
            return value.name;
        return value;
    };
    AlbumEditor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'album-editor',
            template: __webpack_require__(/*! ./albumEditor.html */ "./src/app/albums/albumEditor.html"),
            animations: [_common_animations__WEBPACK_IMPORTED_MODULE_8__["slideIn"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _albumService__WEBPACK_IMPORTED_MODULE_2__["AlbumService"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_5__["AppConfiguration"],
            _business_userInfo__WEBPACK_IMPORTED_MODULE_6__["UserInfo"]])
    ], AlbumEditor);
    return AlbumEditor;
}());



/***/ }),

/***/ "./src/app/albums/albumList.html":
/*!***************************************!*\
  !*** ./src/app/albums/albumList.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid slide-animation\" [@slideIn]=\"'in'\">\r\n\r\n    <error-display [error]=\"error\"></error-display>\r\n\r\n    <a routerLink=\"/album/edit/0\" class=\"btn btn-sm btn-success pull-right\" (sclick)=\"addAlbum()\"><i class=\"fa fa-plus\"></i> Add Album</a>\r\n    <div class=\"page-header-text\">\r\n        <i class=\"fa fa-list\">\r\n        </i> Albums <span class=\"badge badge-danger badge-small\">{{filteredAlbumList.length}}</span>\r\n    </div>\r\n\r\n    <div class=\"container\" *ngIf=\"busy\">\r\n        <i class=\"fa fa-circle-o-notch fa-spin fa-5x\"\r\n           style=\"display: block; text-align: center; margin-top: 70px;\"></i>\r\n    </div>\r\n\r\n\r\n    <a class=\"album\" role=\"button\" style=\"text-decoration: none; color: inherit\"\r\n         *ngFor=\"let album of filteredAlbumList\"\r\n         (click)=\"albumClick(album)\" >\r\n\r\n        <div class=\"album-overlay\">\r\n            <a routerLink=\"['/album/edit',{{album.Id}}]\">\r\n              <i class=\"fa fa-edit\" title=\"Edit\"></i>\r\n            </a>\r\n            &nbsp;\r\n            <a (click)=\"deleteAlbum(album)\">\r\n              <i class=\"fa fa-remove\" title=\"Delete\"></i>\r\n            </a>\r\n        </div>\r\n\r\n        <div>\r\n            <img [src]=\"album.ImageUrl\" class=\"album-image\" />\r\n            <div style=\"padding-left: 80px;\">\r\n                <div class=\"album-title\">{{album.Title}}</div>\r\n                <div class=\"album-artist\">by <b>{{album.Artist.ArtistName}}</b> {{(album.Year ? 'in ' + album.Year : '')}}</div>\r\n                <div class=\"album-descript\">{{album.Description}}</div>\r\n            </div>\r\n        </div>\r\n    </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/albums/albumList.ts":
/*!*************************************!*\
  !*** ./src/app/albums/albumList.ts ***!
  \*************************************/
/*! exports provided: AlbumList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumList", function() { return AlbumList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albumService */ "./src/app/albums/albumService.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/animations */ "./src/app/common/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlbumList = /** @class */ (function () {
    function AlbumList(router, albumService, config) {
        this.router = router;
        this.albumService = albumService;
        this.config = config;
        this.albumList = [];
        this.busy = true;
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'album-list',
            template: __webpack_require__(/*! ./albumList.html */ "./src/app/albums/albumList.html"),
            animations: [_common_animations__WEBPACK_IMPORTED_MODULE_5__["slideIn"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _albumService__WEBPACK_IMPORTED_MODULE_1__["AlbumService"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"]])
    ], AlbumList);
    return AlbumList;
}());



/***/ }),

/***/ "./src/app/albums/albumService.ts":
/*!****************************************!*\
  !*** ./src/app/albums/albumService.ts ***!
  \****************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/entities */ "./src/app/business/entities.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import 'rxjs/Operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
var AlbumService = /** @class */ (function () {
    function AlbumService(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
        this.albumList = [];
        this.album = new _business_entities__WEBPACK_IMPORTED_MODULE_1__["Album"]();
        //artistList: Artist[] = [];
        this.listScrollPos = 0;
    }
    AlbumService.prototype.getAlbums = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("albums"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (albumList) { return _this.albumList = albumList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService.prototype.getAlbum = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("album", id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (album) {
            _this.album = album;
            if (!_this.albumList || _this.albumList.length < 1)
                _this.getAlbums(); // load up albums in background
            return _this.album;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService.prototype.newAlbum = function () {
        this.album = new _business_entities__WEBPACK_IMPORTED_MODULE_1__["Album"]();
        return this.album;
    };
    AlbumService.prototype.saveAlbum = function (album) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url("album"), album)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (album) {
            _this.album = album;
            // explicitly update the list with the updated data
            _this.updateAlbum(_this.album);
            return _this.album;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService.prototype.deleteAlbum = function (album) {
        var _this = this;
        return this.httpClient.delete(this.config.urls.url("album", album.Id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            if (result)
                _this.removeAlbum(album); // client side remove
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parsePromiseResponseError));
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
    AlbumService.prototype.artistLookup = function (searchTerm) {
        var url = this.config.urls.url("artistLookup") + searchTerm;
        return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "./src/app/albums/albumSongList.html":
/*!*******************************************!*\
  !*** ./src/app/albums/albumSongList.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allowEditing\">\r\n  <button (click)=\"addTrack(track)\" accesskey=\"a\"\r\n          *ngIf=\"!isSongVisible\" title=\"Add Song (alt-a)\"\r\n          class=\"btn btn-info btn-xs\" style=\"margin-bottom: 10px;\">\r\n    <i class=\"fa fa-plus-circle\"></i> Add Song\r\n  </button>\r\n\r\n  <div *ngIf=\"isSongVisible\" class=\"well well-sm\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\" col-sm-9\">\r\n        <input class=\"form-control input-sm\" id=\"songSongName\"\r\n               placeholder=\"Name of the song\"\r\n               name=\"songSongName\"\r\n               [(ngModel)]=\"track.SongName\"/>\r\n\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <input class=\"form-control input-sm\" id=\"Length\"\r\n               name=\"Length\"\r\n               [(ngModel)]=\"track.Length\"\r\n               placeholder=\"0:00\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-success btn-xs\"\r\n            (click)=\"saveTrack(track)\"\r\n            [disabled]=\"!track.SongName\"\r\n            style=\"margin-top: 8px;\" accesskey=\"\">\r\n      <i class=\"fa fa-plus-circle\"></i> Save Track\r\n    </button>\r\n    <button class=\"btn btn-default btn-xs\"\r\n            (click)=\"cancelTrack()\"\r\n            style=\"margin-top: 8px;\">\r\n      <i class=\"fa fa-times\"></i> Cancel\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<style>\r\n    @media(max-width: 700px) {\r\n        #TrackTable td i.fa { display: none; }\r\n    }\r\n</style>\r\n<table id=\"TrackTable\" class=\"table table-striped table-sm\">\r\n    <tbody>\r\n        <tr *ngFor=\"let track of tracks\">            \r\n            <td><i class=\"fa fa-music text-primary\"></i>\r\n                {{track.SongName}}</td>\r\n            <td>{{track.Length}}</td>\r\n            <td>\r\n                <button *ngIf=\"allowEditing\" (click)=\"removeTrack(track)\"\r\n                        class=\"btn btn-sm btn-danger\">\r\n                    <i class=\"fa fa-remove\"></i> Remove\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/albums/albumSongList.ts":
/*!*****************************************!*\
  !*** ./src/app/albums/albumSongList.ts ***!
  \*****************************************/
/*! exports provided: AlbumSongList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumSongList", function() { return AlbumSongList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/entities */ "./src/app/business/entities.ts");
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albumService */ "./src/app/albums/albumService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumSongList = /** @class */ (function () {
    function AlbumSongList(albumService) {
        this.albumService = albumService;
        this.tracks = [];
        this.allowEditing = false;
        this.isSongVisible = false;
        this.track = new _business_entities__WEBPACK_IMPORTED_MODULE_1__["Track"]();
    }
    AlbumSongList.prototype.ngOnInit = function () {
    };
    AlbumSongList.prototype.addTrack = function (track) {
        this.track = new _business_entities__WEBPACK_IMPORTED_MODULE_1__["Track"]();
        this.isSongVisible = true;
    };
    AlbumSongList.prototype.cancelTrack = function () {
        this.track = new _business_entities__WEBPACK_IMPORTED_MODULE_1__["Track"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AlbumSongList.prototype, "tracks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AlbumSongList.prototype, "allowEditing", void 0);
    AlbumSongList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'album-songlist',
            template: __webpack_require__(/*! ./albumSongList.html */ "./src/app/albums/albumSongList.html")
        }),
        __metadata("design:paramtypes", [_albumService__WEBPACK_IMPORTED_MODULE_2__["AlbumService"]])
    ], AlbumSongList);
    return AlbumSongList;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _albums_albumList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums/albumList */ "./src/app/albums/albumList.ts");
/* harmony import */ var _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albums/albumDisplay */ "./src/app/albums/albumDisplay.ts");
/* harmony import */ var _albums_albumEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./albums/albumEditor */ "./src/app/albums/albumEditor.ts");
/* harmony import */ var _artists_artistList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artists/artistList */ "./src/app/artists/artistList.ts");
/* harmony import */ var _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artists/artistDisplay */ "./src/app/artists/artistDisplay.ts");
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options/options */ "./src/app/options/options.ts");
/* harmony import */ var _common_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/login */ "./src/app/common/login.ts");
/* harmony import */ var _options_about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./options/about */ "./src/app/options/about.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: 'albums', pathMatch: 'full' },
    { path: 'albums', component: _albums_albumList__WEBPACK_IMPORTED_MODULE_2__["AlbumList"] },
    { path: 'album/:id', component: _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_3__["AlbumDisplay"] },
    { path: 'album/edit/:id', component: _albums_albumEditor__WEBPACK_IMPORTED_MODULE_4__["AlbumEditor"] },
    { path: 'artists', component: _artists_artistList__WEBPACK_IMPORTED_MODULE_5__["ArtistList"] },
    { path: 'artist/:id', component: _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_6__["ArtistDisplay"] },
    { path: 'options', component: _options_options__WEBPACK_IMPORTED_MODULE_7__["OptionsComponent"] },
    { path: 'login', component: _common_login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'logout', component: _common_login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'about', component: _options_about__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div style=\" padding: 1px;\">\r\n\r\n        <div id=\"MainView\" >\r\n            <router-outlet autoscroll=\"true\"></router-outlet>\r\n        </div>\r\n        <app-footer></app-footer>\r\n\r\n</div>\r\n\r\n<body>\r\n</body>\r\n\r\n<footer>\r\n  <hr/>\r\n  &copy West Wind Technologies\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business/userInfo */ "./src/app/business/userInfo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_business_userInfo__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_appHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/appHeader */ "./src/app/common/appHeader.ts");
/* harmony import */ var _common_appFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/appFooter */ "./src/app/common/appFooter.ts");
/* harmony import */ var _albums_albumList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./albums/albumList */ "./src/app/albums/albumList.ts");
/* harmony import */ var _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./albums/albumDisplay */ "./src/app/albums/albumDisplay.ts");
/* harmony import */ var _albums_albumEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./albums/albumEditor */ "./src/app/albums/albumEditor.ts");
/* harmony import */ var _artists_artistList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./artists/artistList */ "./src/app/artists/artistList.ts");
/* harmony import */ var _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./artists/artistDisplay */ "./src/app/artists/artistDisplay.ts");
/* harmony import */ var _albums_albumSongList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./albums/albumSongList */ "./src/app/albums/albumSongList.ts");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _artists_artistEditor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./artists/artistEditor */ "./src/app/artists/artistEditor.ts");
/* harmony import */ var _common_login__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/login */ "./src/app/common/login.ts");
/* harmony import */ var _options_about__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./options/about */ "./src/app/options/about.ts");
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./options/options */ "./src/app/options/options.ts");
/* harmony import */ var _business_httpRequestInterceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./business/httpRequestInterceptor */ "./src/app/business/httpRequestInterceptor.ts");
/* harmony import */ var _common_focusDirective__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common/focusDirective */ "./src/app/common/focusDirective.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 // legacy
 // use this
// components








// directives and shared components





/* Custom Components or overrides */



//declare var $:any;
//declare var toastr:any;
// Enable production mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                // ng-bootstrap
                //NgbModule
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModalModule"]
            ],
            // components
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _common_appHeader__WEBPACK_IMPORTED_MODULE_8__["AppHeader"],
                _common_appFooter__WEBPACK_IMPORTED_MODULE_9__["AppFooter"],
                _options_options__WEBPACK_IMPORTED_MODULE_20__["OptionsComponent"],
                _options_about__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
                _albums_albumList__WEBPACK_IMPORTED_MODULE_10__["AlbumList"],
                _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_11__["AlbumDisplay"],
                _albums_albumEditor__WEBPACK_IMPORTED_MODULE_12__["AlbumEditor"],
                _albums_albumSongList__WEBPACK_IMPORTED_MODULE_15__["AlbumSongList"],
                _artists_artistList__WEBPACK_IMPORTED_MODULE_13__["ArtistList"],
                _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_14__["ArtistDisplay"],
                _artists_artistEditor__WEBPACK_IMPORTED_MODULE_17__["ArtistEditor"],
                _common_errorDisplay__WEBPACK_IMPORTED_MODULE_16__["ErrorDisplay"],
                _common_login__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _common_focusDirective__WEBPACK_IMPORTED_MODULE_22__["FocusDirective"]
            ],
            // services, pipes and providers
            providers: [
                //Album, Artist, Track
                // make sure you use this for Hash Urls rather than HTML 5 routing
                //{ provide: LocationStrategy, useClass: HashLocationStrategy },
                // {
                //   provide: XHRBackend,
                //   useFactory: (xhr, opts, strategy, user) => {
                //     return new CoreXHRBackend(xhr, opts, strategy, user);
                //   },
                //   deps: [BrowserXhr, ResponseOptions, XSRFStrategy, UserInfo],
                // }
                // Http Interceptor(s) - this one adds with Client Credentials
                [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _business_httpRequestInterceptor__WEBPACK_IMPORTED_MODULE_21__["HttpRequestInterceptor"], multi: true }
                ],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artists/artistDisplay.html":
/*!********************************************!*\
  !*** ./src/app/artists/artistDisplay.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\" [@slideIn]=\"'in'\">\r\n\r\n  <div class=\"btn-group margin-bottom\" role=\"group\" >\r\n    <a routerLink=\"/artists\" class=\"btn btn-sm btn-primary\">\r\n      <i class=\"fa fa-list\"></i>\r\n      Artists</a>\r\n\r\n    <button  (click)=\"openModalEditor(editor)\"\r\n       class=\"btn btn-sm btn-primary\">\r\n      <i class=\"fa fa-edit\"></i>\r\n      Edit\r\n    </button>\r\n\r\n    <button (click)=\"deleteArtist(ArtistEditor)\"\r\n            class=\"btn btn-sm btn-primary\">\r\n      <i class=\"fa fa-remove\"></i>\r\n      Delete\r\n    </button>\r\n  </div>\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n\r\n  <h2>{{artist.ArtistName}}</h2>\r\n\r\n  <div class=\"separator\"></div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <img [src]=\"artist.ImageUrl\"\r\n           style=\"width: 97%; margin-bottom: 8px; border-radius: 4px; box-shadow: 2px 2px 4px #535353\" />\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"line-breaks\">{{artist.Description }}</div>\r\n\r\n      <a class=\"small\" *ngIf=\"artist.AmazonUrl\" href=\"{{artist.AmazonUrl}}\">{{artist.ArtistName}} on Amazon</a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <h3>Albums</h3>\r\n  <div class=\"separator\"></div>\r\n\r\n  <div class=\"album\" *ngFor=\"let album of artist.Albums\" style=\"text-decorataion: none;\"\r\n       (click)=\"albumClick(album)\">\r\n    <div class=\"album-overlay\">\r\n      <a [routerLink]=\"['/album/edit',album.Id]\">\r\n        <i class=\"fa fa-edit\" title=\"Edit\"></i></a> &nbsp;\r\n      <a (click)=\"deleteAlbum(album)\">\r\n        <i class=\"fa fa-remove\" title=\"Delete\"></i></a>\r\n    </div>\r\n\r\n    <div>\r\n      <img [src]=\"album.ImageUrl\"  class=\"album-image\" *ngIf=\"album.ImageUrl\"  />\r\n      <div style=\"padding-left: 80px;\">\r\n        <div class=\"album-title\">{{album.Title}}</div>\r\n        <div class=\"album-artist\">\r\n          {{(album.Year ? 'in ' + album.Year : '')}}\r\n        </div>\r\n        <div class=\"album-descript\">{{album.Description}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <a class=\"btn btn-sm btn-success\" routerLink=\"/album/edit/0\">\r\n    <i class=\"fa fa-plus\"></i>\r\n    Add Album\r\n  </a>\r\n\r\n\r\n\r\n</div>\r\n\r\n<!-- modal edit dialog -->\r\n<artist-editor #ArtistEditor  [artist]=\"artist\" ></artist-editor>\r\n"

/***/ }),

/***/ "./src/app/artists/artistDisplay.ts":
/*!******************************************!*\
  !*** ./src/app/artists/artistDisplay.ts ***!
  \******************************************/
/*! exports provided: ArtistDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistDisplay", function() { return ArtistDisplay; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _artistService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artistService */ "./src/app/artists/artistService.ts");
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/entities */ "./src/app/business/entities.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../business/userInfo */ "./src/app/business/userInfo.ts");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _artistEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artistEditor */ "./src/app/artists/artistEditor.ts");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ArtistDisplay = /** @class */ (function () {
    function ArtistDisplay(route, artistService, config, router, user, modalService) {
        this.route = route;
        this.artistService = artistService;
        this.config = config;
        this.router = router;
        this.user = user;
        this.modalService = modalService;
        this.artist = new _business_entities__WEBPACK_IMPORTED_MODULE_2__["Artist"]();
        this.albums = [];
        this.artistId = null;
        this.formActive = true;
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_6__["ErrorInfo"]();
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
    ArtistDisplay.prototype.albumClick = function (album) {
        //window.location.hash = "album/" + album.Id;
        this.router.navigate(['/album', album.Id]);
    };
    ArtistDisplay.prototype.openModalEditor = function (artistEditor) {
        if (!this.user.isAuthenticated) {
            this.router.navigate(["/login"]);
            return;
        }
        this.editor.open();
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
    ArtistDisplay.prototype.deleteAlbum = function (album) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_artistEditor__WEBPACK_IMPORTED_MODULE_7__["ArtistEditor"]),
        __metadata("design:type", _artistEditor__WEBPACK_IMPORTED_MODULE_7__["ArtistEditor"])
    ], ArtistDisplay.prototype, "editor", void 0);
    ArtistDisplay = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'artist-display',
            template: __webpack_require__(/*! ./artistDisplay.html */ "./src/app/artists/artistDisplay.html"),
            animations: [_common_animations__WEBPACK_IMPORTED_MODULE_8__["slideIn"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _artistService__WEBPACK_IMPORTED_MODULE_1__["ArtistService"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _business_userInfo__WEBPACK_IMPORTED_MODULE_5__["UserInfo"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]])
    ], ArtistDisplay);
    return ArtistDisplay;
}());



/***/ }),

/***/ "./src/app/artists/artistEditor.html":
/*!*******************************************!*\
  !*** ./src/app/artists/artistEditor.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #ModalEditor let-modal>\r\n<form name=\"form1\"\r\n    action=\"javascript:{}\" novalidate\r\n    #form1=\"ngForm\">  \r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Artist</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" \r\n            (click)=\"modal.dismiss('Cross click')\"  >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n   \r\n      <div class=\"modal-body\">\r\n         <div class=\"form-group\">\r\n            <label for=\"ArtistName\">Artist Name:</label>\r\n            <input name=\"ArtistName\" id=\"ArtistName\" type=\"text\"\r\n                   class=\"form-control input-sm\"\r\n                   [focus]=\"true\"\r\n                   placeholder=\"Artist Name\" required\r\n                   [(ngModel)]=\"artist.ArtistName\"  #ArtistName/>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"Description\">Bio:</label>\r\n            <textarea type=\"text\" class=\"form-control input-sm\"\r\n                      name=\"Description\" id=\"Description\"\r\n                      required\r\n                      style=\"height: 110px;\"\r\n                      minlength=\"20\"\r\n                      placeholder=\"Band Bio\" \r\n                      [(ngModel)]=\"artist.Description\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"ImageUrl\">Image Url:</label>\r\n            <input type=\"text\" class=\"form-control input-sm\"\r\n                   id=\"ImageUrl\" name=\"ImageUrl\"\r\n                   placeholder=\"Image Url\" [(ngModel)]=\"artist.ImageUrl\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"AmazonUrl\">Amazon Url:</label>\r\n            <input type=\"text\" class=\"form-control input-sm\"\r\n                   name=\"AmazonUrl\" id=\"AmazonUrl\"\r\n                   placeholder=\"Link to Artist Amazon Page\" [(ngModel)]=\"artist.AmazonUrl\" />\r\n          </div>\r\n\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">\r\n      <i class=\"fa fa-remove\"></i> Cancel</button>\r\n  \r\n    <button type=\"button\" class=\"btn btn-primary\"\r\n                [disabled]=\"form1.pristine || form1.invalid\" accesskey=\"S\"\r\n                (click)=\"saveArtist(artist)\">\r\n          <i class=\"fa fa-check\"></i>\r\n          Save changes\r\n      </button>\r\n  </div>\r\n</form>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/artists/artistEditor.ts":
/*!*****************************************!*\
  !*** ./src/app/artists/artistEditor.ts ***!
  \*****************************************/
/*! exports provided: ArtistEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistEditor", function() { return ArtistEditor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _artistService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artistService */ "./src/app/artists/artistService.ts");
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/entities */ "./src/app/business/entities.ts");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../business/userInfo */ "./src/app/business/userInfo.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArtistEditor = /** @class */ (function () {
    function ArtistEditor(artistService, config, user, modalService) {
        this.artistService = artistService;
        this.config = config;
        this.user = user;
        this.modalService = modalService;
        this.artist = new _business_entities__WEBPACK_IMPORTED_MODULE_2__["Artist"]();
        this.albums = [];
        this.formActive = false;
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]();
        console.log("ArtistEditor ctor");
    }
    ArtistEditor.prototype.ngOnInit = function () {
        this.config.isSearchAllowed = false;
    };
    ArtistEditor.prototype.open = function () {
        this.modalService.open(this.modalEditor, { ariaLabelledBy: 'modal-basic-title' })
            .result
            .then(function (result) {
        }, function (reason) { });
    };
    ArtistEditor.prototype.close = function () {
        this.modalService.dismissAll();
    };
    ArtistEditor.prototype.saveArtist = function (artist) {
        var _this = this;
        this.artistService.saveArtist(artist)
            .subscribe(function (result) {
            _this.artist = result.Artist;
            _this.albums = result.Albums;
            _this.close();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _business_entities__WEBPACK_IMPORTED_MODULE_2__["Artist"])
    ], ArtistEditor.prototype, "artist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ModalEditor'),
        __metadata("design:type", Object)
    ], ArtistEditor.prototype, "modalEditor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ArtistName'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ArtistEditor.prototype, "artistName", void 0);
    ArtistEditor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'artist-editor',
            template: __webpack_require__(/*! ./artistEditor.html */ "./src/app/artists/artistEditor.html")
        }),
        __metadata("design:paramtypes", [_artistService__WEBPACK_IMPORTED_MODULE_1__["ArtistService"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _business_userInfo__WEBPACK_IMPORTED_MODULE_5__["UserInfo"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], ArtistEditor);
    return ArtistEditor;
}());



/***/ }),

/***/ "./src/app/artists/artistList.html":
/*!*****************************************!*\
  !*** ./src/app/artists/artistList.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\" [@slideInLeft]=\"'in'\" >\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div class=\"list-group\">\r\n\r\n      <div class=\"page-header-text\">\r\n          <i class=\"fa fa-list\"></i> Artists\r\n          <div class=\"badge badge-danger badge-small\">{{artistList.length}}</div>\r\n      </div>\r\n\r\n      <a class=\"list-group-item list-group-item-action\"\r\n         *ngFor=\"let artist of filteredArtistList\"\r\n         (click)=\"artistClick(artist)\" role=\"button\">\r\n          <!-- <img [src]=\"artist.ImageUrl\" style=\"width: 40px; height: 40px; border-radius: 30px;\" /> -->\r\n          <i class=\"fa fa-users\" style=\"color: steelblue;\"></i> &nbsp;\r\n          <span class=\"badge badge-info badge-small\" style=\"font-size: 0.7em;\">{{artist.AlbumCount}}</span>\r\n          <span style=\"padding-left: 20px; font-size: 1.1em\">{{artist.ArtistName}}</span>\r\n      </a>\r\n  </div>\r\n\r\n</div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/artists/artistList.ts":
/*!***************************************!*\
  !*** ./src/app/artists/artistList.ts ***!
  \***************************************/
/*! exports provided: ArtistList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistList", function() { return ArtistList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _artistService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artistService */ "./src/app/artists/artistService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/animations */ "./src/app/common/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistList = /** @class */ (function () {
    function ArtistList(router, artistService, config) {
        this.router = router;
        this.artistService = artistService;
        this.config = config;
        this.artistList = [];
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'artist-list',
            template: __webpack_require__(/*! ./artistList.html */ "./src/app/artists/artistList.html"),
            animations: [_common_animations__WEBPACK_IMPORTED_MODULE_5__["slideInLeft"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _artistService__WEBPACK_IMPORTED_MODULE_2__["ArtistService"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"]])
    ], ArtistList);
    return ArtistList;
}());



/***/ }),

/***/ "./src/app/artists/artistService.ts":
/*!******************************************!*\
  !*** ./src/app/artists/artistService.ts ***!
  \******************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistService = /** @class */ (function () {
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.artistList);
        return this.httpClient.get(this.config.urls.url("artists"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (artistList) {
            _this.artistList = artistList;
            return _this.artistList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
    };
    ArtistService.prototype.getArtist = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("artist", id), this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (artistResult) {
            _this.artist = artistResult.Artist;
            _this.artist.Albums = artistResult.Albums;
            _this.artist.AlbumCount = artistResult.Albums.length;
            if (!_this.artistList || _this.artistList.length < 1)
                _this.getArtists();
            return artistResult;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
    };
    ArtistService.prototype.saveArtist = function (artist) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url("saveArtist"), artist, this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (artistResult) {
            _this.artist = artistResult.Artist;
            _this.artist.Albums = artistResult.Albums;
            _this.artist.AlbumCount = artistResult.Albums.length;
            _this.updateArtist(artistResult.Artist);
            return artistResult;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
    };
    ArtistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/business/appConfiguration.ts":
/*!**********************************************!*\
  !*** ./src/app/business/appConfiguration.ts ***!
  \**********************************************/
/*! exports provided: AppConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfiguration", function() { return AppConfiguration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./src/app/business/entities.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppConfiguration = /** @class */ (function () {
    function AppConfiguration() {
        var _this = this;
        // top level search text
        this.searchText = "";
        this.activeTab = "albums";
        this.isSearchAllowed = true;
        this.applicationStats = new _entities__WEBPACK_IMPORTED_MODULE_1__["ApplicationStats"]();
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
        this.requestHeaders = {
            withCredentials: true,
        };
        console.log("AppConfiguration ctor");
        this.setToastrOptions();
        if (location.port && (location.port == "3000") || (location.port == "4200"))
            this.urls.baseUrl = "http://localhost:5000/"; // kestrel
        //this.urls.baseUrl = "http://localhost:5001/"; // kestrel
        //this.urls.baseUrl = "http://localhost:26448/"; // iis Express
        //this.urls.baseUrl = "http://localhost/albumviewer/"; // iis          
        //this.urls.baseUrl = "https://albumviewer.west-wind.com/";  // online          
    }
    AppConfiguration.prototype.setToastrOptions = function () {
        toastr.options.closeButton = true;
        toastr.options.positionClass = "toast-bottom-right";
    };
    AppConfiguration = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppConfiguration);
    return AppConfiguration;
}());



/***/ }),

/***/ "./src/app/business/entities.ts":
/*!**************************************!*\
  !*** ./src/app/business/entities.ts ***!
  \**************************************/
/*! exports provided: Album, Artist, ArtistResult, Track, ApplicationStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Artist", function() { return Artist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistResult", function() { return ArtistResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationStats", function() { return ApplicationStats; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Album = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Album);
    return Album;
}());

var Artist = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Artist);
    return Artist;
}());

var ArtistResult = /** @class */ (function () {
    function ArtistResult() {
        this.Artist = null;
        this.Albums = [];
    }
    ArtistResult = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ArtistResult);
    return ArtistResult;
}());

var Track = /** @class */ (function () {
    function Track() {
        this.Id = 0;
        this.AlbumId = 0;
        this.SongName = null;
        this.Length = null;
        this.Bytes = 0;
        this.UnitPrice = 0;
    }
    Track = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Track);
    return Track;
}());

var ApplicationStats = /** @class */ (function () {
    function ApplicationStats() {
        this.OsPlatform = null;
        this.AngularVersion = "Unknown";
        this.AspDotnetVersion = "Unknown";
        this.DataMode = "Unknown";
    }
    ApplicationStats = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ApplicationStats);
    return ApplicationStats;
}());



/***/ }),

/***/ "./src/app/business/httpRequestInterceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/business/httpRequestInterceptor.ts ***!
  \****************************************************/
/*! exports provided: HttpRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Inject With Credentials into the request */
var HttpRequestInterceptor = /** @class */ (function () {
    function HttpRequestInterceptor() {
    }
    HttpRequestInterceptor.prototype.intercept = function (req, next) {
        console.log("interceptor: " + req.url);
        req = req.clone({
            withCredentials: true
        });
        return next.handle(req);
    };
    HttpRequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpRequestInterceptor);
    return HttpRequestInterceptor;
}());



/***/ }),

/***/ "./src/app/business/userInfo.ts":
/*!**************************************!*\
  !*** ./src/app/business/userInfo.ts ***!
  \**************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _appConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserInfo = /** @class */ (function () {
    function UserInfo(http, config) {
        this.http = http;
        this.config = config;
        this.isAdmin = false;
        this.userName = null;
        this.sessionStarted = new Date();
        this._isAuthenticated = false;
        // initialize isAuthenticate from localstorage
        var isAuthenticated = localStorage.getItem("av_isAuthenticated");
        this._isAuthenticated = !(!isAuthenticated || isAuthenticated === 'false');
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
        }, this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (response) {
            if (response.status === 401)
                _this.isAuthenticated = false;
            return new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__["ErrorInfo"]().parseObservableResponseError(response);
        }));
    };
    UserInfo.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.config.urls.url("logout"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (success) {
            _this.isAuthenticated = false;
            return true;
        }));
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.isAuthenticated = result;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (response) {
            _this.isAuthenticated = false;
            var err = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__["ErrorInfo"]().parseObservableResponseError(response);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    UserInfo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _appConfiguration__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"]])
    ], UserInfo);
    return UserInfo;
}());



/***/ }),

/***/ "./src/app/common/animations.ts":
/*!**************************************!*\
  !*** ./src/app/common/animations.ts ***!
  \**************************************/
/*! exports provided: slideIn, slideInLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideIn", function() { return slideIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInLeft", function() { return slideInLeft; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(100%)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out'))
]);
var slideInLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInLeft', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(100%)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out'))
]);


/***/ }),

/***/ "./src/app/common/appFooter.html":
/*!***************************************!*\
  !*** ./src/app/common/appFooter.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner banner-bottom\">\r\n  <nav id=\"Toolbar\">\r\n    <a routerLink=\"/albums\" [ngClass]=\"{ selected: config.activeTab == 'albums'}\" >\r\n      <img src=\"images/record.png\" title=\"Albums\" /> <span>Albums</span>\r\n    </a>\r\n    <a routerLink=\"/artists\" [ngClass]=\"{ selected: config.activeTab == 'artists'}\">\r\n      <img src=\"images/artists32.png\" title=\"Artists\" /> <span>Artists</span>\r\n    </a>\r\n    <a routerLink=\"/options\" [ngClass]=\"{ selected: config.activeTab == 'options'}\">\r\n      <img src=\"images/gear.png\" title=\"Options\" /> <span>Options</span>\r\n    </a>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/appFooter.ts":
/*!*************************************!*\
  !*** ./src/app/common/appFooter.ts ***!
  \*************************************/
/*! exports provided: AppFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return AppFooter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppFooter = /** @class */ (function () {
    function AppFooter(config) {
        this.config = config;
    }
    AppFooter.prototype.ngOnInit = function () {
    };
    AppFooter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'app-footer',
            template: __webpack_require__(/*! ./appFooter.html */ "./src/app/common/appFooter.html")
        }),
        __metadata("design:paramtypes", [_business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"]])
    ], AppFooter);
    return AppFooter;
}());



/***/ }),

/***/ "./src/app/common/appHeader.html":
/*!***************************************!*\
  !*** ./src/app/common/appHeader.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"TitleBar\">\r\n    <a routerLink=\"/albums\">\r\n        <img src=\"images/headphone-head.png\" style=\"height: 47px; float: left\" />\r\n        <div style=\"float: left; margin-left: 5px; line-height: 1.2; \">\r\n            <i style=\"color: steelblue; font-size: 0.8em; font-weight: bold;\">West Wind</i><br />\r\n            <i style=\"color: whitesmoke; font-size: 1.25em; font-weight: bold;\">AlbumViewer</i>\r\n        </div>\r\n    </a>\r\n</div>\r\n\r\n    \r\n<div>\r\n    <div class=\"banner statusbar-push\">\r\n        <nav id=\"Toolbar-Top\" class=\"pull-right\">\r\n\r\n            <a routerLink=\"/albums\" [ngClass]=\"{ selected: config.activeTab == 'albums'}\">\r\n                <img src=\"images/record.png\" title=\"Albums\" />\r\n                <span>Albums</span>\r\n            </a>\r\n            <a routerLink=\"/artists\" [ngClass]=\"{ selected: config.activeTab == 'artists'}\">\r\n                <img src=\"images/artists32.png\" title=\"Artists\" />\r\n                <span>Artists</span>\r\n            </a>\r\n            <a routerLink=\"/options\" [ngClass]=\"{ selected: config.activeTab == 'options'}\">\r\n                <img src=\"images/gear.png\" title=\"Options\" />\r\n                <span>Options</span>\r\n            </a>\r\n        </nav>\r\n\r\n\r\n        <nav id=\"TopMenu\" class=\"pull-right\">\r\n            <form style=\"float: left; width: 140px; padding-top: 2px;\">\r\n                <input id=\"SearchBox\" type=\"text\" class=\"form-control\" placeholder=\"Search...\" name=\"searchText\"\r\n                    [(ngModel)]=\"config.searchText\" *ngIf=\"config.isSearchAllowed\">\r\n            </form>\r\n        </nav>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/appHeader.ts":
/*!*************************************!*\
  !*** ./src/app/common/appHeader.ts ***!
  \*************************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeader = /** @class */ (function () {
    function AppHeader(config) {
        this.config = config;
    }
    AppHeader.prototype.ngOnInit = function () {
    };
    AppHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'app-header',
            template: __webpack_require__(/*! ./appHeader.html */ "./src/app/common/appHeader.html")
        }),
        __metadata("design:paramtypes", [_business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"]])
    ], AppHeader);
    return AppHeader;
}());



/***/ }),

/***/ "./src/app/common/errorDisplay.ts":
/*!****************************************!*\
  !*** ./src/app/common/errorDisplay.ts ***!
  \****************************************/
/*! exports provided: ErrorDisplay, ErrorInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDisplay", function() { return ErrorDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInfo", function() { return ErrorInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 *   A Bootstrap based alert display
 */
var ErrorDisplay = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", ErrorInfo)
    ], ErrorDisplay.prototype, "error", void 0);
    ErrorDisplay = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'error-display',
            //templateUrl: 'errorDisplay.html'
            template: "\n        <div *ngIf=\"error.message\"\n             class=\"alert alert-{{error.icon}} alert-dismissable\">\n            <button *ngIf=\"error.dismissable\" type=\"button\" class=\"close\"\n                    data-dismiss=\"alert\" aria-hidden=\"true\">\n                <i class=\"fa fa-remove\"></i>\n            </button>\n\n            <div *ngIf=\"error.header\" style=\"font-size: 1.5em; font-weight: bold\">\n                <i class=\"fa fa-{{error.imageIcon}}\" style=\"color: {{error.iconColor}}\"></i>\n                {{error.header}}\n            </div>\n            <i *ngIf=\"!error.header\"\n               class=\"fa fa-{{error.imageIcon}}\"\n               style=\"color: {{error.iconColor}}\"></i>\n\n            <strong>{{error.message}}</strong>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], ErrorDisplay);
    return ErrorDisplay;
}());

var ErrorInfo = /** @class */ (function () {
    function ErrorInfo() {
        this.response = null;
        this.reset();
    }
    ErrorInfo_1 = ErrorInfo;
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
        var err = new ErrorInfo_1();
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
        var err = new ErrorInfo_1();
        // HttpClient has an `error` property for raw JSON response
        if (response.hasOwnProperty("error")) {
            try {
                err = JSON.parse(response.error);
            }
            catch (ex) { }
            if (err.hasOwnProperty("message"))
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            if (err.hasOwnProperty("Message")) {
                err.message = err["Message"];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }
        }
        if (response.hasOwnProperty("message"))
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(response);
        if (response.hasOwnProperty("Message")) {
            response.message = response.Message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response);
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
    };
    var ErrorInfo_1;
    ErrorInfo = ErrorInfo_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ErrorInfo);
    return ErrorInfo;
}());



/***/ }),

/***/ "./src/app/common/focusDirective.ts":
/*!******************************************!*\
  !*** ./src/app/common/focusDirective.ts ***!
  \******************************************/
/*! exports provided: FocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusDirective", function() { return FocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusDirective = /** @class */ (function () {
    function FocusDirective(element) {
        this.element = element;
    }
    FocusDirective.prototype.ngOnChanges = function () {
        if (this.focus)
            this.element.nativeElement.focus();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FocusDirective.prototype, "focus", void 0);
    FocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[focus]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FocusDirective);
    return FocusDirective;
}());



/***/ }),

/***/ "./src/app/common/login.html":
/*!***********************************!*\
  !*** ./src/app/common/login.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"page-header-text\">\r\n    AlbumViewer Login\r\n  </div>\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div id=\"WebLogin\" class=\"card\">\r\n    <div class=\"card-header bg-primary text-white\">\r\n      Please sign in\r\n    </div>\r\n      <div class=\"card-body\">\r\n\r\n    <form class=\"panel-body\" name=\"form1\" #form1=\"ngForm\">\r\n      <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                      <i class=\"fa fa-fw fa-user\"></i>\r\n                  </span>\r\n              </div>\r\n              <input type=\"text\" name=\"WebLogin_txtUsername\"\r\n                   id=\"WebLogin_txtUsername\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Enter your user name\"\r\n                   [(ngModel)]=\"username\"\r\n                   autocapitalize=\"off\"\r\n                   autocomplete=\"off\"\r\n                   spellcheck=\"false\"\r\n                   autocorrect=\"off\" required />\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">\r\n                    <i class=\"fa fa-fw fa-unlock-alt\"></i>\r\n                </span>\r\n            </div>\r\n          <input type=\"password\" name=\"password\"\r\n                 id=\"password\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Enter your password\"\r\n                 [(ngModel)]=\"password\"\r\n                 autocapitalize=\"off\"\r\n                 autocomplete=\"off\"\r\n                 spellcheck=\"false\"\r\n                 autocorrect=\"off\"\r\n                 required />\r\n        </div>\r\n      </div>\r\n      <div class=\"small \" >You can use: uid: test / pwd: test</div>\r\n      <hr />\r\n\r\n      <button class=\"btn btn-primary\"\r\n              type=\"button\"\r\n              (click)=\"login()\"\r\n              [disabled]=\"form1.invalid || form1.pristine\" >\r\n        <i class=\"fa fa-unlock-alt\"></i>\r\n        Login\r\n      </button>\r\n\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn btn-default btn-sm pull-right\" style=\"display:block\"\r\n                type=\"button\"\r\n                (click)=\"logout()\" [disabled]=\"!user.isAuthenticated\">\r\n          <i class=\"fa fa-unlock-alt\"></i>\r\n          Logout\r\n        </button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n          </div>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/login.ts":
/*!*********************************!*\
  !*** ./src/app/common/login.ts ***!
  \*********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/userInfo */ "./src/app/business/userInfo.ts");
/* harmony import */ var _errorDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(user, route, router) {
        this.user = user;
        this.route = route;
        this.router = router;
        this.username = "";
        this.password = "";
        this.error = new _errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'login',
            template: __webpack_require__(/*! ./login.html */ "./src/app/common/login.html")
        }),
        __metadata("design:paramtypes", [_business_userInfo__WEBPACK_IMPORTED_MODULE_1__["UserInfo"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/options/about.html":
/*!************************************!*\
  !*** ./src/app/options/about.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \r\n  <h2 class=\"page-header-text\">\r\n    <i class=\"fa fa-info-circle\"></i>  About the AlbumViewer Sample\r\n  </h2>\r\n\r\n  <div class=\"well well-sm\">\r\n    <h4>ASP.NET Core API backend</h4>\r\n    <p>\r\n      This application runs an ASP.NET Core 2.0 API server with a\r\n      JSON Service backend . \r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"well well-sm\">\r\n    <h4>Angular Front End</h4>\r\n    <p>\r\n      The client interface uses Angular 7 to provide the front end logic and\r\n      UI management features. There are album and artist services that\r\n      talk to the backend interface and page level components and child\r\n      components that handle individual view pages of the application.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"well well-sm\">\r\n    <h4>Mobile enabled based on modified Bootstrap 4.0 Interface</h4>\r\n    <p>\r\n      The base Bootstrap framework is used for the core UI features\r\n      of the interface. The base template has been customized for\r\n      this application.\r\n    </p>\r\n    <p>\r\n      The application is mobile focused and uses custom resizing\r\n      and toolbar relocation based on the screen/device size used.\r\n      The application should be comfortably usable from phone up to full screen\r\n      desktop applications.\r\n    </p>\r\n  </div>\r\n\r\n  <hr />\r\n  <a routerLink=\"/albums\">Back to Application</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/options/about.ts":
/*!**********************************!*\
  !*** ./src/app/options/about.ts ***!
  \**********************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.html */ "./src/app/options/about.html")
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/options/options.html":
/*!**************************************!*\
  !*** ./src/app/options/options.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\">\r\n  \r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div class=\"list-group\" style=\"margin-top: 20px;\">\r\n      <style>\r\n          .list-group .fa { color: steelblue; font-size: 1.3em;padding-right: 15px;}\r\n      </style>\r\n    <a  href=\"javascript:{}\" (click)=\"reloadData()\" class=\"list-group-item list-group-item-action\">\r\n      <h4 class=\"list-group-item-heading\">\r\n        <i class=\"fa fa-fw fa-refresh\"></i>\r\n        Reset Data\r\n      </h4>\r\n      <p class=\"list-group-item-text\">Reset data to original sample data.</p>\r\n    </a>\r\n\r\n    <a routerLink=\"/about\" class=\"list-group-item list-group-item-action\">\r\n      <h4 class=\"list-group-item-heading\">\r\n        <i class=\"fa fa-fw fa-info-circle\"></i>\r\n        About Album Viewer\r\n      </h4>\r\n      <p>\r\n        <small *ngIf=\"config.applicationStats.OsPlatform\">Server Platform: {{config.applicationStats.OsPlatform}}</small><br/>\r\n        <small *ngIf=\"config.applicationStats.AspDotnetVersion\">ASP.NET Version: {{config.applicationStats.AspDotnetVersion}}</small><br/>\r\n        <small *ngIf=\"config.applicationStats.AngularVersion\">Angular Version: {{config.applicationStats.AngularVersion}}</small><br>\r\n        <small *ngIf=\"config.applicationStats.DataMode\">Data Mode: {{config.applicationStats.DataMode}}</small>\r\n      </p>\r\n    </a>\r\n\r\n    <a routerLink=\"/\" class=\"list-group-item list-group-item-action\">\r\n      <h4>\r\n        <i class=\"fa fa-fw fa-home\"></i>\r\n        Back to Album List\r\n      </h4>\r\n    </a>\r\n    \r\n        <a href=\"https://github.com/RickStrahl/AlbumViewerVNext\" class=\"list-group-item list-group-item-action\">\r\n        <h4>\r\n          <i class=\"fa fa-fw fa-github\"></i>\r\n          GitHub \r\n        </h4>\r\n      </a>\r\n      \r\n    <div class=\"list-group-item list-group-item-action\">\r\n      <h4><i class=\"fa fa-fw fa-gears\"></i> Settings</h4>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"httpBaseUrl\">Data Http Base URL:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"httpBaseUrl\"\r\n               placeholder=\"Data Http BaseUrl\" [(ngModel)]=\"config.urls.baseUrl\">\r\n      </div>\r\n    </div>\r\n\r\n    <a *ngIf=\"!user.isAuthenticated\" routerLink=\"/login\" class=\"list-group-item list-group-item-action\">\r\n      <h4 class=\"list-group-item-heading\">\r\n        <i class=\"fa fa-unlock-alt\"></i>\r\n        Sign in\r\n      </h4>\r\n    </a>\r\n    <a *ngIf=\"user.isAuthenticated\" routerLink=\"/logout\" class=\"list-group-item list-group-item-action\">\r\n      <h4 class=\"list-group-item-heading\">\r\n        <i class=\"fa fa-lock\"></i>\r\n        Sign out\r\n      </h4>\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/options/options.ts":
/*!************************************!*\
  !*** ./src/app/options/options.ts ***!
  \************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/userInfo */ "./src/app/business/userInfo.ts");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(config, user, http) {
        this.config = config;
        this.user = user;
        this.http = http;
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]();
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
                var obsErr = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError(response);
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
            var obsErr = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError(response);
            var msg = obsErr.error.message;
            toastr.error("Data reload failed: " + msg);
            return obsErr;
        });
    };
    OptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'options',
            template: __webpack_require__(/*! ./options.html */ "./src/app/options/options.html")
        }),
        __metadata("design:paramtypes", [_business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"],
            _business_userInfo__WEBPACK_IMPORTED_MODULE_2__["UserInfo"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects2010\AlbumViewerVNext\src\AlbumViewerAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map