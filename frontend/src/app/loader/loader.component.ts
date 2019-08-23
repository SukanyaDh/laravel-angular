import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private loader: LoaderService) { }
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loader.isLoading;
  ngOnInit() {
  }

}
