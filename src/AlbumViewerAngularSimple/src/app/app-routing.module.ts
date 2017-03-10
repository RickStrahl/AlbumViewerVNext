import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {albumListComponent} from "./albums/albumList";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {albumEditorComponent} from "./albums/albumEditor";

const routes: Routes = [
  {path: '', redirectTo: "albums", pathMatch: 'full'},
  { path: "albums", component: albumListComponent  },
  {path: 'album/edit/:id', component: albumEditorComponent },
  //{ path: "albums/:id", component: albumDisplay  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // make sure you use this for Hash Urls rather than HTML 5 routing
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppRoutingModule { }
