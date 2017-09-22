import { Component, OnInit } from "@angular/core";
import { Page } from 'ui/page';

import { UserService } from "./shared/user.service";
import { HeaderService } from "./shared/headers.service";

/* Cause of "Can't resolve all parameters for AppComponent": Page does not have @Injectable decorator it seems */
@Component({
  providers: [UserService, HeaderService],
  template: `
  <page-outlet></page-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }
}
