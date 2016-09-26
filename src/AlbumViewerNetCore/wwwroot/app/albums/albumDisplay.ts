import {Component, OnInit, Input, style, animate, state, transition, trigger, OnDestroy} from '@angular/core';
import {Artist, Album} from "../business/entities";
import {AlbumService} from "./albumService";
import {ActivatedRoute, Router} from "@angular/router";
import {ErrorInfo} from "../common/errorDisplay";
import {AppConfiguration} from "../business/appConfiguration";
import {slideIn, slideInLeft} from "../common/animations";

      @Component({
          selector: 'album-display',
          templateUrl: './albumDisplay.html',
          animations: [ slideIn ]
      })
      export class AlbumDisplay implements OnInit {

  @Input() album:Album = new Album();
  error = new ErrorInfo();

  aniFrame = 'in';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private config: AppConfiguration,
              private albumService: AlbumService) {
  }

  ngOnInit() {
    this.config.isSearchAllowed = false;
    this.config.activeTab = "albums";
    this.aniFrame = 'in';

    //console.log("AlbumDisplay");
    if(!this.album.Title) {
      var id = this.route.snapshot.params["id"];
      if (id < 1)
        return;

      this.albumService.getAlbum(id)
        .then((result) => {
          this.album = result;
        })
        .catch((err) => this.error.error(err));
    }
  }



  ngOnDestroy() {
    this.aniFrame = 'out';
    console.log("ngDestroy")
  }

  deleteAlbum(album) {
    this.albumService.deleteAlbum(album)
      .then(()=>{
        this.error.info("Album '"  + album.Title + "' has been deleted.");
        setTimeout(()=> this.router.navigate(["/albums"]),1500);
      })
      .catch( (err)=> this.error.error(err));
  }

}
