import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav: any;
  
  constructor() {}
  
  ngOnInit(): void {
    
  }

  test = function(value) {
    debugger;
  }

}
