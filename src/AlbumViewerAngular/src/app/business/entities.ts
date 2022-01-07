import {Injectable, OnInit} from '@angular/core';
declare var $:any;

@Injectable()
export class Album {
    Id:number = 0;
    ArtistId:number = 0;
    Title:string = null;
    Description:string = null;
    Year:number = 0;
    ImageUrl:string = null;
    AmazonUrl:string = null;
    SpotifyUrl:string = null;

    Artist:Artist = new Artist();
    Tracks:Track[] = [];
}

@Injectable({
    providedIn: 'root'
})
export class Artist {
    Id:number = 0;
    ArtistName:string = null;
    Description:string = null;
    ImageUrl:string = null;
    AmazonUrl:string = null;
    AlbumCount:number = 0;
    Albums:Album[] = [];
}

@Injectable({
    providedIn: 'root'
})
export class ArtistResult {
    Artist: Artist = null;
    Albums: Album[] = [];
}

@Injectable({
    providedIn: 'root'
})
export class Track {
    Id:number = 0;
    AlbumId:number = 0;
    SongName:string = null;
    Length:string = null;
    Bytes:number = 0;
    UnitPrice:number = 0;
}

@Injectable({
    providedIn: 'root'
})
export class ApplicationStats {
    OsPlatform:string = null;
    AngularVersion = "Unknown"; 
    AspDotnetVersion = "Unknown";
    DataMode = "Unknown";
}
