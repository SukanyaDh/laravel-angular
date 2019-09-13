import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  startedEditing = new Subject<number>();
  index:number;
  setIndex(index)
  {
    return index;
  }
}
