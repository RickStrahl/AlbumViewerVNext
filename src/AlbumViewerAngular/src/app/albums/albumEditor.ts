import {Component, OnInit, ElementRef} from '@angular/core';
import {Album} from "../business/entities";
import {AlbumService} from "./albumService";
import {Router, ActivatedRoute} from "@angular/router";
import {ErrorInfo} from "../common/errorDisplay";
import {AppConfiguration} from "../business/appConfiguration";
import {UserInfo} from "../business/userInfo";

//declare var $:any ;
declare var $:any;
declare var toastr:any;
declare var window:any;

import {slideInLeft, slideIn} from "../common/animations";

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
              private user:UserInfo) {
  }

  album: Album = new Album();
  error: ErrorInfo = new ErrorInfo();
  loaded =  false;
  aniFrame = 'in';

  ngOnInit() {
    if (!this.user.isAuthenticated) {
      this.router.navigate(['/login']);
      return;
    }

    this.config.isSearchAllowed = false;
    this.bandTypeAhead();


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
          var msg = album.Title + " has been saved."
          this.error.info(msg);
          toastr.success(msg);
          window.document.getElementById("MainView").scrollTop = 0;

          setTimeout(function () {
            this.router.navigate(["/album", album.Id]);
          }, 1500)
        },
        err => {
          let msg = `Unable to save album: ${err.message}`;
          this.error.error(msg);
          toastr.error(msg);

          if (err.response && err.response.status == 401) {
            this.user.isAuthenticated = false;
            this.router.navigate(["login"]);
          }
        });

  };

  bandTypeAhead() {
    var $input:any = $("#BandName");
    var config = this.config;

    // delay slightly to ensure that the
    // typeahead component is loaded when
    // doing a full browser refresh
    setTimeout( function () {
        $input.typeahead({
            source: [],
            autoselect: true,
            minLength: 0
        });

        $input.keyup( function() {
          let s = $(this).val();
          let url = config.urls.url("artistLookup") + s;

          $.getJSON(url,
              (data) => {
                  $input.data('typeahead').source = data;
              });
        });

    },1000);

    }
}
