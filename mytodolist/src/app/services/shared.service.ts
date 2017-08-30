import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
  //Read (SharedService.currentList.subscribe(value => ...))
  //Update (SharedService.changeList(newList))

  private listArray: Array<Object> = [];
  private listSource = new BehaviorSubject<Array<Object>>(this.listArray); //Initial array
  public readonly list = this.listSource.asObservable();

  constructor() { }

  private next(message) {
    this.listSource.next(message);
  }

  addTask(task: Object) {
    this.listArray.push(task);
    this.next(this.listArray);
  }

  deleteTask(task: Object) {
    var t;
    for (var i = 0; i <= this.listArray.length - 1; i++) {
      t = this.listArray[i];

      if (JSON.stringify(task) === JSON.stringify(t)) {
        this.listArray.splice(i, 1);
      }
    }
    this.next(this.listArray);
  }

}