import {Injectable, InjectionToken} from '@angular/core';

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

@Injectable()
export class Artist {
    Id:number = 0;
    ArtistName:string = null;
    Description:string = null;
    ImageUrl:string = null;
    AmazonUrl:string = null;
    AlbumCount:number = 0;
    Albums:Album[] = [];
}


@Injectable()
export class Track {
    Id:number = 0;
    AlbumId:number = 0;
    SongName:string = null;
    Length:string = null;
    Bytes:number = 0;
    UnitPrice:number = 0;
}

@Injectable()
export class ApplicationStats {
    OsPlatform:string = null;
}