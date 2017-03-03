import { Component } from '@angular/core';
import {UserInfo} from "./business/userInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Application';

  constructor(private user:UserInfo){
    this.user.checkAuthentication()
		.subscribe();
  }
}
