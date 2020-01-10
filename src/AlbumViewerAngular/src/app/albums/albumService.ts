import {Injectable} from '@angular/core';
import {Album, Artist, Track} from '../business/entities';
import {AppConfiguration} from "../business/appConfiguration";
import {ErrorInfo} from "../common/errorDisplay";
import {Observable} from "rxjs";
import {map, catchError, tap} from "rxjs/operators";

import {HttpClient} from "@angular/common/http";


// import 'rxjs/Operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
    providedIn: 'root'
})
export class AlbumService {
    constructor( private httpClient: HttpClient,
                 private config: AppConfiguration) {
    }

    albumList: Album[] = [];
    album: Album = new Album();

    //artistList: Artist[] = [];
    listScrollPos = 0;

    getAlbums(): Observable<any> {
        return this.httpClient.get<Album[]>(this.config.urls.url("albums"))
                    .pipe(
                        map(albumList => this.albumList = albumList),
                        catchError( new ErrorInfo().parseObservableResponseError)
                    );
                    
    }

    getAlbum(id): Observable<Album> {
        return this.httpClient.get<Album>(this.config.urls.url("album", id))
            .pipe(
                map(album => {
                    this.album = album;

                    if (!this.albumList || this.albumList.length < 1)
                        this.getAlbums(); // load up albums in background

                    return this.album;
                }),
                catchError(new ErrorInfo().parseObservableResponseError)
            );
    }

    newAlbum(): Album {
        this.album = new Album();
        return this.album;
    }

    saveAlbum(album): Observable<any> {
        return this.httpClient.post<Album>(this.config.urls.url("album"),
            album)
            .pipe(map(album => {
                this.album = album;

                // explicitly update the list with the updated data
                this.updateAlbum(this.album);
                return this.album;
            }),
            catchError(  new ErrorInfo().parseObservableResponseError)
        );
    }

    deleteAlbum(album: Album): Observable<any> {
        return this.httpClient.delete<boolean>(this.config.urls.url("album", album.Id))
            .pipe(
                map(result => {
                    if (result)
                        this.removeAlbum(album); // client side remove
                }),
                catchError(new ErrorInfo().parseObservableResponseError)
            );
    }


    /**
     * Updates the .albumList property by updating the actual
     * index entry in the existing list, adding new entries and
     * removing 0 entries.
     * @param album  - the album to update
     */
    updateAlbum(album) {
        var i = this.albumList.findIndex((a) => (a.Id == album.Id));
        if (i > -1)
            this.albumList[i] = album;
        else {
            this.albumList.push(album);
            this.albumList.sort((a: Album, b: Album) => {
                var aTitle = a.Title.toLocaleLowerCase();
                var bTitle = b.Title.toLocaleLowerCase();
                if (aTitle > bTitle)
                    return 1;
                if (aTitle < bTitle)
                    return -1;
                return 0;
            })
        }

        this.albumList = this.albumList.filter((a) => a.Id != 0);
    }

    removeAlbum(album) {
        this.albumList = this.albumList.filter((a) => a.Id != album.Id);
    }

    addSong(track: Track) {
        this.album.Tracks.push(track);
    }

    removeSong(track: Track) {
        var idx = this.album.Tracks.findIndex((t) => track.Id == t.Id);
        if (idx > -1)
            this.album.Tracks.splice(idx, 1);
    }

    artistLookup(searchTerm: String):Observable<any> {
        let url = this.config.urls.url("artistLookup") + searchTerm;
        return this.httpClient.get<any>( url)
            .pipe(
                // return only .name rather than id and name since we're not using it here
                map( kv=> kv.map( k=> k.name)),
                catchError(new ErrorInfo().parseObservableResponseError)
            );
    }

}
