import { Component, OnInit } from '@angular/core';
import { ApiresponseService } from '../services/apiresponse.service';
import { TokenService } from '../services/token.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  config: any;
  totalItem: any;
  constructor(private apiCall:ApiresponseService,private token:TokenService,private shared:SharedService) {
    this.config=this.shared.setConfig(this.totalItem);
   
   }
  getProducts()
  {
    this.apiCall.listProducts().subscribe((data:[])=>
    {
      
      this.products = data['success']
      this.totalItem = this.products.length
      console.log(this.products.length);
    }
    
      
    );
    
  }
  ngOnInit() {
    
    this.getProducts();
    
  }
  pageChanged(event){
    
    this.shared.pageChanged(event);
  }

}
