import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app//services/auth.service';
import { Router } from '@angular/router';
import { ApiresponseService } from 'src/app/services/apiresponse.service';
import { TokenService } from 'src/app/services/token.service';
import { SnotifyService } from 'ng-snotify';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  public form = {
    name:null,
    description:null
  };
  public categoryInfo:any;
  public error = [];
  constructor(private apicall:ApiresponseService,private tokenData:TokenService,private auth:AuthService,private router:Router, private notify:SnotifyService) { }
  onSubmit()
  {
    if(!this.categoryInfo)
    {
      this.apicall.addCategory(this.form).subscribe(
        data=>this.handleResponse(data),
        error=>this.handleErrors(error)
      );
    }
    else
    {
      this.apicall.updateCategory(this.form,this.categoryInfo.category_id).subscribe(
        data=>this.handleResponse(data),
        error=>this.handleErrors(error)
      );
    }
    
  }
  handleResponse(data)
  {
    this.router.navigateByUrl('/categories');
    this.notify.success(data.success,{timeout:0});
  }

  handleErrors(error)
  {
    this.error = error.error.errors;
  }
  ngOnInit() {
    console.log(this.router.url);
    if(this.router.url!="/categories/add")
    {
      this.categoryInfo = JSON.parse(localStorage.getItem('categoryInfo'));
      this.form.name = this.categoryInfo.name;
      this.form.description = this.categoryInfo.description;
    }
    else
    {
      localStorage.removeItem('categoryInfo');
    }
  }

  
}
