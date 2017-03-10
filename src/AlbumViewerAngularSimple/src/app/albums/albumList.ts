import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'album-list',
    templateUrl: 'albumList.html'
})
export class albumListComponent  {
    constructor(private http:Http) {
    	this.getAlbums();
	}

    albumList = [];
    errorMessage:string = null;
    busy = false;

    //baseUrl = "http://samples.west-wind.com/AlbumViewerCore/api/";
	baseUrl = "http://localhost:5000/api/";

	getAlbums() {
		this.busy = true;
		this.albumList = [];

		var url = this.baseUrl + "albums";
		console.log(url);
		this.http.get(url)
			.subscribe( (response)=> {
				this.albumList = response.json();
				this.busy = false;
			},(error)=> {
				this.errorMessage = "Request failed.";
			});
	}



}


