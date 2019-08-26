import { Component, OnInit } from '@angular/core';
import { ApiresponseService } from '../services/apiresponse.service';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  public categories: [];
  public error = [];
  public categoryInfo:any;
  constructor(private apicall:ApiresponseService,private tokenData:TokenService,private auth:AuthService,private router:Router, private notify:SnotifyService) { }

  getCategories() {
    this.categories = [];
    this.apicall.listCategory().subscribe((data: []) => {
      console.log(data);
      this.categories = data['success'];
    });
  }
  onClick(categoryId)
  {
    this.apicall.showCategory(categoryId).subscribe(
      (data:any)=>{
        localStorage.setItem('categoryInfo',JSON.stringify(data.category));
        
        this.router.navigateByUrl('/categories/edit/'+categoryId);
      }
        
    );
  }

  onClickDelete(categoryId)
  {
    var r = confirm("Are you sure you want to delete this category?");
    if (r == true) {
      this.apicall.deleteCategory(categoryId).subscribe(
        data=>this.handleResponse(data),
        error=>this.handleErrors(error)
      );
    } else {
      this.getCategories();
    }
    
  }
  handleResponse(data)
  {
    this.getCategories();
    this.notify.success(data.success,{timeout:0});
  }

  handleErrors(error)
  {
    this.error = error.error.errors;
    console.log(this.error);
  }
  ngOnInit() {
    this.getCategories();
  
}
}
