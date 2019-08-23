import { Component, OnInit } from '@angular/core';
import { ApiresponseService } from '../services/apiresponse.service';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  public categories: [];
  public error = [];
  public categoryInfo:any;
  constructor(private apicall:ApiresponseService,private tokenData:TokenService,private auth:AuthService,private router:Router) { }

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

  ngOnInit() {
    this.getCategories();
  
}
}
