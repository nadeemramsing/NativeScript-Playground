import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  protected list: Array<Object> = [];

  constructor() { }

  public getList(): Array<Object> {
    return this.list;
  }

  public addTask(desc): void {
    debugger;
    var task = {
      desc: desc
    };
    this.list.push(task);
  }

  ngOnInit() { }

}
