import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataServiceService]
})
export class AppComponent implements OnInit {
  @Output() printClicked = new EventEmitter();

  public title: string;
  //private color: string; //Warning: Identifier 'color' refers to a private member of the component
  protected color: string; //No warning

  //can define model here directly
  name = 'Nadeem';

  constructor(private dataService: DataServiceService) {
    this.title = "app";
    this.color = "blue";
    //debugger;
  }

  public print = function (event) {
    debugger;
    this.printClicked.emit("print() clicked.");
    console.log("My name is " + this.name);
  }

  ngOnInit() {
    console.log("Component initialization completed.");
  }

}
