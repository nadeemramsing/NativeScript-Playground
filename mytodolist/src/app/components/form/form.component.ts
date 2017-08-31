import { Component, OnInit } from '@angular/core';

import { SharedService } from './../../services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  protected title: String;
  protected description: String;
  protected date: Date;
  protected isDone: Boolean;

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute) { }

  public passDate(date) {
    this.date = date;
  }

  ngOnInit(): void {
    this.sharedService.currentTask.subscribe(res => {
      //Using SharedService, Observable and Subject
      this.title = res.title;
      this.description = res.desc;
      this.date = res.date;
      this.isDone = res.isDone;

      //Using queryParams
      this.activatedRoute.queryParams.subscribe(params => {
        var task = JSON.parse(params.task);

        this.title = task.title;
        this.description = task.desc;
        this.date = task.date;
        this.isDone = task.isDone;
      });

      //Using routeParams (not implemented)
      /* this.activatedRoute.params.subscribe(task => console.log(task)); */
    });
  }

}
