import { Component, OnInit } from '@angular/core';
import {AppConfiguration} from "../business/appConfiguration";

@Component({
    //moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'appHeader.html'
})
export class AppHeader implements OnInit {
    constructor(public config:AppConfiguration) {
    }

    ngOnInit() {
     }

}
