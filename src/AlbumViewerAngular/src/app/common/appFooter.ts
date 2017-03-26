import { Component, OnInit } from '@angular/core';
import {AppConfiguration} from "../business/appConfiguration";

@Component({
    //moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'appFooter.html'
})
export class AppFooter implements OnInit {
    constructor(public config:AppConfiguration) {

    }

    ngOnInit() {

    }

}
