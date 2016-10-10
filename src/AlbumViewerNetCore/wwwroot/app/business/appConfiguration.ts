import { Injectable } from '@angular/core';

declare var toastr:any;

import {RequestOptions} from "@angular/http";
declare var toastr: any;

@Injectable()
export class AppConfiguration {
      constructor(){
          this.setToastrOptions();
          console.log("AppConfiguration ctor");

          if(location.port && (location.port == "3000"))
            this.urls.baseUrl = "http://localhost:5000/"; // kestrel
            //this.urls.baseUrl = "http://localhost:26448/"; // iis Express
            //this.urls.baseUrl = "http://localhost/albumviewer/"; // iis
            //this.urls.baseUrl = "https://albumviewer2swf.west-wind.com/";  // online
      }

      // top level search text
      searchText = "";
      activeTab = "albums";
      isSearchAllowed = true;

      urls = {
        baseUrl: "./",
        //baseUrl: "http://localhost/albumviewer/",
        //baseUrl: "http://localhost:5000/",
        //baseUrl: "https://albumviewer2swf.west-wind.com/",
        albums: "api/albums",
        album: "api/album",
        artists: "api/artists",
        artist: "api/artist",
        artistLookup: "api/artistlookup?search=",
        saveArtist: "api/artist",
        login: "api/login", //"api/login",
        logout: "api/logout",
        isAuthenticated: "api/isAuthenticated",
        reloadData: "api/reloadData",
        url: (name,parm1?,parm2?,parm3?) => {
          var url = this.urls.baseUrl + this.urls[name];
          if (parm1)
            url += "/" + parm1;
          if (parm2)
            url += "/" + parm2;
          if (parm3)
            url += "/" + parm3;

          return url;
        }
      };


      setToastrOptions() {
        toastr.options.closeButton = true;
        toastr.options.positionClass = "toast-bottom-right";
      }

  /**
   * Http Request options to for requests
   * @type {RequestOptions}
   */
  requestOptions =  new RequestOptions({  withCredentials: true });
}

