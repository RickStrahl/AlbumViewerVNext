import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Track, Artist, Album} from "./business/entities";
import {albumListComponent} from "./albums/albumList";
import {albumEditorComponent} from "./albums/albumEditor";


@
NgModule({
    declarations: [
        AppComponent,
        albumListComponent,
        albumEditorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        Album,
        Artist,
        Track
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
