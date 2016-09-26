import {NgModule, Injectable} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";

import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {
  HttpModule, Http, ConnectionBackend, Request, RequestOptionsArgs, Response,
  RequestOptions, XHRBackend, ResponseOptions, BrowserXhr, XSRFStrategy
} from "@angular/http";


// components
import { AppHeader } from './common/appHeader';
import {AppFooter} from "./common/appFooter";

import { AlbumList } from './albums/albumList';
import { AlbumDisplay } from './albums/albumDisplay';
import { AlbumEditor } from './albums/albumEditor';
import { ArtistList } from './artists/artistList';
import { ArtistDisplay} from './artists/artistDisplay';

// services
import { Album, Artist, Track } from './business/entities';
import { AlbumService } from './albums/albumService';
import { ArtistService } from './artists/artistService';
import { AppConfiguration} from './business/appConfiguration';
import { UserInfo } from "./business/userInfo";

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AlbumSongList } from "./albums/albumSongList";

// directives and shared components
import {ErrorDisplay, ErrorInfo} from './common/errorDisplay';
import {ArtistEditor} from "./artists/artistEditor";
import {OptionsComponent} from "./Options/options";
import {LoginComponent} from "./common/login";

import {HttpClient} from "./business/HttpClient";
import {AboutComponent} from "./options/about";


// hack - make sure that jQuery plugins can find
//        jquery reference
//import * as $ from 'jquery';
//import * as toastr from 'toastr';

var $ = require("jquery");
var toastr = require("toastr");

window["$"] = $;
window["jQuery"] = $;
window["toastr"] = toastr;

// Enable production mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  // components
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,

    AboutComponent,
    AlbumList,
    AlbumDisplay,
    AlbumEditor,
    AlbumSongList,
    ArtistList,
    ArtistDisplay,
    ArtistEditor,
    ErrorDisplay,

    LoginComponent,
    OptionsComponent

  ],
  // services, pipes and providers
  providers   : [
      AlbumService,
      ArtistService,
      AppConfiguration,
      UserInfo,
      ErrorInfo,
      Track,
      Album,Artist,
      HttpClient,

      // make sure you use this for Hash Urls rather than HTML 5 routing
      { provide: LocationStrategy, useClass: HashLocationStrategy },

      // {
      //   provide: XHRBackend,
      //   useFactory: (xhr, opts, strategy, user) => {
      //     return new CoreXHRBackend(xhr, opts, strategy, user);
      //   },
      //   deps: [BrowserXhr, ResponseOptions, XSRFStrategy, UserInfo],
      // }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}





// export class CoreXHRBackend extends XHRBackend {
//
//   constructor(xhr:BrowserXhr, opts:ResponseOptions, strategy:XSRFStrategy, private user:UserInfo) {
//     super(xhr, opts, strategy);
//   }
//
//   createConnection(request:Request) {
//     let xhr = super.createConnection(request);
//
//     /**
//      * Global error handler for http requests
//      */
//     xhr.response = xhr.response.catch((error:Response) => {
//       if (error.status === 401 && window.location.pathname !== '/') {
//         this.user.isAuthenticated = false;
//         window.location.hash = "/login";
//       }
//
//       if (error.status === 500) {
//         //
//       }
//
//       return Observable.throw(error);
//     });
//
//     return xhr;
//   }
// }


// @Injectable()
// export class InterceptedHttp extends Http{
//
//   constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
//     super( backend, defaultOptions);
//   }
//
//   request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//     console.log('request...');
//     return super.request(url, options);
//   }
//
//
//
//   get(url: string, options?: RequestOptionsArgs): Observable<Response> {
//     console.log('get...');
//     return super.get(url,options);
//   }
// }
