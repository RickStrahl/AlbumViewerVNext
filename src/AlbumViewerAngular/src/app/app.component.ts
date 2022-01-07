import {Component} from '@angular/core';
import {UserInfo} from "./business/userInfo";

declare var toastr:any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Test Application';

    constructor(private user: UserInfo) {
        // check authentication when the page is loaded
        // fire and forget - service updates the auth
        // status model
        this.user.checkAuthentication()
            .subscribe();

        // re-check infrequently - once every 2 minutes
        setInterval( ()=> {
            var previousStatus = user.isAuthenticated;
            this.user.checkAuthentication()
                .subscribe((isAuthenticated)=> {
                    if (!isAuthenticated && previousStatus)
                        toastr.warning("Your session has expired. Please log in again.");
                });
        },120000)
    }
}
