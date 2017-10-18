import {Component} from '@angular/core';
import {UserInfo} from "./business/userInfo";

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

        // re-check infrequently - once every 5 minutes
        setInterval( ()=> {
            this.user.checkAuthentication()
                .subscribe();
        },300000)
    }
}
