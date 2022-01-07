import {Component, OnInit, ElementRef} from '@angular/core';
import {Album, Artist} from "../business/entities";
import {AlbumService} from "./albumService";
import {Router, ActivatedRoute} from "@angular/router";
import {ErrorInfo} from "../common/errorDisplay";
import {AppConfiguration} from "../business/appConfiguration";
import { UserInfo } from "../business/userInfo";

import {Observable, of, Subscriber} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, catchError, mergeMap} from 'rxjs/operators';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

//declare var $:any ;
declare var $:any;
declare var toastr:any;
declare var window:any;

import { slideInLeft, slideIn } from "../common/animations";
import {ToastrService} from "ngx-toastr";



@Component({
    selector: 'album-editor',
    templateUrl: 'albumEditor.html',
    animations: [ slideIn ]
})
export class AlbumEditor implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService,
              private config:AppConfiguration,
              private user: UserInfo,
              private toastr:ToastrService
         ) {  }

  album: Album = new Album();
  error: ErrorInfo = new ErrorInfo();
  loaded =  false;
  aniFrame = 'in';

  searchTerm: string;
  searchResults:Observable<string[]>;

  public searchData: any  = {};

  ngOnInit() {
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
      .subscribe(result => {
          this.album = result;
          this.loaded = true;
        },
        err => {
          this.error.error(err);
        });

      this.configureTypeAhead();
  }

  configureTypeAhead() {
      // https://valor-software.com/ngx-bootstrap/#/typeahead
      // set up the observable for type ahead
      this.searchResults = new Observable((observer: Subscriber<string>) => {
          // search term comes from artist name typed
          var searchTerm  = this.album.Artist.ArtistName;

          // Min Lookup for 2 characters - list is small so allow
          // if (!searchTerm || searchTerm.length < 3)
          //     return;

          observer.next(searchTerm);
      })
      .pipe(
          // retrieve from service and map result to observable
          mergeMap((searchTerm: string) =>this.albumService.artistLookup(searchTerm))
      );
  }

  saveAlbum(album) {
    return this.albumService.saveAlbum(album)
      .subscribe((album: Album) => {
          var msg = album.Title + " has been saved.";
          this.error.info(msg);
          this.toastr.success(msg);
          window.document.getElementById("MainView").scrollTop = 0;

          setTimeout(()=> {
            this.router.navigate(["/album", album.Id]);
          }, 1500)
        },
        err => {
          let msg = `Unable to save album: ${err.message}`;
          this.error.error(msg);
          this.toastr.error(msg);

          if (err.response && err.response.status == 401) {
            this.user.isAuthenticated = false;
            this.router.navigate(["/login"]);
          }
        });
    };


    /**
     * Returns a list of Artist Lookup items and pipes them
     * into the look up list. Result format is:
     * [ {name: "band", id: "band"}]
     *
     * Called from ngb-TypeAhead with the search term observable
     */
    search = (text$: Observable<string>) => {
      return text$.pipe(
          debounceTime(200),
          distinctUntilChanged(),
          // switchMap allows returning an observable rather than the final array instance
          switchMap( (searchText) =>  this.albumService.artistLookup(searchText) ),
          catchError(new ErrorInfo().parseObservableResponseError)
      );
    }

    changeTypeaheadLoading(e: boolean): void {

    }
    /**
     * Used to format the result data from the lookup into the
     * display and list values
     * @param value For
     */
    resultFormatBandListValue(value: any) {
      return value.name;
    }
    inputFormatBandListValue(value: any)   {
        if(value.name)
            return value.name;
      return value;
    }
}
