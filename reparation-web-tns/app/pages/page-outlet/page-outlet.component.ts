import { Component, OnInit } from "@angular/core";

@Component({
    selector: "page-outlet",
    template: `
    <page-router-outlet></page-router-outlet>
    `
    /* 
    <page-router-outlet> replaces the *entire* screen 
    <router-outlet> only replaces a portion?

    From official docs:
    page-router-outlet uses pages to navigate. The loaded component is shown in a new page.
    router-outlet replaces the content of the outlet with different component. It is the default outlet that comes from Angular.
    */
})

export class PageOutletComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }

}