import {Component, OnInit, Input } from '@angular/core';
import {ArtistService} from "./artistService";
import {Artist, Album} from "../business/entities";

import {ErrorInfo} from "../common/errorDisplay";
import {AppConfiguration} from "../business/appConfiguration";
import {UserInfo} from "../business/userInfo";

declare var $: any;

@Component({
    //moduleId: module.id,
    selector: 'artist-editor',
    templateUrl: 'artistEditor.html'
})
export class ArtistEditor implements OnInit {
  @Input() artist: Artist = new Artist();
  albums: Album[] = [];
  formActive = false;
  error: ErrorInfo = new ErrorInfo();

  constructor(private artistService: ArtistService,
              private config: AppConfiguration,
              private user:UserInfo) {
    console.log("ArtistEditor ctor");
  }

  ngOnInit() {
    this.config.isSearchAllowed = false;
  }


  showEditor() {
    (<any> $("#EditModal")).modal("show");
  }



  saveArtist(artist) {
    this.artistService.saveArtist(artist)
      .subscribe( result => {
        this.artist = result.Artist;
        this.albums = result.Albums;

          (<any> $("#EditModal")).modal("hide");

        this.formActive = false;
        setTimeout(()=> {
          this.formActive = true;
        }, 0);

        this.error.info("Artist has been saved");
      },
      err => {
        this.error.error(err);

        if (err.response && err.response.status == 401) {
           window.location.hash="login";
        }
      });
  }

}
