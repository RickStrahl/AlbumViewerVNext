import {Component, OnInit, Input } from '@angular/core';
import { Response} from "@angular/http";
import {Observable} from "rxjs";

/**
 *   A Bootstrap based alert display
 */
@Component({
    //moduleId: module.id,
    selector: 'error-display',
    //templateUrl: 'errorDisplay.html'
    template:  `
<div *ngIf="error.message"
     class="alert alert-{{error.icon}} alert-dismissable">
    <button *ngIf="error.dismissable" type="button" class="close"
             data-dismiss="alert" aria-hidden="true">
        <i class="fa fa-remove"></i>
    </button>

    <div *ngIf="error.header" style="font-size: 1.5em; font-weight: bold">
        <i class="fa fa-{{error.imageIcon}}" style="color: {{error.iconColor}}"></i>
        {{error.header}}
    </div>
    <i *ngIf="!error.header"
       class="fa fa-{{error.imageIcon}}"
       style="color: {{error.iconColor}}"></i>

    <strong>{{error.message}}</strong>
</div>
`
})

export class ErrorDisplay implements OnInit {
  constructor() {
  }

  /**
   * Error object that is bound to the component.
   * @type {ErrorInfo}
   */
  @Input() error: ErrorInfo = new ErrorInfo();

  ngOnInit() { }
}

export class ErrorInfo {
  constructor() {
    this.reset();
  }

  message:string;
  icon:string;
  dismissable:boolean;
  header:string;
  imageIcon:string;
  iconColor:string;

  response:Response = null;

  reset() {
    this.message = "";
    this.header = "";
    this.dismissable = false;
    this.icon = "warning";
    this.imageIcon = "warning";
    this.iconColor = "inherit";
  }

  /**
   * Low level method to set message properties
   * @param msg - the message to set to
   * @param icon? - sets the icon property (warning*)
   * @param iconColor? - sets the icon color (left as is)
   */
  show(msg:string, icon?:string, iconColor?:string) {
    this.message = msg;
    this.icon = icon ? icon : "warning";
    if (iconColor)
      this.iconColor = iconColor;

    this.fixupIcons();


    // if(this.icon == "warning")
    //   toastr.warning(this.message);
    // if(this.icon == "info")
    //   toastr.info(this.message);
    // if (this.icon == "success")
    //   toastr.success(this.message);
  }

  /**
   * Displays an error alert
   * @param msg  - Either a message string or error object with .message property
   */
  error(msg) {
    if(typeof(msg) === 'object' && msg.message)
      this.message = msg.message;
    else
      this.message = msg;

    this.show(this.message,"warning");
  }

  /**
   * DIsplays an info style alert
   * @param msg - message to display
   */
  info(msg) {
    this.show(msg,"info");
  }

  /**
   * Fixes up icons and colors based on standard icon settings
   * this method is called in internally after any of the helper
   * methods are called. You can call this when setting any icon
   * related properties manually.
   */
  fixupIcons() {
    var err = this;

    if (err.icon === "info")
      err.imageIcon = "info-circle";
    if (err.icon === "error" || err.icon === "danger" || err.icon === "warning") {
      err.imageIcon = "warning";
      err.iconColor = "firebrick";
    }
    if (err.icon === "success") {
      err.imageIcon = "check";
      err.iconColor = "green";
    }
  }

  /**
   * Parse a toPromise() .catch() clause error
   * from a response object and returns an errorInfo object
   * @param response
   * @returns {Promise<void>|Promise<T>}
   */
  parsePromiseResponseError(response) {

    if (response.hasOwnProperty("message"))
      return Promise.reject(response);
    if (response.hasOwnProperty("Message")) {
      response.message = response.Message;
      return Promise.reject(response);
    }

    let err = new ErrorInfo();
    err.response = response;
    err.message = response.statusText;

    try {
      let data = response.json();
      if (data && data.message)
        err.message = data.message;
    }
    catch(ex) {

    }

    return Promise.reject(err);
  }

  parseObservableResponseError(response):Observable<any> {
    if (response.hasOwnProperty("message"))
      return Observable.throw(response);
    if (response.hasOwnProperty("Message")) {
      response.message = response.Message;
      return Observable.throw(response);
    }

    let err = new ErrorInfo();
    err.response = response;
    err.message = response.statusText;

    try {
      let data = response.json();
      if (data && data.message)
        err.message = data.message;
    }
    catch(ex) { }

    if (!err.message)
      err.message = "Unknown server failure.";

    return Observable.throw(err);
  }
}
