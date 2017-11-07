import {NgModule, Injectable} from '@angular/core'
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from "@angular/http";  // legacy
import {HttpClientModule} from "@angular/common/http";   // use this


// components
import {AppHeader} from './common/appHeader';
import {AppFooter} from "./common/appFooter";

import {AlbumList} from './albums/albumList';
import {AlbumDisplay} from './albums/albumDisplay';
import {AlbumEditor} from './albums/albumEditor';
import {ArtistList} from './artists/artistList';
import {ArtistDisplay} from './artists/artistDisplay';

// services
import {Album, Artist, Track} from './business/entities';
import {AlbumService} from './albums/albumService';
import {ArtistService} from './artists/artistService';
import {AppConfiguration} from './business/appConfiguration';
import {UserInfo} from "./business/userInfo";

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AlbumSongList} from "./albums/albumSongList";

// directives and shared components
import {ErrorDisplay, ErrorInfo} from './common/errorDisplay';
import {ArtistEditor} from "./artists/artistEditor";
import {OptionsComponent} from "./Options/options";
import {LoginComponent} from "./common/login";

//import {HttpClient} from "./business/HttpClient";
import {AboutComponent} from "./options/about";

//declare var $:any;
//declare var toastr:any;

// Enable production mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule
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
    providers: [
        AlbumService,
        ArtistService,
        AppConfiguration,
        UserInfo,
        ErrorInfo,
        Album, Artist, Track

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

    bootstrap: [AppComponent]
})
export class AppModule {

}
