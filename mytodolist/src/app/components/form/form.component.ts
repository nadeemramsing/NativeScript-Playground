import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';

import { SharedService } from './../../services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('form')
  private formRef: ElementRef;
  protected formGroup: FormGroup;

  protected title: String;
  protected description: String;
  protected date: Date;
  protected isDone: Boolean;

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      date: '',
      title: '',
      description: '',
      isDone: ''
    });
  }

  public passDate(date) {
    this.date = date;
  }

  ngOnInit(): void {
    this.sharedService.currentTask.subscribe(res => {
      //Using SharedService, Observable and Subject
      /* this.title = res.title;
      this.description = res.desc;
      this.date = res.date;
      this.isDone = res.isDone; */

      //~formGroup
      this.formGroup.patchValue({
        title: res.title,
        description: res.desc,
        date: res.date,
        isDone: res.isDone
      });

      //setValue => MUST include all values/fields
      //GETTING ERROR
      /* this.formGroup.setValue({
        title: res.title,
        description: res.desc,
        date: res.date,
        isDone: res.isDone
      }); */

      //Using queryParams
      /* this.activatedRoute.queryParams.subscribe(params => {
        var task = JSON.parse(params.task);

        this.title = task.title;
        this.description = task.desc;
        this.date = task.date;
        this.isDone = task.isDone;
      }); */

      //Using routeParams (not implemented)
      /* this.activatedRoute.params.subscribe(task => console.log(task)); */
    });

    
    //It's like watching formGroup
    this.formGroup.get('date').valueChanges.subscribe(newDate => { /* console.log(newDate) */ });
  }

}
