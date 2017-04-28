import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../business/userInfo";
import {ErrorInfo} from "./errorDisplay";

declare var toastr:any;

import {ActivatedRoute, Router} from "@angular/router";

@Component({
    //moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent implements OnInit {
    username:string = "";
    password:string = "";
    error: ErrorInfo = new ErrorInfo();

    constructor(public user:UserInfo,
                private route:ActivatedRoute,
                private router: Router)
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
            this.router.navigate(["/albums"]);
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
            this.router.navigate(["/albums"]);
          });
    }

}
