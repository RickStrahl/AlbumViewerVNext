import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {Album} from "../business/entities";

@Component({
    selector: 'album-editor',
    templateUrl: 'albumEditor.html'
})
export class albumEditorComponent implements OnInit {
    constructor(private route:ActivatedRoute,
                private http:Http) {
    }

    album:Album = new Album();
    errorMessage = "";
	baseUrl = "http://localhost:5000/api/";

    ngOnInit() {
	    var id = this.route.snapshot.params["id"];
	    if (id < 1)
		    return;

	    this.loadAlbum(id);
    }

    loadAlbum(id) {
    	this.errorMessage = "";
		this.http
			.get(`${this.baseUrl}album/${id}`)
			.subscribe(response => {
				this.album = response.json();
				console.log(this.album);
			}, response => {
				this.errorMessage = "Unable to load album.";
			});
    }

	saveAlbum(album) {
		return this.http
			.post(`${this.baseUrl}album`,album)
			.subscribe(response => {
					this.album = response.json();
					this.errorMessage = album.Title + " has been saved."
				},
				response => {
					this.errorMessage = "Unable to save album.";
				});
	};
}

