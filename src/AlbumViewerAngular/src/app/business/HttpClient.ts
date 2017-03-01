import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, Response}  from "@angular/http";
import {UserInfo} from "./userInfo";
import {Observable} from "rxjs";

/**
 * Wrapper around the Http provider to allow customizing HTTP requests
 */
@Injectable()
export class HttpClient {

  constructor(private http:Http, private user:UserInfo) {
  }

  get(url:string, requestOptions?:RequestOptionsArgs)  {
    this.ensureOptions(!requestOptions);
    return this.http
      .get(url, requestOptions)
      .catch( response => {
         if (response.status == 401)
           this.user.isAuthenticated = false;

         return Observable.throw(response);
      })
  }

  post(url:string, data:any, requestOptions:RequestOptionsArgs) {
    this.ensureOptions(!requestOptions)

    return this.http
      .post(url, data, requestOptions)
      .catch( response => {
        if (response.status == 401)
          this.user.isAuthenticated = false;

        return Observable.throw(response);
      });
  }

  put(url:string, data:any, requestOptions:RequestOptionsArgs) {
    //this.ensureOptions(!requestOptions);

    return this.http
      .put(url, data, requestOptions)
      .catch(response => {
        if (response.status == 401)
          this.user.isAuthenticated = false;

        return Observable.throw(response);
      });
  }

  delete(url:string, requestOptions:RequestOptionsArgs) {

    this.ensureOptions (!requestOptions);

    return this.http.delete(url,requestOptions)
      .catch(response => {
        if (response.status == 401)
          this.user.isAuthenticated = false;

        return Observable.throw(response);
      });
  }


  ensureOptions(requestOptions:RequestOptionsArgs):RequestOptionsArgs {


    // if (!requestOptions)
    //   requestOptions = <RequestOptionsArgs> {
    //     withCredentials: true
    //   };
    // else
    //   requestOptions.withCredentials = true;

    return requestOptions;
  }

}
