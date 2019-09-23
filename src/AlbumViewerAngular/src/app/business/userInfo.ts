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
    expires = new Date();
    requestedUrl = "";

    private _isAuthenticated = false;
    set isAuthenticated(val) {
        this._isAuthenticated = val || false;
        // cache authentication
        if (this._isAuthenticated)
            localStorage.setItem('av_token', this._token);
        else
            localStorage.removeItem('av_token');
    }
    get isAuthenticated() {
        return this._isAuthenticated;
    };


    private _token = "";
    get token() { 
        return this._token
    }
    set token(value) {
        this._token = value;
        localStorage.setItem('av_token',value);
    }


    constructor(private http: HttpClient,
                private config: AppConfiguration) {
        // initialize isAuthenticate from localstorage
        let token  = localStorage.getItem("av_token");
        if(token)
        {
            this._isAuthenticated = true;
            this.token = token; 
        }
        else{
            this._isAuthenticated = false;
            this.token = null;
        }
    }

    /*
        Cookie Auth
     */
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

    /*
        Token Auth
    */
    authenticate(username, password) {
        return this.http.post<TokenInfo>(this.config.urls.url("authenticate"), {
            username: username,
            password: password
        },this.config.requestHeaders)
            .pipe(
                map( (tokenInfo) => {
                    this.token = tokenInfo.token;
                    this.expires = new Date(tokenInfo.expires);
                    return true;
                }),
                catchError((response) => {
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

export class TokenInfo {
    token: "";
    expires: Date;
    displayName: "";

    constructor()
    {
        this.expires = new Date();
    }
}
