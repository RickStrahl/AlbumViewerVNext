import { Injectable } from '@angular/core';
import { Artist, Album, Track } from '../business/entities';

import {AppConfiguration} from "../business/appConfiguration";
import {Http, RequestOptions} from "@angular/http";
import {HttpClient} from "../business/HttpClient";
import {ErrorInfo} from "../common/errorDisplay";
import {Observable} from "rxjs";


@Injectable()
export class ArtistService {
  constructor(private http: Http,private httpClient:HttpClient,
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
      return Observable.of(this.artistList) as Observable<Artist[]>;

    return this.http.get(this.config.urls.url("artists"))
      .map(response => {
        this.artistList = response.json();

        return this.artistList;
      })
      .catch( new ErrorInfo().parseObservableResponseError);
  }


  getArtist(id)  {
    return this.http.get(this.config.urls.url("artist",id),
                         this.config.requestOptions)
        .map(response => {
          var result = response.json();
          this.artist = result.Artist;
          this.artist.Albums = result.Albums;

          if(!this.artistList || this.artistList.length < 1)
            this.getArtists();

          return result;
        })
        .catch( new ErrorInfo().parseObservableResponseError );
  }

  saveArtist(artist) {

      return this.http.post(this.config.urls.url("saveArtist"),artist,
                             new RequestOptions( {withCredentials:true} ))
        .map( response => {
          var result = response.json();
          this.artist = result.Artist;
          this.artist.Albums = result.Albums;

          this.updateArtist(result.Artist);

          return result;
        })
        .catch( new ErrorInfo().parseObservableResponseError);
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

  private handleError(err) {
    console.log(err);
  }

  // private handleError(error: any): CatchSignature<any> {
  //   debugger;
  //   console.error('artistService error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
}
