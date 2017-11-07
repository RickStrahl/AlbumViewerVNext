import { Component, OnInit } from '@angular/core';
import {AppConfiguration} from "../business/appConfiguration";
import {UserInfo} from "../business/userInfo";
import {ErrorInfo} from "../common/errorDisplay";
import {HttpClient } from "@angular/common/http";
import { ApplicationStats } from '../business/entities';

declare var $:any;
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
                private http: HttpClient) {
    }

    ngOnInit() {
        this.config.isSearchAllowed = false;

        if (this.config.applicationStats.OsPlatform == null) {
            this.http.get<ApplicationStats>(this.config.urls.url("applicationStats"))
				.subscribe(stats => {
                        this.config.applicationStats = stats;
                        
                        var $ngv = $("[ng-version]");
                        if ($ngv.length > 0)
                            this.config.applicationStats.AngularVersion = $ngv.attr("ng-version");
                    
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

        this.http.get<boolean>(this.config.urls.url("reloadData") )
			.subscribe(
                success => {                    
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
