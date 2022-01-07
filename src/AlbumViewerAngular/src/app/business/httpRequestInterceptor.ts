import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {UserInfo} from "./userInfo";

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(private userInfo:UserInfo){

    }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      console.log("interceptor: " + req.url);

      req = req.clone({
          withCredentials: true,
          setHeaders: { "Authorization": "Bearer " + this.userInfo.token }
      });

      return next.handle(req);
  }
}
