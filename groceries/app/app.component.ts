import { Component, OnInit } from "@angular/core";
import { Page } from 'ui/page';

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent implements OnInit {

  constructor(private page: Page) {

  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    //Does not work here as well => Do not work in this version of NativeScript or do not work in Genymotion's emulator
  }
}