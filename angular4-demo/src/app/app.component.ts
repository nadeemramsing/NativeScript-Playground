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
  public showList: boolean;

  //can define model here directly
  name = 'Nadeem';
  data;
  dataString;

  constructor(private dataService: DataServiceService) { //MUST have private or public (=> becomes an instance property)
    this.title = "app";
    this.color = "blue";
    this.showList = true;
    //debugger;

    /* this.getData = function () { //Not callable when in constructor
      this.data = dataService.getData();
    } */
  }

  public getData = function (): void { //A parameter property is only allowed in a constructor implement => Must NOT have private or public
    this.data = this.dataService.getDataClient().body;
    this.dataString = JSON.stringify(this.dataService.getDataClient().body);
  }

  public print = function (event) {
    debugger;
    this.printClicked.emit("print() clicked.");
    console.log("My name is " + this.name);
  }

  public returnName(): string {
    return this.name;
  }

  ngOnInit() {
    console.log("Component initialization completed.");

  }

}
