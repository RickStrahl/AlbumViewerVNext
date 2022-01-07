import { Injectable } from '@angular/core';
import {Artist, Album, ArtistResult} from '../business/entities';

import {AppConfiguration} from "../business/appConfiguration";
import {HttpClient} from "@angular/common/http";
import {ErrorInfo} from "../common/errorDisplay";
import {Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {ArtistEditor} from "./artistEditor";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  constructor(private httpClient: HttpClient,
              private config: AppConfiguration) {
    console.log("ArtistService ctor");
  }

  artistList: Artist[] = [];
  artist: Artist = null;
  albums: Album[] = [];
  error:string  = "";

  listScrollPos = 0;


  getArtists(force: boolean = false): Observable<Artist[]> {

    // use locally cached version
    if (force !== true && (this.artistList && this.artistList.length > 0))
      return of(this.artistList) as Observable<Artist[]>;

    return this.httpClient.get<Artist[]>(this.config.urls.url("artists"))
      .pipe(map(artistList => {
        this.artistList = artistList;
        return this.artistList;
      }),
        catchError(new ErrorInfo().parseObservableResponseError)
      );
  }


  getArtist(id): Observable<ArtistResult> {
    return this.httpClient.get<any>(this.config.urls.url("artist", id),
      this.config.requestHeaders)
      .pipe(map(artistResult => {
        this.artist = artistResult.Artist;
        this.artist.Albums = artistResult.Albums;
        this.artist.AlbumCount = artistResult.Albums.length;

        if (!this.artistList || this.artistList.length < 1)
          this.getArtists();

        return artistResult;
      }),
        catchError(new ErrorInfo().parseObservableResponseError)
      );
  }

  saveArtist(artist): Observable<ArtistResult> {
    return this.httpClient.post<ArtistResult>(this.config.urls.url("saveArtist"), artist,
      this.config.requestHeaders)
      .pipe(map(artistResult => {

        this.artist = artistResult.Artist;
        this.artist.Albums = artistResult.Albums;
        this.artist.AlbumCount = artistResult.Albums.length;

        this.updateArtist(artistResult.Artist);

        return artistResult;
      }),
        catchError(new ErrorInfo().parseObservableResponseError)
      );
  }

  // Update the artistList with an artist
  updateArtist(artist) {

    var idx = this.artistList.findIndex( (art:Artist) => art.Id == artist.Id );

    if (idx < 0)
      this.artistList.push(artist);
    else {
      this.artistList[idx] = artist;
    }
  }

  deleteArtist(artist:Artist):Observable<boolean> {
      let url = this.config.urls.url("artist",artist.Id);
     return this.httpClient.delete<boolean>(url,
                            this.config.requestHeaders)
                            .pipe(catchError( new ErrorInfo().parseObservableResponseError) );
  }
}

