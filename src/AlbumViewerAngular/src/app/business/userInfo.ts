import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConfiguration} from "./appConfiguration";

import { Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';


import {ErrorInfo, ErrorDisplay} from "../common/errorDisplay";

@Injectable({
    providedIn: 'root'
})
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
        let isAuthenticated = localStorage.getItem("av_isAuthenticated");
        this._isAuthenticated = !(!isAuthenticated || isAuthenticated === 'false');
    }


    login(username, password) {
        return this.http.post(this.config.urls.url("login"), {
            username: username,
            password: password
        },this.config.requestHeaders)
        .pipe(catchError((response) => {
                if (response.status === 401)
                    this.isAuthenticated = false;

                return new ErrorInfo().parseObservableResponseError(response);
            }));
    }

    logout() {
        return this.http.get<boolean>(this.config.urls.url("logout"))
            .pipe(
                map(
                    (success) => {
                        this.isAuthenticated = false;
                        return true;
                    }
                ));
    }

    /**
     * Calls to the server to check authentication and then
     * updates the local isAuthenticated flag
     * @returns {Observable<t>}
     */
    checkAuthentication() {
        const url = this.config.urls.url("isAuthenticated");
        console.log(url);
        return this.http.get<boolean>(url)
            .pipe(
                map((result) => {
                    this.isAuthenticated = result;
                    return result;
                }),
                catchError((response) => {                    
                    this.isAuthenticated = false;                    
                    var err = new ErrorInfo().parseObservableResponseError(response)
                    return throwError(err);
                })
            );
    }
}
