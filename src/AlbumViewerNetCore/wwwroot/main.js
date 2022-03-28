(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/zLm":
/*!*****************************************!*\
  !*** ./src/app/artists/artistEditor.ts ***!
  \*****************************************/
/*! exports provided: ArtistEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistEditor", function() { return ArtistEditor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _artistService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artistService */ "eaJK");
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/entities */ "mpXH");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "kAX8");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../business/userInfo */ "4Eqb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_focusDirective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/focusDirective */ "4nXg");














var _c0 = ["ModalEditorTemplate"];
var _c1 = ["ArtistName"];
function ArtistEditor_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtistEditor_ng_template_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Artist Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArtistEditor_ng_template_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.artist.ArtistName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArtistEditor_ng_template_0_Template_textarea_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.artist.Description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Image Url:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArtistEditor_ng_template_0_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.artist.ImageUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Amazon Url:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArtistEditor_ng_template_0_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.artist.AmazonUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtistEditor_ng_template_0_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtistEditor_ng_template_0_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.saveArtist(ctx_r12.artist); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Save changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focus", true)("ngModel", ctx_r1.artist.ArtistName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.artist.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.artist.ImageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.artist.AmazonUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.pristine || _r3.invalid);
} }
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
    }
    ArtistEditor.prototype.ngOnInit = function () {
        this.config.isSearchAllowed = false;
    };
    ArtistEditor.prototype.open = function () {
        this.modalRef = this.modalService.show(this.modalEditorTemplate, { ariaLabelledBy: 'modal-basic-title' });
    };
    ArtistEditor.prototype.close = function () {
        this.modalRef.hide();
        this.modalRef = null;
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
    ArtistEditor.ɵfac = function ArtistEditor_Factory(t) { return new (t || ArtistEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_artistService__WEBPACK_IMPORTED_MODULE_1__["ArtistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_business_userInfo__WEBPACK_IMPORTED_MODULE_5__["UserInfo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"])); };
    ArtistEditor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtistEditor, selectors: [["artist-editor"]], viewQuery: function ArtistEditor_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalEditorTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.artistName = _t.first);
        } }, inputs: { artist: "artist" }, decls: 2, vars: 0, consts: [["ModalEditorTemplate", ""], ["name", "form1", "action", "javascript:{}", "novalidate", ""], ["form1", "ngForm"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "ArtistName"], ["name", "ArtistName", "id", "ArtistName", "type", "text", "placeholder", "Artist Name", "required", "", 1, "form-control", "input-sm", 3, "focus", "ngModel", "ngModelChange"], ["ArtistName", ""], ["for", "Description"], ["type", "text", "name", "Description", "id", "Description", "required", "", "minlength", "20", "placeholder", "Band Bio", 1, "form-control", "input-sm", 2, "height", "110px", 3, "ngModel", "ngModelChange"], ["for", "ImageUrl"], ["type", "text", "id", "ImageUrl", "name", "ImageUrl", "placeholder", "Image Url", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], ["for", "AmazonUrl"], ["type", "text", "name", "AmazonUrl", "id", "AmazonUrl", "placeholder", "Link to Artist Amazon Page", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "mr-2", 3, "click"], [1, "fa", "fa-remove"], ["type", "button", "accesskey", "S", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-check"]], template: function ArtistEditor_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArtistEditor_ng_template_0_Template, 34, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _common_focusDirective__WEBPACK_IMPORTED_MODULE_8__["FocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"]], encapsulation: 2 });
    return ArtistEditor;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\AlbumViewerVNext\src\AlbumViewerAngular\src\main.ts */"zUnb");


/***/ }),

/***/ "4Eqb":
/*!**************************************!*\
  !*** ./src/app/business/userInfo.ts ***!
  \**************************************/
/*! exports provided: UserInfo, TokenInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInfo", function() { return TokenInfo; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appConfiguration */ "kUfd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errorDisplay */ "kAX8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var UserInfo = /** @class */ (function () {
    function UserInfo(http, config) {
        this.http = http;
        this.config = config;
        this.isAdmin = false;
        this.userName = null;
        this.sessionStarted = new Date();
        this.expires = new Date();
        this.requestedUrl = "";
        this._isAuthenticated = false;
        this._token = "";
        // initialize isAuthenticate from localstorage
        var token = localStorage.getItem("av_token");
        if (token) {
            this._isAuthenticated = true;
            this.token = token;
        }
        else {
            this._isAuthenticated = false;
            this.token = null;
        }
    }
    Object.defineProperty(UserInfo.prototype, "isAuthenticated", {
        get: function () {
            return this._isAuthenticated;
        },
        set: function (val) {
            this._isAuthenticated = val || false;
            // cache authentication
            if (this._isAuthenticated)
                localStorage.setItem('av_token', this._token);
            else
                localStorage.removeItem('av_token');
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserInfo.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
            localStorage.setItem('av_token', value);
        },
        enumerable: false,
        configurable: true
    });
    /*
        Cookie Auth
     */
    UserInfo.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.config.urls.url("login"), {
            username: username,
            password: password
        }, this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (response) {
            if (response.status === 401)
                _this.isAuthenticated = false;
            return new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]().parseObservableResponseError(response);
        }));
    };
    /*
        Token Auth
    */
    UserInfo.prototype.authenticate = function (username, password) {
        var _this = this;
        return this.http.post(this.config.urls.url("authenticate"), {
            username: username,
            password: password
        }, this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tokenInfo) {
            _this.token = tokenInfo.token;
            _this.expires = new Date(tokenInfo.expires);
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (response) {
            if (response.status === 401)
                _this.isAuthenticated = false;
            return new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]().parseObservableResponseError(response);
        }));
    };
    UserInfo.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.config.urls.url("logout"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (success) {
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.isAuthenticated = result;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (response) {
            _this.isAuthenticated = false;
            var err = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]().parseObservableResponseError(response);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    UserInfo.ɵfac = function UserInfo_Factory(t) { return new (t || UserInfo)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"])); };
    UserInfo.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserInfo, factory: UserInfo.ɵfac, providedIn: 'root' });
    return UserInfo;
}());

var TokenInfo = /** @class */ (function () {
    function TokenInfo() {
        this.expires = new Date();
    }
    return TokenInfo;
}());



/***/ }),

/***/ "4fQs":
/*!*********************************!*\
  !*** ./src/app/common/login.ts ***!
  \*********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/userInfo */ "4Eqb");
/* harmony import */ var _errorDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorDisplay */ "kAX8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(user, route, router) {
        this.user = user;
        this.route = route;
        this.router = router;
        this.username = "";
        this.password = "";
        this.error = new _errorDisplay__WEBPACK_IMPORTED_MODULE_1__["ErrorInfo"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.url[0].path == "logout")
            this.logout();
    };
    // login() {
    //   this.user.login(this.username,this.password)
    //     .subscribe(() => {
    //         this.user.isAuthenticated = true;
    //         toastr.success("You are logged in.");
    //         this.router.navigate(["/albums"]);
    //     },
    //     (err)=> {
    //       this.error.error(err);
    //       this.password="";
    //       toastr.warning("Login failed: " + err.message);
    //     });
    // }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.user.authenticate(this.username, this.password)
            .subscribe(function () {
            _this.user.isAuthenticated = true;
            toastr.success("You are logged in.");
            var url = "/albums";
            if (_this.user.requestedUrl)
                url = _this.user.requestedUrl;
            _this.router.navigate([url]);
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
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_business_userInfo__WEBPACK_IMPORTED_MODULE_0__["UserInfo"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 32, vars: 5, consts: [[1, "container"], [1, "page-header-text"], [3, "error"], ["id", "WebLogin", 1, "card"], [1, "card-header", "bg-primary", "text-white"], [1, "card-body"], ["name", "form1", 1, "panel-body"], ["form1", "ngForm"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-fw", "fa-user"], ["type", "text", "name", "WebLogin_txtUsername", "id", "WebLogin_txtUsername", "placeholder", "Enter your user name", "autocapitalize", "off", "autocomplete", "off", "spellcheck", "false", "autocorrect", "off", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-fw", "fa-unlock-alt"], ["type", "password", "name", "password", "id", "password", "placeholder", "Enter your password", "autocapitalize", "off", "autocomplete", "off", "spellcheck", "false", "autocorrect", "off", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "small"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-unlock-alt"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "pull-right", 2, "display", "block", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " AlbumViewer Login ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "error-display", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Please sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.username = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "You can use: uid: test / pwd: test");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_25_listener() { return ctx.login(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Login ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Logout ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("error", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.username);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid || _r0.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.user.isAuthenticated);
        } }, directives: [_errorDisplay__WEBPACK_IMPORTED_MODULE_1__["ErrorDisplay"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2 });
    return LoginComponent;
}());



/***/ }),

/***/ "4nXg":
/*!******************************************!*\
  !*** ./src/app/common/focusDirective.ts ***!
  \******************************************/
/*! exports provided: FocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusDirective", function() { return FocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var FocusDirective = /** @class */ (function () {
    function FocusDirective(element) {
        this.element = element;
    }
    FocusDirective.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.focus)
            setTimeout(function () { return _this.element.nativeElement.focus(); }, 200);
    };
    FocusDirective.ɵfac = function FocusDirective_Factory(t) { return new (t || FocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    FocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FocusDirective, selectors: [["", "focus", ""]], inputs: { focus: "focus" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
    return FocusDirective;
}());



/***/ }),

/***/ "AytR":
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

/***/ "FZCQ":
/*!*************************************!*\
  !*** ./src/app/albums/albumList.ts ***!
  \*************************************/
/*! exports provided: AlbumList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumList", function() { return AlbumList; });
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albumService */ "LPqB");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "kAX8");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/animations */ "RsVk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");











function AlbumList_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AlbumList_a_11_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AlbumList_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); var album_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.albumClick(album_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AlbumList_a_11_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); var album_r2 = ctx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.deleteAlbum(album_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var album_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "['/album/edit',", album_r2.Id, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", album_r2.ImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](album_r2.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](album_r2.Artist.ArtistName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", album_r2.Year ? "in " + album_r2.Year : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](album_r2.Description);
} }
var AlbumList = /** @class */ (function () {
    function AlbumList(router, albumService, config) {
        this.router = router;
        this.albumService = albumService;
        this.config = config;
        this.albumList = [];
        this.busy = true;
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]();
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
                    var title = a.Title;
                    var artist = a.Artist;
                    var artistName = null;
                    if (artist)
                        artistName = artist.ArtistName;
                    return (title && title.toLowerCase().includes(lsearchText)) ||
                        (artistName && artistName.toLowerCase().includes(lsearchText));
                });
            }
            return this.albumList;
        },
        enumerable: false,
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
            // reset to last scroll position of the list
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
        // save scroll position before navigation
        this.albumService.listScrollPos = $("#MainView").scrollTop();
        this.router.navigate(['/album', album.Id]);
    };
    AlbumList.prototype.addAlbum = function () {
    };
    AlbumList.prototype.deleteAlbum = function (album) {
    };
    AlbumList.ɵfac = function AlbumList_Factory(t) { return new (t || AlbumList)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_albumService__WEBPACK_IMPORTED_MODULE_0__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"])); };
    AlbumList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AlbumList, selectors: [["album-list"]], decls: 12, vars: 5, consts: [[1, "container", "container-fluid", "slide-animation"], [3, "error"], ["routerLink", "/album/edit/0", 1, "btn", "btn-sm", "btn-success", "pull-right", 3, "click"], [1, "fa", "fa-plus"], [1, "page-header-text"], [1, "fa", "fa-list"], [1, "badge", "badge-danger", "badge-small"], ["class", "container", 4, "ngIf"], ["class", "album", "role", "button", "style", "text-decoration: none; color: inherit", 3, "click", 4, "ngFor", "ngForOf"], [1, "container"], [1, "fa", "fa-circle-o-notch", "fa-spin", "fa-5x", 2, "display", "block", "text-align", "center", "margin-top", "70px"], ["role", "button", 1, "album", 2, "text-decoration", "none", "color", "inherit", 3, "click"], [1, "album-overlay"], [3, "routerLink"], ["title", "Edit", 1, "fa", "fa-edit"], [3, "click"], ["title", "Delete", 1, "fa", "fa-remove"], [1, "album-image", 3, "src"], [2, "padding-left", "80px"], [1, "album-title"], [1, "album-artist"], [1, "album-descript"]], template: function AlbumList_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "error-display", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AlbumList_Template_a_click_2_listener() { return ctx.addAlbum(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Add Album");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Album ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AlbumList_div_10_Template, 2, 0, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AlbumList_a_11_Template, 19, 6, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@slideIn", "in");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("error", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.filteredAlbumList.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.busy);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredAlbumList);
        } }, directives: [_common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorDisplay"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], encapsulation: 2, data: { animation: [_common_animations__WEBPACK_IMPORTED_MODULE_4__["slideIn"]] } });
    return AlbumList;
}());



/***/ }),

/***/ "HvP7":
/*!***************************************!*\
  !*** ./src/app/albums/albumEditor.ts ***!
  \***************************************/
/*! exports provided: AlbumEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumEditor", function() { return AlbumEditor; });
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/entities */ "mpXH");
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albumService */ "LPqB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "kAX8");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../business/userInfo */ "4Eqb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/animations */ "RsVk");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_focusDirective__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/focusDirective */ "4nXg");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "qCdp");
/* harmony import */ var _albumSongList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./albumSongList */ "WJKB");






















var _c0 = function (a1) { return ["/album", a1]; };
function AlbumEditor_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " List");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c0, ctx_r0.album.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", ctx_r0.album.AmazonUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function AlbumEditor_a_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Buy on Amazon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", ctx_r2.album.AmazonUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
var _c1 = function (a0) { return { "hidden": a0 }; };
var AlbumEditor = /** @class */ (function () {
    function AlbumEditor(route, router, albumService, config, user, toastr) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.albumService = albumService;
        this.config = config;
        this.user = user;
        this.toastr = toastr;
        this.album = new _business_entities__WEBPACK_IMPORTED_MODULE_0__["Album"]();
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]();
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
            // switchMap allows returning an observable rather than the final array instance
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (searchText) { return _this.albumService.artistLookup(searchText); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
        };
    }
    AlbumEditor.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.user.isAuthenticated) {
            this.user.requestedUrl = this.router.url;
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
        this.configureTypeAhead();
    };
    AlbumEditor.prototype.configureTypeAhead = function () {
        var _this = this;
        // https://valor-software.com/ngx-bootstrap/#/typeahead
        // set up the observable for type ahead
        this.searchResults = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (observer) {
            // search term comes from artist name typed
            var searchTerm = _this.album.Artist.ArtistName;
            // Min Lookup for 2 characters - list is small so allow
            // if (!searchTerm || searchTerm.length < 3)
            //     return;
            observer.next(searchTerm);
        })
            .pipe(
        // retrieve from service and map result to observable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (searchTerm) { return _this.albumService.artistLookup(searchTerm); }));
    };
    AlbumEditor.prototype.saveAlbum = function (album) {
        var _this = this;
        return this.albumService.saveAlbum(album)
            .subscribe(function (album) {
            var msg = album.Title + " has been saved.";
            _this.error.info(msg);
            _this.toastr.success(msg);
            window.document.getElementById("MainView").scrollTop = 0;
            setTimeout(function () {
                _this.router.navigate(["/album", album.Id]);
            }, 1500);
        }, function (err) {
            var msg = "Unable to save album: " + err.message;
            _this.error.error(msg);
            _this.toastr.error(msg);
            if (err.response && err.response.status == 401) {
                _this.user.isAuthenticated = false;
                _this.router.navigate(["/login"]);
            }
        });
    };
    ;
    AlbumEditor.prototype.changeTypeaheadLoading = function (e) {
    };
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
    AlbumEditor.ɵfac = function AlbumEditor_Factory(t) { return new (t || AlbumEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_albumService__WEBPACK_IMPORTED_MODULE_1__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_business_userInfo__WEBPACK_IMPORTED_MODULE_5__["UserInfo"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"])); };
    AlbumEditor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AlbumEditor, selectors: [["album-editor"]], decls: 65, vars: 29, consts: [[1, "container"], ["class", "btn-group", "role", "group", "style", "margin-bottom: 10px;", 4, "ngIf"], [1, "separator"], [3, "error"], [1, "row", 3, "ngClass"], [1, "col-sm-5"], ["name", "form1", "action", "#0", "novalidate", ""], ["form1", "ngForm"], [1, "form-group"], ["for", "AlbumName"], ["id", "AlbumName", "type", "text", "placeholder", "Album Name", "name", "Title", "required", "", "autofocus", "", 1, "form-control", "input-sm", 3, "focus", "ngModel", "ngModelChange"], ["for", "ArtistName"], ["id", "ArtistName", "type", "text", "name", "ArtistName", "typeaheadWaitMs", "200", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadAsync", "ngModelChange", "typeaheadLoading"], ["for", "Description"], ["id", "Description", "placeholder", "Album description or review", "required", "", "name", "Description", 1, "form-control", "input-sm", 2, "height", "115px", 3, "ngModel", "ngModelChange"], [1, "input-group"], ["title", "Image Url", 1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-image", "fa-fw"], ["type", "text", "id", "ImageUrl", "required", "", "name", "ImageUrl", "placeholder", "Image Url", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], ["title", "Url where to buy", 1, "input-group-prepend"], [1, "fa", "fa-dollar", "fa-fw"], ["type", "text", "id", "AmazonUrl", "placeholder", "Purchase Url", "name", "AmazonUrl", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-spotify", "fa-fw"], ["type", "text", "id", "SpotifyUrl", "placeholder", "Listen Url", "name", "SpotifyUrl", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], ["for", "YearReleased"], ["type", "number", "id", "YearReleased", "required", "", "name", "Year", "placeholder", "Year of album release", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [3, "tracks", "allowEditing"], ["type", "submit", "accesskey", "S", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "fa", "fa-check"], [1, "btn", "btn-secondary", "ml-2", 3, "routerLink"], [1, "fa", "fa-remove"], [1, "col-sm-7"], ["onerror", "this.src=''", 1, "album-image-big", 3, "src"], [2, "margin-top", "10px"], [1, "album-title-big"], [1, "album-artist"], [3, "href", 4, "ngIf"], [1, "album-descript", "line-breaks", 3, "innerHTML"], [3, "tracks"], ["role", "group", 1, "btn-group", 2, "margin-bottom", "10px"], ["routerLink", "/albums", 1, "btn", "btn-sm", "btn-primary"], [1, "fa", "fa-list"], [1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "fa", "fa-eye"], [1, "btn", "btn-sm", "btn-primary", 3, "href"], [1, "fa", "fa-dollar"], [3, "href"]], template: function AlbumEditor_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AlbumEditor_div_1_Template, 10, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "error-display", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "form", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Album Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AlbumEditor_Template_input_ngModelChange_11_listener($event) { return ctx.album.Title = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Band Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AlbumEditor_Template_input_ngModelChange_15_listener($event) { return ctx.album.Artist.ArtistName = $event; })("typeaheadLoading", function AlbumEditor_Template_input_typeaheadLoading_15_listener($event) { return ctx.changeTypeaheadLoading($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Album Description:");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "textarea", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AlbumEditor_Template_textarea_ngModelChange_19_listener($event) { return ctx.album.Description = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AlbumEditor_Template_input_ngModelChange_25_listener($event) { return ctx.album.ImageUrl = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AlbumEditor_Template_input_ngModelChange_31_listener($event) { return ctx.album.AmazonUrl = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AlbumEditor_Template_input_ngModelChange_37_listener($event) { return ctx.album.SpotifyUrl = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Year released:");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AlbumEditor_Template_input_ngModelChange_41_listener($event) { return ctx.album.Year = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "album-songlist", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AlbumEditor_Template_button_click_45_listener() { return ctx.saveAlbum(ctx.album); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, " Save ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, " Cancel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Preview");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "img", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "h2", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](61, AlbumEditor_a_61_Template, 3, 1, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "album-songlist", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.album.Id !== 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("error", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](25, _c1, !ctx.loaded))("@slideIn", "in");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("focus", true)("ngModel", ctx.album.Title);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.album.Artist.ArtistName)("typeahead", ctx.searchResults)("typeaheadAsync", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.album.Description);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.album.ImageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.album.AmazonUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.album.SpotifyUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.album.Year);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("tracks", ctx.album.Tracks)("allowEditing", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _r1.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](27, _c0, ctx.album.Id));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.album.ImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.album.Title);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("by ", ctx.album.Artist.ArtistName, " ", ctx.album.Year ? "in " + ctx.album.Year : "", " - ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.album.AmazonUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx.album.Description, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("tracks", ctx.album.Tracks);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorDisplay"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _common_focusDirective__WEBPACK_IMPORTED_MODULE_13__["FocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_14__["TypeaheadDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _albumSongList__WEBPACK_IMPORTED_MODULE_15__["AlbumSongList"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2, data: { animation: [_common_animations__WEBPACK_IMPORTED_MODULE_8__["slideIn"]] } });
    return AlbumEditor;
}());



/***/ }),

/***/ "LPqB":
/*!****************************************!*\
  !*** ./src/app/albums/albumService.ts ***!
  \****************************************/
/*! exports provided: AlbumService, ArtistSearchResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistSearchResult", function() { return ArtistSearchResult; });
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/entities */ "mpXH");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/errorDisplay */ "kAX8");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








// import 'rxjs/Operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
var AlbumService = /** @class */ (function () {
    function AlbumService(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
        this.albumList = [];
        this.album = new _business_entities__WEBPACK_IMPORTED_MODULE_0__["Album"]();
        //artistList: Artist[] = [];
        this.listScrollPos = 0;
    }
    AlbumService.prototype.getAlbums = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("albums"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (albumList) { return _this.albumList = albumList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService.prototype.getAlbum = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("album", id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (album) {
            _this.album = album;
            if (!_this.albumList || _this.albumList.length < 1)
                _this.getAlbums(); // load up albums in background
            return _this.album;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService.prototype.newAlbum = function () {
        this.album = new _business_entities__WEBPACK_IMPORTED_MODULE_0__["Album"]();
        return this.album;
    };
    AlbumService.prototype.saveAlbum = function (album) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url("album"), album)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (album) {
            _this.album = album;
            // explicitly update the list with the updated data
            _this.updateAlbum(_this.album);
            return _this.album;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService.prototype.deleteAlbum = function (album) {
        var _this = this;
        return this.httpClient.delete(this.config.urls.url("album", album.Id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            if (result)
                _this.removeAlbum(album); // client side remove
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseObservableResponseError));
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
        return this.httpClient.get(url)
            .pipe(
        // return only .name rather than id and name since we're not using it here
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (kv) { return kv.map(function (k) { return k.name; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService.ɵfac = function AlbumService_Factory(t) { return new (t || AlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"])); };
    AlbumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AlbumService, factory: AlbumService.ɵfac, providedIn: 'root' });
    return AlbumService;
}());

var ArtistSearchResult = /** @class */ (function () {
    function ArtistSearchResult() {
    }
    return ArtistSearchResult;
}());



/***/ }),

/***/ "PzDD":
/*!***************************************!*\
  !*** ./src/app/artists/artistList.ts ***!
  \***************************************/
/*! exports provided: ArtistList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistList", function() { return ArtistList; });
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _artistService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artistService */ "eaJK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "kAX8");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/animations */ "RsVk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ArtistList_a_8_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ArtistList_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); var artist_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.artistClick(artist_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var artist_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](artist_r1.AlbumCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](artist_r1.ArtistName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", artist_r1.ImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
var ArtistList = /** @class */ (function () {
    function ArtistList(router, artistService, config) {
        this.router = router;
        this.artistService = artistService;
        this.config = config;
        this.artistList = [];
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]();
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
        enumerable: false,
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
    ArtistList.ɵfac = function ArtistList_Factory(t) { return new (t || ArtistList)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_artistService__WEBPACK_IMPORTED_MODULE_1__["ArtistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_0__["AppConfiguration"])); };
    ArtistList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ArtistList, selectors: [["artist-list"]], decls: 9, vars: 4, consts: [[1, "container", "container-fluid"], [3, "error"], [1, "list-group"], [1, "page-header-text"], [1, "fa", "fa-list"], [1, "badge", "badge-danger", "badge-small"], ["class", "list-group-item list-group-item-action", "role", "button", 3, "click", 4, "ngFor", "ngForOf"], ["role", "button", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "fa", "fa-users", 2, "color", "steelblue"], [1, "badge", "badge-info", "badge-small", 2, "font-size", "0.7em"], [2, "padding-left", "20px", "font-size", "1.1em"], [1, "pull-right", 2, "overflow", "hidden", "border-radius", "5px", "width", "40px", "height", "40px"], [2, "width", "auto", "height", "50px", "border-radius", "3px", 3, "src"]], template: function ArtistList_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "error-display", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Artists ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ArtistList_a_8_Template, 9, 3, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@slideInLeft", "in");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("error", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.artistList.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredArtistList);
        } }, directives: [_common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorDisplay"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], encapsulation: 2, data: { animation: [_common_animations__WEBPACK_IMPORTED_MODULE_4__["slideInLeft"]] } });
    return ArtistList;
}());



/***/ }),

/***/ "RsVk":
/*!**************************************!*\
  !*** ./src/app/common/animations.ts ***!
  \**************************************/
/*! exports provided: slideIn, slideInLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideIn", function() { return slideIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInLeft", function() { return slideInLeft; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business/userInfo */ "4Eqb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_appHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/appHeader */ "XLT4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_appFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/appFooter */ "T5WH");






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
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_business_userInfo__WEBPACK_IMPORTED_MODULE_0__["UserInfo"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[2, "padding", "1px"], ["id", "MainView"], ["autoscroll", "true"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " &copy West Wind Technologies\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, directives: [_common_appHeader__WEBPACK_IMPORTED_MODULE_2__["AppHeader"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _common_appFooter__WEBPACK_IMPORTED_MODULE_4__["AppFooter"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
    return AppComponent;
}());



/***/ }),

/***/ "T5WH":
/*!*************************************!*\
  !*** ./src/app/common/appFooter.ts ***!
  \*************************************/
/*! exports provided: AppFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return AppFooter; });
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





var _c0 = function (a0) { return { selected: a0 }; };
var AppFooter = /** @class */ (function () {
    function AppFooter(config) {
        this.config = config;
    }
    AppFooter.prototype.ngOnInit = function () {
    };
    AppFooter.ɵfac = function AppFooter_Factory(t) { return new (t || AppFooter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_0__["AppConfiguration"])); };
    AppFooter.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppFooter, selectors: [["app-footer"]], decls: 14, vars: 9, consts: [[1, "banner", "banner-bottom"], ["id", "Toolbar"], ["routerLink", "/albums", 3, "ngClass"], ["src", "images/record.png", "title", "Albums"], ["routerLink", "/artists", 3, "ngClass"], ["src", "images/artists32.png", "title", "Artists"], ["routerLink", "/options", 3, "ngClass"], ["src", "images/gear.png", "title", "Options"]], template: function AppFooter_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Albums");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Artists");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.config.activeTab == "albums"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.config.activeTab == "artists"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.config.activeTab == "options"));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], encapsulation: 2 });
    return AppFooter;
}());



/***/ }),

/***/ "WJKB":
/*!*****************************************!*\
  !*** ./src/app/albums/albumSongList.ts ***!
  \*****************************************/
/*! exports provided: AlbumSongList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumSongList", function() { return AlbumSongList; });
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/entities */ "mpXH");
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albumService */ "LPqB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function AlbumSongList_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlbumSongList_div_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.addTrack(ctx_r4.track); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Add Song ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AlbumSongList_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AlbumSongList_div_0_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.track.SongName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AlbumSongList_div_0_div_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.track.Length = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlbumSongList_div_0_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.saveTrack(ctx_r9.track); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Save Track ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlbumSongList_div_0_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.cancelTrack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.track.SongName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.track.Length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r3.track.SongName);
} }
function AlbumSongList_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AlbumSongList_div_0_button_1_Template, 3, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AlbumSongList_div_0_div_2_Template, 12, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isSongVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSongVisible);
} }
function AlbumSongList_tr_3_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlbumSongList_tr_3_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var track_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.removeTrack(track_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AlbumSongList_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AlbumSongList_tr_3_button_7_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var track_r11 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", track_r11.SongName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](track_r11.Length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.allowEditing);
} }
var AlbumSongList = /** @class */ (function () {
    function AlbumSongList(albumService) {
        this.albumService = albumService;
        this.tracks = [];
        this.allowEditing = false;
        this.isSongVisible = false;
        this.track = new _business_entities__WEBPACK_IMPORTED_MODULE_0__["Track"]();
    }
    AlbumSongList.prototype.ngOnInit = function () {
    };
    AlbumSongList.prototype.addTrack = function (track) {
        this.track = new _business_entities__WEBPACK_IMPORTED_MODULE_0__["Track"]();
        this.isSongVisible = true;
    };
    AlbumSongList.prototype.cancelTrack = function () {
        this.track = new _business_entities__WEBPACK_IMPORTED_MODULE_0__["Track"]();
        this.isSongVisible = false;
    };
    AlbumSongList.prototype.saveTrack = function (track) {
        this.albumService.addSong(track);
        this.isSongVisible = false;
    };
    AlbumSongList.prototype.removeTrack = function (track) {
        this.albumService.removeSong(track);
    };
    AlbumSongList.ɵfac = function AlbumSongList_Factory(t) { return new (t || AlbumSongList)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_albumService__WEBPACK_IMPORTED_MODULE_1__["AlbumService"])); };
    AlbumSongList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlbumSongList, selectors: [["album-songlist"]], inputs: { tracks: "tracks", allowEditing: "allowEditing" }, decls: 4, vars: 2, consts: [[4, "ngIf"], ["id", "TrackTable", 1, "table", "table-striped", "table-sm"], [4, "ngFor", "ngForOf"], ["accesskey", "a", "title", "Add Song (alt-a)", "class", "btn btn-info btn-xs", "style", "margin-bottom: 10px;", 3, "click", 4, "ngIf"], ["class", "well well-sm", 4, "ngIf"], ["accesskey", "a", "title", "Add Song (alt-a)", 1, "btn", "btn-info", "btn-xs", 2, "margin-bottom", "10px", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "well", "well-sm"], [1, "row"], [1, "col-sm-9"], ["id", "songSongName", "placeholder", "Name of the song", "name", "songSongName", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [1, "col-sm-3"], ["id", "Length", "name", "Length", "placeholder", "0:00", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], ["accesskey", "", 1, "btn", "btn-success", "btn-xs", 2, "margin-top", "8px", 3, "disabled", "click"], [1, "btn", "btn-default", "btn-xs", 2, "margin-top", "8px", 3, "click"], [1, "fa", "fa-times"], [1, "fa", "fa-music", "text-primary"], ["class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fa", "fa-remove"]], template: function AlbumSongList_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AlbumSongList_div_0_Template, 3, 2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AlbumSongList_tr_3_Template, 8, 3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowEditing);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tracks);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["@media(max-width: 700px) {\n        #TrackTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%] { display: none; }\n    }"] });
    return AlbumSongList;
}());



/***/ }),

/***/ "XLT4":
/*!*************************************!*\
  !*** ./src/app/common/appHeader.ts ***!
  \*************************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function AppHeader_input_26_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppHeader_input_26_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.config.searchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.config.searchText);
} }
var _c0 = function (a0) { return { selected: a0 }; };
var AppHeader = /** @class */ (function () {
    function AppHeader(config) {
        this.config = config;
    }
    AppHeader.prototype.ngOnInit = function () {
    };
    AppHeader.ɵfac = function AppHeader_Factory(t) { return new (t || AppHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_0__["AppConfiguration"])); };
    AppHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppHeader, selectors: [["app-header"]], decls: 27, vars: 10, consts: [["id", "TitleBar"], ["routerLink", "/albums"], ["src", "images/headphone-head.png", 2, "height", "47px", "float", "left"], [2, "float", "left", "margin-left", "5px", "line-height", "1.2"], [2, "color", "steelblue", "font-size", "0.8em", "font-weight", "bold"], [2, "color", "whitesmoke", "font-size", "1.25em", "font-weight", "bold"], [1, "banner", "statusbar-push"], ["id", "Toolbar-Top", 1, "pull-right"], ["routerLink", "/albums", 3, "ngClass"], ["src", "images/record.png", "title", "Albums"], ["routerLink", "/artists", 3, "ngClass"], ["src", "images/artists32.png", "title", "Artists"], ["routerLink", "/options", 3, "ngClass"], ["src", "images/gear.png", "title", "Options"], ["id", "TopMenu", 1, "pull-right"], [2, "float", "left", "width", "140px", "padding-top", "2px"], ["id", "SearchBox", "type", "text", "class", "form-control", "placeholder", "Search...", "name", "searchText", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["id", "SearchBox", "type", "text", "placeholder", "Search...", "name", "searchText", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function AppHeader_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "West Wind");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "AlbumViewer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nav", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Albums");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Artists");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nav", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AppHeader_input_26_Template, 1, 1, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.config.activeTab == "albums"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.config.activeTab == "artists"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.config.activeTab == "options"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.config.isSearchAllowed);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2 });
    return AppHeader;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _common_appHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/appHeader */ "XLT4");
/* harmony import */ var _common_appFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/appFooter */ "T5WH");
/* harmony import */ var _albums_albumList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./albums/albumList */ "FZCQ");
/* harmony import */ var _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./albums/albumDisplay */ "n11o");
/* harmony import */ var _albums_albumEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./albums/albumEditor */ "HvP7");
/* harmony import */ var _artists_artistList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./artists/artistList */ "PzDD");
/* harmony import */ var _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./artists/artistDisplay */ "a8NQ");
/* harmony import */ var _albums_albumSongList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./albums/albumSongList */ "WJKB");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/errorDisplay */ "kAX8");
/* harmony import */ var _artists_artistEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./artists/artistEditor */ "/zLm");
/* harmony import */ var _common_login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/login */ "4fQs");
/* harmony import */ var _options_about__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./options/about */ "uZ86");
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./options/options */ "u8fy");
/* harmony import */ var _business_httpRequestInterceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./business/httpRequestInterceptor */ "xC+/");
/* harmony import */ var _common_focusDirective__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/focusDirective */ "4nXg");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "qCdp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");





 // use this
// components








// directives and shared components





/* Custom Components or overrides */









// Enable production mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
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
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _business_httpRequestInterceptor__WEBPACK_IMPORTED_MODULE_19__["HttpRequestInterceptor"], multi: true }
            ],
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot({
                    timeOut: 5000,
                    closeButton: true,
                    positionClass: 'toast-bottom-right'
                }),
                // ngx-bootstrap components
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["ModalModule"].forRoot(),
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_23__["TypeaheadModule"].forRoot()
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _common_appHeader__WEBPACK_IMPORTED_MODULE_6__["AppHeader"],
        _common_appFooter__WEBPACK_IMPORTED_MODULE_7__["AppFooter"],
        _options_options__WEBPACK_IMPORTED_MODULE_18__["OptionsComponent"],
        _options_about__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
        _albums_albumList__WEBPACK_IMPORTED_MODULE_8__["AlbumList"],
        _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_9__["AlbumDisplay"],
        _albums_albumEditor__WEBPACK_IMPORTED_MODULE_10__["AlbumEditor"],
        _albums_albumSongList__WEBPACK_IMPORTED_MODULE_13__["AlbumSongList"],
        _artists_artistList__WEBPACK_IMPORTED_MODULE_11__["ArtistList"],
        _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_12__["ArtistDisplay"],
        _artists_artistEditor__WEBPACK_IMPORTED_MODULE_15__["ArtistEditor"],
        _common_errorDisplay__WEBPACK_IMPORTED_MODULE_14__["ErrorDisplay"],
        _common_login__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _common_focusDirective__WEBPACK_IMPORTED_MODULE_20__["FocusDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["ModalModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_23__["TypeaheadModule"]] }); })();


/***/ }),

/***/ "a8NQ":
/*!******************************************!*\
  !*** ./src/app/artists/artistDisplay.ts ***!
  \******************************************/
/*! exports provided: ArtistDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistDisplay", function() { return ArtistDisplay; });
/* harmony import */ var _artistService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artistService */ "eaJK");
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/entities */ "mpXH");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../business/userInfo */ "4Eqb");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/errorDisplay */ "kAX8");
/* harmony import */ var _artistEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artistEditor */ "/zLm");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/animations */ "RsVk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
















function ArtistDisplay_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r0.artist.AmazonUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r0.artist.ArtistName, " on the Web");
} }
function ArtistDisplay_div_25_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 32);
} if (rf & 2) {
    var album_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", album_r3.ImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
} }
var _c0 = function (a1) { return ["/album/edit", a1]; };
function ArtistDisplay_div_25_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArtistDisplay_div_25_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); var album_r3 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.albumClick(album_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArtistDisplay_div_25_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); var album_r3 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.deleteAlbum(album_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ArtistDisplay_div_25_img_8_Template, 1, 1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var album_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, album_r3.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", album_r3.ImageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](album_r3.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", album_r3.Year ? "in " + album_r3.Year : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](album_r3.Description);
} }
var ArtistDisplay = /** @class */ (function () {
    function ArtistDisplay(route, artistService, config, router, user) {
        this.route = route;
        this.artistService = artistService;
        this.config = config;
        this.router = router;
        this.user = user;
        this.artist = new _business_entities__WEBPACK_IMPORTED_MODULE_1__["Artist"]();
        this.albums = [];
        this.artistId = null;
        this.formActive = true;
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__["ErrorInfo"]();
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
            this.user.requestedUrl = this.router.url;
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
    ArtistDisplay.ɵfac = function ArtistDisplay_Factory(t) { return new (t || ArtistDisplay)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_artistService__WEBPACK_IMPORTED_MODULE_0__["ArtistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_business_userInfo__WEBPACK_IMPORTED_MODULE_4__["UserInfo"])); };
    ArtistDisplay.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ArtistDisplay, selectors: [["artist-display"]], viewQuery: function ArtistDisplay_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_artistEditor__WEBPACK_IMPORTED_MODULE_6__["ArtistEditor"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
        } }, decls: 31, vars: 8, consts: [[1, "container"], ["role", "group", 1, "btn-group", "margin-bottom"], ["routerLink", "/artists", 1, "btn", "btn-sm", "btn-primary"], [1, "fa", "fa-list"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fa", "fa-edit"], [1, "fa", "fa-remove"], [3, "error"], [1, "separator"], [1, "row"], [1, "col-sm-3"], [2, "width", "97%", "margin-bottom", "8px", "border-radius", "4px", "box-shadow", "2px 2px 4px #535353", 3, "src"], [1, "col-sm-8"], [1, "line-breaks"], ["class", "small", 3, "href", 4, "ngIf"], ["class", "album", "style", "text-decorataion: none;", 3, "click", 4, "ngFor", "ngForOf"], ["routerLink", "/album/edit/0", 1, "btn", "btn-sm", "btn-success"], [1, "fa", "fa-plus"], [3, "artist"], ["ArtistEditor", ""], [1, "small", 3, "href"], [1, "album", 2, "text-decorataion", "none", 3, "click"], [1, "album-overlay"], [3, "routerLink"], ["title", "Edit", 1, "fa", "fa-edit"], [3, "click"], ["title", "Delete", 1, "fa", "fa-remove"], ["class", "album-image", 3, "src", 4, "ngIf"], [2, "padding-left", "80px"], [1, "album-title"], [1, "album-artist"], [1, "album-descript"], [1, "album-image", 3, "src"]], template: function ArtistDisplay_Template(rf, ctx) { if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Artists");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArtistDisplay_Template_button_click_5_listener() { return ctx.openModalEditor(ctx.editor); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Edit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArtistDisplay_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](30); return ctx.deleteArtist(_r2.artist); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Delete ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "error-display", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ArtistDisplay_a_21_Template, 2, 2, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Albums");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, ArtistDisplay_div_25_Template, 16, 7, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " Add Album ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "artist-editor", 18, 19);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@slideIn", "in");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("error", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.artist.ArtistName);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.artist.ImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.artist.Description);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.artist.AmazonUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.artist.Albums);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("artist", ctx.artist);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__["ErrorDisplay"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _artistEditor__WEBPACK_IMPORTED_MODULE_6__["ArtistEditor"]], encapsulation: 2, data: { animation: [_common_animations__WEBPACK_IMPORTED_MODULE_7__["slideIn"]] } });
    return ArtistDisplay;
}());



/***/ }),

/***/ "eaJK":
/*!******************************************!*\
  !*** ./src/app/artists/artistService.ts ***!
  \******************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/errorDisplay */ "kAX8");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.artistList);
        return this.httpClient.get(this.config.urls.url("artists"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (artistList) {
            _this.artistList = artistList;
            return _this.artistList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseObservableResponseError));
    };
    ArtistService.prototype.getArtist = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("artist", id), this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (artistResult) {
            _this.artist = artistResult.Artist;
            _this.artist.Albums = artistResult.Albums;
            _this.artist.AlbumCount = artistResult.Albums.length;
            if (!_this.artistList || _this.artistList.length < 1)
                _this.getArtists();
            return artistResult;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseObservableResponseError));
    };
    ArtistService.prototype.saveArtist = function (artist) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url("saveArtist"), artist, this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (artistResult) {
            _this.artist = artistResult.Artist;
            _this.artist.Albums = artistResult.Albums;
            _this.artist.AlbumCount = artistResult.Albums.length;
            _this.updateArtist(artistResult.Artist);
            return artistResult;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseObservableResponseError));
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
        var url = this.config.urls.url("artist", artist.Id);
        return this.httpClient.delete(url, this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseObservableResponseError));
    };
    ArtistService.ɵfac = function ArtistService_Factory(t) { return new (t || ArtistService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_0__["AppConfiguration"])); };
    ArtistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ArtistService, factory: ArtistService.ɵfac, providedIn: 'root' });
    return ArtistService;
}());



/***/ }),

/***/ "kAX8":
/*!****************************************!*\
  !*** ./src/app/common/errorDisplay.ts ***!
  \****************************************/
/*! exports provided: ErrorDisplay, ErrorInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDisplay", function() { return ErrorDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInfo", function() { return ErrorInfo; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ErrorDisplay_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ErrorDisplay_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r2.error.iconColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-", ctx_r2.error.imageIcon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.error.header, " ");
} }
function ErrorDisplay_div_0_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r3.error.iconColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-", ctx_r3.error.imageIcon, "");
} }
function ErrorDisplay_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ErrorDisplay_div_0_button_1_Template, 2, 0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ErrorDisplay_div_0_div_2_Template, 3, 7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ErrorDisplay_div_0_i_3_Template, 1, 6, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("alert alert-", ctx_r0.error.icon, " alert-dismissable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.error.dismissable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.error.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.error.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error.message);
} }
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
    ErrorDisplay.ɵfac = function ErrorDisplay_Factory(t) { return new (t || ErrorDisplay)(); };
    ErrorDisplay.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorDisplay, selectors: [["error-display"]], inputs: { error: "error" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], ["type", "button", "class", "close", "data-dismiss", "alert", "aria-hidden", "true", 4, "ngIf"], ["style", "font-size: 1.5em; font-weight: bold", 4, "ngIf"], [3, "class", "style", 4, "ngIf"], ["type", "button", "data-dismiss", "alert", "aria-hidden", "true", 1, "close"], [1, "fa", "fa-remove"], [2, "font-size", "1.5em", "font-weight", "bold"]], template: function ErrorDisplay_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ErrorDisplay_div_0_Template, 6, 7, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error.message);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
    return ErrorDisplay;
}());

var ErrorInfo = /** @class */ (function () {
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
                if (typeof response.error === 'object' && response.error.message)
                    err = response.error;
                else
                    err = JSON.parse(response.error);
            }
            catch (ex) { }
            if (err.hasOwnProperty("message") && err.message)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
            if (err.hasOwnProperty("Message") && err['Message']) {
                err.message = err["Message"];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
            }
        }
        if (response.hasOwnProperty("message"))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(response);
        if (response.hasOwnProperty("Message")) {
            response.message = response.Message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(response);
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
    };
    ErrorInfo.prototype.parseResponseError = function (response) {
        var err = new ErrorInfo();
        // HttpClient has an `error` property for raw JSON response
        if (response.hasOwnProperty("error")) {
            try {
                if (typeof response.error === 'object' && response.error.message)
                    err = response.error;
                else
                    err = JSON.parse(response.error);
            }
            catch (ex) { }
            if (err.hasOwnProperty("message") && err.message)
                return err;
            if (err.hasOwnProperty("Message") && err['Message']) {
                err.message = err["Message"];
                return err;
            }
        }
        if (response.hasOwnProperty("message"))
            return response;
        if (response.hasOwnProperty("Message")) {
            response.message = response.Message;
            return response;
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
        return err;
    };
    ErrorInfo.ɵfac = function ErrorInfo_Factory(t) { return new (t || ErrorInfo)(); };
    ErrorInfo.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorInfo, factory: ErrorInfo.ɵfac, providedIn: 'root' });
    return ErrorInfo;
}());



/***/ }),

/***/ "kUfd":
/*!**********************************************!*\
  !*** ./src/app/business/appConfiguration.ts ***!
  \**********************************************/
/*! exports provided: AppConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfiguration", function() { return AppConfiguration; });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "mpXH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var AppConfiguration = /** @class */ (function () {
    function AppConfiguration() {
        var _this = this;
        // top level search text
        this.searchText = "";
        this.activeTab = "albums";
        this.isSearchAllowed = true;
        this.applicationStats = new _entities__WEBPACK_IMPORTED_MODULE_0__["ApplicationStats"]();
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
            authenticate: "api/authenticate",
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
        if (location.port && (location.port == "3000") || (location.port == "4200") || (location.port == 5200)) {
            this.urls.baseUrl = "https://localhost:5001/"; // local kestrel
        }
        else {
            //this.urls.baseUrl = "http://localhost:5001/"; // kestrel
            //this.urls.baseUrl = "http://localhost:26448/"; // iis Express
            //this.urls.baseUrl = "http://localhost/albumviewer/"; // iis
            //this.urls.baseUrl = https://albumviewer.west-wind.com/";  // online
            this.urls.baseUrl = location.origin.trimEnd('/') + '/';
        }
        // always online
        //this.urls.baseUrl = "https://albumviewer.west-wind.com/";  // online
    }
    AppConfiguration.prototype.setToastrOptions = function () {
        toastr.options.closeButton = true;
        toastr.options.positionClass = "toast-bottom-right";
    };
    AppConfiguration.ɵfac = function AppConfiguration_Factory(t) { return new (t || AppConfiguration)(); };
    AppConfiguration.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppConfiguration, factory: AppConfiguration.ɵfac, providedIn: 'root' });
    return AppConfiguration;
}());



/***/ }),

/***/ "mpXH":
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

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
    Album.ɵfac = function Album_Factory(t) { return new (t || Album)(); };
    Album.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Album, factory: Album.ɵfac });
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
    Artist.ɵfac = function Artist_Factory(t) { return new (t || Artist)(); };
    Artist.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Artist, factory: Artist.ɵfac, providedIn: 'root' });
    return Artist;
}());

var ArtistResult = /** @class */ (function () {
    function ArtistResult() {
        this.Artist = null;
        this.Albums = [];
    }
    ArtistResult.ɵfac = function ArtistResult_Factory(t) { return new (t || ArtistResult)(); };
    ArtistResult.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArtistResult, factory: ArtistResult.ɵfac, providedIn: 'root' });
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
    Track.ɵfac = function Track_Factory(t) { return new (t || Track)(); };
    Track.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Track, factory: Track.ɵfac, providedIn: 'root' });
    return Track;
}());

var ApplicationStats = /** @class */ (function () {
    function ApplicationStats() {
        this.OsPlatform = null;
        this.AngularVersion = "Unknown";
        this.AspDotnetVersion = "Unknown";
        this.DataMode = "Unknown";
    }
    ApplicationStats.ɵfac = function ApplicationStats_Factory(t) { return new (t || ApplicationStats)(); };
    ApplicationStats.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApplicationStats, factory: ApplicationStats.ɵfac, providedIn: 'root' });
    return ApplicationStats;
}());



/***/ }),

/***/ "n11o":
/*!****************************************!*\
  !*** ./src/app/albums/albumDisplay.ts ***!
  \****************************************/
/*! exports provided: AlbumDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumDisplay", function() { return AlbumDisplay; });
/* harmony import */ var _business_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../business/entities */ "mpXH");
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albumService */ "LPqB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "kAX8");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/animations */ "RsVk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _albumSongList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./albumSongList */ "WJKB");













function AlbumDisplay_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.album.ImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function AlbumDisplay_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx_r1.album.AmazonUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function AlbumDisplay_a_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx_r2.album.SpotifyUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function AlbumDisplay_img_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r3.album.Artist.ImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
var _c0 = function (a1) { return ["/album/edit", a1]; };
var _c1 = function (a1) { return ["/artist", a1]; };
var AlbumDisplay = /** @class */ (function () {
    function AlbumDisplay(route, router, config, albumService) {
        this.route = route;
        this.router = router;
        this.config = config;
        this.albumService = albumService;
        this.album = new _business_entities__WEBPACK_IMPORTED_MODULE_0__["Album"]();
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]();
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
    AlbumDisplay.ɵfac = function AlbumDisplay_Factory(t) { return new (t || AlbumDisplay)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_albumService__WEBPACK_IMPORTED_MODULE_1__["AlbumService"])); };
    AlbumDisplay.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AlbumDisplay, selectors: [["album-display"]], inputs: { album: "album" }, decls: 43, vars: 23, consts: [[1, "container"], ["role", "group", "aria-label", "Album Navigation", 1, "btn-group", 2, "margin-bottom", "10px"], ["routerLink", "/albums", 1, "btn", "btn-sm", "btn-primary"], [1, "fa", "fa-list"], [1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "fa", "fa-edit"], [1, "btn", "btn-sm", "btn-primary", 3, "href"], [1, "fa", "fa-dollar"], [1, "fa", "fa-volume-up"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fa", "fa-remove"], [1, "separator"], [3, "error"], [1, "row"], [1, "col-sm-3"], ["class", "album-image-big", 3, "src", 4, "ngIf"], [1, "col-sm-9"], [1, "album-title-big"], [1, "album-artist"], [3, "routerLink"], [1, "line-breaks", 3, "innerHTML"], [1, "pull-right", 2, "margin", "10px 0"], ["class", "btn btn-link btn-sm", "target", "_amazon", 3, "href", 4, "ngIf"], ["class", "btn btn-link btn-sm", "target", "_spotify", 3, "href", 4, "ngIf"], [3, "tracks"], ["style", "height: 100px; border-radius: 5px;box-shadow: 2px 2px 3px #535353", 3, "src", 4, "ngIf"], [1, "album-image-big", 3, "src"], ["target", "_amazon", 1, "btn", "btn-link", "btn-sm", 3, "href"], ["target", "_spotify", 1, "btn", "btn-link", "btn-sm", 3, "href"], [2, "height", "100px", "border-radius", "5px", "box-shadow", "2px 2px 3px #535353", 3, "src"]], template: function AlbumDisplay_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Albums");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Edit");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Buy");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Listen");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AlbumDisplay_Template_button_click_14_listener() { return ctx.deleteAlbum(ctx.album); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "error-display", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AlbumDisplay_img_21_Template, 1, 1, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "h2", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " \u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, AlbumDisplay_a_33_Template, 3, 1, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " \u00A0\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, AlbumDisplay_a_35_Template, 3, 1, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "album-songlist", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " More from ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, AlbumDisplay_img_42_Template, 1, 1, "img", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](17, _c0, ctx.album.Id));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx.album.AmazonUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx.album.SpotifyUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("error", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@slideIn", "in");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.album.ImageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.album.Title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](19, _c1, ctx.album.ArtistId));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.album.Artist.ArtistName);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.album.Year ? "in " + ctx.album.Year : "", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx.album.Description, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.album.AmazonUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.album.SpotifyUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tracks", ctx.album.Tracks);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](21, _c1, ctx.album.ArtistId));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.album.Artist.ArtistName, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.album.Artist.ImageUrl);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorDisplay"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _albumSongList__WEBPACK_IMPORTED_MODULE_8__["AlbumSongList"]], encapsulation: 2, data: { animation: [_common_animations__WEBPACK_IMPORTED_MODULE_5__["slideIn"]] } });
    return AlbumDisplay;
}());



/***/ }),

/***/ "u8fy":
/*!************************************!*\
  !*** ./src/app/options/options.ts ***!
  \************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/appConfiguration */ "kUfd");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/userInfo */ "4Eqb");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/errorDisplay */ "kAX8");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












function OptionsComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Server Platform: ", ctx_r0.config.applicationStats.OsPlatform, "");
} }
function OptionsComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("ASP.NET Version: ", ctx_r1.config.applicationStats.AspDotnetVersion, "");
} }
function OptionsComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Angular Version: ", ctx_r2.config.applicationStats.AngularVersion, "");
} }
function OptionsComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Data Mode: ", ctx_r3.config.applicationStats.DataMode, "");
} }
function OptionsComponent_a_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OptionsComponent_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Sign out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(config, user, http) {
        this.config = config;
        this.user = user;
        this.http = http;
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]();
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
                var err = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseResponseError(response);
                var msg = err.message;
                toastr.error(msg);
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
                toastr.error("Unable to reload data.");
        }, function (response) {
            var err = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]().parseResponseError(response);
            toastr.error(err.message);
            return err;
        });
    };
    OptionsComponent.ɵfac = function OptionsComponent_Factory(t) { return new (t || OptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_business_appConfiguration__WEBPACK_IMPORTED_MODULE_0__["AppConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_business_userInfo__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    OptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OptionsComponent, selectors: [["options"]], decls: 39, vars: 8, consts: [[1, "container"], [3, "error"], [1, "list-group", 2, "margin-top", "20px"], ["href", "javascript:{}", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "list-group-item-heading"], [1, "fa", "fa-fw", "fa-refresh"], [1, "list-group-item-text"], ["routerLink", "/about", 1, "list-group-item", "list-group-item-action"], [1, "fa", "fa-fw", "fa-info-circle"], [4, "ngIf"], ["routerLink", "/", 1, "list-group-item", "list-group-item-action"], [1, "fa", "fa-fw", "fa-home"], ["href", "https://github.com/RickStrahl/AlbumViewerVNext", 1, "list-group-item", "list-group-item-action"], [1, "fa", "fa-fw", "fa-github"], [1, "list-group-item", "list-group-item-action"], [1, "fa", "fa-fw", "fa-gears"], [1, "form-group"], ["for", "httpBaseUrl", 1, "control-label"], ["type", "text", "id", "httpBaseUrl", "placeholder", "Data Http BaseUrl", 1, "form-control", 3, "ngModel", "ngModelChange"], ["routerLink", "/login", "class", "list-group-item list-group-item-action", 4, "ngIf"], ["routerLink", "/logout", "class", "list-group-item list-group-item-action", 4, "ngIf"], ["routerLink", "/login", 1, "list-group-item", "list-group-item-action"], [1, "fa", "fa-unlock-alt"], ["routerLink", "/logout", 1, "list-group-item", "list-group-item-action"], [1, "fa", "fa-lock"]], template: function OptionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "error-display", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OptionsComponent_Template_a_click_3_listener() { return ctx.reloadData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Reset Data ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Reset data to original sample data.");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " About Album Viewer ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, OptionsComponent_small_14_Template, 2, 1, "small", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, OptionsComponent_small_16_Template, 2, 1, "small", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, OptionsComponent_small_18_Template, 2, 1, "small", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, OptionsComponent_small_20_Template, 2, 1, "small", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Back to Album List ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " GitHub ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Data Http Base URL:");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function OptionsComponent_Template_input_ngModelChange_36_listener($event) { return ctx.config.urls.baseUrl = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, OptionsComponent_a_37_Template, 4, 0, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, OptionsComponent_a_38_Template, 4, 0, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("error", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.config.applicationStats.OsPlatform);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.config.applicationStats.AspDotnetVersion);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.config.applicationStats.AngularVersion);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.config.applicationStats.DataMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.config.urls.baseUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.user.isAuthenticated);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user.isAuthenticated);
        } }, directives: [_common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorDisplay"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".list-group[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] { color: steelblue; font-size: 1.3em;padding-right: 15px;}"] });
    return OptionsComponent;
}());



/***/ }),

/***/ "uZ86":
/*!**********************************!*\
  !*** ./src/app/options/about.ts ***!
  \**********************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 24, vars: 0, consts: [[1, "container"], [1, "page-header-text"], [1, "fa", "fa-info-circle"], [1, "well", "well-sm"], ["routerLink", "/albums"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " About the AlbumViewer Sample ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ASP.NET Core API backend");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " This application runs an ASP.NET Core 2.0 API server with a JSON Service backend . ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Angular Front End");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The client interface uses Angular 7 to provide the front end logic and UI management features. There are album and artist services that talk to the backend interface and page level components and child components that handle individual view pages of the application. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mobile enabled based on modified Bootstrap 4.0 Interface");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The base Bootstrap framework is used for the core UI features of the interface. The base template has been customized for this application. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " The application is mobile focused and uses custom resizing and toolbar relocation based on the screen/device size used. The application should be comfortably usable from phone up to full screen desktop applications. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Back to Application");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
    return AboutComponent;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _albums_albumList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albums/albumList */ "FZCQ");
/* harmony import */ var _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums/albumDisplay */ "n11o");
/* harmony import */ var _albums_albumEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albums/albumEditor */ "HvP7");
/* harmony import */ var _artists_artistList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artists/artistList */ "PzDD");
/* harmony import */ var _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artists/artistDisplay */ "a8NQ");
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options/options */ "u8fy");
/* harmony import */ var _common_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/login */ "4fQs");
/* harmony import */ var _options_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options/about */ "uZ86");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











var routes = [
    { path: '', redirectTo: 'albums', pathMatch: 'full' },
    { path: 'albums', component: _albums_albumList__WEBPACK_IMPORTED_MODULE_1__["AlbumList"] },
    { path: 'album/:id', component: _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_2__["AlbumDisplay"] },
    { path: 'album/edit/:id', component: _albums_albumEditor__WEBPACK_IMPORTED_MODULE_3__["AlbumEditor"] },
    { path: 'artists', component: _artists_artistList__WEBPACK_IMPORTED_MODULE_4__["ArtistList"] },
    { path: 'artist/:id', component: _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_5__["ArtistDisplay"] },
    { path: 'options', component: _options_options__WEBPACK_IMPORTED_MODULE_6__["OptionsComponent"] },
    { path: 'login', component: _common_login__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'logout', component: _common_login__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'about', component: _options_about__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xC+/":
/*!****************************************************!*\
  !*** ./src/app/business/httpRequestInterceptor.ts ***!
  \****************************************************/
/*! exports provided: HttpRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInfo */ "4Eqb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




/** Inject With Credentials into the request */
var HttpRequestInterceptor = /** @class */ (function () {
    function HttpRequestInterceptor(userInfo) {
        this.userInfo = userInfo;
    }
    HttpRequestInterceptor.prototype.intercept = function (req, next) {
        console.log("interceptor: " + req.url);
        req = req.clone({
            withCredentials: true,
            setHeaders: { "Authorization": "Bearer " + this.userInfo.token }
        });
        return next.handle(req);
    };
    HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_userInfo__WEBPACK_IMPORTED_MODULE_1__["UserInfo"])); };
    HttpRequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.ɵfac });
    return HttpRequestInterceptor;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    // force compiler not remove template white space
    preserveWhitespaces: false,
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map