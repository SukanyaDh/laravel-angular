import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  config: any;
  totalItem: any;
  constructor() {
    
   }

  startedEditing = new Subject<number>();
  index:number;
  setIndex(index)
  {
    return index;
  }
  pageChanged(event){
    
    this.config.currentPage = event;
  }
  setConfig(totalItem)
  {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: totalItem
    };
    return this.config;
  }
}
