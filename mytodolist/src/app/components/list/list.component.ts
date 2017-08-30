import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  /* @ViewChild('task') */
  protected task;

  protected list: Array<Object> = [];

  constructor() { }

  public getList(): Array<Object> {
    return this.list;
  }

  public addTask(desc): void {
    if (desc) {

      var task = {
        desc: desc
      };
      this.list.push(task);
      /* this.task.value = ""; */ //Not binded to view => initialize value directly in view
    }
  }

  ngOnInit() { }

}
