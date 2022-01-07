﻿import {Component, OnInit } from '@angular/core';
import { AlbumService } from './albumService';
import { Album } from '../business/entities';

import {AppConfiguration} from "../business/appConfiguration";
import {Router} from "@angular/router";
import {ErrorInfo} from "../common/errorDisplay";
import {slideIn, slideInLeft} from "../common/animations";
import { UserInfo } from "../business/userInfo";

declare var $:any;

@Component({
  selector: 'album-list',
  templateUrl: './albumList.html',
  animations: [ slideIn ]
})
export class AlbumList implements OnInit {

  constructor(private router:Router,
              private albumService: AlbumService,
              private config: AppConfiguration) {
  }

  albumList: Album[] = [];
  busy: boolean = true;
  error:ErrorInfo = new ErrorInfo();


  ngOnInit() {
    this.getAlbums();

    this.config.isSearchAllowed = true;
    this.config.activeTab = "albums";
    this.config.searchText = "";

    // ??? Non-DOM way to do this?
    setTimeout(() => {
      $("#SearchBox").focus();
    },200);
  }

  get filteredAlbumList() {
    if (this.config.searchText && this.config.searchText.length > 1) {
      var lsearchText = this.config.searchText.toLowerCase();

      return this.albumList.filter((a) => {
          const title = a.Title;
          const artist = a.Artist;
          let artistName = null;
          if (artist)
              artistName = artist.ArtistName;

          return (title && title.toLowerCase().includes(lsearchText)) ||
              (artistName && artistName.toLowerCase().includes(lsearchText));
      });
    }

    return this.albumList;
  }

  getAlbums() {
    this.busy = true;
    this.albumList = [];
    this.albumService.getAlbums()
      .subscribe(albums => {
        this.albumList = albums;
        this.busy = false;

        // reset to last scroll position of the list
        setTimeout(()=> $("#MainView").scrollTop(this.albumService.listScrollPos), 100);
      }, err => {
        if (!err.message)
          this.error.error("Unable to load albums right now. Most likely the server is not responding.");
        else
          this.error.error(err);
        this.busy = false;
      });
  }

  albumClick(album: Album) {
    // save scroll position before navigation
    this.albumService.listScrollPos = $("#MainView").scrollTop();

    this.router.navigate(['/album', album.Id]);
  }


  addAlbum() {

  }

  deleteAlbum(album: Album) {

  }
}
