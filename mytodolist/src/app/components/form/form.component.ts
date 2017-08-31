import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../services/shared.service';

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

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentTask.subscribe(res => {
      this.title = res.title;
      this.description = res.desc;
      this.date = res.date;
      this.isDone = res.isDone;
    });
  }

}
