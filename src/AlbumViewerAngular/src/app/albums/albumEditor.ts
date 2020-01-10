import {Component, OnInit, ElementRef} from '@angular/core';
import {Album} from "../business/entities";
import {AlbumService} from "./albumService";
import {Router, ActivatedRoute} from "@angular/router";
import {ErrorInfo} from "../common/errorDisplay";
import {AppConfiguration} from "../business/appConfiguration";
import { UserInfo } from "../business/userInfo";

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError  } from 'rxjs/operators';

//declare var $:any ;
declare var $:any;
declare var toastr:any;
declare var window:any;

import { slideInLeft, slideIn } from "../common/animations";



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
         ) {  }

  album: Album = new Album();
  error: ErrorInfo = new ErrorInfo();
  loaded =  false;
  aniFrame = 'in';

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
  }

  
  saveAlbum(album) {
    return this.albumService.saveAlbum(album)
      .subscribe((album: Album) => {
          var msg = album.Title + " has been saved.";
          this.error.info(msg);
          toastr.success(msg);
          window.document.getElementById("MainView").scrollTop = 0;

          setTimeout(()=> {
            this.router.navigate(["/album", album.Id]);
          }, 1500)
        },
        err => {
          let msg = `Unable to save album: ${err.message}`;
          this.error.error(msg);
          toastr.error(msg);

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
