import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../business/userInfo";
import {ErrorInfo} from "./errorDisplay";

declare var toastr:any;
declare var window: any;

import {ActivatedRoute} from "@angular/router";
//declare var toastr:any;

@Component({
    //moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent implements OnInit {
    username:string = "";
    password:string = "";
    error: ErrorInfo = new ErrorInfo();

    constructor(public user:UserInfo,private route:ActivatedRoute)
    {  }

    ngOnInit() {

      if (this.route.snapshot.url[0].path == "logout")
        this.logout();
    }

    login() {
      this.user.login(this.username,this.password)
        .subscribe(() => {
            this.user.isAuthenticated = true;
            toastr.success("You are logged in.");
            window.location.hash = "albums";
        },
        (err)=> {
          this.error.error(err);
          this.password="";
          toastr.warning("Login failed: " + err.message);
        });
    }

    logout() {
        this.user.logout()
          .subscribe((success) => {
            toastr.success("Logged out.");
            window.location.hash = "albums";
          });
    }

}
