import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  age: Number;

  @Input()
  name: String;

  @Output()
  ageEvent = new EventEmitter();

  emitAge() {
    this.ageEvent.emit(this.age);
  }

  constructor() { }

  ngOnInit() {
  }

}
