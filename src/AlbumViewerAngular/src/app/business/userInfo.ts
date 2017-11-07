import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfiguration} from "./appConfiguration";

import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import {ErrorInfo} from "../common/errorDisplay";

@Injectable()
export class UserInfo {

    isAdmin = false;
    userName: string = null;
    sessionStarted = new Date();

    private _isAuthenticated = false;
    set isAuthenticated(val) {
        this._isAuthenticated = val || false;
        // cache authentication
        localStorage.setItem('av_isAuthenticated', this._isAuthenticated.toString());
    }

    get isAuthenticated() {
        return this._isAuthenticated;
    };

    constructor(private http: HttpClient,
                private config: AppConfiguration) {
        // initialize isAuthenticate from localstorage
        var isAuthenticated = localStorage.getItem("av_isAuthenticated");
        this._isAuthenticated = !isAuthenticated || isAuthenticated === 'false' ? false : true;
    }


    login(username, password) {
        return this.http.post(this.config.urls.url("login"), {
            username: username,
            password: password
        })
            .catch((response) => {
                if (response.status === 401)
                    this.isAuthenticated = false;

                return new ErrorInfo().parseObservableResponseError(response);
            });
    }

    logout() {
        return this.http.get<boolean>(this.config.urls.url("logout"))
            .map(
                (success) => {
                    this.isAuthenticated = false;
                    return true;
                }
            );
    }

    /**
     * Calls to the server to check authentication and then
     * updates the local isAuthenticated flag
     * @returns {Observable<t>}
     */
    checkAuthentication() {
        var url = this.config.urls.url("isAuthenticated");
        console.log(url);
        return this.http.get<boolean>(url)            
            .map((result) => {                
                this.isAuthenticated = result;
                return result;
            })
            .catch((response) => {                
                this.isAuthenticated = false;
                return Observable.throw(response);
            });
    }
}
