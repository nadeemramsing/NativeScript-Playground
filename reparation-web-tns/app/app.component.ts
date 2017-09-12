import { Component, OnInit } from "@angular/core";
import { Page } from 'ui/page';

@Component({
  template: `
  <page-outlet></page-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
  }
}
