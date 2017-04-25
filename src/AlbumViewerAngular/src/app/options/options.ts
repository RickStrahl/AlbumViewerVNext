import { Component, OnInit } from '@angular/core';
import {AppConfiguration} from "../business/appConfiguration";
import {UserInfo} from "../business/userInfo";
import {ErrorInfo} from "../common/errorDisplay";
import {Http} from "@angular/http";

declare var toastr:any;
declare var window: any;
@Component({
    selector: 'options',
    templateUrl: 'options.html'
})
export class OptionsComponent implements OnInit {
    error: ErrorInfo = new ErrorInfo();

    constructor(public config: AppConfiguration,
                public user: UserInfo,
                private http: Http) {
    }

    ngOnInit() {
        this.config.isSearchAllowed = false;

        if (this.config.applicationStats.OsPlatform == null) {
            this.http.get(this.config.urls.url("applicationStats"))
				.subscribe(response => {
						this.config.applicationStats = response.json();
                },response=> {
					let obsErr = new ErrorInfo().parseObservableResponseError(response);
					let msg = (<any> obsErr).error.message;
					toastr.error("Get Application Stats failed: " + msg);
				});
        }
    }

    reloadData() {
        if (!this.user.isAuthenticated)
            window.location.hash = "login";

        this.http.get(this.config.urls.url("reloadData"), {withCredentials: true})
			.subscribe(
                response => {
                    let success = response.json();
                    if (success)
                        toastr.success("Data has been reloaded.");
                    else
                        toastr.error("Unable to reload data");
                }, response => {
                    let obsErr = new ErrorInfo().parseObservableResponseError(response);
                    let msg = (<any> obsErr).error.message;
                    toastr.error("Data reload failed: " + msg);

                    return obsErr;
                });
    }
}
