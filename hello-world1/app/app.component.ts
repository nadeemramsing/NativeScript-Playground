import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <Image src="~/images/apple.jpg"></Image>
  `,
  styles: [`
  @keyframes spin {
    from { transform: rotate(0); } to { transform: rotate(360); }
  }
  Image {
    animation-name: spin; animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`]
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
