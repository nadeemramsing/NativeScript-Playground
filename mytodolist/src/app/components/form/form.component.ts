import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
