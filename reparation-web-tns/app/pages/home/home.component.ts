import { Component, OnInit } from "@angular/core";

@Component({
    selector: "home",
    template: `
    <Label text="This is HomeComponent."></Label>
    `
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }

}