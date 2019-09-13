import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app//services/auth.service';
import { Router } from '@angular/router';
import { ApiresponseService } from 'src/app/services/apiresponse.service';
import { TokenService } from 'src/app/services/token.service';
import { SnotifyService } from 'ng-snotify';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
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
  subscription: Subscription;
  public editedItem;
  constructor(private apicall:ApiresponseService,private tokenData:TokenService,private auth:AuthService,private router:Router, private notify:SnotifyService, private shared:SharedService) { }
  onSubmit()
  {
    if(this.router.url=="/categories/add")
    {
      this.apicall.addCategory(this.form).subscribe(
        data=>this.handleResponse(data),
        error=>this.handleErrors(error)
      );
    }
    else
    {
      this.apicall.updateCategory(this.form,this.shared.index).subscribe(
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
    console.log(this.error);
  }
  ngOnInit() {
    if(this.shared.index)
    {
      if(this.router.url!="/categories/add")
      {
        //this.categoryInfo = this.shared.index;
      this.apicall.showCategory(this.shared.index).subscribe(
        (data:any)=>{
          console.log(data.category.name);
          this.form.name = data.category.name;
          this.form.description = data.category.description;
          //this.router.navigateByUrl('/categories/edit/'+this.shared.index);
        }
          
      );
      }
      
    }
    
    /* console.log("here");
    this.subscription = this.shared.startedEditing.subscribe(
      (index: number) => {
        console.log(index);
        this.editedItem = this.apicall.showCategory(index);
        console.log(this.editedItem);
        this.form.name = this.editedItem.name;
        this.form.description = this.editedItem.description;
        /* this.form.({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        }) */
     /*  }
    );
    console.log(this.subscription); */ 
    /* console.log(this.router.url);
    if(this.router.url!="/categories/add")
    {
      this.categoryInfo = JSON.parse(localStorage.getItem('categoryInfo'));
      this.form.name = this.categoryInfo.name;
      this.form.description = this.categoryInfo.description;
    }
    else
    {
      localStorage.removeItem('categoryInfo');
    } */
  }

  
}
