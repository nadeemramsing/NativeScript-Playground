import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  name = 'Nadeem';

  constructor() {
    this.title = "app";
  }

  print = function () {
    console.log("My name is " + this.name);
  }

}
