import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

import {ArtistService} from './app/artists/artistService';
import {AppConfiguration} from "./app/business/appConfiguration";
import {AlbumService} from "./app/albums/albumService";

platformBrowserDynamic()
  .bootstrapModule(AppModule,
    [
      ArtistService,
      AlbumService,
      AppConfiguration
    ])
  .catch(err => console.error(err));
