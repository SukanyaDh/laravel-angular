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
    
    this.formProduct = this.formBuilder.group({
      name:['',Validators.compose([Validators.required,Validators.maxLength(5)])],
      description:['',[Validators.required]],
      category_id:['',[Validators.required]],
      price:['',[Validators.required,Validators.pattern("^[0-9]*$"),]]
    })
    
    /* this.formProduct = new FormGroup({
      name: new FormControl('', Validators.compose([  
        Validators.required,  
        Validators.minLength(1),   
        Validators.maxLength(10),
      ])), 
      description:new FormControl('',Validators.required),
      category_id:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required)
    }) */
    
  }

  checkControls(){
    this.formProduct.controls.name
   // debugger;
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
   //console.log(this.formProduct.controls);
    return this.formProduct.controls; 
  }
  get name()
  {
    return this.formProduct.get('name');
  }
  onSubmit()
  {
    this.submitted = true;
    if (this.formProduct.invalid) {
      return false;
    }
    else
    {
      console.log(this.formProduct.value);
    this.apiCall.addProduct(this.formProduct.value).subscribe(
      data=> this.handleResponse(data),
      error=> this.handleErrors(error)
     
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
    //this.error = error.error.errors;
    console.log(error);
  }

  ngOnInit() {
    this.getCategoryList();
    
  }

}
