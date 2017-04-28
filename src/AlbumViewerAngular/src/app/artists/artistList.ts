import {Component, OnInit} from '@angular/core';
import { Artist } from '../business/entities';
import {AppConfiguration} from "../business/appConfiguration";
import { ArtistService } from './artistService';
import {Router} from "@angular/router";
import {ErrorInfo} from "../common/errorDisplay";

import {slideIn, slideInLeft} from "../common/animations";

declare var $:any;

@Component({
    selector: 'artist-list',
    templateUrl: 'artistList.html',
    animations: [ slideInLeft ]
})
export class ArtistList implements OnInit {
  constructor(private router:Router,
              private artistService: ArtistService,
              private config: AppConfiguration) {

  }

  artistList: Artist[] = [];
  error:ErrorInfo = new ErrorInfo();

  ngOnInit() {
    this.getArtists();

    this.config.searchText = "";
    this.config.isSearchAllowed = true;
    this.config.activeTab = "artists";

    setTimeout(() => {
      $("#SearchBox").focus();
    },200);
  }

  get filteredArtistList() {
    if(this.config.searchText && this.config.searchText.length > 1) {
      var lsearchText = this.config.searchText.toLowerCase();
      return this.artistList.filter((a) =>
        a.ArtistName.toLowerCase().includes(lsearchText)
      );
    }
    return this.artistList;
  }




  getArtists() {
    this.artistService.getArtists()
      .subscribe( artists => {
          this.artistList = artists;
        
          setTimeout(() => {
            $("#MainView").scrollTop(this.artistService.listScrollPos);
            this.artistService.listScrollPos = 0;
          }, 20);
          return this.artistList;
        },
        err => { this.error.error(err) }
      );
  }

  artistClick(artist:Artist) {
    // Manual Navigation
    this.router.navigate(['/artist', artist.Id]);
    this.artistService.listScrollPos = $("#MainView").scrollTop();
  }
}
