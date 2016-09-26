import { Component, OnInit, ViewChild} from '@angular/core';
import { ArtistService} from "./artistService";
import { Artist, Album} from "../business/entities";
import { AppConfiguration} from "../business/appConfiguration";
import { ActivatedRoute, Router} from "@angular/router";

import {UserInfo} from "../business/userInfo";
import {ErrorInfo} from "../common/errorDisplay";
import { ArtistEditor } from "./artistEditor";
import {slideIn} from "../common/animations";



@Component({
    //moduleId: module.id,
    selector: 'artist-display',
    templateUrl: './artistDisplay.html',
  animations: [ slideIn ]
})
export class ArtistDisplay implements OnInit {
  // reference a child editor component
  @ViewChild(ArtistEditor) editor:ArtistEditor;

  artist: Artist = new Artist();
  albums: Album[] = [];
  artistId = null;
  formActive = true;

  error:ErrorInfo = new ErrorInfo();

  constructor(private route: ActivatedRoute,
              private artistService: ArtistService,
              private config: AppConfiguration,
              private router: Router,
              private user: UserInfo) {
  }


  ngOnInit() {
    this.config.isSearchAllowed = false;

    var id = this.route.snapshot.params["id"];
    if (id < 1)
      return;

    this.artistService.getArtist(id)
      .subscribe(
        result => {
          this.artist = result.Artist;
          this.albums = result.Albums;
        },
        (err) => {
          this.error.error(err);
        });
  }

  editArtist() {
    if (!this.user.isAuthenticated) {
      window.location.hash = "login";
      return;
    }

    this.editor.showEditor();
  };

  albumClick(album) {
    //window.location.hash = "album/" + album.Id;
    this.router.navigate(['/album', album.Id]);
  }

  deleteArtist() {

  }

  addAlbum() {

  }

  deleteAlbum() {

  }
}
