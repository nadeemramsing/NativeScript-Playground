import { Component, OnInit } from "@angular/core";

@Component({
    selector: "outlet",
    template: `
    <page-router-outlet></page-router-outlet>
    `
    /* 
    <page-router-outlet> replaces the *entire* screen 
    <router-outlet> only replaces a portion?
    */
})

export class OutletComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }

}