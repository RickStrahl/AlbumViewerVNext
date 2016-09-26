import {Routes} from '@angular/router';

import { AlbumList } from './albums/albumList';
import { AlbumDisplay} from './albums/albumDisplay';
import {AlbumEditor } from './albums/albumEditor';
 import { ArtistList } from './artists/artistList';
import { ArtistDisplay} from "./artists/artistDisplay";
import {OptionsComponent} from "./Options/options";
import {LoginComponent} from "./common/login";
import {AboutComponent} from "./options/about";


export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'albums', pathMatch: 'full'},
  {path: 'albums', component: AlbumList },
  {path: 'album/:id', component: AlbumDisplay },
  {path: 'album/edit/:id', component: AlbumEditor },
  {path: 'artists', component: ArtistList },
  {path: 'artist/:id', component: ArtistDisplay },
  {path: 'options', component: OptionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'about', component: AboutComponent}

];

