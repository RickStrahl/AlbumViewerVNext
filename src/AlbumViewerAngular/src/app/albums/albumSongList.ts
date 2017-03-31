import {Component, OnInit, Input} from '@angular/core';
import {Track} from "../business/entities";
import {AlbumService} from "./albumService";

@Component({
    //moduleId: module.id,
    selector: 'album-songlist',
    templateUrl: 'albumSongList.html'
})
export class AlbumSongList implements OnInit {
  constructor(private albumService:AlbumService) {
  }

  ngOnInit() {
  }

  @Input() tracks: Track[] = [];
  @Input() allowEditing: boolean = false;
  isSongVisible = false;
  track:Track = new Track();

  addTrack(track){
      this.track = new Track();
      this.isSongVisible = true;
  }
  cancelTrack() {
      this.track = new Track();
      this.isSongVisible = false;
  }

  saveTrack(track){
      this.albumService.addSong(track);
      this.isSongVisible = false;
  }

  removeTrack(track: Track) {
      this.albumService.removeSong(track);
  }

}
