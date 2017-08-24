import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Hello, World." class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
  `
})

/* 
For the list of in-built components, go to: https://docs.nativescript.org/ui/basics
*/

export class AppComponent {
  // Your TypeScript logic goes here
  constructor() {
    console.log(this);
    debugger;
  }
}
