import {NgModule, Injectable} from '@angular/core'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "./app.component";

import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';   // use this


// components
import {AppHeader} from './common/appHeader';
import {AppFooter} from "./common/appFooter";

import {AlbumList} from './albums/albumList';
import {AlbumDisplay} from './albums/albumDisplay';
import {AlbumEditor} from './albums/albumEditor';
import {ArtistList} from './artists/artistList';
import {ArtistDisplay} from './artists/artistDisplay';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AlbumSongList} from "./albums/albumSongList";

// directives and shared components
import {ErrorDisplay, ErrorInfo} from './common/errorDisplay';
import {ArtistEditor} from "./artists/artistEditor";
import {LoginComponent} from './common/login';

import {AboutComponent} from './options/about';
import { OptionsComponent } from './options/options';

/* Custom Components or overrides */
import {HttpRequestInterceptor} from './business/httpRequestInterceptor'
import { FocusDirective } from './common/focusDirective';
import {ToastrModule} from "ngx-toastr";
import {ModalModule} from "ngx-bootstrap/modal";
import {TypeaheadModule} from "ngx-bootstrap/typeahead";

// Enable production mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,

        ToastrModule.forRoot({
            timeOut: 5000,
            closeButton: true,
            positionClass: 'toast-bottom-right'
        }),

        // ngx-bootstrap components
        ModalModule.forRoot(),
        TypeaheadModule.forRoot()
    ],

    // components
    declarations: [
        AppComponent,
        AppHeader,
        AppFooter,

        OptionsComponent,
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

        FocusDirective
    ],
    // services, pipes and providers
    providers: [

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
            { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
        ],
    ],

    bootstrap: [AppComponent]
})
export class AppModule {

}
