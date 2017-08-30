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

  addTask(task: Object) {
    this.listArray.push(task);
    this.listSource.next(this.listArray);
  }

}
