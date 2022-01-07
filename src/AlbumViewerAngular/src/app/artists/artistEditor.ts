import {Component, OnInit, Input, ViewChild, ElementRef, TemplateRef} from '@angular/core';
import {ArtistService} from "./artistService";
import {Artist, Album} from "../business/entities";

import {ErrorInfo} from "../common/errorDisplay";
import {AppConfiguration} from "../business/appConfiguration";
import {UserInfo} from "../business/userInfo";

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap/modal';

//import {NgbModal, ModalDismissReasons} from 'ngx-bootstrap/utils';

declare var $: any;

@Component({
    //moduleId: module.id,
    selector: 'artist-editor',
    templateUrl: 'artistEditor.html'
})
export class ArtistEditor implements OnInit {
  @Input() artist: Artist = new Artist();
  @ViewChild('ModalEditorTemplate') public modalEditorTemplate;
  @ViewChild('ArtistName') artistName:ElementRef;

  albums: Album[] = [];
  formActive = false;
  error: ErrorInfo = new ErrorInfo();

  // keep track of the modal as a reference so we can close it
  modalRef: BsModalRef | null;

  constructor(private artistService: ArtistService,
              private config: AppConfiguration,
              private user:UserInfo,
              private modalService: BsModalService) {
  }

  ngOnInit() {
    this.config.isSearchAllowed = false;
  }

  open() {
     this.modalRef = this.modalService.show(this.modalEditorTemplate,
         {ariaLabelledBy: 'modal-basic-title'})
  }
  close()  {
    this.modalRef.hide();
    this.modalRef = null;
  }

  saveArtist(artist) {
    this.artistService.saveArtist(artist)
      .subscribe( result => {
        this.artist = result.Artist;
        this.albums = result.Albums;

        this.close();

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
