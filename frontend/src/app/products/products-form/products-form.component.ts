import { Component, OnInit } from '@angular/core';
import { ApiresponseService } from 'src/app/services/apiresponse.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  constructor(private apiCall:ApiresponseService, private router:Router, private notify:SnotifyService, private formBuilder:FormBuilder) {
    this.createProductForm();
   }
  public form = {
    name:null,
    description:null,
    category_id:null,
    price:null
  };
  public submitted = false;
  formProduct: FormGroup;
  createProductForm()
  {
    console.log("here");
    this.formProduct = new FormGroup({
      name:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      category_id:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required)
    })
  }



  
  public error=[];
  public categoryList = [];

  getCategoryList()
  {
    this.apiCall.listCategoryDrodown().subscribe((data:[])=>{
      this.categoryList = data['success'];
      console.log(this.categoryList);
    })
  }
  get f() { 
   
    return this.formProduct.controls; 
  }
  
  onSubmit()
  {
    this.submitted = true;
    if (this.formProduct.invalid) {
      return false;
    }
    else
    {
      
    this.apiCall.addProduct(this.formProduct).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleErrors(error)

    )
    }
    
  }
  handleResponse(data)
  {
    this.router.navigateByUrl('/products');
    this.notify.success(data.success,{timeout:0});
  }

  handleErrors(error)
  {
    this.error = error.error.errors;
    console.log(this.error);
  }

  ngOnInit() {
    this.getCategoryList();
    this.formProduct = new FormGroup({
      name:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      category_id:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required)
    })
  }

}
