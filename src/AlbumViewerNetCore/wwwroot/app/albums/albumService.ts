import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http'
import { Album, Artist, Track } from '../business/entities';
import {AppConfiguration} from "../business/appConfiguration";
import 'rxjs/add/operator/toPromise';
import {ErrorInfo} from "../common/errorDisplay";
import {Observable} from "rxjs";


@Injectable()
export class AlbumService {
  constructor(private http: Http,
              private config:AppConfiguration) {
  }

  albumList: Album[] = [];
  album: Album = new Album();

  artistList: Artist[] = [];
  listScrollPos = 0;

  getAlbums(force?:boolean): Observable<Album[]> {
    //var albums = this.albums;
    // if (force !== true && this.albumList && this.albumList.length > 0)
    //   return Promise.resolve(this.albumList);

      return this.http.get(this.config.urls.url("albums"))
        .map((response)=> {
          this.albumList = response.json();
          return this.albumList;
            })
        .catch( new ErrorInfo().parseObservableResponseError );
  }

  getAlbum(id):Promise<Album> {
      return this.http.get(this.config.urls.url("album",id))
        .toPromise()
        .then( (response) => {
            this.album = response.json();

            if (!this.albumList || this.albumList.length < 1)
              this.getAlbums(); // load up albums in background

            return this.album;
        })
        .catch( new ErrorInfo().parsePromiseResponseError );
  }

  saveAlbum(album):Promise<any> {
    return this.http.post(this.config.urls.url("album"),
                          album,
                          new RequestOptions( {withCredentials:true}) )
       .toPromise()
       .then( response => {
          this.album = response.json();

          // explicitly update the list with the updated data
          this.updateAlbum(this.album);

          return this.album;
        })
      .catch( new ErrorInfo().parsePromiseResponseError );
  }

  deleteAlbum(album:Album):Observable<any> {
    return this.http.delete(this.config.urls.url("album",album.Id),
                            this.config.requestOptions)
      .map((response)=> {
        let result = response.json();
        if (result)
          this.removeAlbum(album);
      })
      .catch( new ErrorInfo().parsePromiseResponseError );
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
      this.albumList.sort((a:Album,b:Album)=> {
        var aTitle = a.Title.toLocaleLowerCase();
        var bTitle = b.Title.toLocaleLowerCase();
        if(aTitle > bTitle)
          return 1;
        if (aTitle <bTitle)
          return -1;
        return 0;
      })
    }

    this.albumList = this.albumList.filter((a)=> a.Id != 0);
  }

  removeAlbum(album){
    this.albumList = this.albumList.filter( (a)=> a.Id != album.Id );
  }
  addSong(track:Track) {
    this.album.Tracks.push(track);
  }

  removeSong(track:Track) {
    var idx = this.album.Tracks.findIndex((t) => track.Id == t.Id);
    if (idx > -1)
      this.album.Tracks.splice(idx, 1);
  }


}
