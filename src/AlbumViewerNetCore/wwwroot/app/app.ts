import {Component, OnInit} from '@angular/core';
import {UserInfo} from "./business/userInfo";
import {AppConfiguration} from "./business/appConfiguration";

@Component({
  selector   : 'app',
  templateUrl: './app.html'
})
export class AppComponent {
  constructor(private user:UserInfo){
    this.user.checkAuthentication()
      .subscribe();
  }

}
