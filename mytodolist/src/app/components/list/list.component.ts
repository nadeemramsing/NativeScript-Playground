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
  /* @ViewChild('task') */
  protected task;
  protected list: Observable<Object>;

  constructor(private sharedService: SharedService) {
    this.list = this.sharedService.list;
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

  ngOnInit() { }

}
