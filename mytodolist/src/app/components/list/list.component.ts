import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [SharedService]
})
export class ListComponent implements OnInit {
  /* @ViewChild('task') */ //Will work when two-way binded (using [(ngModel)] or (input)="task = $event.target.value")
  protected task;
  protected list: Observable<Array<Object>>;
  protected listLength: number;

  constructor(private sharedService: SharedService) {
    this.list = this.sharedService.list;
    this.list.subscribe(res => {
      this.listLength = res.length;

      //init task
      for (var index in res) {
        res[index]['isEdit'] = false;
      }
    });
  }

  public addTask(desc): void {
    if (desc) {

      var task = {
        desc: desc
      };
      this.sharedService.addTask(task);
      /* this.task.value = ""; */ //Not binded to view => initialize value directly in view
    }
  }

  public deleteTask(task): void {
    this.sharedService.deleteTask(task);
  }

  public editTask(task): void {
    this.deleteTask(task);
    this.addTask(task.desc);
  }

  ngOnInit() { }
}
